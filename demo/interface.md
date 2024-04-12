# Auth

## 로그인
### URL
`/api/v1/auth/login`

### Header
None

### Request
|  Name  |  Type  | Comment |
|:------:|:------:|:--------|
| id     | String | 사용자 아이디 |
|password| String | 사용자 비밀번호 |

#### for example,
```javascript
{
   "id": "pingu",
   "password": "pinguzzang"
}
```
<br>

### Response

> 성공 <br>

|  Name  |  Type  | Comment |
|:------:|:------:|:--------|
|code    | int    | 코드 |
|message | String | 메세지 |
|toekn   | String | 로그인 토큰 |
|expirationTime| int | 로그인 만료시간 |

#### for example,
```javascript
Http Status - 200 (OK)
{
   "code": 200,
   "message": "Sucess",
   "toekn": "abcdefg",
   "expirationTime": 3600
}
```
<br>

> 실패 <br>

|  Name  |  Type  | Comment |
|:------:|:------:|:--------|
|code    | int    | 코드 |
|message | String | 메세지 |

#### for example,
```javascript
// 유효성 검사 실패
Http Status - 400 (Bad Request)
{
   "code": 400,
   "message": "validation failed"
}

// 로그인 실패
Http Status - 401 (Unauthorized)
{
   "code": 401,
   "message": "login value mismatch"
}

// 데이터베이스 오류
Http Status - 500 (Internal Server Error)
{
   "code": 500,
   "message": "database error"
}
```

<br>

# OAuth
## 소셜계정 로그인
### URL
`/oauth/callback/kakao`

### Header
None

### Request
|  Name  |  Type  | Comment |
|:------:|:------:|:--------|
|sns-id  | String | sns 아이디 |
|password| String | sns 비밀번호 |


### Response

> 성공 <br>

|  Name  |  Type  | Comment |
|:------:|:------:|:--------|
|code    | int    | 코드 |
|message | String | 메세지 |
|toekn   | String | 로그인 토큰 |
|expirationTime| int | 로그인 만료시간 |

#### for example,
```javascript
Http Status - 200 (OK)
{
   "code": 200,
   "message": "Sucess",
   "toekn": "abcdefg",
   "expirationTime": 3600
}
```
<br>

> 실패 <br>

|  Name  |  Type  | Comment |
|:------:|:------:|:--------|
|code    | int    | 코드 |
|message | String | 메세지 |

#### for example,
```javascript
// 유효성 검사 실패
Http Status - 400 (Bad Request)
{
   "code": 400,
   "message": "validation failed"
}

// 로그인 실패
Http Status - 401 (Unauthorized)
{
   "code": 401,
   "message": "login value mismatch"
}

// 데이터베이스 오류
Http Status - 500 (Internal Server Error)
{
   "code": 500,
   "message": "database error"
}
```

<br>

# 회원가입
### URL
`/api/v1/auth/signup`

### Header
None

### Request
|  Name   |  Type  | Comment |
|:-------:|:------:|:--------|
|id       | String | 사용자 아이디 |
|password | String | 사용자 비밀번호 |
|email    | String | 사용자 이메일 |
|birth    | String | 사용자 생년월일(YYMMDD) |
|nickname | String | 사용자 별명 |

#### for example,
```javascript
{
   "id":"pingu",
   "password":"password",
   "email":"pingu@mail.com",
   "birth":"991122",
   "nickname":"핑구"
}
```

### Response

> 성공 <br>

|  Name  |  Type  | Comment |
|:------:|:------:|:--------|
|code    | int    | 코드 |
|message | String | 메세지 |

#### for example,
```javascript
Http Status - 200 (OK)
{
   "code": 200,
   "message": "Sucess"
}
```
<br>

> 실패

|  Name  |  Type  | Comment |
|:------:|:------:|:--------|
|code    | int    | 코드 |
|message | String | 메세지 |

