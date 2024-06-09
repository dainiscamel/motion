/*
  3060 - Unshift
  -------
  by jiangshan (@jiangshanmeta) #쉬움 #array

  ### 질문

  `Array.unshift`의 타입 버전을 구현하세요.

  예시:

  ```typescript
  type Result = Unshift<[1, 2], 0> // [0, 1, 2]
  ```

  
*/

/* _____________ 여기에 코드 입력 _____________ */

type Unshift<T extends any[], U> = [U, ...T];

/* _____________ 테스트 케이스 _____________ */
import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<["1", 2, "3"], boolean>, [boolean, "1", 2, "3"]>>
];
