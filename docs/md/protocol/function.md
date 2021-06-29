# Function
데이터를 Read하기 위해 Response/Request에 대한 정보를 설정합니다.
(<span class="construction"/>)

## Response
| Key | Description | Required |
| :- | :- | :-: |
| _Model_ | 추가한 Model 중 Response에 사용할 Model 선택 | * |
| _Field_ | 선택한 Model 내에서 데이터를 response할 Field 선택 | * |

## Request Model
| Key | Description | Required |
| :- | :- | :-: |
| _Model_ | 추가한 Model 중 Request에 사용할 Model 선택 | * |


## Request Fields
| Key | Description | Required |
| :- | :- | :-: |
| _Field_ |  | * |
| _Type_ | <ul><li>Set</li><li>Dynamic</li></ul> | * |
| _Source_ | (Type이 Dynamic인 경우)<ul><li>Connection Info</li><li>Tag Info</li><li>Action Info</li></ul> | * |
| _Information_ | 선택된 Source에 따라 | * |
| _Value_ | (Type이 Set인 경우) | * |
