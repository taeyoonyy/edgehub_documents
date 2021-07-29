# Protocol Detail
Built-in 프로토콜과 Custom 프로토콜의 service, status, connection information 및 tag information 확인하거나 설정하는 화면입니다. 

## Service
프로토콜에서 사용할 수 있는 서비스 종류 입니다.

| Service | Description |
| :- | :- |
| _Builtin Service_ | Interactor에서 제공하는 서비스 |
| _Port_ | Custom 프로토콜에서 표준스트림(STDIN, STDOUT)을 사용하여 외부 프로그램과 연결하기 위한 서비스 |
| _Serial_ | Custom 프로토콜에서 Serial 통신을 사용하여 Device와 연결하기 위한 서비스 |
| _TCP_ | Custom 프로토콜에서 TCP 통신을 사용하여 Device와 연결하기 위한 서비스  |

## Status
Custom protocol의 수정 가능 / 불가능 상태를 제어합니다. `Device Entity`에서 사용중인 프로토콜이 수정되는것을 막기 위해 설정합니다.

| Status | Description |
| :- | :- |
| _Editable_ | <ul><li>수정 가능</li><li>해당 Protocol을 `Device Entity`에서 사용하고 있다면 Editable로 변경 불가</li></ul> |
| _Non-editable_ | <ul><li>수정 불가</li><li>Device의 Entity에서 해당 Protocol을 사용할 수 있는 상태</li></ul> |


## Connection Information
Custom 프로토콜을 사용하여 디바이스와 연결을 위해 필요한 정보를 설정합니다. 해당 프로토콜을 `Device Entity`에서 선택하면 아래 설정된 내용이 `Device Information` > `Connection informarion`에 출력됩니다.

| Key | Description |
| :- | :- |
| _Key_ | Connection Information에 출력되는 `Key` 이름 |
| _Value Type_ | 입력 또는 선택된 값의 결과 Type (text / number 중 선택) |
| _Input Type_ | 사용자가 직접 입력할 것인지 혹은 `Options`에 입력한 항목 중 선택할 것인지 선택 |
| _Options_ | `Input Type`을 `Options`로 선택한 경우 선택 항목 입력. 각 선택항목은 `,` 로 구분 |
| _Default_ | 사용자가 입력하기 전 기본으로 설정되는 값 |


## Tag Information
Custom 프로토콜 사용시 데이터를 수집할 때 필요한 Tag를 만들기 위한 정보를 설정합니다. 해당 프로토콜을 `Device Entity`에서 선택하면 아래 설정된 내용이 `Tags` > `Tag informarion`에 출력됩니다.

| Key | Description |
| :- | :- |
| _Key_ | Tags Information에 출력되는 `Key` 이름 |
| _Value Type_ | 입력 또는 선택된 값의 결과 Type (text / number 중 선택) |
| _Input Type_ | 사용자가 직접 입력할 것인지 혹은 `Options`에 입력한 항목 중 선택할 것인지 선택 |
| _Options_ | `Input Type`을 `Options`로 선택한 경우 선택 항목 입력. 각 선택항목은 `,` 로 구분 |

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>

  `Tag Information`은 `Default`가 없습니다.

:::

::: warning <p class="custom-block-title"><img src="../../img/icon/warning.svg">WARNING</p>

  `Connection Information` 과 `Tag Information`의 `Key`는 수정할 수 없습니다.  

:::