import { useEffect, useRef } from 'react';
import { getDocument } from 'pdfjs-dist';

const PdfRend = ({ pdfUrl }: { pdfUrl: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const renderPDF = async () => {
      const loadingTask = getDocument(pdfUrl);
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
          viewport: viewport,
        };

        await page.render(renderContext).promise;
      }
    };

    renderPDF();
  }, [pdfUrl]);

  return <canvas ref={canvasRef} />;
};

export default PdfRend;
