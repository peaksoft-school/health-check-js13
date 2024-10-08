import { useEffect, useRef } from 'react';

const PdfRenderer = ({ pdfUrl }: { pdfUrl: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null); // Для отмены

  useEffect(() => {
    const loadPdf = async () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      abortControllerRef.current = new AbortController();

      const loadingTask = (window as any).pdfjsLib.getDocument({
        url: pdfUrl,
        signal: abortControllerRef.current.signal,
      });

      try {
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(1);
        const viewport = page.getViewport({ scale: 1.5 });

        const canvas = canvasRef.current;
        const context = canvas?.getContext('2d');

        if (canvas && context) {
          canvas.height = viewport.height;
          canvas.width = viewport.width;

          const renderContext = {
            canvasContext: context,
            viewport,
          };

          await page.render(renderContext).promise;
        }
      } catch (error: any) {
        if (error.name === 'AbortError') {
          console.log('Отрисовка PDF отменена');
        } else {
          console.error('Ошибка при загрузке PDF:', error);
        }
      }
    };

    loadPdf();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [pdfUrl]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default PdfRenderer;
