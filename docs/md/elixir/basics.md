# Basics
이 페이지는 Elixir의 기본 연산에 대해 설명합니다. 
<div class="tip-context">
<!-- 사용 가능한 곳 -->
</div>

## Table of Contents
- [Arithmetic](#arithmetic)
- [Bit Operations](#bit-operations)
- [Floating-point Operations](#floating-point-operations)
- [Min, Max, ABS](#min-max-abs)
- [Boolean](#boolean)
- [Comparison](#comparison)
- [String Interpolation](#string-interpolation)
- [String Concatenation](#string-concatenation)
- [Pipe Operator](#pipe-operator)


## Arithmetic
Elixir는 `+, -, *, /`와 같은 기본 연산자를 지원합니다.
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
iex> 1 / 2 # '/'의 연산 결과는 float타입으로 반환됩니다.
0.5
```

## Bit Operations
<!-- Bitwise를 이용하여 비트연산을 합니다.
::: tip <img class="my-icon" src="../../img/icons/note.svg">NOTE
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
iex> bsl(1, 2)
0
```
::: warning <img class="my-icon brown" src="../../img/icons/warning.svg">NOTICE
Bit Operations은 정수만 연산 가능합니다.
:::

## Floating-point Operations
## Min, Max, ABS
## Boolean
## Comparison
## String Interpolation
## String Concatenation
## Pipe Operator