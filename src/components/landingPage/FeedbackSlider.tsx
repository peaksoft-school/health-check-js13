import { FC, ReactNode } from 'react';
import { Rating, styled } from '@mui/material';
import Slider from 'react-slick';
import { InfoSlide } from '../../utils/constants/slider';
import PaginationDot from '../../assets/icons/PaginationDot.svg?react';
import NextIcon from '../../assets/icons/next-review.svg?react';
import PreviousIcon from '../../assets/icons/previous-review.svg?react';

const customDots = (dots: ReactNode) => <div>{dots}</div>;
const customPaging = () => <PaginationDot />;

const FeedbackSlider: FC = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: ReactNode) => customDots(dots),
    customPaging: () => customPaging(),
    nextArrow: <NextIcon />,
    prevArrow: <PreviousIcon />,
  };

  return (
    <StyledContainer>
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
    </StyledContainer>
  );
};

export default FeedbackSlider;

const StyledContainer = styled('div')({
  margin: '0 auto',
  maxWidth: '90rem',
});

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

  '& .slick-dots': {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    gap: '19px',
    marginTop: '-10px',
    paddingTop: '54px',
    paddingBottom: '42px',
    '& .slick-active': {
      background: 'none',
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
    top: '378px',
    zIndex: '8',
    left: '470px',
  },
  '& .slick-prev': {
    position: 'absolute',
    top: '378px',
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
