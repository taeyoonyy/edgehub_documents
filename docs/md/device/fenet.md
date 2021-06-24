# FENET ETHERNET
- FENET 프로토콜을 선택하여 `LS-ELECTRIC의 Fenet 프로토콜`을 사용하는 PLC의 디바이스 메모리를 읽거나 쓸 수 있습니다.  
- 변수 연속 읽기와 변수 연속 쓰기를 사용합니다.

::: tip <p class="custom-block-title"><img src="../../img/icon/tip.svg">NOTICE</p>
#### 대상 제품 : Fenet 프로토콜을 사용할 수 있는 PLC
* Master-K
* Glofa
* XGT
* XGB
:::

## Connection Information
Connection Information은 타겟 디바이스와 통신하기 위해 **모든 데이터에 공통으로 적용되는 설정값**입니다.
### PLC에서 확인이 필요한 PLC의 설정값
| Info | Description | Required |
| :- | :- | :-: |
|_Address_ | PLC의 아이피 주소 | * |
|_Port_ | PLC의 포트 번호 | * |
|_Slot_ |  | * |
|_Base_ |  | * |
|_Company ID_ |  | * |
|_CPU Info_ |  | * |

### 효율적인 통신을 위해 Interactor에서 추가된 설정
| Info | Description | Required |
| :- | :- | :-: |
| _Max Block Size_ | 한번에 수집할 데이터의 최대 크기 설정 | * |

###### 자세한 내용은 사용하는 **LS-ELECTRIC PLC 사용 설명서**를 참고 바랍니다.  

## Tags
### Tag Information
Tag 단위로 PLC의 데이터를 읽기 위해서 필요한 설정 데이터입니다. **제품마다 사용 가능한 디바이스 코드와 디바이스 주소 범위가 다릅니다.** 

| Key | Description | Required |
| :-  | :- | :-: |
| _Start Address_ | 읽을 블록의 선두 번지를 입력합니다. 바이트 타입의 직접변수만 사용할 수 있습니다. | * |
| _Length_ | <ul><li>Start Address에 입력한 선두 번지부터 읽기 원하는 데이터의 바이트 개수를 설정합니다.</li><li>최대 길이는 PLC 제품에 따라 차이가 있습니다. XGL-EFMTB는 최대 1400바이트, XGB 제품군은 최대 512바이트 입니다. 그 외 제품 및 자세한 내용은 LS-ELECTRIC PLC 사용 설명서를 참고 바랍니다.</li></ul> | * |
| _Value_ | <ul><li>Start Address와 Length의 설정값을 사용한 데이터 요청에 대해 정상적인 응답을 받았을 때 수집된 데이터가 출력됩니다.</li><li>통신 실패나, 비정상적인 응답을 받은 경우는 출력하지 않습니다.</li></ul> | * |

###### 자세한 내용은 **LS-ELECTRIC PLC 사용 설명서**와 [Tags 페이지](../general/tags.md)를 참고 바랍니다.  

## Action 
PLC에 데이터를 쓰기 위해 Action을 설정합니다(<span class="construction"/>).
###### 자세한 내용은 [Actions 페이지](../general/actions.md)를 참고 바랍니다.

## Tags Example
##### 예시)
| Start Address | Length | Value |
| :- | :- | :- |
| %MB0 | 10 | 디바이스 M의 0부터 10개 바이트를 가져옵니다. |


##### 예시) 비트 디바이스 읽기 결과
(<span class="construction"/>)

## Actions Example
(<span class="construction"/>)