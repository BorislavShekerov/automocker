export class DependencyClass {
  a = 2

  // Proves that constructor params are disregarded
  constructor(_foo: number, _bar: string) {}

  returnRandomNumber(): number {
    return 50 * Math.random()
  }
}
