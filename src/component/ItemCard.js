import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const ItemCard = (props) => {
  const history = useHistory();
  const { itemData } = props;

  return (
    <Container
      onClick={() => {
        history.push(`detail/${itemData.item_id}`);
        window.scrollTo(0, 0);
      }}>
      <OverFlowDiv>
        <Img src={itemData.src} />
      </OverFlowDiv>
      <P className='title' margin='10px 0 0 0' size='30px' weight='bold'>
        {itemData.title}
      </P>
      <P className='price' margin='0 0 0 0' size='25px' weight='bold'>
        {itemData.price}원
      </P>
    </Container>
  );
};

const Container = styled.div`
  width: 30vw;
  height: 60vh;
  margin-bottom: 75px;

  @media ${(props) => props.theme.mobile} {
    width: 90vw;
    height: 70vh;
    margin-bottom: 0px;
  }
`;
const OverFlowDiv = styled.div`
  overflow: hidden;
`;

const Img = styled.img`
  width: 100%;
  height: 50vh;
  border-radius: 5px;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.2);
    -webkit-transform: scale(1.2);
    -moz-transform: scale(1.2);
    -ms-transform: scale(1.2);
    -o-transform: scale(1.2);
  }
`;

const P = styled.p`
  margin: ${(props) => props.margin};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};

  @media ${(props) => props.theme.mobile} {
    font-size: 25px;
  }
`;

export default ItemCard;
