# react fundamentals

- react hook로 Todo App 만들기 예제소스

## 파일 설명

- 경로 (root)/src/

```
├── public
    ├── index.html
    └── indexTemplate.html => 스타일 구조 파악용 탬플릿 html 파일
├── components
│   ├── TodoInsert.js
│   ├── TodoList.js
│   ├── TodoListItem.js
│   └── TodoTemplate.js
├── App.css
├── App.js
├── index.css
├── index.js
└── legacy => 레거시 Todo App 코드
```

## How to Todo App

## UI 구성하기

- 순서: todoTemplate > TodoInsert > TodoListItem > TodoList

## 기능 구현하기

### 리스트 뷰 기능 구현

- App > 가데이터 생성 => useState() 사용 => TodoList에 props 전달
- TodoList에서 .map 으로 TodoListItem에 props 전달

### 항목 추가 기능 구현

- App 에서 onInsert 구현
- useRef() 사용해 컴포넌트 안의 변수 만들기
- TodoInsert 에서 onInsert 사용

### 지우기 구현

- App > .filter() 사용
- onDelete 구현 후 props 전달

### 체크박스 토글 구현

- App > .map() 사용
- onToggle 구현 후 props 전달

> 자세한 설명은 포스팅을 참고(url 참조예정)

## ref)

- [리액트 공식 홈페이지](https://reactjs.org/)
- [리엑트를 다루는 기술](http://www.yes24.com/Product/Goods/78233628)
- [벨로퍼트와 함께하는 모던 리액트](https://react.vlpt.us/)
