# Model
(<span class="construction"/>)

## Model Fields
- Custom Protocol을 사용하여 데이터를 Read/Write 할 때 필요한 Model을 정의합니다.
- 정의된 모델은 `Function > Read` 또는 `Write`의 `Response`와 `Request Model`에서 사용할 수 있습니다.
- 추가하고자 하는 Protocol의 Frame을 

| Key | Description | Required |
| :- | :- | :-: |
| _Name_ |  | * |
| _Value_ |  | * |
| _Size_ |  | * |
| _Type_ |  | * |
| _Units_ | (Type이 Float, Integer인 경우만) | * |
| _Endianness_ | (Type이 Float, Integer인 경우만) | * |
| _Signedness_ | (Type이 Float, Integer인 경우만) | * |
| _Mode_ | (Type이 CRC인 경우만) | * |

 <!-- MBAP Header description Fields  -->


- PDU(Protocol Data Unit)
- ADU(Application Data Unit)

##### 예시) Modbus TCP

```
             MODBUS TCP/IP ADU
<――――――――――――――――――――――――――――――――――――――――>
MBAP Header  |  Function Code  |  Data  |
              <――――――――――――――――――――――――――>
                           PDU
```


```
                   Request        Indication
―――――――――――――――――  ―――――――――――――――――――――――――>  ―――――――――――――――――
| MODBUS Client |                              | MODBUS Server | 
―――――――――――――――――  ―――――――――――――――――――――――――>  ―――――――――――――――――
                   Confirmation    Response
```


- MODBUS Request ADU encoding
```
MBAP Header + MODBUS request
```