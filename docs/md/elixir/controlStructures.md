# Control Structures
설명설명

## Table of Contents
- [if](#if)
- [case](#case)
- [cond](#cond)

## if
If 와 do 사이의 값이 참이면 do 다음의 결과가 출력되고, 거짓이면 else 다음의 결과가 출력됩니다.  
Value가 1이면 결과는 1이 출력되고, Value가 1이 아니면 결과는 2가 출력됩니다.
``` elixir
if value === 1 do
  1
else
  2
end
```
##### [Interactor Example]
 Virtual Entity의 Logic에서는 다음과 같이 사용할 수 있습니다.
``` elixir
if {virtual, aaa, tag1} === 1 do
  1
else
  2
end
```
{virtual, aaa, tag1} 의 값이 3일 때 tag2는 2의 값을 가지게 됩니다.
(이미지 추가 예정)

## case
## cond
여러 패턴에 대해 매치할 때 사용합니다. _ 변수는 위에서 일치하는 값이 없을 때 선택됩니다. 일치하는 값도 
