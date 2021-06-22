MD 작성 규칙

---------------------

# Heading1 <!-- 48px -->
.md의 시작은 Heading1 이며 Left nav의 Depth 2로 사용됩니다.
(1은 Title. 즉, md 없음)

Heading1에 대한 개요를 입력합니다.

--------------------
## Heading2 <!-- 32px -->
Connection Info, Tags, Actions 등 Interactor에서 하나의 페이지를 가질때 사용합니다. (그 외 하위 구분이 필요한 내용을 위해서도 서용)
Left nav의 Depth 3으로 사용됩니다.

---------------------

### Heading3 <!-- 24px -->
heading2의 하위 contents header로 사용 시 text 앞에 '◼' emoji가 추가됩니다. 

---------------------

#### Heading4 <!-- 20px -->
사용 시 text 앞에 '>' emoji가 추가됩니다. 
Heading4 안에서 구분이 필요한 경우 테이블을 사용합니다.

---------------------

##### Heading5 <!-- 16px -->
사용 시 text 앞에 '🔎' emoji가 추가됩니다. 
예시) 와 함께 사용하며, 예시를 나타냅니다.

---------------------

###### Heading6 <!-- 16px -->
사용 시 text 앞에 '💡' emoji가 추가됩니다. 
reference를 표기할 때 사용합니다.

---------------------

`Code`
Interactor에서 사용하는 단어는 `를 사용하여 표시합니다.
한줄 짜리 코드 또는 JSON도 사용 가능 합니다.

---------------------

```Code```
두 줄 이상의 코드에서 사용합니다.

---------------------

<div class="info">
  <div class="info-title"><img src="../../img/icon/info.svg">WHERE TO USE</div>

  페이지의 contents를 사용할 수 있는 곳에 대해 설명합니다.

</div>

---------------------

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>

  알림사항 또는 추가적인 내용에 대해 설명합니다.

:::

---------------------

::: warning <p class="custom-block-title"><img src="../../img/icon/warning.svg">WARNING</p>

  주의사항에 대해 설명합니다.

:::

---------------------

::: danger <p class="custom-block-title"><img src="../../img/icon/danger.svg">ALERT</p>

  경고사항에 대해 설명합니다.

:::

---------------------

#### heading4 in Custom Block
custom block 안의 header는 h4를 사용합니다. 
사용 시 text 앞에 '>' emoji가 추가됩니다. 

---------------------

<span class="construction"/>(21년 7월 추가 예정)

작성중인 contents에 대해 설명합니다. 
사용 시 text 앞에 '🚧' emoji가 추가됩니다. 

---------------------

ETC html class 관련

<div class="spacer"/>  16px vertical spacer
<div class="spacer-sm"/> 4px vertical spacer
<img class="mt-0"> img margin-top: 8px -> 0px


---------------------

[Protocol 관련 문서 Layout]

# Protocol Name
Protocol 설명


## Connection Information
Connection Information 설명
| Key | Description | Required |
| :- | :- | :-: |
| _key_ | 명사 | * |

++ 서술


## Calls
Calls 설명
### Call Information
Call Information 설명
| Key | Description | Required |
| :- | :- | :-: |
| _key_ | 내용 | * |

### Data
Data 설명
| Key | Description | Required |
| :- | :- | :-: |
| _key_ | 내용 | * |

## Tags
Tags 설명
### Tag Information
Tag Information 설명
| Key | Description | Required |
| :- | :- | :-: |
| _key_ | 내용 | * |

## Actions
Actions 설명

## Calls Example
Calls Example 설명
##### 예시1) 예시 제목
- step 1
```
코드 또는 데이터
```
- step 2
```
코드 또는 데이터
```

## Tags Example
Tags Example 설명
##### 예시1) 예시 제목
- step 1
```
코드 또는 데이터
```
- step 2
```
코드 또는 데이터
```


## Actions Example
Actions Example 설명
##### 예시1) 예시 제목
- step 1
```
코드 또는 데이터
```
- step 2
```
코드 또는 데이터
```

## 기타 내용()

::: tip Notice
#### title
:::