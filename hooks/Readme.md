### Rules of Hooks

- Only Call Hooks at the Top Level
  : Hooks를 루프 내부, 조건(condition), 또는 중첩 함수 내부에서 호출하면 안됩니다. Hooks는 언제나 리액트 함수의 top-level에서 호출되어야 합니다. 이 규칙을 지키면 컴포넌트가 렌더링 될 때 마다 hooks가 동일한 순서로 호출되는 것을 보장할 수 있습니다. 그리고 이런 방식은 리액트가 정확하게 여러 hooks의 상태를 보존할 수 있도록 도와줍니다(useState, useEffect 등).

- Only Call Hooks from React Functions
  : Hooks를 일반 자바스크립트 함수에서 호출하면 안됩니다.
- 대신Hooks를 리액트 함수형 컴포넌트 내부에서 호출합니다.
- Hooks를 custom Hooks에서 호출합니다.
  이 규칙을 따르면 컴포넌트 내부의 stateful logic이 소스코드에서 명확하게 보일 수 있도록 보장합니다.
