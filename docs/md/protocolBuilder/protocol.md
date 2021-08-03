# Protocol
Interactor에서는 Protocol Builder를 사용하여 사용자가 원하는 프로토콜을 직접 추가할 수 있습니다. 이 페이지에서는 Interactor에서 기본적으로 제공하는 Built-in 프로토콜과 사용자가 직접 추가하는 Custom 프로토콜에 대해서 설명합니다. Custom 프로토콜을 만드는 자세한 방법은 <u>Protocol Detail</u>, `Model` 그리고 `function` 페이지에서 설명합니다.

## Built-in Protocol
Interactor 화면 상단의 `Protocol` 버튼으로 클릭하여 `Protocol` 페이지로 이동하면 현재 Interactor에서 사용할 수 있는 프로토콜의 목록이 표시됩니다. Interactor에서 기본적으로 제공하는 Built-in 프로토콜의 목록은 다음과 같습니다.

### Device
Device Entity에서 사용할 수 있는 프로토콜 목록입니다. Built-in 프로토콜과 Custom 프로토콜이 있습니다.

| Protocol | Description |
| :- | :- |
| _opcua-client_ | OPCUA Client  |
| _modbus tcp master_ | Modbus Tcp Client  |
| _modbus rtu master_ | Modbus RTU (Serial) Client  |
| _melsec serial_ | Mitsubishi MC Protocol 중 MELSEC-Q PLC에서 사용하는 Serial 프로토콜 중 일부 |
| _melsec serial_ | Mitsubishi MC Protocol 중 MELSEC-Q PLC에서 사용하는 Ethernet 프로토콜 중 일부 |
| _http-client_ | HTTP 의 일부 Method를 사용하는 Client  |
| _fenet_ | LS-ELECTRIC PLC의 Ethernet  |
| _cnet_ | LS_ELECTRIC PLC의 Serial 

### Server
Server Entity에서 사용할 수 있는 프로토콜 목록입니다. 모든 Server 프로토콜은 Built-in이며 사용자가 직접 Custom 프로토콜을 추가할 수 없습니다.

| Protocol | Description |
| :- | :- |
| _opcua-server_ | OPCUA Server  |
| _modbus tcp slave_ | Modbus Tcp Server |
| _https-server_ | HTTPS Server  |
| _http-server_ | HTTP Server  |
| _api-server_ | EdgeHub-i SW Orchestrator, Insight 전용 Server |


### Database
Database Entity에서 사용할 수 있는 프로토콜 목록입니다. 모든 Database 프로토콜은 Built-in이며 사용자가 직접 Custom 프로토콜을 추가할 수 없습니다.
| Protocol | Description |
| :- | :- |
| _mssql-db_ | Microsoft SQL Server |
| _mariadb custom_ | MariaDB 중 사용자가 원하는 Database를 위한 프로토콜 |
| _mariadb_ | MariaDB를 사용하는 Interactor의 Inner Database |
| _machbase_ | Machbase사의 TSDB - Machbase |
| _influxdb_ | InfluxData사의 TSDB - InfluxDB |

## Custom Protocol
Protocol Builder를 사용하여 다음과 같은 특징을 가지는 프로토콜을 사용자가 직접 생성할 수 있습니다.
* TCP, Serial 또는 표준스트림(STDIN, STDOUT)을 사용하는 프로토콜
* Request / Response 구조의 프로토콜
* Repose 데이터중 특정 데이터를 Tag 값으로 저장할 수 있음
* Procotol Detail, Model, Function 페이지 설정만으로 별도의 코딩 없이 Interactor 내장 프로토콜과 동일하게 사용 가능  

### Button
Protocol 페이지의 상단 버튼을 이용하여 Custom 프로토콜을 생성하거나 추가할 수 있습니다.

| Button | Description |
| :- | :- |
| _Add_ |  Device 에서 사용할 수 있는 Custom 프로토콜을 생성합니다. 이미 등록된 프로토콜과 같은 이름은 사용할 수 없습니다.|
| _Delete_ | 커스텀 프로토콜을 삭제합니다. Built-in 프로토콜은 삭제할 수 없습니다. |
| _Export_ | 커스텀 프로토콜을 .json 파일로 출력합니다. |
| _Import_ | .json 파일의 커스텀 프로토콜을 Interactor에 추가합니다. |


::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>

  Custom 프로토콜은 이름과 함께 `Status`가 표시됩니다.  
  자세한 내용은 `Protocol Detail`페이지의 `Status`를 참고해주세요.

:::
