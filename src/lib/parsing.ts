export function stringMatchesAll(str: string, find: RegExp[]): boolean {
  return find.every(regexp => str.match(regexp));
}

export function stringMatchesAny(str: string, find: RegExp[]): boolean {
  return find.some(regexp => str.match(regexp));
}

export function arrayRandom<T>(arr: Array<T>): T {
  return arr[Math.floor(Math.random() * arr.length)];
}