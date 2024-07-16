import { FC } from 'react';
import { Rating, styled } from '@mui/material';
import Slider from 'react-slick';
import NextSvg from '../../assets/icons/nextImg.svg';
import PreviousSvg from '../../assets/icons/previousImg.svg';
import PaginationDot from '../../assets/icons/PaginationDot';
import { InfoSlide } from '../../utils/constants/slider';

const customDots = (dots: React.ReactNode) => <div>{dots}</div>;
const customPaging = () => <PaginationDot />;

const FeedbackSlider: FC = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: React.ReactNode) => customDots(dots),
    customPaging: () => customPaging(),
    nextArrow: <img src={NextSvg} />,
    prevArrow: <img src={PreviousSvg} />,
  };

  return (
    <>
      <StyledInfo>
        Отзывы наших <span> пациентов</span>
      </StyledInfo>
      <MainContainer>
        <StyledSlider {...settings}>
          {InfoSlide.map(item => (
            <Container key={item.id}>
              <Div>
                <img src={item.img} alt={item.name} />
                <Wrapper>
                  <Username>{item.name}</Username>
                  <Rating value={item.rating} readOnly />
                </Wrapper>
              </Div>
              <TitleStyled>{item.review}</TitleStyled>
            </Container>
          ))}
        </StyledSlider>
      </MainContainer>
    </>
  );
};

export default FeedbackSlider;

const MainContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  fontFamily: 'Manrope',
});

const StyledInfo = styled('h2')({
  fontFamily: 'Manrope',
  fontWeight: 600,
  fontSize: '36px',
  lineHeight: '49px',
  color: '#222222',
  zIndex: 6,
  paddingLeft: '7rem',
  textAlign: 'start',
  span: {
    color: '#048741',
  },
});

const Container = styled('div')({
  boxSizing: 'border-box',
  textAlign: 'left',
  padding: '40px',
  width: '782px',
});

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
});

const Username = styled('h3')({
  margin: 0,
});

const Div = styled('div')({
  display: 'flex',
  gap: '14px',
  paddingBottom: '20px',
});

const TitleStyled = styled('p')({
  fontWeight: 300,
  fontSize: '16px',
  lineHeight: '21.86px',
});

const StyledSlider = styled(Slider)({
  position: 'relative',

  '& .slick-track': {
    display: 'flex',
    gap: '36px',
    marginTop: '60px',
  },
  '& .slick-list': {
    width: '782px',
  },
  '& .slick-slide': {
    backgroundColor: '#F3F1F1',
    borderRadius: '20px',
  },
  '& .next-arrow': {},

  '& .slick-dots': {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '14px',
    marginTop: '-5px',
    paddingTop: '54px',
    paddingBottom: '42px',
    '& .slick-active': {
      background: 'none',
      fill: 'red',
      ellipse: {
        fill: '#048741',
      },
    },
  },

  '& .slick-active': {
    backgroundColor: '#DBF0E5',

    ellipse: {
      fill: '#048741',
    },
  },
  '& .slick-arrow': {
    cursor: 'pointer',
  },
  '& .slick-next': {
    position: 'absolute',
    top: '388px',
    zIndex: '8',
    left: '470px',
  },
  '& .slick-prev': {
    position: 'absolute',
    top: '388px',
    zIndex: '8',
    left: '273px',
  },
  '& .slick-next:hover, .slick-prev:hover': {
    circle: {
      fill: 'url(#paint0_linear_92_5157)',
    },
    path: {
      fill: '#fff',
    },
  },
});
