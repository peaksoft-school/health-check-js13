import { useEffect, useState } from 'react';
import Switcher from '../../../components/UI/Switcher';
import { useAppDispatch } from '../../../hooks/customHooks';
import { changeStatus } from '../../../store/slices/adminSpecialist/adminSpecialistThunk';

const SpecialistSwitcher = ({
  id,
  isActive,
  searche,
}: {
  id: any;
  isActive: boolean;
  searche: string;
}) => {
  const [isChecked, setChecked] = useState(isActive);
  const dispatch = useAppDispatch();

  const handleToggle = (checked: any) => {
    setChecked(checked);
    dispatch(changeStatus({ id, checked, searche }));
  };

  useEffect(() => {
    setChecked(isActive);
  }, [isActive]);

  return (
    <Switcher
      checked={isChecked}
      onChange={e => handleToggle(e.target.checked)}
    />
  );
};

export default SpecialistSwitcher;
