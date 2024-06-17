export class BaseClass {
  target: any
  manager: any
  queryRunner: any

  get metadata() {
    return this.manager.connection.getMetadata(this.target)
  }

  constructor(target: any, manager: any, queryRunner: any) {
    this.target = target
    this.manager = manager
    this.queryRunner = queryRunner
  }

  public baseMethod(): string {
    return 'Base Method'
  }
}
