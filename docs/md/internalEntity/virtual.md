# Virtual
Virtual를 통해 다른 Entity의 Tag/Call을 불러와 가공하거나 [Elixir Syntax](../elixir/elixirSyntax.md)를 이용해 다른 Entity에서 사용할 수 있는 Tag를 생성할 수 있습니다.

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
Tag 생성방법은 External Entity(Device, Server, Database)와 대부분 동일하지만, Tag Information에서 실제 Entity의 정보가 아닌 `Logic`을 이용해 값을 입력해야 합니다.  
:::

<div class="toc-title"><img src="../../img/icon/list.svg">Table of Contents</div>

[[toc]]

## Virtual Tags
외부 디바이스와 통신이 아닌 Interactor 내부에서 값을 생성하고, 다른 Entity에서 사용할 수 있는 Tag를 만듭니다. 생성된 Virtual Tag는 다른 Entity에서 `{Tag reference}`로 사용할 수 있습니다.

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
`Tag Reference`는 `{entity_category, (group_name), entity_name, tag_ID}`로 구성되며, Category가 Device인 경우 `group_name`이 포함됩니다.
:::


#### :black_medium_square: Tag ID
- **Tag**: Virtual Tag를 식별할 수 있는 고유 ID입니다.

#### :black_medium_square: Tag Information
- **Logic**: [Elixir Syntax](../elixir/elixirSyntax.md)를 이용해 새로운 값을 생성하거나 다른 Entity의 Tag/Call 값을 reference하여 이를 가공할 수 있습니다.
<img src="../../img/internalEntity/logic.png">

  |NO|Description|
  |:-:|:-|
  |1 | SelectBox를 통해 다른 Entity의 Tag나 Call을 선택합니다. |
  |2 | 1번에서 선택한 Tag나 Call의 Reference를 생성하여 3번에 추가합니다. |
  |3 | Elixir문법을 이용하여 원하는 값을 생성하거나 가공할 수 있습니다.|

  ##### :mag_right: 예시1) 특정 상수를 입력하여 변수로 사용

  <img src="../../img/internalEntity/logic-exam1-1.png">

  위와 같이 Virtual Tag를 생성하고 `Commit`할 경우 결과는 다음과 같습니다.
  <img src="../../img/internalEntity/logic-exam1-2.png">

  ##### <div id="exam1"> :mag_right: 예시2) 수집된 온도(℃)를 화씨(°F)로 변환하고 싶은 경우</div>

  <img src="../../img/internalEntity/logic-exam2-1.png">

    |NO|Description|
    |:-:|:-|
    |1 | Device(Category) > 계측기(Group) > 전력계측기(Entity) > 섭씨(Tag)의 **Tag Reference** |
    |2 | 섭씨(℃)를 화씨(°F)로 만들기 위한 공식 `화씨 = 섭씨 * 9 / 5 + 32`|

  
  위와 같이 Virtual Tag를 생성하고 `Commit`할 경우 결과는 다음과 같습니다.
  <img src="../../img/internalEntity/logic-exam2-2.png">

- **Value Type**: Logic을 통해 가공한 데이터의 Value Type을 설정합니다. 

#### :black_medium_square: Condition
- **Interval Value**: Tag Value를 update하는 **시간간격**을 입력합니다.
- **Interval Unit**: Interval Value에서 입력한 **시간단위**를 설정합니다.
- **Transform**: Tag Value를 Interactor로 가져오기 전 **전처리**할 수 있습니다.
 <!-- ##### :mag_right: 예시) 수집된 온도(℃)를 바로 화씨(°F)로 변환하고 싶은 경우
  ( v |> :binary.decode_unsigned() ) * 9/5 + 32 -->
- **Load Condition**:
- **History**: 
- **Buffer**: Update 되기 전의 Value를 일시적으로 저장할 수 있습니다. 

#### :black_medium_square: Property
- **Category**: 
- **Comment**: Virtual Tag에 대한 설명 등과 같은 Meta data를 저장할 수 있습니다. 

