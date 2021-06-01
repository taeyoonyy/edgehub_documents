# Basics
이 페이지는 Elixir의 기본 연산에 대해 설명합니다. 
<div class="info">
  <div class="info-title">WHERE TO USE</div>
  - <p>Virtual > Logic</p>
</div>

## Table of Contents
- [Arithmetic](#arithmetic)
- [Bit Operations](#bit-operations)
- [Rounding Numbers](#rounding-numbers)
- [Min, Max, ABS](#min-max-abs)
- [Boolean](#boolean)
- [Comparison](#comparison)
- [String Interpolation](#string-interpolation)
- [String Concatenation](#string-concatenation)
- [Pipe Operator](#pipe-operator)


## Arithmetic
`+`, `-`, `*`, `/`와 같은 산술 연산자를 지원합니다.
``` elixir
# ADD
iex> 1 + 2
3

# SUBSTRACTION
iex> 1 - 2
-1

# MULPLE
iex> 1 * 2
2

# DIVIDE
iex> 1 / 2 # '/'의 연산 결과는 Float타입으로 반환됩니다.
0.5

iex> div(5, 2) # 'div'의 연산 결과는 Integer로 반환됩니다.
2

iex> rem(5, 2) # 'rem'는 나머지를 반환합니다.
1
```

## Bit Operations
<!-- Bitwise를 이용하여 비트연산을 합니다.
::: tip NOTE
**Bitwise**: 비트에 대한 연산 시 사용할 수 있는 Elixir의 함수집합입니다.
::: -->
``` elixir
# AND
iex> 9 &&& 3
1
iex> band(9, 3)
1

# OR
iex> 9 ||| 3
11
iex> bor(9, 3)
11

# XOR
iex> bxor(9, 3)
10

# NOT
iex> ~~~2
-3
iex> bnot(2)
-3

# SHIFT - left
iex> 1 <<< 2
4
iex> bsl(1, 2)
4

# SHIFT - right
iex> 1 >>> 2
0
iex> bsr(1, 2)
0
```
::: warning CAUTION
Bit Operations은 정수만 연산 가능합니다.
:::

## Rounding Numbers
반올림, 올림, 내림과 같은 Round 함수를 지원합니다.
- ***Integer***
``` elixir
# ROUND OFF
iex> round(5.1)
5
iex> round(5.5)
6

# ROUND UP
iex> ceil(5.1)
6
iex> ceil(-5.5)
-5

# ROUND DOWN
iex> floor(5.5)
5
iex> floor(-5.1)
-6
```
- ***Float***
``` elixir
# ROUND OFF
iex> Float.round(5.55, 1)
5.5
iex> Float.round(5.56, 1)
5.6

# ROUND UP
iex> Float.ceil(5.55, 1)
5.6
iex> Float.ceil(-5.56, 1)
-5.5

# ROUND DOWN
iex> Float.floor(5.55)
5.0
iex> Float.floor(-5.56)
-6.0
iex> Float.floor(5.55, 1)
5.5
```

## Min, Max, ABS
최소값, 최대값, 절대값을 구할 수 있는 통계함수를 지원합니다.
- ***Number***
``` elixir
# MIN
iex> min(1, 2)
1
iex> min(1.01, 1.002)
1.002

# MAX
iex> max(1, 2)
2
iex> max(1.01, 1.002)
1.01

# ABS
abs(-1.203)
1.203

```
- ***String***
``` elixir
# MIN
iex> min("foo", "bar")
"bar"
iex> min("가", "나")
"가"

# MAX
iex> max("foo", "bar")
"foo"
iex> max("가", "나")
"나"
```

## Boolean
`||`, `&&`, `!`와 같은 Boolean 연산자를 지원합니다.
``` elixir
# OR
iex> 5 || true
5
iex> true || 5
true
iex> 5 || false
5
iex> false || 5
5
iex> 5 || nil
5
iex> nil || 5
5

# AND
iex> 5 && true
true
iex> true && 5
5
iex> 5 && false
false
iex> false && 5
false
iex> 5 && nil
nil
iex> nil && 5
nil

# NOT
iex> !true
false
iex> !!true
true
iex> !false
true
iex> !5
false
iex> !nil
true
```
::: warning CAUTION
`or`, `and`, `not`의 왼쪽에는 boolean type이 위치해야 합니다.
``` elixir
iex> true and 5
5
iex> false or 5
5
iex> not false
true
iex> 5 and true
** (BadBooleanError) expected a boolean on left-side of "and", got: 5
iex> not 5
** (ArgumentError) argument error
```
:::

## Comparison
`==`, `!=`, `===`, `!==`, `<=`, `>=`, `<`, `>`과 같은 비교 연산자를 지원합니다.
``` elixir
# EQUAL
iex> 1 == 2
false
iex> 1 == 1.0
true
iex> 1 === 1.0
false

# NOT EQUAL
iex> 1 != 2
true
iex> 1 != 1.0
false
iex> 1 !== 1.0
true

# GREATER THAN
iex> 1 > 2
false

# GREATER THAN OR EQUAL TO
iex> 1 >= 1.0 
true

# LESSER THAN
iex> 1 < 2
true

# LESSER THAN  OR EQUAL TO
iex> 1 <= 1.0
true
```
::: tip NOTICE
비교 연산자는 아래에 명시된 데이터 타입에서도 지원되며, 비교 우위는 다음과 같습니다.  
``` elixir
number < atom < reference < function < port < pid < tuple < map < list < bitstring
```
:::

## String Interpolation
`#{}`는 변수를 String으로 반환합니다.
``` elixir
iex> name = "World"
iex> "Hello #{name}"
"Hello World"
```

## String Concatenation
`<>`는 String을 결합하여 반환합니다.
``` elixir
iex> "Nice " <> "to " <> "meet " <> "you" 
"Nice to meet you"
```

## Pipe Operator
파이프 연산자(`|>` )는 좌측의 결과값을 우측의 첫번째 인자로 넘겨줍니다.
``` elixir
# div(12, 3)
iex> 12 |> div(3) 
4

# div(div(div(div(div(36, 2), 2), 2),2), 2)
iex> div(36, 2) |> div(2) |> div(2) |> div(2) |> div(2) 
1

# String.split(String.upcase("hello world"))
iex> "hello world" |> String.upcase() |> String.split()
["HELLO", "WORLD"]
``` 