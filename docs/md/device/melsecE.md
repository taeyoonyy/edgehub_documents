# MELSEC ETHERNET

MELSEC ETHERNET 프로토콜을 선택하여 Mitsubishi의 MC프로토콜을 사용하는 PLC의 디바이스 메모리를 읽거나 쓸 수 있습니다.
일괄 읽기와 일괄 쓰기를 사용합니다.  

### 대상 제품 - QnA호환 3E프레임  
* QnA: QnA시리즈 PLC CPU
* 3: QnA시리즈 Ethernet인터페이스 모듈이 지원하고 있는 QnA 프레임
* E: Q시리즈 E71

## Connection Information
Connection Information은 타겟 디바이스와 통신하기 위해 모든 데이터에 공통으로 적용되는 설정 값 입니다.
#### PLC에서 확인이 필요한 PLC의 설정 값
자세한 내용은 사용하는 Mitsubishi PLC 사용 설명서를 참고해 주세요.
* __Address__: PLC의 아이피 주소
* __Port__: PLC의 포트 번호
* __Network Number__: Network 번호 (PLC를 경유하여 다른 PLC에 엑세스 하는 경우가 아닐때는 0x00 사용)
* __Station Number__: Station 번호 (PLC를 경유하여 다른 PLC에 엑세스 하는 경우가 아닐때는 0x00 사용)
* __PLC Number__: 요구상대 모듈 국번호 (PLC를 경유하여 다른 PLC에 엑세스 하는 경우가 아닐때는 0xFF 사용)
* __IO Number__: 요구상대 모듈I/O 번호 (PLC를 경유하여 다른 PLC에 엑세스 하는 경우가 아닐때는 0x03FF 사용)
* __Communication Type__: 데이터 코드(바이너리 / ASCII)
#### 효율적인 통신을 위해 Interactor에서 추가된 설정
* __Max Block Size__: 한번에 수집할 데이터의 최대 크기 설정

## Tag Information
Tag 단위로 PLC의 데이터를 읽기 위해서 필요한 설정 데이터 입니다. 제품마다 사용 가능한 디바이스 코드와 디바이스 주소 범위가 다릅니다. 디바이스의 자세한 내용은 Mitsubishi PLC 사용 설명서를 참고해 주세요.  
### Start Address
디바이스 메모리의 디바이스 코드와 디바이스 주소를 조합하여 Interactor에서 대상 데이터의 위치를 설정합니다.  
Example - M0, D100

### Length
Start Address에서 선택한 대상부터 원하는 데이터의 길이를 설정합니다. 
워드(Word) 디바이스는 단위가 워드가 되고, 비트(Bit) 디바이스는 단위가 비트가 됩니다.  
Example1 - Start Address M0과 Length 1: 디바이스 코드 M의 0부터 1개 비트  
Example2 - Start Address D100과 Length 10: 디바이스 코드 D의 100부터 10개 워드 (D100, D101, ..., D109)

### Value
Start Address와 Length의 설정값을 사용한 데이터 요청에 대해 정상적인 응답을 받았을 때 수집된 데이터가 출력됩니다. 통신 실패나, 비정상적인 응답을 받은 경우는 출력하지 않습니다. 

#### Example - 비트 디바이스 읽기 결과
비트 디바이스 M의 데이터가 M0: 0, M1: 0, M2: 1, M3: 1 인 경우 Tag 수집 결과는 다음과 같습니다.  
__Start Address__: M0, __Length__: 1, __Value(Raw)__: 0x10, __Byte Size__: 1  
__Start Address__: M1, __Length__: 1, __Value(Raw)__: 0x00, __Byte Size__: 1  
__Start Address__: M0, __Length__: 2, __Value(Raw)__: 0x10, __Byte Size__: 1  
__Start Address__: M0, __Length__: 3, __Value(Raw)__: 0x1010, __Byte Size__: 2  
__Start Address__: M0, __Length__: 4, __Value(Raw)__: 0x1011, __Byte Size__: 2  

#### Example - 워드 디바이스 읽기 결과
워드 디바이스 D를 읽었을 때 데이터(Decimal)가 D0: 9, D1: 10 인 경우 Tag 수집 결과는 다음과 같습니다.  
__Start Address__: D0, Length: 1, __Value(Raw)__: 0x0009, __Byte Size__: 2  
__Start Address__: D1, Length: 1, __Value(Raw)__: 0x000A, __Byte Size__: 2  
__Start Address__: D0, Length: 2, __Value(Raw)__: 0x0009000A, __Byte Size__: 4  


## Action 
PLC에 데이터를 쓰기 위해 Action을 설정합니다.  
(작성 중)

