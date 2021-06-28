# Tags
이 페이지는 `Tags`에서 <strong>공통적</strong>으로 사용되는 항목에 대해 설명합니다(<span class="construction"/>).

## Tag ID
Entity 내에서 Tag를 구분하기 위한 ID입니다. 

| Key | Description | Required |
| :- | :- | :-: |
| _Tag_ | Tag를 식별할 수 있는 고유 ID | * |

## Tag Information
- `Tag` 단위로 외부 디바이스와 Communication하기 위해 필요한 설정 데이터입니다. 
- `Value Type`은 총 15개로 `Server`의 일부 프로토콜을 제외한 나머지 서비스에서 선택할 수 있습니다. 그 외 나머지 Tag Information은 Service마다 내용이 상이하므로 개별 페이지를 참고 바랍니다.

| Key | Description | Required |
| :- | :- | :-: |
| [Value Type](../details/valueType.md) | 수집될 데이터의 Value Type | * |

###### 자세한 내용은 Details의 해당 페이지를 참고 바랍니다.

## Condition
`Tag` 단위로 데이터를 수집하기 위한 조건입니다.
| Key | Description | Required |
| :- | :- | :-: |
| _Interval Value_ | 데이터를 수집할 시간 간격 | * |
| _Interval Unit_ | Interval Value에서 입력한 시간의 단위(ms, s, m, h, d) | * |
|  [Transform](../details/transform.md) | Interactor로 데이터가 수집되기 전 추가적인 변환이 필요할 때 사용 |  |
| _Load Condition_ | <ul><li>Tag의 값을 Internal Database에 저장하기 위한 조건 설정</li><li>History가 enable인 경우만 사용 가능</li></ul> |  |
| _History_ | Internal Dabase에 Tag 값 저장여부 설정(Default `Disable`) | * |
| [Buffer](../details/buffer.md) | Tag의 값을 임시로 저장하기 위한 버퍼 크기 설정(Default `1`) | * |

###### 자세한 내용은 Details의 해당 페이지를 참고 바랍니다.

## Property
`Tag`의 속성 정보를 입력합니다.

| Key | Description | Required |
| :- | :- | :-: |
| _Category_ | 동일한 성질을 가진 Tag의 분류가 필요할 때 사용자가 직접 입력 |  |
| _Comment_ | Tag의 추가적인 설명이 필요할 때 사용자가 직접 입력 |  |

## Data
`Tag`로 수집된 데이터입니다.
| Key | Description |
| :- | :- |
| [Type](../details/dataType.md) | Value에 출력되는 데이터의 종류 설정(Raw, Binary, Value) |
| _Value_ | 마지막으로 실행된 Tag 값(Type 설정 적용) |
| _Byte Size_ | 마지막으로 실행된 Tag Value의 Byte 길이 |

###### 자세한 내용은 Details의 해당 페이지를 참고 바랍니다.