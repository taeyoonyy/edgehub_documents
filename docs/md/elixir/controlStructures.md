# Control Structures
이 페이지는 주어진 매개변수를 기반으로 의사결정을 진행하는 프로그래밍 블럭에 대해 설명합니다.
<div class="info">
  <div class="info-title">WHERE TO USE</div>
  - <p>Virtual Entity의 Logic에서는 <b>example1</b>과 같이 사용할 수 있습니다.</p>
</div>

- ***example1***: {virtual, aaa, tag1} 의 값이 3일 때 tag2는 2의 값을 가지게 됩니다.
``` elixir
if {virtual, virtual_name, tag1} === 1 do
  1
else
  2
end
```

<div class="toc-title">Table of Contents</div>

[[toc]]

## if
if 뒤에 오는 조건에 따라 결과값을 반환합니다.
``` elixir
# ONE-LINER
iex> if(1 + 1 == 2, do: "right!")
"right!" 
iex> if(1 + 1 == 3, do: "right!")
nil 
iex> if(1 + 1 == 3, do: "1 + 1 = 3", else: "1 + 1 = 2")  
"1 + 1 = 2"

# BLOCKS
if is_integer("string") do # if (조건) do 
  "This is an Integer" # 위의 조건이 참인 경우
else
  "This is not an Integer" # 위의 조건이 거짓인 경우
end
# 조건에 대한 결과가 false이므로 "This is not an Integer"가 반환됩니다.
```

## case
case 뒤에 오는 값에 따라 결과값을 반환합니다.
``` elixir
order = "latte"

case order do
  "americano" -> "4,000won" # pass
  "latte" -> "4,500won" # break
  "mocha" -> "5,000won"
  "latte" -> "10,000won"
end

# result
"4,500won"
```
- 특정 패턴과 일치해야하는 경우 사용합니다.
``` elixir
case [:ok, "Hello World"] do
  [:ok, result] -> result # List의 첫번째 데이터가 :ok인 경우
  [:error] -> "error!" # List의 첫번째 데이터가 :error인 경우
  _ -> "else" # 위의 경우를 다 만족하지 않을 경우
end

# result
"Hello World"
```
- `when`절을 이용하여 특정 패턴에 대한 조건을 추가합니다.
``` elixir
case [1, 2] do
  [1, x] when x > 1 ->
    "match!"
  _ ->
    "not match!"
end

# result
"match!"
```
::: warning CAUTION
일치하는 case가 없을 시 `CaseClauseError` 에러가 발생하므로 else(`_`)를 고려해야 합니다.
:::

## cond
값보다는 조건을 일치시켜야 할 때 사용하며, 다른 언어의 `else if`와 유사합니다.
<!-- 여러 패턴에 대해 매치할 때 사용합니다. _ 변수는 위에서 일치하는 값이 없을 때 선택됩니다. 일치하는 값도  -->
``` elixir
cond do
  1 + 1 == 3 ->
    "1 + 1 = 3, false" # pass
  1 + 1 == 2 ->
    "1 + 1 = 2, true" # break
  2 + 2 == 5 ->
    "2 + 2 = 5, false"
  2 + 2 == 4 ->
    "2 + 2 = 4, true"
end

# result
"1 + 1 = 2, true"
```
``` elixir
cond do
  7 + 1 == 0 -> "false" # pass
  true -> "Catch all"
end

# result
"Catch all"
```
::: warning CAUTION
일치하는 condition이 없을 시 `CondClauseError` 에러가 발생하므로 유의해야 합니다.
:::