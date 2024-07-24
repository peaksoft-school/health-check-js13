// import { FC } from 'react';
// import Button from '../../components/UI/Button';
// import {  styled } from '@mui/material';
// import { color, height, width } from '@mui/system';

// const Price: FC = () => {
//   return (
//     <PriceContainer>
//       <div className="container">
//         <div className="content">
//           <div className="Cards">
//             <div className="contentPrice">
//               <span>Наш прайс</span>
//             </div>
//             <p>
//               Цены на услуги формируются в соответствии с действующими
//               Прейскурантами. Общая стоимость зависит от объема услуг,
//               оказываемых в рамках приёма. Объём оказываемых услуг определяется
//               врачом, исходя из показаний для обследования и пожеланий клиента.
//             </p>
//           </div>
//           <div>
//             <Button>Консультация и диагностика</Button>
//             <Button>Аллергология</Button>
//             <Button>Анестезиология</Button>
//             <Button>Вакцинация</Button>
//             <Button>Гастроэнтерология</Button>
//             <Button>Гинекология</Button>
//             <Button>Дерматология</Button>
//             <Button>Кардиология</Button>
//             <Button>Неврология</Button>
//             <Button>Нейрохирургия</Button>
//             <Button>Онкология</Button>
//             <Button>Ортопедия</Button>
//             <Button>Оториноларингология</Button>
//             <Button>Офтальмология</Button>
//             <Button>Проктология</Button>
//             <Button>Психтерапия</Button>
//             <Button>Пульмонология</Button>
//             <Button>Ревмотология</Button>
//             <Button>Терапия</Button>
//             <Button>Урология</Button>
//             <Button>Флебология</Button>
//             <Button>Физиотерапия</Button>
//             <Button>Эндокринология</Button>
//           </div>
//         </div>
//       </div>
//     </PriceContainer>
//   );
// };

// export default Price;

// const PriceContainer = styled('div')(() => ({
//   width: '100%',
//   maxWidth: '1440px',
//   minWidth: '1200px',
//   margin: '0 auto',
//   '.content': {
//     display: 'flex',
//     // justifyContent: 'center',
//     // alignItems: 'center',
//     flexDirection: 'column',
//     'Cards': {
//       width: '691px',
//       height: '183px',
//       '.contentPrice': {
//         span: {
//           fontSize: '36px',
//           fontFamily: '"Poppins", sans-serif',
//         },
//       },
//       p: {
//         fontSize: '18px',
//         fontFamily: '"Poppins", sans-serif',
//         color: '#4D4E51',
//       },
//     },
//   },
// }));

// !!!

// import { FC } from 'react';
// import Button from '../../components/UI/Button';
// import { styled } from '@mui/material';
// import Icons from '../../../src/assets/icons/Indicator.svg';
// import ImageIcon from '../../../src/assets/icons/IndicatorIcon.svg';

// const Price: FC = () => {
//   return (
//     <PriceContainer>
//       <div className="container">
//         <div className="content">
//           <div className="Cards">
//             <div className="contentPrice">
//               <span>Наш прайс</span>
//             </div>
//             <p>
//               Цены на услуги формируются в соответствии с действующими
//               Прейскурантами. Общая стоимость зависит от объема услуг,
//               оказываемых в рамках приёма. Объём оказываемых услуг определяется
//               врачом, исходя из показаний для обследования и пожеланий клиента.
//             </p>
//           </div>
//           <div className="ButtonContent">
//             <ButtonClass>Консультация и диагностика</ButtonClass>
//             {/* <img src={icons} alt="" /> */}
//             <ButtonClass>Аллергология</ButtonClass>
//             <ButtonClass>Анестезиология</ButtonClass>
//             <ButtonClass>Вакцинация</ButtonClass>
//             <ButtonClass>Гастроэнтерология</ButtonClass>
//             <ButtonClass>Гинекология</ButtonClass>
//             <ButtonClass>Дерматология</ButtonClass>
//             <ButtonClass>Кардиология</ButtonClass>
//             <ButtonClass>Неврология</ButtonClass>
//             <ButtonClass>Нейрохирургия</ButtonClass>
//             <ButtonClass>Онкология</ButtonClass>
//             <ButtonClass>Ортопедия</ButtonClass>
//             <ButtonClass>Оториноларингология</ButtonClass>
//             <ButtonClass>Офтальмология</ButtonClass>
//             <ButtonClass>Проктология</ButtonClass>
//             <ButtonClass>Психтерапия</ButtonClass>
//             <ButtonClass>Пульмонология</ButtonClass>
//             <ButtonClass>Ревмотология</ButtonClass>
//             <ButtonClass>Терапия</ButtonClass>
//             <ButtonClass>Урология</ButtonClass>
//             <ButtonClass>Флебология</ButtonClass>
//             <ButtonClass>Физиотерапия</ButtonClass>
//             <ButtonClass>Эндокринология</ButtonClass>
//           </div>
//         </div>
//       </div>
//     </PriceContainer>
//   );
// };

