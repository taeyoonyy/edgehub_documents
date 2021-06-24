# Sync
- <u>Interactor</u>에서는 동시에 여러 개의 센서 또는 기기에 데이터를 수집합니다. 
- 수집되는 데이터는 수집 Interval과 응답시간 등이 다르므로 순차적이지 않습니다.
- 연관성 있는 데이터를 동시에 수집하기 위해 `Sync`를 통해 각기 다른 여러개의 센서/기기의 데이터의 수집시간을 동기화할 수 있습니다. 

## Sync Mode
`Sync`는 데이터 동기화를 위해 `Bucket`을 만들어 데이터를 수집을 컨트롤합니다. 
데이터는 Interactor로 전달되기 전 `Bucket`에 도착하여 `Sync > Tags > Tag Information > Sync` 설정 값이 `enable`인 데이터를 기다립니다.

| Option | Description |
| :-: | :- |
| _all_ | `Sync > Tags > Tag Information > Sync`가 `enable`인 값이 모두 도착하면 동작 |
| _any_ | `Sync > Tags > Tag Information > Sync`가 `enable`인 값이 하나라도 도착하면 동작 |

## Connection Information
Sync된 Tag를 CSV File로 저장하는 옵션입니다. `Recording from`과 `to`에 값이 입력되지 않으면 Tag 내용은 저장되지 않습니다.

| Key | Description | Required |
| :- | :- | :-: |
| _CSV File Name_ | Tag 정보를 저장할 CSV 파일명  |  |
| _Recording from_ | 저장 시작 시간 |  |
| _to_ | 저장 마침 시간 |  |


## Tags
동기화가 필요한 데이터에 대해 설정하고 이를 수집합니다.

### Tag Information
(<span class="construction"/>)

<!-- 해당 부분을 선택하여 어떤 Device의 Tag를 사용할지 선택한다.
해당 Tag가 Sync에 사용될 지 Enable 한다.
Default Value를 선택할 수 있다.

* All: Default Value로 3가지가 설정이 가능하다.(Latest, NA, Oldest) 각각 (최근 값, NA, Buffer 마지막 값)
모든 Enabled Tag가 도착할때까지 Disabled Tag가 도착하지 않을 시 값이 없으므로 Default Value가 사용된다


| Key | Description | Required |
| :- | :- | :-: |
| _Category_ | 내용 | * |
| _Group_ | 내용 | * |
| _Entity_ | 내용 | * |
| _Tag_ | 내용 | * |
| _Sync_ | 내용 | * |
| _Default_ | 내용 | * | -->

## Actions
(<span class="construction"/>)

## Tags Example
(<span class="construction"/>)

## Actions Example
(<span class="construction"/>)
