# Port
이 페이지는 <u>Edgegub-i | Interactor Web Application(이하 Interactor)</u>의 `Custom Protocol`을 이용한 `Port`의 사용법을 설명합니다.

<div class="toc-title"><img src="../../img/icon/list.svg">Table of Contents</div>

[[toc]]

## Connection Information

#### :black_medium_square: Executable

Executable에는 실행 파일(`.exe`)의 <u>path</u> 또는 <u>명령어</u>를 입력합니다.

- 환경변수가 설정되어 있지 않은 경우 아래와 같이 실행파일의 full path를 입력합니다.
``` bash
C:\Python39\python.exe
```

- 환경변수가 설정되어 있는 경우 아래와 같이 실행파일의 이름을 입력합니다.
``` bash
python
```

#### :black_medium_square: Arguments
Arguments에는 실행파일을 통해 실행하고자 하는 파일의 path를 입력합니다.
``` bash
C:\workspace\test_python.py
```

#### :black_medium_square: Use Stdio
Select box에서 `Standard Input/Output`의 사용여부를 선택할 수 있습니다.
- **Yes(사용)**: 표준입출력을 통해 외부 프로그램과 데이터를 송수신합니다.
- **No(미사용)**: 표준입출력을 사용하지 않고 port만 실행합니다(Tag 사용불가).

#### :black_medium_square: Packet
송수신할 데이터의 Length를 실어 보낼 Header의 길이를 지정합니다. 설정한 Header를 통해 데이터의 Length를 확인하고, 그 Length만큼 데이터를 읽거나 씁니다(**N = Data Length**).  
| Packet | Header | 예) N = 255 | 예) N = 256 | 예) N = 16777216 |
| :-: | -:| -: | -: | -: |
| 0 | - | - | - | - |
| 1 | N | 255| - | - |
| 2 | 0&nbsp;&nbsp;&nbsp;&nbsp;N | 0&nbsp;&nbsp;&nbsp;&nbsp;255 | 1&nbsp;&nbsp;&nbsp;&nbsp;0 | -  |
| 4 | 0&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;N | 0&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;255 | 0&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;0 | 1&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;&nbsp;0 | 

##### :mag_right: 예시) Interactor로 `hello`를  보내는 경우(Elixir)
``` elixir
# Tag Info - Value Type: String-ASCII
# hello의 length: 5
# hello의 ASCII Code: 104, 101, 108, 108, 111

# Packet 0
<<104, 101, 108, 108, 111>>

# Packet 1 
<<5, 104, 101, 108, 108, 111>>

# Packet 2
<<0, 5, 104, 101, 108, 108, 111>>

# Packet 4
<<0, 0, 0, 5, 104, 101, 108, 108, 111>>
```

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
`<< >>`는 binary를 의미합니다. 자세한 내용은 [Elixir Syntax의 Binary](../elixir/binary.md)를 참고 바랍니다.
:::

## Tags
#### :black_medium_square: Tag Information
- **Custom information**: Custom Protocol 생성 시 Protocol Builder 페이지에서 추가한 Tag Information의 내용 
- **Value Type**: Interactor로 수신되는 `json`구조의 데이터에서 key가 `Value`인 데이터의 Value Type
``` json
{
  "id": 309669,
  "value": "hello" // String-ASCII
}
```

#### :black_medium_square: Data
- **Type**: Data - Value에 출력되는 데이터의 종류 설정 (Raw, Binary, Value 중 선택)
- **Value**: 마지막으로 수신된 Tag 값 (Type 설정 적용)
- **Byte Size**: 마지막으로 수신된 Tag Value의 Byte 길이

##### :mag_right: 예시) Interactor에서 전달하는 Data의 Structure(`json`)
``` json
{
  "id": 309669,
  "data": {
    "tagInfo": {
      "msg": "hello"
    },
    "command": "read_tag"
  }
}
```
##### :mag_right: 예시) Interactor에서 수신하는 Data의 Structure(`json`)
``` json
{
  "id": 309669,
  "value": "hello"
}
```


## Actions
Actions 공통