// export default Price;

// const PriceContainer = styled('div')(() => ({
//   width: '100%',
//   maxWidth: '1440px',
//   minWidth: '1200px',
//   margin: '0 auto',
//   '.content': {
//     display: 'flex',
//     flexDirection: 'column',
//     '.Cards': {
//       width: '691px',
//       height: '183px',
//       marginLeft: '100px',
//       '.contentPrice': {
//         span: {
//           fontSize: '36px',
//           fontFamily: '"Poppins", sans-serif',
//         },
//       },
//       p: {
//         fontSize: '18px',
//         fontFamily: '"Poppins", sans-serif',
//         color: '#4D4E51',
//       },
//     },
//     '.ButtonContent': {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '16px',
//       marginTop: '40px',
//       marginLeft: '100px',
//     },
//   },
// }));

// const ButtonClass = styled(Button)(() => ({
//   '&.MuiButtonBase-root': {
//     width: '852px',
//     height: '50px',
//     // borderRadius: '24px',
//     // border: '1px solid #048741',
//     // padding: '10px 0 0 0',
//     fontSize: '20px',
//     // color: '#048741',
//     // transition: '0.7s',
//     // '&:hover': {
//     //   backgroundColor: '#0CBB6B',
//     //   color: '#FFFFFF',
//     //   padding: '10px',
//     // },
//   },
// }));

// !!!!!!

// import { FC, useState } from 'react';
// import Button from '../../components/UI/Button';
// import { styled } from '@mui/material';
// import { Cards } from '../../utils/constants/Price';

// const Price: FC = () => {
//   const [selectedCard, setSelectedCard] = useState<number | null>(null);

//   const handleButtonClick = (id: number) => {
//     setSelectedCard(id === selectedCard ? null : id);
//   };

//   return (
//     <PriceContainer>
//       <div className="container">
//         <div className="content">
//           <div className="Cards">
//             <div className="contentPrice">
//               <span>Наш прайс</span>
//             </div>
//             <p>
//               Цены на услуги формируются в соответствии с действующими
//               Прейскурантами. Общая стоимость зависит от объема услуг,
//               оказываемых в рамках приёма. Объём оказываемых услуг определяется
//               врачом, исходя из показаний для обследования и пожеланий клиента.
//             </p>
//           </div>
//           <div className="ButtonContent">
//             <ButtonClass onClick={() => handleButtonClick(1)}>
//               Консультация и диагностика
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(2)}>
//               Аллергология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(3)}>
//               Анестезиология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(4)}>
//               Вакцинация
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(5)}>
//               Гастроэнтерология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(6)}>
//               Гинекология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(7)}>
//               Дерматология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(8)}>
//               Кардиология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(9)}>
//               Неврология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(10)}>
//               Нейрохирургия
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(11)}>
//               Онкология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(12)}>
//               Ортопедия
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(13)}>
//               Оториноларингология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(14)}>
//               Офтальмология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(15)}>
//               Проктология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(16)}>
//               Психтерапия
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(17)}>
//               Пульмонология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(18)}>
//               Ревмотология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(19)}>
//               Терапия
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(20)}>
//               Урология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(21)}>
//               Флебология
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(22)}>
//               Физиотерапия
//             </ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(23)}>
//               Эндокринология
//             </ButtonClass>
//           </div>
//           {selectedCard && (
//             <div className="SelectedCard">
//               {Cards.map(card =>
//                 card.id === selectedCard ? (
//                   <div key={card.id}>
//                     <h3>{card.name}</h3>
//                     <p>{card.priceNumber}</p>
//                     <p>{card.text}</p>
//                     <p>{card.infor}</p>
//                     <p>{card.inforNumber}</p>
//                     <p>{card.infor2}</p>
//                     <p>{card.infor2Number}</p>
//                   </div>
//                 ) : null
//               )}
//             </div>
//           )}
//         </div>
//       </div>
//     </PriceContainer>
//   );
// };

