import React from 'react';
import styled from 'styled-components';
import hat from '../image/hat.jpg';

const ItemCard = (props) => {
  return (
    <Container>
      <Img src={hat}></Img>
      <P margin='10px 0 0 0' weight='bold'>
        가디건
      </P>
      <P margin='0 0 0 0' size='20px' weight='800'>
        19900원
      </P>
    </Container>
  );
};

const Container = styled.div`
  width: 30vw;
  height: 55vh;
  margin-bottom: 85px;

  @media ${(props) => props.theme.mobile} {
    width: 90vw;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 50vh;
  border-radius: 5px;
`;

const P = styled.p`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

export default ItemCard;
