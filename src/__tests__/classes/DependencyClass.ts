export class DependencyClass {
  // Proves that constructor params are disregarded
  constructor(_foo: number, _bar: string) {}

  returnRandomNumber(): number {
    return 50 * Math.random()
  }
}
