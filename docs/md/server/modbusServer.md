# Modbus Server
- Modbus TCP 클라이언트의 요청에 응답하는 서버를 만들 수 있습니다.
- 클라이언트는 <strong>Function Code 01(Coil Status), 02(Input Status), 03(Holding Register), 04(Input Register)</strong>를 사용하여 데이터를 요청할 수 있습니다.

## Connection Information
Modbus TCP 서버를 만들기 위해 필요한 데이터를 설정합니다.
| Key | Description | Required |
| :- | :- | :-: |
| _Port_ | Modbus TCP Server Port | * |
| _UIDs_ | Modbus TCP Server 에서 사용할 Unit ID | * |

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
* `UIDs`는 1개 이상 입력 가능하며 콤마(`,`)로 구분합니다(예시 `1, 2, 3`).
* Modbus Server는 Function Code 01, 02, 03, 04의 <strong>0부터 65535</strong>까지 Address에 대해서 기본값인 0을 가지고 있습니다.  
* Tag ID에서 설정하지 않은 범위에 대해서 요청을 받으면 `Error Code 0x02 Illegal data address`가 아닌 `0`의 값을 회신합니다.
:::

## Tags
데이터를 가져오기 위해 필요한 설정을 입력하고, 요청한 데이터의 값을 확인할 수 있습니다.
### Tag ID
Modbus TCP Client에서 데이터 요청 시 필요한 <strong>UID, Function Code, Address</strong>를 설정합니다.
| Key | Description | Required |
| :- | :- | :-: |
| _ID_ | **Modbus Unit ID**: Connection Info에서 입력한 UIDs 중 하나의 값 | * |
| _Function Code_ | **Modbus Function Code**: Coil, Discrete Input, Input Register 그리고 Holding Register 중 선택 | * |
| _Address_ | **Modbus Address**: 0 ~ 65535 사이 값 입력 | * |

### Tag Information
Tag ID의 대상이 되는 Interactor의 Tag를 설정합니다.
| Key | Description | Required |
| :- | :- | :-: |
| _Category_ | 응답의 대상이 되는 Tag의 Category 선택  | * |
| _Group_ | 응답의 대상이 되는 Tag의 Group 선택(Category가 Device인 경우 해당) |  |
| _Entity_ | 응답의 대상이 되는 Tag의 Entity 선텍  | * |
| _Tag_ | 응답의 타겟이 되는 Tag 선택 | * |

### Value
수집된 데이터의 값을 확인할 수 있습니다.
| Key | Description | 
| :- | :- |
| _Type_ | 타겟이 되는 Tag의 Value Type 자동 출력 |
