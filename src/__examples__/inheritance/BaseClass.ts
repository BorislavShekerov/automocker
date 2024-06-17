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
  // -------------------------------------------------------------------------
  // Public Methods
  // -------------------------------------------------------------------------
  /**
   * Creates a new query builder that can be used to build a SQL query.
   */
  createQueryBuilder(alias: any, queryRunner: any) {
    return this.manager.createQueryBuilder(this.metadata.target, alias || this.metadata.targetName, queryRunner || this.queryRunner)
  }
  /**
   * Checks if entity has an id.
   * If entity composite compose ids, it will check them all.
   */
  hasId(entity: any) {
    return this.manager.hasId(this.metadata.target, entity)
  }
  /**
   * Gets entity mixed id.
   */
  getId(entity: any) {
    return this.manager.getId(this.metadata.target, entity)
  }
  /**
   * Creates a new entity instance or instances.
   * Can copy properties from the given object into new entities.
   */
  create(plainEntityLikeOrPlainEntityLike: any) {
    return this.manager.create(this.metadata.target, plainEntityLikeOrPlainEntityLike)
  }
  /**
   * Merges multiple entities (or entity-like objects) into a given entity.
   */
  merge(mergeIntoEntity: any, ...entityLikes: any) {
    return this.manager.merge(this.metadata.target, mergeIntoEntity, ...entityLikes)
  }
  /**
   * Creates a new entity from the given plain javascript object. If entity already exist in the database, then
   * it loads it (and everything related to it), replaces all values with the new ones from the given object
   * and returns this new entity. This new entity is actually a loaded from the db entity with all properties
   * replaced from the new object.
   *
   * Note that given entity-like object must have an entity id / primary key to find entity by.
   * Returns undefined if entity with given id was not found.
   */
  preload(entityLike: any) {
    return this.manager.preload(this.metadata.target, entityLike)
  }
  /**
   * Saves one or many given entities.
   */
  save(entityOrEntities: any, options: any) {
    return this.manager.save(this.metadata.target, entityOrEntities, options)
  }
  /**
   * Removes one or many given entities.
   */
  remove(entityOrEntities: any, options: any) {
    return this.manager.remove(this.metadata.target, entityOrEntities, options)
  }
  /**
   * Records the delete date of one or many given entities.
   */
  softRemove(entityOrEntities: any, options: any) {
    return this.manager.softRemove(this.metadata.target, entityOrEntities, options)
  }
  /**
   * Recovers one or many given entities.
   */
  recover(entityOrEntities: any, options: any) {
    return this.manager.recover(this.metadata.target, entityOrEntities, options)
  }
  /**
   * Inserts a given entity into the database.
   * Unlike save method executes a primitive operation without cascades, relations and other operations included.
   * Executes fast and efficient INSERT query.
   * Does not check if entity exist in the database, so query will fail if duplicate entity is being inserted.
   */
  insert(entity: any) {
    return this.manager.insert(this.metadata.target, entity)
  }
  /**
   * Updates entity partially. Entity can be found by a given conditions.
   * Unlike save method executes a primitive operation without cascades, relations and other operations included.
   * Executes fast and efficient UPDATE query.
   * Does not check if entity exist in the database.
   */
  update(criteria: any, partialEntity: any) {
    return this.manager.update(this.metadata.target, criteria, partialEntity)
  }
  /**
   * Inserts a given entity into the database, unless a unique constraint conflicts then updates the entity
   * Unlike save method executes a primitive operation without cascades, relations and other operations included.
   * Executes fast and efficient INSERT ... ON CONFLICT DO UPDATE/ON DUPLICATE KEY UPDATE query.
   */
  upsert(entityOrEntities: any, conflictPathsOrOptions: any) {
    return this.manager.upsert(this.metadata.target, entityOrEntities, conflictPathsOrOptions)
  }
  /**
   * Deletes entities by a given criteria.
   * Unlike save method executes a primitive operation without cascades, relations and other operations included.
   * Executes fast and efficient DELETE query.
   * Does not check if entity exist in the database.
   */
  delete(criteria: any) {
    return this.manager.delete(this.metadata.target, criteria)
  }
  /**
   * Records the delete date of entities by a given criteria.
   * Unlike save method executes a primitive operation without cascades, relations and other operations included.
   * Executes fast and efficient SOFT-DELETE query.
   * Does not check if entity exist in the database.
   */
  softDelete(criteria: any) {
    return this.manager.softDelete(this.metadata.target, criteria)
  }
  /**
   * Restores entities by a given criteria.
   * Unlike save method executes a primitive operation without cascades, relations and other operations included.
   * Executes fast and efficient SOFT-DELETE query.
   * Does not check if entity exist in the database.
   */
  restore(criteria: any) {
    return this.manager.restore(this.metadata.target, criteria)
  }
  /**
   * Checks whether any entity exists that match given options.
   */
  exist(options: any) {
    return this.manager.exists(this.metadata.target, options)
  }
  /**
   * Counts entities that match given options.
   * Useful for pagination.
   */
  count(options: any) {
    return this.manager.count(this.metadata.target, options)
  }
  /**
   * Counts entities that match given conditions.
   * Useful for pagination.
   */
  countBy(where: any) {
    return this.manager.countBy(this.metadata.target, where)
  }
  /**
   * Return the SUM of a column
   */
  sum(columnName: any, where: any) {
    return this.manager.sum(this.metadata.target, columnName, where)
  }
  /**
   * Return the AVG of a column
   */
  average(columnName: any, where: any) {
    return this.manager.average(this.metadata.target, columnName, where)
  }
  /**
   * Return the MIN of a column
   */
  minimum(columnName: any, where: any) {
    return this.manager.minimum(this.metadata.target, columnName, where)
  }
  /**
   * Return the MAX of a column
   */
  maximum(columnName: any, where: any) {
    return this.manager.maximum(this.metadata.target, columnName, where)
  }
  /**
   * Finds entities that match given find options.
   */
  async find(options: any) {
    return this.manager.find(this.metadata.target, options)
  }
  /**
   * Finds entities that match given find options.
   */
  async findBy(where: any) {
    return this.manager.findBy(this.metadata.target, where)
  }
  /**
   * Finds entities that match given find options.
   * Also counts all entities that match given conditions,
   * but ignores pagination settings (from and take options).
   */
  findAndCount(options: any) {
    return this.manager.findAndCount(this.metadata.target, options)
  }
  /**
   * Finds entities that match given WHERE conditions.
   * Also counts all entities that match given conditions,
   * but ignores pagination settings (from and take options).
   */
  findAndCountBy(where: any) {
    return this.manager.findAndCountBy(this.metadata.target, where)
  }
  /**
   * Finds entities with ids.
   * Optionally find options or conditions can be applied.
   *
   * @deprecated use `findBy` method instead in conjunction with `In` operator, for example:
   *
   * .findBy({
   *     id: In([1, 2, 3])
   * })
   */
  async findByIds(ids: any) {
    return this.manager.findByIds(this.metadata.target, ids)
  }
  /**
   * Finds first entity by a given find options.
   * If entity was not found in the database - returns null.
   */
  async findOne(options: any) {
    return this.manager.findOne(this.metadata.target, options)
  }
  /**
   * Finds first entity that matches given where condition.
   * If entity was not found in the database - returns null.
   */
  async findOneBy(where: any) {
    return this.manager.findOneBy(this.metadata.target, where)
  }
  /**
   * Finds first entity that matches given id.
   * If entity was not found in the database - returns null.
   *
   * @deprecated use `findOneBy` method instead in conjunction with `In` operator, for example:
   *
   * .findOneBy({
   *     id: 1 // where "id" is your primary column name
   * })
   */
  async findOneById(id: any) {
    return this.manager.findOneById(this.metadata.target, id)
  }
  /**
   * Finds first entity by a given find options.
   * If entity was not found in the database - rejects with error.
   */
  async findOneOrFail(options: any) {
    return this.manager.findOneOrFail(this.metadata.target, options)
  }
  /**
   * Finds first entity that matches given where condition.
   * If entity was not found in the database - rejects with error.
   */
  async findOneByOrFail(where: any) {
    return this.manager.findOneByOrFail(this.metadata.target, where)
  }
  /**
   * Executes a raw SQL query and returns a raw database results.
   * Raw query execution is supported only by relational databases (MongoDB is not supported).
   */
  query(query: any, parameters: any) {
    return this.manager.query(query, parameters)
  }
  /**
   * Clears all the data from the given table/collection (truncates/drops it).
   *
   * Note: this method uses TRUNCATE and may not work as you expect in transactions on some platforms.
   * @see https://stackoverflow.com/a/5972738/925151
   */
  clear() {
    return this.manager.clear(this.metadata.target)
  }
  /**
   * Increments some column by provided value of the entities matched given conditions.
   */
  increment(conditions: any, propertyPath: any, value: any) {
    return this.manager.increment(this.metadata.target, conditions, propertyPath, value)
  }
  /**
   * Decrements some column by provided value of the entities matched given conditions.
   */
  decrement(conditions: any, propertyPath: any, value: any) {
    return this.manager.decrement(this.metadata.target, conditions, propertyPath, value)
  }
}
