import React from 'react';

import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import EventImage from '../image/eventImg.jpg';
import EventImage4 from '../image/eventImg4.png';
import EventImage6 from '../image/eventImg6.png';

const EventCard = () => {
  return (
    <>
      <StyledSlider {...settings}>
        <Box bg={EventImage}>
          <P weight='800' size='60px' margin='200px 0 0 0'>
            20% Season Off
          </P>
          <P size='20px'>
            It is not a sale that comes at any time. catch it when it comes
          </P>
        </Box>

        <Box bg={EventImage4}>
          <P weight='800' size='60px' margin='200px 0 0 0'>
            20% Season Off
          </P>
          <P size='20px'>
            It is not a sale that comes at any time. catch it when it comes
          </P>
        </Box>
        <Box bg={EventImage6}>
          <P weight='800' size='60px' margin='200px 0 0 0'>
            20% Season Off
          </P>
          <P size='20px'>
            It is not a sale that comes at any time. catch it when it comes
          </P>
        </Box>
      </StyledSlider>
    </>
  );
};

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) => (props.bg ? `background-image: url(${props.bg})` : null)};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const P = styled.p`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: white;
  text-align: center;
  @media ${(props) => props.theme.mobile} {
    font-size: ${(props) => (props.size === '60px' ? '30px' : '15px')};
  }
`;

const settings = {
  dots: true, // 슬라이드 밑에 점 보이게
  infinite: true, // 무한으로 반복
  arrows: false, // 화살표 안보임
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 3000, // 넘어가는 속도
  slidesToShow: 1, // 1장씩 보이게
  slidesToScroll: 1, // 1장씩 뒤로 넘어가게
  centerMode: true,
  centerPadding: '0px', // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
};
const StyledSlider = styled(Slider)`
  .slick-list {
    width: 100%;
    margin: 0 auto;
  }
  .slick-dots li {
    margin: 0 0rem;
  }
  .slick-dots {
    position: sticky;
    left: 0;
    right: 0;
    margin: -150px 0 0 0;
    .slick-active {
      button::before {
        color: white;
      }
    }
    button::before {
      color: #b6b1b0;
    }
  }
`;

export default EventCard;
