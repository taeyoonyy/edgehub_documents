# Elixir Syntax

이 페이지는 EdgeHub-i | Interactor (이하 Interactor) 에서 Elixir Syntax를 쉽게 사용할 수 있도록 설명합니다.  
Interactor는 Elixir v1.8.2를 사용하고 있으며, 이 페이지에서 설명하는 Elixir Syntax 외 대부분의 v1.8.2Elixir Syntax를 지원합니다.
자세한 내용은 아래의 URL을 참고바랍니다.
### Elixir v1.8.2 Document
https://hexdocs.pm/elixir/1.8.2/Kernel.html

### Elixir Guide (Elixir School)
https://elixirschool.com/en/

## Control Structures

### If
If 와 do 사이의 값이 참이면 do 다음의 결과가 출력되고, 거짓이면 else 다음의 결과가 출력됩니다.  
Value가 1이면 결과는 1이 출력되고, Value가 1이 아니면 결과는 2가 출력됩니다.
```
...> if value === 1 do
...>   1
...> else
...>   2
...> end
```
##### [Interactor Example]
 Virtual Entity의 Logic에서는 다음과 같이 사용할 수 있습니다.
```
if {virtual, aaa, tag1} === 1 do
1
else
2
end
```
{virtual, aaa, tag1} 의 값이 3일 때 tag2는 2의 값을 가지게 됩니다.
mg](../.../../img/elixirSyntax/if_example.jpg)

### Cond
여러 패턴에 대해 매치할 때 사용합니다. _ 변수는 위에서 일치하는 값이 없을 때 선택됩니다. 일치하는 값도 


## Basics

## Enum
