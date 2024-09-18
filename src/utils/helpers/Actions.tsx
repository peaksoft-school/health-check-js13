import { useNavigate } from 'react-router-dom';
import UpdateIcon from '../../assets/icons/UpdateIcon.svg';
import Delete from '../../components/UI/admin/Delete';

const ActionsStatus = ({ row }: any) => {
  const navigate = useNavigate();
  const updateSpec = () => {
    navigate(`${row.original.id}/infoSpec`);
    console.log(row);
  };
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 20,
      }}>
      <div onClick={updateSpec}>
        <UpdateIcon />
      </div>
      <Delete />
    </div>
  );
};

export default ActionsStatus;
