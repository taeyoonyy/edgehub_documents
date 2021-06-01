# Collections
이 페이지는 List와 Map에 대해 설명합니다.
<div class="info">
  <div class="info-title">WHERE TO USE</div>
  - <p>내용</p>
</div>

## Table of Contents
- [List Concatenation](#list-concatenation)
- [List Head / Tail](#list-head-Tail)
- [Map](#map)

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