# Tags
이 페이지는 *Tags*에서 **공통적**으로 사용되는 항목에 대해 설명합니다.

## Tag ID
*Entity*에서 *Tag*를 구분하기 위한 ID입니다. 

| Key | Description | Required |
| :- | :- | :-: |
| _Tag_ | *Tag*를 식별할 수 있는 고유 ID | * |

## Tag Information
- *Protocol* 마다 외부 디바이스와 통신을 하여 *Tag*에 원하는 값을 입력하기 위해 필요한 설정입니다.
- *Value Type*을 제외한 나머지 *Tag Information*은 *Protocol*마다 내용이 상이하므로 개별 페이지를 참고 바랍니다.

| Key | Description | Required |
| :- | :- | :-: |
| [Value Type](../details/valueType.md) | 수집될 데이터의 *Value Type* | * |


## Condition
*Tag* 단위로 데이터를 수집할 때 적용되는 설정입니다.
| Key | Description | Required |
| :- | :- | :-: |
| _Interval Value_ | 데이터 수집 시간 간격 | * |
| _Interval Unit_ | *Interval Value*에서 입력한 시간 단위(ms, s, m, h, d) | * |
|  [Transform](../details/transform.md) | 데이터 수집 후 저장하기 전 전처리 |  |
| _Load Condition_ | <ul><li>*Tag*의 값을 Internal Database에 저장하기 위한 조건</li><li>*History*가 enable인 경우 사용 가능</li></ul> |  |
| _History_ | Internal Dabase에 *Tag* 값 저장 여부(Default `Disable`) | * |
| [Buffer](../details/buffer.md) | *Tag*의 값을 임시로 저장하기 위한 버퍼 크기(Default `1`) | * |

###### 각 항목의 자세한 내용은 Details의 해당 페이지를 참고 바랍니다.

## Property
Interactor의 동작과 상관없이 사용자가 원하는 정보를 입력하기 위한 설정입니다.
| Key | Description | Required |
| :- | :- | :-: |
| _Category_ | 동일한 성질을 가진 *Tag*의 분류가 필요할 때 사용자가 직접 입력 |  |
| _Comment_ | *Tag*의 추가적인 설명이 필요할 때 사용자가 직접 입력 |  |

## Data
*Tag*의 설정 데이터에 따라 데이터를 수집한 결과가 정상일 때 값이 출력됩니다.
| Key | Description |
| :- | :- |
| [Type](../details/dataType.md) | *Value*에 출력되는 데이터의 종류 설정(Raw, Binary, Value) |
| _Value_ | 마지막으로 수집된 *Tag* 값(Type 설정 적용) |
| _Byte Size_ | 마지막으로 수집된 *Tag Value*의 Byte 길이 |

###### 자세한 내용은 Details의 해당 페이지를 참고 바랍니다.