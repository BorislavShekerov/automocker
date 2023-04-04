export class DependencyClass {
  a = 2

  // Proves that constructor params are disregarded
  constructor(_foo: number, _bar: string) {}

  private makeRandomNumber() {
    return 50 * Math.random()
  }

  returnRandomNumber(): number {
    return this.makeRandomNumber()
  }

  async returnRandomNumberAsynchronously(): Promise<number> {
    return Promise.resolve(this.makeRandomNumber())
  }
}