// export default Price;

// const PriceContainer = styled('div')(() => ({
//   width: '100%',
//   maxWidth: '1440px',
//   minWidth: '1200px',
//   margin: '0 auto',
//   '.content': {
//     display: 'flex',
//     flexDirection: 'column',
//     '.Cards': {
//       width: '691px',
//       height: '183px',
//       marginLeft: '100px',
//       '.contentPrice': {
//         span: {
//           fontSize: '36px',
//           fontFamily: '"Poppins", sans-serif',
//         },
//       },
//       p: {
//         fontSize: '18px',
//         fontFamily: '"Poppins", sans-serif',
//         color: '#4D4E51',
//       },
//     },
//     '.ButtonContent': {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '16px',
//       marginTop: '40px',
//       marginLeft: '100px',
//     },
//     '.SelectedCard': {
//       marginTop: '20px',
//       marginLeft: '100px',
//       h3: {
//         fontSize: '24px',
//         fontFamily: '"Poppins", sans-serif',
//       },
//       p: {
//         fontSize: '18px',
//         fontFamily: '"Poppins", sans-serif',
//         color: '#4D4E51',
//       },
//     },
//   },
// }));

// const ButtonClass = styled(Button)(() => ({
//   '&.MuiButtonBase-root': {
//     width: '852px',
//     height: '50px',
//     fontSize: '20px',
//   },
// }));

// !!!!!!!

// import { FC, useState } from 'react';
// import Button from '../../components/UI/Button';
// import { styled } from '@mui/material';
// import Icons from '../../../src/assets/icons/Indicator.svg';
// import ImageIcon from '../../../src/assets/icons/IndicatorIcon.svg';
// import { Cards } from '../../utils/constants/Price';

// const Price: FC = () => {
//   const [selectedButtonId, setSelectedButtonId] = useState<number | null>(null);

//   const handleButtonClick = (id: number) => {
//     setSelectedButtonId(selectedButtonId === id ? null : id);
//   };

//   return (
//     <PriceContainer>
//       <div className="container">
//         <div className="content">
//           <div className="Cards">
//             <div className="contentPrice">
//               <span>Наш прайс</span>
//             </div>
//             <p>
//               Цены на услуги формируются в соответствии с действующими
//               Прейскурантами. Общая стоимость зависит от объема услуг,
//               оказываемых в рамках приёма. Объём оказываемых услуг определяется
//               врачом, исходя из показаний для обследования и пожеланий клиента.
//             </p>
//           </div>
//           <div className="ButtonContent">
//             {Buttons.map((button, index) => (
//               <div key={index}>
//                 <ButtonClass onClick={() => handleButtonClick(button.id)}>
//                   {button.label}
//                 </ButtonClass>
//                 {selectedButtonId === button.id &&
//                   Cards.filter(card => card.id === button.id).map(
//                     (card, cardIndex) => (
//                       <div key={cardIndex}>
//                         <p>{card.name}</p>
//                         <p>{card.priceNumber}</p>
//                         <p>{card.text}</p>
//                         <p>{card.infor}</p>
//                         <p>{card.inforNumber}</p>
//                         <p>{card.infor2}</p>
//                         <p>{card.infor2Number}</p>
//                       </div>
//                     )
//                   )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </PriceContainer>
//   );
// };

// export default Price;

// const PriceContainer = styled('div')(() => ({
//   width: '100%',
//   maxWidth: '1440px',
//   minWidth: '1200px',
//   margin: '0 auto',
//   '.content': {
//     display: 'flex',
//     flexDirection: 'column',
//     '.Cards': {
//       width: '691px',
//       height: '183px',
//       marginLeft: '100px',
//       '.contentPrice': {
//         span: {
//           fontSize: '36px',
//           fontFamily: '"Poppins", sans-serif',
//         },
//       },
//       p: {
//         fontSize: '18px',
//         fontFamily: '"Poppins", sans-serif',
//         color: '#4D4E51',
//       },
//     },
//     '.ButtonContent': {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '16px',
//       marginTop: '40px',
//       marginLeft: '100px',
//     },
//   },
// }));

