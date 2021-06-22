# HTTP & HTTPS
HTTP 또는 HTTPS 클라이언트의 요청에 응답할 수 있는 서버를 만들 수 있습니다.  클라이언트에서 데이터 수집은 Interactor가 기본적으로 제공하는 Path와 사용자가 직접 만드는 Path의 두 가지 방법을 사용할 수 있습니다.  
HTTP는 파일 경로를 지정하여 웹 서버를 만들 수 있습니다.

## Connection Information
HTTP 또는 HTTPS 서버를 만들기 위해 필요한 데이터를 설정 합니다.

| Key | Description | Required |
| :- | :- | :-: |
| _Port_ | Server Port | * |
| _Web Server Path_ | Web server 대상 파일 경로 </br> Ex) c:/web_server/dist |  |


::: warning <p class="custom-block-title"><img src="../../img/icon/warning.svg">WARNING</p>
Interactor의 Server에서 사용중인 `Port`를 입력하면 자동으로 사용 가능한 `Port` 번호로 변경됩니다.    
단, Interactor가 아닌 다른 프로그램에서 사용하는 `Port` 번호는 확인하지 않습니다.
:::

## Server Access Control
HTTP의 엑세스 제어와 인증을 위해 **"Basic"** 인증을 설정할 수 있습니다.  
* __Username__: Interactor에서 구분하기 위한 사용자 이름입니다. Client에 전송되지 않습니다.
* __ID__: Basic 인증에 사용되는 아이디 입니다.
* __Password__: Basic 인증에 사용되는 패스워드 입니다.

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
생성된 아이디가 없으면 Basic 인증 없이 HTTP 프로토콜을 사용할 수 있고, 생성된 아이디가 하나라도 있으면 타겟 서버(아이디가 있는 Port)의 모든 요청은 Basic 인증이 필요합니다. Basic 인증 없이 인증이 필요한 서버에 데이터를 요청하면, __"invalid autorization"__ 응답을 받습니다.
:::


## Tags
Interactor에서 제공하는 Path가 아닌사용자가 원하는 Path를 설정하여 데이터 수집을 원할 때 사용합니다.

### Tag Information
HTTP Client에서 요청할 대상 `Tag`와 `path`를 설정합니다. 

| Key | Description | Required |
| :- | :- | :-: |
| _Path_ | 사용자가 원하는 Path  | * |
| _Category_ | 응답의 대상이 되는 Category  | * |
| _Group_ | 응답의 대상이 되는 Device의 Group  |  |
| _Entity_ | 응답의 대상이 되는 Entity  | * |
| _Tag_ | 응답의 타겟이 되는 Tag  | * |

### Value
| Key | Description | 
| :- | :- |
| _Path_ | 타겟이 되는 Tag의 Value Type 자동 출력 |


### Path 입력 방법
URL에서 `http://Interactor IP 주소:HTTP 생성 시 입력한 Port/custom/` 뒤에 입력되는 Path입니다. Path는 영문자와 점(`.`) 을 사용하여 설정할 수 있습니다. 

#### 단일 Path
 점(`.`) 없이 영문자 또는 숫자를 입력하여 Path를 만들면, 하나의 Tag 값을 가르키는 Path가 됩니다.  
<img src="../../img/server/path1.png" width="800">  

##### 예시) tag1의 데이터를 수집하기 위해 `http://127.0.0.1:2290/custom/aaa` 를 사용한 결과
``` json
{
  "value_string": "0x00",
  "value": "\u0000",
  "timestamp": 1620645752942,
  "raw_string": "0",
  "raw": 0,
  "binary_string": "0x00",
  "binary": "\u0000"
}
```
#### 두 개 이상의 Tag 값을 가지는 Path
점(`.`)을 사용하여 Path를 만들면 두 개 이상의 Tag 값을 가지는 Path가 됩니다.    
<img src="../../img/server/path2.png" width="800">  

##### 예시) `http://127.0.0.1:2290/custom/aaa`를 사용한 결과  

``` json
{
  "bbb": {
    "value_string": "0x64",
    "value": "d",
    "timestamp": 1620646058780,
    "raw_string": "100",
    "raw": 100,
    "binary_string": "0x64",
    "binary": "d"
  },
  "ccc": {
    "value_string": "0x00",
    "value": "\u0000",
    "timestamp": 1620646058780,
    "raw_string": "0",
    "raw": 0,
    "binary_string": "0x00",
    "binary": "\u0000"
  }
}
```


