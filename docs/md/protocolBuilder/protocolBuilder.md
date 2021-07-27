# Protocol Builder
Interactor에서는 Protocol Builder를 사용하여 사용자가 원하는 프로토콜을 직접 추가할 수 있습니다. 이 페이지에서는 Interactor에서 기본적으로 제공하는 Builtin 프로토콜과 사용자가 직접 추가하는 Custom 프로토콜에 대해서 설명합니다. Custom 프로토콜을 만드는 자세한 방법은 `Protocol Detail`, `Model` 그리고 `function` 페이지에서 설명합니다.

## Builtin and Custom Protocol
Interactor 화면 상단의 `Protocol` 버튼으로 클릭하여 `Protocol` 페이지로 이동하면 현재 Interactor에서 사용할 수 있는 프로토콜의 목록이 표시됩니다. Interactor에서 기본적으로 제공하는 Builtin 프로토콜의 목록은 다음과 같습니다.

### Device
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
| Protocol | Description |
| :- | :- |
| _opcua-server_ | OPCUA Server  |
| _modbus tcp slave_ | Modbus Tcp Server |
| _https-server_ | HTTPS Server  |
| _http-server_ | HTTP Server  |
| _api-server_ | EdgeHub-i SW Orchestrator, Insight 전용 Server |


### Database
| Protocol | Description |
| :- | :- |
| _mssql-db_ | Microsoft SQL Server |
| _mariadb custom_ | MariaDB 중 사용자가 원하는 Database를 위한 프로토콜 |
| _mariadb_ | MariaDB를 사용하는 Interactor의 Inner Database |
| _machbase_ | Machbase사의 TSDB인 Machbase사용을 위한 프로토콜 |
| _influxdb_ | InfluxData사의 TSDB인 InfluxDB



프로토콜 확인 방법
프로토콜 import, export 방법
새로운 프로토콜 생성 방법
추가 가능한 프로토콜 범위 및 종류
 - 디바이스만 가능하고, tcp, serial, port (stdin, stdout 사용)
