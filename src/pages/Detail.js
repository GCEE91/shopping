import React, { useState, useMemo, useCallback } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AllItemData from '../ItemData/Alldata';

const Detail = () => {
  let { id } = useParams();
  let history = useHistory();
  let Itemdata = AllItemData.filter((i) => i.item_id === Number(id));
  const [data, setData] = useState(Itemdata[0]);
  const [size, setSize] = useState('M');
  const [count, setCounet] = useState(1);
  const [modal, setModal] = useState('detail');

  const handleSize = (e) => setSize(e.target.value);

  const handlePlusCount = (e) => {
    setCounet(count + 1);
  };

  const handleSubtractCount = (e) => {
    if (count === 1) return;
    setCounet(count - 1);
  };
  console.log(size);
  console.log(count);

  return (
    <React.Fragment>
      <ItemContainer>
        {/* 이미지 div */}
        <ImageDivBox width='35vw'>
          <ItemImg src={data.detailsrc} />
        </ImageDivBox>

        {/* detail div */}
        <DetailDivBox margin='140px 0 0 45px'>
          <P margin='0' size='24px' weight='800'>
            {data.category}
          </P>
          <P margin='35px 0 10px 0' weight='600'>
            {data.title}
          </P>

          <DivBox display='flex'>
            <P margin='0 10px 0 0' weight='600'>
              사이즈
            </P>
            <select name='size' defaultValue='M' onChange={handleSize}>
              <option value='S'>S</option>
              <option value='M'>M</option>
              <option value='L'>L</option>
            </select>
          </DivBox>

          <DivBox display='flex' alignItems='center' margin='10px 0 0 0'>
            <P weight='600' margin='0 10px 0 0'>
              수량
            </P>
            <DivBox
              display='flex'
              justifyContent='center'
              alignItems='center'
              width='30px'
              height='30px'
              size='25px'
              cursor='pointer'
              onClick={() => {
                handleSubtractCount();
              }}>
              -
            </DivBox>
            <P weight='600' margin='0'>
              {count}
            </P>
            <DivBox
              display='flex'
              justifyContent='center'
              alignItems='center'
              width='30px'
              height='30px'
              size='25px'
              cursor='pointer'
              onClick={() => {
                handlePlusCount();
              }}>
              +
            </DivBox>
          </DivBox>

          <DivBox display='flex' alignItems='center' margin='10px 0 0 0'>
            <P margin='0 20px 0 0' weight='600'>
              가격
            </P>
            <P weight='600' margin='0'>
              {data.price}원
            </P>
          </DivBox>

          <DivBox display='flex' alignItems='center' margin='10px 0 0 0'>
            <P margin='0 20px 0 0' weight='600'>
              주문가격
            </P>
            <P weight='600' margin='0'>
              {data.price * count}원
            </P>
          </DivBox>

          <DivBox margin='20px 0 0 0'>
            <Button
              onClick={() => {
                history.goBack();
              }}>
              장바구니 추가
            </Button>
          </DivBox>
        </DetailDivBox>
      </ItemContainer>

      <ListDivBox
        display='flex'
        justifyContent='space-around'
        margin='60px 0 0 0'
        size='20px'>
        <P
          weight='600'
          margin='0'
          cursor='pointer'
          onClick={() => {
            setModal('detail');
          }}>
          상세
        </P>
        <P
          weight='600'
          margin='0'
          cursor='pointer'
          onClick={() => {
            setModal('shipping');
          }}>
          배송
        </P>
        <P
          weight='600'
          margin='0'
          cursor='pointer'
          onClick={() => {
            setModal('exchange');
          }}>
          교환
        </P>
      </ListDivBox>

      <DivBox margin='40px 0 0 0' display='flex' justifyContent='center'>
        {modal === 'detail' ? (
          <img
            src='https://gceebucket.s3.ap-northeast-2.amazonaws.com/clothdetail.png'
            style={{ width: '50%', height: '50%' }}></img>
        ) : null}
        {modal === 'shipping' ? (
          <img
            src='https://gceebucket.s3.ap-northeast-2.amazonaws.com/shipping.png'
            style={{ width: '50%', height: '50%' }}></img>
        ) : null}
        {modal === 'exchange' ? (
          <img
            src='https://gceebucket.s3.ap-northeast-2.amazonaws.com/exchange.png'
            style={{ width: '50%', height: '50%' }}></img>
        ) : null}
      </DivBox>
    </React.Fragment>
  );
};

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0 0 0;
  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    margin: 20px 0 0 0;
    padding: 0 40px;
  }
`;

const ImageDivBox = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  border: ${(props) => props.border};
  background-image: ${(props) => (props.bg ? `url(${props.bg})` : null)};
  cursor: ${(props) => props.cursor};
  @media ${(props) => props.theme.mobile} {
    display: flex;
    width: 80vw;
  }
`;

const DetailDivBox = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  border: ${(props) => props.border};
  background-image: ${(props) => (props.bg ? `url(${props.bg})` : null)};
  cursor: ${(props) => props.cursor};
  @media ${(props) => props.theme.mobile} {
    margin: 20px 0 0 0;
  }
`;

const ListDivBox = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  border: ${(props) => props.border};
  background-image: ${(props) => (props.bg ? `url(${props.bg})` : null)};
  cursor: ${(props) => props.cursor};
  @media ${(props) => props.theme.mobile} {
    margin: 40px 0 0 0;
    font-size: 16px;
  }
`;

const DivBox = styled.div`
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  border: ${(props) => props.border};
  background-image: ${(props) => (props.bg ? `url(${props.bg})` : null)};
  cursor: ${(props) => props.cursor};
`;

const ItemImg = styled.img`
  width: 100%;
  height: 70vh;
  border-radius: 5px;
`;

const P = styled.p`
  display: ${(props) => props.display};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  cursor: ${(props) => props.cursor};
`;

const Button = styled.button`
  width: 150px;
  height: 50px;
  border: none;
  border-radius: 6px;
  background-color: black;
  color: white;
  font-weight: 800;
`;

export default Detail;
