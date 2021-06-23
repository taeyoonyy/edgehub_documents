# MariaDB Custom
관계형 데이터베이스(Relational Database, RDB)인 MariaDB와 Interactor를 연결하여 데이터를 읽거나 쓸 수 있습니다. `Connection Information`에서 MariaDB와 연결하기 위한 설정을 하고, `Calls`에서 사용자가 원하는 Query를 사용하여 데이터를 읽거나 쓸 수 있습니다. `Tags`에서는 Interactor에서 지정한 형식에 따라 MariaDB의 데이터를 수집할 수 있고, `Actions`을 이용하여 MariaDB에 데이터를 쓸 수 있습니다.

## Connection Information
Interactor와 MariaDB Custom을 연결하기 위해 필요한 데이터를 설정합니다.
| Key | Description | Required |
| :- | :- | :-: |
| _Address_ | MariaDB가 설치된 PC의 IP Address | * |
| _Port_ | MariaDB가 사용하는 Port | * |
| _Database_ | 수집 대상이 되는 DATABASE 이름 | * |
| _Type_ | MariaDB EdgeHub와 MariaDB Custom 구분을 위한 항목(고정값) | |
| _Username_ | MariaDB에 설정된 Username | * |
| _Password_ | MariaDB에 설정된 Password | * |


## Calls
MariaDB에서 사용되는 Structured Query Language(이하 SQL)를 사용하여 MariaDB의 데이터를 읽거나 쓸 수 있습니다.
### Call Information
MariaDB에서 실행할 Query를 입력합니다. 
| Key | Description | Required |
| :- | :- | :-: |
| _Query Editor_ | 원하는 데이터를 읽거나 쓰기 위한 SQL문 | * |

### Data
Call Information의 Query Editor에 입력된 SQL문의 실행결과입니다.

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
조건에 맞는 데이터가 없을 경우 빈 List(`[]`)를 반환합니다.
:::

::: warning <p class="custom-block-title"><img src="../../img/icon/warning.svg">WARNING</p>
SQL error는 `{}`를 반환합니다. `INSERT`, `UPDATE`, `DELETE`문의 실행결과도 `{}`를 반환하므로 사용에 유의하시기 바랍니다.
:::

## Tags
MariaDB의 데이터를 읽기 위해 필요한 설정을 입력하고, 응답을 확인할 수 있습니다.
### Tag Information
`Tag` 단위로 MariaDB의 데이터를 읽기 위해 필요한 설정을 입력 합니다. 읽기 요청에 대한 응답이 `Tag`의 값이 됩니다.

| Key | Description | Required |
| :- | :- | :-: |
| _Table_ | 데이터가 저장된 테이블 | * |
| _Column_ | 데이터의 Column명 | * |
| _Condition_ | 데이터의 조건 |  |
| _Value Type_ | SQL문 실행 결과에 대한 Data Type | * |

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
Interactor에서는 Input Field로 입력된 값을 다음과 같은 SQL문으로 만들어 실행합니다.
``` sql
SELECT "Column" FROM "Table" WHERE "Condition"
```
:::
<!-- 
## Actions
`Tags`에 있는 `Tag`의 값에 Action 추가. ActionID call을 통해 Calls의 Query를 실행하거나 Tags의 Tag값을 바꿀 수 있음
Actionsdml Event에 대한 내용 Logging 하거나 Right bar의 Sytem Log에 출력 가능 -->

## Calls Example
`Calls`에서 Query Editor 입력과 Data에 출력된 응답 예시입니다.

| 예시 | SQL문 | Value | 
| :- | :- | :- |
| CREATE | | |
| ALTER | | |
| TRUNCATE | | |
| DROP | | |
| SELECT | <pre class="language-sql"><code><span class="token keyword">SELECT </span><span class="token operator">* </span><span class="token keyword">FROM </span>MEMBER</code></pre> | `[[1,"Mike",20],[2,"Jerry",30]]`|
| SELECT with<br>WHERE CLAUSE | <pre class="language-sql"><code><span class="token keyword">SELECT</span> AGE <span class="token keyword">FROM</span> MEMBER <span class="token keyword">WHERE</span> NAME <span class="token operator">=</span> <span class="token string">"Tom"</span></code></pre> | `15` |
| INSERT | <pre class="language-sql"><code><span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> MEMBER <span class="token punctuation">(</span>NAME<span class="token punctuation">,</span> AGE<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token string">'John Doe'</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span></code></pre> | `{}` |
| UPDATE | <pre class="language-sql"><code><span class="token keyword">UPDATE</span> MEMBER <span class="token keyword">SET</span> AGE<span class="token operator">=</span><span class="token number">27</span> <span class="token keyword">WHERE</span> NAME <span class="token operator">=</span> <span class="token string">'Tom'</span></code></pre> | `{}` |
| DELETE | <pre class="language-sql"><code><span class="token keyword">DELETE</span> <span class="token keyword">FROM</span> MEMBER <span class="token keyword">WHERE</span> NAME <span class="token operator">=</span> <span class="token string">'John Doe'</span></code></pre> | `{}` |
|  WHERE CLAUSE에 해당되는 데이터가 없는 경우 | <pre class="language-sql"><code><span class="token keyword">SELECT</span> AGE <span class="token keyword">FROM</span> MEMBER <span class="token keyword">WHERE</span> NAME <span class="token operator">=</span> <span class="token string">"Jane"</span></code></pre> | `[]` |

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
사용하는 Table명 또는 Column명이 SQL의 예약어인 경우 \`Grave accent\`를 사용하여야 합니다. 예를 들어, Table명이 `LIMIT`인 경우 다음과 같이 입력합니다.
``` sql
SELECT * FROM `LIMIT`
```
:::

## Tags Example
`Tags`사용을 위한 예시입니다.
##### 예시1) 예시 제목

## Actions Example
`Actions`사용을 위한 예시입니다.
