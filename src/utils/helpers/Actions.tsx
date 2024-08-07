import Korzina from '../../assets/icons/Korzina.svg';
import UpdateIcon from '../../assets/icons/UpdateIcon.svg';

const ActionsStatus = () => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'start',
      gap: 20,
    }}>
    <img
      style={{ display: 'block', cursor: 'pointer' }}
      src={UpdateIcon}
      alt="edit"
    />
    <img
      style={{ display: 'block', cursor: 'pointer' }}
      src={Korzina}
      alt="delete"
    />
  </div>
);

export default ActionsStatus;
