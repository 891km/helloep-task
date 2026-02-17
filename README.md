# [일상의실천] 프론트엔드 사전과제 - 김민주

- 제출자: 김민주
- 이메일: 891km.dev@gmail.com

### 배포 URL

| 구분       | URL                                      |
| ---------- | ---------------------------------------- |
| 프론트엔드 | https://helloep-task-891km.vercel.app    |
| CMS        | https://helloep-task-891km.sanity.studio |

> CMS 접근 시 관리자 계정이 필요합니다.

<br/>

## 실행 방법

프로젝트 내에 프론트엔드(Next.js)와 CMS(Sanity Studio) 두 파트로 구성되어 있습니다.

### 1. 프론트엔드

```bash
# 루트 폴더(helloep-task-main)에서

cd nextjs-helloep-task
npm install
npm run dev
```

### 2. CMS (Sanity)

```bash
# 루트 폴더(helloep-task-main)에서

cd nextjs-helloep-task
npm install
npm run dev
```

> 로컬 실행 시에도 CMS 접근 시 관리자 계정이 필요합니다.

<br/>

## 사용한 기술 스택 및 선택 이유

### 프론트엔드: React + Next.js

- UI 구현의 자유도가 높고, 정적 콘텐츠 중심 사이트에 SSG/ISR 방식을 적용할 수 있어 Next.js를 선택했습니다. App Router 기반으로 페이지를 구성하고 서버 컴포넌트에서 데이터 페칭을 처리하여 캐싱 기능을 활용할 수 있었습니다.

### 스타일링: Tailwind CSS

- 컴포넌트 단위로 스타일을 관리할 수 있고, 별도의 CSS 파일 없이 빠르게 UI를 구현할 수 있어 사용하였습니다.

### CMS: Sanity (Headless CMS)

- 콘텐츠와 프론트엔드를 분리하여 독립적으로 관리할 수 있다는 점에서 Headless CMS인 Sanity를 선택하였습니다. 또한, 스키마를 직접 설계할 수 있어 프로젝트 구조에 맞는 데이터 모델링이 가능하였습니다.

<br/>

## CMS 구조 및 설계 의도

```
CMS
 ├ 콘텐츠
 │   ├ Contact      # Contact 페이지 정보
 │   ├ CV           # CV 페이지 정보
 │   └ Posts        # 포트폴리오 게시물
 └ 설정
     └ Category     # 게시물 카테고리 관리
```

### 설계 의도

콘텐츠 스키마는 **페이지 단위**로 나누어 관리하였습니다. 각 페이지에서 필요한 데이터를 독립적으로 수정할 수 있도록 분리함으로써 유지보수성을 높였습니다.

카테고리는 전역적으로 참조되는 값이므로 **설정** 항목으로 별도 분리하였습니다. 이를 통해 프론트엔드에서 카테고리 목록을 하드코딩하지 않고 CMS에서 직접 관리할 수 있습니다.

### 포트폴리오 게시물(Posts) 스키마 상세

| 필드        | 타입                                  | 설명                                         |
| ----------- | ------------------------------------- | -------------------------------------------- |
| title       | string                                | 포스트 제목                                  |
| description | text                                  | 포스트 설명                                  |
| credit      | text                                  | 참여자/제작자 정보                           |
| eng         | object { title, description, credit } | 영어 버전의 데이터 (제목, 설명, 참여자 정보) |
| workYear    | number                                | 작업 연도                                    |
| client      | string                                | 클라이언트 명                                |
| thumbnail   | image                                 | 대표 이미지                                  |
| categories  | array of string                       | 카테고리 (설정의 카테고리와 연동)            |
| content     | array of images/objects               | 상세 콘텐츠 (이미지, YouTube Embed)          |
| workLinks   | array of urls                         | 외부 작업 링크                               |
| publishedAt | datetime                              | 게시일                                       |
| slug        | slug                                  | URL 식별자                                   |

영문 콘텐츠를 고려하여 국문 기본값과 영문 데이터(`eng` 객체)를 하나의 포스트 안에서 관리하도록 설계하였습니다. `content` 필드는 기존 웹사이트의 구조를 참고해 이미지와 YouTube Embed를 혼합 배열로 구성하였습니다.
