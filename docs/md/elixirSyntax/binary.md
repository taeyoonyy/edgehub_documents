# Binary
이 페이지는 Elixir의 BitString과 Binary에 대해 설명합니다.
<div class="info">
  <div class="info-title"><img src="../../img/icon/info.svg">WHERE TO USE</div>
  - <p>Device, Database, Virtual > Tags > <b>Transform</b></p>
  - <p>Device, Database, Virtual > Tags > <b>Load Condition</b></p>
  - <p>Device, Database, Virtual, Sync > Actions > <b>Condition</b></p>
  - <p>Device, Database, Virtual, Sync > Actions > <b>Logic</b></p>
  - <p>Virtual > Tags > <b>Logic</b></p>
</div>

<div class="toc-title"><img src="../../img/icon/list.svg">Table of Contents</div>

[[toc]]

## Bitstring
Bitstring은 Elixir의 기본 데이터 유형으로 `<< >>` 구문으로 표시합니다.
``` elixir
<<1, 2, 3, 4>>
```
기본적으로 하나의 데이터는 8비트의 사이즈를 가지지만 `::size(n)` 수정자(modifier)를 사용하여 비트 수를 수동으로 지정할 수 있습니다.
``` elixir
<<0::size(1), 0::size(1), 1::size(1), 1::size(1)>>
```
위의 예시는 1비트 크기의 데이터 4개로 `0011`, 즉 3을 가르키며 총 4바이트 이며 아래 값과 같습니다.
``` elixir
<<3::size(4)>>
```

## Binary
Binary는 비트 수를 8로 나눌 수 있는 Bit 문자열 입니다. 모든 Binary는 Bitstring 이지만 모든 Bitstring이 Binary는 아닙니다. 
``` elixir
<<3 , 232>>
```
Interactor에서 External Entity를 사용하여 수집한 Tag의 Raw Value는 Binary를 16진수로 표현한 값입니다.  
예를들어 Modbus TCP 프로토콜을 사용해서 10진수로 1,000이 들어있는 1 Word를 읽었을 때, 이 Tag의 Raw 데이터는 `<<3 , 232>>` 이며 16진수로 표현하여 `0x03E8`이 출력됩니다.  
