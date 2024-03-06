
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Employees
 * 
 */
export type Employees = $Result.DefaultSelection<Prisma.$EmployeesPayload>
/**
 * Model Clients
 * 
 */
export type Clients = $Result.DefaultSelection<Prisma.$ClientsPayload>
/**
 * Model Vehicles
 * 
 */
export type Vehicles = $Result.DefaultSelection<Prisma.$VehiclesPayload>
/**
 * Model Records
 * 
 */
export type Records = $Result.DefaultSelection<Prisma.$RecordsPayload>
/**
 * Model Slots
 * 
 */
export type Slots = $Result.DefaultSelection<Prisma.$SlotsPayload>
/**
 * Model Fees
 * 
 */
export type Fees = $Result.DefaultSelection<Prisma.$FeesPayload>
/**
 * Model Photoresistors
 * 
 */
export type Photoresistors = $Result.DefaultSelection<Prisma.$PhotoresistorsPayload>
/**
 * Model HumiditySensors
 * 
 */
export type HumiditySensors = $Result.DefaultSelection<Prisma.$HumiditySensorsPayload>
/**
 * Model ProximitySensor
 * 
 */
export type ProximitySensor = $Result.DefaultSelection<Prisma.$ProximitySensorPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employees.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Employees
   * const employees = await prisma.employees.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.employees`: Exposes CRUD operations for the **Employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.EmployeesDelegate<ExtArgs>;

  /**
   * `prisma.clients`: Exposes CRUD operations for the **Clients** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.clients.findMany()
    * ```
    */
  get clients(): Prisma.ClientsDelegate<ExtArgs>;

  /**
   * `prisma.vehicles`: Exposes CRUD operations for the **Vehicles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicles.findMany()
    * ```
    */
  get vehicles(): Prisma.VehiclesDelegate<ExtArgs>;

  /**
   * `prisma.records`: Exposes CRUD operations for the **Records** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Records
    * const records = await prisma.records.findMany()
    * ```
    */
  get records(): Prisma.RecordsDelegate<ExtArgs>;

  /**
   * `prisma.slots`: Exposes CRUD operations for the **Slots** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Slots
    * const slots = await prisma.slots.findMany()
    * ```
    */
  get slots(): Prisma.SlotsDelegate<ExtArgs>;

  /**
   * `prisma.fees`: Exposes CRUD operations for the **Fees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Fees
    * const fees = await prisma.fees.findMany()
    * ```
    */
  get fees(): Prisma.FeesDelegate<ExtArgs>;

  /**
   * `prisma.photoresistors`: Exposes CRUD operations for the **Photoresistors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photoresistors
    * const photoresistors = await prisma.photoresistors.findMany()
    * ```
    */
  get photoresistors(): Prisma.PhotoresistorsDelegate<ExtArgs>;

  /**
   * `prisma.humiditySensors`: Exposes CRUD operations for the **HumiditySensors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HumiditySensors
    * const humiditySensors = await prisma.humiditySensors.findMany()
    * ```
    */
  get humiditySensors(): Prisma.HumiditySensorsDelegate<ExtArgs>;

  /**
   * `prisma.proximitySensor`: Exposes CRUD operations for the **ProximitySensor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProximitySensors
    * const proximitySensors = await prisma.proximitySensor.findMany()
    * ```
    */
  get proximitySensor(): Prisma.ProximitySensorDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Employees: 'Employees',
    Clients: 'Clients',
    Vehicles: 'Vehicles',
    Records: 'Records',
    Slots: 'Slots',
    Fees: 'Fees',
    Photoresistors: 'Photoresistors',
    HumiditySensors: 'HumiditySensors',
    ProximitySensor: 'ProximitySensor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'employees' | 'clients' | 'vehicles' | 'records' | 'slots' | 'fees' | 'photoresistors' | 'humiditySensors' | 'proximitySensor'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Employees: {
        payload: Prisma.$EmployeesPayload<ExtArgs>
        fields: Prisma.EmployeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findFirst: {
            args: Prisma.EmployeesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          findMany: {
            args: Prisma.EmployeesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>[]
          }
          create: {
            args: Prisma.EmployeesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          createMany: {
            args: Prisma.EmployeesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EmployeesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          update: {
            args: Prisma.EmployeesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          deleteMany: {
            args: Prisma.EmployeesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EmployeesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EmployeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.EmployeesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeesCountArgs<ExtArgs>,
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      Clients: {
        payload: Prisma.$ClientsPayload<ExtArgs>
        fields: Prisma.ClientsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findFirst: {
            args: Prisma.ClientsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          findMany: {
            args: Prisma.ClientsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>[]
          }
          create: {
            args: Prisma.ClientsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          createMany: {
            args: Prisma.ClientsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClientsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          update: {
            args: Prisma.ClientsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          deleteMany: {
            args: Prisma.ClientsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClientsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClientsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientsPayload>
          }
          aggregate: {
            args: Prisma.ClientsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClients>
          }
          groupBy: {
            args: Prisma.ClientsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientsCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientsCountAggregateOutputType> | number
          }
        }
      }
      Vehicles: {
        payload: Prisma.$VehiclesPayload<ExtArgs>
        fields: Prisma.VehiclesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehiclesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehiclesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>
          }
          findFirst: {
            args: Prisma.VehiclesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehiclesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>
          }
          findMany: {
            args: Prisma.VehiclesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>[]
          }
          create: {
            args: Prisma.VehiclesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>
          }
          createMany: {
            args: Prisma.VehiclesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VehiclesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>
          }
          update: {
            args: Prisma.VehiclesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>
          }
          deleteMany: {
            args: Prisma.VehiclesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VehiclesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VehiclesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VehiclesPayload>
          }
          aggregate: {
            args: Prisma.VehiclesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVehicles>
          }
          groupBy: {
            args: Prisma.VehiclesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VehiclesGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehiclesCountArgs<ExtArgs>,
            result: $Utils.Optional<VehiclesCountAggregateOutputType> | number
          }
        }
      }
      Records: {
        payload: Prisma.$RecordsPayload<ExtArgs>
        fields: Prisma.RecordsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RecordsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RecordsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          findFirst: {
            args: Prisma.RecordsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RecordsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          findMany: {
            args: Prisma.RecordsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>[]
          }
          create: {
            args: Prisma.RecordsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          createMany: {
            args: Prisma.RecordsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RecordsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          update: {
            args: Prisma.RecordsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          deleteMany: {
            args: Prisma.RecordsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RecordsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RecordsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RecordsPayload>
          }
          aggregate: {
            args: Prisma.RecordsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRecords>
          }
          groupBy: {
            args: Prisma.RecordsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RecordsGroupByOutputType>[]
          }
          count: {
            args: Prisma.RecordsCountArgs<ExtArgs>,
            result: $Utils.Optional<RecordsCountAggregateOutputType> | number
          }
        }
      }
      Slots: {
        payload: Prisma.$SlotsPayload<ExtArgs>
        fields: Prisma.SlotsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SlotsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SlotsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>
          }
          findFirst: {
            args: Prisma.SlotsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SlotsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>
          }
          findMany: {
            args: Prisma.SlotsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>[]
          }
          create: {
            args: Prisma.SlotsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>
          }
          createMany: {
            args: Prisma.SlotsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SlotsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>
          }
          update: {
            args: Prisma.SlotsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>
          }
          deleteMany: {
            args: Prisma.SlotsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SlotsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SlotsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SlotsPayload>
          }
          aggregate: {
            args: Prisma.SlotsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSlots>
          }
          groupBy: {
            args: Prisma.SlotsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SlotsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SlotsCountArgs<ExtArgs>,
            result: $Utils.Optional<SlotsCountAggregateOutputType> | number
          }
        }
      }
      Fees: {
        payload: Prisma.$FeesPayload<ExtArgs>
        fields: Prisma.FeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeesPayload>
          }
          findFirst: {
            args: Prisma.FeesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeesPayload>
          }
          findMany: {
            args: Prisma.FeesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeesPayload>[]
          }
          create: {
            args: Prisma.FeesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeesPayload>
          }
          createMany: {
            args: Prisma.FeesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FeesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeesPayload>
          }
          update: {
            args: Prisma.FeesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeesPayload>
          }
          deleteMany: {
            args: Prisma.FeesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FeesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FeesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeesPayload>
          }
          aggregate: {
            args: Prisma.FeesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFees>
          }
          groupBy: {
            args: Prisma.FeesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeesCountArgs<ExtArgs>,
            result: $Utils.Optional<FeesCountAggregateOutputType> | number
          }
        }
      }
      Photoresistors: {
        payload: Prisma.$PhotoresistorsPayload<ExtArgs>
        fields: Prisma.PhotoresistorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoresistorsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoresistorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoresistorsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoresistorsPayload>
          }
          findFirst: {
            args: Prisma.PhotoresistorsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoresistorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoresistorsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoresistorsPayload>
          }
          findMany: {
            args: Prisma.PhotoresistorsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoresistorsPayload>[]
          }
          create: {
            args: Prisma.PhotoresistorsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoresistorsPayload>
          }
          createMany: {
            args: Prisma.PhotoresistorsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PhotoresistorsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoresistorsPayload>
          }
          update: {
            args: Prisma.PhotoresistorsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoresistorsPayload>
          }
          deleteMany: {
            args: Prisma.PhotoresistorsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoresistorsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PhotoresistorsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PhotoresistorsPayload>
          }
          aggregate: {
            args: Prisma.PhotoresistorsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePhotoresistors>
          }
          groupBy: {
            args: Prisma.PhotoresistorsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PhotoresistorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoresistorsCountArgs<ExtArgs>,
            result: $Utils.Optional<PhotoresistorsCountAggregateOutputType> | number
          }
        }
      }
      HumiditySensors: {
        payload: Prisma.$HumiditySensorsPayload<ExtArgs>
        fields: Prisma.HumiditySensorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HumiditySensorsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumiditySensorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HumiditySensorsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumiditySensorsPayload>
          }
          findFirst: {
            args: Prisma.HumiditySensorsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumiditySensorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HumiditySensorsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumiditySensorsPayload>
          }
          findMany: {
            args: Prisma.HumiditySensorsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumiditySensorsPayload>[]
          }
          create: {
            args: Prisma.HumiditySensorsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumiditySensorsPayload>
          }
          createMany: {
            args: Prisma.HumiditySensorsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HumiditySensorsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumiditySensorsPayload>
          }
          update: {
            args: Prisma.HumiditySensorsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumiditySensorsPayload>
          }
          deleteMany: {
            args: Prisma.HumiditySensorsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HumiditySensorsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HumiditySensorsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HumiditySensorsPayload>
          }
          aggregate: {
            args: Prisma.HumiditySensorsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHumiditySensors>
          }
          groupBy: {
            args: Prisma.HumiditySensorsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HumiditySensorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.HumiditySensorsCountArgs<ExtArgs>,
            result: $Utils.Optional<HumiditySensorsCountAggregateOutputType> | number
          }
        }
      }
      ProximitySensor: {
        payload: Prisma.$ProximitySensorPayload<ExtArgs>
        fields: Prisma.ProximitySensorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProximitySensorFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProximitySensorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProximitySensorFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProximitySensorPayload>
          }
          findFirst: {
            args: Prisma.ProximitySensorFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProximitySensorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProximitySensorFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProximitySensorPayload>
          }
          findMany: {
            args: Prisma.ProximitySensorFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProximitySensorPayload>[]
          }
          create: {
            args: Prisma.ProximitySensorCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProximitySensorPayload>
          }
          createMany: {
            args: Prisma.ProximitySensorCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProximitySensorDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProximitySensorPayload>
          }
          update: {
            args: Prisma.ProximitySensorUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProximitySensorPayload>
          }
          deleteMany: {
            args: Prisma.ProximitySensorDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProximitySensorUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProximitySensorUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProximitySensorPayload>
          }
          aggregate: {
            args: Prisma.ProximitySensorAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProximitySensor>
          }
          groupBy: {
            args: Prisma.ProximitySensorGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProximitySensorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProximitySensorCountArgs<ExtArgs>,
            result: $Utils.Optional<ProximitySensorCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientsCountOutputType
   */

  export type ClientsCountOutputType = {
    Vehicle: number
  }

  export type ClientsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vehicle?: boolean | ClientsCountOutputTypeCountVehicleArgs
  }

  // Custom InputTypes

  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientsCountOutputType
     */
    select?: ClientsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ClientsCountOutputType without action
   */
  export type ClientsCountOutputTypeCountVehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiclesWhereInput
  }



  /**
   * Count Type VehiclesCountOutputType
   */

  export type VehiclesCountOutputType = {
    Records: number
  }

  export type VehiclesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Records?: boolean | VehiclesCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes

  /**
   * VehiclesCountOutputType without action
   */
  export type VehiclesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehiclesCountOutputType
     */
    select?: VehiclesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * VehiclesCountOutputType without action
   */
  export type VehiclesCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordsWhereInput
  }



  /**
   * Count Type SlotsCountOutputType
   */

  export type SlotsCountOutputType = {
    Records: number
  }

  export type SlotsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Records?: boolean | SlotsCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes

  /**
   * SlotsCountOutputType without action
   */
  export type SlotsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SlotsCountOutputType
     */
    select?: SlotsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * SlotsCountOutputType without action
   */
  export type SlotsCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordsWhereInput
  }



  /**
   * Count Type FeesCountOutputType
   */

  export type FeesCountOutputType = {
    Records: number
  }

  export type FeesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Records?: boolean | FeesCountOutputTypeCountRecordsArgs
  }

  // Custom InputTypes

  /**
   * FeesCountOutputType without action
   */
  export type FeesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeesCountOutputType
     */
    select?: FeesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FeesCountOutputType without action
   */
  export type FeesCountOutputTypeCountRecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phoneNumber: string | null
    email: string | null
    username: string | null
    password: string | null
    token: string | null
  }

  export type EmployeesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phoneNumber: string | null
    email: string | null
    username: string | null
    password: string | null
    token: string | null
  }

  export type EmployeesCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phoneNumber: number
    email: number
    username: number
    password: number
    token: number
    _all: number
  }


  export type EmployeesMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    email?: true
    username?: true
    password?: true
    token?: true
  }

  export type EmployeesMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    email?: true
    username?: true
    password?: true
    token?: true
  }

  export type EmployeesCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    email?: true
    username?: true
    password?: true
    token?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to aggregate.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type EmployeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeesWhereInput
    orderBy?: EmployeesOrderByWithAggregationInput | EmployeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: EmployeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    id: string
    name: string
    address: string
    phoneNumber: string | null
    email: string | null
    username: string
    password: string
    token: string | null
    _count: EmployeesCountAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends EmployeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type EmployeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phoneNumber?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    token?: boolean
  }, ExtArgs["result"]["employees"]>

  export type EmployeesSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phoneNumber?: boolean
    email?: boolean
    username?: boolean
    password?: boolean
    token?: boolean
  }


  export type $EmployeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employees"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phoneNumber: string | null
      email: string | null
      username: string
      password: string
      token: string | null
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }


  type EmployeesGetPayload<S extends boolean | null | undefined | EmployeesDefaultArgs> = $Result.GetResult<Prisma.$EmployeesPayload, S>

  type EmployeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EmployeesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface EmployeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employees'], meta: { name: 'Employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {EmployeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EmployeesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeesFindUniqueArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Employees that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EmployeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EmployeesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EmployeesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeesFindFirstArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EmployeesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeesWithIdOnly = await prisma.employees.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EmployeesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Employees.
     * @param {EmployeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
    **/
    create<T extends EmployeesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeesCreateArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Employees.
     *     @param {EmployeesCreateManyArgs} args - Arguments to create many Employees.
     *     @example
     *     // Create many Employees
     *     const employees = await prisma.employees.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EmployeesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Employees.
     * @param {EmployeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
    **/
    delete<T extends EmployeesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeesDeleteArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Employees.
     * @param {EmployeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EmployeesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeesUpdateArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Employees.
     * @param {EmployeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EmployeesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EmployeesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EmployeesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Employees.
     * @param {EmployeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
    **/
    upsert<T extends EmployeesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EmployeesUpsertArgs<ExtArgs>>
    ): Prisma__EmployeesClient<$Result.GetResult<Prisma.$EmployeesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeesCountArgs>(
      args?: Subset<T, EmployeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EmployeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeesGroupByArgs['orderBy'] }
        : { orderBy?: EmployeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EmployeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employees model
   */
  readonly fields: EmployeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Employees model
   */ 
  interface EmployeesFieldRefs {
    readonly id: FieldRef<"Employees", 'String'>
    readonly name: FieldRef<"Employees", 'String'>
    readonly address: FieldRef<"Employees", 'String'>
    readonly phoneNumber: FieldRef<"Employees", 'String'>
    readonly email: FieldRef<"Employees", 'String'>
    readonly username: FieldRef<"Employees", 'String'>
    readonly password: FieldRef<"Employees", 'String'>
    readonly token: FieldRef<"Employees", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Employees findUnique
   */
  export type EmployeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }


  /**
   * Employees findUniqueOrThrow
   */
  export type EmployeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where: EmployeesWhereUniqueInput
  }


  /**
   * Employees findFirst
   */
  export type EmployeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }


  /**
   * Employees findFirstOrThrow
   */
  export type EmployeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }


  /**
   * Employees findMany
   */
  export type EmployeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeesOrderByWithRelationInput | EmployeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }


  /**
   * Employees create
   */
  export type EmployeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * The data needed to create a Employees.
     */
    data: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
  }


  /**
   * Employees createMany
   */
  export type EmployeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeesCreateManyInput | EmployeesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Employees update
   */
  export type EmployeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * The data needed to update a Employees.
     */
    data: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
    /**
     * Choose, which Employees to update.
     */
    where: EmployeesWhereUniqueInput
  }


  /**
   * Employees updateMany
   */
  export type EmployeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeesUpdateManyMutationInput, EmployeesUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeesWhereInput
  }


  /**
   * Employees upsert
   */
  export type EmployeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * The filter to search for the Employees to update in case it exists.
     */
    where: EmployeesWhereUniqueInput
    /**
     * In case the Employees found by the `where` argument doesn't exist, create a new Employees with this data.
     */
    create: XOR<EmployeesCreateInput, EmployeesUncheckedCreateInput>
    /**
     * In case the Employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeesUpdateInput, EmployeesUncheckedUpdateInput>
  }


  /**
   * Employees delete
   */
  export type EmployeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
    /**
     * Filter which Employees to delete.
     */
    where: EmployeesWhereUniqueInput
  }


  /**
   * Employees deleteMany
   */
  export type EmployeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeesWhereInput
  }


  /**
   * Employees without action
   */
  export type EmployeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employees
     */
    select?: EmployeesSelect<ExtArgs> | null
  }



  /**
   * Model Clients
   */

  export type AggregateClients = {
    _count: ClientsCountAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  export type ClientsMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phoneNumber: string | null
    email: string | null
  }

  export type ClientsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phoneNumber: string | null
    email: string | null
  }

  export type ClientsCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phoneNumber: number
    email: number
    _all: number
  }


  export type ClientsMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    email?: true
  }

  export type ClientsMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    email?: true
  }

  export type ClientsCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    email?: true
    _all?: true
  }

  export type ClientsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to aggregate.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientsMaxAggregateInputType
  }

  export type GetClientsAggregateType<T extends ClientsAggregateArgs> = {
        [P in keyof T & keyof AggregateClients]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClients[P]>
      : GetScalarType<T[P], AggregateClients[P]>
  }




  export type ClientsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientsWhereInput
    orderBy?: ClientsOrderByWithAggregationInput | ClientsOrderByWithAggregationInput[]
    by: ClientsScalarFieldEnum[] | ClientsScalarFieldEnum
    having?: ClientsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientsCountAggregateInputType | true
    _min?: ClientsMinAggregateInputType
    _max?: ClientsMaxAggregateInputType
  }

  export type ClientsGroupByOutputType = {
    id: string
    name: string
    address: string
    phoneNumber: string | null
    email: string | null
    _count: ClientsCountAggregateOutputType | null
    _min: ClientsMinAggregateOutputType | null
    _max: ClientsMaxAggregateOutputType | null
  }

  type GetClientsGroupByPayload<T extends ClientsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientsGroupByOutputType[P]>
            : GetScalarType<T[P], ClientsGroupByOutputType[P]>
        }
      >
    >


  export type ClientsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phoneNumber?: boolean
    email?: boolean
    Vehicle?: boolean | Clients$VehicleArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clients"]>

  export type ClientsSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phoneNumber?: boolean
    email?: boolean
  }

  export type ClientsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Vehicle?: boolean | Clients$VehicleArgs<ExtArgs>
    _count?: boolean | ClientsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ClientsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Clients"
    objects: {
      Vehicle: Prisma.$VehiclesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      phoneNumber: string | null
      email: string | null
    }, ExtArgs["result"]["clients"]>
    composites: {}
  }


  type ClientsGetPayload<S extends boolean | null | undefined | ClientsDefaultArgs> = $Result.GetResult<Prisma.$ClientsPayload, S>

  type ClientsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientsCountAggregateInputType | true
    }

  export interface ClientsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Clients'], meta: { name: 'Clients' } }
    /**
     * Find zero or one Clients that matches the filter.
     * @param {ClientsFindUniqueArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClientsFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Clients that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientsFindUniqueOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientsFindFirstArgs<ExtArgs>>
    ): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Clients that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindFirstOrThrowArgs} args - Arguments to find a Clients
     * @example
     * // Get one Clients
     * const clients = await prisma.clients.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.clients.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.clients.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientsWithIdOnly = await prisma.clients.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Clients.
     * @param {ClientsCreateArgs} args - Arguments to create a Clients.
     * @example
     * // Create one Clients
     * const Clients = await prisma.clients.create({
     *   data: {
     *     // ... data to create a Clients
     *   }
     * })
     * 
    **/
    create<T extends ClientsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientsCreateArgs<ExtArgs>>
    ): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clients.
     *     @param {ClientsCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const clients = await prisma.clients.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clients.
     * @param {ClientsDeleteArgs} args - Arguments to delete one Clients.
     * @example
     * // Delete one Clients
     * const Clients = await prisma.clients.delete({
     *   where: {
     *     // ... filter to delete one Clients
     *   }
     * })
     * 
    **/
    delete<T extends ClientsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClientsDeleteArgs<ExtArgs>>
    ): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Clients.
     * @param {ClientsUpdateArgs} args - Arguments to update one Clients.
     * @example
     * // Update one Clients
     * const clients = await prisma.clients.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientsUpdateArgs<ExtArgs>>
    ): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientsDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.clients.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const clients = await prisma.clients.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClientsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clients.
     * @param {ClientsUpsertArgs} args - Arguments to update or create a Clients.
     * @example
     * // Update or create a Clients
     * const clients = await prisma.clients.upsert({
     *   create: {
     *     // ... data to create a Clients
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clients we want to update
     *   }
     * })
    **/
    upsert<T extends ClientsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClientsUpsertArgs<ExtArgs>>
    ): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.clients.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientsCountArgs>(
      args?: Subset<T, ClientsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientsAggregateArgs>(args: Subset<T, ClientsAggregateArgs>): Prisma.PrismaPromise<GetClientsAggregateType<T>>

    /**
     * Group by Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientsGroupByArgs['orderBy'] }
        : { orderBy?: ClientsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Clients model
   */
  readonly fields: ClientsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Clients.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Vehicle<T extends Clients$VehicleArgs<ExtArgs> = {}>(args?: Subset<T, Clients$VehicleArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Clients model
   */ 
  interface ClientsFieldRefs {
    readonly id: FieldRef<"Clients", 'String'>
    readonly name: FieldRef<"Clients", 'String'>
    readonly address: FieldRef<"Clients", 'String'>
    readonly phoneNumber: FieldRef<"Clients", 'String'>
    readonly email: FieldRef<"Clients", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Clients findUnique
   */
  export type ClientsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }


  /**
   * Clients findUniqueOrThrow
   */
  export type ClientsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where: ClientsWhereUniqueInput
  }


  /**
   * Clients findFirst
   */
  export type ClientsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }


  /**
   * Clients findFirstOrThrow
   */
  export type ClientsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }


  /**
   * Clients findMany
   */
  export type ClientsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientsOrderByWithRelationInput | ClientsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientsScalarFieldEnum | ClientsScalarFieldEnum[]
  }


  /**
   * Clients create
   */
  export type ClientsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to create a Clients.
     */
    data: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
  }


  /**
   * Clients createMany
   */
  export type ClientsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientsCreateManyInput | ClientsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Clients update
   */
  export type ClientsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The data needed to update a Clients.
     */
    data: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
    /**
     * Choose, which Clients to update.
     */
    where: ClientsWhereUniqueInput
  }


  /**
   * Clients updateMany
   */
  export type ClientsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientsUpdateManyMutationInput, ClientsUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientsWhereInput
  }


  /**
   * Clients upsert
   */
  export type ClientsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * The filter to search for the Clients to update in case it exists.
     */
    where: ClientsWhereUniqueInput
    /**
     * In case the Clients found by the `where` argument doesn't exist, create a new Clients with this data.
     */
    create: XOR<ClientsCreateInput, ClientsUncheckedCreateInput>
    /**
     * In case the Clients was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientsUpdateInput, ClientsUncheckedUpdateInput>
  }


  /**
   * Clients delete
   */
  export type ClientsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientsInclude<ExtArgs> | null
    /**
     * Filter which Clients to delete.
     */
    where: ClientsWhereUniqueInput
  }


  /**
   * Clients deleteMany
   */
  export type ClientsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientsWhereInput
  }


  /**
   * Clients.Vehicle
   */
  export type Clients$VehicleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehiclesInclude<ExtArgs> | null
    where?: VehiclesWhereInput
    orderBy?: VehiclesOrderByWithRelationInput | VehiclesOrderByWithRelationInput[]
    cursor?: VehiclesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }


  /**
   * Clients without action
   */
  export type ClientsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Clients
     */
    select?: ClientsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ClientsInclude<ExtArgs> | null
  }



  /**
   * Model Vehicles
   */

  export type AggregateVehicles = {
    _count: VehiclesCountAggregateOutputType | null
    _min: VehiclesMinAggregateOutputType | null
    _max: VehiclesMaxAggregateOutputType | null
  }

  export type VehiclesMinAggregateOutputType = {
    id: string | null
    plate: string | null
    brand: string | null
    model: string | null
    type: string | null
    owner: string | null
  }

  export type VehiclesMaxAggregateOutputType = {
    id: string | null
    plate: string | null
    brand: string | null
    model: string | null
    type: string | null
    owner: string | null
  }

  export type VehiclesCountAggregateOutputType = {
    id: number
    plate: number
    brand: number
    model: number
    type: number
    owner: number
    _all: number
  }


  export type VehiclesMinAggregateInputType = {
    id?: true
    plate?: true
    brand?: true
    model?: true
    type?: true
    owner?: true
  }

  export type VehiclesMaxAggregateInputType = {
    id?: true
    plate?: true
    brand?: true
    model?: true
    type?: true
    owner?: true
  }

  export type VehiclesCountAggregateInputType = {
    id?: true
    plate?: true
    brand?: true
    model?: true
    type?: true
    owner?: true
    _all?: true
  }

  export type VehiclesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to aggregate.
     */
    where?: VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehiclesOrderByWithRelationInput | VehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehiclesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehiclesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehiclesMaxAggregateInputType
  }

  export type GetVehiclesAggregateType<T extends VehiclesAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicles[P]>
      : GetScalarType<T[P], AggregateVehicles[P]>
  }




  export type VehiclesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehiclesWhereInput
    orderBy?: VehiclesOrderByWithAggregationInput | VehiclesOrderByWithAggregationInput[]
    by: VehiclesScalarFieldEnum[] | VehiclesScalarFieldEnum
    having?: VehiclesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehiclesCountAggregateInputType | true
    _min?: VehiclesMinAggregateInputType
    _max?: VehiclesMaxAggregateInputType
  }

  export type VehiclesGroupByOutputType = {
    id: string
    plate: string
    brand: string
    model: string
    type: string
    owner: string
    _count: VehiclesCountAggregateOutputType | null
    _min: VehiclesMinAggregateOutputType | null
    _max: VehiclesMaxAggregateOutputType | null
  }

  type GetVehiclesGroupByPayload<T extends VehiclesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehiclesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehiclesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehiclesGroupByOutputType[P]>
            : GetScalarType<T[P], VehiclesGroupByOutputType[P]>
        }
      >
    >


  export type VehiclesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    type?: boolean
    owner?: boolean
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    Records?: boolean | Vehicles$RecordsArgs<ExtArgs>
    _count?: boolean | VehiclesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicles"]>

  export type VehiclesSelectScalar = {
    id?: boolean
    plate?: boolean
    brand?: boolean
    model?: boolean
    type?: boolean
    owner?: boolean
  }

  export type VehiclesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientsDefaultArgs<ExtArgs>
    Records?: boolean | Vehicles$RecordsArgs<ExtArgs>
    _count?: boolean | VehiclesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $VehiclesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicles"
    objects: {
      client: Prisma.$ClientsPayload<ExtArgs>
      Records: Prisma.$RecordsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      plate: string
      brand: string
      model: string
      type: string
      owner: string
    }, ExtArgs["result"]["vehicles"]>
    composites: {}
  }


  type VehiclesGetPayload<S extends boolean | null | undefined | VehiclesDefaultArgs> = $Result.GetResult<Prisma.$VehiclesPayload, S>

  type VehiclesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<VehiclesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: VehiclesCountAggregateInputType | true
    }

  export interface VehiclesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicles'], meta: { name: 'Vehicles' } }
    /**
     * Find zero or one Vehicles that matches the filter.
     * @param {VehiclesFindUniqueArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VehiclesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VehiclesFindUniqueArgs<ExtArgs>>
    ): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Vehicles that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VehiclesFindUniqueOrThrowArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VehiclesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VehiclesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesFindFirstArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VehiclesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VehiclesFindFirstArgs<ExtArgs>>
    ): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Vehicles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesFindFirstOrThrowArgs} args - Arguments to find a Vehicles
     * @example
     * // Get one Vehicles
     * const vehicles = await prisma.vehicles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VehiclesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VehiclesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicles.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehiclesWithIdOnly = await prisma.vehicles.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends VehiclesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehiclesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Vehicles.
     * @param {VehiclesCreateArgs} args - Arguments to create a Vehicles.
     * @example
     * // Create one Vehicles
     * const Vehicles = await prisma.vehicles.create({
     *   data: {
     *     // ... data to create a Vehicles
     *   }
     * })
     * 
    **/
    create<T extends VehiclesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VehiclesCreateArgs<ExtArgs>>
    ): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Vehicles.
     *     @param {VehiclesCreateManyArgs} args - Arguments to create many Vehicles.
     *     @example
     *     // Create many Vehicles
     *     const vehicles = await prisma.vehicles.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VehiclesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehiclesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Vehicles.
     * @param {VehiclesDeleteArgs} args - Arguments to delete one Vehicles.
     * @example
     * // Delete one Vehicles
     * const Vehicles = await prisma.vehicles.delete({
     *   where: {
     *     // ... filter to delete one Vehicles
     *   }
     * })
     * 
    **/
    delete<T extends VehiclesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VehiclesDeleteArgs<ExtArgs>>
    ): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Vehicles.
     * @param {VehiclesUpdateArgs} args - Arguments to update one Vehicles.
     * @example
     * // Update one Vehicles
     * const vehicles = await prisma.vehicles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VehiclesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VehiclesUpdateArgs<ExtArgs>>
    ): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Vehicles.
     * @param {VehiclesDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VehiclesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VehiclesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicles = await prisma.vehicles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VehiclesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VehiclesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Vehicles.
     * @param {VehiclesUpsertArgs} args - Arguments to update or create a Vehicles.
     * @example
     * // Update or create a Vehicles
     * const vehicles = await prisma.vehicles.upsert({
     *   create: {
     *     // ... data to create a Vehicles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicles we want to update
     *   }
     * })
    **/
    upsert<T extends VehiclesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VehiclesUpsertArgs<ExtArgs>>
    ): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicles.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehiclesCountArgs>(
      args?: Subset<T, VehiclesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehiclesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VehiclesAggregateArgs>(args: Subset<T, VehiclesAggregateArgs>): Prisma.PrismaPromise<GetVehiclesAggregateType<T>>

    /**
     * Group by Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehiclesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VehiclesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehiclesGroupByArgs['orderBy'] }
        : { orderBy?: VehiclesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VehiclesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehiclesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicles model
   */
  readonly fields: VehiclesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehiclesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    client<T extends ClientsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientsDefaultArgs<ExtArgs>>): Prisma__ClientsClient<$Result.GetResult<Prisma.$ClientsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Records<T extends Vehicles$RecordsArgs<ExtArgs> = {}>(args?: Subset<T, Vehicles$RecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Vehicles model
   */ 
  interface VehiclesFieldRefs {
    readonly id: FieldRef<"Vehicles", 'String'>
    readonly plate: FieldRef<"Vehicles", 'String'>
    readonly brand: FieldRef<"Vehicles", 'String'>
    readonly model: FieldRef<"Vehicles", 'String'>
    readonly type: FieldRef<"Vehicles", 'String'>
    readonly owner: FieldRef<"Vehicles", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Vehicles findUnique
   */
  export type VehiclesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where: VehiclesWhereUniqueInput
  }


  /**
   * Vehicles findUniqueOrThrow
   */
  export type VehiclesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where: VehiclesWhereUniqueInput
  }


  /**
   * Vehicles findFirst
   */
  export type VehiclesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehiclesOrderByWithRelationInput | VehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }


  /**
   * Vehicles findFirstOrThrow
   */
  export type VehiclesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehiclesOrderByWithRelationInput | VehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }


  /**
   * Vehicles findMany
   */
  export type VehiclesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehiclesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehiclesOrderByWithRelationInput | VehiclesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehiclesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehiclesScalarFieldEnum | VehiclesScalarFieldEnum[]
  }


  /**
   * Vehicles create
   */
  export type VehiclesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicles.
     */
    data: XOR<VehiclesCreateInput, VehiclesUncheckedCreateInput>
  }


  /**
   * Vehicles createMany
   */
  export type VehiclesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehiclesCreateManyInput | VehiclesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Vehicles update
   */
  export type VehiclesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicles.
     */
    data: XOR<VehiclesUpdateInput, VehiclesUncheckedUpdateInput>
    /**
     * Choose, which Vehicles to update.
     */
    where: VehiclesWhereUniqueInput
  }


  /**
   * Vehicles updateMany
   */
  export type VehiclesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehiclesUpdateManyMutationInput, VehiclesUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehiclesWhereInput
  }


  /**
   * Vehicles upsert
   */
  export type VehiclesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicles to update in case it exists.
     */
    where: VehiclesWhereUniqueInput
    /**
     * In case the Vehicles found by the `where` argument doesn't exist, create a new Vehicles with this data.
     */
    create: XOR<VehiclesCreateInput, VehiclesUncheckedCreateInput>
    /**
     * In case the Vehicles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehiclesUpdateInput, VehiclesUncheckedUpdateInput>
  }


  /**
   * Vehicles delete
   */
  export type VehiclesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehiclesInclude<ExtArgs> | null
    /**
     * Filter which Vehicles to delete.
     */
    where: VehiclesWhereUniqueInput
  }


  /**
   * Vehicles deleteMany
   */
  export type VehiclesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehiclesWhereInput
  }


  /**
   * Vehicles.Records
   */
  export type Vehicles$RecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
    where?: RecordsWhereInput
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    cursor?: RecordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }


  /**
   * Vehicles without action
   */
  export type VehiclesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicles
     */
    select?: VehiclesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: VehiclesInclude<ExtArgs> | null
  }



  /**
   * Model Records
   */

  export type AggregateRecords = {
    _count: RecordsCountAggregateOutputType | null
    _min: RecordsMinAggregateOutputType | null
    _max: RecordsMaxAggregateOutputType | null
  }

  export type RecordsMinAggregateOutputType = {
    id: string | null
    entryDate: Date | null
    exitDate: Date | null
    vehicleId: string | null
    feeId: string | null
    slotId: string | null
    updatedAt: Date | null
  }

  export type RecordsMaxAggregateOutputType = {
    id: string | null
    entryDate: Date | null
    exitDate: Date | null
    vehicleId: string | null
    feeId: string | null
    slotId: string | null
    updatedAt: Date | null
  }

  export type RecordsCountAggregateOutputType = {
    id: number
    entryDate: number
    exitDate: number
    vehicleId: number
    feeId: number
    slotId: number
    updatedAt: number
    _all: number
  }


  export type RecordsMinAggregateInputType = {
    id?: true
    entryDate?: true
    exitDate?: true
    vehicleId?: true
    feeId?: true
    slotId?: true
    updatedAt?: true
  }

  export type RecordsMaxAggregateInputType = {
    id?: true
    entryDate?: true
    exitDate?: true
    vehicleId?: true
    feeId?: true
    slotId?: true
    updatedAt?: true
  }

  export type RecordsCountAggregateInputType = {
    id?: true
    entryDate?: true
    exitDate?: true
    vehicleId?: true
    feeId?: true
    slotId?: true
    updatedAt?: true
    _all?: true
  }

  export type RecordsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to aggregate.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Records
    **/
    _count?: true | RecordsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RecordsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RecordsMaxAggregateInputType
  }

  export type GetRecordsAggregateType<T extends RecordsAggregateArgs> = {
        [P in keyof T & keyof AggregateRecords]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRecords[P]>
      : GetScalarType<T[P], AggregateRecords[P]>
  }




  export type RecordsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RecordsWhereInput
    orderBy?: RecordsOrderByWithAggregationInput | RecordsOrderByWithAggregationInput[]
    by: RecordsScalarFieldEnum[] | RecordsScalarFieldEnum
    having?: RecordsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RecordsCountAggregateInputType | true
    _min?: RecordsMinAggregateInputType
    _max?: RecordsMaxAggregateInputType
  }

  export type RecordsGroupByOutputType = {
    id: string
    entryDate: Date
    exitDate: Date | null
    vehicleId: string
    feeId: string
    slotId: string
    updatedAt: Date
    _count: RecordsCountAggregateOutputType | null
    _min: RecordsMinAggregateOutputType | null
    _max: RecordsMaxAggregateOutputType | null
  }

  type GetRecordsGroupByPayload<T extends RecordsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RecordsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RecordsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RecordsGroupByOutputType[P]>
            : GetScalarType<T[P], RecordsGroupByOutputType[P]>
        }
      >
    >


  export type RecordsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entryDate?: boolean
    exitDate?: boolean
    vehicleId?: boolean
    feeId?: boolean
    slotId?: boolean
    updatedAt?: boolean
    vehicle?: boolean | VehiclesDefaultArgs<ExtArgs>
    fee?: boolean | FeesDefaultArgs<ExtArgs>
    slot?: boolean | SlotsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["records"]>

  export type RecordsSelectScalar = {
    id?: boolean
    entryDate?: boolean
    exitDate?: boolean
    vehicleId?: boolean
    feeId?: boolean
    slotId?: boolean
    updatedAt?: boolean
  }

  export type RecordsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehiclesDefaultArgs<ExtArgs>
    fee?: boolean | FeesDefaultArgs<ExtArgs>
    slot?: boolean | SlotsDefaultArgs<ExtArgs>
  }


  export type $RecordsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Records"
    objects: {
      vehicle: Prisma.$VehiclesPayload<ExtArgs>
      fee: Prisma.$FeesPayload<ExtArgs>
      slot: Prisma.$SlotsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      entryDate: Date
      exitDate: Date | null
      vehicleId: string
      feeId: string
      slotId: string
      updatedAt: Date
    }, ExtArgs["result"]["records"]>
    composites: {}
  }


  type RecordsGetPayload<S extends boolean | null | undefined | RecordsDefaultArgs> = $Result.GetResult<Prisma.$RecordsPayload, S>

  type RecordsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RecordsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RecordsCountAggregateInputType | true
    }

  export interface RecordsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Records'], meta: { name: 'Records' } }
    /**
     * Find zero or one Records that matches the filter.
     * @param {RecordsFindUniqueArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RecordsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RecordsFindUniqueArgs<ExtArgs>>
    ): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Records that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RecordsFindUniqueOrThrowArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RecordsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecordsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsFindFirstArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RecordsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RecordsFindFirstArgs<ExtArgs>>
    ): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Records that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsFindFirstOrThrowArgs} args - Arguments to find a Records
     * @example
     * // Get one Records
     * const records = await prisma.records.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RecordsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RecordsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Records
     * const records = await prisma.records.findMany()
     * 
     * // Get first 10 Records
     * const records = await prisma.records.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const recordsWithIdOnly = await prisma.records.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RecordsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecordsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Records.
     * @param {RecordsCreateArgs} args - Arguments to create a Records.
     * @example
     * // Create one Records
     * const Records = await prisma.records.create({
     *   data: {
     *     // ... data to create a Records
     *   }
     * })
     * 
    **/
    create<T extends RecordsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RecordsCreateArgs<ExtArgs>>
    ): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Records.
     *     @param {RecordsCreateManyArgs} args - Arguments to create many Records.
     *     @example
     *     // Create many Records
     *     const records = await prisma.records.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RecordsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecordsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Records.
     * @param {RecordsDeleteArgs} args - Arguments to delete one Records.
     * @example
     * // Delete one Records
     * const Records = await prisma.records.delete({
     *   where: {
     *     // ... filter to delete one Records
     *   }
     * })
     * 
    **/
    delete<T extends RecordsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RecordsDeleteArgs<ExtArgs>>
    ): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Records.
     * @param {RecordsUpdateArgs} args - Arguments to update one Records.
     * @example
     * // Update one Records
     * const records = await prisma.records.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RecordsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RecordsUpdateArgs<ExtArgs>>
    ): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Records.
     * @param {RecordsDeleteManyArgs} args - Arguments to filter Records to delete.
     * @example
     * // Delete a few Records
     * const { count } = await prisma.records.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RecordsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RecordsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Records
     * const records = await prisma.records.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RecordsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RecordsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Records.
     * @param {RecordsUpsertArgs} args - Arguments to update or create a Records.
     * @example
     * // Update or create a Records
     * const records = await prisma.records.upsert({
     *   create: {
     *     // ... data to create a Records
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Records we want to update
     *   }
     * })
    **/
    upsert<T extends RecordsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RecordsUpsertArgs<ExtArgs>>
    ): Prisma__RecordsClient<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsCountArgs} args - Arguments to filter Records to count.
     * @example
     * // Count the number of Records
     * const count = await prisma.records.count({
     *   where: {
     *     // ... the filter for the Records we want to count
     *   }
     * })
    **/
    count<T extends RecordsCountArgs>(
      args?: Subset<T, RecordsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RecordsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RecordsAggregateArgs>(args: Subset<T, RecordsAggregateArgs>): Prisma.PrismaPromise<GetRecordsAggregateType<T>>

    /**
     * Group by Records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RecordsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RecordsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RecordsGroupByArgs['orderBy'] }
        : { orderBy?: RecordsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RecordsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRecordsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Records model
   */
  readonly fields: RecordsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Records.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RecordsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    vehicle<T extends VehiclesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehiclesDefaultArgs<ExtArgs>>): Prisma__VehiclesClient<$Result.GetResult<Prisma.$VehiclesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    fee<T extends FeesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FeesDefaultArgs<ExtArgs>>): Prisma__FeesClient<$Result.GetResult<Prisma.$FeesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    slot<T extends SlotsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SlotsDefaultArgs<ExtArgs>>): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Records model
   */ 
  interface RecordsFieldRefs {
    readonly id: FieldRef<"Records", 'String'>
    readonly entryDate: FieldRef<"Records", 'DateTime'>
    readonly exitDate: FieldRef<"Records", 'DateTime'>
    readonly vehicleId: FieldRef<"Records", 'String'>
    readonly feeId: FieldRef<"Records", 'String'>
    readonly slotId: FieldRef<"Records", 'String'>
    readonly updatedAt: FieldRef<"Records", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Records findUnique
   */
  export type RecordsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where: RecordsWhereUniqueInput
  }


  /**
   * Records findUniqueOrThrow
   */
  export type RecordsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where: RecordsWhereUniqueInput
  }


  /**
   * Records findFirst
   */
  export type RecordsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }


  /**
   * Records findFirstOrThrow
   */
  export type RecordsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Records.
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Records.
     */
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }


  /**
   * Records findMany
   */
  export type RecordsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter, which Records to fetch.
     */
    where?: RecordsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Records to fetch.
     */
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Records.
     */
    cursor?: RecordsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Records from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Records.
     */
    skip?: number
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }


  /**
   * Records create
   */
  export type RecordsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * The data needed to create a Records.
     */
    data: XOR<RecordsCreateInput, RecordsUncheckedCreateInput>
  }


  /**
   * Records createMany
   */
  export type RecordsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Records.
     */
    data: RecordsCreateManyInput | RecordsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Records update
   */
  export type RecordsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * The data needed to update a Records.
     */
    data: XOR<RecordsUpdateInput, RecordsUncheckedUpdateInput>
    /**
     * Choose, which Records to update.
     */
    where: RecordsWhereUniqueInput
  }


  /**
   * Records updateMany
   */
  export type RecordsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Records.
     */
    data: XOR<RecordsUpdateManyMutationInput, RecordsUncheckedUpdateManyInput>
    /**
     * Filter which Records to update
     */
    where?: RecordsWhereInput
  }


  /**
   * Records upsert
   */
  export type RecordsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * The filter to search for the Records to update in case it exists.
     */
    where: RecordsWhereUniqueInput
    /**
     * In case the Records found by the `where` argument doesn't exist, create a new Records with this data.
     */
    create: XOR<RecordsCreateInput, RecordsUncheckedCreateInput>
    /**
     * In case the Records was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RecordsUpdateInput, RecordsUncheckedUpdateInput>
  }


  /**
   * Records delete
   */
  export type RecordsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
    /**
     * Filter which Records to delete.
     */
    where: RecordsWhereUniqueInput
  }


  /**
   * Records deleteMany
   */
  export type RecordsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Records to delete
     */
    where?: RecordsWhereInput
  }


  /**
   * Records without action
   */
  export type RecordsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
  }



  /**
   * Model Slots
   */

  export type AggregateSlots = {
    _count: SlotsCountAggregateOutputType | null
    _avg: SlotsAvgAggregateOutputType | null
    _sum: SlotsSumAggregateOutputType | null
    _min: SlotsMinAggregateOutputType | null
    _max: SlotsMaxAggregateOutputType | null
  }

  export type SlotsAvgAggregateOutputType = {
    number: number | null
  }

  export type SlotsSumAggregateOutputType = {
    number: number | null
  }

  export type SlotsMinAggregateOutputType = {
    id: string | null
    number: number | null
    description: string | null
    status: boolean | null
  }

  export type SlotsMaxAggregateOutputType = {
    id: string | null
    number: number | null
    description: string | null
    status: boolean | null
  }

  export type SlotsCountAggregateOutputType = {
    id: number
    number: number
    description: number
    status: number
    _all: number
  }


  export type SlotsAvgAggregateInputType = {
    number?: true
  }

  export type SlotsSumAggregateInputType = {
    number?: true
  }

  export type SlotsMinAggregateInputType = {
    id?: true
    number?: true
    description?: true
    status?: true
  }

  export type SlotsMaxAggregateInputType = {
    id?: true
    number?: true
    description?: true
    status?: true
  }

  export type SlotsCountAggregateInputType = {
    id?: true
    number?: true
    description?: true
    status?: true
    _all?: true
  }

  export type SlotsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slots to aggregate.
     */
    where?: SlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotsOrderByWithRelationInput | SlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Slots
    **/
    _count?: true | SlotsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SlotsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SlotsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SlotsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SlotsMaxAggregateInputType
  }

  export type GetSlotsAggregateType<T extends SlotsAggregateArgs> = {
        [P in keyof T & keyof AggregateSlots]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSlots[P]>
      : GetScalarType<T[P], AggregateSlots[P]>
  }




  export type SlotsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SlotsWhereInput
    orderBy?: SlotsOrderByWithAggregationInput | SlotsOrderByWithAggregationInput[]
    by: SlotsScalarFieldEnum[] | SlotsScalarFieldEnum
    having?: SlotsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SlotsCountAggregateInputType | true
    _avg?: SlotsAvgAggregateInputType
    _sum?: SlotsSumAggregateInputType
    _min?: SlotsMinAggregateInputType
    _max?: SlotsMaxAggregateInputType
  }

  export type SlotsGroupByOutputType = {
    id: string
    number: number
    description: string | null
    status: boolean
    _count: SlotsCountAggregateOutputType | null
    _avg: SlotsAvgAggregateOutputType | null
    _sum: SlotsSumAggregateOutputType | null
    _min: SlotsMinAggregateOutputType | null
    _max: SlotsMaxAggregateOutputType | null
  }

  type GetSlotsGroupByPayload<T extends SlotsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SlotsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SlotsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SlotsGroupByOutputType[P]>
            : GetScalarType<T[P], SlotsGroupByOutputType[P]>
        }
      >
    >


  export type SlotsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    description?: boolean
    status?: boolean
    Records?: boolean | Slots$RecordsArgs<ExtArgs>
    _count?: boolean | SlotsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["slots"]>

  export type SlotsSelectScalar = {
    id?: boolean
    number?: boolean
    description?: boolean
    status?: boolean
  }

  export type SlotsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Records?: boolean | Slots$RecordsArgs<ExtArgs>
    _count?: boolean | SlotsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $SlotsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Slots"
    objects: {
      Records: Prisma.$RecordsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      number: number
      description: string | null
      status: boolean
    }, ExtArgs["result"]["slots"]>
    composites: {}
  }


  type SlotsGetPayload<S extends boolean | null | undefined | SlotsDefaultArgs> = $Result.GetResult<Prisma.$SlotsPayload, S>

  type SlotsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SlotsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SlotsCountAggregateInputType | true
    }

  export interface SlotsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Slots'], meta: { name: 'Slots' } }
    /**
     * Find zero or one Slots that matches the filter.
     * @param {SlotsFindUniqueArgs} args - Arguments to find a Slots
     * @example
     * // Get one Slots
     * const slots = await prisma.slots.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SlotsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SlotsFindUniqueArgs<ExtArgs>>
    ): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Slots that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SlotsFindUniqueOrThrowArgs} args - Arguments to find a Slots
     * @example
     * // Get one Slots
     * const slots = await prisma.slots.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SlotsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SlotsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsFindFirstArgs} args - Arguments to find a Slots
     * @example
     * // Get one Slots
     * const slots = await prisma.slots.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SlotsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SlotsFindFirstArgs<ExtArgs>>
    ): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Slots that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsFindFirstOrThrowArgs} args - Arguments to find a Slots
     * @example
     * // Get one Slots
     * const slots = await prisma.slots.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SlotsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SlotsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Slots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Slots
     * const slots = await prisma.slots.findMany()
     * 
     * // Get first 10 Slots
     * const slots = await prisma.slots.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const slotsWithIdOnly = await prisma.slots.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SlotsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SlotsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Slots.
     * @param {SlotsCreateArgs} args - Arguments to create a Slots.
     * @example
     * // Create one Slots
     * const Slots = await prisma.slots.create({
     *   data: {
     *     // ... data to create a Slots
     *   }
     * })
     * 
    **/
    create<T extends SlotsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SlotsCreateArgs<ExtArgs>>
    ): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Slots.
     *     @param {SlotsCreateManyArgs} args - Arguments to create many Slots.
     *     @example
     *     // Create many Slots
     *     const slots = await prisma.slots.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SlotsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SlotsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Slots.
     * @param {SlotsDeleteArgs} args - Arguments to delete one Slots.
     * @example
     * // Delete one Slots
     * const Slots = await prisma.slots.delete({
     *   where: {
     *     // ... filter to delete one Slots
     *   }
     * })
     * 
    **/
    delete<T extends SlotsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SlotsDeleteArgs<ExtArgs>>
    ): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Slots.
     * @param {SlotsUpdateArgs} args - Arguments to update one Slots.
     * @example
     * // Update one Slots
     * const slots = await prisma.slots.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SlotsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SlotsUpdateArgs<ExtArgs>>
    ): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Slots.
     * @param {SlotsDeleteManyArgs} args - Arguments to filter Slots to delete.
     * @example
     * // Delete a few Slots
     * const { count } = await prisma.slots.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SlotsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SlotsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Slots
     * const slots = await prisma.slots.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SlotsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SlotsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Slots.
     * @param {SlotsUpsertArgs} args - Arguments to update or create a Slots.
     * @example
     * // Update or create a Slots
     * const slots = await prisma.slots.upsert({
     *   create: {
     *     // ... data to create a Slots
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Slots we want to update
     *   }
     * })
    **/
    upsert<T extends SlotsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SlotsUpsertArgs<ExtArgs>>
    ): Prisma__SlotsClient<$Result.GetResult<Prisma.$SlotsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsCountArgs} args - Arguments to filter Slots to count.
     * @example
     * // Count the number of Slots
     * const count = await prisma.slots.count({
     *   where: {
     *     // ... the filter for the Slots we want to count
     *   }
     * })
    **/
    count<T extends SlotsCountArgs>(
      args?: Subset<T, SlotsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SlotsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SlotsAggregateArgs>(args: Subset<T, SlotsAggregateArgs>): Prisma.PrismaPromise<GetSlotsAggregateType<T>>

    /**
     * Group by Slots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SlotsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SlotsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SlotsGroupByArgs['orderBy'] }
        : { orderBy?: SlotsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SlotsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSlotsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Slots model
   */
  readonly fields: SlotsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Slots.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SlotsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Records<T extends Slots$RecordsArgs<ExtArgs> = {}>(args?: Subset<T, Slots$RecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Slots model
   */ 
  interface SlotsFieldRefs {
    readonly id: FieldRef<"Slots", 'String'>
    readonly number: FieldRef<"Slots", 'Int'>
    readonly description: FieldRef<"Slots", 'String'>
    readonly status: FieldRef<"Slots", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Slots findUnique
   */
  export type SlotsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where: SlotsWhereUniqueInput
  }


  /**
   * Slots findUniqueOrThrow
   */
  export type SlotsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where: SlotsWhereUniqueInput
  }


  /**
   * Slots findFirst
   */
  export type SlotsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where?: SlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotsOrderByWithRelationInput | SlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slots.
     */
    cursor?: SlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slots.
     */
    distinct?: SlotsScalarFieldEnum | SlotsScalarFieldEnum[]
  }


  /**
   * Slots findFirstOrThrow
   */
  export type SlotsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where?: SlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotsOrderByWithRelationInput | SlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Slots.
     */
    cursor?: SlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Slots.
     */
    distinct?: SlotsScalarFieldEnum | SlotsScalarFieldEnum[]
  }


  /**
   * Slots findMany
   */
  export type SlotsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * Filter, which Slots to fetch.
     */
    where?: SlotsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Slots to fetch.
     */
    orderBy?: SlotsOrderByWithRelationInput | SlotsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Slots.
     */
    cursor?: SlotsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Slots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Slots.
     */
    skip?: number
    distinct?: SlotsScalarFieldEnum | SlotsScalarFieldEnum[]
  }


  /**
   * Slots create
   */
  export type SlotsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * The data needed to create a Slots.
     */
    data: XOR<SlotsCreateInput, SlotsUncheckedCreateInput>
  }


  /**
   * Slots createMany
   */
  export type SlotsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Slots.
     */
    data: SlotsCreateManyInput | SlotsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Slots update
   */
  export type SlotsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * The data needed to update a Slots.
     */
    data: XOR<SlotsUpdateInput, SlotsUncheckedUpdateInput>
    /**
     * Choose, which Slots to update.
     */
    where: SlotsWhereUniqueInput
  }


  /**
   * Slots updateMany
   */
  export type SlotsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Slots.
     */
    data: XOR<SlotsUpdateManyMutationInput, SlotsUncheckedUpdateManyInput>
    /**
     * Filter which Slots to update
     */
    where?: SlotsWhereInput
  }


  /**
   * Slots upsert
   */
  export type SlotsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * The filter to search for the Slots to update in case it exists.
     */
    where: SlotsWhereUniqueInput
    /**
     * In case the Slots found by the `where` argument doesn't exist, create a new Slots with this data.
     */
    create: XOR<SlotsCreateInput, SlotsUncheckedCreateInput>
    /**
     * In case the Slots was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SlotsUpdateInput, SlotsUncheckedUpdateInput>
  }


  /**
   * Slots delete
   */
  export type SlotsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotsInclude<ExtArgs> | null
    /**
     * Filter which Slots to delete.
     */
    where: SlotsWhereUniqueInput
  }


  /**
   * Slots deleteMany
   */
  export type SlotsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Slots to delete
     */
    where?: SlotsWhereInput
  }


  /**
   * Slots.Records
   */
  export type Slots$RecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
    where?: RecordsWhereInput
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    cursor?: RecordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }


  /**
   * Slots without action
   */
  export type SlotsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Slots
     */
    select?: SlotsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SlotsInclude<ExtArgs> | null
  }



  /**
   * Model Fees
   */

  export type AggregateFees = {
    _count: FeesCountAggregateOutputType | null
    _avg: FeesAvgAggregateOutputType | null
    _sum: FeesSumAggregateOutputType | null
    _min: FeesMinAggregateOutputType | null
    _max: FeesMaxAggregateOutputType | null
  }

  export type FeesAvgAggregateOutputType = {
    cost: Decimal | null
  }

  export type FeesSumAggregateOutputType = {
    cost: Decimal | null
  }

  export type FeesMinAggregateOutputType = {
    id: string | null
    name: string | null
    cost: Decimal | null
    status: boolean | null
  }

  export type FeesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cost: Decimal | null
    status: boolean | null
  }

  export type FeesCountAggregateOutputType = {
    id: number
    name: number
    cost: number
    status: number
    _all: number
  }


  export type FeesAvgAggregateInputType = {
    cost?: true
  }

  export type FeesSumAggregateInputType = {
    cost?: true
  }

  export type FeesMinAggregateInputType = {
    id?: true
    name?: true
    cost?: true
    status?: true
  }

  export type FeesMaxAggregateInputType = {
    id?: true
    name?: true
    cost?: true
    status?: true
  }

  export type FeesCountAggregateInputType = {
    id?: true
    name?: true
    cost?: true
    status?: true
    _all?: true
  }

  export type FeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fees to aggregate.
     */
    where?: FeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees to fetch.
     */
    orderBy?: FeesOrderByWithRelationInput | FeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Fees
    **/
    _count?: true | FeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeesMaxAggregateInputType
  }

  export type GetFeesAggregateType<T extends FeesAggregateArgs> = {
        [P in keyof T & keyof AggregateFees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFees[P]>
      : GetScalarType<T[P], AggregateFees[P]>
  }




  export type FeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FeesWhereInput
    orderBy?: FeesOrderByWithAggregationInput | FeesOrderByWithAggregationInput[]
    by: FeesScalarFieldEnum[] | FeesScalarFieldEnum
    having?: FeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeesCountAggregateInputType | true
    _avg?: FeesAvgAggregateInputType
    _sum?: FeesSumAggregateInputType
    _min?: FeesMinAggregateInputType
    _max?: FeesMaxAggregateInputType
  }

  export type FeesGroupByOutputType = {
    id: string
    name: string
    cost: Decimal
    status: boolean
    _count: FeesCountAggregateOutputType | null
    _avg: FeesAvgAggregateOutputType | null
    _sum: FeesSumAggregateOutputType | null
    _min: FeesMinAggregateOutputType | null
    _max: FeesMaxAggregateOutputType | null
  }

  type GetFeesGroupByPayload<T extends FeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeesGroupByOutputType[P]>
            : GetScalarType<T[P], FeesGroupByOutputType[P]>
        }
      >
    >


  export type FeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cost?: boolean
    status?: boolean
    Records?: boolean | Fees$RecordsArgs<ExtArgs>
    _count?: boolean | FeesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["fees"]>

  export type FeesSelectScalar = {
    id?: boolean
    name?: boolean
    cost?: boolean
    status?: boolean
  }

  export type FeesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Records?: boolean | Fees$RecordsArgs<ExtArgs>
    _count?: boolean | FeesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Fees"
    objects: {
      Records: Prisma.$RecordsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cost: Prisma.Decimal
      status: boolean
    }, ExtArgs["result"]["fees"]>
    composites: {}
  }


  type FeesGetPayload<S extends boolean | null | undefined | FeesDefaultArgs> = $Result.GetResult<Prisma.$FeesPayload, S>

  type FeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FeesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FeesCountAggregateInputType | true
    }

  export interface FeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Fees'], meta: { name: 'Fees' } }
    /**
     * Find zero or one Fees that matches the filter.
     * @param {FeesFindUniqueArgs} args - Arguments to find a Fees
     * @example
     * // Get one Fees
     * const fees = await prisma.fees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FeesFindUniqueArgs<ExtArgs>>
    ): Prisma__FeesClient<$Result.GetResult<Prisma.$FeesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Fees that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FeesFindUniqueOrThrowArgs} args - Arguments to find a Fees
     * @example
     * // Get one Fees
     * const fees = await prisma.fees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FeesClient<$Result.GetResult<Prisma.$FeesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Fees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeesFindFirstArgs} args - Arguments to find a Fees
     * @example
     * // Get one Fees
     * const fees = await prisma.fees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FeesFindFirstArgs<ExtArgs>>
    ): Prisma__FeesClient<$Result.GetResult<Prisma.$FeesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Fees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeesFindFirstOrThrowArgs} args - Arguments to find a Fees
     * @example
     * // Get one Fees
     * const fees = await prisma.fees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FeesClient<$Result.GetResult<Prisma.$FeesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Fees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Fees
     * const fees = await prisma.fees.findMany()
     * 
     * // Get first 10 Fees
     * const fees = await prisma.fees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feesWithIdOnly = await prisma.fees.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FeesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Fees.
     * @param {FeesCreateArgs} args - Arguments to create a Fees.
     * @example
     * // Create one Fees
     * const Fees = await prisma.fees.create({
     *   data: {
     *     // ... data to create a Fees
     *   }
     * })
     * 
    **/
    create<T extends FeesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FeesCreateArgs<ExtArgs>>
    ): Prisma__FeesClient<$Result.GetResult<Prisma.$FeesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Fees.
     *     @param {FeesCreateManyArgs} args - Arguments to create many Fees.
     *     @example
     *     // Create many Fees
     *     const fees = await prisma.fees.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Fees.
     * @param {FeesDeleteArgs} args - Arguments to delete one Fees.
     * @example
     * // Delete one Fees
     * const Fees = await prisma.fees.delete({
     *   where: {
     *     // ... filter to delete one Fees
     *   }
     * })
     * 
    **/
    delete<T extends FeesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FeesDeleteArgs<ExtArgs>>
    ): Prisma__FeesClient<$Result.GetResult<Prisma.$FeesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Fees.
     * @param {FeesUpdateArgs} args - Arguments to update one Fees.
     * @example
     * // Update one Fees
     * const fees = await prisma.fees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FeesUpdateArgs<ExtArgs>>
    ): Prisma__FeesClient<$Result.GetResult<Prisma.$FeesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Fees.
     * @param {FeesDeleteManyArgs} args - Arguments to filter Fees to delete.
     * @example
     * // Delete a few Fees
     * const { count } = await prisma.fees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Fees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Fees
     * const fees = await prisma.fees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FeesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Fees.
     * @param {FeesUpsertArgs} args - Arguments to update or create a Fees.
     * @example
     * // Update or create a Fees
     * const fees = await prisma.fees.upsert({
     *   create: {
     *     // ... data to create a Fees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Fees we want to update
     *   }
     * })
    **/
    upsert<T extends FeesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FeesUpsertArgs<ExtArgs>>
    ): Prisma__FeesClient<$Result.GetResult<Prisma.$FeesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Fees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeesCountArgs} args - Arguments to filter Fees to count.
     * @example
     * // Count the number of Fees
     * const count = await prisma.fees.count({
     *   where: {
     *     // ... the filter for the Fees we want to count
     *   }
     * })
    **/
    count<T extends FeesCountArgs>(
      args?: Subset<T, FeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Fees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FeesAggregateArgs>(args: Subset<T, FeesAggregateArgs>): Prisma.PrismaPromise<GetFeesAggregateType<T>>

    /**
     * Group by Fees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeesGroupByArgs['orderBy'] }
        : { orderBy?: FeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Fees model
   */
  readonly fields: FeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Fees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Records<T extends Fees$RecordsArgs<ExtArgs> = {}>(args?: Subset<T, Fees$RecordsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RecordsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Fees model
   */ 
  interface FeesFieldRefs {
    readonly id: FieldRef<"Fees", 'String'>
    readonly name: FieldRef<"Fees", 'String'>
    readonly cost: FieldRef<"Fees", 'Decimal'>
    readonly status: FieldRef<"Fees", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Fees findUnique
   */
  export type FeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees
     */
    select?: FeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeesInclude<ExtArgs> | null
    /**
     * Filter, which Fees to fetch.
     */
    where: FeesWhereUniqueInput
  }


  /**
   * Fees findUniqueOrThrow
   */
  export type FeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees
     */
    select?: FeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeesInclude<ExtArgs> | null
    /**
     * Filter, which Fees to fetch.
     */
    where: FeesWhereUniqueInput
  }


  /**
   * Fees findFirst
   */
  export type FeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees
     */
    select?: FeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeesInclude<ExtArgs> | null
    /**
     * Filter, which Fees to fetch.
     */
    where?: FeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees to fetch.
     */
    orderBy?: FeesOrderByWithRelationInput | FeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fees.
     */
    cursor?: FeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fees.
     */
    distinct?: FeesScalarFieldEnum | FeesScalarFieldEnum[]
  }


  /**
   * Fees findFirstOrThrow
   */
  export type FeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees
     */
    select?: FeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeesInclude<ExtArgs> | null
    /**
     * Filter, which Fees to fetch.
     */
    where?: FeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees to fetch.
     */
    orderBy?: FeesOrderByWithRelationInput | FeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Fees.
     */
    cursor?: FeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Fees.
     */
    distinct?: FeesScalarFieldEnum | FeesScalarFieldEnum[]
  }


  /**
   * Fees findMany
   */
  export type FeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees
     */
    select?: FeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeesInclude<ExtArgs> | null
    /**
     * Filter, which Fees to fetch.
     */
    where?: FeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Fees to fetch.
     */
    orderBy?: FeesOrderByWithRelationInput | FeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Fees.
     */
    cursor?: FeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Fees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Fees.
     */
    skip?: number
    distinct?: FeesScalarFieldEnum | FeesScalarFieldEnum[]
  }


  /**
   * Fees create
   */
  export type FeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees
     */
    select?: FeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeesInclude<ExtArgs> | null
    /**
     * The data needed to create a Fees.
     */
    data: XOR<FeesCreateInput, FeesUncheckedCreateInput>
  }


  /**
   * Fees createMany
   */
  export type FeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Fees.
     */
    data: FeesCreateManyInput | FeesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Fees update
   */
  export type FeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees
     */
    select?: FeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeesInclude<ExtArgs> | null
    /**
     * The data needed to update a Fees.
     */
    data: XOR<FeesUpdateInput, FeesUncheckedUpdateInput>
    /**
     * Choose, which Fees to update.
     */
    where: FeesWhereUniqueInput
  }


  /**
   * Fees updateMany
   */
  export type FeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Fees.
     */
    data: XOR<FeesUpdateManyMutationInput, FeesUncheckedUpdateManyInput>
    /**
     * Filter which Fees to update
     */
    where?: FeesWhereInput
  }


  /**
   * Fees upsert
   */
  export type FeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees
     */
    select?: FeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeesInclude<ExtArgs> | null
    /**
     * The filter to search for the Fees to update in case it exists.
     */
    where: FeesWhereUniqueInput
    /**
     * In case the Fees found by the `where` argument doesn't exist, create a new Fees with this data.
     */
    create: XOR<FeesCreateInput, FeesUncheckedCreateInput>
    /**
     * In case the Fees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeesUpdateInput, FeesUncheckedUpdateInput>
  }


  /**
   * Fees delete
   */
  export type FeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees
     */
    select?: FeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeesInclude<ExtArgs> | null
    /**
     * Filter which Fees to delete.
     */
    where: FeesWhereUniqueInput
  }


  /**
   * Fees deleteMany
   */
  export type FeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Fees to delete
     */
    where?: FeesWhereInput
  }


  /**
   * Fees.Records
   */
  export type Fees$RecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Records
     */
    select?: RecordsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RecordsInclude<ExtArgs> | null
    where?: RecordsWhereInput
    orderBy?: RecordsOrderByWithRelationInput | RecordsOrderByWithRelationInput[]
    cursor?: RecordsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RecordsScalarFieldEnum | RecordsScalarFieldEnum[]
  }


  /**
   * Fees without action
   */
  export type FeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Fees
     */
    select?: FeesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeesInclude<ExtArgs> | null
  }



  /**
   * Model Photoresistors
   */

  export type AggregatePhotoresistors = {
    _count: PhotoresistorsCountAggregateOutputType | null
    _min: PhotoresistorsMinAggregateOutputType | null
    _max: PhotoresistorsMaxAggregateOutputType | null
  }

  export type PhotoresistorsMinAggregateOutputType = {
    id: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PhotoresistorsMaxAggregateOutputType = {
    id: string | null
    status: string | null
    createdAt: Date | null
  }

  export type PhotoresistorsCountAggregateOutputType = {
    id: number
    status: number
    createdAt: number
    _all: number
  }


  export type PhotoresistorsMinAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
  }

  export type PhotoresistorsMaxAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
  }

  export type PhotoresistorsCountAggregateInputType = {
    id?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type PhotoresistorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photoresistors to aggregate.
     */
    where?: PhotoresistorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photoresistors to fetch.
     */
    orderBy?: PhotoresistorsOrderByWithRelationInput | PhotoresistorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoresistorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photoresistors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photoresistors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photoresistors
    **/
    _count?: true | PhotoresistorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoresistorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoresistorsMaxAggregateInputType
  }

  export type GetPhotoresistorsAggregateType<T extends PhotoresistorsAggregateArgs> = {
        [P in keyof T & keyof AggregatePhotoresistors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhotoresistors[P]>
      : GetScalarType<T[P], AggregatePhotoresistors[P]>
  }




  export type PhotoresistorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoresistorsWhereInput
    orderBy?: PhotoresistorsOrderByWithAggregationInput | PhotoresistorsOrderByWithAggregationInput[]
    by: PhotoresistorsScalarFieldEnum[] | PhotoresistorsScalarFieldEnum
    having?: PhotoresistorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoresistorsCountAggregateInputType | true
    _min?: PhotoresistorsMinAggregateInputType
    _max?: PhotoresistorsMaxAggregateInputType
  }

  export type PhotoresistorsGroupByOutputType = {
    id: string
    status: string
    createdAt: Date
    _count: PhotoresistorsCountAggregateOutputType | null
    _min: PhotoresistorsMinAggregateOutputType | null
    _max: PhotoresistorsMaxAggregateOutputType | null
  }

  type GetPhotoresistorsGroupByPayload<T extends PhotoresistorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoresistorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoresistorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoresistorsGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoresistorsGroupByOutputType[P]>
        }
      >
    >


  export type PhotoresistorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["photoresistors"]>

  export type PhotoresistorsSelectScalar = {
    id?: boolean
    status?: boolean
    createdAt?: boolean
  }


  export type $PhotoresistorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photoresistors"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["photoresistors"]>
    composites: {}
  }


  type PhotoresistorsGetPayload<S extends boolean | null | undefined | PhotoresistorsDefaultArgs> = $Result.GetResult<Prisma.$PhotoresistorsPayload, S>

  type PhotoresistorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhotoresistorsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhotoresistorsCountAggregateInputType | true
    }

  export interface PhotoresistorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photoresistors'], meta: { name: 'Photoresistors' } }
    /**
     * Find zero or one Photoresistors that matches the filter.
     * @param {PhotoresistorsFindUniqueArgs} args - Arguments to find a Photoresistors
     * @example
     * // Get one Photoresistors
     * const photoresistors = await prisma.photoresistors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PhotoresistorsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoresistorsFindUniqueArgs<ExtArgs>>
    ): Prisma__PhotoresistorsClient<$Result.GetResult<Prisma.$PhotoresistorsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Photoresistors that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PhotoresistorsFindUniqueOrThrowArgs} args - Arguments to find a Photoresistors
     * @example
     * // Get one Photoresistors
     * const photoresistors = await prisma.photoresistors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PhotoresistorsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoresistorsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoresistorsClient<$Result.GetResult<Prisma.$PhotoresistorsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Photoresistors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoresistorsFindFirstArgs} args - Arguments to find a Photoresistors
     * @example
     * // Get one Photoresistors
     * const photoresistors = await prisma.photoresistors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PhotoresistorsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoresistorsFindFirstArgs<ExtArgs>>
    ): Prisma__PhotoresistorsClient<$Result.GetResult<Prisma.$PhotoresistorsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Photoresistors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoresistorsFindFirstOrThrowArgs} args - Arguments to find a Photoresistors
     * @example
     * // Get one Photoresistors
     * const photoresistors = await prisma.photoresistors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PhotoresistorsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoresistorsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PhotoresistorsClient<$Result.GetResult<Prisma.$PhotoresistorsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Photoresistors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoresistorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photoresistors
     * const photoresistors = await prisma.photoresistors.findMany()
     * 
     * // Get first 10 Photoresistors
     * const photoresistors = await prisma.photoresistors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const photoresistorsWithIdOnly = await prisma.photoresistors.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PhotoresistorsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoresistorsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoresistorsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Photoresistors.
     * @param {PhotoresistorsCreateArgs} args - Arguments to create a Photoresistors.
     * @example
     * // Create one Photoresistors
     * const Photoresistors = await prisma.photoresistors.create({
     *   data: {
     *     // ... data to create a Photoresistors
     *   }
     * })
     * 
    **/
    create<T extends PhotoresistorsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoresistorsCreateArgs<ExtArgs>>
    ): Prisma__PhotoresistorsClient<$Result.GetResult<Prisma.$PhotoresistorsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Photoresistors.
     *     @param {PhotoresistorsCreateManyArgs} args - Arguments to create many Photoresistors.
     *     @example
     *     // Create many Photoresistors
     *     const photoresistors = await prisma.photoresistors.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PhotoresistorsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoresistorsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Photoresistors.
     * @param {PhotoresistorsDeleteArgs} args - Arguments to delete one Photoresistors.
     * @example
     * // Delete one Photoresistors
     * const Photoresistors = await prisma.photoresistors.delete({
     *   where: {
     *     // ... filter to delete one Photoresistors
     *   }
     * })
     * 
    **/
    delete<T extends PhotoresistorsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoresistorsDeleteArgs<ExtArgs>>
    ): Prisma__PhotoresistorsClient<$Result.GetResult<Prisma.$PhotoresistorsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Photoresistors.
     * @param {PhotoresistorsUpdateArgs} args - Arguments to update one Photoresistors.
     * @example
     * // Update one Photoresistors
     * const photoresistors = await prisma.photoresistors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PhotoresistorsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoresistorsUpdateArgs<ExtArgs>>
    ): Prisma__PhotoresistorsClient<$Result.GetResult<Prisma.$PhotoresistorsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Photoresistors.
     * @param {PhotoresistorsDeleteManyArgs} args - Arguments to filter Photoresistors to delete.
     * @example
     * // Delete a few Photoresistors
     * const { count } = await prisma.photoresistors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PhotoresistorsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PhotoresistorsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photoresistors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoresistorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photoresistors
     * const photoresistors = await prisma.photoresistors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PhotoresistorsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoresistorsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photoresistors.
     * @param {PhotoresistorsUpsertArgs} args - Arguments to update or create a Photoresistors.
     * @example
     * // Update or create a Photoresistors
     * const photoresistors = await prisma.photoresistors.upsert({
     *   create: {
     *     // ... data to create a Photoresistors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photoresistors we want to update
     *   }
     * })
    **/
    upsert<T extends PhotoresistorsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PhotoresistorsUpsertArgs<ExtArgs>>
    ): Prisma__PhotoresistorsClient<$Result.GetResult<Prisma.$PhotoresistorsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Photoresistors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoresistorsCountArgs} args - Arguments to filter Photoresistors to count.
     * @example
     * // Count the number of Photoresistors
     * const count = await prisma.photoresistors.count({
     *   where: {
     *     // ... the filter for the Photoresistors we want to count
     *   }
     * })
    **/
    count<T extends PhotoresistorsCountArgs>(
      args?: Subset<T, PhotoresistorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoresistorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photoresistors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoresistorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoresistorsAggregateArgs>(args: Subset<T, PhotoresistorsAggregateArgs>): Prisma.PrismaPromise<GetPhotoresistorsAggregateType<T>>

    /**
     * Group by Photoresistors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoresistorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoresistorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoresistorsGroupByArgs['orderBy'] }
        : { orderBy?: PhotoresistorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoresistorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoresistorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photoresistors model
   */
  readonly fields: PhotoresistorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photoresistors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoresistorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Photoresistors model
   */ 
  interface PhotoresistorsFieldRefs {
    readonly id: FieldRef<"Photoresistors", 'String'>
    readonly status: FieldRef<"Photoresistors", 'String'>
    readonly createdAt: FieldRef<"Photoresistors", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Photoresistors findUnique
   */
  export type PhotoresistorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photoresistors
     */
    select?: PhotoresistorsSelect<ExtArgs> | null
    /**
     * Filter, which Photoresistors to fetch.
     */
    where: PhotoresistorsWhereUniqueInput
  }


  /**
   * Photoresistors findUniqueOrThrow
   */
  export type PhotoresistorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photoresistors
     */
    select?: PhotoresistorsSelect<ExtArgs> | null
    /**
     * Filter, which Photoresistors to fetch.
     */
    where: PhotoresistorsWhereUniqueInput
  }


  /**
   * Photoresistors findFirst
   */
  export type PhotoresistorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photoresistors
     */
    select?: PhotoresistorsSelect<ExtArgs> | null
    /**
     * Filter, which Photoresistors to fetch.
     */
    where?: PhotoresistorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photoresistors to fetch.
     */
    orderBy?: PhotoresistorsOrderByWithRelationInput | PhotoresistorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photoresistors.
     */
    cursor?: PhotoresistorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photoresistors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photoresistors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photoresistors.
     */
    distinct?: PhotoresistorsScalarFieldEnum | PhotoresistorsScalarFieldEnum[]
  }


  /**
   * Photoresistors findFirstOrThrow
   */
  export type PhotoresistorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photoresistors
     */
    select?: PhotoresistorsSelect<ExtArgs> | null
    /**
     * Filter, which Photoresistors to fetch.
     */
    where?: PhotoresistorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photoresistors to fetch.
     */
    orderBy?: PhotoresistorsOrderByWithRelationInput | PhotoresistorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photoresistors.
     */
    cursor?: PhotoresistorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photoresistors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photoresistors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photoresistors.
     */
    distinct?: PhotoresistorsScalarFieldEnum | PhotoresistorsScalarFieldEnum[]
  }


  /**
   * Photoresistors findMany
   */
  export type PhotoresistorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photoresistors
     */
    select?: PhotoresistorsSelect<ExtArgs> | null
    /**
     * Filter, which Photoresistors to fetch.
     */
    where?: PhotoresistorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photoresistors to fetch.
     */
    orderBy?: PhotoresistorsOrderByWithRelationInput | PhotoresistorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photoresistors.
     */
    cursor?: PhotoresistorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photoresistors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photoresistors.
     */
    skip?: number
    distinct?: PhotoresistorsScalarFieldEnum | PhotoresistorsScalarFieldEnum[]
  }


  /**
   * Photoresistors create
   */
  export type PhotoresistorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photoresistors
     */
    select?: PhotoresistorsSelect<ExtArgs> | null
    /**
     * The data needed to create a Photoresistors.
     */
    data: XOR<PhotoresistorsCreateInput, PhotoresistorsUncheckedCreateInput>
  }


  /**
   * Photoresistors createMany
   */
  export type PhotoresistorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photoresistors.
     */
    data: PhotoresistorsCreateManyInput | PhotoresistorsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Photoresistors update
   */
  export type PhotoresistorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photoresistors
     */
    select?: PhotoresistorsSelect<ExtArgs> | null
    /**
     * The data needed to update a Photoresistors.
     */
    data: XOR<PhotoresistorsUpdateInput, PhotoresistorsUncheckedUpdateInput>
    /**
     * Choose, which Photoresistors to update.
     */
    where: PhotoresistorsWhereUniqueInput
  }


  /**
   * Photoresistors updateMany
   */
  export type PhotoresistorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photoresistors.
     */
    data: XOR<PhotoresistorsUpdateManyMutationInput, PhotoresistorsUncheckedUpdateManyInput>
    /**
     * Filter which Photoresistors to update
     */
    where?: PhotoresistorsWhereInput
  }


  /**
   * Photoresistors upsert
   */
  export type PhotoresistorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photoresistors
     */
    select?: PhotoresistorsSelect<ExtArgs> | null
    /**
     * The filter to search for the Photoresistors to update in case it exists.
     */
    where: PhotoresistorsWhereUniqueInput
    /**
     * In case the Photoresistors found by the `where` argument doesn't exist, create a new Photoresistors with this data.
     */
    create: XOR<PhotoresistorsCreateInput, PhotoresistorsUncheckedCreateInput>
    /**
     * In case the Photoresistors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoresistorsUpdateInput, PhotoresistorsUncheckedUpdateInput>
  }


  /**
   * Photoresistors delete
   */
  export type PhotoresistorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photoresistors
     */
    select?: PhotoresistorsSelect<ExtArgs> | null
    /**
     * Filter which Photoresistors to delete.
     */
    where: PhotoresistorsWhereUniqueInput
  }


  /**
   * Photoresistors deleteMany
   */
  export type PhotoresistorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photoresistors to delete
     */
    where?: PhotoresistorsWhereInput
  }


  /**
   * Photoresistors without action
   */
  export type PhotoresistorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photoresistors
     */
    select?: PhotoresistorsSelect<ExtArgs> | null
  }



  /**
   * Model HumiditySensors
   */

  export type AggregateHumiditySensors = {
    _count: HumiditySensorsCountAggregateOutputType | null
    _avg: HumiditySensorsAvgAggregateOutputType | null
    _sum: HumiditySensorsSumAggregateOutputType | null
    _min: HumiditySensorsMinAggregateOutputType | null
    _max: HumiditySensorsMaxAggregateOutputType | null
  }

  export type HumiditySensorsAvgAggregateOutputType = {
    temperature: Decimal | null
    humidity: number | null
  }

  export type HumiditySensorsSumAggregateOutputType = {
    temperature: Decimal | null
    humidity: number | null
  }

  export type HumiditySensorsMinAggregateOutputType = {
    id: string | null
    temperature: Decimal | null
    humidity: number | null
    status: boolean | null
    registeredAt: Date | null
  }

  export type HumiditySensorsMaxAggregateOutputType = {
    id: string | null
    temperature: Decimal | null
    humidity: number | null
    status: boolean | null
    registeredAt: Date | null
  }

  export type HumiditySensorsCountAggregateOutputType = {
    id: number
    temperature: number
    humidity: number
    status: number
    registeredAt: number
    _all: number
  }


  export type HumiditySensorsAvgAggregateInputType = {
    temperature?: true
    humidity?: true
  }

  export type HumiditySensorsSumAggregateInputType = {
    temperature?: true
    humidity?: true
  }

  export type HumiditySensorsMinAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
    status?: true
    registeredAt?: true
  }

  export type HumiditySensorsMaxAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
    status?: true
    registeredAt?: true
  }

  export type HumiditySensorsCountAggregateInputType = {
    id?: true
    temperature?: true
    humidity?: true
    status?: true
    registeredAt?: true
    _all?: true
  }

  export type HumiditySensorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HumiditySensors to aggregate.
     */
    where?: HumiditySensorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumiditySensors to fetch.
     */
    orderBy?: HumiditySensorsOrderByWithRelationInput | HumiditySensorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HumiditySensorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumiditySensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumiditySensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HumiditySensors
    **/
    _count?: true | HumiditySensorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HumiditySensorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HumiditySensorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HumiditySensorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HumiditySensorsMaxAggregateInputType
  }

  export type GetHumiditySensorsAggregateType<T extends HumiditySensorsAggregateArgs> = {
        [P in keyof T & keyof AggregateHumiditySensors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHumiditySensors[P]>
      : GetScalarType<T[P], AggregateHumiditySensors[P]>
  }




  export type HumiditySensorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HumiditySensorsWhereInput
    orderBy?: HumiditySensorsOrderByWithAggregationInput | HumiditySensorsOrderByWithAggregationInput[]
    by: HumiditySensorsScalarFieldEnum[] | HumiditySensorsScalarFieldEnum
    having?: HumiditySensorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HumiditySensorsCountAggregateInputType | true
    _avg?: HumiditySensorsAvgAggregateInputType
    _sum?: HumiditySensorsSumAggregateInputType
    _min?: HumiditySensorsMinAggregateInputType
    _max?: HumiditySensorsMaxAggregateInputType
  }

  export type HumiditySensorsGroupByOutputType = {
    id: string
    temperature: Decimal
    humidity: number
    status: boolean
    registeredAt: Date
    _count: HumiditySensorsCountAggregateOutputType | null
    _avg: HumiditySensorsAvgAggregateOutputType | null
    _sum: HumiditySensorsSumAggregateOutputType | null
    _min: HumiditySensorsMinAggregateOutputType | null
    _max: HumiditySensorsMaxAggregateOutputType | null
  }

  type GetHumiditySensorsGroupByPayload<T extends HumiditySensorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HumiditySensorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HumiditySensorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HumiditySensorsGroupByOutputType[P]>
            : GetScalarType<T[P], HumiditySensorsGroupByOutputType[P]>
        }
      >
    >


  export type HumiditySensorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    temperature?: boolean
    humidity?: boolean
    status?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["humiditySensors"]>

  export type HumiditySensorsSelectScalar = {
    id?: boolean
    temperature?: boolean
    humidity?: boolean
    status?: boolean
    registeredAt?: boolean
  }


  export type $HumiditySensorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HumiditySensors"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      temperature: Prisma.Decimal
      humidity: number
      status: boolean
      registeredAt: Date
    }, ExtArgs["result"]["humiditySensors"]>
    composites: {}
  }


  type HumiditySensorsGetPayload<S extends boolean | null | undefined | HumiditySensorsDefaultArgs> = $Result.GetResult<Prisma.$HumiditySensorsPayload, S>

  type HumiditySensorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HumiditySensorsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HumiditySensorsCountAggregateInputType | true
    }

  export interface HumiditySensorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HumiditySensors'], meta: { name: 'HumiditySensors' } }
    /**
     * Find zero or one HumiditySensors that matches the filter.
     * @param {HumiditySensorsFindUniqueArgs} args - Arguments to find a HumiditySensors
     * @example
     * // Get one HumiditySensors
     * const humiditySensors = await prisma.humiditySensors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HumiditySensorsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HumiditySensorsFindUniqueArgs<ExtArgs>>
    ): Prisma__HumiditySensorsClient<$Result.GetResult<Prisma.$HumiditySensorsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one HumiditySensors that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HumiditySensorsFindUniqueOrThrowArgs} args - Arguments to find a HumiditySensors
     * @example
     * // Get one HumiditySensors
     * const humiditySensors = await prisma.humiditySensors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HumiditySensorsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HumiditySensorsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HumiditySensorsClient<$Result.GetResult<Prisma.$HumiditySensorsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first HumiditySensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumiditySensorsFindFirstArgs} args - Arguments to find a HumiditySensors
     * @example
     * // Get one HumiditySensors
     * const humiditySensors = await prisma.humiditySensors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HumiditySensorsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HumiditySensorsFindFirstArgs<ExtArgs>>
    ): Prisma__HumiditySensorsClient<$Result.GetResult<Prisma.$HumiditySensorsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first HumiditySensors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumiditySensorsFindFirstOrThrowArgs} args - Arguments to find a HumiditySensors
     * @example
     * // Get one HumiditySensors
     * const humiditySensors = await prisma.humiditySensors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HumiditySensorsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HumiditySensorsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HumiditySensorsClient<$Result.GetResult<Prisma.$HumiditySensorsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more HumiditySensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumiditySensorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HumiditySensors
     * const humiditySensors = await prisma.humiditySensors.findMany()
     * 
     * // Get first 10 HumiditySensors
     * const humiditySensors = await prisma.humiditySensors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const humiditySensorsWithIdOnly = await prisma.humiditySensors.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HumiditySensorsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HumiditySensorsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HumiditySensorsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a HumiditySensors.
     * @param {HumiditySensorsCreateArgs} args - Arguments to create a HumiditySensors.
     * @example
     * // Create one HumiditySensors
     * const HumiditySensors = await prisma.humiditySensors.create({
     *   data: {
     *     // ... data to create a HumiditySensors
     *   }
     * })
     * 
    **/
    create<T extends HumiditySensorsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HumiditySensorsCreateArgs<ExtArgs>>
    ): Prisma__HumiditySensorsClient<$Result.GetResult<Prisma.$HumiditySensorsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many HumiditySensors.
     *     @param {HumiditySensorsCreateManyArgs} args - Arguments to create many HumiditySensors.
     *     @example
     *     // Create many HumiditySensors
     *     const humiditySensors = await prisma.humiditySensors.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HumiditySensorsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HumiditySensorsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HumiditySensors.
     * @param {HumiditySensorsDeleteArgs} args - Arguments to delete one HumiditySensors.
     * @example
     * // Delete one HumiditySensors
     * const HumiditySensors = await prisma.humiditySensors.delete({
     *   where: {
     *     // ... filter to delete one HumiditySensors
     *   }
     * })
     * 
    **/
    delete<T extends HumiditySensorsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HumiditySensorsDeleteArgs<ExtArgs>>
    ): Prisma__HumiditySensorsClient<$Result.GetResult<Prisma.$HumiditySensorsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one HumiditySensors.
     * @param {HumiditySensorsUpdateArgs} args - Arguments to update one HumiditySensors.
     * @example
     * // Update one HumiditySensors
     * const humiditySensors = await prisma.humiditySensors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HumiditySensorsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HumiditySensorsUpdateArgs<ExtArgs>>
    ): Prisma__HumiditySensorsClient<$Result.GetResult<Prisma.$HumiditySensorsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more HumiditySensors.
     * @param {HumiditySensorsDeleteManyArgs} args - Arguments to filter HumiditySensors to delete.
     * @example
     * // Delete a few HumiditySensors
     * const { count } = await prisma.humiditySensors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HumiditySensorsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HumiditySensorsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HumiditySensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumiditySensorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HumiditySensors
     * const humiditySensors = await prisma.humiditySensors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HumiditySensorsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HumiditySensorsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HumiditySensors.
     * @param {HumiditySensorsUpsertArgs} args - Arguments to update or create a HumiditySensors.
     * @example
     * // Update or create a HumiditySensors
     * const humiditySensors = await prisma.humiditySensors.upsert({
     *   create: {
     *     // ... data to create a HumiditySensors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HumiditySensors we want to update
     *   }
     * })
    **/
    upsert<T extends HumiditySensorsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HumiditySensorsUpsertArgs<ExtArgs>>
    ): Prisma__HumiditySensorsClient<$Result.GetResult<Prisma.$HumiditySensorsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of HumiditySensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumiditySensorsCountArgs} args - Arguments to filter HumiditySensors to count.
     * @example
     * // Count the number of HumiditySensors
     * const count = await prisma.humiditySensors.count({
     *   where: {
     *     // ... the filter for the HumiditySensors we want to count
     *   }
     * })
    **/
    count<T extends HumiditySensorsCountArgs>(
      args?: Subset<T, HumiditySensorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HumiditySensorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HumiditySensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumiditySensorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HumiditySensorsAggregateArgs>(args: Subset<T, HumiditySensorsAggregateArgs>): Prisma.PrismaPromise<GetHumiditySensorsAggregateType<T>>

    /**
     * Group by HumiditySensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HumiditySensorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HumiditySensorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HumiditySensorsGroupByArgs['orderBy'] }
        : { orderBy?: HumiditySensorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HumiditySensorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHumiditySensorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HumiditySensors model
   */
  readonly fields: HumiditySensorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HumiditySensors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HumiditySensorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the HumiditySensors model
   */ 
  interface HumiditySensorsFieldRefs {
    readonly id: FieldRef<"HumiditySensors", 'String'>
    readonly temperature: FieldRef<"HumiditySensors", 'Decimal'>
    readonly humidity: FieldRef<"HumiditySensors", 'Int'>
    readonly status: FieldRef<"HumiditySensors", 'Boolean'>
    readonly registeredAt: FieldRef<"HumiditySensors", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * HumiditySensors findUnique
   */
  export type HumiditySensorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumiditySensors
     */
    select?: HumiditySensorsSelect<ExtArgs> | null
    /**
     * Filter, which HumiditySensors to fetch.
     */
    where: HumiditySensorsWhereUniqueInput
  }


  /**
   * HumiditySensors findUniqueOrThrow
   */
  export type HumiditySensorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumiditySensors
     */
    select?: HumiditySensorsSelect<ExtArgs> | null
    /**
     * Filter, which HumiditySensors to fetch.
     */
    where: HumiditySensorsWhereUniqueInput
  }


  /**
   * HumiditySensors findFirst
   */
  export type HumiditySensorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumiditySensors
     */
    select?: HumiditySensorsSelect<ExtArgs> | null
    /**
     * Filter, which HumiditySensors to fetch.
     */
    where?: HumiditySensorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumiditySensors to fetch.
     */
    orderBy?: HumiditySensorsOrderByWithRelationInput | HumiditySensorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HumiditySensors.
     */
    cursor?: HumiditySensorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumiditySensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumiditySensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HumiditySensors.
     */
    distinct?: HumiditySensorsScalarFieldEnum | HumiditySensorsScalarFieldEnum[]
  }


  /**
   * HumiditySensors findFirstOrThrow
   */
  export type HumiditySensorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumiditySensors
     */
    select?: HumiditySensorsSelect<ExtArgs> | null
    /**
     * Filter, which HumiditySensors to fetch.
     */
    where?: HumiditySensorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumiditySensors to fetch.
     */
    orderBy?: HumiditySensorsOrderByWithRelationInput | HumiditySensorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HumiditySensors.
     */
    cursor?: HumiditySensorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumiditySensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumiditySensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HumiditySensors.
     */
    distinct?: HumiditySensorsScalarFieldEnum | HumiditySensorsScalarFieldEnum[]
  }


  /**
   * HumiditySensors findMany
   */
  export type HumiditySensorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumiditySensors
     */
    select?: HumiditySensorsSelect<ExtArgs> | null
    /**
     * Filter, which HumiditySensors to fetch.
     */
    where?: HumiditySensorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HumiditySensors to fetch.
     */
    orderBy?: HumiditySensorsOrderByWithRelationInput | HumiditySensorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HumiditySensors.
     */
    cursor?: HumiditySensorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HumiditySensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HumiditySensors.
     */
    skip?: number
    distinct?: HumiditySensorsScalarFieldEnum | HumiditySensorsScalarFieldEnum[]
  }


  /**
   * HumiditySensors create
   */
  export type HumiditySensorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumiditySensors
     */
    select?: HumiditySensorsSelect<ExtArgs> | null
    /**
     * The data needed to create a HumiditySensors.
     */
    data: XOR<HumiditySensorsCreateInput, HumiditySensorsUncheckedCreateInput>
  }


  /**
   * HumiditySensors createMany
   */
  export type HumiditySensorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HumiditySensors.
     */
    data: HumiditySensorsCreateManyInput | HumiditySensorsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * HumiditySensors update
   */
  export type HumiditySensorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumiditySensors
     */
    select?: HumiditySensorsSelect<ExtArgs> | null
    /**
     * The data needed to update a HumiditySensors.
     */
    data: XOR<HumiditySensorsUpdateInput, HumiditySensorsUncheckedUpdateInput>
    /**
     * Choose, which HumiditySensors to update.
     */
    where: HumiditySensorsWhereUniqueInput
  }


  /**
   * HumiditySensors updateMany
   */
  export type HumiditySensorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HumiditySensors.
     */
    data: XOR<HumiditySensorsUpdateManyMutationInput, HumiditySensorsUncheckedUpdateManyInput>
    /**
     * Filter which HumiditySensors to update
     */
    where?: HumiditySensorsWhereInput
  }


  /**
   * HumiditySensors upsert
   */
  export type HumiditySensorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumiditySensors
     */
    select?: HumiditySensorsSelect<ExtArgs> | null
    /**
     * The filter to search for the HumiditySensors to update in case it exists.
     */
    where: HumiditySensorsWhereUniqueInput
    /**
     * In case the HumiditySensors found by the `where` argument doesn't exist, create a new HumiditySensors with this data.
     */
    create: XOR<HumiditySensorsCreateInput, HumiditySensorsUncheckedCreateInput>
    /**
     * In case the HumiditySensors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HumiditySensorsUpdateInput, HumiditySensorsUncheckedUpdateInput>
  }


  /**
   * HumiditySensors delete
   */
  export type HumiditySensorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumiditySensors
     */
    select?: HumiditySensorsSelect<ExtArgs> | null
    /**
     * Filter which HumiditySensors to delete.
     */
    where: HumiditySensorsWhereUniqueInput
  }


  /**
   * HumiditySensors deleteMany
   */
  export type HumiditySensorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HumiditySensors to delete
     */
    where?: HumiditySensorsWhereInput
  }


  /**
   * HumiditySensors without action
   */
  export type HumiditySensorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HumiditySensors
     */
    select?: HumiditySensorsSelect<ExtArgs> | null
  }



  /**
   * Model ProximitySensor
   */

  export type AggregateProximitySensor = {
    _count: ProximitySensorCountAggregateOutputType | null
    _avg: ProximitySensorAvgAggregateOutputType | null
    _sum: ProximitySensorSumAggregateOutputType | null
    _min: ProximitySensorMinAggregateOutputType | null
    _max: ProximitySensorMaxAggregateOutputType | null
  }

  export type ProximitySensorAvgAggregateOutputType = {
    distance: Decimal | null
  }

  export type ProximitySensorSumAggregateOutputType = {
    distance: Decimal | null
  }

  export type ProximitySensorMinAggregateOutputType = {
    id: string | null
    distance: Decimal | null
    status: boolean | null
    registeredAt: Date | null
  }

  export type ProximitySensorMaxAggregateOutputType = {
    id: string | null
    distance: Decimal | null
    status: boolean | null
    registeredAt: Date | null
  }

  export type ProximitySensorCountAggregateOutputType = {
    id: number
    distance: number
    status: number
    registeredAt: number
    _all: number
  }


  export type ProximitySensorAvgAggregateInputType = {
    distance?: true
  }

  export type ProximitySensorSumAggregateInputType = {
    distance?: true
  }

  export type ProximitySensorMinAggregateInputType = {
    id?: true
    distance?: true
    status?: true
    registeredAt?: true
  }

  export type ProximitySensorMaxAggregateInputType = {
    id?: true
    distance?: true
    status?: true
    registeredAt?: true
  }

  export type ProximitySensorCountAggregateInputType = {
    id?: true
    distance?: true
    status?: true
    registeredAt?: true
    _all?: true
  }

  export type ProximitySensorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProximitySensor to aggregate.
     */
    where?: ProximitySensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProximitySensors to fetch.
     */
    orderBy?: ProximitySensorOrderByWithRelationInput | ProximitySensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProximitySensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProximitySensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProximitySensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProximitySensors
    **/
    _count?: true | ProximitySensorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProximitySensorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProximitySensorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProximitySensorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProximitySensorMaxAggregateInputType
  }

  export type GetProximitySensorAggregateType<T extends ProximitySensorAggregateArgs> = {
        [P in keyof T & keyof AggregateProximitySensor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProximitySensor[P]>
      : GetScalarType<T[P], AggregateProximitySensor[P]>
  }




  export type ProximitySensorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProximitySensorWhereInput
    orderBy?: ProximitySensorOrderByWithAggregationInput | ProximitySensorOrderByWithAggregationInput[]
    by: ProximitySensorScalarFieldEnum[] | ProximitySensorScalarFieldEnum
    having?: ProximitySensorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProximitySensorCountAggregateInputType | true
    _avg?: ProximitySensorAvgAggregateInputType
    _sum?: ProximitySensorSumAggregateInputType
    _min?: ProximitySensorMinAggregateInputType
    _max?: ProximitySensorMaxAggregateInputType
  }

  export type ProximitySensorGroupByOutputType = {
    id: string
    distance: Decimal
    status: boolean
    registeredAt: Date
    _count: ProximitySensorCountAggregateOutputType | null
    _avg: ProximitySensorAvgAggregateOutputType | null
    _sum: ProximitySensorSumAggregateOutputType | null
    _min: ProximitySensorMinAggregateOutputType | null
    _max: ProximitySensorMaxAggregateOutputType | null
  }

  type GetProximitySensorGroupByPayload<T extends ProximitySensorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProximitySensorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProximitySensorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProximitySensorGroupByOutputType[P]>
            : GetScalarType<T[P], ProximitySensorGroupByOutputType[P]>
        }
      >
    >


  export type ProximitySensorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    distance?: boolean
    status?: boolean
    registeredAt?: boolean
  }, ExtArgs["result"]["proximitySensor"]>

  export type ProximitySensorSelectScalar = {
    id?: boolean
    distance?: boolean
    status?: boolean
    registeredAt?: boolean
  }


  export type $ProximitySensorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProximitySensor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      distance: Prisma.Decimal
      status: boolean
      registeredAt: Date
    }, ExtArgs["result"]["proximitySensor"]>
    composites: {}
  }


  type ProximitySensorGetPayload<S extends boolean | null | undefined | ProximitySensorDefaultArgs> = $Result.GetResult<Prisma.$ProximitySensorPayload, S>

  type ProximitySensorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProximitySensorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProximitySensorCountAggregateInputType | true
    }

  export interface ProximitySensorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProximitySensor'], meta: { name: 'ProximitySensor' } }
    /**
     * Find zero or one ProximitySensor that matches the filter.
     * @param {ProximitySensorFindUniqueArgs} args - Arguments to find a ProximitySensor
     * @example
     * // Get one ProximitySensor
     * const proximitySensor = await prisma.proximitySensor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProximitySensorFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProximitySensorFindUniqueArgs<ExtArgs>>
    ): Prisma__ProximitySensorClient<$Result.GetResult<Prisma.$ProximitySensorPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ProximitySensor that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProximitySensorFindUniqueOrThrowArgs} args - Arguments to find a ProximitySensor
     * @example
     * // Get one ProximitySensor
     * const proximitySensor = await prisma.proximitySensor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProximitySensorFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProximitySensorFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProximitySensorClient<$Result.GetResult<Prisma.$ProximitySensorPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ProximitySensor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProximitySensorFindFirstArgs} args - Arguments to find a ProximitySensor
     * @example
     * // Get one ProximitySensor
     * const proximitySensor = await prisma.proximitySensor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProximitySensorFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProximitySensorFindFirstArgs<ExtArgs>>
    ): Prisma__ProximitySensorClient<$Result.GetResult<Prisma.$ProximitySensorPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ProximitySensor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProximitySensorFindFirstOrThrowArgs} args - Arguments to find a ProximitySensor
     * @example
     * // Get one ProximitySensor
     * const proximitySensor = await prisma.proximitySensor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProximitySensorFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProximitySensorFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProximitySensorClient<$Result.GetResult<Prisma.$ProximitySensorPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ProximitySensors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProximitySensorFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProximitySensors
     * const proximitySensors = await prisma.proximitySensor.findMany()
     * 
     * // Get first 10 ProximitySensors
     * const proximitySensors = await prisma.proximitySensor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proximitySensorWithIdOnly = await prisma.proximitySensor.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProximitySensorFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProximitySensorFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProximitySensorPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ProximitySensor.
     * @param {ProximitySensorCreateArgs} args - Arguments to create a ProximitySensor.
     * @example
     * // Create one ProximitySensor
     * const ProximitySensor = await prisma.proximitySensor.create({
     *   data: {
     *     // ... data to create a ProximitySensor
     *   }
     * })
     * 
    **/
    create<T extends ProximitySensorCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProximitySensorCreateArgs<ExtArgs>>
    ): Prisma__ProximitySensorClient<$Result.GetResult<Prisma.$ProximitySensorPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ProximitySensors.
     *     @param {ProximitySensorCreateManyArgs} args - Arguments to create many ProximitySensors.
     *     @example
     *     // Create many ProximitySensors
     *     const proximitySensor = await prisma.proximitySensor.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProximitySensorCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProximitySensorCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProximitySensor.
     * @param {ProximitySensorDeleteArgs} args - Arguments to delete one ProximitySensor.
     * @example
     * // Delete one ProximitySensor
     * const ProximitySensor = await prisma.proximitySensor.delete({
     *   where: {
     *     // ... filter to delete one ProximitySensor
     *   }
     * })
     * 
    **/
    delete<T extends ProximitySensorDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProximitySensorDeleteArgs<ExtArgs>>
    ): Prisma__ProximitySensorClient<$Result.GetResult<Prisma.$ProximitySensorPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ProximitySensor.
     * @param {ProximitySensorUpdateArgs} args - Arguments to update one ProximitySensor.
     * @example
     * // Update one ProximitySensor
     * const proximitySensor = await prisma.proximitySensor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProximitySensorUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProximitySensorUpdateArgs<ExtArgs>>
    ): Prisma__ProximitySensorClient<$Result.GetResult<Prisma.$ProximitySensorPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ProximitySensors.
     * @param {ProximitySensorDeleteManyArgs} args - Arguments to filter ProximitySensors to delete.
     * @example
     * // Delete a few ProximitySensors
     * const { count } = await prisma.proximitySensor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProximitySensorDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProximitySensorDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProximitySensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProximitySensorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProximitySensors
     * const proximitySensor = await prisma.proximitySensor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProximitySensorUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProximitySensorUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProximitySensor.
     * @param {ProximitySensorUpsertArgs} args - Arguments to update or create a ProximitySensor.
     * @example
     * // Update or create a ProximitySensor
     * const proximitySensor = await prisma.proximitySensor.upsert({
     *   create: {
     *     // ... data to create a ProximitySensor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProximitySensor we want to update
     *   }
     * })
    **/
    upsert<T extends ProximitySensorUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProximitySensorUpsertArgs<ExtArgs>>
    ): Prisma__ProximitySensorClient<$Result.GetResult<Prisma.$ProximitySensorPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ProximitySensors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProximitySensorCountArgs} args - Arguments to filter ProximitySensors to count.
     * @example
     * // Count the number of ProximitySensors
     * const count = await prisma.proximitySensor.count({
     *   where: {
     *     // ... the filter for the ProximitySensors we want to count
     *   }
     * })
    **/
    count<T extends ProximitySensorCountArgs>(
      args?: Subset<T, ProximitySensorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProximitySensorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProximitySensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProximitySensorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProximitySensorAggregateArgs>(args: Subset<T, ProximitySensorAggregateArgs>): Prisma.PrismaPromise<GetProximitySensorAggregateType<T>>

    /**
     * Group by ProximitySensor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProximitySensorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProximitySensorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProximitySensorGroupByArgs['orderBy'] }
        : { orderBy?: ProximitySensorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProximitySensorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProximitySensorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProximitySensor model
   */
  readonly fields: ProximitySensorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProximitySensor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProximitySensorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ProximitySensor model
   */ 
  interface ProximitySensorFieldRefs {
    readonly id: FieldRef<"ProximitySensor", 'String'>
    readonly distance: FieldRef<"ProximitySensor", 'Decimal'>
    readonly status: FieldRef<"ProximitySensor", 'Boolean'>
    readonly registeredAt: FieldRef<"ProximitySensor", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ProximitySensor findUnique
   */
  export type ProximitySensorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProximitySensor
     */
    select?: ProximitySensorSelect<ExtArgs> | null
    /**
     * Filter, which ProximitySensor to fetch.
     */
    where: ProximitySensorWhereUniqueInput
  }


  /**
   * ProximitySensor findUniqueOrThrow
   */
  export type ProximitySensorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProximitySensor
     */
    select?: ProximitySensorSelect<ExtArgs> | null
    /**
     * Filter, which ProximitySensor to fetch.
     */
    where: ProximitySensorWhereUniqueInput
  }


  /**
   * ProximitySensor findFirst
   */
  export type ProximitySensorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProximitySensor
     */
    select?: ProximitySensorSelect<ExtArgs> | null
    /**
     * Filter, which ProximitySensor to fetch.
     */
    where?: ProximitySensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProximitySensors to fetch.
     */
    orderBy?: ProximitySensorOrderByWithRelationInput | ProximitySensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProximitySensors.
     */
    cursor?: ProximitySensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProximitySensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProximitySensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProximitySensors.
     */
    distinct?: ProximitySensorScalarFieldEnum | ProximitySensorScalarFieldEnum[]
  }


  /**
   * ProximitySensor findFirstOrThrow
   */
  export type ProximitySensorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProximitySensor
     */
    select?: ProximitySensorSelect<ExtArgs> | null
    /**
     * Filter, which ProximitySensor to fetch.
     */
    where?: ProximitySensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProximitySensors to fetch.
     */
    orderBy?: ProximitySensorOrderByWithRelationInput | ProximitySensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProximitySensors.
     */
    cursor?: ProximitySensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProximitySensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProximitySensors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProximitySensors.
     */
    distinct?: ProximitySensorScalarFieldEnum | ProximitySensorScalarFieldEnum[]
  }


  /**
   * ProximitySensor findMany
   */
  export type ProximitySensorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProximitySensor
     */
    select?: ProximitySensorSelect<ExtArgs> | null
    /**
     * Filter, which ProximitySensors to fetch.
     */
    where?: ProximitySensorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProximitySensors to fetch.
     */
    orderBy?: ProximitySensorOrderByWithRelationInput | ProximitySensorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProximitySensors.
     */
    cursor?: ProximitySensorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProximitySensors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProximitySensors.
     */
    skip?: number
    distinct?: ProximitySensorScalarFieldEnum | ProximitySensorScalarFieldEnum[]
  }


  /**
   * ProximitySensor create
   */
  export type ProximitySensorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProximitySensor
     */
    select?: ProximitySensorSelect<ExtArgs> | null
    /**
     * The data needed to create a ProximitySensor.
     */
    data: XOR<ProximitySensorCreateInput, ProximitySensorUncheckedCreateInput>
  }


  /**
   * ProximitySensor createMany
   */
  export type ProximitySensorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProximitySensors.
     */
    data: ProximitySensorCreateManyInput | ProximitySensorCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ProximitySensor update
   */
  export type ProximitySensorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProximitySensor
     */
    select?: ProximitySensorSelect<ExtArgs> | null
    /**
     * The data needed to update a ProximitySensor.
     */
    data: XOR<ProximitySensorUpdateInput, ProximitySensorUncheckedUpdateInput>
    /**
     * Choose, which ProximitySensor to update.
     */
    where: ProximitySensorWhereUniqueInput
  }


  /**
   * ProximitySensor updateMany
   */
  export type ProximitySensorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProximitySensors.
     */
    data: XOR<ProximitySensorUpdateManyMutationInput, ProximitySensorUncheckedUpdateManyInput>
    /**
     * Filter which ProximitySensors to update
     */
    where?: ProximitySensorWhereInput
  }


  /**
   * ProximitySensor upsert
   */
  export type ProximitySensorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProximitySensor
     */
    select?: ProximitySensorSelect<ExtArgs> | null
    /**
     * The filter to search for the ProximitySensor to update in case it exists.
     */
    where: ProximitySensorWhereUniqueInput
    /**
     * In case the ProximitySensor found by the `where` argument doesn't exist, create a new ProximitySensor with this data.
     */
    create: XOR<ProximitySensorCreateInput, ProximitySensorUncheckedCreateInput>
    /**
     * In case the ProximitySensor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProximitySensorUpdateInput, ProximitySensorUncheckedUpdateInput>
  }


  /**
   * ProximitySensor delete
   */
  export type ProximitySensorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProximitySensor
     */
    select?: ProximitySensorSelect<ExtArgs> | null
    /**
     * Filter which ProximitySensor to delete.
     */
    where: ProximitySensorWhereUniqueInput
  }


  /**
   * ProximitySensor deleteMany
   */
  export type ProximitySensorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProximitySensors to delete
     */
    where?: ProximitySensorWhereInput
  }


  /**
   * ProximitySensor without action
   */
  export type ProximitySensorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProximitySensor
     */
    select?: ProximitySensorSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EmployeesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phoneNumber: 'phoneNumber',
    email: 'email',
    username: 'username',
    password: 'password',
    token: 'token'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const ClientsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phoneNumber: 'phoneNumber',
    email: 'email'
  };

  export type ClientsScalarFieldEnum = (typeof ClientsScalarFieldEnum)[keyof typeof ClientsScalarFieldEnum]


  export const VehiclesScalarFieldEnum: {
    id: 'id',
    plate: 'plate',
    brand: 'brand',
    model: 'model',
    type: 'type',
    owner: 'owner'
  };

  export type VehiclesScalarFieldEnum = (typeof VehiclesScalarFieldEnum)[keyof typeof VehiclesScalarFieldEnum]


  export const RecordsScalarFieldEnum: {
    id: 'id',
    entryDate: 'entryDate',
    exitDate: 'exitDate',
    vehicleId: 'vehicleId',
    feeId: 'feeId',
    slotId: 'slotId',
    updatedAt: 'updatedAt'
  };

  export type RecordsScalarFieldEnum = (typeof RecordsScalarFieldEnum)[keyof typeof RecordsScalarFieldEnum]


  export const SlotsScalarFieldEnum: {
    id: 'id',
    number: 'number',
    description: 'description',
    status: 'status'
  };

  export type SlotsScalarFieldEnum = (typeof SlotsScalarFieldEnum)[keyof typeof SlotsScalarFieldEnum]


  export const FeesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cost: 'cost',
    status: 'status'
  };

  export type FeesScalarFieldEnum = (typeof FeesScalarFieldEnum)[keyof typeof FeesScalarFieldEnum]


  export const PhotoresistorsScalarFieldEnum: {
    id: 'id',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type PhotoresistorsScalarFieldEnum = (typeof PhotoresistorsScalarFieldEnum)[keyof typeof PhotoresistorsScalarFieldEnum]


  export const HumiditySensorsScalarFieldEnum: {
    id: 'id',
    temperature: 'temperature',
    humidity: 'humidity',
    status: 'status',
    registeredAt: 'registeredAt'
  };

  export type HumiditySensorsScalarFieldEnum = (typeof HumiditySensorsScalarFieldEnum)[keyof typeof HumiditySensorsScalarFieldEnum]


  export const ProximitySensorScalarFieldEnum: {
    id: 'id',
    distance: 'distance',
    status: 'status',
    registeredAt: 'registeredAt'
  };

  export type ProximitySensorScalarFieldEnum = (typeof ProximitySensorScalarFieldEnum)[keyof typeof ProximitySensorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type EmployeesWhereInput = {
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    id?: StringFilter<"Employees"> | string
    name?: StringFilter<"Employees"> | string
    address?: StringFilter<"Employees"> | string
    phoneNumber?: StringNullableFilter<"Employees"> | string | null
    email?: StringNullableFilter<"Employees"> | string | null
    username?: StringFilter<"Employees"> | string
    password?: StringFilter<"Employees"> | string
    token?: StringNullableFilter<"Employees"> | string | null
  }

  export type EmployeesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
  }

  export type EmployeesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: EmployeesWhereInput | EmployeesWhereInput[]
    OR?: EmployeesWhereInput[]
    NOT?: EmployeesWhereInput | EmployeesWhereInput[]
    name?: StringFilter<"Employees"> | string
    address?: StringFilter<"Employees"> | string
    phoneNumber?: StringNullableFilter<"Employees"> | string | null
    password?: StringFilter<"Employees"> | string
    token?: StringNullableFilter<"Employees"> | string | null
  }, "id" | "id" | "email" | "username">

  export type EmployeesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrderInput | SortOrder
    _count?: EmployeesCountOrderByAggregateInput
    _max?: EmployeesMaxOrderByAggregateInput
    _min?: EmployeesMinOrderByAggregateInput
  }

  export type EmployeesScalarWhereWithAggregatesInput = {
    AND?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    OR?: EmployeesScalarWhereWithAggregatesInput[]
    NOT?: EmployeesScalarWhereWithAggregatesInput | EmployeesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Employees"> | string
    name?: StringWithAggregatesFilter<"Employees"> | string
    address?: StringWithAggregatesFilter<"Employees"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    email?: StringNullableWithAggregatesFilter<"Employees"> | string | null
    username?: StringWithAggregatesFilter<"Employees"> | string
    password?: StringWithAggregatesFilter<"Employees"> | string
    token?: StringNullableWithAggregatesFilter<"Employees"> | string | null
  }

  export type ClientsWhereInput = {
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    id?: StringFilter<"Clients"> | string
    name?: StringFilter<"Clients"> | string
    address?: StringFilter<"Clients"> | string
    phoneNumber?: StringNullableFilter<"Clients"> | string | null
    email?: StringNullableFilter<"Clients"> | string | null
    Vehicle?: VehiclesListRelationFilter
  }

  export type ClientsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    Vehicle?: VehiclesOrderByRelationAggregateInput
  }

  export type ClientsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientsWhereInput | ClientsWhereInput[]
    OR?: ClientsWhereInput[]
    NOT?: ClientsWhereInput | ClientsWhereInput[]
    name?: StringFilter<"Clients"> | string
    address?: StringFilter<"Clients"> | string
    phoneNumber?: StringNullableFilter<"Clients"> | string | null
    email?: StringNullableFilter<"Clients"> | string | null
    Vehicle?: VehiclesListRelationFilter
  }, "id" | "id">

  export type ClientsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    _count?: ClientsCountOrderByAggregateInput
    _max?: ClientsMaxOrderByAggregateInput
    _min?: ClientsMinOrderByAggregateInput
  }

  export type ClientsScalarWhereWithAggregatesInput = {
    AND?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    OR?: ClientsScalarWhereWithAggregatesInput[]
    NOT?: ClientsScalarWhereWithAggregatesInput | ClientsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Clients"> | string
    name?: StringWithAggregatesFilter<"Clients"> | string
    address?: StringWithAggregatesFilter<"Clients"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"Clients"> | string | null
    email?: StringNullableWithAggregatesFilter<"Clients"> | string | null
  }

  export type VehiclesWhereInput = {
    AND?: VehiclesWhereInput | VehiclesWhereInput[]
    OR?: VehiclesWhereInput[]
    NOT?: VehiclesWhereInput | VehiclesWhereInput[]
    id?: StringFilter<"Vehicles"> | string
    plate?: StringFilter<"Vehicles"> | string
    brand?: StringFilter<"Vehicles"> | string
    model?: StringFilter<"Vehicles"> | string
    type?: StringFilter<"Vehicles"> | string
    owner?: StringFilter<"Vehicles"> | string
    client?: XOR<ClientsRelationFilter, ClientsWhereInput>
    Records?: RecordsListRelationFilter
  }

  export type VehiclesOrderByWithRelationInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    type?: SortOrder
    owner?: SortOrder
    client?: ClientsOrderByWithRelationInput
    Records?: RecordsOrderByRelationAggregateInput
  }

  export type VehiclesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plate?: string
    AND?: VehiclesWhereInput | VehiclesWhereInput[]
    OR?: VehiclesWhereInput[]
    NOT?: VehiclesWhereInput | VehiclesWhereInput[]
    brand?: StringFilter<"Vehicles"> | string
    model?: StringFilter<"Vehicles"> | string
    type?: StringFilter<"Vehicles"> | string
    owner?: StringFilter<"Vehicles"> | string
    client?: XOR<ClientsRelationFilter, ClientsWhereInput>
    Records?: RecordsListRelationFilter
  }, "id" | "id" | "plate">

  export type VehiclesOrderByWithAggregationInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    type?: SortOrder
    owner?: SortOrder
    _count?: VehiclesCountOrderByAggregateInput
    _max?: VehiclesMaxOrderByAggregateInput
    _min?: VehiclesMinOrderByAggregateInput
  }

  export type VehiclesScalarWhereWithAggregatesInput = {
    AND?: VehiclesScalarWhereWithAggregatesInput | VehiclesScalarWhereWithAggregatesInput[]
    OR?: VehiclesScalarWhereWithAggregatesInput[]
    NOT?: VehiclesScalarWhereWithAggregatesInput | VehiclesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicles"> | string
    plate?: StringWithAggregatesFilter<"Vehicles"> | string
    brand?: StringWithAggregatesFilter<"Vehicles"> | string
    model?: StringWithAggregatesFilter<"Vehicles"> | string
    type?: StringWithAggregatesFilter<"Vehicles"> | string
    owner?: StringWithAggregatesFilter<"Vehicles"> | string
  }

  export type RecordsWhereInput = {
    AND?: RecordsWhereInput | RecordsWhereInput[]
    OR?: RecordsWhereInput[]
    NOT?: RecordsWhereInput | RecordsWhereInput[]
    id?: StringFilter<"Records"> | string
    entryDate?: DateTimeFilter<"Records"> | Date | string
    exitDate?: DateTimeNullableFilter<"Records"> | Date | string | null
    vehicleId?: StringFilter<"Records"> | string
    feeId?: StringFilter<"Records"> | string
    slotId?: StringFilter<"Records"> | string
    updatedAt?: DateTimeFilter<"Records"> | Date | string
    vehicle?: XOR<VehiclesRelationFilter, VehiclesWhereInput>
    fee?: XOR<FeesRelationFilter, FeesWhereInput>
    slot?: XOR<SlotsRelationFilter, SlotsWhereInput>
  }

  export type RecordsOrderByWithRelationInput = {
    id?: SortOrder
    entryDate?: SortOrder
    exitDate?: SortOrderInput | SortOrder
    vehicleId?: SortOrder
    feeId?: SortOrder
    slotId?: SortOrder
    updatedAt?: SortOrder
    vehicle?: VehiclesOrderByWithRelationInput
    fee?: FeesOrderByWithRelationInput
    slot?: SlotsOrderByWithRelationInput
  }

  export type RecordsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RecordsWhereInput | RecordsWhereInput[]
    OR?: RecordsWhereInput[]
    NOT?: RecordsWhereInput | RecordsWhereInput[]
    entryDate?: DateTimeFilter<"Records"> | Date | string
    exitDate?: DateTimeNullableFilter<"Records"> | Date | string | null
    vehicleId?: StringFilter<"Records"> | string
    feeId?: StringFilter<"Records"> | string
    slotId?: StringFilter<"Records"> | string
    updatedAt?: DateTimeFilter<"Records"> | Date | string
    vehicle?: XOR<VehiclesRelationFilter, VehiclesWhereInput>
    fee?: XOR<FeesRelationFilter, FeesWhereInput>
    slot?: XOR<SlotsRelationFilter, SlotsWhereInput>
  }, "id" | "id">

  export type RecordsOrderByWithAggregationInput = {
    id?: SortOrder
    entryDate?: SortOrder
    exitDate?: SortOrderInput | SortOrder
    vehicleId?: SortOrder
    feeId?: SortOrder
    slotId?: SortOrder
    updatedAt?: SortOrder
    _count?: RecordsCountOrderByAggregateInput
    _max?: RecordsMaxOrderByAggregateInput
    _min?: RecordsMinOrderByAggregateInput
  }

  export type RecordsScalarWhereWithAggregatesInput = {
    AND?: RecordsScalarWhereWithAggregatesInput | RecordsScalarWhereWithAggregatesInput[]
    OR?: RecordsScalarWhereWithAggregatesInput[]
    NOT?: RecordsScalarWhereWithAggregatesInput | RecordsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Records"> | string
    entryDate?: DateTimeWithAggregatesFilter<"Records"> | Date | string
    exitDate?: DateTimeNullableWithAggregatesFilter<"Records"> | Date | string | null
    vehicleId?: StringWithAggregatesFilter<"Records"> | string
    feeId?: StringWithAggregatesFilter<"Records"> | string
    slotId?: StringWithAggregatesFilter<"Records"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Records"> | Date | string
  }

  export type SlotsWhereInput = {
    AND?: SlotsWhereInput | SlotsWhereInput[]
    OR?: SlotsWhereInput[]
    NOT?: SlotsWhereInput | SlotsWhereInput[]
    id?: StringFilter<"Slots"> | string
    number?: IntFilter<"Slots"> | number
    description?: StringNullableFilter<"Slots"> | string | null
    status?: BoolFilter<"Slots"> | boolean
    Records?: RecordsListRelationFilter
  }

  export type SlotsOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    Records?: RecordsOrderByRelationAggregateInput
  }

  export type SlotsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    number?: number
    AND?: SlotsWhereInput | SlotsWhereInput[]
    OR?: SlotsWhereInput[]
    NOT?: SlotsWhereInput | SlotsWhereInput[]
    description?: StringNullableFilter<"Slots"> | string | null
    status?: BoolFilter<"Slots"> | boolean
    Records?: RecordsListRelationFilter
  }, "id" | "id" | "number">

  export type SlotsOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: SlotsCountOrderByAggregateInput
    _avg?: SlotsAvgOrderByAggregateInput
    _max?: SlotsMaxOrderByAggregateInput
    _min?: SlotsMinOrderByAggregateInput
    _sum?: SlotsSumOrderByAggregateInput
  }

  export type SlotsScalarWhereWithAggregatesInput = {
    AND?: SlotsScalarWhereWithAggregatesInput | SlotsScalarWhereWithAggregatesInput[]
    OR?: SlotsScalarWhereWithAggregatesInput[]
    NOT?: SlotsScalarWhereWithAggregatesInput | SlotsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Slots"> | string
    number?: IntWithAggregatesFilter<"Slots"> | number
    description?: StringNullableWithAggregatesFilter<"Slots"> | string | null
    status?: BoolWithAggregatesFilter<"Slots"> | boolean
  }

  export type FeesWhereInput = {
    AND?: FeesWhereInput | FeesWhereInput[]
    OR?: FeesWhereInput[]
    NOT?: FeesWhereInput | FeesWhereInput[]
    id?: StringFilter<"Fees"> | string
    name?: StringFilter<"Fees"> | string
    cost?: DecimalFilter<"Fees"> | Decimal | DecimalJsLike | number | string
    status?: BoolFilter<"Fees"> | boolean
    Records?: RecordsListRelationFilter
  }

  export type FeesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    Records?: RecordsOrderByRelationAggregateInput
  }

  export type FeesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FeesWhereInput | FeesWhereInput[]
    OR?: FeesWhereInput[]
    NOT?: FeesWhereInput | FeesWhereInput[]
    name?: StringFilter<"Fees"> | string
    cost?: DecimalFilter<"Fees"> | Decimal | DecimalJsLike | number | string
    status?: BoolFilter<"Fees"> | boolean
    Records?: RecordsListRelationFilter
  }, "id" | "id">

  export type FeesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cost?: SortOrder
    status?: SortOrder
    _count?: FeesCountOrderByAggregateInput
    _avg?: FeesAvgOrderByAggregateInput
    _max?: FeesMaxOrderByAggregateInput
    _min?: FeesMinOrderByAggregateInput
    _sum?: FeesSumOrderByAggregateInput
  }

  export type FeesScalarWhereWithAggregatesInput = {
    AND?: FeesScalarWhereWithAggregatesInput | FeesScalarWhereWithAggregatesInput[]
    OR?: FeesScalarWhereWithAggregatesInput[]
    NOT?: FeesScalarWhereWithAggregatesInput | FeesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Fees"> | string
    name?: StringWithAggregatesFilter<"Fees"> | string
    cost?: DecimalWithAggregatesFilter<"Fees"> | Decimal | DecimalJsLike | number | string
    status?: BoolWithAggregatesFilter<"Fees"> | boolean
  }

  export type PhotoresistorsWhereInput = {
    AND?: PhotoresistorsWhereInput | PhotoresistorsWhereInput[]
    OR?: PhotoresistorsWhereInput[]
    NOT?: PhotoresistorsWhereInput | PhotoresistorsWhereInput[]
    id?: StringFilter<"Photoresistors"> | string
    status?: StringFilter<"Photoresistors"> | string
    createdAt?: DateTimeFilter<"Photoresistors"> | Date | string
  }

  export type PhotoresistorsOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoresistorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PhotoresistorsWhereInput | PhotoresistorsWhereInput[]
    OR?: PhotoresistorsWhereInput[]
    NOT?: PhotoresistorsWhereInput | PhotoresistorsWhereInput[]
    status?: StringFilter<"Photoresistors"> | string
    createdAt?: DateTimeFilter<"Photoresistors"> | Date | string
  }, "id" | "id">

  export type PhotoresistorsOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: PhotoresistorsCountOrderByAggregateInput
    _max?: PhotoresistorsMaxOrderByAggregateInput
    _min?: PhotoresistorsMinOrderByAggregateInput
  }

  export type PhotoresistorsScalarWhereWithAggregatesInput = {
    AND?: PhotoresistorsScalarWhereWithAggregatesInput | PhotoresistorsScalarWhereWithAggregatesInput[]
    OR?: PhotoresistorsScalarWhereWithAggregatesInput[]
    NOT?: PhotoresistorsScalarWhereWithAggregatesInput | PhotoresistorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Photoresistors"> | string
    status?: StringWithAggregatesFilter<"Photoresistors"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Photoresistors"> | Date | string
  }

  export type HumiditySensorsWhereInput = {
    AND?: HumiditySensorsWhereInput | HumiditySensorsWhereInput[]
    OR?: HumiditySensorsWhereInput[]
    NOT?: HumiditySensorsWhereInput | HumiditySensorsWhereInput[]
    id?: StringFilter<"HumiditySensors"> | string
    temperature?: DecimalFilter<"HumiditySensors"> | Decimal | DecimalJsLike | number | string
    humidity?: IntFilter<"HumiditySensors"> | number
    status?: BoolFilter<"HumiditySensors"> | boolean
    registeredAt?: DateTimeFilter<"HumiditySensors"> | Date | string
  }

  export type HumiditySensorsOrderByWithRelationInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
  }

  export type HumiditySensorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HumiditySensorsWhereInput | HumiditySensorsWhereInput[]
    OR?: HumiditySensorsWhereInput[]
    NOT?: HumiditySensorsWhereInput | HumiditySensorsWhereInput[]
    temperature?: DecimalFilter<"HumiditySensors"> | Decimal | DecimalJsLike | number | string
    humidity?: IntFilter<"HumiditySensors"> | number
    status?: BoolFilter<"HumiditySensors"> | boolean
    registeredAt?: DateTimeFilter<"HumiditySensors"> | Date | string
  }, "id" | "id">

  export type HumiditySensorsOrderByWithAggregationInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
    _count?: HumiditySensorsCountOrderByAggregateInput
    _avg?: HumiditySensorsAvgOrderByAggregateInput
    _max?: HumiditySensorsMaxOrderByAggregateInput
    _min?: HumiditySensorsMinOrderByAggregateInput
    _sum?: HumiditySensorsSumOrderByAggregateInput
  }

  export type HumiditySensorsScalarWhereWithAggregatesInput = {
    AND?: HumiditySensorsScalarWhereWithAggregatesInput | HumiditySensorsScalarWhereWithAggregatesInput[]
    OR?: HumiditySensorsScalarWhereWithAggregatesInput[]
    NOT?: HumiditySensorsScalarWhereWithAggregatesInput | HumiditySensorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HumiditySensors"> | string
    temperature?: DecimalWithAggregatesFilter<"HumiditySensors"> | Decimal | DecimalJsLike | number | string
    humidity?: IntWithAggregatesFilter<"HumiditySensors"> | number
    status?: BoolWithAggregatesFilter<"HumiditySensors"> | boolean
    registeredAt?: DateTimeWithAggregatesFilter<"HumiditySensors"> | Date | string
  }

  export type ProximitySensorWhereInput = {
    AND?: ProximitySensorWhereInput | ProximitySensorWhereInput[]
    OR?: ProximitySensorWhereInput[]
    NOT?: ProximitySensorWhereInput | ProximitySensorWhereInput[]
    id?: StringFilter<"ProximitySensor"> | string
    distance?: DecimalFilter<"ProximitySensor"> | Decimal | DecimalJsLike | number | string
    status?: BoolFilter<"ProximitySensor"> | boolean
    registeredAt?: DateTimeFilter<"ProximitySensor"> | Date | string
  }

  export type ProximitySensorOrderByWithRelationInput = {
    id?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
  }

  export type ProximitySensorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProximitySensorWhereInput | ProximitySensorWhereInput[]
    OR?: ProximitySensorWhereInput[]
    NOT?: ProximitySensorWhereInput | ProximitySensorWhereInput[]
    distance?: DecimalFilter<"ProximitySensor"> | Decimal | DecimalJsLike | number | string
    status?: BoolFilter<"ProximitySensor"> | boolean
    registeredAt?: DateTimeFilter<"ProximitySensor"> | Date | string
  }, "id" | "id">

  export type ProximitySensorOrderByWithAggregationInput = {
    id?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
    _count?: ProximitySensorCountOrderByAggregateInput
    _avg?: ProximitySensorAvgOrderByAggregateInput
    _max?: ProximitySensorMaxOrderByAggregateInput
    _min?: ProximitySensorMinOrderByAggregateInput
    _sum?: ProximitySensorSumOrderByAggregateInput
  }

  export type ProximitySensorScalarWhereWithAggregatesInput = {
    AND?: ProximitySensorScalarWhereWithAggregatesInput | ProximitySensorScalarWhereWithAggregatesInput[]
    OR?: ProximitySensorScalarWhereWithAggregatesInput[]
    NOT?: ProximitySensorScalarWhereWithAggregatesInput | ProximitySensorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProximitySensor"> | string
    distance?: DecimalWithAggregatesFilter<"ProximitySensor"> | Decimal | DecimalJsLike | number | string
    status?: BoolWithAggregatesFilter<"ProximitySensor"> | boolean
    registeredAt?: DateTimeWithAggregatesFilter<"ProximitySensor"> | Date | string
  }

  export type EmployeesCreateInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    email?: string | null
    username: string
    password: string
    token?: string | null
  }

  export type EmployeesUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    email?: string | null
    username: string
    password: string
    token?: string | null
  }

  export type EmployeesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeesCreateManyInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    email?: string | null
    username: string
    password: string
    token?: string | null
  }

  export type EmployeesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EmployeesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    token?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientsCreateInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    email?: string | null
    Vehicle?: VehiclesCreateNestedManyWithoutClientInput
  }

  export type ClientsUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    email?: string | null
    Vehicle?: VehiclesUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle?: VehiclesUpdateManyWithoutClientNestedInput
  }

  export type ClientsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    Vehicle?: VehiclesUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientsCreateManyInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    email?: string | null
  }

  export type ClientsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type VehiclesCreateInput = {
    id?: string
    plate: string
    brand: string
    model: string
    type: string
    client: ClientsCreateNestedOneWithoutVehicleInput
    Records?: RecordsCreateNestedManyWithoutVehicleInput
  }

  export type VehiclesUncheckedCreateInput = {
    id?: string
    plate: string
    brand: string
    model: string
    type: string
    owner: string
    Records?: RecordsUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehiclesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    client?: ClientsUpdateOneRequiredWithoutVehicleNestedInput
    Records?: RecordsUpdateManyWithoutVehicleNestedInput
  }

  export type VehiclesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
    Records?: RecordsUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehiclesCreateManyInput = {
    id?: string
    plate: string
    brand: string
    model: string
    type: string
    owner: string
  }

  export type VehiclesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type VehiclesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type RecordsCreateInput = {
    id?: string
    entryDate?: Date | string
    exitDate?: Date | string | null
    updatedAt?: Date | string
    vehicle: VehiclesCreateNestedOneWithoutRecordsInput
    fee: FeesCreateNestedOneWithoutRecordsInput
    slot: SlotsCreateNestedOneWithoutRecordsInput
  }

  export type RecordsUncheckedCreateInput = {
    id?: string
    entryDate?: Date | string
    exitDate?: Date | string | null
    vehicleId: string
    feeId: string
    slotId: string
    updatedAt?: Date | string
  }

  export type RecordsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehiclesUpdateOneRequiredWithoutRecordsNestedInput
    fee?: FeesUpdateOneRequiredWithoutRecordsNestedInput
    slot?: SlotsUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    feeId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsCreateManyInput = {
    id?: string
    entryDate?: Date | string
    exitDate?: Date | string | null
    vehicleId: string
    feeId: string
    slotId: string
    updatedAt?: Date | string
  }

  export type RecordsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    feeId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SlotsCreateInput = {
    id?: string
    number: number
    description?: string | null
    status?: boolean
    Records?: RecordsCreateNestedManyWithoutSlotInput
  }

  export type SlotsUncheckedCreateInput = {
    id?: string
    number: number
    description?: string | null
    status?: boolean
    Records?: RecordsUncheckedCreateNestedManyWithoutSlotInput
  }

  export type SlotsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    Records?: RecordsUpdateManyWithoutSlotNestedInput
  }

  export type SlotsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
    Records?: RecordsUncheckedUpdateManyWithoutSlotNestedInput
  }

  export type SlotsCreateManyInput = {
    id?: string
    number: number
    description?: string | null
    status?: boolean
  }

  export type SlotsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SlotsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeesCreateInput = {
    id?: string
    name: string
    cost: Decimal | DecimalJsLike | number | string
    status?: boolean
    Records?: RecordsCreateNestedManyWithoutFeeInput
  }

  export type FeesUncheckedCreateInput = {
    id?: string
    name: string
    cost: Decimal | DecimalJsLike | number | string
    status?: boolean
    Records?: RecordsUncheckedCreateNestedManyWithoutFeeInput
  }

  export type FeesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    Records?: RecordsUpdateManyWithoutFeeNestedInput
  }

  export type FeesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    Records?: RecordsUncheckedUpdateManyWithoutFeeNestedInput
  }

  export type FeesCreateManyInput = {
    id?: string
    name: string
    cost: Decimal | DecimalJsLike | number | string
    status?: boolean
  }

  export type FeesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PhotoresistorsCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
  }

  export type PhotoresistorsUncheckedCreateInput = {
    id?: string
    status: string
    createdAt?: Date | string
  }

  export type PhotoresistorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoresistorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoresistorsCreateManyInput = {
    id?: string
    status: string
    createdAt?: Date | string
  }

  export type PhotoresistorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PhotoresistorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumiditySensorsCreateInput = {
    id?: string
    temperature: Decimal | DecimalJsLike | number | string
    humidity: number
    status?: boolean
    registeredAt?: Date | string
  }

  export type HumiditySensorsUncheckedCreateInput = {
    id?: string
    temperature: Decimal | DecimalJsLike | number | string
    humidity: number
    status?: boolean
    registeredAt?: Date | string
  }

  export type HumiditySensorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    humidity?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumiditySensorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    humidity?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumiditySensorsCreateManyInput = {
    id?: string
    temperature: Decimal | DecimalJsLike | number | string
    humidity: number
    status?: boolean
    registeredAt?: Date | string
  }

  export type HumiditySensorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    humidity?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HumiditySensorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    temperature?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    humidity?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProximitySensorCreateInput = {
    id?: string
    distance: Decimal | DecimalJsLike | number | string
    status?: boolean
    registeredAt?: Date | string
  }

  export type ProximitySensorUncheckedCreateInput = {
    id?: string
    distance: Decimal | DecimalJsLike | number | string
    status?: boolean
    registeredAt?: Date | string
  }

  export type ProximitySensorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProximitySensorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProximitySensorCreateManyInput = {
    id?: string
    distance: Decimal | DecimalJsLike | number | string
    status?: boolean
    registeredAt?: Date | string
  }

  export type ProximitySensorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProximitySensorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    distance?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
    registeredAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EmployeesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrder
  }

  export type EmployeesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrder
  }

  export type EmployeesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
    username?: SortOrder
    password?: SortOrder
    token?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type VehiclesListRelationFilter = {
    every?: VehiclesWhereInput
    some?: VehiclesWhereInput
    none?: VehiclesWhereInput
  }

  export type VehiclesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
  }

  export type ClientsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
  }

  export type ClientsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    email?: SortOrder
  }

  export type ClientsRelationFilter = {
    is?: ClientsWhereInput
    isNot?: ClientsWhereInput
  }

  export type RecordsListRelationFilter = {
    every?: RecordsWhereInput
    some?: RecordsWhereInput
    none?: RecordsWhereInput
  }

  export type RecordsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehiclesCountOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    type?: SortOrder
    owner?: SortOrder
  }

  export type VehiclesMaxOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    type?: SortOrder
    owner?: SortOrder
  }

  export type VehiclesMinOrderByAggregateInput = {
    id?: SortOrder
    plate?: SortOrder
    brand?: SortOrder
    model?: SortOrder
    type?: SortOrder
    owner?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type VehiclesRelationFilter = {
    is?: VehiclesWhereInput
    isNot?: VehiclesWhereInput
  }

  export type FeesRelationFilter = {
    is?: FeesWhereInput
    isNot?: FeesWhereInput
  }

  export type SlotsRelationFilter = {
    is?: SlotsWhereInput
    isNot?: SlotsWhereInput
  }

  export type RecordsCountOrderByAggregateInput = {
    id?: SortOrder
    entryDate?: SortOrder
    exitDate?: SortOrder
    vehicleId?: SortOrder
    feeId?: SortOrder
    slotId?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecordsMaxOrderByAggregateInput = {
    id?: SortOrder
    entryDate?: SortOrder
    exitDate?: SortOrder
    vehicleId?: SortOrder
    feeId?: SortOrder
    slotId?: SortOrder
    updatedAt?: SortOrder
  }

  export type RecordsMinOrderByAggregateInput = {
    id?: SortOrder
    entryDate?: SortOrder
    exitDate?: SortOrder
    vehicleId?: SortOrder
    feeId?: SortOrder
    slotId?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SlotsCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type SlotsAvgOrderByAggregateInput = {
    number?: SortOrder
  }

  export type SlotsMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type SlotsMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
    description?: SortOrder
    status?: SortOrder
  }

  export type SlotsSumOrderByAggregateInput = {
    number?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type FeesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cost?: SortOrder
    status?: SortOrder
  }

  export type FeesAvgOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type FeesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cost?: SortOrder
    status?: SortOrder
  }

  export type FeesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cost?: SortOrder
    status?: SortOrder
  }

  export type FeesSumOrderByAggregateInput = {
    cost?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type PhotoresistorsCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoresistorsMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type PhotoresistorsMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type HumiditySensorsCountOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
  }

  export type HumiditySensorsAvgOrderByAggregateInput = {
    temperature?: SortOrder
    humidity?: SortOrder
  }

  export type HumiditySensorsMaxOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
  }

  export type HumiditySensorsMinOrderByAggregateInput = {
    id?: SortOrder
    temperature?: SortOrder
    humidity?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
  }

  export type HumiditySensorsSumOrderByAggregateInput = {
    temperature?: SortOrder
    humidity?: SortOrder
  }

  export type ProximitySensorCountOrderByAggregateInput = {
    id?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
  }

  export type ProximitySensorAvgOrderByAggregateInput = {
    distance?: SortOrder
  }

  export type ProximitySensorMaxOrderByAggregateInput = {
    id?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
  }

  export type ProximitySensorMinOrderByAggregateInput = {
    id?: SortOrder
    distance?: SortOrder
    status?: SortOrder
    registeredAt?: SortOrder
  }

  export type ProximitySensorSumOrderByAggregateInput = {
    distance?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type VehiclesCreateNestedManyWithoutClientInput = {
    create?: XOR<VehiclesCreateWithoutClientInput, VehiclesUncheckedCreateWithoutClientInput> | VehiclesCreateWithoutClientInput[] | VehiclesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: VehiclesCreateOrConnectWithoutClientInput | VehiclesCreateOrConnectWithoutClientInput[]
    createMany?: VehiclesCreateManyClientInputEnvelope
    connect?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
  }

  export type VehiclesUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<VehiclesCreateWithoutClientInput, VehiclesUncheckedCreateWithoutClientInput> | VehiclesCreateWithoutClientInput[] | VehiclesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: VehiclesCreateOrConnectWithoutClientInput | VehiclesCreateOrConnectWithoutClientInput[]
    createMany?: VehiclesCreateManyClientInputEnvelope
    connect?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
  }

  export type VehiclesUpdateManyWithoutClientNestedInput = {
    create?: XOR<VehiclesCreateWithoutClientInput, VehiclesUncheckedCreateWithoutClientInput> | VehiclesCreateWithoutClientInput[] | VehiclesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: VehiclesCreateOrConnectWithoutClientInput | VehiclesCreateOrConnectWithoutClientInput[]
    upsert?: VehiclesUpsertWithWhereUniqueWithoutClientInput | VehiclesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: VehiclesCreateManyClientInputEnvelope
    set?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    disconnect?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    delete?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    connect?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    update?: VehiclesUpdateWithWhereUniqueWithoutClientInput | VehiclesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: VehiclesUpdateManyWithWhereWithoutClientInput | VehiclesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: VehiclesScalarWhereInput | VehiclesScalarWhereInput[]
  }

  export type VehiclesUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<VehiclesCreateWithoutClientInput, VehiclesUncheckedCreateWithoutClientInput> | VehiclesCreateWithoutClientInput[] | VehiclesUncheckedCreateWithoutClientInput[]
    connectOrCreate?: VehiclesCreateOrConnectWithoutClientInput | VehiclesCreateOrConnectWithoutClientInput[]
    upsert?: VehiclesUpsertWithWhereUniqueWithoutClientInput | VehiclesUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: VehiclesCreateManyClientInputEnvelope
    set?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    disconnect?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    delete?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    connect?: VehiclesWhereUniqueInput | VehiclesWhereUniqueInput[]
    update?: VehiclesUpdateWithWhereUniqueWithoutClientInput | VehiclesUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: VehiclesUpdateManyWithWhereWithoutClientInput | VehiclesUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: VehiclesScalarWhereInput | VehiclesScalarWhereInput[]
  }

  export type ClientsCreateNestedOneWithoutVehicleInput = {
    create?: XOR<ClientsCreateWithoutVehicleInput, ClientsUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutVehicleInput
    connect?: ClientsWhereUniqueInput
  }

  export type RecordsCreateNestedManyWithoutVehicleInput = {
    create?: XOR<RecordsCreateWithoutVehicleInput, RecordsUncheckedCreateWithoutVehicleInput> | RecordsCreateWithoutVehicleInput[] | RecordsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutVehicleInput | RecordsCreateOrConnectWithoutVehicleInput[]
    createMany?: RecordsCreateManyVehicleInputEnvelope
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
  }

  export type RecordsUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<RecordsCreateWithoutVehicleInput, RecordsUncheckedCreateWithoutVehicleInput> | RecordsCreateWithoutVehicleInput[] | RecordsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutVehicleInput | RecordsCreateOrConnectWithoutVehicleInput[]
    createMany?: RecordsCreateManyVehicleInputEnvelope
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
  }

  export type ClientsUpdateOneRequiredWithoutVehicleNestedInput = {
    create?: XOR<ClientsCreateWithoutVehicleInput, ClientsUncheckedCreateWithoutVehicleInput>
    connectOrCreate?: ClientsCreateOrConnectWithoutVehicleInput
    upsert?: ClientsUpsertWithoutVehicleInput
    connect?: ClientsWhereUniqueInput
    update?: XOR<XOR<ClientsUpdateToOneWithWhereWithoutVehicleInput, ClientsUpdateWithoutVehicleInput>, ClientsUncheckedUpdateWithoutVehicleInput>
  }

  export type RecordsUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<RecordsCreateWithoutVehicleInput, RecordsUncheckedCreateWithoutVehicleInput> | RecordsCreateWithoutVehicleInput[] | RecordsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutVehicleInput | RecordsCreateOrConnectWithoutVehicleInput[]
    upsert?: RecordsUpsertWithWhereUniqueWithoutVehicleInput | RecordsUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: RecordsCreateManyVehicleInputEnvelope
    set?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    disconnect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    delete?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    update?: RecordsUpdateWithWhereUniqueWithoutVehicleInput | RecordsUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: RecordsUpdateManyWithWhereWithoutVehicleInput | RecordsUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
  }

  export type RecordsUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<RecordsCreateWithoutVehicleInput, RecordsUncheckedCreateWithoutVehicleInput> | RecordsCreateWithoutVehicleInput[] | RecordsUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutVehicleInput | RecordsCreateOrConnectWithoutVehicleInput[]
    upsert?: RecordsUpsertWithWhereUniqueWithoutVehicleInput | RecordsUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: RecordsCreateManyVehicleInputEnvelope
    set?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    disconnect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    delete?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    update?: RecordsUpdateWithWhereUniqueWithoutVehicleInput | RecordsUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: RecordsUpdateManyWithWhereWithoutVehicleInput | RecordsUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
  }

  export type VehiclesCreateNestedOneWithoutRecordsInput = {
    create?: XOR<VehiclesCreateWithoutRecordsInput, VehiclesUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: VehiclesCreateOrConnectWithoutRecordsInput
    connect?: VehiclesWhereUniqueInput
  }

  export type FeesCreateNestedOneWithoutRecordsInput = {
    create?: XOR<FeesCreateWithoutRecordsInput, FeesUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: FeesCreateOrConnectWithoutRecordsInput
    connect?: FeesWhereUniqueInput
  }

  export type SlotsCreateNestedOneWithoutRecordsInput = {
    create?: XOR<SlotsCreateWithoutRecordsInput, SlotsUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: SlotsCreateOrConnectWithoutRecordsInput
    connect?: SlotsWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type VehiclesUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<VehiclesCreateWithoutRecordsInput, VehiclesUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: VehiclesCreateOrConnectWithoutRecordsInput
    upsert?: VehiclesUpsertWithoutRecordsInput
    connect?: VehiclesWhereUniqueInput
    update?: XOR<XOR<VehiclesUpdateToOneWithWhereWithoutRecordsInput, VehiclesUpdateWithoutRecordsInput>, VehiclesUncheckedUpdateWithoutRecordsInput>
  }

  export type FeesUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<FeesCreateWithoutRecordsInput, FeesUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: FeesCreateOrConnectWithoutRecordsInput
    upsert?: FeesUpsertWithoutRecordsInput
    connect?: FeesWhereUniqueInput
    update?: XOR<XOR<FeesUpdateToOneWithWhereWithoutRecordsInput, FeesUpdateWithoutRecordsInput>, FeesUncheckedUpdateWithoutRecordsInput>
  }

  export type SlotsUpdateOneRequiredWithoutRecordsNestedInput = {
    create?: XOR<SlotsCreateWithoutRecordsInput, SlotsUncheckedCreateWithoutRecordsInput>
    connectOrCreate?: SlotsCreateOrConnectWithoutRecordsInput
    upsert?: SlotsUpsertWithoutRecordsInput
    connect?: SlotsWhereUniqueInput
    update?: XOR<XOR<SlotsUpdateToOneWithWhereWithoutRecordsInput, SlotsUpdateWithoutRecordsInput>, SlotsUncheckedUpdateWithoutRecordsInput>
  }

  export type RecordsCreateNestedManyWithoutSlotInput = {
    create?: XOR<RecordsCreateWithoutSlotInput, RecordsUncheckedCreateWithoutSlotInput> | RecordsCreateWithoutSlotInput[] | RecordsUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutSlotInput | RecordsCreateOrConnectWithoutSlotInput[]
    createMany?: RecordsCreateManySlotInputEnvelope
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
  }

  export type RecordsUncheckedCreateNestedManyWithoutSlotInput = {
    create?: XOR<RecordsCreateWithoutSlotInput, RecordsUncheckedCreateWithoutSlotInput> | RecordsCreateWithoutSlotInput[] | RecordsUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutSlotInput | RecordsCreateOrConnectWithoutSlotInput[]
    createMany?: RecordsCreateManySlotInputEnvelope
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type RecordsUpdateManyWithoutSlotNestedInput = {
    create?: XOR<RecordsCreateWithoutSlotInput, RecordsUncheckedCreateWithoutSlotInput> | RecordsCreateWithoutSlotInput[] | RecordsUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutSlotInput | RecordsCreateOrConnectWithoutSlotInput[]
    upsert?: RecordsUpsertWithWhereUniqueWithoutSlotInput | RecordsUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: RecordsCreateManySlotInputEnvelope
    set?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    disconnect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    delete?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    update?: RecordsUpdateWithWhereUniqueWithoutSlotInput | RecordsUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: RecordsUpdateManyWithWhereWithoutSlotInput | RecordsUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
  }

  export type RecordsUncheckedUpdateManyWithoutSlotNestedInput = {
    create?: XOR<RecordsCreateWithoutSlotInput, RecordsUncheckedCreateWithoutSlotInput> | RecordsCreateWithoutSlotInput[] | RecordsUncheckedCreateWithoutSlotInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutSlotInput | RecordsCreateOrConnectWithoutSlotInput[]
    upsert?: RecordsUpsertWithWhereUniqueWithoutSlotInput | RecordsUpsertWithWhereUniqueWithoutSlotInput[]
    createMany?: RecordsCreateManySlotInputEnvelope
    set?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    disconnect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    delete?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    update?: RecordsUpdateWithWhereUniqueWithoutSlotInput | RecordsUpdateWithWhereUniqueWithoutSlotInput[]
    updateMany?: RecordsUpdateManyWithWhereWithoutSlotInput | RecordsUpdateManyWithWhereWithoutSlotInput[]
    deleteMany?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
  }

  export type RecordsCreateNestedManyWithoutFeeInput = {
    create?: XOR<RecordsCreateWithoutFeeInput, RecordsUncheckedCreateWithoutFeeInput> | RecordsCreateWithoutFeeInput[] | RecordsUncheckedCreateWithoutFeeInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutFeeInput | RecordsCreateOrConnectWithoutFeeInput[]
    createMany?: RecordsCreateManyFeeInputEnvelope
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
  }

  export type RecordsUncheckedCreateNestedManyWithoutFeeInput = {
    create?: XOR<RecordsCreateWithoutFeeInput, RecordsUncheckedCreateWithoutFeeInput> | RecordsCreateWithoutFeeInput[] | RecordsUncheckedCreateWithoutFeeInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutFeeInput | RecordsCreateOrConnectWithoutFeeInput[]
    createMany?: RecordsCreateManyFeeInputEnvelope
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type RecordsUpdateManyWithoutFeeNestedInput = {
    create?: XOR<RecordsCreateWithoutFeeInput, RecordsUncheckedCreateWithoutFeeInput> | RecordsCreateWithoutFeeInput[] | RecordsUncheckedCreateWithoutFeeInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutFeeInput | RecordsCreateOrConnectWithoutFeeInput[]
    upsert?: RecordsUpsertWithWhereUniqueWithoutFeeInput | RecordsUpsertWithWhereUniqueWithoutFeeInput[]
    createMany?: RecordsCreateManyFeeInputEnvelope
    set?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    disconnect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    delete?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    update?: RecordsUpdateWithWhereUniqueWithoutFeeInput | RecordsUpdateWithWhereUniqueWithoutFeeInput[]
    updateMany?: RecordsUpdateManyWithWhereWithoutFeeInput | RecordsUpdateManyWithWhereWithoutFeeInput[]
    deleteMany?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
  }

  export type RecordsUncheckedUpdateManyWithoutFeeNestedInput = {
    create?: XOR<RecordsCreateWithoutFeeInput, RecordsUncheckedCreateWithoutFeeInput> | RecordsCreateWithoutFeeInput[] | RecordsUncheckedCreateWithoutFeeInput[]
    connectOrCreate?: RecordsCreateOrConnectWithoutFeeInput | RecordsCreateOrConnectWithoutFeeInput[]
    upsert?: RecordsUpsertWithWhereUniqueWithoutFeeInput | RecordsUpsertWithWhereUniqueWithoutFeeInput[]
    createMany?: RecordsCreateManyFeeInputEnvelope
    set?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    disconnect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    delete?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    connect?: RecordsWhereUniqueInput | RecordsWhereUniqueInput[]
    update?: RecordsUpdateWithWhereUniqueWithoutFeeInput | RecordsUpdateWithWhereUniqueWithoutFeeInput[]
    updateMany?: RecordsUpdateManyWithWhereWithoutFeeInput | RecordsUpdateManyWithWhereWithoutFeeInput[]
    deleteMany?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[]
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[]
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type VehiclesCreateWithoutClientInput = {
    id?: string
    plate: string
    brand: string
    model: string
    type: string
    Records?: RecordsCreateNestedManyWithoutVehicleInput
  }

  export type VehiclesUncheckedCreateWithoutClientInput = {
    id?: string
    plate: string
    brand: string
    model: string
    type: string
    Records?: RecordsUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehiclesCreateOrConnectWithoutClientInput = {
    where: VehiclesWhereUniqueInput
    create: XOR<VehiclesCreateWithoutClientInput, VehiclesUncheckedCreateWithoutClientInput>
  }

  export type VehiclesCreateManyClientInputEnvelope = {
    data: VehiclesCreateManyClientInput | VehiclesCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type VehiclesUpsertWithWhereUniqueWithoutClientInput = {
    where: VehiclesWhereUniqueInput
    update: XOR<VehiclesUpdateWithoutClientInput, VehiclesUncheckedUpdateWithoutClientInput>
    create: XOR<VehiclesCreateWithoutClientInput, VehiclesUncheckedCreateWithoutClientInput>
  }

  export type VehiclesUpdateWithWhereUniqueWithoutClientInput = {
    where: VehiclesWhereUniqueInput
    data: XOR<VehiclesUpdateWithoutClientInput, VehiclesUncheckedUpdateWithoutClientInput>
  }

  export type VehiclesUpdateManyWithWhereWithoutClientInput = {
    where: VehiclesScalarWhereInput
    data: XOR<VehiclesUpdateManyMutationInput, VehiclesUncheckedUpdateManyWithoutClientInput>
  }

  export type VehiclesScalarWhereInput = {
    AND?: VehiclesScalarWhereInput | VehiclesScalarWhereInput[]
    OR?: VehiclesScalarWhereInput[]
    NOT?: VehiclesScalarWhereInput | VehiclesScalarWhereInput[]
    id?: StringFilter<"Vehicles"> | string
    plate?: StringFilter<"Vehicles"> | string
    brand?: StringFilter<"Vehicles"> | string
    model?: StringFilter<"Vehicles"> | string
    type?: StringFilter<"Vehicles"> | string
    owner?: StringFilter<"Vehicles"> | string
  }

  export type ClientsCreateWithoutVehicleInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    email?: string | null
  }

  export type ClientsUncheckedCreateWithoutVehicleInput = {
    id?: string
    name: string
    address: string
    phoneNumber?: string | null
    email?: string | null
  }

  export type ClientsCreateOrConnectWithoutVehicleInput = {
    where: ClientsWhereUniqueInput
    create: XOR<ClientsCreateWithoutVehicleInput, ClientsUncheckedCreateWithoutVehicleInput>
  }

  export type RecordsCreateWithoutVehicleInput = {
    id?: string
    entryDate?: Date | string
    exitDate?: Date | string | null
    updatedAt?: Date | string
    fee: FeesCreateNestedOneWithoutRecordsInput
    slot: SlotsCreateNestedOneWithoutRecordsInput
  }

  export type RecordsUncheckedCreateWithoutVehicleInput = {
    id?: string
    entryDate?: Date | string
    exitDate?: Date | string | null
    feeId: string
    slotId: string
    updatedAt?: Date | string
  }

  export type RecordsCreateOrConnectWithoutVehicleInput = {
    where: RecordsWhereUniqueInput
    create: XOR<RecordsCreateWithoutVehicleInput, RecordsUncheckedCreateWithoutVehicleInput>
  }

  export type RecordsCreateManyVehicleInputEnvelope = {
    data: RecordsCreateManyVehicleInput | RecordsCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type ClientsUpsertWithoutVehicleInput = {
    update: XOR<ClientsUpdateWithoutVehicleInput, ClientsUncheckedUpdateWithoutVehicleInput>
    create: XOR<ClientsCreateWithoutVehicleInput, ClientsUncheckedCreateWithoutVehicleInput>
    where?: ClientsWhereInput
  }

  export type ClientsUpdateToOneWithWhereWithoutVehicleInput = {
    where?: ClientsWhereInput
    data: XOR<ClientsUpdateWithoutVehicleInput, ClientsUncheckedUpdateWithoutVehicleInput>
  }

  export type ClientsUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClientsUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RecordsUpsertWithWhereUniqueWithoutVehicleInput = {
    where: RecordsWhereUniqueInput
    update: XOR<RecordsUpdateWithoutVehicleInput, RecordsUncheckedUpdateWithoutVehicleInput>
    create: XOR<RecordsCreateWithoutVehicleInput, RecordsUncheckedCreateWithoutVehicleInput>
  }

  export type RecordsUpdateWithWhereUniqueWithoutVehicleInput = {
    where: RecordsWhereUniqueInput
    data: XOR<RecordsUpdateWithoutVehicleInput, RecordsUncheckedUpdateWithoutVehicleInput>
  }

  export type RecordsUpdateManyWithWhereWithoutVehicleInput = {
    where: RecordsScalarWhereInput
    data: XOR<RecordsUpdateManyMutationInput, RecordsUncheckedUpdateManyWithoutVehicleInput>
  }

  export type RecordsScalarWhereInput = {
    AND?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
    OR?: RecordsScalarWhereInput[]
    NOT?: RecordsScalarWhereInput | RecordsScalarWhereInput[]
    id?: StringFilter<"Records"> | string
    entryDate?: DateTimeFilter<"Records"> | Date | string
    exitDate?: DateTimeNullableFilter<"Records"> | Date | string | null
    vehicleId?: StringFilter<"Records"> | string
    feeId?: StringFilter<"Records"> | string
    slotId?: StringFilter<"Records"> | string
    updatedAt?: DateTimeFilter<"Records"> | Date | string
  }

  export type VehiclesCreateWithoutRecordsInput = {
    id?: string
    plate: string
    brand: string
    model: string
    type: string
    client: ClientsCreateNestedOneWithoutVehicleInput
  }

  export type VehiclesUncheckedCreateWithoutRecordsInput = {
    id?: string
    plate: string
    brand: string
    model: string
    type: string
    owner: string
  }

  export type VehiclesCreateOrConnectWithoutRecordsInput = {
    where: VehiclesWhereUniqueInput
    create: XOR<VehiclesCreateWithoutRecordsInput, VehiclesUncheckedCreateWithoutRecordsInput>
  }

  export type FeesCreateWithoutRecordsInput = {
    id?: string
    name: string
    cost: Decimal | DecimalJsLike | number | string
    status?: boolean
  }

  export type FeesUncheckedCreateWithoutRecordsInput = {
    id?: string
    name: string
    cost: Decimal | DecimalJsLike | number | string
    status?: boolean
  }

  export type FeesCreateOrConnectWithoutRecordsInput = {
    where: FeesWhereUniqueInput
    create: XOR<FeesCreateWithoutRecordsInput, FeesUncheckedCreateWithoutRecordsInput>
  }

  export type SlotsCreateWithoutRecordsInput = {
    id?: string
    number: number
    description?: string | null
    status?: boolean
  }

  export type SlotsUncheckedCreateWithoutRecordsInput = {
    id?: string
    number: number
    description?: string | null
    status?: boolean
  }

  export type SlotsCreateOrConnectWithoutRecordsInput = {
    where: SlotsWhereUniqueInput
    create: XOR<SlotsCreateWithoutRecordsInput, SlotsUncheckedCreateWithoutRecordsInput>
  }

  export type VehiclesUpsertWithoutRecordsInput = {
    update: XOR<VehiclesUpdateWithoutRecordsInput, VehiclesUncheckedUpdateWithoutRecordsInput>
    create: XOR<VehiclesCreateWithoutRecordsInput, VehiclesUncheckedCreateWithoutRecordsInput>
    where?: VehiclesWhereInput
  }

  export type VehiclesUpdateToOneWithWhereWithoutRecordsInput = {
    where?: VehiclesWhereInput
    data: XOR<VehiclesUpdateWithoutRecordsInput, VehiclesUncheckedUpdateWithoutRecordsInput>
  }

  export type VehiclesUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    client?: ClientsUpdateOneRequiredWithoutVehicleNestedInput
  }

  export type VehiclesUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    owner?: StringFieldUpdateOperationsInput | string
  }

  export type FeesUpsertWithoutRecordsInput = {
    update: XOR<FeesUpdateWithoutRecordsInput, FeesUncheckedUpdateWithoutRecordsInput>
    create: XOR<FeesCreateWithoutRecordsInput, FeesUncheckedCreateWithoutRecordsInput>
    where?: FeesWhereInput
  }

  export type FeesUpdateToOneWithWhereWithoutRecordsInput = {
    where?: FeesWhereInput
    data: XOR<FeesUpdateWithoutRecordsInput, FeesUncheckedUpdateWithoutRecordsInput>
  }

  export type FeesUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type FeesUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cost?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SlotsUpsertWithoutRecordsInput = {
    update: XOR<SlotsUpdateWithoutRecordsInput, SlotsUncheckedUpdateWithoutRecordsInput>
    create: XOR<SlotsCreateWithoutRecordsInput, SlotsUncheckedCreateWithoutRecordsInput>
    where?: SlotsWhereInput
  }

  export type SlotsUpdateToOneWithWhereWithoutRecordsInput = {
    where?: SlotsWhereInput
    data: XOR<SlotsUpdateWithoutRecordsInput, SlotsUncheckedUpdateWithoutRecordsInput>
  }

  export type SlotsUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SlotsUncheckedUpdateWithoutRecordsInput = {
    id?: StringFieldUpdateOperationsInput | string
    number?: IntFieldUpdateOperationsInput | number
    description?: NullableStringFieldUpdateOperationsInput | string | null
    status?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RecordsCreateWithoutSlotInput = {
    id?: string
    entryDate?: Date | string
    exitDate?: Date | string | null
    updatedAt?: Date | string
    vehicle: VehiclesCreateNestedOneWithoutRecordsInput
    fee: FeesCreateNestedOneWithoutRecordsInput
  }

  export type RecordsUncheckedCreateWithoutSlotInput = {
    id?: string
    entryDate?: Date | string
    exitDate?: Date | string | null
    vehicleId: string
    feeId: string
    updatedAt?: Date | string
  }

  export type RecordsCreateOrConnectWithoutSlotInput = {
    where: RecordsWhereUniqueInput
    create: XOR<RecordsCreateWithoutSlotInput, RecordsUncheckedCreateWithoutSlotInput>
  }

  export type RecordsCreateManySlotInputEnvelope = {
    data: RecordsCreateManySlotInput | RecordsCreateManySlotInput[]
    skipDuplicates?: boolean
  }

  export type RecordsUpsertWithWhereUniqueWithoutSlotInput = {
    where: RecordsWhereUniqueInput
    update: XOR<RecordsUpdateWithoutSlotInput, RecordsUncheckedUpdateWithoutSlotInput>
    create: XOR<RecordsCreateWithoutSlotInput, RecordsUncheckedCreateWithoutSlotInput>
  }

  export type RecordsUpdateWithWhereUniqueWithoutSlotInput = {
    where: RecordsWhereUniqueInput
    data: XOR<RecordsUpdateWithoutSlotInput, RecordsUncheckedUpdateWithoutSlotInput>
  }

  export type RecordsUpdateManyWithWhereWithoutSlotInput = {
    where: RecordsScalarWhereInput
    data: XOR<RecordsUpdateManyMutationInput, RecordsUncheckedUpdateManyWithoutSlotInput>
  }

  export type RecordsCreateWithoutFeeInput = {
    id?: string
    entryDate?: Date | string
    exitDate?: Date | string | null
    updatedAt?: Date | string
    vehicle: VehiclesCreateNestedOneWithoutRecordsInput
    slot: SlotsCreateNestedOneWithoutRecordsInput
  }

  export type RecordsUncheckedCreateWithoutFeeInput = {
    id?: string
    entryDate?: Date | string
    exitDate?: Date | string | null
    vehicleId: string
    slotId: string
    updatedAt?: Date | string
  }

  export type RecordsCreateOrConnectWithoutFeeInput = {
    where: RecordsWhereUniqueInput
    create: XOR<RecordsCreateWithoutFeeInput, RecordsUncheckedCreateWithoutFeeInput>
  }

  export type RecordsCreateManyFeeInputEnvelope = {
    data: RecordsCreateManyFeeInput | RecordsCreateManyFeeInput[]
    skipDuplicates?: boolean
  }

  export type RecordsUpsertWithWhereUniqueWithoutFeeInput = {
    where: RecordsWhereUniqueInput
    update: XOR<RecordsUpdateWithoutFeeInput, RecordsUncheckedUpdateWithoutFeeInput>
    create: XOR<RecordsCreateWithoutFeeInput, RecordsUncheckedCreateWithoutFeeInput>
  }

  export type RecordsUpdateWithWhereUniqueWithoutFeeInput = {
    where: RecordsWhereUniqueInput
    data: XOR<RecordsUpdateWithoutFeeInput, RecordsUncheckedUpdateWithoutFeeInput>
  }

  export type RecordsUpdateManyWithWhereWithoutFeeInput = {
    where: RecordsScalarWhereInput
    data: XOR<RecordsUpdateManyMutationInput, RecordsUncheckedUpdateManyWithoutFeeInput>
  }

  export type VehiclesCreateManyClientInput = {
    id?: string
    plate: string
    brand: string
    model: string
    type: string
  }

  export type VehiclesUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Records?: RecordsUpdateManyWithoutVehicleNestedInput
  }

  export type VehiclesUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    Records?: RecordsUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehiclesUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type RecordsCreateManyVehicleInput = {
    id?: string
    entryDate?: Date | string
    exitDate?: Date | string | null
    feeId: string
    slotId: string
    updatedAt?: Date | string
  }

  export type RecordsUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    fee?: FeesUpdateOneRequiredWithoutRecordsNestedInput
    slot?: SlotsUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordsUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feeId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    feeId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsCreateManySlotInput = {
    id?: string
    entryDate?: Date | string
    exitDate?: Date | string | null
    vehicleId: string
    feeId: string
    updatedAt?: Date | string
  }

  export type RecordsUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehiclesUpdateOneRequiredWithoutRecordsNestedInput
    fee?: FeesUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordsUncheckedUpdateWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    feeId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsUncheckedUpdateManyWithoutSlotInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    feeId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsCreateManyFeeInput = {
    id?: string
    entryDate?: Date | string
    exitDate?: Date | string | null
    vehicleId: string
    slotId: string
    updatedAt?: Date | string
  }

  export type RecordsUpdateWithoutFeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehiclesUpdateOneRequiredWithoutRecordsNestedInput
    slot?: SlotsUpdateOneRequiredWithoutRecordsNestedInput
  }

  export type RecordsUncheckedUpdateWithoutFeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RecordsUncheckedUpdateManyWithoutFeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    exitDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    vehicleId?: StringFieldUpdateOperationsInput | string
    slotId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ClientsCountOutputTypeDefaultArgs instead
     */
    export type ClientsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehiclesCountOutputTypeDefaultArgs instead
     */
    export type VehiclesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehiclesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SlotsCountOutputTypeDefaultArgs instead
     */
    export type SlotsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SlotsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeesCountOutputTypeDefaultArgs instead
     */
    export type FeesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EmployeesDefaultArgs instead
     */
    export type EmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EmployeesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientsDefaultArgs instead
     */
    export type ClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VehiclesDefaultArgs instead
     */
    export type VehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = VehiclesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RecordsDefaultArgs instead
     */
    export type RecordsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RecordsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SlotsDefaultArgs instead
     */
    export type SlotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SlotsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeesDefaultArgs instead
     */
    export type FeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FeesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PhotoresistorsDefaultArgs instead
     */
    export type PhotoresistorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PhotoresistorsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HumiditySensorsDefaultArgs instead
     */
    export type HumiditySensorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HumiditySensorsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProximitySensorDefaultArgs instead
     */
    export type ProximitySensorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProximitySensorDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}