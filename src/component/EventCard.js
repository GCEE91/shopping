import React from 'react';
import styled from 'styled-components';
import EventImage from '../image/eventImg.jpg';

const EventCard = () => {
  return (
    <Box bg={EventImage}>
      <P weight='800' size='60px'>
        20% Season Off
      </P>
      <P size='20px'>
        It is not a sale that comes at any time. catch it when it comes
      </P>
    </Box>
  );
};

const Box = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${(props) => (props.bg ? `background-image: url(${props.bg})` : null)};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* @media ${(props) => props.theme.mobile} {
    width: 50%;
  } */
`;

const P = styled.p`
  margin: 0;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: white;
  text-align: center;

  @media ${(props) => props.theme.mobile} {
    font-size: ${(props) => (props.size === '60px' ? '30px' : '15px')};
  }
`;

export default EventCard;
