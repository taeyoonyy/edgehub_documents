# Account
이 페이지는 Interactor의 Admin Account 생성, Login 및 Account 추가를 설명합니다.

## Admin Account
EdgeHub-i 를 설치하고 `http://localhost:1290`에 처음 접속하면 아래와 같은 Admin account 생성 화면을 확인할 수 있습니다.  
![img](../../img/account/firstuser.png)
::: warning <p class="custom-block-title"><img src="../../img/icon/warning.svg">WARNING</p>
- Admin account는 추가 생성 또는 변경이 불가능 합니다.  
- Admin 계정 또는 비밀번호 분실 시 EdgeHub-i를 다시 설치해야 합니다.
:::

## Login
Admin Account 생성 후 EdgeHub-i Web에 접속하면 아래와 같은 로그인 화면을 확인할 수 있습니다.  
![img](../../img/account/login.png)  

## Account 추가
Admin Account로 로그인 후 Setting 페이지로 이동하여 Account를 생성할 수 있습니다. Setting 페이지는 화면 우측 상단의 Admin ID을 클릭하여 이동할 수 있습니다.

![img](../../img/account/setting_btn.png)  
![img](../../img/account/account_add_btn.png)  

- Account에 대한 Authority는 다음과 같습니다.

| Authority | Description |
| :- |:- |
| _Admin_ | Interactor의 모든 기능 사용 가능 |
| _RWC_ | Account 생성을 제외한 모든 기능 사용 가능(Read, Write, Commit)| 
| _RW_ | Read와 Write 사용 가능 |
| _R_ | Read 사용 가능 |
