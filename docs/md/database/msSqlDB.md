# MSSQL DB
관계형 데이터베이스(Relational Database, RDB)인 MSSQL DB와 Interactor를 연결하여 데이터를 읽거나 쓸 수 있습니다. `Connection Information`에서 MSSQL DB와 연결하기 위한 설정을 하고, `Calls`에서 사용자가 원하는 Query를 사용하여 데이터를 읽거나 쓸 수 있습니다. `Tags`에서는 Interactor에서 지정한 형식에 따라 MSSQL DB의 데이터를 수집할 수 있고, `Actions`을 이용하여 MSSQL DB에 데이터를 쓸 수 있습니다.

## Connection Information
Interactor와 MSSQL DB를 연결하기 위해 필요한 데이터를 설정합니다.

| Key | Description | Required |
| :- | :- | :-: |
| _Address_ | MSSQL DB가 설치된 PC의 IP Address | * |
| _Port_ | MSSQL DB가 사용하는 Port | * |
| _Database_ | 수집 대상이 되는 DATABASE 이름 | * |
| _Username_ | MSSQL DB에 설정된 Username | * |
| _Password_ | MSSQL DB에 설정된 Password | * |


## Calls
MSSQL DB에서 사용되는 Structured Query Language(이하 SQL)를 사용하여 MSSQL DB의 데이터를 읽거나 쓸 수 있습니다.
### Call Information
(<span class="construction"/>)

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
사용하는 Table명 또는 Column명이 SQL의 예약어인 경우 `[대괄호]`를 사용하여야 합니다. 예를 들어, Table명이 `TOP`인 경우 다음과 같이 입력합니다.
``` sql
SELECT * FROM [TOP]
```
:::

### Data
(<span class="construction"/>)

###### 자세한 내용은 [Calls 페이지](../general/calls.md)를 참고 바랍니다.

## Tags
(<span class="construction"/>)
### Tag Information

#### Value Type
<!-- 설명추가 -->

| Interactor Value Type | MSSQL DB Value Type |
| :- | :- |
| _INT_      | <ul><li>BIGINT</li><li>INT</li><li>TINYINT</li><li>SMALLINT</li></ul>  | 
| _BINARY_   | <ul><li>BINARY</li><li>UNIQUEIDENTIFIER</li><li>VARBINARY</li><li>TIMESTAMP</li></ul>  |
| _BOOLEAN_  | <ul><li>BIT</li><li>FLAG_BIT</li><li>NAMESTYLE_BIT</li></ul>  | 
| _STRING_   | <ul><li>CHAR</li><li>DATE</li><li>DATETIME</li><li>DATETIME2</li><li>DATETIMEOFFSET</li><li>NCHAR</li><li>NTEXT</li><li>NVARCHAR</li><li>SMALLDATETIME</li><li>TEXT</li><li>TIME</li><li>VARCHAR</li><li>ACCOUNT_NUMBER</li></ul>  |
| _FLOAT_    | <ul><li>DECIMAL</li><li>FLOAT</li><li>NUMERIC</li><li>REAL</li><li>SMALLMONEY</li><li>MONEY</li></ul>  | 

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
Value Type을 `list`로 설정할 경우 모든 데이터를 Read합니다. 예를 들어, `"123"`이라는 String 타입의 데이터를 `List`로 설정하면`["123"]`을 확인할 수 있습니다.
:::

###### 자세한 내용은 [Tags 페이지](../general/tags.md)를 참고 바랍니다.

## Actions
(<span class="construction"/>)
###### 자세한 내용은 [Actions 페이지](../general/actions.md)를 참고 바랍니다.

<!-- ## Calls Example

## Tags Example

## Actions Example -->
