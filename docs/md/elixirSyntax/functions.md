# Functions
이 페이지는 Elixir의 함수에 대해 설명합니다.
<div class="info">
  <div class="info-title"><img src="../../img/icon/info.svg">WHERE TO USE</div>
  - <p>Device, Database, Virtual > Tags > <b>Transform</b></p>
  - <p>Device, Database, Virtual > Tags > <b>Load Condition</b></p>
  - <p>Device, Database, Virtual, Sync > Actions > <b>Condition</b></p>
  - <p>Device, Database, Virtual, Sync > Actions > <b>Logic</b></p>
  - <p>Virtual > Tags > <b>Logic</b></p>
</div>

## Anonymous Functions
- 익명함수는 이름이 없는 함수로서 다른 함수에 전달될 목적으로 자주 사용됩니다.  
- `fn {매개변수} -> {함수본문} end`로 정의합니다.
``` elixir
iex> sum = fn (a, b) -> a + b end
iex> sum.(2, 3)
5

# SHORTHAND
iex> sum = &(&1 + &2) # &1, &2는 익명함수로 전달된 매개변수입니다.
iex> sum.(2, 3)
5
```