# MELSEC ETHERNET
MELSEC ETHERNET 프로토콜을 통해 `Mitsubishi`의 MC프로토콜을 사용하는 PLC의 디바이스 메모리를 읽거나 쓸 수 있습니다.

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
##### :arrow_forward: 대상 제품: QnA호환 3E프레임
* **QnA**: QnA시리즈 PLC CPU
* **3**: QnA시리즈 Ethernet인터페이스 모듈이 지원하고 있는 QnA 프레임
* **E**: Q시리즈 E71
:::

<div class="toc-title"><img src="../../img/icon/list.svg">Table of Contents</div>

[[toc]]


## Connection Information
Connection Information은 타겟 디바이스와 통신하기 위해 **모든 데이터에 공통으로 적용되는 설정 값**입니다.
#### :black_medium_square: PLC에서 확인이 필요한 PLC의 설정 값
* __Address__: PLC의 아이피 주소
* __Port__: PLC의 포트 번호
* __Network Number__: Network 번호 (PLC를 경유하여 다른 PLC에 엑세스 하는 경우가 아닐때는 0x00 사용)
* __Station Number__: Station 번호 (PLC를 경유하여 다른 PLC에 엑세스 하는 경우가 아닐때는 0x00 사용)
* __PLC Number__: 요구상대 모듈 국번호 (PLC를 경유하여 다른 PLC에 엑세스 하는 경우가 아닐때는 0xFF 사용)
* __IO Number__: 요구상대 모듈I/O 번호 (PLC를 경유하여 다른 PLC에 엑세스 하는 경우가 아닐때는 0x03FF 사용)
* __Communication Type__: 데이터 코드(바이너리 / ASCII)  

#### :black_medium_square: 효율적인 통신을 위해 Interactor에서 추가된 설정
* __Max Block Size__: 한번에 수집할 데이터의 최대 크기 설정

<div class="spacer-sm"/>

:bulb: 자세한 내용은 사용하는 **Mitsubishi PLC 사용 설명서**를 참고 바랍니다.

## Tag Information
Tag 단위로 **PLC의 데이터를 읽기 위해** 필요한 설정 데이터 입니다. 제품마다 사용 가능한 디바이스 코드와 디바이스 주소 범위가 다릅니다. 디바이스의 자세한 내용은 **Mitsubishi PLC 사용 설명서**를 참고 바랍니다. 

| Info | Description |
| :-: | :- |
| _Start Address_ | 디바이스 메모리의 디바이스 코드와 디바이스 주소를 조합하여 Interactor에서 대상 데이터의 위치를 설정합니다. | 
| _Length_ | Start Address에서 선택한 대상부터 원하는 데이터의 길이를 설정합니다. 워드(Word) 디바이스는 단위가 워드가 되고, 비트(Bit) 디바이스는 단위가 비트가 됩니다. |
| _Value_ | Start Address와 Length의 설정값을 사용한 데이터 요청에 대해 정상적인 응답을 받았을 때 수집된 데이터가 출력됩니다. 신 실패나, 비정상적인 응답을 받은 경우는 출력하지 않습니다.  |

##### :mag_right: 예시)
| Start Address | Length | Value |
| :-: | :-: | :-: |
| M0 | 1 | 디바이스 코드 M의 0부터 1개 비트를 가져옵니다. |
| D100 | 10 | 디바이스 코드 D의 100부터 10개 워드(D100, D101, ..., D109)를 가져옵니다. 


##### :mag_right: 예시) 비트 디바이스 읽기 결과
비트 디바이스 M의 데이터가 M0: 0, M1: 0, M2: 1, M3: 1 인 경우 Tag 수집 결과는 다음과 같습니다.  

| Start Address | Length | Value(Raw) | Byte Size |
| :-: | :-: | :-: | :-: |
| M0 | 1 | 0x10 | 1 |
| M1 | 1 | 0x00 | 1 |
| M0 | 2 | 0x10 | 1 |
| M0 | 3 | 0x1010 | 2 |
| M0 | 4 | 0x1011 | 2 |

##### :mag_right: 예시) 워드 디바이스 읽기 결과
워드 디바이스 D를 읽었을 때 데이터(Decimal)가 D0: 9, D1: 10 인 경우 Tag 수집 결과는 다음과 같습니다.  
| Start Address | Length | Value(Raw) | Byte Size |
| :-: | :-: | :-: | :-: |
| D0 | 1 | 0x0009 | 2 |
| D1 | 1 | 0x000A | 2 |
| D0 | 2 | 0x0009000A | 4 |

## Action 
PLC에 데이터를 쓰기 위해 Action을 설정합니다.(작성 중)
