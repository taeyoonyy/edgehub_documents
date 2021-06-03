# Collections
이 페이지는 List와 Map에 대해 설명합니다.
<div class="info">
  <div class="info-title"><img src="../../img/icon/info.svg">WHERE TO USE</div>
  - <p>Device, Database, Virtual > Tags > <b>Transform</b></p>
  - <p>Device, Database, Virtual > Tags > <b>Load Condition</b></p>
  - <p>Device, Database, Virtual, Sync > Actions > <b>Condition</b></p>
  - <p>Device, Database, Virtual, Sync > Actions > <b>Logic</b></p>
  - <p>Virtual > Tags > <b>Logic</b></p>
</div>

<div class="toc-title"><img src="../../img/icon/list.svg">Table of Contents</div>

[[toc]]

## List Concatenation
`++` 연산자를 이용하여 List를 결합합니다.
``` elixir
iex> [1, 2] ++ [3, 4, 5]
[1, 2, 3, 4, 5]
```
## List Head / Tail
List의 Head를 반환하는 `hd`와 Tail을 반환하는 `tl` 함수를 지원합니다.
``` elixir
iex> hd([1, 2, 3, 4, 5])
1
iex> tl([1, 2, 3, 4, 5])
[2, 3, 4, 5]
```
## Map
Map은 key와 value로 이루어진 store로 `%{}`와 함께 정의됩니다.  
key는 중복이 불가하며, key와 value는 모든 데이터타입을 허용합니다.
::: warning <p class="custom-block-title"><img src="../../img/icon/warning.svg">WARNING</p>
Value Type이 Object인 경우 값은 Map으로 출력됩니다.  
단, 사용자가 직접 Map을 입력할 수 없습니다(Tag Reference 외에 `{}` 사용불가).
:::
``` elixir
# NUMBER
iex> map_num = %{1 => 1, 2 => 2}
%{1 => 1, 2 => 2}
iex> map_num[1]
1

# STRING
iex> map_str = %{"key1" => "value1", "key2" => "value2"}
%{"key1" => "value1", "key2" => "value2"}
iex> map_str["key1"]
"value1"

# ATOM
iex> map_atom = %{:key1 => :value1, :key2 => :value2}
%{key1: :value1, key2: :value2}
iex> map_atom[:key1]
:value1
```