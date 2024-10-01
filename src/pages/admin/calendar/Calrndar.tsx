import './calendar.css';
import profile from '../../../assets/images/Frame 581.png';

const Arr = [
  {
    id: 1,
    doctorImage: '',
    doctorName: 'Манак Елена',
    doctorSpecialization: 'Врач-хирург',
    entry: [
      { data: '2024-09-01', time: { hour: 10, minute: 0, second: 0, nano: 0 } },
      { data: '2024-09-27', time: { hour: 11, minute: 0, second: 0, nano: 0 } },
      { data: '2024-09-28', time: { hour: 0, minute: 0, second: 0, nano: 0 } },
      { data: '2024-09-29', time: { hour: 0, minute: 0, second: 0, nano: 0 } },
    ],
    status: 'CANCELLED',
  },
  {
    id: 2,
    doctorImage: '',
    doctorName: 'Гаталуский Артур',
    doctorSpecialization: 'Ортопед',
    entry: [
      { data: '2024-09-27', time: { hour: 10, minute: 0, second: 0, nano: 0 } },
      { data: '2024-09-27', time: { hour: 11, minute: 0, second: 0, nano: 0 } },
      { data: '2024-09-28', time: { hour: 0, minute: 0, second: 0, nano: 0 } },
      { data: '2024-09-29', time: { hour: 0, minute: 0, second: 0, nano: 0 } },
    ],
    status: 'CANCELLED',
  },
  {
    id: 3,
    doctorImage: '',
    doctorName: 'Иван Иваныч',
    doctorSpecialization: 'Кардиолог',
    entry: [
      { data: '2024-09-27', time: { hour: 10, minute: 0, second: 0, nano: 0 } },
      { data: '2024-09-27', time: { hour: 11, minute: 0, second: 0, nano: 0 } },
      { data: '2024-09-28', time: { hour: 0, minute: 0, second: 0, nano: 0 } },
      { data: '2024-09-01', time: { hour: 9, minute: 0, second: 0, nano: 0 } },
      { data: '2024-09-29', time: { hour: 0, minute: 0, second: 0, nano: 0 } },
    ],
    status: 'CANCELLED',
  },
];

const HorizontalScrollCalendar = () => {
  const generateDays = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray = [];
    const weekdays = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = `${year}-${(month + 1).toString().padStart(2, '0')}-${day
        .toString()
        .padStart(2, '0')}`;

      daysArray.push({
        date,
        dayOfWeek: weekdays[(new Date(date).getDay() + 6) % 7],
      });
    }

    return daysArray;
  };

  const today = new Date().toISOString().split('T')[0];

  const getMonthName = date => {
    return date.toLocaleString('default', { month: 'long' });
  };

  const click = (id, data) => {
    console.log(`ID: ${id}, Date: ${data}`);
  };

  return (
    <div className="horizontal-calendar-container">
      <div className="calendar-grid">
        <div className="calendar-column header large-element">Специалисты</div>

        {generateDays().map(dayInfo => {
          const date = new Date(dayInfo.date);
          const monthName = getMonthName(date);

          return (
            <div
              key={dayInfo.date}
              className={`calendar-column header ${
                today === dayInfo.date ? 'today' : ''
              }`}>
              <div id={dayInfo.date} className="day-header">
                {dayInfo.dayOfWeek} <br /> {date.getDate()} {monthName}
              </div>
            </div>
          );
        })}
      </div>

      {Arr.map(
        ({ id, doctorName, doctorSpecialization, entry, doctorImage }) => {
          return (
            <div className="calendar-grid" key={id}>
              <div className="calendar-column large-element">
                <img src={doctorImage || profile} alt="img" />

                <p className="doctor-name">{doctorName}</p>
                <p className="doctor-specialization">{doctorSpecialization}</p>
              </div>
              {generateDays().map(dayInfo => {
                return (
                  <button
                    onClick={() => click(id, dayInfo.date)}
                    key={dayInfo.date}
                    className={`calendar-column ${
                      today === dayInfo.date ? 'today' : ''
                    }`}>
                    {entry
                      .filter(({ data }) => data === dayInfo.date)
                      .map(({ data, time }, index) => (
                        <div className="tasks" key={index} id={data}>
                          {String(time.hour).padStart(2, '0')}:
                          {String(time.minute).padStart(2, '0')} -{' '}
                          {String(time.hour + 1).padStart(2, '0')}:
                          {String(time.minute).padStart(2, '0')}
                        </div>
                      ))}
                  </button>
                );
              })}
            </div>
          );
        }
      )}
    </div>
  );
};

export default HorizontalScrollCalendar;