// const ButtonClass = styled(Button)(() => ({
//   '&.MuiButtonBase-root': {
//     width: '852px',
//     height: '50px',
//     fontSize: '20px',
//   },
// }));

// const Buttons = [
//   { id: 1, label: 'Консультация и диагностика' },
//   { id: 2, label: 'Аллергология' },
//   { id: 3, label: 'Анестезиология' },
//   { id: 4, label: 'Вакцинация' },
//   { id: 5, label: 'Гастроэнтерология' },
//   { id: 6, label: 'Гинекология' },
//   { id: 7, label: 'Дерматология' },
//   { id: 8, label: 'Кардиология' },
//   { id: 9, label: 'Неврология' },
//   { id: 10, label: 'Нейрохирургия' },
//   { id: 11, label: 'Онкология' },
//   { id: 12, label: 'Ортопедия' },
//   { id: 13, label: 'Оториноларингология' },
//   { id: 14, label: 'Офтальмология' },
//   { id: 15, label: 'Проктология' },
//   { id: 16, label: 'Психтерапия' },
//   { id: 17, label: 'Пульмонология' },
//   { id: 18, label: 'Ревмотология' },
//   { id: 19, label: 'Терапия' },
//   { id: 20, label: 'Урология' },
//   { id: 21, label: 'Флебология' },
//   { id: 22, label: 'Физиотерапия' },
//   { id: 23, label: 'Эндокринология' },
// ];

// !!!

// import { FC, useState } from 'react';
// import Button from '../../components/UI/Button';
// import { styled } from '@mui/material';
// import { Cards } from '../../utils/constants/Price';

// const Price: FC = () => {
//   const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>(
//     {}
//   );

//   const handleButtonClick = (id: number) => {
//     setOpenSections(prevState => ({
//       ...prevState,
//       [id]: !prevState[id],
//     }));
//   };

//   return (
//     <PriceContainer>
//       <div className="container">
//         <div className="content">
//           <div className="Cards">
//             <div className="contentPrice">
//               <span>Наш прайс</span>
//             </div>
//             <p>
//               Цены на услуги формируются в соответствии с действующими
//               Прейскурантами. Общая стоимость зависит от объема услуг,
//               оказываемых в рамках приёма. Объём оказываемых услуг определяется
//               врачом, исходя из показаний для обследования и пожеланий клиента.
//             </p>
//           </div>
//           <div className="ButtonContent">
//             {Cards.map(item => (
//               <div key={item.id}>
//                 <ButtonClass onClick={() => handleButtonClick(item.id)}>
//                   {item.name}
//                 </ButtonClass>
//                 {openSections[item.id] && (
//                   <div className="ContentSection">
//                     <p>{item.priceNumber}</p>
//                     <p>{item.text}</p>
//                     <p>
//                       {item.infor}: {item.inforNumber}
//                     </p>
//                     <p>
//                       {item.infor2}: {item.infor2Number}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </PriceContainer>
//   );
// };

// export default Price;

// const PriceContainer = styled('div')(() => ({
//   width: '100%',
//   maxWidth: '1440px',
//   minWidth: '1200px',
//   margin: '0 auto',
//   '.content': {
//     display: 'flex',
//     flexDirection: 'column',
//     '.Cards': {
//       width: '691px',
//       height: '183px',
//       marginLeft: '100px',
//       '.contentPrice': {
//         span: {
//           fontSize: '36px',
//           fontFamily: '"Poppins", sans-serif',
//         },
//       },
//       p: {
//         fontSize: '18px',
//         fontFamily: '"Poppins", sans-serif',
//         color: '#4D4E51',
//       },
//     },
//     '.ButtonContent': {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '16px',
//       marginTop: '40px',
//       marginLeft: '100px',
//       '.ContentSection': {
//         marginTop: '10px',
//         padding: '10px',
//         border: '1px solid #e0e0e0',
//         borderRadius: '4px',
//         backgroundColor: '#f9f9f9',
//       },
//     },
//   },
// }));

// const ButtonClass = styled(Button)(() => ({
//   '&.MuiButtonBase-root': {
//     width: '852px',
//     height: '50px',
//     fontSize: '20px',
//   },
// }));

// !!!!!!!!!!!!!!!!!!!!!!!!!!

// import { FC, useState } from 'react';
// import Button from '../../components/UI/Button';
// import { styled } from '@mui/material';
// import { Cards } from '../../utils/constants/Price';

