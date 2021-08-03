# Function
*Function*화면에서는 *Protocol Detail* 과 *Model* 에서 만든 내용을 사용하여 Read와 Write 기능을 구현합니다. 

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>

  *Function*은 **TCP**와 **Serial** 전용으로 *Port*에서는 사용하지 않습니다.
  
:::

## Read
*Read*화면에서 대상 디바이스의 데이터 수집을 위한 요청과 응답을 구현합니다. *Read* 에서 구현된 내용이 *Tag* 수집에 사용됩니다.

### Response
Request 후 수신되는 디바이스의 응답 데이터를 정의하기 위해 *Model*을 선택하고 *Model* 중 값으로 사용할 *Field*를 선택합니다. 수신된 데이터가 선택한 모델과 일치하면, *Field*에서 선택한 데이터가 *Tag*의 값이 됩니다.

| Key | Description | Required |
| :- | :- | :-: |
| _Model_ | 디바이스에서 전송한 응답에 해당하는 모델 | * |
| _Field_ | 선택한 *Model*의 *Field* 중 *Tag*의 값으로 사용할 Field  | * |

### Request
데이터 수집을 위해 Interactor에서 디바이스로 요청하는 데이터를 정의하기 위해 *Model*을 선택하고 *Model*의 각 *Fields* 값을 선택합니다. *Model*을 선택하면 *Request Fields* Table이 출력됩니다. *Request Fields* Table에서는 Field의 데이터를 직접 입력하거나 *Protocol Detail*에서 정의한 *Connection Information*과 *Tag Information*의 값을 사용하도록 설정합니다.

### Request Fields
| Key | Description | Required |
| :- | :- | :-: |
| _Field_ | *Model* 생성 시 설정한 Field key 이름 | * |
| _Type_ | *Field* 데이터를 직접 입력(`Set`)할 것인지 동적(`Dynamic`)으로 적용할 것인지 선택 | * |
| _Source_ | *Field* 데이터를 동적(`Dynamic`)으로 적용할 때 어디의 데이터를 사용할 것인지 선택 | * |
| _Information_ | *Field* 데이터를 동적(`Dynamic`)으로 적용할 때 field 선택 | * |
| _Value_ | *Field* 데이터를 직접 입력(`Set`)할 때 원하는 값 입력 | * |



## Write
*Write*화면에서 대상 디바이스에 데이터를 쓰기 위한 요청과 응답을 구현합니다. *Write* 에서 구현된 내용이 *Action*의 *Type - Tag*를 사용됩니다.

### Response
Action을 사용하여 디바이스로 Write를 요청한 후 수신되는 디바이스의 데이터를 정의하기 위해 *Model*을 선택합니다.

| Key | Description | Required |
| :- | :- | :-: |
| _Model_ | 디바이스에서 전송한 응답에 해당하는 모델 | * |

### Request
 *Action*을 사용하여 디바이스로 Write를 요청하는 데이터를 정의하기 위해 *Model*을 선택하고 *Model*의 각 *Fields* 값을 선택합니다. *Model*을 선택하면 *Request Fields* Table이 출력됩니다. *Request Fields* Table에서는 *Field*의 데이터를 직접 입력하거나 *Protocol Detail*에서 정의한 *Connection Information*과 *Tag Information*의 값을 사용하도록 설정합니다.

### Request Fields
| Key | Description | Required |
| :- | :- | :-: |
| _Field_ | *Model* 생성 시 설정한 Field key 이름 | * |
| _Type_ | *Field* 데이터를 직접 입력(`Set`)할 것인지 동적(`Dynamic`)으로 적용할 것인지 선택 | * |
| _Source_ | *Field* 데이터를 동적(`Dynamic`)으로 적용할 때 어디의 데이터를 사용할 것인지 선택 | * |
| _Information_ | *Field* 데이터를 동적(`Dynamic`)으로 적용할 때 *Field* 선택 | * |
| _Value_ | *Field* 데이터를 직접 입력(`Set`)할 때 원하는 값 입력 | * |
::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>

  Action에서 입력한 Value는 *Source* - *Action Info*, *Information* - *Value* 선택하여 전송할 수 있습니다.

:::
