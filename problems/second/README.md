# 1. 연속합

## 문제

오직 숫자(정수)만을 포함한 배열이 하나 주어집니다.

연속된 숫자들의 합을 구하여 최종적으로 배열을 반환하는 프로그램을 작성해 주세요.

참고로, `1 == 1` 은 참이지만, `1 == -1` 은 거짓입니다.

좀 더 자세한 이해는 예제를 참고해 주세요.

## 입력
정수 배열이 주어집니다.

## 출력
합배열을 반환해주세요.

## 예제

```
# 연속된 숫자들의 합을 계산한 배열을 반환합니다.
[1,1,7,7,3]             # => [2,14,3]

# 같은 숫자라도 중간에 다른 숫자로 인해 연속성이 깨진 경우, 연속된 것이라 볼 수 없습니다.
[1,4,4,4,0,4,3,3,1]     # => [1,12,0,4,6,1]

# 부호가 뒤집힌 숫자는 절댓값이 같더라도 다른 숫자로 취급해야 합니다.
[-5,-5,5,7,7,12,0]      # => [-10,5,14,12,0]
```