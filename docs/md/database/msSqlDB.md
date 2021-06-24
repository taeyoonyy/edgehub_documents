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

### Data
(<span class="construction"/>)

###### 자세한 내용은 [Calls 페이지](../general/calls.md)를 참고 바랍니다.

## Tags
(<span class="construction"/>)
### Tag Information
###### 자세한 내용은 [Tags 페이지](../general/tags.md)를 참고 바랍니다.

## Actions
(<span class="construction"/>)
###### 자세한 내용은 [Actions 페이지](../general/actions.md)를 참고 바랍니다.

<!-- ## Calls Example

## Tags Example

## Actions Example -->
