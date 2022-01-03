import { createStore, combineReducers } from 'redux';

let 기본state = [{ id: 0, name: '신발', quan: 2 }];
let 초기값 = { check: true };

function reducer(state = 기본state, 액션) {
  if (액션.type === '수량증가') {
    let a = [...state];
    a[액션.payload].quan++;
    return a;
  } else if (액션.type === '수량감소') {
    let a = [...state];
    a[액션.payload].quan--;
    return a;
  } else if (액션.type === '상품추가') {
    let a = [...state];
    a.push(액션.payload);
    return a;
  } else if (액션.type === '상품제거') {
    let a = [...state];
    a = a.filter((i) => {
      return i.id !== 액션.payload;
    });
    return a;
  } else {
    return state;
  }
}

function reducer2(state = 초기값, 액션) {
  if (액션.type === '닫기') {
    let a = { ...state };
    a.check = false;
    return a;
  }
  return state;
}

let store = createStore(combineReducers({ reducer, reducer2 }));

export default store;