#### for example,
```javascript
// 유효성 검사 실패
Http Status - 400 (Bad Request)
{
   "code": 400,
   "message": "validation failed"
}

// 아이디 중복
Http Status - 400 (Bad Request)
{
   "code": 400,
   "message": "ID duplication"
}

// 이메일 중복
Http Status - 400 (Bad Request)
{
   "code": 400,
   "message": "EMAIL duplication"
}

// 데이터베이스 오류
Http Status - 500 (Internal Server Error)
{
   "code": 500,
   "message": "database error"
}
```

<br>
<br>

# 오늘 기준 달력
### URL
`/api/v1/mili/calendar/{202405}`

### Header
None

### Request
YYMM

### Response
> 성공
```javascript
Http Status - 200 (OK)
{
   "code": 200,
   "message": "Sucess",
   "calendar": [?],
   "token": "abcd",
   "events": eventsList[],
   "tasks": tasksList[],
   "diary": diaryList[]
}

// 로그인 토큰 있을 경우 불러오는 정보
eventsList {
   "event_id": bigint,
   "title": string,
   "is_repeated": boolean,
   "is_allday": boolean,
   "startdate": string,
   "starttime": string,
   "enddate": string,
   "endtime": string,
   "calendar_in": string
}
tasksList {
   "task_id": bigint,
   "title": string,
   "duedate": string,
   "duetime": string
}
diaryList {
   "diary_id": bigint,
   "title": String,
   "created_at": String,
   "updated_at": String,
   "drawing": String,
   "text": String,
   "is_locked": boolean
}
```
<br>

> 실패

|  Name  |  Type  | Comment |
|:------:|:------:|:--------|
|code    | int    | 코드 |
|message | String | 메세지 |

<br>
<br>

# 일정 상세
### URL
`/api/v1/mili/user/event/{event_id}`

### Header
None

### Request
event_id

### Response
> 성공
```javascript
Http Status - 200 (OK)
{
   "code": 200,
   "message": "Sucess",
   "token": "abcd",
   "event": eventDetails[],
   "repeated": repeatedDetails[]
}

eventDetails {
   "event_id": bigint,
   "host_id": string,
   "guest_id": string,
   "created_at": string,
   "title": string,
   "is_repeated": boolean,
   "is_allday": boolean,
   "startdate": string,
   "starttime": string,
   "enddate": string,
   "endtime": string,
   "location": string,
   "description": string,
   "calendar_in": string
}
repeatedDetails {
   "event_id" : bigint,
   "cycle_unit" : string,
   "cycle_var" : int,
   "end_type" : string,
   "end_var" : int
}
```
<br>

> 실패

|  Name  |  Type  | Comment |
|:------:|:------:|:--------|
|code    | int    | 코드 |
|message | String | 메세지 |


<br>
<br>

# 할 일 목록

### URL
`/api/v1/mili/user/tasks`

### Header
None

### Request
None

### Response
> 성공
```javascript
Http Status - 200 (OK)
{
   "code": 200,
   "message": "Sucess",
   "token": "abcd",
   "tasks": tasksList[]
}

tasksList {
   "task_id": bigint,
   "title": string,
   "duedate": string,
   "duetime": string,
   "description": string
}
```
<br>

> 실패

|  Name  |  Type  | Comment |
|:------:|:------:|:--------|
|code    | int    | 코드 |
|message | String | 메세지 |

<br>
<br>

# 일기 목록
### URL
`/api/v1/mili/user/diary`

### Header
None

### Request
None

### Response
> 성공
```javascript
Http Status - 200 (OK)
{
   "code": 200,
   "message": "Sucess",
   "token": "abcd",
   "diary": diaryList[]
}

diaryList {
   "diary_id": bigint,
   "title": String,
   "created_at": String,
   "updated_at": String,
   "drawing": String,
   "text": String,
   "is_locked": boolean
}
```
<br>

> 실패

|  Name  |  Type  | Comment |
|:------:|:------:|:--------|
|code    | int    | 코드 |
|message | String | 메세지 |

<br>
<br>

# 일정 참여자 위치 공유

<br>
<br>

# 회원 정보
