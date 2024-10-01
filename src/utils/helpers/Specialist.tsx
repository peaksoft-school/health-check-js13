const Specialist = ({ row }: any) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
      <>
        <div style={{ width: '40px', height: '40px', cursor: 'pointer' }}>
          <img
            src={row.original.image}
            style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            alt=""
          />
        </div>
        <div>
          <div>
            {row.original.firstName} {row.original.lastName}{' '}
          </div>
          <div style={{ fontSize: '13px', color: 'gray' }}>
            {row.original.specialization}
          </div>
        </div>
      </>
    </div>
  );
};
export default Specialist;
