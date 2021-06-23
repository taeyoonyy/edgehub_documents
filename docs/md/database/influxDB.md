# InfluxDB
시계열 데이터베이스(Time-series database, TSDB)인 InfluxDB와 Interactor를 연결하여 데이터를 읽거나 쓸 수 있습니다. `Connection Information`에서 InfluxDB와 연결하기 위한 설정을 하고, `Calls`에서 사용자가 원하는 Query를 사용하여 데이터를 읽거나 쓸 수 있습니다. `Tags`에서는 Interactor에서 지정한 형식에 따라 InfluxDB의 데이터를 수집할 수 있고, `Actions`을 이용하여 InfluxDB에 데이터를 쓸 수 있습니다.

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
<!-- - Calls의 InfluxQL을 이용하여 WRITE, READ가 모두 가능하지만 특정 데이터만 READ하기 위해서는 Virtual[(예제)](#example)을 이용해야 합니다. 이러한 특성에 따라 Calls은 WRITE를 위한 목적으로 사용할 것을 권장합니다. -->
Interactor를는 InfluxDB v1.8.x 버전을 지원합니다.
:::

## Connection Information
Interactor와 InfluxDB를 연결하기 위해 필요한 데이터를 설정합니다.

| Key | Description | Required |
| :- | :- | :-: |
| _Address_ | InfluxDB가 설치된 PC의 IP Address | * |
| _Port_ | InfluxDB가 사용하는 Port | * |
| _Database_ | 수집 대상이 되는 DATABASE 이름 | * |
| _Username_ | 수집 대상이 되는 DATABASE에 설정된 Username |
| _Password_ | 수집 대상이 되는 DATABASE에 설정된 Password |
| _Precision_ | DATABASE에 설정된 Timestamp의 시간 정밀도 | * | 

::: warning <p class="custom-block-title"><img src="../../img/icon/warning.svg">WARNING</p>
- 입력한 `Port`를 다른 프로그램에서 사용하고 있다면, Left Nav의 연결 상태가 `Connected`인 초록색으로 표시될 수 있습니다. 
- 연결 상태가 `Connected` 이지만 InfluxDB 사용에 문제가 있다면 `Port`를 확인해주세요.
:::

::: warning <p class="custom-block-title"><img src="../../img/icon/warning.svg">WARNING</p>
_Username_/_Password_ 가 틀렸을 시, `Calls`의 Read한 데이터의 `status_code`가 `403`으로 응답되며, `error authorizing ...`과 같은 error message가 확인됩니다.
:::

## Calls
InfluxDB 전용 Query인 Influx Query Lanaguage(이하 InfluxQL)를 사용하여 InfluxDB의 데이터를 읽거나 쓸 수 있습니다. Calls에서는 InfluxQL을 사용하고 응답을 확인할 수 있습니다.

### Call Information
InfluxDB에 사용할 Query를 입력하고, 필요한 경우 Retention, Consistency를 입력합니다.

| Key | Description | Required |
| :- | :- | :-: |
| _InfluxQL_ | 원하는 데이터를 읽거나 쓰기 위한 InfluxQL | * |
| _Retention_ | 지난 데이터들을 자동으로 만료시키는 Interval  |  |
| _Consistency_ | 데이터 Write의 일관성 수준(`all`, `any`, `one`, `quorum`)|  |

::: warning <p class="custom-block-title"><img src="../../img/icon/warning.svg">WARNING</p>
- InfluxDB의 Field는 한 종류의 데이터 타입만 입력을 허용합니다. **처음 생성되는 Field**에 `Tag Reference`를 이용하여 데이터를 입력할 때, 타겟 `Tag`가 값을 가지기 전 이라면 `null`이 입력되어 그 뒤에 입력되는 데이터 타입이 달라지게 되어 입력이 되지 않는 문제가 발생할 수 있습니다.  
- Field에 처음 값을 입력하기 위해 `Tag Reference`를 사용할 때는 **default** 값을 설정하여 `Tag`가 `null`로 입력되는것을 막을 수 있습니다.  
<img src="../../img/database/influx_tag_ref_default.png">
:::

### Data

| Info | Description |
| :- | :- |
| _Value_ | InfluxDB의 응답으로 JSON 데이터가 수신됩니다. 수신된 데이터는 HTTP 상태 코드인 `status_code`와 `body`를 Key로 가지는 JSON 데이터 입니다. `body`는 입력된 InfluxQL에 따라서 데이터 형태가 다릅니다. |



## Tags
InfluxDB의 데이터를 읽기 위해 필요한 설정을 입력하고, 응답을 확인할 수 있습니다.

### Tag Information
`Tag` 단위로 InfluxDB의 데이터를 읽기 위해 필요한 설정을 입력 합니다. 읽기 요청에 대한 응답이 `Tag`의 값이 됩니다.

| Key | Description | Required | 
| :- | :- | :-: |
| _Measurement_ | 수집 대상이 되는 Measurement 이름 | * |
| _Tag key sets_ | Field key 수집의 조건이 되는 Tag의 Key와 Value|  |
| _Field key_ | 수집 대상인 Field key | * |
| _Value Type_ | 수집된 `Tag`의 Value Type 설정 | * |

<!-- ::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
`Tag Key sets`는 다음과 같이 사용합니다(key: 큰따옴표`" "`, value: 작은따옴표`' '`).
<img src="../../img/database/influx_tag_info.png">
::: -->
::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
#### 문자 입력
- `Measurement`, `Feild Key` 그리고 `Tag key sets`의 Key에 입력되는 문자는 큰 따옴표`" "` 없이 입력할 수 있습니다.
-  단, key가 InfluxDB의 예약어인 경우 `" "`를 사용해야 합니다. 예를 들어, Field key 이름이 measurement인 경우 <u>"measurement"</u>로 입력합니다.
:::

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
#### Tag key sets
- `Tag key sets`를 2개 이상 사용할 때는 and로 연결합니다.
- value는 작은따옴표`' '`를 사용합니다.  
  예시) kag='aa' and "tag"='1'
