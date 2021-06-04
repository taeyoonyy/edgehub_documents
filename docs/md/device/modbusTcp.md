# Modbus TCP
Modbus TCP 프로토콜을 선택하여 `Modbus TCP` 프로토콜을 사용하는 디바이스의 데이터를 읽거나 쓸 수 있습니다.  
데이터를 읽을 때 <span>Function Code 01(Coil Status), 02(Input Status), 0x03(Holding Register), 04(Input Register)</span>를 사용합니다.  
데이터를 쓸 때 <span>Function Code 15(Write Coils), 16(Write Registers)</span>를 사용합니다. Interactor에서는 Register 타잎 (40001, 30001, ...) 아닌 Function Code와 Address를 구분하여 사용합니다.  

<div class="toc-title"><img src="../../img/icon/list.svg">Table of Contents</div>

[[toc]]

## Connection
Connection Information은 타겟 디바이스와 통신하기 위해 모든 데이터에 공통으로 적용되는 설정 값 입니다.
#### :arrow_forward: 디바이스에서 확인이 필요한 디바이스의 설정 값
* __Address__: 디바이스의 아이피 주소
* __Port__: 디바이스의 포트 번호
* __Unique ID__: 디바이스의 Modbus ID  
(ID는 Modbus TCP의 ADU 프레임에 포함이 되지만, ID를 구분하지 않는 디바이스도 있습니다.)   
#### :arrow_forward: 효율적인 통신을 위해 Interactor에서 추가된 설정
* __Connection Count__: 타겟 디바이스와 통신에 동시에 사용할 수 있는 TCP 커넥션 숫자  
(Tag의 Interval 보다 수집되는 속도가 더 느리고, 디바이스에서 다수의 커넥션을 허용할 때 커넥션 숫자를 높히면 통신 속도가 빨라질 수 있습니다.)
* __Timeout__: 데이터를 읽을 때 응답을 기다리는 시간  
* __Max Block Size__: 한번에 수집할 데이터의 최대 크기 설정

## Tag Information
Tag 단위로 타겟 디바이스의 데이터를 읽기 위해서 필요한 설정 데이터 입니다.  

| Info | Description |
| :-: | :- |
| _Function Code_ | Modbus 프로토콜에서 제공하는 명령어 코드 입니다. Function Code에 따라 데이터 형태와 Modbus에서 가르키는 메모리 영역이 다릅니다.<ul><li>__Coil (0x)__: Function Code 01, Read Coil (Bit)</li><li>__Discrete Input (1x)__: Function Code 02, Read Discreate Input (Bit)</li><li>__Input Regiester (3x)__: Function Code 04, Read Input Register (Word)</li><li>__Holding Register (4x)__: Function Code 03, Read Holding Register (Word)</li></ul> |
| _Address_ | 타겟 데이터의 시작 주소입니다.<br/>Modbus 프로토콜에서 지원하는 주소 범위인 0부터 65535까지 사용할 수 있습니다. |
| _Length_ | 타겟 데이터의 시작 주소 부터의 데이터 길이 입니다.<br/>Modbus 프로토콜에서 지원하는 데이터 길이인 1부터 최대 125까지 사용할 수 있습니다. |
| _Value_ | Function Coie, Address, Length의 설정값을 사용한 데이터 요청에 대해 정상적인 응답을 받았을 때 수집된 데이터가 출력됩니다.<br/>통신 실패나, 비정상적인 응답을 받은 경우는 출력하지 않습니다. |


#### :arrow_forward: 에시) Read Coil 읽기 결과
Coil Status의 데이터가 Address0: 1, Address1: 0, Address2: 1, Address:3 1 인 경우 Tag 수집 결과는 다음과 같습니다. 
| Function Code | Address | Length | Value(Raw) |
| :-: | :-: | :-: | :-: |
| Coil(0x) | 0 | 1 | 0x01 |
|  Coil(0x) | 1 | 1 | 0x00  |
|  Coil(0x) | 0 | 2 | 0x01 |
|  Coil(0x) | 0 | 4 | 0x0D |
