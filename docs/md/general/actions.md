# Actions
 *Tag*가 실행될 때 추가적인 기능을 수행하기 위해 *Action*을 사용합니다. 설정된 *Action*은 해당 *Tag*가 실행될 때 마다 실행됩니다. 이 페이지는 *Actions*에서 <strong>공통적</strong>으로 사용되는 항목에 대해 설명합니다.

## Action ID
*Entity* 내에서 *Action*을 구분하기 위한 ID입니다. 
::: warning <p class="custom-block-title"><img src="../../img/icon/warning.svg">WARNING</p>
`Tag + Condition + Type`은 *Action*의 고유 ID가 되므로 중복될 수 없습니다.  
즉, 하나의 `Entity`에서 `Tag`, `Condition` 그리고 `Type`가 같은 `Action`은 하나만 생성할 수 있습니다. 
:::

| Key | Description | Required |
| :- | :- | :-: |
| _Tag_ | *Action* 실행의 대상이 되는 *Tag*</br>(선택된 *Tag*가 수집될 때 해당 *Action* 실행) | * |
| _Condition_ | *Action* 발생 여부를 결정하는 조건<ul><li>Condition에 입력된 표현식(Expression)의 평가 결과는 True 또는 False의 값을 가져야 하며, 결과가 __True__ 일 경우 *Action* 실행</li> <li>선택한 *Tag*의 값이 좌변의 첫 번째 항이 됨</li></ul> |  |
| _Type_ | 실행할 *Action*의 종류 설정<ul><li>Call: 설정한 조건이 만족되면 *Call* 실행</li><li>Event: 설정한 조건이 만족되면 Event 발생<li>Log: 설정한 조건이 만족되면 Logging</li><li>Tag: 설정한 조건이 만족되면 대상 `Entity`에 쓰기 요청을 하고 *Tag* 값 업데이트 (단, `Entity`에 쓰기 요청을 하는 것은 `Protocol`에 따라 다름)</li></ul> | * |

##### 예시) Condition 사용 예시

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

## Action Information
*Action*을 실행할 대상 정보를 입력합니다. 
| Key | Description | Required |
| :- | :- | :-: |
| _Category_ | *Action* 실행의 대상이 되는 *Call / Tag*의 *Category* 선택 | * |
| _Group_ | *Action* 실행의 대상이 되는 *Group* 선택(*Category*가 *Device*인 경우 해당) | * |
| _Entity_ | *Action* 실행의 대상이 되는 *Entity* 선택 | * |
| _Call / Tag_ | *Action* 실행의 대상이 되는 *Tag ID* 또는 *Call ID* 선택 | * |
| _Value_ | *Action* 실행 시 사용되는 값 입력(*Action* Type에 따라 입력내용 상이)<ul><li>Event / Log: <code>""</code> 안에 원하는 message를 입력</li> <li>Tag: <a href="/md/elixir/elixirSyntax.html" class="">Elixir Syntax</a>를 이용하여 대싱아 되는 *Tag*의 값 변경 또는 *Tag*가 가르키는 *Device*에 쓰기 수행</li></ul> | * |

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
*Action* Type에 따른 입력항목은 다음과 같습니다.
- **Call**: *Category*, *Entity*, *Call/Tag*
- **Event**: *Value*
- **Log**: *Value*
- **Tag**: *Category*, *Group*(*Category*가 *Device*인 경우), *Entity*, *Call/Tag*, *Value*
:::



## Property
Interactor의 동작과 상관없이 사용자가 원하는 정보를 입력하기 위해 입력합니다.

| Key | Description | Required |
| :- | :- | :-: |
| _Comment_ | *Action*의 추가적인 설명이 필요할 때 사용자가 직접 입력 |  |

## Data
*Action*의 설정 데이터에 따라 실행한 결과가 정상일 때 값이 출력됩니다.
| Key | Description |
| :- | :- |
| _Type_ |  *Value*에 출력되는 데이터의 종류 설정(Raw, Binary, Value) |
| _Value_ | 마지막으로 실행된 *Action* 값(Type 설정 적용) |
| _Byte Size_ | 마지막으로 실행된 *Action* 값의 Byte 길이 |
