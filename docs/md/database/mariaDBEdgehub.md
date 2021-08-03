# MariaDB EdgeHub
* *MariaDB EdgeHub*는 MariaDB를 사용하는 Interactor의 InnerDB입니다.
* MariaDB 내 *edgehub* 이름의 데이터베이스를 사용하며, 데이터베이스에는 Interactor에서 정의된 스키마가 자동으로 적용됩니다.
* *MariaDB EdgeHub*를 연결하면 Interactor에서 사용자가 생성한 *Entity* 정보, *Tag* 정보 등 일부 정보가 자동으로 저장됩니다.
* *MariaDB EdgeHub*를 연결하여 사용자가 저장하기 원하는 *Tag* 값과 *Event* 등 정보를 선택적으로 저장할 수 있습니다.

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
* *MariaDB EdgeHub*를 사용하기 위해서 `edgehub` 이름의 데이터베이스는 사용자가 직접 생성해야 합니다. </br>
:::

## Connection Information
Interactor와 *MariaDB EdgeHub*를 연결하기 위해 필요한 데이터를 설정합니다.
| Key | Description | Required |
| :- | :- | :-: |
| _Address_ | MariaDB가 설치된 PC의 IP Address | * |
| _Port_ | MariaDB Port | * |
| _Database_ | 수집 대상이 되는 DATABASE 이름( *edgehub* 고정) | |
| _Type_ | MariaDB EdgeHub와 MariaDB Custom 구분을 위한 항목( *edgehub* 고정) | |
| _Username_ | MariaDB에 설정된 Username | * |
| _Password_ | MariaDB에 설정된 Password | * |

## Table Structure
*MariaDB EdgeHub*에 생성되는 Table의 구조에 대해 설명합니다.
<!-- ### action_history
used table -->

### devices
*Entity*의 생성 정보가 저장된 테이블입니다. 
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *device_id* | *Entity* 식별자 | INT | PK |
| *device_key* | *Entity*의 Category (+ Group 이름) + *Entity* 이름 | VARCHAR | |
| *device_name* | *Entity* 이름 | VARCHAR | |
| *created_at* | *Entity* 생성 시간 | TIMESTAMP | |

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
- device_key는 *Category*, *Group* Name, *Entity* Name을 underscore로 연결하여 만들어집니다.
- *Device*를 제외한 나머지 *Category*는 *Group*이 없기때문에 *Group*이 입력되지 않습니다.
:::

### device_properties
생성된 *Entity*의 속성이 저장된 테이블입니다.
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *device_id* | *Entity* 식별자 | INT | UK |
| *property_name* | *Entity* 속성 이름<ul><li>category</li><li>group</li><li>communication</li><li>description</li></ul> | VARCHAR | UK |
| *property_value* | *Entity* 속성값<ul><li>카테고리명</li><li>*Entity*가 속한 그룹명</li><li>Connection 정보</li><li>*Entity*에 대한 설명</li></ul> | VARCHAR | |

### event
*Actions*에서 생성된 Event의 정보와 발생 횟수가 저장된 테이블입니다.
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *event_id* | Event 정보를 포함한 식별자 | VARCHAR | UK |
| *event_value* | Event 발생 시 Tag Value | VARCHAR | |
| *created_at* | Event 생성 시간 | TIMESTAMP | |
| *upTIMESTAMPd_at* | Event 최근 발생 시간 | TIMESTAMP | |
| *count* | Event 발생 횟수 | INT | |

### event_history
*Actions*에서 생성된 *Event*의 history가 저장된 테이블입니다.
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *event_history_id* | *Event* 식별자 | INT | PK |
| *event_id* | *Event* 정보를 포함한 식별자 | VARCHAR | |
| *created_at* | *Event* 발생 시간 | TIMESTAMP | |
| *event_value* | *Event* 발생 시 *Tag Value* | VARCHAR | |


::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
event_id 구조는 다음과 같습니다.

<pre class="language-sql">
  <code><span class="token operator">{Category}</span><span class="token keyword">.</span><span class="token operator">{Group Name}</span><span class="token keyword">.</span><span class="token operator">{Entity Name}</span><span class="token keyword">_-></span><span class="token operator">{Action Condition}</span><span class="token keyword">_-></span>
  <span class="token operator">{Action Type}</span><span class="token keyword">:::</span><span class="token operator">{Action To Group}</span><span class="token keyword">_-></span><span class="token operator">{Action To Entity}</span><span class="token keyword">_-></span><span class="token operator">{Action To Tag}</span></code>
</pre>
:::

##### 예시) event_id
```
device.ModbusGroup.ModbusEntity1.tag1_->> 5_->Event:::_->_->
```


### tag
*Tag*의 정보가 저장된 테이블입니다. 
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *tag_id* | *Tag* 식별자 | INT | PK |
| *device_id* | *Entity* 식별자 | INT | UK |
| *tag_name* | *Tag* 이름  | VARCHAR | UK |
| *tag_value_type* | 현재 표시 안됨 | VARCHAR | |
| *tag_value* |  *Tag* Value | VARCHAR  | |

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
- `tag_value`는 String으로 표시됩니다.
- Value Type이 Binary인 경우 `tag_value`는 ASCII로 표현됩니다.
:::

### tag_history
*Tag*의 history가 저장된 테이블입니다. *Tags* > *Condition* > *History*를 `enable`로 설정한 *Tag*의 데이터가 저장됩니다.
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *tag_history_id* | *Tag* History 식별자 | INT | PK |
| *tag_id* | *Tag* 식별자 | INT | |
| *created_at* | Interval에 따라 *Tag* Value가 업데이트된 시간 | TIMESTAMP | |
| *value* | *Tag* Value | VARCHAR | |

### tag_properties
생성된 *Tag*의 속성이 저장된 테이블입니다.
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *tag_id* | *Tag* 식별자 | INT | UK |
| *property_name* | *Tag* 속성 이름<ul><li>communication</li><li>_category</li><li>_client</li><li>_condition</li><li>_device</li><li>group</li></ul> | VARCHAR | UK |
| *property_type* | *Tag* 속성값의 *Data Type* | VARCHAR | |
| *property_value* | *Tag* 속성값 | VARCHAR | |
