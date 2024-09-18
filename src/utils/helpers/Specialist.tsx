const Specialist = ({ row }: any) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <>
        <div style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
          <img
            src={row.original.doctor.image}
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            alt=""
          />
        </div>
        <div>
          <div>{row.original.doctor.name}</div>
          <div style={{ fontSize: '13px', color: 'gray' }}>
            {row.original.doctor.specialization}
          </div>
        </div>
      </>
    </div>
  );
};
export default Specialist;
