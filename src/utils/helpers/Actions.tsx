import Korzina from '../../assets/icons/Korzina.svg';
import UpdateIcon from '../../assets/icons/UpdateIcon.svg';

const ActionsStatus = ({ row }: any) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
        gap: 20,
      }}>
      <UpdateIcon />
      <Korzina />
    </div>
  );
};

export default ActionsStatus;