#### :black_medium_square: Data
- **Type**: Display할 Value의 Type을 설정합니다.  
- **Value**: Tag의 Value 값을 Display합니다.
- **Byte Size**: Tag Value의 Byte 크기입니다.


## Virtual Actions
Tags Tab에서 생성한 Tag에 추가적인 Action을 설정할 수 있습니다. 설정된 Action은 해당 Tag가 실행되는 시점마다 발생합니다.

#### :black_medium_square: Action ID
- **Tag**: Action을 실행할 Tag를 선택합니다.
- **Condition**: Action이 실행될 조건을 입력합니다.

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
- Condition의 결과는 True 또는 False여야 하며, 결과가 `True일 경우` Action이 실행됩니다.
- Condtion을 입력하는 창에는 좌변에 입력되어야 할 값을 지원하므로, 아래와 같이 좌변을 생략하여 조건을 입력할 수 있습니다.
``` elixir
# Tag의 값이 1인 경우 True
=== 1 

# TAg의 값이 참조된 TAG의 값과 같을 경우 True
=== {device, GROUP, DEVICE, TAG}

# TAg의 값 + 1이 참조된 TAG의 값과 같을 경우 True
+ 1 === {device, GROUP, DEVICE, TAG}

# Tag의 값이 100보다 크면서 참조된 TAG의 값이 0인 경우 True
> 100 && ({device, GROUP, DEVOCE, TAG} === 0)

# Tag의 값이 if문의 결과값과 같은 경우 True
# if문의 결과: 참조된 TAG가 5보다 작은 경우 본래 TAG 값을, 5와 같거나 그보다 큰 경우 100을 반환
=== if ( {device, GROUP, DEVOCE, TAG} < 5), do: {device, GROUP, DEVOCE, TAG}, else: 100  
```
:::

##### :mag_right: 예시) <a href="#exam1">위의 예시</a>에서 만든 화씨 Tag의 값이 80이 넘을 경우를 조건으로 설정

<img src="../../img/internalEntity/action-condition.png">

- **Type**: Action Type을 설정합니다.

| Action | Description |
| :-: | :- |
| Call | 설정한 조건이 만족되면 Call의 Query를 실행합니다. |
| Event | 설정한 조건이 만족되면 Event를 발생시키며 이를 Orchestrator와 Insight에서 확인할 수 있습니다. |
| Log | 설정한 조건이 만족되면 Log를 기록합니다. |
| Tag |  설정한 조건이 만족되면 Tag Value를 Elixir 문법과 함께 원하는 값으로 update합니다. |

::: warning <p class="custom-block-title"><img src="../../img/icon/warning.svg">WARNING</p>
`Tag + Condition + Type`은 Action의 고유 ID가 되므로 중복될 수 없습니다.
:::

#### :black_medium_square: Action Information
- **Category**: Tag나 Call이 포함된 Category를 선택합니다.
- **Group**: Category가 Device인 경우 Tag가 포함된 Group을 선택합니다.
- **Entity**: Tag나 Call이 포함된 Entity를 선택합니다.
- **Call/Tag**: Action에 사용될 Tag나 Call을 선택합니다.
- **Value**: Action이 Event, Log인 경우 `""` 안에 원하는 message를 입력합니다. Action이 Tag인 경우 [Elixir Syntax](../elixir/elixirSyntax.md)를 이용하여 선택한 Tag의 값을 조작할 수 있습니다.

##### :mag_right: 예시) <a href="#exam1">위의 예시</a>에서 만든 화씨 Tag의 값이 80이 넘을 경우 Log 기록

<img src="../../img/internalEntity/action-value.png">

#### :black_medium_square: Property
- **Comment**: : Virtual Action에 대한 설명 등과 같은 Meta data를 저장할 수 있습니다. 

#### :black_medium_square: Data
- **Type**:
- **Value**:
- **Byte Size**:
