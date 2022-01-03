import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ItemCard from '../component/ItemCard';

import Jacket from '../image/jaket.png';
import Shose from '../image/shose.png';
import Hat from '../image/hat.jpg';

// import JacketData from '../ItemData/JacketData';
// import ShoseData from '../ItemData/ShoseData';
// import HatData from '../ItemData/HatData';
import AllData from '../ItemData/Alldata';

const Shopping = () => {
  const JacketData = AllData.filter((i) => {
    return i.category === 'Jacket';
  });

  const [bannerImg, setBannerImg] = useState(Jacket);
  const [category, setCategory] = useState('Jacket');
  const [itemDatas, setItemDatas] = useState(JacketData);

  let filterData = AllData.filter((i) => {
    return i.category === category;
  });

  useEffect(() => {
    setItemDatas(filterData);
  }, [category]);

  return (
    <React.Fragment>
      <CategoryButtonsContainer>
        <CategoryButton
          onClick={(e) => {
            setBannerImg(Jacket);
            setCategory(e.target.value);
          }}
          value='Jacket'
          width={category === 'Jacket' ? '22vw' : '20vw'}
          height={category === 'Jacket' ? '8vh' : '5vh'}
          color={category === 'Jacket' ? 'white' : '#212121'}
          backgroundColor={category === 'Jacket' ? '#212121' : 'white'}>
          Jacket
        </CategoryButton>

        <CategoryButton
          onClick={(e) => {
            setBannerImg(Shose);
            setCategory(e.target.value);
          }}
          value='Shose'
          width={category === 'Shose' ? '22vw' : '20vw'}
          height={category === 'Shose' ? '8vh' : '5vh'}
          color={category === 'Shose' ? 'white' : '#212121'}
          backgroundColor={category === 'Shose' ? '#212121' : 'white'}>
          Shose
        </CategoryButton>

        <CategoryButton
          onClick={(e) => {
            setBannerImg(Hat);
            setCategory(e.target.value);
          }}
          value='Hat'
          width={category === 'Hat' ? '22vw' : '20vw'}
          height={category === 'Hat' ? '8vh' : '5vh'}
          color={category === 'Hat' ? 'white' : '#212121'}
          backgroundColor={category === 'Hat' ? '#212121' : 'white'}>
          Hat
        </CategoryButton>
      </CategoryButtonsContainer>

      <BannerImgBox src={bannerImg} />

      <P margin='30px 0 0 0' size='30px' weight='800'>
        Items
      </P>
      <Hr />
      <ItemCardContainer>
        {itemDatas.map((itemData, i) => {
          return <ItemCard itemData={itemData} key={itemData.item_id} />;
        })}
      </ItemCardContainer>
      {/* <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          onClick={() => {
            // fetch('https://codingapple1.github.io/shop/data2.json').then() //fetch는 이런식으로 사용함
            axios
              .post('https://reqres.in/api/login', {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
              })
              .then((result) => {
                console.log(result);
              })
              .catch(() => {
                console.log('실패야');
              });
          }}>
          더보기
        </button>
      </div> */}
    </React.Fragment>
  );
};

const CategoryButtonsContainer = styled.div`
  height: 8.5vh;
  margin: 30px 0;
  display: flex;
  justify-content: space-around;
`;

const CategoryButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  color: ${(props) => props.color};
  font-size: 26px;
  font-weight: 800;
  border: none;
  border-bottom: 1px solid black;
  box-sizing: border-box;
  background-color: ${(props) => props.backgroundColor};

  transition: width 0.5s, height 0.5s;
  /* transition: transition-property(속성) transition-duration(실행시간) transition-timing-function(실행동안 가속,감속 ease, ease-in-out같은거) delay(몇초지연뒤 실행할건지) */

  &:hover {
    width: 22vw;
    height: 8vh;
    color: white;
    background-color: #212121;
  }

  @media ${(props) => props.theme.mobile} {
    font-size: 18px;
  }
`;

const BannerImgBox = styled.img`
  width: 100%;
  height: 65vh;
`;

const P = styled.p`
  text-align: center;
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

const Hr = styled.hr`
  width: 95%;
  margin: 5px auto 0;
`;

const ItemCardContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 40px;

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
    align-items: center;
    padding: 0;
  }
`;

export default Shopping;
