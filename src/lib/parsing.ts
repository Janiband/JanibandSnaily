export function stringStrip(str: string): string {
  const res = str.toLowerCase().match(/^\[.+\]\s(.+)$/)
  if (!res) return str.toLowerCase()
  return res[1]
}

export function stringMatchesAll(str: string, find: RegExp[]): boolean {
  return find.every(regexp => str.match(regexp));
}

export function stringMatchesAny(str: string, find: RegExp[]): boolean {
  return find.some(regexp => str.match(regexp));
}

export function arrayRandom<T>(arr: Array<T>): T {
  return arr[Math.floor(Math.random() * arr.length)];
}