# HTTP & HTTPS

HTTP 및 HTTPS (이하 HTTPS 생략) 클라이언트의 요청에 응답할 수 있는 HTTP 서버를 만들 수 있습니다.  
클라이언트는 Get Method를 사용하여 Tag 데이터를 수집할 수 있습니다.  

## Client URL 사용 방법
다음과 같은 URL로 데이터를 요청할 수 있습니다.  
::: tip URL 형식
http://__Interactor IP 주소__:__HTTP 생성 시 입력한 Port__/custom/__사용자가 입력한 path__
:::
Example - http://127.0.0.1:2290/custom/tag1


## Response 구조
### 1. 정상적인 Path 사용
```
{
  "value_string": "0x64", //Value의 hex를 String으로 나타낸 값
  "value": "d", // Value type이 적용된 값
  "timestamp": 1620644793310, // Unix Timestamp
  "raw_string": "100", // raw를 String으로 나타낸 값
  "raw": 100, // raw 
  "binary_string": "0x64", //Binray의 hex를 String으로 나타낸 값
  "binary": "d" // Binary
}
```

데이터 중 raw와 binary 출력에는 다음과 같은 규칙이 적용됩니다.
#### 1. 데이터가 String으로 출력 가능한 ASCII code인 경우 String으로 출력
Example - 데이터가 0x4141일 때 Raw는 "AA"로 출력

#### 2. 데이터가 String으로 출력 불가능한 ASCII code인 경우 Unicode로 출력
Example - 데이터가 0x0041일 때 Raw는 "\u0000A" (0x00은 ASCII로 NUL 이기 때문에 String으로 출력 불가능)

#### 3. 데이터가 ASCII code가 아닌 경우 ISON(Interactor Serialized Object Notation)으로 출력
Example - 데이터가 0x0080일 때 아래와 같이 출력
```
"raw": {
  "ISON-value": "0080",
  "ISON-type": "Bytes"
},
```

### 2. 존재하지 않는 Path 사용
```
null
```

## Connection Information
### Port
URL에 입력하는 포트 번호 입니다. Interactor의 Server에서 사용중인 Port를 입력하면, 자동으로 Interactord의 Server에서 사용하지 않는 Port로 변경 됩니다.

## Server Access Control
HTTP의 엑세스 제어와 인증을 위해 "Basic" 인증을 설정할 수 있습니다. 생성된 아이디가 없으면 Basic 인증 없이 HTTP 프로토콜을 사용할 수 있고, 생성된 아이디가 하나라도 있으면 타겟 서버(아이디가 있는 Port)의 모든 요청은 Basic 인증이 필요합니다. Basic 인증 없이 인증이 필요한 서버에 데이터를 요청하면, __"invalid autorization"__ 응답을 받습니다.
* __Username__: Interactor에서 구분하기 위한 사용자 이름입니다. Client에 전송되지 안습니다.
* __ID__: Basic 인증에 사용되는 아이디 입니다.
* __Password__: Basic 인증에 사용되는 패스워드 입니다.

## Tag Information
HTTP Client에서 요청할 타겟 Tag와 path를 설정합니다.  

### Path
URL에서 __cumsom/__ 뒤에 입력되는 Path 입니다.
Path는 영문자와 점(".") 을 사용하여 설정할 수 있습니다.  
#### 단일 Path
점(".") 없이 영문자 또는 숫자를 입력하여 Path를 만들면 하나의 Tag 값을 가르키는 Path가 됩니다.  
<img src="../../img/server/path1.png" width="800">  
tag1의 데이터를 수집하기 위해서 /custom/aaa 를 사용한 결과 입니다.
```
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
점(".")을 사용하여 Path를 만들면 두 개 이상의 Tag 값을 가지는 Path가 됩니다.  
<img src="../../img/server/path2.png" width="800">  
/cusom/aaa를 사용하면 tag1과 tag2의 값을 수집할 수 있습니다.  
```
{
  "ddd": {
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

### Category / Group / Entity / Tag
응답의 타겟이 되는 Tag를 설정합니다.

### Value Type
타겟이 되는 Tag의 Value Type을 출력합니다.  