## Interactor Path 를 사용한 Tag 데이터 요청
HTTP 또는 HTTPS Client는 Interactor에서 제공하는 Path를 사용하여 Interactor의 모든 Tag 데이터를 요청할 수 있습니다.
다음과 같은 URL 형식을 사용해 데이터를 요청할 수 있습니다.
``` http
http://{Interactor IP 주소}:{HTTP 생성 시 입력한 Port}/data/tag/{path}
```

##### 예시) Interactor의 모든 Tag 정보를 가져오고 싶은 경우
- URL 입력
```  http
http://127.0.0.1:2290/data/tag
```
- 수집 데이터
``` json
{
  "device": { // category
    "Port": { // Device group name
      "elixir": { // Device entity name
        "tag1": { // tag ID
          "value_string": "\"hello\"",
          "value": "hello",
          "timestamp": 1623394069668,
          "raw_string": "0x68656C6C6F",
          "raw": "hello",
          "binary_string": "0x68656C6C6F",
          "binary": "hello"
        }
      }
    }
  },
  .
  .
  .
}
```
::: tip  <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
`json`의 key값을 `path`로 사용하여 특정 데이터를 가져올 수 있습니다(단, TagID까지만 접근가능).

##### 예시) `http://127.0.0.1:2290/data/tag/device/Port`
``` json
{
  "elixir": { // entity name
    "tag1": { // tag ID
      "value_string": "\"hello\"",
      "value": "hello",
      "timestamp": 1623394325673,
      "raw_string": "0x68656C6C6F",
      "raw": "hello",
      "binary_string": "0x68656C6C6F",
      "binary": "hello"
    }
  }
}
```
:::


## Custom Path를 사용한 Tag 데이터 요청
HTTP 또는 HTTPS Client는 Interactor에서 Tags에서 사용자가 설정한 Path를 사용하여 지정한 Tag 데이터를 요청할 수 있습니다.
다음과 같은 URL 형식을 사용해 데이터를 요청할 수 있습니다.
``` http
http://{Interactor IP 주소}:{HTTP 생성 시 입력한 Port}/{path}
```


##### 예시) Server의 Tags에 있는 `tag1` 값을 가져오고 싶은 경우 
- URL 입력
```  http
http://127.0.0.1:2290/custom/tag1
```
- 수집 데이터

``` json
{
  "value_string": "\"hello world\"",
  "value": "hello world",
  "timestamp": 1623631440264,
  "raw_string": "0x68656C6C6F20776F726C64",
  "raw": "hello world",
  "binary_string": "0x68656C6C6F20776F726C64",
  "binary": "hello world"
}
```
###### **Custom path**에 대한 내용은 아래의 [Tag Information](#tag-information)을 참고 바랍니다.

## Response 구조
수집된 
### 정상적인 Path 사용
``` json
{
  "value_string": "0x64", // Value의 hex를 String으로 나타낸 값
  "value": "d", // Value type이 적용된 값
  "timestamp": 1620644793310, // Unix Timestamp
  "raw_string": "100", // raw를 String으로 나타낸 값
  "raw": 100, // raw 
  "binary_string": "0x64", // Binray의 hex를 String으로 나타낸 값
  "binary": "d" // Binary
}
```
::: tip  <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
데이터 중 raw와 binary 출력에는 다음과 같은 규칙이 적용됩니다.
- 데이터가 String으로 출력 가능한 ASCII code인 경우 String으로 출력  
:mag_right: 예시) 데이터가 0x4141일 때 Raw는 "AA"로 출력

-  데이터가 String으로 출력 불가능한 ASCII code인 경우 Unicode로 출력  
:mag_right: 예시) 데이터가 0x0041일 때 Raw는 "\u0000A" (0x00은 ASCII로 NUL 이기 때문에 String으로 출력 불가능)

- 데이터가 ASCII code가 아닌 경우 ISON(Interactor Serialized Object Notation)으로 출력  
:mag_right: 예시) 데이터가 0x0080일 때 아래와 같이 출력
``` json
"raw": {
  "ISON-value": "0080",
  "ISON-type": "Bytes"
}
```
:::

### 존재하지 않는 Path 사용
``` json
null
```