// const Price: FC = () => {
//   const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>(
//     {}
//   );

//   const handleButtonClick = (id: number) => {
//     setOpenSections(prevState => ({
//       ...prevState,
//       [id]: !prevState[id],
//     }));
//   };

//   return (
//     <PriceContainer>
//       <div className="container">
//         <div className="content">
//           <div className="Cards">
//             <div className="contentPrice">
//               <span>Наш прайс</span>
//             </div>
//             <p>
//               Цены на услуги формируются в соответствии с действующими
//               Прейскурантами. Общая стоимость зависит от объема услуг,
//               оказываемых в рамках приёма. Объём оказываемых услуг определяется
//               врачом, исходя из показаний для обследования и пожеланий клиента.
//             </p>
//           </div>
//           <div className="ButtonContent">
//             {Cards.map(item => (
//               <div key={item.id}>
//                 <ButtonClass onClick={() => handleButtonClick(item.id)}>
//                   {item.name}
//                 </ButtonClass>
//                 {openSections[item.id] && (
//                   <div className="ContentSection">
//                     <p>{item.priceNumber}</p>
//                     <p>{item.text}</p>
//                     <p>
//                       {item.infor}: {item.inforNumber}
//                     </p>
//                     <p>
//                       {item.infor2}: {item.infor2Number}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </PriceContainer>
//   );
// };

// export default Price;

// const PriceContainer = styled('div')(() => ({
//   width: '100%',
//   maxWidth: '1440px',
//   minWidth: '1200px',
//   margin: '0 auto',
//   '.content': {
//     display: 'flex',
//     flexDirection: 'column',
//     '.Cards': {
//       width: '691px',
//       height: '183px',
//       marginLeft: '100px',
//       '.contentPrice': {
//         span: {
//           fontSize: '36px',
//           fontFamily: '"Poppins", sans-serif',
//         },
//       },
//       p: {
//         fontSize: '18px',
//         fontFamily: '"Poppins", sans-serif',
//         color: '#4D4E51',
//       },
//     },
//     '.ButtonContent': {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '16px',
//       marginTop: '40px',
//       marginLeft: '100px',
//       '.ContentSection': {
//         marginTop: '10px',
//         padding: '10px',
//         border: '1px solid #e0e0e0',
//         borderRadius: '4px',
//         backgroundColor: '#f9f9f9',
//       },
//     },
//   },
// }));

// const ButtonClass = styled(Button)(() => ({
//   '&.MuiButtonBase-root': {
//     width: '852px',
//     height: '50px',
//     fontSize: '20px',
//   },
// }));

// !!!!ю.ю..ю.//.////////////////////////

// import { FC, useState } from 'react';
// import Button from '../../components/UI/Button';
// import { styled } from '@mui/material';
// import { Cards } from '../../utils/constants/Price';

// const Price: FC = () => {
//   const [visibleCards, setVisibleCards] = useState<number[]>([]);

//   const handleButtonClick = (id: number) => {
//     setVisibleCards(prevVisibleCards =>
//       prevVisibleCards.includes(id)
//         ? prevVisibleCards.filter(cardId => cardId !== id)
//         : [...prevVisibleCards, id]
//     );
//   };

//   return (
//     <PriceContainer>
//       <div className="container">
//         <div className="content">
//           <div className="Cards">
//             <div className="contentPrice">
//               <span>Наш прайс</span>
//             </div>
//             <p>
//               Цены на услуги формируются в соответствии с действующими
//               Прейскурантами. Общая стоимость зависит от объема услуг,
//               оказываемых в рамках приёма. Объём оказываемых услуг определяется
//               врачом, исходя из показаний для обследования и пожеланий клиента.
//             </p>
//           </div>
//           <div className="ButtonContent">
//             {Buttons.map((button, index) => (
//               <div key={index}>
//                 <ButtonClass onClick={() => handleButtonClick(button.id)}>
//                   {button.label}
//                 </ButtonClass>
//                 {visibleCards.includes(button.id) &&
//                   Cards.filter(card => card.id === button.id).map(
//                     (card, cardIndex) => (
//                       <div key={cardIndex}>
//                         <p>{card.name}</p>
//                         <p>{card.priceNumber}</p>
//                         <p>{card.text}</p>
//                         <p>{card.infor}</p>
//                         <p>{card.inforNumber}</p>
//                         <p>{card.infor2}</p>
//                         <p>{card.infor2Number}</p>
//                       </div>
//                     )
//                   )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </PriceContainer>
//   );
// };

