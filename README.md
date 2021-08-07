## react fundamentals

- Todo App 만들기 예제소스

### How to Todo App

## UI 구성하기

- 순서: todoTemplate > TodoInsert > TodoListItem > TodoList

## 기능 구현하기

### 리스트 뷰 기능 구현

- App > 가데이터 생성 => useState() 사용 => TodoList에 props 전달
- TodoList에서 .map 으로 TodoListItem에 props 전달

### 항목 추가 기능 구현

- App > useRef(), useCallback() 사용 => prop 로 보내기
- App 에서 onInsert 구현 useRef(), useCallback 사용
- TodoInsert 에서 onInsert 사용

### 지우기 구현

- App > .filter(), useCallback() 사용
- onRemove 구현 후 props 전달

### 체크박스 토글 구현

- App > .map(), useCallback() 사용
- onToggle 구현 후 props 전달
