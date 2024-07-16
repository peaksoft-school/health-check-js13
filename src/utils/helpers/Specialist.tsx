interface ITypes {
  name: string;
  img: string;
  professi: string;
}
const Specialist = ({ row }: ITypes) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      {typeof row.original.name === 'object' ? (
        <>
          <img
            src={row.original.name.img}
            alt="specialist"
            style={{ width: '40px', height: '40px', cursor: 'pointer' }}
          />
          <div>
            <div>{row.original.name.name}</div>
            <div style={{ fontSize: '13px', color: 'gray' }}>
              {row.original.name.professi}
            </div>
          </div>
        </>
      ) : (
        <div>{row.original}</div>
      )}
    </div>
  );
};

export default Specialist;
