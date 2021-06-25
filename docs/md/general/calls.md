# Calls
`Calls`에서는 설정한 데이터베이스에 데이터를 읽거나 쓸 수 있습니다. 또한 `Actions`를 통해 호출되어 이 페이지는 `Calls`에서 <b>공통적</b>으로 사용되는 항목에 대해 설명합니다.

## Call ID
Call을 구분하기 위한 ID입니다. 

| Key | Description | Required |
| :- | :- | :-: |
| _Call_ | Call을 식별할 수 있는 고유 ID | * |

## Call Information
Call Information은 설정한 데이터베이스마다 다르며 각 데이터베이스와 Communication하기 위해 필요한 정보를 입력합니다.

## Condition
`Calls`의 데이터를 수집하기 위한 조건입니다.
| Key | Description | Required |
| :- | :- | :-: |
| _Interval Value_ | 데이터를 수집할 시간 간격 | * |
| _Interval Unit_ | Interval Value에서 입력한 시간의 단위(ms, s, m, h, d) | * |

## Property
`Call`의 속성 정보를 입력합니다.

| Key | Description | Required |
| :- | :- | :-: |
| _Category_ | 동일한 성질을 가진 Tag의 분류가 필요할 때 사용자가 직접 입력 |  |
| _Comment_ | Tag의 추가적인 설명이 필요할 때 사용자가 직접 입력 |  |

## Data
`Call`로 수집된 데이터입니다.
| Key | Description |
| :- | :- |
| _Value_ | 마지막 호출 시 Call의 값, DB마다 응답형태가 다름 |