// export default Price;

// const PriceContainer = styled('div')(() => ({
//   width: '100%',
//   maxWidth: '1440px',
//   minWidth: '1200px',
//   margin: '0 auto',
//   '.content': {
//     display: 'flex',
//     flexDirection: 'column',
//     '.Cards': {
//       width: '691px',
//       height: '183px',
//       marginLeft: '100px',
//       '.contentPrice': {
//         span: {
//           fontSize: '36px',
//           fontFamily: '"Poppins", sans-serif',
//         },
//       },
//       p: {
//         fontSize: '18px',
//         fontFamily: '"Poppins", sans-serif',
//         color: '#4D4E51',
//       },
//     },
//     '.ButtonContent': {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '16px',
//       marginTop: '40px',
//       marginLeft: '100px',
//     },
//   },
// }));

// const ButtonClass = styled(Button)(() => ({
//   '&.MuiButtonBase-root': {
//     width: '852px',
//     height: '50px',
//     fontSize: '20px',
//   },
// }));

// const Buttons = [
//   { id: 1, label: 'Консультация и диагностика' },
//   { id: 2, label: 'Аллергология' },
//   { id: 3, label: 'Анестезиология' },
//   { id: 4, label: 'Вакцинация' },
//   { id: 5, label: 'Гастроэнтерология' },
//   { id: 6, label: 'Гинекология' },
//   { id: 7, label: 'Дерматология' },
//   { id: 8, label: 'Кардиология' },
//   { id: 9, label: 'Неврология' },
//   { id: 10, label: 'Нейрохирургия' },
//   { id: 11, label: 'Онкология' },
//   { id: 12, label: 'Ортопедия' },
//   { id: 13, label: 'Оториноларингология' },
//   { id: 14, label: 'Офтальмология' },
//   { id: 15, label: 'Проктология' },
//   { id: 16, label: 'Психтерапия' },
//   { id: 17, label: 'Пульмонология' },
//   { id: 18, label: 'Ревмотология' },
//   { id: 19, label: 'Терапия' },
//   { id: 20, label: 'Урология' },
//   { id: 21, label: 'Флебология' },
//   { id: 22, label: 'Физиотерапия' },
//   { id: 23, label: 'Эндокринология' },
// ];


// !!!!!

// import { FC, useState } from 'react';
// import Button from '../../components/UI/Button';
// import { styled } from '@mui/material';

// // Карточкалардын түрү
// type Card = {
//   id: number;
//   name: string;
//   priceNumber: string;
//   text: string;
//   infor: string;
//   inforNumber: string;
//   infor2: string;
//   infor2Number: string;
// };

// // Тиешелүү карточкалардын массиви
// const Cards: Card[] = [
//   { id: 1, name: 'Консультация и диагностика', priceNumber: '1000', text: 'Описание услуги', infor: 'Информация 1', inforNumber: '123', infor2: 'Информация 2', infor2Number: '456' },
//   { id: 2, name: 'Аллергология', priceNumber: '1200', text: 'Описание услуги', infor: 'Информация 1', inforNumber: '789', infor2: 'Информация 2', infor2Number: '012' },
//   // башка карточкалар...
// ];

// const Price: FC = () => {
//   const [selectedButtonId, setSelectedButtonId] = useState<number | null>(null);

//   const handleButtonClick = (id: number) => {
//     setSelectedButtonId(selectedButtonId === id ? null : id);
//   };

