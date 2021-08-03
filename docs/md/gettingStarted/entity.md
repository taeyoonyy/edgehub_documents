# Entity
이 페이지는 Interactor의 *Entity* 등록 및 사용 방법을 설명합니다.
::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
Interactor에 등록되는 *Entity*는 크게 두 가지로 분류할 수 있습니다.
* **External Entity**: 외부 디바이스 또는 SW와 연결되는 *Entity(Device, Server, Database)*
* **Internal Entity**: Interactor에서 제공하는 기능으로 데이터 수집 후 추가적인 데이터 가공을 위한 *Entity(Virtual, Sync, Function)*
:::

## Entity 추가
좌측 네비게이션의 +(추가), 🗑(휴지통) 버튼을 이용하여 *Entity*를 추가하거나 삭제할 수 있습니다.  
![img](../../img/entity/add.png)
<img src="../../img/entity/add_modal.png" width="400">

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
- *Group*은 *Device* 카테고리에만 지원됩니다.  
- **입력 조건**: *Group*과 *Entity* 생성 시 영문자, 한글, 숫자 그리고 일부 특수문자를 사용할 수 있습니다.  
- **미허용 특수문자**: Comma`,`, Period`.`, Space` `, Backslash `\`

:::

## Device
- *Device*는 **PLC(Programmable Logic Controller)** 같이 데이터를 가지고 있으며, 통신으로 데이터를 요청하여 응답받을 수 있는 기기들이 대상으로하는 *Entity*입니다.  
- Interactor에서는 아래 7가지 프로토콜을 사용하는 기기들을 연결하여 데이터를 쓰거나(*Action*), 수집(*Tag*)할 수 있습니다. 

### Device Protocol List :memo:
- OPC UA
- Modbus TCP
- Modbus RTU
- MELSEC SERIAL
- MELSEC ETHERNET
- FENET
- CNET

## Server
Interactor에서 *Server*는 **Server역할**을 하여 외부 Client의 요청에 응답할 수 있는 *Entity*입니다.  

### Server Protocol List :memo:
| Type | Description | Protocol | 
| :- | :- | :- |
| _Tag를 사용하는 Server_ | *Device*, *Database*, *Virtual*, *Sync*에서 생성한 *Tag*의 데이터를 전달할 수 있습니다. | <ul><li>OPC UA</li><li>Modbus TCP</li><li>HTTPS</li><li>HTTP</li></ul> |
| _API를 사용하는 Server_ | *Orchestrator*와 *Insight* 같은 *EdgeHub* 제품군을 위한 Server입니다.<br/>*Tag* 설정 없이 정의된 API를 사용하여 Interactor의 데이터를 수집하거나 제어할 수 있습니다. | <ul><li>API SERVER</li></ul> |

## Database
Interactor는 **Database와 연결**하여 데이터를 쓰거나(*Action, Call*), 수집(*Tag, Call*) 할 수 있습니다. MariaDB는 **EdgeHub에서 정의한 schema**를 사용하여 Interactor의 데이터를 저장할 수 있습니다.

### Database List :memo:
* MSSQL
* MariaDB
* MariaDB EdgeHub (내부 데이터베이스 사용을 위한 서비스)
* InfluxDB
* Machbase (개발 중, 21.08 완료 예정)

## Virtual
- *Virtual*은 **데이터를 생성하거나 다른 Tag의 데이터를 가공하기 위해** 사용하는 *Entity*입니다. *Tag Information*의 *Logic*에 데이터를 입력하여 사용자가 원하는 형태의 값을 만들 수 있습니다.   
- 데이터 직접 입력, 사칙연산 또는 *Tag*의 값(*Tag reference*)을 이용하여 데이터를 쉽게 가공하거나, [Elixir 언어](../elixir/elixirSyntax.md)를 직접 사용하여 사용자가 **원하는 어떠한 형태** 로도 가공할 수 있습니다.

## Sync
*Sync*는 수집된 *Tag*의 **데이터 수집시간을 동기화**하여 **Tag로 출력**하거나 **CSV 파일로 출력**하기 위해 사용하는 *Entity*입니다.

## Function
**반복적으로 사용되는 연산**을 편하게 사용하기 위해 *Function*에 정의하여 사용합니다. *Transform*, *Logic*, *Value*에서 *Function*을 사용할 수 있습니다.  