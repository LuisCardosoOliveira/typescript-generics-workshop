import { Equal, Expect } from "../helpers/type-utils";

// We give a default value to `T`
export const createSet = <T = string>() => {
  return new Set<T>();
};

const numberSet = createSet<number>();
const stringSet = createSet<string>();
const otherStringSet = createSet();

type tests = [
  Expect<Equal<typeof numberSet, Set<number>>>,
  Expect<Equal<typeof stringSet, Set<string>>>,
  Expect<Equal<typeof otherStringSet, Set<string>>>
];
