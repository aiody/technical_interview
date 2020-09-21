// 1. 입려한 데이터가 json인지 아닌지 판별 -> 1, 3, 4 판별 가능
// 1번은 따로 처리
// 2. 키 값이 원하는 값과 맞는지 비교 -> 5, 6, 7 판별 가능
// 3. 값이 원하는 타입인지 비교 -> 2 판별 가능

const data =
  '{"country":1,"price":100,"address":{"district":"gomi","receive":"corp","detail":"200호"}}';

function isValidOrderData() {
  return isValidJsonData(data) && isEmptyData(data) && isMatchedKeys(data);
}

function isEmptyData(str) {
  const json = JSON.parse(str);
  return Object.keys(json).length !== 0;
}

function isValidJsonData(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}

function isMatchedKeys(str) {
  const json = JSON.parse(str);
  const keys = Object.keys(json);
  const refKeys = ['country', 'price', 'address'];
  const refKeysForAddress = ['district', 'receive'];
  if (keys !== 3) {
    return false;
  }

  for (let i = 0; i < refKeys.length; i++) {
    if (!keys.includes(refKeys[i])) {
      return false;
    }
  }

  console.log(json['address']);
  return true;
}
console.log(isValidOrderData());
