/*
  3312 - Parameters
  -------
  by midorizemi (@midorizemi) #쉬움 #infer #tuple #built-in

  ### 질문

  내장 제네릭 `Parameters<T>`를 이를 사용하지 않고 구현하세요.

  예시:

  ```ts
  const foo = (arg1: string, arg2: number): void => {}

  type FunctionParamsType = MyParameters<typeof foo> // [arg1: string, arg2: number]
  ```
*/

/* _____________ 여기에 코드 입력 _____________ */

type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P // T가 함수타입인 경우  파라미터 타입은 P임을 추론.
) => any
  ? P
  : never;

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

function foo(arg1: string, arg2: number): void {}
function bar(arg1: boolean, arg2: { a: "A" }): void {}
function baz(): void {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: "A" }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>
];
