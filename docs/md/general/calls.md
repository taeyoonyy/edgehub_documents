# Calls
*Calls*는 *Database Entity*에서 대상 데이터베이스로 사용자가 입력한 Query를 전송하고 결과를 받아 값으로 만들기 위해 사용합니다. 이 페이지는 *Calls*에서 **공통적**으로 사용되는 항목에 대해 설명합니다.

## Call ID
*Call*을 구분하기 위한 ID입니다. 

| Key | Description | Required |
| :- | :- | :-: |
| _Call_ | *Call*을 식별할 수 있는 고유 ID | * |

## Call Information
*Call Information*은 데이터베이스마다 다르며 각 데이터베이스와 Communication하기 위해 필요한 정보를 입력합니다.

## Condition
*Call* 단위로 실행하여 데이터를 수집할 때 적용되는 설정입니다.
| Key | Description | Required |
| :- | :- | :-: |
| _Interval Value_ | 데이터를 수집할 시간 간격 | * |
| _Interval Unit_ | *Interval Value*에서 입력한 시간의 단위(ms, s, m, h, d) | * |

## Property
*Call*의 속성 정보를 입력합니다.
| Key | Description | Required |
| :- | :- | :-: |
| _Category_ | 동일한 성질을 가진 *Tag*의 분류가 필요할 때 사용자가 직접 입력 |  |
| _Comment_ | *Tag*의 추가적인 설명이 필요할 때 사용자가 직접 입력 |  |

## Data
*Call*의 설정 데이터에 따라 데이터를 수집한 결과가 정상일 때 값이 출력됩니다.
| Key | Description |
| :- | :- |
| _Value_ | 마지막 호출 시 *Call*의 값, DB마다 응답형태가 다름 |
