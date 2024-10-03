import { FC, useState } from 'react';
import { Button, styled } from '@mui/material';

const daysOfWeek: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

const RepeatDaysButtons: FC = () => {
  const [activeDays, setActiveDays] = useState<string[]>([]);

  const handleButtonClick = (day: string) => {
    setActiveDays(prev =>
      prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
    );
  };

  return (
    <RepeatDaysButtonsContainer>
      {daysOfWeek.map(day => (
        <div key={day} style={{ marginRight: '8px' }}>
          <Button
            onClick={() => handleButtonClick(day)}
            sx={{ minWidth: '53px', minHeight: '42px', borderRadius: '10px' }}
            style={{
              backgroundColor: activeDays.includes(day) ? '#3977C0' : '#fff',
              color: activeDays.includes(day) ? '#fff' : '#959595',
              border: activeDays.includes(day)
                ? '1px solid #3977C0'
                : '1px solid #D9D9D9',
              boxShadow: 'none',
              padding: '6px 12px',
            }}>
            {day}
          </Button>
        </div>
      ))}
    </RepeatDaysButtonsContainer>
  );
};

export default RepeatDaysButtons;

const RepeatDaysButtonsContainer = styled('div')({
  display: 'flex',
  margin: '4px 50px 0 0',
});
