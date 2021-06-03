# Enum
이 페이지는 열거형 데이터를 열거하기 위한 함수들에 대해 설명합니다.
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

## map
`Enum.map(enumerable, fun)` 새로운 Collection을 반환합니다.
``` elixir
iex> Enum.map([1, 2, 3, 4, 5, 6, 7, 8, 9], fn(x) -> x * 2 end)
[2, 4, 6, 8, 10, 12, 14, 16, 18]

iex> Enum.map([key1: "value1", key2: "value2"], fn {k, v} -> {k, "map-" <> v} end)
[key1: "map-value1", key2: "map-value2"]
```
## min
`Enum.min(enumerable)`, `Enum.min(enumerable, callback)` Collection의 최소값을 반환합니다.
``` elixir
iex> Enum.min([1, 2, 3, 4, 5])
1

iex> Enum.min([~D[2000-01-01], ~D[2100-01-01]])
~D[2000-01-01]

iex > Enum.min([1, 2], fn -> "callback" end)
1
iex > Enum.min([], fn -> "callback" end) # Collection이 비어있을 시 뒤의 콜백함수가 호출됩니다.
"callback"
```
::: warning <p class="custom-block-title"><img src="../../img/icon/warning.svg">WARNING</p>
Date Type 관련 설명 추가 예정
:::

## max
`Enum.max(enumerable)`, `Enum.max(enumerable, callback)` Collection의 최대값을 반환합니다.
``` elixir
iex> Enum.max([5, 3, 0, -1])
5

iex> Enum.max([~D[2000-01-01], ~D[2100-01-01]])
~D[2100-01-01]

iex > Enum.max([1, 2], fn -> "callback" end)
2
iex > Enum.max([], fn -> "callback" end) # Collection이 비어있을 시 뒤의 콜백함수가 호출됩니다.
"callback"
```

## filter
`Enum.filter(enumerable, (fn(element) -> condition))` 두번째 인자인 함수의 조건에 맞는 아이템을 Collection으로 반환합니다. 
``` elixir
iex> Enum.filter([1, 2, 3, 4], fn(x) -> rem(x, 2) == 0 end)
[2, 4]
```

## reduce
`reduce(enumerable, fun)`, `reduce(enumerable, acc, fun)` 콜백함수에 누산기(accumulator) 옵션을 지원합니다. 
``` elixir
iex> Enum.reduce([1, 2, 3], fn(x, acc) -> x + acc end) 
6 # 1 + 2 + 3

iex> Enum.reduce([1, 2, 3], 10, fn(x, acc) -> x + acc end)
16 # 3 + 2 + 1 + 10

iex> Enum.reduce(["meet ","to ","Nice "], "you", fn(x,acc)-> x <> acc end)
"Nice to meet you"
```

## sort
`sort(enumerable)`, `sort(enumerable, fun)` Collection의 아이템을 정렬할 수 있습니다.
``` elixir
# ASCENDING(default)
iex> Enum.sort([4, 5, 2, 1, 3])
[1, 2, 3, 4, 5]
iex> Enum.sort([%{:key => 2}, %{:key => 1}])
[%{key: 1}, %{key: 2}]

# ORDER: number < atom < list < bitstring
iex> Enum.sort(["string", :atom, 1, -1, [2, 3]])
[-1, 1, :atom, [2, 3], "string"]

# WITH FUNCTION
iex> Enum.sort([%{:key => 1}, %{:key => 2}], fn(x, y) -> x[:key] > y[:key] end)
[%{key: 2}, %{key: 1}]
```
