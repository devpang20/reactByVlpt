# react fundamentals

- Todo App 만들기 예제소스
- TodoApp 만들기 튜토리얼 셋업용

## 파일 설명

- 경로 (root)/src/

```
├── App.css
├── App.js => 작업을 해야할 App 파일 AppSkeleton.js 기초 코드를 받아와 시작
├── AppComplete.js => 완료된 App 소스 파일
├── AppSkeleton.js => 작업의 뼈대가 되는 App 소스 파일
├── completeComponents => 완료된 컴포넌트 소스 디렉토리
│   ├── TodoInsert.js
│   ├── TodoList.js
│   ├── TodoListItem.js
│   └── TodoTemplate.js
├── components => 작업을 해야할 컴포넌트 디렉토리 skeletonComponents 디렉토리에서 기초코드를 받아와서 시작
│   ├── TodoInsert.js
│   ├── TodoList.js
│   ├── TodoListItem.js
│   └── TodoTemplate.js
├── exercise => 클래스형 컴포넌트 연습 소스 디렉토리(무시)
├── index.css
├── index.js
├── skeletonComponents => 작업의 뼈대가 되는 소스 디렉토리
│   ├── TodoInsert.js
│   ├── TodoList.js
│   ├── TodoListItem.js
│   └── TodoTemplate.js
└── styles => 스타일 소스 스타일은 이 디렉토리에서 import
├── TodoInsert.scss
├── TodoList.scss
├── TodoListItem.scss
└── TodoTemplate.scss

```

- skeletonComponents에 doxygen 으로 힌트를 주었으니 참고하여 개발 하면 됨

## How to Todo App Guide

## UI 구성하기

- 순서: todoTemplate > TodoInsert > TodoListItem > TodoList

## 기능 구현하기

### 리스트 뷰 기능 구현

- App > 가데이터 생성 => useState() 사용 => TodoList에 props 전달
- TodoList에서 .map 으로 TodoListItem에 props 전달

### 항목 추가 기능 구현

- App > useRef() 사용 => prop 로 보내기
- App 에서 onInsert 구현 useRef() 사용
- TodoInsert 에서 onInsert 사용

### 지우기 구현

- App > .filter() 사용
- onRemove 구현 후 props 전달

### 체크박스 토글 구현

- App > .map() 사용
- onToggle 구현 후 props 전달

## ref)

- [벨로퍼트님의 todoapp 만들기 자료1](https://velopert.com/3480)
- [벨로퍼트님의 todoapp 만들기 자료2](https://react.vlpt.us/mashup-todolist/)
- [벨로퍼트님의 todoapp 만들기 자료3](http://www.yes24.com/Product/Goods/78233628)
