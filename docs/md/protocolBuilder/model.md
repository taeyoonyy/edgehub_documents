# Model
`Model` 화면에서는 `TCP`와 `Serial`을 사용하는 Custom 프로토콜에서 데이터를 전송하거나 수신할 때 사용되는 데이터의 패킷 구조를 만듭니다. 만들어진 `Model`은 `Funcion`에서 사용됩니다.

## Model Fields
 데이터를 전송하거나 수신할 할 때 필요한 데이터 구조를 정의합니다. Fields에 생성된 순서가 전송 또는 수신할 때 데이터 순서와 같습니다.

| Key | Description | Required |
| :- | :- | :-: |
| _Name_ | Field 이름. `Function`에서 각 Field를 구분하기 위한 용도  | * |
| _Value_ | Field에 항상 특정 값이 예상될 때 입력. 설정된 값과 입력된 데이터의 값이 다르면 Model이 사용되지 않음 |  |
| _Size_ | Field의 사이즈. 숫자 또는 다른 Field의 Name을 입력하여 동적으로 연결 가능 | * |
| _Type_ | 데이터 타입 설정 (integer, Float, CRC, Bytes, Bits) | * |
| _Units_ | Type이 Float, Integer인 경우 Units (Bits, Bytes) 설정 |  |
| _Endianness_ | Type이 Float, Integer인 경우 Units (Native, Big, Little) 설정  |  |
| _Signedness_ | Type이 Float, Integer인 경우 Signedness (Signed, Unsigned) 설정 |  |
| _Mode_ | Type에서 CRC를 선택하여 CRC를 사용할 때 CRC Mode 설정 |  |

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>

  타겟 디바이스에 데이터를 요청하여 Tag를 만들기 위해서는 최소 2개의 `Model`이 필요합니다.
  
:::
::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>

  Action을 이용하여 타겟 디바이스에 데이터를 쓰기 위해서는 최소 2개의 `Model`이 필요합니다.
  
:::