type FixedArrayLength<T, L extends number> = {
  0: T,
  length: L
} & Array<T>

type ThreeLengthArray = FixedArrayLength<number, 3>

// const _a1: ThreeLengthArray = [1,2,3,4]

const _a2: ThreeLengthArray = [1,2,3]

type Length<T extends any[], L extends number> = T extends { length: L } ? T : never;

function assertLength<T extends any[], L extends number>(arr: T, length: L): asserts arr is Length<T, L> {
  if (arr.length !== length) {
    throw new Error(`Array does not have length ${length}`);
  }
}

const arr = [1, 2, 3];
assertLength(arr, 3); // No error
// assertLength(arr, 2); // Error: Array does not have length 2

