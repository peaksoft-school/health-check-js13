import './calendar.css';
import profile from '../../../assets/images/Frame 581.png';
import CloseIcon from '../../../assets/icons/CloseIcon.svg';
import CloseRed from '../../../assets/icons/close-red.svg';
import Modal from '../../../components/UI/Modal';
import { useState } from 'react';

interface Time {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

interface Entry {
  data: string;
  time: Time;
}

interface Doctor {
  id: number;
  doctorImage: string;
  doctorName: string;
  doctorSpecialization: string;
  entry: Entry[];
  status: string;
}

const Arr: Doctor[] = [
  {
    id: 1,
    doctorImage: '',
    doctorName: 'Манак Елена',
    doctorSpecialization: 'Врач-хирург',
    entry: [
      { data: '2024-10-01', time: { hour: 10, minute: 0, second: 0, nano: 0 } },
      { data: '2024-10-01', time: { hour: 11, minute: 0, second: 0, nano: 0 } },
      { data: '2024-10-02', time: { hour: 0, minute: 0, second: 0, nano: 0 } },
      { data: '2024-10-03', time: { hour: 0, minute: 0, second: 0, nano: 0 } },
    ],
    status: 'CANCELLED',
  },
  {
    id: 2,
    doctorImage: '',
    doctorName: 'Гаталуский Артур',
    doctorSpecialization: 'Ортопед',
    entry: [
      { data: '2024-10-01', time: { hour: 10, minute: 0, second: 0, nano: 0 } },
      { data: '2024-10-01', time: { hour: 11, minute: 0, second: 0, nano: 0 } },
      { data: '2024-10-05', time: { hour: 0, minute: 0, second: 0, nano: 0 } },
      { data: '2024-10-04', time: { hour: 0, minute: 0, second: 0, nano: 0 } },
    ],
    status: 'CANCELLED',
  },
  {
    id: 3,
    doctorImage: '',
    doctorName: 'Иван Иваныч',
    doctorSpecialization: 'Кардиолог',
    entry: [
      { data: '2024-10-01', time: { hour: 10, minute: 0, second: 0, nano: 0 } },
      { data: '2024-10-01', time: { hour: 11, minute: 0, second: 0, nano: 0 } },
      { data: '2024-10-03', time: { hour: 0, minute: 0, second: 0, nano: 0 } },
      { data: '2024-10-04', time: { hour: 9, minute: 0, second: 0, nano: 0 } },
      { data: '2024-10-06', time: { hour: 0, minute: 0, second: 0, nano: 0 } },
    ],
    status: 'CANCELLED',
  },
];

interface ModalDataType {
  branch: string;
  doctorName: string;
  data: string | number;
  times?: Time[] | null;
}

let ModalData: ModalDataType = {
  branch: '',
  doctorName: '',
  data: 0,
};

const HorizontalScrollCalendar = () => {
  const [graficks, setGraficks] = useState<object[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const generateDays = (): { date: string; dayOfWeek: string }[] => {
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

  const getMonthName = (date: Date): string => {
    return date.toLocaleString('default', { month: 'long' });
  };

  const click = (id: number, data: string) => {
    const doctorEntry = Arr.find(doctor => doctor.id === id);
    const selectedEntries = doctorEntry?.entry.filter(
      entry => entry.data === data
    );

    setOpenModal(true);
    ModalData = {
      branch: doctorEntry?.doctorSpecialization || '',
      doctorName: doctorEntry?.doctorName || '',
      data: data,
      times: selectedEntries ? selectedEntries.map(entry => entry.time) : null,
    };
  };

  const closeModal = () => {
    setOpenModal(false);
  };

  const addGrafick = () => {
    setGraficks([...graficks, {}]);
  };

  const removeGrafick = (index: number) => {
    setGraficks(graficks.filter((_, i) => i !== index));
  };

  return (
    <div className="horizontal-calendar-container">
      <div className="calendar-grid">
        <div className="calendar-column header large-element">Специалисты</div>
        <Modal open={openModal}>
          <div className="modal">
            <h2 className="h2__name">Изменить шаблон</h2>

            <div className="shablon">
              <p className="name__shablon">Отделение: </p>
              <p>{ModalData.branch}</p>

              <p className="name__shablon">Специалист:</p>
              <p>{ModalData.doctorName}</p>

              <p className="name__shablon">Дата:</p>
              <p>{ModalData.data}</p>
            </div>

            <div className="grafick__ocloke">
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className="grafick__name">График:</p>

                {ModalData.times && ModalData.times.length > 0 ? (
                  <>
                    {ModalData.times.map((time, index) => (
                      <div key={index} className="block__times">
                        <span>
                          {String(time.hour).padStart(2, '0')}:
                          {String(time.minute).padStart(2, '0')}
                        </span>
                        <button
                          className="close__red"
                          onClick={() => removeGrafick(index)}>
                          <CloseRed />
                        </button>
                      </div>
                    ))}
                  </>
                ) : (
                  <div>
                    <input className="input" type="number" placeholder="00 ч" />
                    <input className="input" type="number" placeholder="00 м" />
                    -
                    <input className="input" type="number" placeholder="00 ч" />
                    <input className="input" type="number" placeholder="00 м" />
                  </div>
                )}
              </div>

              {graficks.map((_, index) => (
                <div key={index} className="grafick">
                  <input className="input" type="number" placeholder="00 ч" />
                  <input className="input" type="number" placeholder="00 м" />-
                  <input className="input" type="number" placeholder="00 ч" />
                  <input className="input" type="number" placeholder="00 м" />
                  <button
                    className="close__red"
                    onClick={() => removeGrafick(index)}>
                    <CloseRed />
                  </button>
                </div>
              ))}

              <button className="add__button" onClick={addGrafick}>
                + Добавить интервал
              </button>
            </div>

            <div className="button__container">
              <button className="button__modal left" onClick={closeModal}>
                Отменить
              </button>
              <button className="button__modal right">Сохранить</button>
            </div>
            <button className="close" onClick={closeModal}>
              <CloseIcon />
            </button>
          </div>
        </Modal>

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
                    className={`calendar-column `}>
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
