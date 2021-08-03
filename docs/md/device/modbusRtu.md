# Modbus RTU
- *Modbus RTU* 프로토콜을 사용하는 디바이스의 데이터를 읽거나 쓸 수 있습니다.
- 데이터를 읽을 때 **Function Code 01(Coil Status), 02(Input Status), 0x03(Holding Register), 04(Input Register)** 를 사용합니다.  
- 데이터를 쓸 때 **Function Code 15(Write Coils), 16(Write Registers)** 를 사용합니다.
- Interactor에서는 Register 타입(40001, 30001, ...)을 사용하지 않고 *Function Code*와 *Address*를 구분하여 사용합니다.  

## Connection Information
*Connection Information*은 Modbus RTU 디바이스와 통신하기 위해 공통으로 적용되는 데이터를 설정합니다.

### 디바이스 또는 PC의 확인이 필요한 데이터
| Key | Description | Required |
| :- | :- | :-: |
| _Port_ | Serial을 사용하기 위한 PC의 COM port | * |
| _Unique ID_ | 디바이스의 Unit ID | * |
| _Baudrate_ | Serial 통신 설정 값 - Baudrate | * |
| _Data Bits_ | Serial 통신 설정 값 - Data Bits | * |
| _Parity_ | Serial 통신 설정 값 - Parity | * |
| _Stop Bits_ | Serial 통신 설정 값 - Stop Bits | * |

  
### 효율적인 통신을 위해 Interactor에서 사용 되는 데이터
| Key | Description | Required |
| :- | :- | :-: |
| _Timeout_ | Request에 대한 응답을 기다리는 시간 | * |
| _Delay_ | Interactor에서 Modbus RTU로 데이터를 보낼 때 frame 사이 delay | * |
| _Max Block Size_ | 한번에 수집할 데이터의 최대 크기 | * |


## Tags
**Modbus RTU의 데이터를 읽기 위해** 필요한 데이터를 설정하고, 응답을 확인할 수 있습니다.

### Tag Information
*Tag* 단위로 Modbus RTU 디바이스의 데이터를 읽기 위해서 필요한 데이터를 설정합니다. 

| Info | Description | Required |
| :- | :- | :-: |
| _Function Code_ | Modbus 프로토콜에서 제공하는 명령어 코드입니다.<ul><li>__Coil (0x)__: Function Code 01, Read Coil (Bit)</li><li>__Discrete Input (1x)__: Function Code 02, Read Discreate Input (Bit)</li><li>__Input Regiester (3x)__: Function Code 04, Read Input Register (Word)</li><li>__Holding Register (4x)__: Function Code 03, Read Holding Register (Word)</li></ul> | * |
| _Address_ | <ul><li>대상 데이터의 시작 주소입니다.</li><li>Modbus 프로토콜에서 지원하는 주소 범위인 0부터 65535까지 사용할 수 있습니다.</li></ul> | * |
| _Length_ | <ul><li>대상 데이터의 시작 주소 부터의 데이터 길이 입니다.</li><li>Modbus 프로토콜에서 지원하는 데이터 길이인 1부터 최대 125까지 사용할 수 있습니다.</li></ul> | * |

### Data

| Info | Description |
| :- | :- |
| _Value_ | *Function Code*, *Address*, *Length*의 설정값을 사용한 데이터 요청에 대해 정상적인 응답을 받았을 때 수집된 데이터가 출력됩니다. 통신 실패나, 비정상적인 응답을 받은 경우는 출력하지 않습니다. |

###### 자세한 내용은 [Tags 페이지](../general/tags.md)를 참고 바랍니다.

## Actions
Modbus RTU의 *Actions* 사용 방법은 다른 Entity들과 동일합니다.  
###### 자세한 내용은 [Actions 페이지](../general/actions.md)를 참고 바랍니다.

## Tags Example
*Tags* 사용 예시입니다. 

##### 예시) Read Coil 읽기 결과
Coil Status의 데이터가 **Address0: 1, Address1: 0, Address2: 1, Address3: 1** 인 경우 *Tag* 수집 결과는 다음과 같습니다. 
| Function Code | Address | Length | Value(Raw) |
| :-: | :-: | :-: | :-: |
| Coil(0x) | 0 | 1 | 0x01 |
|  Coil(0x) | 1 | 1 | 0x00  |
|  Coil(0x) | 0 | 2 | 0x01 |
|  Coil(0x) | 0 | 4 | 0x0D |

## Actions Example
*Actions* 사용 예시입니다(<span class="construction"/>)