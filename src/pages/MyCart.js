import React, { useContext } from 'react';
import styled from 'styled-components';
import CartContext from '../shared/CartContext';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch, useSelector } from 'react-redux';

const MyCart = (props) => {
  let { state, actions } = useContext(CartContext);
  let history = useHistory();
  let totalPrice = 0;
  state.cart.map((i) => {
    totalPrice = totalPrice + i.count * i.price;
  });

  let dispatch = useDispatch();
  let redux = useSelector((state) => state.reducer);
  console.log(redux);

  return (
    <>
      <P
        width='90vw'
        margin='60px auto 0'
        size='2rem'
        weight='bold'
        align='center'>
        My Shopping Cart
      </P>

      {state.cart.length === 0 ? null : (
        <ListBox>
          <ListItem width='300px' align='center'>
            상품정보
          </ListItem>
          <ListItem>사이즈</ListItem>
          <ListItem>수량</ListItem>
          <ListItem>가격</ListItem>
        </ListBox>
      )}

      {state.cart.length === 0 ? (
        <>
          <div
            style={{
              textAlign: 'center',
              margin: '180px  0 0 0',
              fontSize: '30px',
              cursor: 'pointer',
            }}
            onClick={() => {
              history.push('/shopping');
            }}>
            상품을 추가하러갈까요?
          </div>
          {/* <button
            onClick={() => {
              dispatch({ type: '수량증가', payload: 1 });
            }}>
            +
          </button>
          <button
            onClick={() => {
              dispatch({ type: '수량감소', payload: 1 });
            }}>
            -
          </button>
          <button
            onClick={() => {
              dispatch({ type: '닫기' });
            }}>
            닫기
          </button>
          <button
            onClick={() => {
              dispatch({
                type: '상품추가',
                payload: { id: 1, name: '신발', quan: 2 },
              });
            }}>
            상품추가1
          </button>
          <button
            onClick={() => {
              dispatch({
                type: '상품추가',
                payload: { id: 2, name: '신발', quan: 2 },
              });
            }}>
            상품추가2
          </button>
          <button
            onClick={() => {
              dispatch({
                type: '상품제거',
                payload: 1,
              });
            }}>
            상품추가2
          </button> */}
        </>
      ) : (
        <div>
          {state.cart.map((i) => {
            return (
              <Container height='20vh' key={Math.random()}>
                <Img src={i.detailsrc}></Img>
                <Titleinfo
                  margin='0 0 0 60px'
                  width='30vw'
                  weight='bold'
                  size='20px'>
                  {i.title}
                </Titleinfo>
                <Sizeinfo
                  margin='0 0 0 60px'
                  width='10vw'
                  weight='bold'
                  size='20px'>
                  {i.size}
                </Sizeinfo>
                <Countinfo
                  margin='0 0 0 118px'
                  width='10vw'
                  weight='bold'
                  size='20px'>
                  {i.count}
                </Countinfo>
                <Priceinfo
                  margin='0 0 0 70px'
                  width='10vw'
                  weight='bold'
                  size='20px'>
                  {i.count * i.price} 원
                </Priceinfo>
                <RemoveButton
                  onClick={() => {
                    let a = state.cart.filter((k) => {
                      return JSON.stringify(k) !== JSON.stringify(i);
                    });
                    actions.setCart([...a]);
                  }}>
                  X
                </RemoveButton>
              </Container>
            );
          })}
        </div>
      )}

      {state.cart.length === 0 ? (
        ''
      ) : (
        <Container height='10vh' justify='flex-end'>
          <Button
            margin='0 5px 0 0'
            onClick={() => {
              window.alert('서비스 준비 중 입니다!');
            }}>
            구매하기
          </Button>
          <Button
            margin='0 5px 0 0'
            onClick={() => {
              history.push('/shopping');
            }}>
            쇼핑더하기
          </Button>
          <TotalPrice margin='0' weight='bold' size='20px'>
            Total Price {totalPrice}원
          </TotalPrice>
        </Container>
      )}
    </>
  );
};

const P = styled.p`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  width: ${(props) => props.width};
  @media ${(props) => props.theme.mobile} {
    font-size: 1.5rem;
  }
`;
const ListBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 90vw;
  height: 10vh;
  margin: 50px auto 0;
  border-top: 2px solid black;
  @media ${(props) => props.theme.mobile} {
    margin: 30px auto 0;
    height: 7vh;
  }
`;
const ListItem = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: ${(props) => props.align};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  width: ${(props) => props.width};
  @media ${(props) => props.theme.mobile} {
    font-size: 15px;
    width: auto;
  }
`;

const Container = styled.div`
  position: relative;
  width: 90vw;
  height: ${(props) => props.height};
  display: flex;
  align-items: center;
  justify-content: ${(props) => props.justify};
  border-top: 1px solid gray;
  margin: 0 auto;
`;

const Img = styled.img`
  width: 110px;
  height: 110px;
  margin-left: 30px;

  @media ${(props) => props.theme.mobile} {
    width: 60px;
    height: 60px;
    margin: 0 0 50px 30px;
  }
`;

const Titleinfo = styled.p`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  width: ${(props) => props.width};
  @media ${(props) => props.theme.mobile} {
    position: absolute;
    bottom: 5px;
    font-size: 14px;
    text-align: center;
    margin: 0;
  }
`;
const Sizeinfo = styled.p`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  width: ${(props) => props.width};
  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
    margin: 0 0 0 55px;
    width: auto;
  }
`;

const Countinfo = styled.p`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  width: ${(props) => props.width};
  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
    margin: 0 0 0 60px;
    width: auto;
  }
`;

const Priceinfo = styled.p`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  width: ${(props) => props.width};
  @media ${(props) => props.theme.mobile} {
    font-size: 14px;
    margin: 0 0 0 35px;
    width: auto;
  }
`;

const RemoveButton = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 50px 0 0;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  font-size: 25px;
  cursor: pointer;
  @media ${(props) => props.theme.mobile} {
    font-size: 20px;
    margin: 10px 15px 0 0;
    top: 0;
  }
`;

const TotalPrice = styled.p`
  font-weight: ${(props) => props.weight};
  font-size: ${(props) => props.size};
  text-align: ${(props) => props.align};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  width: ${(props) => props.width};
  @media ${(props) => props.theme.mobile} {
    font-size: 16px;
    margin: 0;
  }
`;
const Button = styled.button`
  border: none;
  border-radius: 3px;
  width: auto;
  color: white;
  font-weight: bold;
  background-color: black;
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};
  @media ${(props) => props.theme.mobile} {
  }
`;

// const 리덕스데이터props = (state) => {
//   console.log(state);
//   return { data: state.reducer, alert: state.reducer2 };
// };

export default MyCart;