:::


## Calls Example
Calls에서 InfluxQL 입력과 Data에 출력된 응답 예시입니다.
##### 예시1) NEW_MEASUREMENT에 `{tag reference}`로 가져온 데이터 추가
* InfluxQL 입력
``` sql
INSERT NEW_MEASUREMENT,tag=1 field={device, GROUP1, DEVICE1, FIRST}
```
* Data 에 출력된 응답
``` json
{"status_code":204,"body":""}
```

##### 예시2) ADDRESS가 '5'인 데이터 삭제
* InfluxQL 입력
``` sql
DELETE FROM MODBUS WHERE ADDRESS='5'
```
* Data에 출력된 응답
``` json
{"status_code":200,"body":{"results":[{"statement_id":0}]}}
```

##### 예시3) MODBUS에서 가장 최신 데이터 조회
* InfluxQL 입력
``` sql
SELECT * FROM MEMBER order by desc limit 1
```
* Data 에 출력된 응답
``` json
{
  "status_code": 200,
  "body": {
    "results": [
      {
        "statement_id": 0,
        "series": [
          {
            "values": [ // measurement의 DATA
              [
                "1970-01-01T00:00:00.000012345Z",
                "'MIKE'",
                20
              ],
            ],
            "name": "MYDB", // DATABASE 이름
            "columns": [
              "time", // default column
              "NAME", // Tag Key
              "AGE"  // Field Key
            ]
          }
        ]
      }
    ]
  }
}
```

##### 예시4) Call의 응답을 Parsing 특정 데이터 -  "values"만 사용하고 싶을 때

* InfluxQL 입력
``` sql
SELECT * FROM MODBUS ORDER BY DESC LIMIT 1
```
* Data 에 출력된 응답
``` json
{
  "status_code": 200,
  "body": {
    "results": [
      {
        "statement_id": 0,
        "series": [
          {
            "values": [
              [
                "2021-06-21T08:00:50.2871563Z",
                "3",
                5
              ]
            ],
            "name": "MODBUS",
            "columns": [
              "time",
              "ADDRESS",
              "VALUE"
            ]
          }
        ]
      }
    ]
  }
}
```

- Elixir Syntax만 사용하여 Parsing하는 방법은 다음과 같습니다.
``` elixir 
{call, database, MYDB, CALL} |> Map.get("body") |> Map.get("results") |> List.first |> Map.get("series") |> List.first |> Map.get("values") |> List.flatten
```
- Interactor 전용 Syntax를 사용하여 Parsing하는 방법은 다음과 같습니다.
``` elixir 
{call, database, MYDB, CALL} |> Interactor.Object.get_in( ["body", "results","0", "series","0","values"]) |> List.flatten
```
###### 사용된 Syntax에 대한 내용은 [Elixir Syntax](../elixir/elixirSyntax.md)를 참고 바랍니다.  

## Tags Example
##### 예시) Tag를 이용해 수집된 데이터 중 특정 데이터만 value로 설정하기 위해 Transform 사용
- Transform 사용 전 Tag Value
``` elixir
[%{
    "series" => [%{
        "columns" => [
          "time",
          "VALUE"
        ],
        "name" => "MODBUS",
        "values" => [
          [
            "2021-06-21T01:19:52.6980444Z",
            10
          ]
        ]
      }
    ],
    "statement_id" => 0
  }
]
```
- `Transform` 설정 예시

``` elixir
v |> List.first |> Map.get("series") |> List.first |> Map.get("values") |> List.flatten |> List.last
```

 - Transform 사용 후 Tag Value
```
10
```


## InfluxDB Configuration
InfluxDB를 사용하기 위해 필요한 InfluxDB의 설정 데이터 예시입니다. 아래 내용은 InfluxDB가 설치된 위치의 `influxdb.conf` 파일에서 확인할 수 있습니다.
###### 자세한 내용은 **InfluxDB의 사용 매뉴얼**을 참고 바랍니다.

### Port 설정
``` conf
# The bind address used by the HTTP service.
# bind-address = ":8086"
```
### Username & Password 사용 여부 설정

- auth-enabled 값이 `true` 이면 Username과 Password를 사용하고, `false`면 사용하지 않습니다.
```
# Determines whether user authentication is enabled over HTTP/HTTPS.
# auth-enabled = false
```

### Precision
- InfluxDB 전체에 적용되는 Precision 기본값 입니다.  
- Interactor의 Call을 사용한 입력은 Connection Information에서 Precision 설정이 우선 순위로 적용 됩니다.
``` config
# InfluxDB precision for timestamps on received points ("" or "n", "u", "ms", "s", "m", "h")
# precision = ""
```

### Retention
- InfluxDB 전체에 적용되는 Retention 기본값 입니다.  
- Interactor의 Call을 사용한 입력은 Connection Information에서 Retention 설정이 우선 순위로 적용 됩니다.
``` config
# Automatically create a default retention policy when creating a database.
# retention-autocreate = true

[retention]
  # Determines whether retention policy enforcement enabled.
  # enabled = true

  # The interval of time when retention policy enforcement checks run.
  # check-interval = "30m"
```
### Consistency
- InfluxDB 전체에 적용되는 Consistency 기본값입니다.  
- Interactor의 Call을 사용한 입력은 Connection Information에서 Consistency 설정이 우선 순위로 적용 됩니다.
- **Options**: `all`, `any`, `one`, `quorum`
```
[[opentsdb]]
  # consistency-level = "one"
```