//   return (
//     <PriceContainer>
//       <div className="container">
//         <div className="content">
//           <div className="Cards">
//             <div className="contentPrice">
//               <span>Наш прайс</span>
//             </div>
//             <p>
//               Цены на услуги формируются в соответствии с действующими
//               Прейскурантами. Общая стоимость зависит от объема услуг,
//               оказываемых в рамках приёма. Объём оказываемых услуг определяется
//               врачом, исходя из показаний для обследования и пожеланий клиента.
//             </p>
//           </div>
//           <div className="ButtonContent">
//             <ButtonClass onClick={() => handleButtonClick(1)}>Консультация и диагностика</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(2)}>Аллергология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(3)}>Анестезиология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(4)}>Вакцинация</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(5)}>Гастроэнтерология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(6)}>Гинекология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(7)}>Дерматология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(8)}>Кардиология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(9)}>Неврология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(10)}>Нейрохирургия</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(11)}>Онкология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(12)}>Ортопедия</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(13)}>Оториноларингология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(14)}>Офтальмология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(15)}>Проктология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(16)}>Психтерапия</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(17)}>Пульмонология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(18)}>Ревмотология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(19)}>Терапия</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(20)}>Урология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(21)}>Флебология</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(22)}>Физиотерапия</ButtonClass>
//             <ButtonClass onClick={() => handleButtonClick(23)}>Эндокринология</ButtonClass>
//           </div>
//           <div className="CardDetails">
//             {Cards.filter(card => card.id === selectedButtonId).map((card, index) => (
//               <div key={index}>
//                 <p>{card.name}</p>
//                 <p>{card.priceNumber}</p>
//                 <p>{card.text}</p>
//                 <p>{card.infor}</p>
//                 <p>{card.inforNumber}</p>
//                 <p>{card.infor2}</p>
//                 <p>{card.infor2Number}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </PriceContainer>
//   );
// };

// export default Price;

// const PriceContainer = styled('div')(() => ({
//   width: '100%',
//   maxWidth: '1440px',
//   minWidth: '1200px',
//   margin: '0 auto',
//   '.content': {
//     display: 'flex',
//     flexDirection: 'column',
//     '.Cards': {
//       width: '691px',
//       height: '183px',
//       marginLeft: '100px',
//       '.contentPrice': {
//         span: {
//           fontSize: '36px',
//           fontFamily: '"Poppins", sans-serif',
//         },
//       },
//       p: {
//         fontSize: '18px',
//         fontFamily: '"Poppins", sans-serif',
//         color: '#4D4E51',
//       },
//     },
//     '.ButtonContent': {
//       display: 'flex',
//       flexDirection: 'column',
//       gap: '16px',
//       marginTop: '40px',
//       marginLeft: '100px',
//     },
//     '.CardDetails': {
//       marginTop: '40px',
//       marginLeft: '100px',
//     }
//   },
// }));

// const ButtonClass = styled(Button)(() => ({
//   '&.MuiButtonBase-root': {
//     width: '852px',
//     height: '50px',
//     fontSize: '20px',
//   },
// }));

// !!!


import { useState, ReactNode } from 'react';
import { styled, Box } from '@mui/material';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { ExpandMore } from '@mui/icons-material';

interface IProps {
  children?: ReactNode;
  title?: string;
}

const Accordeon = ({ title, children }: IProps) => {
  const [expanded, setExpanded] = useState<string | boolean>(false);

  const handleChange = (panel: string) => (_: any, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <StyledAccordion
      expanded={expanded === 'panel1'}
      onChange={handleChange('panel1')}>
      <StyledAccordionSummary
        aria-controls="panel1d-content"
        id="panel1d-header">
        <Box>{title}</Box>
      </StyledAccordionSummary>

      <MuiAccordionDetails>
        <Box>{children}</Box>
      </MuiAccordionDetails>
    </StyledAccordion>
  );
};

export default Accordeon;

const StyledAccordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));


const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ExpandMore sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  fontFamily: '"Manrope", sans-serif',
  borderRadius: '6px',
  boxShadow: '1px 1px 5px 0px rgba(0, 0, 0, 0.15)',
  fontWeight: '500',
  borderLeft: '10px solid #048741',
  backgroundColor: 'rgb(219, 240, 229)',
  transition: 'background-color 0.3s linear',

  '&:hover': {
    backgroundColor: '#048741',
    borderRadius: '6px',
    color: 'white',
  },

  '& svg': {
    boxSizing: 'content-box',
    padding: '4px',
    backgroundColor: 'white',
    borderRadius: '50%',
    border: '1px solid green',
    transform: 'rotate(-90deg)',

    '& > path': {
      fill: 'green',
    },
  },

  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    width: 'auto',
    backgroundColor: 'white',
    transform: 'rotate(90deg)',
    borderRadius: '50%',
    fill: '#048741',
    fontFamily: '"Manrope", sans-serif',

    '&:hover': {
      borderRadius: '50%',
      backgroundColor: 'white',
      stroke: 'white',
    },
  },

  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
  },

  '&.Mui-expanded': {
    backgroundColor: '#048741 ',
    color: '#FFF',
    borderRadius: '6px',
  },
}));
