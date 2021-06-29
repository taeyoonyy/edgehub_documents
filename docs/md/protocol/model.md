# Model
(<span class="construction"/>)

## Model Fields
- Custom Protocol을 사용하여 데이터를 Read/Write 할 때 필요한 Model을 정의합니다.
- 추가하고자 하는 Protocol의 Frame을 정의합니다.
- 정의된 모델은 `Function > Read` 또는 `Write`의 `Response`와 `Request Model`에서 사용할 수 있습니다.

| Key | Description | Required |
| :- | :- | :-: |
| _Name_ |   | * |
| _Value_ |  | * |
| _Size_ |  | * |
| _Type_ | <ul><li>Bits</li><li>Bytes</li><li>CRC</li><li>Float</li><li>Integer</li></ul> | * |
| _Units_ | (Type이 Float, Integer인 경우)<ul><li>Bits</li><li>Bytes</li></ul> | * |
| _Endianness_ | (Type이 Float, Integer인 경우)<ul><li>Native</li><li>Big</li><li>Little</li></ul> | * |
| _Signedness_ | (Type이 Float, Integer인 경우)<ul><li>Signed</li><li>Unsigned</li></ul> | * |
| _Mode_ | (Type이 CRC인 경우) | * |


<!-- ##### 예시) Modbus TCP

MBAP Header description Fields

- PDU(Protocol Data Unit)
- ADU(Application Data Unit)

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
``` -->