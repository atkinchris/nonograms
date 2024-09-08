const iter = <T>(length: number, fn: (i: number) => T): T[] => Array.from({ length }, (_, i) => fn(i))

export { iter }
