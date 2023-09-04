export function pushToArray<T>(arr: T[], ...elements: T[]): T[] {
    return arr.concat(elements);
  }

  export function popFromArray<T>(arr: T[]): T | undefined {
    return arr.pop();
  }

  export function shiftFromArray<T>(arr: T[]): T | undefined {
    return arr.shift();
  }

  export function unshiftToArray<T>(arr: T[], ...elements: T[]): number {
    return arr.unshift(...elements);
  }

  export function spliceArray<T>(arr: T[], start: number, deleteCount: number, ...elements: T[]): T[] {
    return arr.splice(start, deleteCount, ...elements);
  }

  export function sliceArray<T>(arr: T[], start?: number, end?: number): T[] {
    return arr.slice(start, end);
  }

  export function concatArrays<T>(arr1: T[], arr2: T[]): T[] {
    return arr1.concat(arr2);
  }

  export function joinArray<T>(arr: T[], separator?: string): string {
    return arr.join(separator);
  }

  export function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }

  export function sortArray<T>(arr: T[], compareFn?: (a: T, b: T) => number): T[] {
    return arr.sort(compareFn);
  }

  export function indexOfArray<T>(arr: T[], searchElement: T, fromIndex?: number): number {
    return arr.indexOf(searchElement, fromIndex);
  }

  export function lastIndexOfArray<T>(arr: T[], searchElement: T, fromIndex?: number): number {
    return arr.lastIndexOf(searchElement, fromIndex);
  }

  export function forEachArray<T>(arr: T[], callbackfn: (value: T, index: number, array: T[]) => void): void {
    arr.forEach(callbackfn);
  }

  export function mapArray<T, U>(arr: T[], callbackfn: (value: T, index: number, array: T[]) => U): U[] {
    return arr.map(callbackfn);
  }

  export function filterArray<T>(arr: T[], callbackfn: (value: T, index: number, array: T[]) => boolean): T[] {
    return arr.filter(callbackfn);
  }

  export function reduceArray<T, U>(arr: T[], callbackfn: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U {
    return arr.reduce(callbackfn, initialValue);
  }

  export function everyArray<T>(arr: T[], callbackfn: (value: T, index: number, array: T[]) => boolean): boolean {
    return arr.every(callbackfn);
  }

  export function someArray<T>(arr: T[], callbackfn: (value: T, index: number, array: T[]) => boolean): boolean {
    return arr.some(callbackfn);
  }

  export function findArray<T>(arr: T[], callbackfn: (value: T, index: number, array: T[]) => boolean): T | undefined {
    return arr.find(callbackfn);
  }

  export function findIndexArray<T>(arr: T[], callbackfn: (value: T, index: number, array: T[]) => boolean): number {
    return arr.findIndex(callbackfn);
  }





