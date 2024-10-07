import { useNavigate } from 'react-router-dom';
import UpdateIcon from '../../assets/icons/UpdateIcon.svg';
import Delete from '../../components/UI/admin/Delete';
import { deleteDoctore } from '../../store/slices/adminSpecialist/adminSpecialistThunk';

const ActionsStatus = ({ row, searche }: any) => {
  const navigate = useNavigate();

  const updateSpec = () => {
    navigate(`${row.original.id}/infoSpec`);
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 20,
      }}>
      <div style={{ margin: '5px 0 0 0' }} onClick={updateSpec}>
        <UpdateIcon />
      </div>
      <Delete
        value={searche}
        name={`${row.original.firstName} ${row.original.lastName}`}
        variant="spec"
        deleteFn={deleteDoctore}
        id={row.original.id}
        isProcessed={!row.original.isActive}
      />
    </div>
  );
};

export default ActionsStatus;
