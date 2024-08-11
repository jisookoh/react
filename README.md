# 부지런히 해보자 리액트!

## 의존성 패키지 설치

### `npm install`

의존성 라이브러리 전체 설치 명령어(필수)

## 개발 서버 실행

### `npm start`

개발 모드로 어플리케이션 띄우기\
[http://localhost:3000](http://localhost:3000)로 접속

## eslint 및 prettier 설치

1. [https://tyoon9781.tistory.com/entry/vscode-React-Prettier-ESLint-setting](https://tyoon9781.tistory.com/entry/vscode-React-Prettier-ESLint-setting)이 링크로 접속.

2. 기본 규칙이나 설정은 해놓았기 때문에 vscode 세팅만 해주면 됌 (위 링크에 3. vscode에 Prettier, ESlint 확장모듈 설치부터 보세유!)

## GitHub 연동

1. [https://velog.io/@pcj1541/Git-1.-Github-Start](https://velog.io/@pcj1541/Git-1.-Github-Start)이 링크로 접속.

2. 위 링크에서 `SignUp`, `Git 설치`, `PC와 Github 연결하기`요 3개만 보시고 따라해보세유!\
   (다만, remote 할 때, 이 명령어로 대체해주세유 `git remote add origin https://github.com/jisookoh/react.git`)

## GitHub 명령어

### branch 생성

1. `git checkout -b <브랜치명>` (로컬 브랜치 생성 및 이동) <= 브랜치 생성시에만 사용

### Push

1. `git status` (변경사항 파일 리스트 확인)
2. `git add .` (변경 사항 로컬 저장소에 전체 추가)
3. `git commit -m '변경 사항 메세지'` (변경 사항에 대한 메세지 저장)
4. `git push` (원격 저장소에 저장)

### Pull

1. pull 받으려는 브랜치와 로컬 브랜치가 같은지 확인 -> `git branch`
2. `git pull origin <브랜치명>`(ex, git pull origin heejins)
