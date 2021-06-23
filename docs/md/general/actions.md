# Actions

<div class="spacer"/>

(<span class="construction"/>)

## Action ID
### Tag
### Condition
### Type

## Action Information
### Category
### Group
### Entity
### Call / Tag
### Value

## Property
### Comment

## Data
### Type
### Value
### Byte Size



### Action ID
- **Tag**: Action 실행의 대상이 되는 Tag 선택 (선택된 Tag가 실행 될 때 해당 Action 실행)
- **Condition**: Action이 발생 여부를 결정하는 조건

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
- Condition의 결과는 True 또는 False여야 하며, 결과가 `True일 경우` Action이 실행됩니다.
- 선택한 Tag의 값이 좌변의 첫 번째 항이 됩니다. 아래와 같이 비교연산자를 바로 사용하거나, 추가적인 산술연산을 할 수 있습니다.
``` elixir

# 아무것도 입력하지 않는 경우 항상 True

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

##### 예시) <a href="#exam1">위의 예시</a>에서 만든 화씨 Tag의 값이 80이 넘을 경우를 조건으로 설정

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

### Action Information
- **Category**: Action 실행의 대상이 되는 Tag 또는 Call의 Category 선택
- **Group**: Action 실행의 대상이 되는 Group 선택 (Category가 Device인 경우만 Group 선택)
- **Entity**: Action 실행의 대상이 되는 Entity 선택
- **Call/Tag**: Action 실행의 대상이 되는 Tag ID 또는 Call ID 선택
- **Value**: Action 실행 시 사용되는 값 입력 (Action Type에 따라 입력되는 내용 다름)  
  - Event / Log: `""` 안에 원하는 message를 입력  
  - Tag: [Elixir Syntax](../elixir/elixirSyntax.md)를 이용하여 대싱아 되는 Tag의 값 변경 또는 Tag가 가르키는 Device에 쓰기 수행

### Property
- **Comment** (Option): Action의 추가적인 설명이 필요할 때 사용자가 직접 입력

### Data
- **Type**: Data - Value에 출력되는 데이터의 종류 설정 (Raw, Binary, Value 중 선택)
- **Value**: 마지막으로 실행된 Action 값 (Type 설정 적용)
- **Byte Size**:  마지막으로 실행된 Action 값의 Byte 길이
