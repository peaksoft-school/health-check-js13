import { FC, ReactNode } from 'react';
import { Box, Rating, styled, Typography } from '@mui/material';
import Slider from 'react-slick';
import { InfoSlide } from '../../utils/constants/slider';
import PaginationDot from '../../assets/icons/PaginationDot.svg';
import NextIcon from '../../assets/icons/next-review.svg';
import PreviousIcon from '../../assets/icons/previous-review.svg';

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
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  return (
    <StyledContainer>
      <StyledInfo>
        Отзывы наших <span> пациентов</span>
      </StyledInfo>
      <StyledMainContainer>
        <StyledSlider {...settings}>
          {InfoSlide.map(({ id, img, rating, name, review }) => (
            <StyledMapContainer key={id}>
              <StyledMapContent>
                <img className="image" src={img} alt="image" />
                <StyledWrapper>
                  <StyledUsername>{name}</StyledUsername>
                  <Rating value={rating} readOnly />
                </StyledWrapper>
              </StyledMapContent>
              <StyledTitle>{review}</StyledTitle>
            </StyledMapContainer>
          ))}
        </StyledSlider>
      </StyledMainContainer>
    </StyledContainer>
  );
};

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

const CustomNextArrow: FC<ArrowProps> = ({ className, onClick }) => (
  <Box className={className} onClick={onClick}>
    <NextIcon />
  </Box>
);

const CustomPrevArrow: FC<ArrowProps> = ({ className, onClick }) => (
  <Box className={className} onClick={onClick}>
    <PreviousIcon />
  </Box>
);

export default FeedbackSlider;

const StyledContainer = styled(Box)(() => ({
  margin: '0 auto',
  marginTop: '120px',
  maxWidth: '120rem',
}));

const StyledMainContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  overflow: 'hidden',
  fontFamily: 'Manrope',
}));

const StyledInfo = styled('h2')(() => ({
  fontFamily: 'Manrope',
  margin: '0 auto',
  marginLeft: '160px',
  fontWeight: 600,
  fontSize: '36px',
  lineHeight: '49px',
  color: '#222222',
  zIndex: 6,
  textAlign: 'start',
  span: {
    color: '#048741',
  },
}));

const StyledMapContainer = styled(Box)(() => ({
  boxSizing: 'border-box',
  textAlign: 'left',
  padding: '40px',
  width: '782px',
}));

const StyledWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  padding: 0,
}));

const StyledUsername = styled('h3')(() => ({
  margin: 0,
}));

const StyledMapContent = styled(Box)(() => ({
  display: 'flex',
  gap: '14px',
  paddingBottom: '20px',
  '& .image': {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
  },
}));

const StyledTitle = styled(Typography)(() => ({
  fontWeight: 300,
  fontSize: '16px',
  lineHeight: '21.86px',
}));

const StyledSlider = styled(Slider)(() => ({
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
    cursor: 'pointer',
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
    top: '443px',
    zIndex: '8',
    left: '470px',
  },
  '& .slick-prev': {
    position: 'absolute',
    top: '443px',
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
}));
