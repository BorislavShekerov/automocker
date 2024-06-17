export class ClassWithConstructorArguments {
  constructor(object: Record<string, number>) {
    console.log(object.foo + 5)
  }

  foo() {}
}
