# MariaDB EdgeHub
MariaDB EdgeHub는 <u>Interactor</u>의 InnerDB로, Interactor에 생성된 `Entity`정보, `Tag`정보, `Actions`에서 만든 `event`의 정보가 저장됩니다.

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
Category의 `Device`와 각 Category 하위의 `device`를 구분하기 위해 `Entity`라는 용어를 사용합니다. Table명과 column명에 사용된 `device`는 `Entity`를 뜻합니다.
:::

## Connection Information
Interactor와 MariaDB EdgeHub를 연결하기 위해 필요한 데이터를 설정합니다.
| Key | Description | Required |
| :- | :- | :-: |
| _Address_ | MariaDB가 설치된 PC의 IP Address | * |
| _Port_ | MariaDB가 사용하는 Port | * |
| _Database_ | 수집 대상이 되는 DATABASE 이름(고정값) | |
| _Type_ | MariaDB EdgeHub와 MariaDB Custom 구분을 위한 항목(고정값) | |
| _Username_ | MariaDB에 설정된 Username | * |
| _Password_ | MariaDB에 설정된 Password | * |

## Table Structure
MariaDB EdgeHub에 생성되는 Table의 구조에 대해 설명합니다.
<!-- ### action_history
used table -->

### devices
Entity의 생성 정보가 저장된 테이블입니다. 
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *device_id* | Entity 식별자 | INT | PK |
| *device_key* | Entity가 속한 Category (+ Group 이름) + Entity 이름 | VARCHAR | |
| *device_name* | Entity 이름 | VARCHAR | |
| *created_at* | Entity 생성 시간 | TIMESTAMP | |

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
- `device_key`는 Category, Group Name, Entity Name을 underscore로 연결하여 만들어집니다.
- Device를 제외한 나머지 `Category`는 `Group`이 없으므로 Category명과 Entity명 사이에 underscore
:::

### device_properties
생성된 Entity의 속성이 저장된 테이블입니다.
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *device_id* | Entity 식별자 | INT | UK |
| *property_name* | Entity 속성 이름<ul><li>category</li><li>group</li><li>communication</li><li>description</li></ul> | VARCHAR | UK |
| *property_value* | Entity 속성값<ul><li>카테고리명</li><li>Entity가 속한 그룹명</li><li>Connection 정보</li><li>Entity에 대한 설명</li></ul> | VARCHAR | |

### event
`Actions`에서 생성된 Event의 정보와 발생 횟수가 저장된 테이블입니다.
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *event_id* | Event 정보를 포함한 식별자 | VARCHAR | UK |
| *event_value* | Event 발생 시 Tag Value | VARCHAR | |
| *created_at* | Event 생성 시간 | TIMESTAMP | |
| *upTIMESTAMPd_at* | Event 최근 발생 시간 | TIMESTAMP | |
| *count* | Event 발생 횟수 | INT | |

### event_history
`Actions`에서 생성된 Event의 history가 저장된 테이블입니다.
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *event_history_id* | Event 식별자 | INT | PK |
| *event_id* | Event 정보를 포함한 식별자 | VARCHAR | |
| *created_at* | Event 발생 시간 | TIMESTAMP | |
| *event_value* | Event 발생 시 Tag Value | VARCHAR | |

#### event_id 구조
**{Category}**`.`**{Group Name}**`.`**{Entity Name}**`_->`**{Action Condition}**`_->`**{Action Type}**`:::`**{Action To Group}**`_->`**{Action To Entity}**`_->`**{Action To Tag}**

##### 예시) event_id
```
device.ModbusGroup.ModbusEntity1.tag1_->> 5_->Event:::_->_->
```


### tag
Tag의 정보가 저장된 테이블입니다. 
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *tag_id* | Tag 식별자 | INT | PK |
| *device_id* | Entity 식별자 | INT | UK |
| *tag_name* | Tag 이름  | VARCHAR | UK |
| *tag_value_type* | 현재 표시 안됨 | VARCHAR | |
| *tag_value* |  Tag Value | VARCHAR  | |

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
- `tag_value`는 String으로 표시됩니다.
- Value Type이 Binary인 경우 `tag_value`는 ASCII로 표현됩니다.
:::

### tag_history
Tag의 history가 저장된 테이블입니다. 본 테이블을 사용을 위해서는 `Tags > Condition > History`를 `enable`로 변경해 주시기 바랍니다.
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *tag_history_id* | Tag History 식별자 | INT | PK |
| *tag_id* | Tag 식별자 | INT | |
| *created_at* | Interval에 따라 Tag Value가 업데이트된 시간 | TIMESTAMP | |
| *value* | Tag Value | VARCHAR | |

### tag_properties
생성된 Tag의 속성이 저장된 테이블입니다.
| Column | Description | Data Type | Key |
| :- | :- | :-: | :-: |
| *tag_id* | Tag 식별자 | INT | UK |
| *property_name* | Tag 속성 이름<ul><li>communication</li><li>_category</li><li>_client</li><li>_condition</li><li>_device</li><li>group</li></ul> | VARCHAR | UK |
| *property_type* | Tag 속성값의 Data Type | VARCHAR | |
| *property_value* | Tag 속성값 | VARCHAR | |
