
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Ipo
 * 
 */
export type Ipo = $Result.DefaultSelection<Prisma.$IpoPayload>
/**
 * Model Blog
 * 
 */
export type Blog = $Result.DefaultSelection<Prisma.$BlogPayload>
/**
 * Model Sector
 * 
 */
export type Sector = $Result.DefaultSelection<Prisma.$SectorPayload>
/**
 * Model SharkInvestor
 * 
 */
export type SharkInvestor = $Result.DefaultSelection<Prisma.$SharkInvestorPayload>
/**
 * Model Broker
 * 
 */
export type Broker = $Result.DefaultSelection<Prisma.$BrokerPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  USER: 'USER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const IpoStatus: {
  UPCOMING: 'UPCOMING',
  ONGOING: 'ONGOING',
  LISTED: 'LISTED'
};

export type IpoStatus = (typeof IpoStatus)[keyof typeof IpoStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type IpoStatus = $Enums.IpoStatus

export const IpoStatus: typeof $Enums.IpoStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ipo`: Exposes CRUD operations for the **Ipo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ipos
    * const ipos = await prisma.ipo.findMany()
    * ```
    */
  get ipo(): Prisma.IpoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sector`: Exposes CRUD operations for the **Sector** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sectors
    * const sectors = await prisma.sector.findMany()
    * ```
    */
  get sector(): Prisma.SectorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sharkInvestor`: Exposes CRUD operations for the **SharkInvestor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SharkInvestors
    * const sharkInvestors = await prisma.sharkInvestor.findMany()
    * ```
    */
  get sharkInvestor(): Prisma.SharkInvestorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.broker`: Exposes CRUD operations for the **Broker** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brokers
    * const brokers = await prisma.broker.findMany()
    * ```
    */
  get broker(): Prisma.BrokerDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Ipo: 'Ipo',
    Blog: 'Blog',
    Sector: 'Sector',
    SharkInvestor: 'SharkInvestor',
    Broker: 'Broker'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "ipo" | "blog" | "sector" | "sharkInvestor" | "broker"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Ipo: {
        payload: Prisma.$IpoPayload<ExtArgs>
        fields: Prisma.IpoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IpoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IpoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpoPayload>
          }
          findFirst: {
            args: Prisma.IpoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IpoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpoPayload>
          }
          findMany: {
            args: Prisma.IpoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpoPayload>[]
          }
          create: {
            args: Prisma.IpoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpoPayload>
          }
          createMany: {
            args: Prisma.IpoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IpoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpoPayload>[]
          }
          delete: {
            args: Prisma.IpoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpoPayload>
          }
          update: {
            args: Prisma.IpoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpoPayload>
          }
          deleteMany: {
            args: Prisma.IpoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IpoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IpoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpoPayload>[]
          }
          upsert: {
            args: Prisma.IpoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IpoPayload>
          }
          aggregate: {
            args: Prisma.IpoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIpo>
          }
          groupBy: {
            args: Prisma.IpoGroupByArgs<ExtArgs>
            result: $Utils.Optional<IpoGroupByOutputType>[]
          }
          count: {
            args: Prisma.IpoCountArgs<ExtArgs>
            result: $Utils.Optional<IpoCountAggregateOutputType> | number
          }
        }
      }
      Blog: {
        payload: Prisma.$BlogPayload<ExtArgs>
        fields: Prisma.BlogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findFirst: {
            args: Prisma.BlogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          findMany: {
            args: Prisma.BlogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          create: {
            args: Prisma.BlogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          createMany: {
            args: Prisma.BlogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BlogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          delete: {
            args: Prisma.BlogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          update: {
            args: Prisma.BlogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          deleteMany: {
            args: Prisma.BlogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BlogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BlogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>[]
          }
          upsert: {
            args: Prisma.BlogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BlogPayload>
          }
          aggregate: {
            args: Prisma.BlogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog>
          }
          groupBy: {
            args: Prisma.BlogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BlogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlogCountArgs<ExtArgs>
            result: $Utils.Optional<BlogCountAggregateOutputType> | number
          }
        }
      }
      Sector: {
        payload: Prisma.$SectorPayload<ExtArgs>
        fields: Prisma.SectorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SectorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SectorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          findFirst: {
            args: Prisma.SectorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SectorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          findMany: {
            args: Prisma.SectorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          create: {
            args: Prisma.SectorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          createMany: {
            args: Prisma.SectorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SectorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          delete: {
            args: Prisma.SectorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          update: {
            args: Prisma.SectorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          deleteMany: {
            args: Prisma.SectorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SectorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SectorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>[]
          }
          upsert: {
            args: Prisma.SectorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SectorPayload>
          }
          aggregate: {
            args: Prisma.SectorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSector>
          }
          groupBy: {
            args: Prisma.SectorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SectorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SectorCountArgs<ExtArgs>
            result: $Utils.Optional<SectorCountAggregateOutputType> | number
          }
        }
      }
      SharkInvestor: {
        payload: Prisma.$SharkInvestorPayload<ExtArgs>
        fields: Prisma.SharkInvestorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SharkInvestorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SharkInvestorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>
          }
          findFirst: {
            args: Prisma.SharkInvestorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SharkInvestorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>
          }
          findMany: {
            args: Prisma.SharkInvestorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>[]
          }
          create: {
            args: Prisma.SharkInvestorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>
          }
          createMany: {
            args: Prisma.SharkInvestorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SharkInvestorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>[]
          }
          delete: {
            args: Prisma.SharkInvestorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>
          }
          update: {
            args: Prisma.SharkInvestorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>
          }
          deleteMany: {
            args: Prisma.SharkInvestorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SharkInvestorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SharkInvestorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>[]
          }
          upsert: {
            args: Prisma.SharkInvestorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SharkInvestorPayload>
          }
          aggregate: {
            args: Prisma.SharkInvestorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSharkInvestor>
          }
          groupBy: {
            args: Prisma.SharkInvestorGroupByArgs<ExtArgs>
            result: $Utils.Optional<SharkInvestorGroupByOutputType>[]
          }
          count: {
            args: Prisma.SharkInvestorCountArgs<ExtArgs>
            result: $Utils.Optional<SharkInvestorCountAggregateOutputType> | number
          }
        }
      }
      Broker: {
        payload: Prisma.$BrokerPayload<ExtArgs>
        fields: Prisma.BrokerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrokerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrokerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>
          }
          findFirst: {
            args: Prisma.BrokerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrokerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>
          }
          findMany: {
            args: Prisma.BrokerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>[]
          }
          create: {
            args: Prisma.BrokerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>
          }
          createMany: {
            args: Prisma.BrokerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrokerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>[]
          }
          delete: {
            args: Prisma.BrokerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>
          }
          update: {
            args: Prisma.BrokerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>
          }
          deleteMany: {
            args: Prisma.BrokerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrokerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrokerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>[]
          }
          upsert: {
            args: Prisma.BrokerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrokerPayload>
          }
          aggregate: {
            args: Prisma.BrokerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBroker>
          }
          groupBy: {
            args: Prisma.BrokerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrokerGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrokerCountArgs<ExtArgs>
            result: $Utils.Optional<BrokerCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    ipo?: IpoOmit
    blog?: BlogOmit
    sector?: SectorOmit
    sharkInvestor?: SharkInvestorOmit
    broker?: BrokerOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    isEmailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationExpiry: Date | null
    forgotPasswordToken: string | null
    forgotPasswordExpiry: Date | null
    refreshToken: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phone: string | null
    isEmailVerified: boolean | null
    emailVerificationToken: string | null
    emailVerificationExpiry: Date | null
    forgotPasswordToken: string | null
    forgotPasswordExpiry: Date | null
    refreshToken: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phone: number
    isEmailVerified: number
    emailVerificationToken: number
    emailVerificationExpiry: number
    forgotPasswordToken: number
    forgotPasswordExpiry: number
    refreshToken: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationExpiry?: true
    forgotPasswordToken?: true
    forgotPasswordExpiry?: true
    refreshToken?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationExpiry?: true
    forgotPasswordToken?: true
    forgotPasswordExpiry?: true
    refreshToken?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phone?: true
    isEmailVerified?: true
    emailVerificationToken?: true
    emailVerificationExpiry?: true
    forgotPasswordToken?: true
    forgotPasswordExpiry?: true
    refreshToken?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    password: string
    phone: string
    isEmailVerified: boolean
    emailVerificationToken: string | null
    emailVerificationExpiry: Date | null
    forgotPasswordToken: string | null
    forgotPasswordExpiry: Date | null
    refreshToken: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordExpiry?: boolean
    refreshToken?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordExpiry?: boolean
    refreshToken?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordExpiry?: boolean
    refreshToken?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    isEmailVerified?: boolean
    emailVerificationToken?: boolean
    emailVerificationExpiry?: boolean
    forgotPasswordToken?: boolean
    forgotPasswordExpiry?: boolean
    refreshToken?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phone" | "isEmailVerified" | "emailVerificationToken" | "emailVerificationExpiry" | "forgotPasswordToken" | "forgotPasswordExpiry" | "refreshToken" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      password: string
      phone: string
      isEmailVerified: boolean
      emailVerificationToken: string | null
      emailVerificationExpiry: Date | null
      forgotPasswordToken: string | null
      forgotPasswordExpiry: Date | null
      refreshToken: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly isEmailVerified: FieldRef<"User", 'Boolean'>
    readonly emailVerificationToken: FieldRef<"User", 'String'>
    readonly emailVerificationExpiry: FieldRef<"User", 'DateTime'>
    readonly forgotPasswordToken: FieldRef<"User", 'String'>
    readonly forgotPasswordExpiry: FieldRef<"User", 'DateTime'>
    readonly refreshToken: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Ipo
   */

  export type AggregateIpo = {
    _count: IpoCountAggregateOutputType | null
    _min: IpoMinAggregateOutputType | null
    _max: IpoMaxAggregateOutputType | null
  }

  export type IpoMinAggregateOutputType = {
    id: string | null
    companyName: string | null
    priceBand: string | null
    openDate: Date | null
    closeDate: Date | null
    issueSize: string | null
    issueType: string | null
    listingDate: Date | null
    status: $Enums.IpoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IpoMaxAggregateOutputType = {
    id: string | null
    companyName: string | null
    priceBand: string | null
    openDate: Date | null
    closeDate: Date | null
    issueSize: string | null
    issueType: string | null
    listingDate: Date | null
    status: $Enums.IpoStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IpoCountAggregateOutputType = {
    id: number
    companyName: number
    priceBand: number
    openDate: number
    closeDate: number
    issueSize: number
    issueType: number
    listingDate: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IpoMinAggregateInputType = {
    id?: true
    companyName?: true
    priceBand?: true
    openDate?: true
    closeDate?: true
    issueSize?: true
    issueType?: true
    listingDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IpoMaxAggregateInputType = {
    id?: true
    companyName?: true
    priceBand?: true
    openDate?: true
    closeDate?: true
    issueSize?: true
    issueType?: true
    listingDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IpoCountAggregateInputType = {
    id?: true
    companyName?: true
    priceBand?: true
    openDate?: true
    closeDate?: true
    issueSize?: true
    issueType?: true
    listingDate?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IpoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ipo to aggregate.
     */
    where?: IpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ipos to fetch.
     */
    orderBy?: IpoOrderByWithRelationInput | IpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ipos
    **/
    _count?: true | IpoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IpoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IpoMaxAggregateInputType
  }

  export type GetIpoAggregateType<T extends IpoAggregateArgs> = {
        [P in keyof T & keyof AggregateIpo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIpo[P]>
      : GetScalarType<T[P], AggregateIpo[P]>
  }




  export type IpoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IpoWhereInput
    orderBy?: IpoOrderByWithAggregationInput | IpoOrderByWithAggregationInput[]
    by: IpoScalarFieldEnum[] | IpoScalarFieldEnum
    having?: IpoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IpoCountAggregateInputType | true
    _min?: IpoMinAggregateInputType
    _max?: IpoMaxAggregateInputType
  }

  export type IpoGroupByOutputType = {
    id: string
    companyName: string
    priceBand: string
    openDate: Date
    closeDate: Date
    issueSize: string
    issueType: string
    listingDate: Date
    status: $Enums.IpoStatus
    createdAt: Date
    updatedAt: Date
    _count: IpoCountAggregateOutputType | null
    _min: IpoMinAggregateOutputType | null
    _max: IpoMaxAggregateOutputType | null
  }

  type GetIpoGroupByPayload<T extends IpoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IpoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IpoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IpoGroupByOutputType[P]>
            : GetScalarType<T[P], IpoGroupByOutputType[P]>
        }
      >
    >


  export type IpoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ipo"]>

  export type IpoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ipo"]>

  export type IpoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ipo"]>

  export type IpoSelectScalar = {
    id?: boolean
    companyName?: boolean
    priceBand?: boolean
    openDate?: boolean
    closeDate?: boolean
    issueSize?: boolean
    issueType?: boolean
    listingDate?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IpoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "priceBand" | "openDate" | "closeDate" | "issueSize" | "issueType" | "listingDate" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["ipo"]>

  export type $IpoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ipo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyName: string
      priceBand: string
      openDate: Date
      closeDate: Date
      issueSize: string
      issueType: string
      listingDate: Date
      status: $Enums.IpoStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ipo"]>
    composites: {}
  }

  type IpoGetPayload<S extends boolean | null | undefined | IpoDefaultArgs> = $Result.GetResult<Prisma.$IpoPayload, S>

  type IpoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IpoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IpoCountAggregateInputType | true
    }

  export interface IpoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ipo'], meta: { name: 'Ipo' } }
    /**
     * Find zero or one Ipo that matches the filter.
     * @param {IpoFindUniqueArgs} args - Arguments to find a Ipo
     * @example
     * // Get one Ipo
     * const ipo = await prisma.ipo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IpoFindUniqueArgs>(args: SelectSubset<T, IpoFindUniqueArgs<ExtArgs>>): Prisma__IpoClient<$Result.GetResult<Prisma.$IpoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ipo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IpoFindUniqueOrThrowArgs} args - Arguments to find a Ipo
     * @example
     * // Get one Ipo
     * const ipo = await prisma.ipo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IpoFindUniqueOrThrowArgs>(args: SelectSubset<T, IpoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IpoClient<$Result.GetResult<Prisma.$IpoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ipo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpoFindFirstArgs} args - Arguments to find a Ipo
     * @example
     * // Get one Ipo
     * const ipo = await prisma.ipo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IpoFindFirstArgs>(args?: SelectSubset<T, IpoFindFirstArgs<ExtArgs>>): Prisma__IpoClient<$Result.GetResult<Prisma.$IpoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ipo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpoFindFirstOrThrowArgs} args - Arguments to find a Ipo
     * @example
     * // Get one Ipo
     * const ipo = await prisma.ipo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IpoFindFirstOrThrowArgs>(args?: SelectSubset<T, IpoFindFirstOrThrowArgs<ExtArgs>>): Prisma__IpoClient<$Result.GetResult<Prisma.$IpoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ipos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ipos
     * const ipos = await prisma.ipo.findMany()
     * 
     * // Get first 10 Ipos
     * const ipos = await prisma.ipo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ipoWithIdOnly = await prisma.ipo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IpoFindManyArgs>(args?: SelectSubset<T, IpoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IpoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ipo.
     * @param {IpoCreateArgs} args - Arguments to create a Ipo.
     * @example
     * // Create one Ipo
     * const Ipo = await prisma.ipo.create({
     *   data: {
     *     // ... data to create a Ipo
     *   }
     * })
     * 
     */
    create<T extends IpoCreateArgs>(args: SelectSubset<T, IpoCreateArgs<ExtArgs>>): Prisma__IpoClient<$Result.GetResult<Prisma.$IpoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Ipos.
     * @param {IpoCreateManyArgs} args - Arguments to create many Ipos.
     * @example
     * // Create many Ipos
     * const ipo = await prisma.ipo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IpoCreateManyArgs>(args?: SelectSubset<T, IpoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ipos and returns the data saved in the database.
     * @param {IpoCreateManyAndReturnArgs} args - Arguments to create many Ipos.
     * @example
     * // Create many Ipos
     * const ipo = await prisma.ipo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ipos and only return the `id`
     * const ipoWithIdOnly = await prisma.ipo.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IpoCreateManyAndReturnArgs>(args?: SelectSubset<T, IpoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IpoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ipo.
     * @param {IpoDeleteArgs} args - Arguments to delete one Ipo.
     * @example
     * // Delete one Ipo
     * const Ipo = await prisma.ipo.delete({
     *   where: {
     *     // ... filter to delete one Ipo
     *   }
     * })
     * 
     */
    delete<T extends IpoDeleteArgs>(args: SelectSubset<T, IpoDeleteArgs<ExtArgs>>): Prisma__IpoClient<$Result.GetResult<Prisma.$IpoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ipo.
     * @param {IpoUpdateArgs} args - Arguments to update one Ipo.
     * @example
     * // Update one Ipo
     * const ipo = await prisma.ipo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IpoUpdateArgs>(args: SelectSubset<T, IpoUpdateArgs<ExtArgs>>): Prisma__IpoClient<$Result.GetResult<Prisma.$IpoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ipos.
     * @param {IpoDeleteManyArgs} args - Arguments to filter Ipos to delete.
     * @example
     * // Delete a few Ipos
     * const { count } = await prisma.ipo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IpoDeleteManyArgs>(args?: SelectSubset<T, IpoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ipos
     * const ipo = await prisma.ipo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IpoUpdateManyArgs>(args: SelectSubset<T, IpoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ipos and returns the data updated in the database.
     * @param {IpoUpdateManyAndReturnArgs} args - Arguments to update many Ipos.
     * @example
     * // Update many Ipos
     * const ipo = await prisma.ipo.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ipos and only return the `id`
     * const ipoWithIdOnly = await prisma.ipo.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IpoUpdateManyAndReturnArgs>(args: SelectSubset<T, IpoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IpoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ipo.
     * @param {IpoUpsertArgs} args - Arguments to update or create a Ipo.
     * @example
     * // Update or create a Ipo
     * const ipo = await prisma.ipo.upsert({
     *   create: {
     *     // ... data to create a Ipo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ipo we want to update
     *   }
     * })
     */
    upsert<T extends IpoUpsertArgs>(args: SelectSubset<T, IpoUpsertArgs<ExtArgs>>): Prisma__IpoClient<$Result.GetResult<Prisma.$IpoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Ipos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpoCountArgs} args - Arguments to filter Ipos to count.
     * @example
     * // Count the number of Ipos
     * const count = await prisma.ipo.count({
     *   where: {
     *     // ... the filter for the Ipos we want to count
     *   }
     * })
    **/
    count<T extends IpoCountArgs>(
      args?: Subset<T, IpoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IpoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IpoAggregateArgs>(args: Subset<T, IpoAggregateArgs>): Prisma.PrismaPromise<GetIpoAggregateType<T>>

    /**
     * Group by Ipo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IpoGroupByArgs} args - Group by arguments.
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
      T extends IpoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IpoGroupByArgs['orderBy'] }
        : { orderBy?: IpoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IpoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIpoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ipo model
   */
  readonly fields: IpoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ipo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IpoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ipo model
   */
  interface IpoFieldRefs {
    readonly id: FieldRef<"Ipo", 'String'>
    readonly companyName: FieldRef<"Ipo", 'String'>
    readonly priceBand: FieldRef<"Ipo", 'String'>
    readonly openDate: FieldRef<"Ipo", 'DateTime'>
    readonly closeDate: FieldRef<"Ipo", 'DateTime'>
    readonly issueSize: FieldRef<"Ipo", 'String'>
    readonly issueType: FieldRef<"Ipo", 'String'>
    readonly listingDate: FieldRef<"Ipo", 'DateTime'>
    readonly status: FieldRef<"Ipo", 'IpoStatus'>
    readonly createdAt: FieldRef<"Ipo", 'DateTime'>
    readonly updatedAt: FieldRef<"Ipo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ipo findUnique
   */
  export type IpoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ipo
     */
    select?: IpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ipo
     */
    omit?: IpoOmit<ExtArgs> | null
    /**
     * Filter, which Ipo to fetch.
     */
    where: IpoWhereUniqueInput
  }

  /**
   * Ipo findUniqueOrThrow
   */
  export type IpoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ipo
     */
    select?: IpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ipo
     */
    omit?: IpoOmit<ExtArgs> | null
    /**
     * Filter, which Ipo to fetch.
     */
    where: IpoWhereUniqueInput
  }

  /**
   * Ipo findFirst
   */
  export type IpoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ipo
     */
    select?: IpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ipo
     */
    omit?: IpoOmit<ExtArgs> | null
    /**
     * Filter, which Ipo to fetch.
     */
    where?: IpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ipos to fetch.
     */
    orderBy?: IpoOrderByWithRelationInput | IpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ipos.
     */
    cursor?: IpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ipos.
     */
    distinct?: IpoScalarFieldEnum | IpoScalarFieldEnum[]
  }

  /**
   * Ipo findFirstOrThrow
   */
  export type IpoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ipo
     */
    select?: IpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ipo
     */
    omit?: IpoOmit<ExtArgs> | null
    /**
     * Filter, which Ipo to fetch.
     */
    where?: IpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ipos to fetch.
     */
    orderBy?: IpoOrderByWithRelationInput | IpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ipos.
     */
    cursor?: IpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ipos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ipos.
     */
    distinct?: IpoScalarFieldEnum | IpoScalarFieldEnum[]
  }

  /**
   * Ipo findMany
   */
  export type IpoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ipo
     */
    select?: IpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ipo
     */
    omit?: IpoOmit<ExtArgs> | null
    /**
     * Filter, which Ipos to fetch.
     */
    where?: IpoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ipos to fetch.
     */
    orderBy?: IpoOrderByWithRelationInput | IpoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ipos.
     */
    cursor?: IpoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ipos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ipos.
     */
    skip?: number
    distinct?: IpoScalarFieldEnum | IpoScalarFieldEnum[]
  }

  /**
   * Ipo create
   */
  export type IpoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ipo
     */
    select?: IpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ipo
     */
    omit?: IpoOmit<ExtArgs> | null
    /**
     * The data needed to create a Ipo.
     */
    data: XOR<IpoCreateInput, IpoUncheckedCreateInput>
  }

  /**
   * Ipo createMany
   */
  export type IpoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ipos.
     */
    data: IpoCreateManyInput | IpoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ipo createManyAndReturn
   */
  export type IpoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ipo
     */
    select?: IpoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ipo
     */
    omit?: IpoOmit<ExtArgs> | null
    /**
     * The data used to create many Ipos.
     */
    data: IpoCreateManyInput | IpoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ipo update
   */
  export type IpoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ipo
     */
    select?: IpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ipo
     */
    omit?: IpoOmit<ExtArgs> | null
    /**
     * The data needed to update a Ipo.
     */
    data: XOR<IpoUpdateInput, IpoUncheckedUpdateInput>
    /**
     * Choose, which Ipo to update.
     */
    where: IpoWhereUniqueInput
  }

  /**
   * Ipo updateMany
   */
  export type IpoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ipos.
     */
    data: XOR<IpoUpdateManyMutationInput, IpoUncheckedUpdateManyInput>
    /**
     * Filter which Ipos to update
     */
    where?: IpoWhereInput
    /**
     * Limit how many Ipos to update.
     */
    limit?: number
  }

  /**
   * Ipo updateManyAndReturn
   */
  export type IpoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ipo
     */
    select?: IpoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ipo
     */
    omit?: IpoOmit<ExtArgs> | null
    /**
     * The data used to update Ipos.
     */
    data: XOR<IpoUpdateManyMutationInput, IpoUncheckedUpdateManyInput>
    /**
     * Filter which Ipos to update
     */
    where?: IpoWhereInput
    /**
     * Limit how many Ipos to update.
     */
    limit?: number
  }

  /**
   * Ipo upsert
   */
  export type IpoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ipo
     */
    select?: IpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ipo
     */
    omit?: IpoOmit<ExtArgs> | null
    /**
     * The filter to search for the Ipo to update in case it exists.
     */
    where: IpoWhereUniqueInput
    /**
     * In case the Ipo found by the `where` argument doesn't exist, create a new Ipo with this data.
     */
    create: XOR<IpoCreateInput, IpoUncheckedCreateInput>
    /**
     * In case the Ipo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IpoUpdateInput, IpoUncheckedUpdateInput>
  }

  /**
   * Ipo delete
   */
  export type IpoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ipo
     */
    select?: IpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ipo
     */
    omit?: IpoOmit<ExtArgs> | null
    /**
     * Filter which Ipo to delete.
     */
    where: IpoWhereUniqueInput
  }

  /**
   * Ipo deleteMany
   */
  export type IpoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ipos to delete
     */
    where?: IpoWhereInput
    /**
     * Limit how many Ipos to delete.
     */
    limit?: number
  }

  /**
   * Ipo without action
   */
  export type IpoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ipo
     */
    select?: IpoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ipo
     */
    omit?: IpoOmit<ExtArgs> | null
  }


  /**
   * Model Blog
   */

  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  export type BlogMinAggregateOutputType = {
    id: string | null
    title: string | null
    imageUrl: string | null
    publishDate: Date | null
    externalLink: string | null
  }

  export type BlogMaxAggregateOutputType = {
    id: string | null
    title: string | null
    imageUrl: string | null
    publishDate: Date | null
    externalLink: string | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    title: number
    imageUrl: number
    publishDate: number
    externalLink: number
    _all: number
  }


  export type BlogMinAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    publishDate?: true
    externalLink?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    publishDate?: true
    externalLink?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    title?: true
    imageUrl?: true
    publishDate?: true
    externalLink?: true
    _all?: true
  }

  export type BlogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog to aggregate.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }




  export type BlogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BlogWhereInput
    orderBy?: BlogOrderByWithAggregationInput | BlogOrderByWithAggregationInput[]
    by: BlogScalarFieldEnum[] | BlogScalarFieldEnum
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }

  export type BlogGroupByOutputType = {
    id: string
    title: string
    imageUrl: string
    publishDate: Date
    externalLink: string
    _count: BlogCountAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlogGroupByOutputType[P]>
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      >
    >


  export type BlogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    publishDate?: boolean
    externalLink?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    publishDate?: boolean
    externalLink?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    publishDate?: boolean
    externalLink?: boolean
  }, ExtArgs["result"]["blog"]>

  export type BlogSelectScalar = {
    id?: boolean
    title?: boolean
    imageUrl?: boolean
    publishDate?: boolean
    externalLink?: boolean
  }

  export type BlogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "imageUrl" | "publishDate" | "externalLink", ExtArgs["result"]["blog"]>

  export type $BlogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      imageUrl: string
      publishDate: Date
      externalLink: string
    }, ExtArgs["result"]["blog"]>
    composites: {}
  }

  type BlogGetPayload<S extends boolean | null | undefined | BlogDefaultArgs> = $Result.GetResult<Prisma.$BlogPayload, S>

  type BlogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BlogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BlogCountAggregateInputType | true
    }

  export interface BlogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog'], meta: { name: 'Blog' } }
    /**
     * Find zero or one Blog that matches the filter.
     * @param {BlogFindUniqueArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BlogFindUniqueArgs>(args: SelectSubset<T, BlogFindUniqueArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BlogFindUniqueOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BlogFindUniqueOrThrowArgs>(args: SelectSubset<T, BlogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BlogFindFirstArgs>(args?: SelectSubset<T, BlogFindFirstArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindFirstOrThrowArgs} args - Arguments to find a Blog
     * @example
     * // Get one Blog
     * const blog = await prisma.blog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BlogFindFirstOrThrowArgs>(args?: SelectSubset<T, BlogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blogs
     * const blogs = await prisma.blog.findMany()
     * 
     * // Get first 10 Blogs
     * const blogs = await prisma.blog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogWithIdOnly = await prisma.blog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BlogFindManyArgs>(args?: SelectSubset<T, BlogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog.
     * @param {BlogCreateArgs} args - Arguments to create a Blog.
     * @example
     * // Create one Blog
     * const Blog = await prisma.blog.create({
     *   data: {
     *     // ... data to create a Blog
     *   }
     * })
     * 
     */
    create<T extends BlogCreateArgs>(args: SelectSubset<T, BlogCreateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blogs.
     * @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BlogCreateManyArgs>(args?: SelectSubset<T, BlogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blogs and returns the data saved in the database.
     * @param {BlogCreateManyAndReturnArgs} args - Arguments to create many Blogs.
     * @example
     * // Create many Blogs
     * const blog = await prisma.blog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BlogCreateManyAndReturnArgs>(args?: SelectSubset<T, BlogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog.
     * @param {BlogDeleteArgs} args - Arguments to delete one Blog.
     * @example
     * // Delete one Blog
     * const Blog = await prisma.blog.delete({
     *   where: {
     *     // ... filter to delete one Blog
     *   }
     * })
     * 
     */
    delete<T extends BlogDeleteArgs>(args: SelectSubset<T, BlogDeleteArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog.
     * @param {BlogUpdateArgs} args - Arguments to update one Blog.
     * @example
     * // Update one Blog
     * const blog = await prisma.blog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BlogUpdateArgs>(args: SelectSubset<T, BlogUpdateArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blogs.
     * @param {BlogDeleteManyArgs} args - Arguments to filter Blogs to delete.
     * @example
     * // Delete a few Blogs
     * const { count } = await prisma.blog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BlogDeleteManyArgs>(args?: SelectSubset<T, BlogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BlogUpdateManyArgs>(args: SelectSubset<T, BlogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blogs and returns the data updated in the database.
     * @param {BlogUpdateManyAndReturnArgs} args - Arguments to update many Blogs.
     * @example
     * // Update many Blogs
     * const blog = await prisma.blog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blogs and only return the `id`
     * const blogWithIdOnly = await prisma.blog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BlogUpdateManyAndReturnArgs>(args: SelectSubset<T, BlogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog.
     * @param {BlogUpsertArgs} args - Arguments to update or create a Blog.
     * @example
     * // Update or create a Blog
     * const blog = await prisma.blog.upsert({
     *   create: {
     *     // ... data to create a Blog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog we want to update
     *   }
     * })
     */
    upsert<T extends BlogUpsertArgs>(args: SelectSubset<T, BlogUpsertArgs<ExtArgs>>): Prisma__BlogClient<$Result.GetResult<Prisma.$BlogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogCountArgs} args - Arguments to filter Blogs to count.
     * @example
     * // Count the number of Blogs
     * const count = await prisma.blog.count({
     *   where: {
     *     // ... the filter for the Blogs we want to count
     *   }
     * })
    **/
    count<T extends BlogCountArgs>(
      args?: Subset<T, BlogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): Prisma.PrismaPromise<GetBlogAggregateType<T>>

    /**
     * Group by Blog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogGroupByArgs} args - Group by arguments.
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
      T extends BlogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogGroupByArgs['orderBy'] }
        : { orderBy?: BlogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog model
   */
  readonly fields: BlogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog model
   */
  interface BlogFieldRefs {
    readonly id: FieldRef<"Blog", 'String'>
    readonly title: FieldRef<"Blog", 'String'>
    readonly imageUrl: FieldRef<"Blog", 'String'>
    readonly publishDate: FieldRef<"Blog", 'DateTime'>
    readonly externalLink: FieldRef<"Blog", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findUniqueOrThrow
   */
  export type BlogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findFirstOrThrow
   */
  export type BlogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blog to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     */
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog findMany
   */
  export type BlogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter, which Blogs to fetch.
     */
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     */
    orderBy?: BlogOrderByWithRelationInput | BlogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     */
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     */
    skip?: number
    distinct?: BlogScalarFieldEnum | BlogScalarFieldEnum[]
  }

  /**
   * Blog create
   */
  export type BlogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to create a Blog.
     */
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }

  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog createManyAndReturn
   */
  export type BlogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to create many Blogs.
     */
    data: BlogCreateManyInput | BlogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog update
   */
  export type BlogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data needed to update a Blog.
     */
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog updateManyAndReturn
   */
  export type BlogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The data used to update Blogs.
     */
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    /**
     * Filter which Blogs to update
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to update.
     */
    limit?: number
  }

  /**
   * Blog upsert
   */
  export type BlogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * The filter to search for the Blog to update in case it exists.
     */
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     */
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }

  /**
   * Blog delete
   */
  export type BlogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
    /**
     * Filter which Blog to delete.
     */
    where: BlogWhereUniqueInput
  }

  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blogs to delete
     */
    where?: BlogWhereInput
    /**
     * Limit how many Blogs to delete.
     */
    limit?: number
  }

  /**
   * Blog without action
   */
  export type BlogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog
     */
    select?: BlogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Blog
     */
    omit?: BlogOmit<ExtArgs> | null
  }


  /**
   * Model Sector
   */

  export type AggregateSector = {
    _count: SectorCountAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  export type SectorMinAggregateOutputType = {
    id: string | null
    sectorName: string | null
    sectorDesc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectorMaxAggregateOutputType = {
    id: string | null
    sectorName: string | null
    sectorDesc: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SectorCountAggregateOutputType = {
    id: number
    sectorName: number
    sectorDesc: number
    marketCaps: number
    marketInsights: number
    opportunities: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SectorMinAggregateInputType = {
    id?: true
    sectorName?: true
    sectorDesc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectorMaxAggregateInputType = {
    id?: true
    sectorName?: true
    sectorDesc?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SectorCountAggregateInputType = {
    id?: true
    sectorName?: true
    sectorDesc?: true
    marketCaps?: true
    marketInsights?: true
    opportunities?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SectorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sector to aggregate.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sectors
    **/
    _count?: true | SectorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SectorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SectorMaxAggregateInputType
  }

  export type GetSectorAggregateType<T extends SectorAggregateArgs> = {
        [P in keyof T & keyof AggregateSector]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSector[P]>
      : GetScalarType<T[P], AggregateSector[P]>
  }




  export type SectorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SectorWhereInput
    orderBy?: SectorOrderByWithAggregationInput | SectorOrderByWithAggregationInput[]
    by: SectorScalarFieldEnum[] | SectorScalarFieldEnum
    having?: SectorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SectorCountAggregateInputType | true
    _min?: SectorMinAggregateInputType
    _max?: SectorMaxAggregateInputType
  }

  export type SectorGroupByOutputType = {
    id: string
    sectorName: string
    sectorDesc: string
    marketCaps: JsonValue
    marketInsights: JsonValue
    opportunities: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: SectorCountAggregateOutputType | null
    _min: SectorMinAggregateOutputType | null
    _max: SectorMaxAggregateOutputType | null
  }

  type GetSectorGroupByPayload<T extends SectorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SectorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SectorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SectorGroupByOutputType[P]>
            : GetScalarType<T[P], SectorGroupByOutputType[P]>
        }
      >
    >


  export type SectorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectorName?: boolean
    sectorDesc?: boolean
    marketCaps?: boolean
    marketInsights?: boolean
    opportunities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectorName?: boolean
    sectorDesc?: boolean
    marketCaps?: boolean
    marketInsights?: boolean
    opportunities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sectorName?: boolean
    sectorDesc?: boolean
    marketCaps?: boolean
    marketInsights?: boolean
    opportunities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sector"]>

  export type SectorSelectScalar = {
    id?: boolean
    sectorName?: boolean
    sectorDesc?: boolean
    marketCaps?: boolean
    marketInsights?: boolean
    opportunities?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SectorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sectorName" | "sectorDesc" | "marketCaps" | "marketInsights" | "opportunities" | "createdAt" | "updatedAt", ExtArgs["result"]["sector"]>

  export type $SectorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sector"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sectorName: string
      sectorDesc: string
      marketCaps: Prisma.JsonValue
      marketInsights: Prisma.JsonValue
      opportunities: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sector"]>
    composites: {}
  }

  type SectorGetPayload<S extends boolean | null | undefined | SectorDefaultArgs> = $Result.GetResult<Prisma.$SectorPayload, S>

  type SectorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SectorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SectorCountAggregateInputType | true
    }

  export interface SectorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sector'], meta: { name: 'Sector' } }
    /**
     * Find zero or one Sector that matches the filter.
     * @param {SectorFindUniqueArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SectorFindUniqueArgs>(args: SelectSubset<T, SectorFindUniqueArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sector that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SectorFindUniqueOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SectorFindUniqueOrThrowArgs>(args: SelectSubset<T, SectorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sector that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindFirstArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SectorFindFirstArgs>(args?: SelectSubset<T, SectorFindFirstArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sector that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindFirstOrThrowArgs} args - Arguments to find a Sector
     * @example
     * // Get one Sector
     * const sector = await prisma.sector.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SectorFindFirstOrThrowArgs>(args?: SelectSubset<T, SectorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sectors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sectors
     * const sectors = await prisma.sector.findMany()
     * 
     * // Get first 10 Sectors
     * const sectors = await prisma.sector.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sectorWithIdOnly = await prisma.sector.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SectorFindManyArgs>(args?: SelectSubset<T, SectorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sector.
     * @param {SectorCreateArgs} args - Arguments to create a Sector.
     * @example
     * // Create one Sector
     * const Sector = await prisma.sector.create({
     *   data: {
     *     // ... data to create a Sector
     *   }
     * })
     * 
     */
    create<T extends SectorCreateArgs>(args: SelectSubset<T, SectorCreateArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sectors.
     * @param {SectorCreateManyArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SectorCreateManyArgs>(args?: SelectSubset<T, SectorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sectors and returns the data saved in the database.
     * @param {SectorCreateManyAndReturnArgs} args - Arguments to create many Sectors.
     * @example
     * // Create many Sectors
     * const sector = await prisma.sector.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SectorCreateManyAndReturnArgs>(args?: SelectSubset<T, SectorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sector.
     * @param {SectorDeleteArgs} args - Arguments to delete one Sector.
     * @example
     * // Delete one Sector
     * const Sector = await prisma.sector.delete({
     *   where: {
     *     // ... filter to delete one Sector
     *   }
     * })
     * 
     */
    delete<T extends SectorDeleteArgs>(args: SelectSubset<T, SectorDeleteArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sector.
     * @param {SectorUpdateArgs} args - Arguments to update one Sector.
     * @example
     * // Update one Sector
     * const sector = await prisma.sector.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SectorUpdateArgs>(args: SelectSubset<T, SectorUpdateArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sectors.
     * @param {SectorDeleteManyArgs} args - Arguments to filter Sectors to delete.
     * @example
     * // Delete a few Sectors
     * const { count } = await prisma.sector.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SectorDeleteManyArgs>(args?: SelectSubset<T, SectorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SectorUpdateManyArgs>(args: SelectSubset<T, SectorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sectors and returns the data updated in the database.
     * @param {SectorUpdateManyAndReturnArgs} args - Arguments to update many Sectors.
     * @example
     * // Update many Sectors
     * const sector = await prisma.sector.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sectors and only return the `id`
     * const sectorWithIdOnly = await prisma.sector.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SectorUpdateManyAndReturnArgs>(args: SelectSubset<T, SectorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sector.
     * @param {SectorUpsertArgs} args - Arguments to update or create a Sector.
     * @example
     * // Update or create a Sector
     * const sector = await prisma.sector.upsert({
     *   create: {
     *     // ... data to create a Sector
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sector we want to update
     *   }
     * })
     */
    upsert<T extends SectorUpsertArgs>(args: SelectSubset<T, SectorUpsertArgs<ExtArgs>>): Prisma__SectorClient<$Result.GetResult<Prisma.$SectorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sectors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorCountArgs} args - Arguments to filter Sectors to count.
     * @example
     * // Count the number of Sectors
     * const count = await prisma.sector.count({
     *   where: {
     *     // ... the filter for the Sectors we want to count
     *   }
     * })
    **/
    count<T extends SectorCountArgs>(
      args?: Subset<T, SectorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SectorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SectorAggregateArgs>(args: Subset<T, SectorAggregateArgs>): Prisma.PrismaPromise<GetSectorAggregateType<T>>

    /**
     * Group by Sector.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SectorGroupByArgs} args - Group by arguments.
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
      T extends SectorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SectorGroupByArgs['orderBy'] }
        : { orderBy?: SectorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SectorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSectorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sector model
   */
  readonly fields: SectorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sector.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SectorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Sector model
   */
  interface SectorFieldRefs {
    readonly id: FieldRef<"Sector", 'String'>
    readonly sectorName: FieldRef<"Sector", 'String'>
    readonly sectorDesc: FieldRef<"Sector", 'String'>
    readonly marketCaps: FieldRef<"Sector", 'Json'>
    readonly marketInsights: FieldRef<"Sector", 'Json'>
    readonly opportunities: FieldRef<"Sector", 'Json'>
    readonly createdAt: FieldRef<"Sector", 'DateTime'>
    readonly updatedAt: FieldRef<"Sector", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sector findUnique
   */
  export type SectorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector findUniqueOrThrow
   */
  export type SectorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector findFirst
   */
  export type SectorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector findFirstOrThrow
   */
  export type SectorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Filter, which Sector to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sectors.
     */
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector findMany
   */
  export type SectorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Filter, which Sectors to fetch.
     */
    where?: SectorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sectors to fetch.
     */
    orderBy?: SectorOrderByWithRelationInput | SectorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sectors.
     */
    cursor?: SectorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sectors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sectors.
     */
    skip?: number
    distinct?: SectorScalarFieldEnum | SectorScalarFieldEnum[]
  }

  /**
   * Sector create
   */
  export type SectorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data needed to create a Sector.
     */
    data: XOR<SectorCreateInput, SectorUncheckedCreateInput>
  }

  /**
   * Sector createMany
   */
  export type SectorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sectors.
     */
    data: SectorCreateManyInput | SectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sector createManyAndReturn
   */
  export type SectorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data used to create many Sectors.
     */
    data: SectorCreateManyInput | SectorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sector update
   */
  export type SectorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data needed to update a Sector.
     */
    data: XOR<SectorUpdateInput, SectorUncheckedUpdateInput>
    /**
     * Choose, which Sector to update.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector updateMany
   */
  export type SectorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sectors.
     */
    data: XOR<SectorUpdateManyMutationInput, SectorUncheckedUpdateManyInput>
    /**
     * Filter which Sectors to update
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to update.
     */
    limit?: number
  }

  /**
   * Sector updateManyAndReturn
   */
  export type SectorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The data used to update Sectors.
     */
    data: XOR<SectorUpdateManyMutationInput, SectorUncheckedUpdateManyInput>
    /**
     * Filter which Sectors to update
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to update.
     */
    limit?: number
  }

  /**
   * Sector upsert
   */
  export type SectorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * The filter to search for the Sector to update in case it exists.
     */
    where: SectorWhereUniqueInput
    /**
     * In case the Sector found by the `where` argument doesn't exist, create a new Sector with this data.
     */
    create: XOR<SectorCreateInput, SectorUncheckedCreateInput>
    /**
     * In case the Sector was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SectorUpdateInput, SectorUncheckedUpdateInput>
  }

  /**
   * Sector delete
   */
  export type SectorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
    /**
     * Filter which Sector to delete.
     */
    where: SectorWhereUniqueInput
  }

  /**
   * Sector deleteMany
   */
  export type SectorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sectors to delete
     */
    where?: SectorWhereInput
    /**
     * Limit how many Sectors to delete.
     */
    limit?: number
  }

  /**
   * Sector without action
   */
  export type SectorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sector
     */
    select?: SectorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sector
     */
    omit?: SectorOmit<ExtArgs> | null
  }


  /**
   * Model SharkInvestor
   */

  export type AggregateSharkInvestor = {
    _count: SharkInvestorCountAggregateOutputType | null
    _min: SharkInvestorMinAggregateOutputType | null
    _max: SharkInvestorMaxAggregateOutputType | null
  }

  export type SharkInvestorMinAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    sharkName: string | null
    description: string | null
    netWorth: string | null
    portfolio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharkInvestorMaxAggregateOutputType = {
    id: string | null
    imageUrl: string | null
    sharkName: string | null
    description: string | null
    netWorth: string | null
    portfolio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SharkInvestorCountAggregateOutputType = {
    id: number
    imageUrl: number
    sharkName: number
    description: number
    netWorth: number
    portfolio: number
    sectorFocus: number
    stageFocus: number
    notableInvestments: number
    achievements: number
    smLink: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SharkInvestorMinAggregateInputType = {
    id?: true
    imageUrl?: true
    sharkName?: true
    description?: true
    netWorth?: true
    portfolio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharkInvestorMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    sharkName?: true
    description?: true
    netWorth?: true
    portfolio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SharkInvestorCountAggregateInputType = {
    id?: true
    imageUrl?: true
    sharkName?: true
    description?: true
    netWorth?: true
    portfolio?: true
    sectorFocus?: true
    stageFocus?: true
    notableInvestments?: true
    achievements?: true
    smLink?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SharkInvestorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharkInvestor to aggregate.
     */
    where?: SharkInvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharkInvestors to fetch.
     */
    orderBy?: SharkInvestorOrderByWithRelationInput | SharkInvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SharkInvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharkInvestors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharkInvestors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SharkInvestors
    **/
    _count?: true | SharkInvestorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SharkInvestorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SharkInvestorMaxAggregateInputType
  }

  export type GetSharkInvestorAggregateType<T extends SharkInvestorAggregateArgs> = {
        [P in keyof T & keyof AggregateSharkInvestor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSharkInvestor[P]>
      : GetScalarType<T[P], AggregateSharkInvestor[P]>
  }




  export type SharkInvestorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SharkInvestorWhereInput
    orderBy?: SharkInvestorOrderByWithAggregationInput | SharkInvestorOrderByWithAggregationInput[]
    by: SharkInvestorScalarFieldEnum[] | SharkInvestorScalarFieldEnum
    having?: SharkInvestorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SharkInvestorCountAggregateInputType | true
    _min?: SharkInvestorMinAggregateInputType
    _max?: SharkInvestorMaxAggregateInputType
  }

  export type SharkInvestorGroupByOutputType = {
    id: string
    imageUrl: string
    sharkName: string
    description: string
    netWorth: string
    portfolio: string
    sectorFocus: JsonValue
    stageFocus: JsonValue
    notableInvestments: JsonValue
    achievements: JsonValue
    smLink: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: SharkInvestorCountAggregateOutputType | null
    _min: SharkInvestorMinAggregateOutputType | null
    _max: SharkInvestorMaxAggregateOutputType | null
  }

  type GetSharkInvestorGroupByPayload<T extends SharkInvestorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SharkInvestorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SharkInvestorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SharkInvestorGroupByOutputType[P]>
            : GetScalarType<T[P], SharkInvestorGroupByOutputType[P]>
        }
      >
    >


  export type SharkInvestorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    sharkName?: boolean
    description?: boolean
    netWorth?: boolean
    portfolio?: boolean
    sectorFocus?: boolean
    stageFocus?: boolean
    notableInvestments?: boolean
    achievements?: boolean
    smLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sharkInvestor"]>

  export type SharkInvestorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    sharkName?: boolean
    description?: boolean
    netWorth?: boolean
    portfolio?: boolean
    sectorFocus?: boolean
    stageFocus?: boolean
    notableInvestments?: boolean
    achievements?: boolean
    smLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sharkInvestor"]>

  export type SharkInvestorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    sharkName?: boolean
    description?: boolean
    netWorth?: boolean
    portfolio?: boolean
    sectorFocus?: boolean
    stageFocus?: boolean
    notableInvestments?: boolean
    achievements?: boolean
    smLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["sharkInvestor"]>

  export type SharkInvestorSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    sharkName?: boolean
    description?: boolean
    netWorth?: boolean
    portfolio?: boolean
    sectorFocus?: boolean
    stageFocus?: boolean
    notableInvestments?: boolean
    achievements?: boolean
    smLink?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SharkInvestorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "sharkName" | "description" | "netWorth" | "portfolio" | "sectorFocus" | "stageFocus" | "notableInvestments" | "achievements" | "smLink" | "createdAt" | "updatedAt", ExtArgs["result"]["sharkInvestor"]>

  export type $SharkInvestorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SharkInvestor"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      imageUrl: string
      sharkName: string
      description: string
      netWorth: string
      portfolio: string
      sectorFocus: Prisma.JsonValue
      stageFocus: Prisma.JsonValue
      notableInvestments: Prisma.JsonValue
      achievements: Prisma.JsonValue
      smLink: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["sharkInvestor"]>
    composites: {}
  }

  type SharkInvestorGetPayload<S extends boolean | null | undefined | SharkInvestorDefaultArgs> = $Result.GetResult<Prisma.$SharkInvestorPayload, S>

  type SharkInvestorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SharkInvestorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SharkInvestorCountAggregateInputType | true
    }

  export interface SharkInvestorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SharkInvestor'], meta: { name: 'SharkInvestor' } }
    /**
     * Find zero or one SharkInvestor that matches the filter.
     * @param {SharkInvestorFindUniqueArgs} args - Arguments to find a SharkInvestor
     * @example
     * // Get one SharkInvestor
     * const sharkInvestor = await prisma.sharkInvestor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SharkInvestorFindUniqueArgs>(args: SelectSubset<T, SharkInvestorFindUniqueArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SharkInvestor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SharkInvestorFindUniqueOrThrowArgs} args - Arguments to find a SharkInvestor
     * @example
     * // Get one SharkInvestor
     * const sharkInvestor = await prisma.sharkInvestor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SharkInvestorFindUniqueOrThrowArgs>(args: SelectSubset<T, SharkInvestorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharkInvestor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorFindFirstArgs} args - Arguments to find a SharkInvestor
     * @example
     * // Get one SharkInvestor
     * const sharkInvestor = await prisma.sharkInvestor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SharkInvestorFindFirstArgs>(args?: SelectSubset<T, SharkInvestorFindFirstArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SharkInvestor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorFindFirstOrThrowArgs} args - Arguments to find a SharkInvestor
     * @example
     * // Get one SharkInvestor
     * const sharkInvestor = await prisma.sharkInvestor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SharkInvestorFindFirstOrThrowArgs>(args?: SelectSubset<T, SharkInvestorFindFirstOrThrowArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SharkInvestors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SharkInvestors
     * const sharkInvestors = await prisma.sharkInvestor.findMany()
     * 
     * // Get first 10 SharkInvestors
     * const sharkInvestors = await prisma.sharkInvestor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sharkInvestorWithIdOnly = await prisma.sharkInvestor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SharkInvestorFindManyArgs>(args?: SelectSubset<T, SharkInvestorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SharkInvestor.
     * @param {SharkInvestorCreateArgs} args - Arguments to create a SharkInvestor.
     * @example
     * // Create one SharkInvestor
     * const SharkInvestor = await prisma.sharkInvestor.create({
     *   data: {
     *     // ... data to create a SharkInvestor
     *   }
     * })
     * 
     */
    create<T extends SharkInvestorCreateArgs>(args: SelectSubset<T, SharkInvestorCreateArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SharkInvestors.
     * @param {SharkInvestorCreateManyArgs} args - Arguments to create many SharkInvestors.
     * @example
     * // Create many SharkInvestors
     * const sharkInvestor = await prisma.sharkInvestor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SharkInvestorCreateManyArgs>(args?: SelectSubset<T, SharkInvestorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SharkInvestors and returns the data saved in the database.
     * @param {SharkInvestorCreateManyAndReturnArgs} args - Arguments to create many SharkInvestors.
     * @example
     * // Create many SharkInvestors
     * const sharkInvestor = await prisma.sharkInvestor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SharkInvestors and only return the `id`
     * const sharkInvestorWithIdOnly = await prisma.sharkInvestor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SharkInvestorCreateManyAndReturnArgs>(args?: SelectSubset<T, SharkInvestorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SharkInvestor.
     * @param {SharkInvestorDeleteArgs} args - Arguments to delete one SharkInvestor.
     * @example
     * // Delete one SharkInvestor
     * const SharkInvestor = await prisma.sharkInvestor.delete({
     *   where: {
     *     // ... filter to delete one SharkInvestor
     *   }
     * })
     * 
     */
    delete<T extends SharkInvestorDeleteArgs>(args: SelectSubset<T, SharkInvestorDeleteArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SharkInvestor.
     * @param {SharkInvestorUpdateArgs} args - Arguments to update one SharkInvestor.
     * @example
     * // Update one SharkInvestor
     * const sharkInvestor = await prisma.sharkInvestor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SharkInvestorUpdateArgs>(args: SelectSubset<T, SharkInvestorUpdateArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SharkInvestors.
     * @param {SharkInvestorDeleteManyArgs} args - Arguments to filter SharkInvestors to delete.
     * @example
     * // Delete a few SharkInvestors
     * const { count } = await prisma.sharkInvestor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SharkInvestorDeleteManyArgs>(args?: SelectSubset<T, SharkInvestorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharkInvestors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SharkInvestors
     * const sharkInvestor = await prisma.sharkInvestor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SharkInvestorUpdateManyArgs>(args: SelectSubset<T, SharkInvestorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SharkInvestors and returns the data updated in the database.
     * @param {SharkInvestorUpdateManyAndReturnArgs} args - Arguments to update many SharkInvestors.
     * @example
     * // Update many SharkInvestors
     * const sharkInvestor = await prisma.sharkInvestor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SharkInvestors and only return the `id`
     * const sharkInvestorWithIdOnly = await prisma.sharkInvestor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SharkInvestorUpdateManyAndReturnArgs>(args: SelectSubset<T, SharkInvestorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SharkInvestor.
     * @param {SharkInvestorUpsertArgs} args - Arguments to update or create a SharkInvestor.
     * @example
     * // Update or create a SharkInvestor
     * const sharkInvestor = await prisma.sharkInvestor.upsert({
     *   create: {
     *     // ... data to create a SharkInvestor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SharkInvestor we want to update
     *   }
     * })
     */
    upsert<T extends SharkInvestorUpsertArgs>(args: SelectSubset<T, SharkInvestorUpsertArgs<ExtArgs>>): Prisma__SharkInvestorClient<$Result.GetResult<Prisma.$SharkInvestorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SharkInvestors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorCountArgs} args - Arguments to filter SharkInvestors to count.
     * @example
     * // Count the number of SharkInvestors
     * const count = await prisma.sharkInvestor.count({
     *   where: {
     *     // ... the filter for the SharkInvestors we want to count
     *   }
     * })
    **/
    count<T extends SharkInvestorCountArgs>(
      args?: Subset<T, SharkInvestorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SharkInvestorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SharkInvestor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SharkInvestorAggregateArgs>(args: Subset<T, SharkInvestorAggregateArgs>): Prisma.PrismaPromise<GetSharkInvestorAggregateType<T>>

    /**
     * Group by SharkInvestor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SharkInvestorGroupByArgs} args - Group by arguments.
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
      T extends SharkInvestorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SharkInvestorGroupByArgs['orderBy'] }
        : { orderBy?: SharkInvestorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SharkInvestorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSharkInvestorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SharkInvestor model
   */
  readonly fields: SharkInvestorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SharkInvestor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SharkInvestorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SharkInvestor model
   */
  interface SharkInvestorFieldRefs {
    readonly id: FieldRef<"SharkInvestor", 'String'>
    readonly imageUrl: FieldRef<"SharkInvestor", 'String'>
    readonly sharkName: FieldRef<"SharkInvestor", 'String'>
    readonly description: FieldRef<"SharkInvestor", 'String'>
    readonly netWorth: FieldRef<"SharkInvestor", 'String'>
    readonly portfolio: FieldRef<"SharkInvestor", 'String'>
    readonly sectorFocus: FieldRef<"SharkInvestor", 'Json'>
    readonly stageFocus: FieldRef<"SharkInvestor", 'Json'>
    readonly notableInvestments: FieldRef<"SharkInvestor", 'Json'>
    readonly achievements: FieldRef<"SharkInvestor", 'Json'>
    readonly smLink: FieldRef<"SharkInvestor", 'Json'>
    readonly createdAt: FieldRef<"SharkInvestor", 'DateTime'>
    readonly updatedAt: FieldRef<"SharkInvestor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SharkInvestor findUnique
   */
  export type SharkInvestorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * Filter, which SharkInvestor to fetch.
     */
    where: SharkInvestorWhereUniqueInput
  }

  /**
   * SharkInvestor findUniqueOrThrow
   */
  export type SharkInvestorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * Filter, which SharkInvestor to fetch.
     */
    where: SharkInvestorWhereUniqueInput
  }

  /**
   * SharkInvestor findFirst
   */
  export type SharkInvestorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * Filter, which SharkInvestor to fetch.
     */
    where?: SharkInvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharkInvestors to fetch.
     */
    orderBy?: SharkInvestorOrderByWithRelationInput | SharkInvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharkInvestors.
     */
    cursor?: SharkInvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharkInvestors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharkInvestors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharkInvestors.
     */
    distinct?: SharkInvestorScalarFieldEnum | SharkInvestorScalarFieldEnum[]
  }

  /**
   * SharkInvestor findFirstOrThrow
   */
  export type SharkInvestorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * Filter, which SharkInvestor to fetch.
     */
    where?: SharkInvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharkInvestors to fetch.
     */
    orderBy?: SharkInvestorOrderByWithRelationInput | SharkInvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SharkInvestors.
     */
    cursor?: SharkInvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharkInvestors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharkInvestors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SharkInvestors.
     */
    distinct?: SharkInvestorScalarFieldEnum | SharkInvestorScalarFieldEnum[]
  }

  /**
   * SharkInvestor findMany
   */
  export type SharkInvestorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * Filter, which SharkInvestors to fetch.
     */
    where?: SharkInvestorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SharkInvestors to fetch.
     */
    orderBy?: SharkInvestorOrderByWithRelationInput | SharkInvestorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SharkInvestors.
     */
    cursor?: SharkInvestorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SharkInvestors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SharkInvestors.
     */
    skip?: number
    distinct?: SharkInvestorScalarFieldEnum | SharkInvestorScalarFieldEnum[]
  }

  /**
   * SharkInvestor create
   */
  export type SharkInvestorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * The data needed to create a SharkInvestor.
     */
    data: XOR<SharkInvestorCreateInput, SharkInvestorUncheckedCreateInput>
  }

  /**
   * SharkInvestor createMany
   */
  export type SharkInvestorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SharkInvestors.
     */
    data: SharkInvestorCreateManyInput | SharkInvestorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharkInvestor createManyAndReturn
   */
  export type SharkInvestorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * The data used to create many SharkInvestors.
     */
    data: SharkInvestorCreateManyInput | SharkInvestorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SharkInvestor update
   */
  export type SharkInvestorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * The data needed to update a SharkInvestor.
     */
    data: XOR<SharkInvestorUpdateInput, SharkInvestorUncheckedUpdateInput>
    /**
     * Choose, which SharkInvestor to update.
     */
    where: SharkInvestorWhereUniqueInput
  }

  /**
   * SharkInvestor updateMany
   */
  export type SharkInvestorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SharkInvestors.
     */
    data: XOR<SharkInvestorUpdateManyMutationInput, SharkInvestorUncheckedUpdateManyInput>
    /**
     * Filter which SharkInvestors to update
     */
    where?: SharkInvestorWhereInput
    /**
     * Limit how many SharkInvestors to update.
     */
    limit?: number
  }

  /**
   * SharkInvestor updateManyAndReturn
   */
  export type SharkInvestorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * The data used to update SharkInvestors.
     */
    data: XOR<SharkInvestorUpdateManyMutationInput, SharkInvestorUncheckedUpdateManyInput>
    /**
     * Filter which SharkInvestors to update
     */
    where?: SharkInvestorWhereInput
    /**
     * Limit how many SharkInvestors to update.
     */
    limit?: number
  }

  /**
   * SharkInvestor upsert
   */
  export type SharkInvestorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * The filter to search for the SharkInvestor to update in case it exists.
     */
    where: SharkInvestorWhereUniqueInput
    /**
     * In case the SharkInvestor found by the `where` argument doesn't exist, create a new SharkInvestor with this data.
     */
    create: XOR<SharkInvestorCreateInput, SharkInvestorUncheckedCreateInput>
    /**
     * In case the SharkInvestor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SharkInvestorUpdateInput, SharkInvestorUncheckedUpdateInput>
  }

  /**
   * SharkInvestor delete
   */
  export type SharkInvestorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
    /**
     * Filter which SharkInvestor to delete.
     */
    where: SharkInvestorWhereUniqueInput
  }

  /**
   * SharkInvestor deleteMany
   */
  export type SharkInvestorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SharkInvestors to delete
     */
    where?: SharkInvestorWhereInput
    /**
     * Limit how many SharkInvestors to delete.
     */
    limit?: number
  }

  /**
   * SharkInvestor without action
   */
  export type SharkInvestorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SharkInvestor
     */
    select?: SharkInvestorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SharkInvestor
     */
    omit?: SharkInvestorOmit<ExtArgs> | null
  }


  /**
   * Model Broker
   */

  export type AggregateBroker = {
    _count: BrokerCountAggregateOutputType | null
    _avg: BrokerAvgAggregateOutputType | null
    _sum: BrokerSumAggregateOutputType | null
    _min: BrokerMinAggregateOutputType | null
    _max: BrokerMaxAggregateOutputType | null
  }

  export type BrokerAvgAggregateOutputType = {
    ratings: number | null
    reviews: number | null
  }

  export type BrokerSumAggregateOutputType = {
    ratings: number | null
    reviews: number | null
  }

  export type BrokerMinAggregateOutputType = {
    id: string | null
    companyName: string | null
    companyLogo: string | null
    ratings: number | null
    reviews: number | null
    accounts: string | null
    openAccLink: string | null
    learnMore: string | null
    accOpenCharge: string | null
    maintainanceCharge: string | null
    deliveryCharge: string | null
    intradayBrokerage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrokerMaxAggregateOutputType = {
    id: string | null
    companyName: string | null
    companyLogo: string | null
    ratings: number | null
    reviews: number | null
    accounts: string | null
    openAccLink: string | null
    learnMore: string | null
    accOpenCharge: string | null
    maintainanceCharge: string | null
    deliveryCharge: string | null
    intradayBrokerage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BrokerCountAggregateOutputType = {
    id: number
    companyName: number
    companyLogo: number
    ratings: number
    reviews: number
    accounts: number
    openAccLink: number
    learnMore: number
    tradingCategory: number
    accOpenCharge: number
    maintainanceCharge: number
    deliveryCharge: number
    intradayBrokerage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BrokerAvgAggregateInputType = {
    ratings?: true
    reviews?: true
  }

  export type BrokerSumAggregateInputType = {
    ratings?: true
    reviews?: true
  }

  export type BrokerMinAggregateInputType = {
    id?: true
    companyName?: true
    companyLogo?: true
    ratings?: true
    reviews?: true
    accounts?: true
    openAccLink?: true
    learnMore?: true
    accOpenCharge?: true
    maintainanceCharge?: true
    deliveryCharge?: true
    intradayBrokerage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrokerMaxAggregateInputType = {
    id?: true
    companyName?: true
    companyLogo?: true
    ratings?: true
    reviews?: true
    accounts?: true
    openAccLink?: true
    learnMore?: true
    accOpenCharge?: true
    maintainanceCharge?: true
    deliveryCharge?: true
    intradayBrokerage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BrokerCountAggregateInputType = {
    id?: true
    companyName?: true
    companyLogo?: true
    ratings?: true
    reviews?: true
    accounts?: true
    openAccLink?: true
    learnMore?: true
    tradingCategory?: true
    accOpenCharge?: true
    maintainanceCharge?: true
    deliveryCharge?: true
    intradayBrokerage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BrokerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Broker to aggregate.
     */
    where?: BrokerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brokers to fetch.
     */
    orderBy?: BrokerOrderByWithRelationInput | BrokerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrokerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brokers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brokers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brokers
    **/
    _count?: true | BrokerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BrokerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BrokerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrokerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrokerMaxAggregateInputType
  }

  export type GetBrokerAggregateType<T extends BrokerAggregateArgs> = {
        [P in keyof T & keyof AggregateBroker]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBroker[P]>
      : GetScalarType<T[P], AggregateBroker[P]>
  }




  export type BrokerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrokerWhereInput
    orderBy?: BrokerOrderByWithAggregationInput | BrokerOrderByWithAggregationInput[]
    by: BrokerScalarFieldEnum[] | BrokerScalarFieldEnum
    having?: BrokerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrokerCountAggregateInputType | true
    _avg?: BrokerAvgAggregateInputType
    _sum?: BrokerSumAggregateInputType
    _min?: BrokerMinAggregateInputType
    _max?: BrokerMaxAggregateInputType
  }

  export type BrokerGroupByOutputType = {
    id: string
    companyName: string
    companyLogo: string
    ratings: number
    reviews: number
    accounts: string
    openAccLink: string
    learnMore: string
    tradingCategory: string[]
    accOpenCharge: string
    maintainanceCharge: string
    deliveryCharge: string
    intradayBrokerage: string
    createdAt: Date
    updatedAt: Date
    _count: BrokerCountAggregateOutputType | null
    _avg: BrokerAvgAggregateOutputType | null
    _sum: BrokerSumAggregateOutputType | null
    _min: BrokerMinAggregateOutputType | null
    _max: BrokerMaxAggregateOutputType | null
  }

  type GetBrokerGroupByPayload<T extends BrokerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrokerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrokerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrokerGroupByOutputType[P]>
            : GetScalarType<T[P], BrokerGroupByOutputType[P]>
        }
      >
    >


  export type BrokerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyLogo?: boolean
    ratings?: boolean
    reviews?: boolean
    accounts?: boolean
    openAccLink?: boolean
    learnMore?: boolean
    tradingCategory?: boolean
    accOpenCharge?: boolean
    maintainanceCharge?: boolean
    deliveryCharge?: boolean
    intradayBrokerage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["broker"]>

  export type BrokerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyLogo?: boolean
    ratings?: boolean
    reviews?: boolean
    accounts?: boolean
    openAccLink?: boolean
    learnMore?: boolean
    tradingCategory?: boolean
    accOpenCharge?: boolean
    maintainanceCharge?: boolean
    deliveryCharge?: boolean
    intradayBrokerage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["broker"]>

  export type BrokerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    companyName?: boolean
    companyLogo?: boolean
    ratings?: boolean
    reviews?: boolean
    accounts?: boolean
    openAccLink?: boolean
    learnMore?: boolean
    tradingCategory?: boolean
    accOpenCharge?: boolean
    maintainanceCharge?: boolean
    deliveryCharge?: boolean
    intradayBrokerage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["broker"]>

  export type BrokerSelectScalar = {
    id?: boolean
    companyName?: boolean
    companyLogo?: boolean
    ratings?: boolean
    reviews?: boolean
    accounts?: boolean
    openAccLink?: boolean
    learnMore?: boolean
    tradingCategory?: boolean
    accOpenCharge?: boolean
    maintainanceCharge?: boolean
    deliveryCharge?: boolean
    intradayBrokerage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BrokerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "companyName" | "companyLogo" | "ratings" | "reviews" | "accounts" | "openAccLink" | "learnMore" | "tradingCategory" | "accOpenCharge" | "maintainanceCharge" | "deliveryCharge" | "intradayBrokerage" | "createdAt" | "updatedAt", ExtArgs["result"]["broker"]>

  export type $BrokerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Broker"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      companyName: string
      companyLogo: string
      ratings: number
      reviews: number
      accounts: string
      openAccLink: string
      learnMore: string
      tradingCategory: string[]
      accOpenCharge: string
      maintainanceCharge: string
      deliveryCharge: string
      intradayBrokerage: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["broker"]>
    composites: {}
  }

  type BrokerGetPayload<S extends boolean | null | undefined | BrokerDefaultArgs> = $Result.GetResult<Prisma.$BrokerPayload, S>

  type BrokerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrokerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrokerCountAggregateInputType | true
    }

  export interface BrokerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Broker'], meta: { name: 'Broker' } }
    /**
     * Find zero or one Broker that matches the filter.
     * @param {BrokerFindUniqueArgs} args - Arguments to find a Broker
     * @example
     * // Get one Broker
     * const broker = await prisma.broker.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrokerFindUniqueArgs>(args: SelectSubset<T, BrokerFindUniqueArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Broker that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrokerFindUniqueOrThrowArgs} args - Arguments to find a Broker
     * @example
     * // Get one Broker
     * const broker = await prisma.broker.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrokerFindUniqueOrThrowArgs>(args: SelectSubset<T, BrokerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Broker that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerFindFirstArgs} args - Arguments to find a Broker
     * @example
     * // Get one Broker
     * const broker = await prisma.broker.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrokerFindFirstArgs>(args?: SelectSubset<T, BrokerFindFirstArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Broker that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerFindFirstOrThrowArgs} args - Arguments to find a Broker
     * @example
     * // Get one Broker
     * const broker = await prisma.broker.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrokerFindFirstOrThrowArgs>(args?: SelectSubset<T, BrokerFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brokers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brokers
     * const brokers = await prisma.broker.findMany()
     * 
     * // Get first 10 Brokers
     * const brokers = await prisma.broker.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brokerWithIdOnly = await prisma.broker.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrokerFindManyArgs>(args?: SelectSubset<T, BrokerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Broker.
     * @param {BrokerCreateArgs} args - Arguments to create a Broker.
     * @example
     * // Create one Broker
     * const Broker = await prisma.broker.create({
     *   data: {
     *     // ... data to create a Broker
     *   }
     * })
     * 
     */
    create<T extends BrokerCreateArgs>(args: SelectSubset<T, BrokerCreateArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brokers.
     * @param {BrokerCreateManyArgs} args - Arguments to create many Brokers.
     * @example
     * // Create many Brokers
     * const broker = await prisma.broker.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrokerCreateManyArgs>(args?: SelectSubset<T, BrokerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brokers and returns the data saved in the database.
     * @param {BrokerCreateManyAndReturnArgs} args - Arguments to create many Brokers.
     * @example
     * // Create many Brokers
     * const broker = await prisma.broker.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brokers and only return the `id`
     * const brokerWithIdOnly = await prisma.broker.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrokerCreateManyAndReturnArgs>(args?: SelectSubset<T, BrokerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Broker.
     * @param {BrokerDeleteArgs} args - Arguments to delete one Broker.
     * @example
     * // Delete one Broker
     * const Broker = await prisma.broker.delete({
     *   where: {
     *     // ... filter to delete one Broker
     *   }
     * })
     * 
     */
    delete<T extends BrokerDeleteArgs>(args: SelectSubset<T, BrokerDeleteArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Broker.
     * @param {BrokerUpdateArgs} args - Arguments to update one Broker.
     * @example
     * // Update one Broker
     * const broker = await prisma.broker.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrokerUpdateArgs>(args: SelectSubset<T, BrokerUpdateArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brokers.
     * @param {BrokerDeleteManyArgs} args - Arguments to filter Brokers to delete.
     * @example
     * // Delete a few Brokers
     * const { count } = await prisma.broker.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrokerDeleteManyArgs>(args?: SelectSubset<T, BrokerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brokers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brokers
     * const broker = await prisma.broker.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrokerUpdateManyArgs>(args: SelectSubset<T, BrokerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brokers and returns the data updated in the database.
     * @param {BrokerUpdateManyAndReturnArgs} args - Arguments to update many Brokers.
     * @example
     * // Update many Brokers
     * const broker = await prisma.broker.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brokers and only return the `id`
     * const brokerWithIdOnly = await prisma.broker.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends BrokerUpdateManyAndReturnArgs>(args: SelectSubset<T, BrokerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Broker.
     * @param {BrokerUpsertArgs} args - Arguments to update or create a Broker.
     * @example
     * // Update or create a Broker
     * const broker = await prisma.broker.upsert({
     *   create: {
     *     // ... data to create a Broker
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Broker we want to update
     *   }
     * })
     */
    upsert<T extends BrokerUpsertArgs>(args: SelectSubset<T, BrokerUpsertArgs<ExtArgs>>): Prisma__BrokerClient<$Result.GetResult<Prisma.$BrokerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brokers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerCountArgs} args - Arguments to filter Brokers to count.
     * @example
     * // Count the number of Brokers
     * const count = await prisma.broker.count({
     *   where: {
     *     // ... the filter for the Brokers we want to count
     *   }
     * })
    **/
    count<T extends BrokerCountArgs>(
      args?: Subset<T, BrokerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrokerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Broker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrokerAggregateArgs>(args: Subset<T, BrokerAggregateArgs>): Prisma.PrismaPromise<GetBrokerAggregateType<T>>

    /**
     * Group by Broker.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrokerGroupByArgs} args - Group by arguments.
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
      T extends BrokerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrokerGroupByArgs['orderBy'] }
        : { orderBy?: BrokerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrokerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrokerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Broker model
   */
  readonly fields: BrokerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Broker.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrokerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Broker model
   */
  interface BrokerFieldRefs {
    readonly id: FieldRef<"Broker", 'String'>
    readonly companyName: FieldRef<"Broker", 'String'>
    readonly companyLogo: FieldRef<"Broker", 'String'>
    readonly ratings: FieldRef<"Broker", 'Float'>
    readonly reviews: FieldRef<"Broker", 'Float'>
    readonly accounts: FieldRef<"Broker", 'String'>
    readonly openAccLink: FieldRef<"Broker", 'String'>
    readonly learnMore: FieldRef<"Broker", 'String'>
    readonly tradingCategory: FieldRef<"Broker", 'String[]'>
    readonly accOpenCharge: FieldRef<"Broker", 'String'>
    readonly maintainanceCharge: FieldRef<"Broker", 'String'>
    readonly deliveryCharge: FieldRef<"Broker", 'String'>
    readonly intradayBrokerage: FieldRef<"Broker", 'String'>
    readonly createdAt: FieldRef<"Broker", 'DateTime'>
    readonly updatedAt: FieldRef<"Broker", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Broker findUnique
   */
  export type BrokerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Filter, which Broker to fetch.
     */
    where: BrokerWhereUniqueInput
  }

  /**
   * Broker findUniqueOrThrow
   */
  export type BrokerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Filter, which Broker to fetch.
     */
    where: BrokerWhereUniqueInput
  }

  /**
   * Broker findFirst
   */
  export type BrokerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Filter, which Broker to fetch.
     */
    where?: BrokerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brokers to fetch.
     */
    orderBy?: BrokerOrderByWithRelationInput | BrokerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brokers.
     */
    cursor?: BrokerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brokers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brokers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brokers.
     */
    distinct?: BrokerScalarFieldEnum | BrokerScalarFieldEnum[]
  }

  /**
   * Broker findFirstOrThrow
   */
  export type BrokerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Filter, which Broker to fetch.
     */
    where?: BrokerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brokers to fetch.
     */
    orderBy?: BrokerOrderByWithRelationInput | BrokerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brokers.
     */
    cursor?: BrokerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brokers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brokers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brokers.
     */
    distinct?: BrokerScalarFieldEnum | BrokerScalarFieldEnum[]
  }

  /**
   * Broker findMany
   */
  export type BrokerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Filter, which Brokers to fetch.
     */
    where?: BrokerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brokers to fetch.
     */
    orderBy?: BrokerOrderByWithRelationInput | BrokerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brokers.
     */
    cursor?: BrokerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brokers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brokers.
     */
    skip?: number
    distinct?: BrokerScalarFieldEnum | BrokerScalarFieldEnum[]
  }

  /**
   * Broker create
   */
  export type BrokerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * The data needed to create a Broker.
     */
    data: XOR<BrokerCreateInput, BrokerUncheckedCreateInput>
  }

  /**
   * Broker createMany
   */
  export type BrokerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brokers.
     */
    data: BrokerCreateManyInput | BrokerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Broker createManyAndReturn
   */
  export type BrokerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * The data used to create many Brokers.
     */
    data: BrokerCreateManyInput | BrokerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Broker update
   */
  export type BrokerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * The data needed to update a Broker.
     */
    data: XOR<BrokerUpdateInput, BrokerUncheckedUpdateInput>
    /**
     * Choose, which Broker to update.
     */
    where: BrokerWhereUniqueInput
  }

  /**
   * Broker updateMany
   */
  export type BrokerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brokers.
     */
    data: XOR<BrokerUpdateManyMutationInput, BrokerUncheckedUpdateManyInput>
    /**
     * Filter which Brokers to update
     */
    where?: BrokerWhereInput
    /**
     * Limit how many Brokers to update.
     */
    limit?: number
  }

  /**
   * Broker updateManyAndReturn
   */
  export type BrokerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * The data used to update Brokers.
     */
    data: XOR<BrokerUpdateManyMutationInput, BrokerUncheckedUpdateManyInput>
    /**
     * Filter which Brokers to update
     */
    where?: BrokerWhereInput
    /**
     * Limit how many Brokers to update.
     */
    limit?: number
  }

  /**
   * Broker upsert
   */
  export type BrokerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * The filter to search for the Broker to update in case it exists.
     */
    where: BrokerWhereUniqueInput
    /**
     * In case the Broker found by the `where` argument doesn't exist, create a new Broker with this data.
     */
    create: XOR<BrokerCreateInput, BrokerUncheckedCreateInput>
    /**
     * In case the Broker was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrokerUpdateInput, BrokerUncheckedUpdateInput>
  }

  /**
   * Broker delete
   */
  export type BrokerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
    /**
     * Filter which Broker to delete.
     */
    where: BrokerWhereUniqueInput
  }

  /**
   * Broker deleteMany
   */
  export type BrokerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brokers to delete
     */
    where?: BrokerWhereInput
    /**
     * Limit how many Brokers to delete.
     */
    limit?: number
  }

  /**
   * Broker without action
   */
  export type BrokerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Broker
     */
    select?: BrokerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Broker
     */
    omit?: BrokerOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phone: 'phone',
    isEmailVerified: 'isEmailVerified',
    emailVerificationToken: 'emailVerificationToken',
    emailVerificationExpiry: 'emailVerificationExpiry',
    forgotPasswordToken: 'forgotPasswordToken',
    forgotPasswordExpiry: 'forgotPasswordExpiry',
    refreshToken: 'refreshToken',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const IpoScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    priceBand: 'priceBand',
    openDate: 'openDate',
    closeDate: 'closeDate',
    issueSize: 'issueSize',
    issueType: 'issueType',
    listingDate: 'listingDate',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IpoScalarFieldEnum = (typeof IpoScalarFieldEnum)[keyof typeof IpoScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    title: 'title',
    imageUrl: 'imageUrl',
    publishDate: 'publishDate',
    externalLink: 'externalLink'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const SectorScalarFieldEnum: {
    id: 'id',
    sectorName: 'sectorName',
    sectorDesc: 'sectorDesc',
    marketCaps: 'marketCaps',
    marketInsights: 'marketInsights',
    opportunities: 'opportunities',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SectorScalarFieldEnum = (typeof SectorScalarFieldEnum)[keyof typeof SectorScalarFieldEnum]


  export const SharkInvestorScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    sharkName: 'sharkName',
    description: 'description',
    netWorth: 'netWorth',
    portfolio: 'portfolio',
    sectorFocus: 'sectorFocus',
    stageFocus: 'stageFocus',
    notableInvestments: 'notableInvestments',
    achievements: 'achievements',
    smLink: 'smLink',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SharkInvestorScalarFieldEnum = (typeof SharkInvestorScalarFieldEnum)[keyof typeof SharkInvestorScalarFieldEnum]


  export const BrokerScalarFieldEnum: {
    id: 'id',
    companyName: 'companyName',
    companyLogo: 'companyLogo',
    ratings: 'ratings',
    reviews: 'reviews',
    accounts: 'accounts',
    openAccLink: 'openAccLink',
    learnMore: 'learnMore',
    tradingCategory: 'tradingCategory',
    accOpenCharge: 'accOpenCharge',
    maintainanceCharge: 'maintainanceCharge',
    deliveryCharge: 'deliveryCharge',
    intradayBrokerage: 'intradayBrokerage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BrokerScalarFieldEnum = (typeof BrokerScalarFieldEnum)[keyof typeof BrokerScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'IpoStatus'
   */
  export type EnumIpoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IpoStatus'>
    


  /**
   * Reference to a field of type 'IpoStatus[]'
   */
  export type ListEnumIpoStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IpoStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    forgotPasswordToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationExpiry?: SortOrderInput | SortOrder
    forgotPasswordToken?: SortOrderInput | SortOrder
    forgotPasswordExpiry?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    isEmailVerified?: BoolFilter<"User"> | boolean
    emailVerificationToken?: StringNullableFilter<"User"> | string | null
    emailVerificationExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    forgotPasswordToken?: StringNullableFilter<"User"> | string | null
    forgotPasswordExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    refreshToken?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrderInput | SortOrder
    emailVerificationExpiry?: SortOrderInput | SortOrder
    forgotPasswordToken?: SortOrderInput | SortOrder
    forgotPasswordExpiry?: SortOrderInput | SortOrder
    refreshToken?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    isEmailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerificationToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerificationExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    forgotPasswordToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    forgotPasswordExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    refreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type IpoWhereInput = {
    AND?: IpoWhereInput | IpoWhereInput[]
    OR?: IpoWhereInput[]
    NOT?: IpoWhereInput | IpoWhereInput[]
    id?: StringFilter<"Ipo"> | string
    companyName?: StringFilter<"Ipo"> | string
    priceBand?: StringFilter<"Ipo"> | string
    openDate?: DateTimeFilter<"Ipo"> | Date | string
    closeDate?: DateTimeFilter<"Ipo"> | Date | string
    issueSize?: StringFilter<"Ipo"> | string
    issueType?: StringFilter<"Ipo"> | string
    listingDate?: DateTimeFilter<"Ipo"> | Date | string
    status?: EnumIpoStatusFilter<"Ipo"> | $Enums.IpoStatus
    createdAt?: DateTimeFilter<"Ipo"> | Date | string
    updatedAt?: DateTimeFilter<"Ipo"> | Date | string
  }

  export type IpoOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IpoWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyName?: string
    AND?: IpoWhereInput | IpoWhereInput[]
    OR?: IpoWhereInput[]
    NOT?: IpoWhereInput | IpoWhereInput[]
    priceBand?: StringFilter<"Ipo"> | string
    openDate?: DateTimeFilter<"Ipo"> | Date | string
    closeDate?: DateTimeFilter<"Ipo"> | Date | string
    issueSize?: StringFilter<"Ipo"> | string
    issueType?: StringFilter<"Ipo"> | string
    listingDate?: DateTimeFilter<"Ipo"> | Date | string
    status?: EnumIpoStatusFilter<"Ipo"> | $Enums.IpoStatus
    createdAt?: DateTimeFilter<"Ipo"> | Date | string
    updatedAt?: DateTimeFilter<"Ipo"> | Date | string
  }, "id" | "companyName">

  export type IpoOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IpoCountOrderByAggregateInput
    _max?: IpoMaxOrderByAggregateInput
    _min?: IpoMinOrderByAggregateInput
  }

  export type IpoScalarWhereWithAggregatesInput = {
    AND?: IpoScalarWhereWithAggregatesInput | IpoScalarWhereWithAggregatesInput[]
    OR?: IpoScalarWhereWithAggregatesInput[]
    NOT?: IpoScalarWhereWithAggregatesInput | IpoScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ipo"> | string
    companyName?: StringWithAggregatesFilter<"Ipo"> | string
    priceBand?: StringWithAggregatesFilter<"Ipo"> | string
    openDate?: DateTimeWithAggregatesFilter<"Ipo"> | Date | string
    closeDate?: DateTimeWithAggregatesFilter<"Ipo"> | Date | string
    issueSize?: StringWithAggregatesFilter<"Ipo"> | string
    issueType?: StringWithAggregatesFilter<"Ipo"> | string
    listingDate?: DateTimeWithAggregatesFilter<"Ipo"> | Date | string
    status?: EnumIpoStatusWithAggregatesFilter<"Ipo"> | $Enums.IpoStatus
    createdAt?: DateTimeWithAggregatesFilter<"Ipo"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ipo"> | Date | string
  }

  export type BlogWhereInput = {
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    id?: StringFilter<"Blog"> | string
    title?: StringFilter<"Blog"> | string
    imageUrl?: StringFilter<"Blog"> | string
    publishDate?: DateTimeFilter<"Blog"> | Date | string
    externalLink?: StringFilter<"Blog"> | string
  }

  export type BlogOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    publishDate?: SortOrder
    externalLink?: SortOrder
  }

  export type BlogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    title?: string
    AND?: BlogWhereInput | BlogWhereInput[]
    OR?: BlogWhereInput[]
    NOT?: BlogWhereInput | BlogWhereInput[]
    imageUrl?: StringFilter<"Blog"> | string
    publishDate?: DateTimeFilter<"Blog"> | Date | string
    externalLink?: StringFilter<"Blog"> | string
  }, "id" | "title">

  export type BlogOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    publishDate?: SortOrder
    externalLink?: SortOrder
    _count?: BlogCountOrderByAggregateInput
    _max?: BlogMaxOrderByAggregateInput
    _min?: BlogMinOrderByAggregateInput
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    OR?: BlogScalarWhereWithAggregatesInput[]
    NOT?: BlogScalarWhereWithAggregatesInput | BlogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Blog"> | string
    title?: StringWithAggregatesFilter<"Blog"> | string
    imageUrl?: StringWithAggregatesFilter<"Blog"> | string
    publishDate?: DateTimeWithAggregatesFilter<"Blog"> | Date | string
    externalLink?: StringWithAggregatesFilter<"Blog"> | string
  }

  export type SectorWhereInput = {
    AND?: SectorWhereInput | SectorWhereInput[]
    OR?: SectorWhereInput[]
    NOT?: SectorWhereInput | SectorWhereInput[]
    id?: StringFilter<"Sector"> | string
    sectorName?: StringFilter<"Sector"> | string
    sectorDesc?: StringFilter<"Sector"> | string
    marketCaps?: JsonFilter<"Sector">
    marketInsights?: JsonFilter<"Sector">
    opportunities?: JsonFilter<"Sector">
    createdAt?: DateTimeFilter<"Sector"> | Date | string
    updatedAt?: DateTimeFilter<"Sector"> | Date | string
  }

  export type SectorOrderByWithRelationInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    marketCaps?: SortOrder
    marketInsights?: SortOrder
    opportunities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sectorName?: string
    AND?: SectorWhereInput | SectorWhereInput[]
    OR?: SectorWhereInput[]
    NOT?: SectorWhereInput | SectorWhereInput[]
    sectorDesc?: StringFilter<"Sector"> | string
    marketCaps?: JsonFilter<"Sector">
    marketInsights?: JsonFilter<"Sector">
    opportunities?: JsonFilter<"Sector">
    createdAt?: DateTimeFilter<"Sector"> | Date | string
    updatedAt?: DateTimeFilter<"Sector"> | Date | string
  }, "id" | "sectorName">

  export type SectorOrderByWithAggregationInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    marketCaps?: SortOrder
    marketInsights?: SortOrder
    opportunities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SectorCountOrderByAggregateInput
    _max?: SectorMaxOrderByAggregateInput
    _min?: SectorMinOrderByAggregateInput
  }

  export type SectorScalarWhereWithAggregatesInput = {
    AND?: SectorScalarWhereWithAggregatesInput | SectorScalarWhereWithAggregatesInput[]
    OR?: SectorScalarWhereWithAggregatesInput[]
    NOT?: SectorScalarWhereWithAggregatesInput | SectorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sector"> | string
    sectorName?: StringWithAggregatesFilter<"Sector"> | string
    sectorDesc?: StringWithAggregatesFilter<"Sector"> | string
    marketCaps?: JsonWithAggregatesFilter<"Sector">
    marketInsights?: JsonWithAggregatesFilter<"Sector">
    opportunities?: JsonWithAggregatesFilter<"Sector">
    createdAt?: DateTimeWithAggregatesFilter<"Sector"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Sector"> | Date | string
  }

  export type SharkInvestorWhereInput = {
    AND?: SharkInvestorWhereInput | SharkInvestorWhereInput[]
    OR?: SharkInvestorWhereInput[]
    NOT?: SharkInvestorWhereInput | SharkInvestorWhereInput[]
    id?: StringFilter<"SharkInvestor"> | string
    imageUrl?: StringFilter<"SharkInvestor"> | string
    sharkName?: StringFilter<"SharkInvestor"> | string
    description?: StringFilter<"SharkInvestor"> | string
    netWorth?: StringFilter<"SharkInvestor"> | string
    portfolio?: StringFilter<"SharkInvestor"> | string
    sectorFocus?: JsonFilter<"SharkInvestor">
    stageFocus?: JsonFilter<"SharkInvestor">
    notableInvestments?: JsonFilter<"SharkInvestor">
    achievements?: JsonFilter<"SharkInvestor">
    smLink?: JsonFilter<"SharkInvestor">
    createdAt?: DateTimeFilter<"SharkInvestor"> | Date | string
    updatedAt?: DateTimeFilter<"SharkInvestor"> | Date | string
  }

  export type SharkInvestorOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    sharkName?: SortOrder
    description?: SortOrder
    netWorth?: SortOrder
    portfolio?: SortOrder
    sectorFocus?: SortOrder
    stageFocus?: SortOrder
    notableInvestments?: SortOrder
    achievements?: SortOrder
    smLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharkInvestorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sharkName?: string
    AND?: SharkInvestorWhereInput | SharkInvestorWhereInput[]
    OR?: SharkInvestorWhereInput[]
    NOT?: SharkInvestorWhereInput | SharkInvestorWhereInput[]
    imageUrl?: StringFilter<"SharkInvestor"> | string
    description?: StringFilter<"SharkInvestor"> | string
    netWorth?: StringFilter<"SharkInvestor"> | string
    portfolio?: StringFilter<"SharkInvestor"> | string
    sectorFocus?: JsonFilter<"SharkInvestor">
    stageFocus?: JsonFilter<"SharkInvestor">
    notableInvestments?: JsonFilter<"SharkInvestor">
    achievements?: JsonFilter<"SharkInvestor">
    smLink?: JsonFilter<"SharkInvestor">
    createdAt?: DateTimeFilter<"SharkInvestor"> | Date | string
    updatedAt?: DateTimeFilter<"SharkInvestor"> | Date | string
  }, "id" | "sharkName">

  export type SharkInvestorOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    sharkName?: SortOrder
    description?: SortOrder
    netWorth?: SortOrder
    portfolio?: SortOrder
    sectorFocus?: SortOrder
    stageFocus?: SortOrder
    notableInvestments?: SortOrder
    achievements?: SortOrder
    smLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SharkInvestorCountOrderByAggregateInput
    _max?: SharkInvestorMaxOrderByAggregateInput
    _min?: SharkInvestorMinOrderByAggregateInput
  }

  export type SharkInvestorScalarWhereWithAggregatesInput = {
    AND?: SharkInvestorScalarWhereWithAggregatesInput | SharkInvestorScalarWhereWithAggregatesInput[]
    OR?: SharkInvestorScalarWhereWithAggregatesInput[]
    NOT?: SharkInvestorScalarWhereWithAggregatesInput | SharkInvestorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SharkInvestor"> | string
    imageUrl?: StringWithAggregatesFilter<"SharkInvestor"> | string
    sharkName?: StringWithAggregatesFilter<"SharkInvestor"> | string
    description?: StringWithAggregatesFilter<"SharkInvestor"> | string
    netWorth?: StringWithAggregatesFilter<"SharkInvestor"> | string
    portfolio?: StringWithAggregatesFilter<"SharkInvestor"> | string
    sectorFocus?: JsonWithAggregatesFilter<"SharkInvestor">
    stageFocus?: JsonWithAggregatesFilter<"SharkInvestor">
    notableInvestments?: JsonWithAggregatesFilter<"SharkInvestor">
    achievements?: JsonWithAggregatesFilter<"SharkInvestor">
    smLink?: JsonWithAggregatesFilter<"SharkInvestor">
    createdAt?: DateTimeWithAggregatesFilter<"SharkInvestor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SharkInvestor"> | Date | string
  }

  export type BrokerWhereInput = {
    AND?: BrokerWhereInput | BrokerWhereInput[]
    OR?: BrokerWhereInput[]
    NOT?: BrokerWhereInput | BrokerWhereInput[]
    id?: StringFilter<"Broker"> | string
    companyName?: StringFilter<"Broker"> | string
    companyLogo?: StringFilter<"Broker"> | string
    ratings?: FloatFilter<"Broker"> | number
    reviews?: FloatFilter<"Broker"> | number
    accounts?: StringFilter<"Broker"> | string
    openAccLink?: StringFilter<"Broker"> | string
    learnMore?: StringFilter<"Broker"> | string
    tradingCategory?: StringNullableListFilter<"Broker">
    accOpenCharge?: StringFilter<"Broker"> | string
    maintainanceCharge?: StringFilter<"Broker"> | string
    deliveryCharge?: StringFilter<"Broker"> | string
    intradayBrokerage?: StringFilter<"Broker"> | string
    createdAt?: DateTimeFilter<"Broker"> | Date | string
    updatedAt?: DateTimeFilter<"Broker"> | Date | string
  }

  export type BrokerOrderByWithRelationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyLogo?: SortOrder
    ratings?: SortOrder
    reviews?: SortOrder
    accounts?: SortOrder
    openAccLink?: SortOrder
    learnMore?: SortOrder
    tradingCategory?: SortOrder
    accOpenCharge?: SortOrder
    maintainanceCharge?: SortOrder
    deliveryCharge?: SortOrder
    intradayBrokerage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrokerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    companyName?: string
    AND?: BrokerWhereInput | BrokerWhereInput[]
    OR?: BrokerWhereInput[]
    NOT?: BrokerWhereInput | BrokerWhereInput[]
    companyLogo?: StringFilter<"Broker"> | string
    ratings?: FloatFilter<"Broker"> | number
    reviews?: FloatFilter<"Broker"> | number
    accounts?: StringFilter<"Broker"> | string
    openAccLink?: StringFilter<"Broker"> | string
    learnMore?: StringFilter<"Broker"> | string
    tradingCategory?: StringNullableListFilter<"Broker">
    accOpenCharge?: StringFilter<"Broker"> | string
    maintainanceCharge?: StringFilter<"Broker"> | string
    deliveryCharge?: StringFilter<"Broker"> | string
    intradayBrokerage?: StringFilter<"Broker"> | string
    createdAt?: DateTimeFilter<"Broker"> | Date | string
    updatedAt?: DateTimeFilter<"Broker"> | Date | string
  }, "id" | "companyName">

  export type BrokerOrderByWithAggregationInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyLogo?: SortOrder
    ratings?: SortOrder
    reviews?: SortOrder
    accounts?: SortOrder
    openAccLink?: SortOrder
    learnMore?: SortOrder
    tradingCategory?: SortOrder
    accOpenCharge?: SortOrder
    maintainanceCharge?: SortOrder
    deliveryCharge?: SortOrder
    intradayBrokerage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BrokerCountOrderByAggregateInput
    _avg?: BrokerAvgOrderByAggregateInput
    _max?: BrokerMaxOrderByAggregateInput
    _min?: BrokerMinOrderByAggregateInput
    _sum?: BrokerSumOrderByAggregateInput
  }

  export type BrokerScalarWhereWithAggregatesInput = {
    AND?: BrokerScalarWhereWithAggregatesInput | BrokerScalarWhereWithAggregatesInput[]
    OR?: BrokerScalarWhereWithAggregatesInput[]
    NOT?: BrokerScalarWhereWithAggregatesInput | BrokerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Broker"> | string
    companyName?: StringWithAggregatesFilter<"Broker"> | string
    companyLogo?: StringWithAggregatesFilter<"Broker"> | string
    ratings?: FloatWithAggregatesFilter<"Broker"> | number
    reviews?: FloatWithAggregatesFilter<"Broker"> | number
    accounts?: StringWithAggregatesFilter<"Broker"> | string
    openAccLink?: StringWithAggregatesFilter<"Broker"> | string
    learnMore?: StringWithAggregatesFilter<"Broker"> | string
    tradingCategory?: StringNullableListFilter<"Broker">
    accOpenCharge?: StringWithAggregatesFilter<"Broker"> | string
    maintainanceCharge?: StringWithAggregatesFilter<"Broker"> | string
    deliveryCharge?: StringWithAggregatesFilter<"Broker"> | string
    intradayBrokerage?: StringWithAggregatesFilter<"Broker"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Broker"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Broker"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phone: string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phone: string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    password: string
    phone: string
    isEmailVerified?: boolean
    emailVerificationToken?: string | null
    emailVerificationExpiry?: Date | string | null
    forgotPasswordToken?: string | null
    forgotPasswordExpiry?: Date | string | null
    refreshToken?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isEmailVerified?: BoolFieldUpdateOperationsInput | boolean
    emailVerificationToken?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerificationExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    forgotPasswordToken?: NullableStringFieldUpdateOperationsInput | string | null
    forgotPasswordExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IpoCreateInput = {
    id?: string
    companyName: string
    priceBand: string
    openDate: Date | string
    closeDate: Date | string
    issueSize: string
    issueType: string
    listingDate: Date | string
    status: $Enums.IpoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IpoUncheckedCreateInput = {
    id?: string
    companyName: string
    priceBand: string
    openDate: Date | string
    closeDate: Date | string
    issueSize: string
    issueType: string
    listingDate: Date | string
    status: $Enums.IpoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IpoUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIpoStatusFieldUpdateOperationsInput | $Enums.IpoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IpoUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIpoStatusFieldUpdateOperationsInput | $Enums.IpoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IpoCreateManyInput = {
    id?: string
    companyName: string
    priceBand: string
    openDate: Date | string
    closeDate: Date | string
    issueSize: string
    issueType: string
    listingDate: Date | string
    status: $Enums.IpoStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type IpoUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIpoStatusFieldUpdateOperationsInput | $Enums.IpoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IpoUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    priceBand?: StringFieldUpdateOperationsInput | string
    openDate?: DateTimeFieldUpdateOperationsInput | Date | string
    closeDate?: DateTimeFieldUpdateOperationsInput | Date | string
    issueSize?: StringFieldUpdateOperationsInput | string
    issueType?: StringFieldUpdateOperationsInput | string
    listingDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumIpoStatusFieldUpdateOperationsInput | $Enums.IpoStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BlogCreateInput = {
    id?: string
    title: string
    imageUrl: string
    publishDate?: Date | string
    externalLink: string
  }

  export type BlogUncheckedCreateInput = {
    id?: string
    title: string
    imageUrl: string
    publishDate?: Date | string
    externalLink: string
  }

  export type BlogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    externalLink?: StringFieldUpdateOperationsInput | string
  }

  export type BlogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    externalLink?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCreateManyInput = {
    id?: string
    title: string
    imageUrl: string
    publishDate?: Date | string
    externalLink: string
  }

  export type BlogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    externalLink?: StringFieldUpdateOperationsInput | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    publishDate?: DateTimeFieldUpdateOperationsInput | Date | string
    externalLink?: StringFieldUpdateOperationsInput | string
  }

  export type SectorCreateInput = {
    id?: string
    sectorName: string
    sectorDesc: string
    marketCaps: JsonNullValueInput | InputJsonValue
    marketInsights: JsonNullValueInput | InputJsonValue
    opportunities: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorUncheckedCreateInput = {
    id?: string
    sectorName: string
    sectorDesc: string
    marketCaps: JsonNullValueInput | InputJsonValue
    marketInsights: JsonNullValueInput | InputJsonValue
    opportunities: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorName?: StringFieldUpdateOperationsInput | string
    sectorDesc?: StringFieldUpdateOperationsInput | string
    marketCaps?: JsonNullValueInput | InputJsonValue
    marketInsights?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorName?: StringFieldUpdateOperationsInput | string
    sectorDesc?: StringFieldUpdateOperationsInput | string
    marketCaps?: JsonNullValueInput | InputJsonValue
    marketInsights?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorCreateManyInput = {
    id?: string
    sectorName: string
    sectorDesc: string
    marketCaps: JsonNullValueInput | InputJsonValue
    marketInsights: JsonNullValueInput | InputJsonValue
    opportunities: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SectorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorName?: StringFieldUpdateOperationsInput | string
    sectorDesc?: StringFieldUpdateOperationsInput | string
    marketCaps?: JsonNullValueInput | InputJsonValue
    marketInsights?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SectorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sectorName?: StringFieldUpdateOperationsInput | string
    sectorDesc?: StringFieldUpdateOperationsInput | string
    marketCaps?: JsonNullValueInput | InputJsonValue
    marketInsights?: JsonNullValueInput | InputJsonValue
    opportunities?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharkInvestorCreateInput = {
    id?: string
    imageUrl: string
    sharkName: string
    description: string
    netWorth: string
    portfolio: string
    sectorFocus: JsonNullValueInput | InputJsonValue
    stageFocus: JsonNullValueInput | InputJsonValue
    notableInvestments: JsonNullValueInput | InputJsonValue
    achievements: JsonNullValueInput | InputJsonValue
    smLink: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharkInvestorUncheckedCreateInput = {
    id?: string
    imageUrl: string
    sharkName: string
    description: string
    netWorth: string
    portfolio: string
    sectorFocus: JsonNullValueInput | InputJsonValue
    stageFocus: JsonNullValueInput | InputJsonValue
    notableInvestments: JsonNullValueInput | InputJsonValue
    achievements: JsonNullValueInput | InputJsonValue
    smLink: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharkInvestorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sharkName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    netWorth?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    sectorFocus?: JsonNullValueInput | InputJsonValue
    stageFocus?: JsonNullValueInput | InputJsonValue
    notableInvestments?: JsonNullValueInput | InputJsonValue
    achievements?: JsonNullValueInput | InputJsonValue
    smLink?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharkInvestorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sharkName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    netWorth?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    sectorFocus?: JsonNullValueInput | InputJsonValue
    stageFocus?: JsonNullValueInput | InputJsonValue
    notableInvestments?: JsonNullValueInput | InputJsonValue
    achievements?: JsonNullValueInput | InputJsonValue
    smLink?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharkInvestorCreateManyInput = {
    id?: string
    imageUrl: string
    sharkName: string
    description: string
    netWorth: string
    portfolio: string
    sectorFocus: JsonNullValueInput | InputJsonValue
    stageFocus: JsonNullValueInput | InputJsonValue
    notableInvestments: JsonNullValueInput | InputJsonValue
    achievements: JsonNullValueInput | InputJsonValue
    smLink: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SharkInvestorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sharkName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    netWorth?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    sectorFocus?: JsonNullValueInput | InputJsonValue
    stageFocus?: JsonNullValueInput | InputJsonValue
    notableInvestments?: JsonNullValueInput | InputJsonValue
    achievements?: JsonNullValueInput | InputJsonValue
    smLink?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SharkInvestorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    sharkName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    netWorth?: StringFieldUpdateOperationsInput | string
    portfolio?: StringFieldUpdateOperationsInput | string
    sectorFocus?: JsonNullValueInput | InputJsonValue
    stageFocus?: JsonNullValueInput | InputJsonValue
    notableInvestments?: JsonNullValueInput | InputJsonValue
    achievements?: JsonNullValueInput | InputJsonValue
    smLink?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrokerCreateInput = {
    id?: string
    companyName: string
    companyLogo: string
    ratings: number
    reviews: number
    accounts: string
    openAccLink: string
    learnMore: string
    tradingCategory?: BrokerCreatetradingCategoryInput | string[]
    accOpenCharge: string
    maintainanceCharge: string
    deliveryCharge: string
    intradayBrokerage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrokerUncheckedCreateInput = {
    id?: string
    companyName: string
    companyLogo: string
    ratings: number
    reviews: number
    accounts: string
    openAccLink: string
    learnMore: string
    tradingCategory?: BrokerCreatetradingCategoryInput | string[]
    accOpenCharge: string
    maintainanceCharge: string
    deliveryCharge: string
    intradayBrokerage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrokerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyLogo?: StringFieldUpdateOperationsInput | string
    ratings?: FloatFieldUpdateOperationsInput | number
    reviews?: FloatFieldUpdateOperationsInput | number
    accounts?: StringFieldUpdateOperationsInput | string
    openAccLink?: StringFieldUpdateOperationsInput | string
    learnMore?: StringFieldUpdateOperationsInput | string
    tradingCategory?: BrokerUpdatetradingCategoryInput | string[]
    accOpenCharge?: StringFieldUpdateOperationsInput | string
    maintainanceCharge?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: StringFieldUpdateOperationsInput | string
    intradayBrokerage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrokerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyLogo?: StringFieldUpdateOperationsInput | string
    ratings?: FloatFieldUpdateOperationsInput | number
    reviews?: FloatFieldUpdateOperationsInput | number
    accounts?: StringFieldUpdateOperationsInput | string
    openAccLink?: StringFieldUpdateOperationsInput | string
    learnMore?: StringFieldUpdateOperationsInput | string
    tradingCategory?: BrokerUpdatetradingCategoryInput | string[]
    accOpenCharge?: StringFieldUpdateOperationsInput | string
    maintainanceCharge?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: StringFieldUpdateOperationsInput | string
    intradayBrokerage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrokerCreateManyInput = {
    id?: string
    companyName: string
    companyLogo: string
    ratings: number
    reviews: number
    accounts: string
    openAccLink: string
    learnMore: string
    tradingCategory?: BrokerCreatetradingCategoryInput | string[]
    accOpenCharge: string
    maintainanceCharge: string
    deliveryCharge: string
    intradayBrokerage: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BrokerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyLogo?: StringFieldUpdateOperationsInput | string
    ratings?: FloatFieldUpdateOperationsInput | number
    reviews?: FloatFieldUpdateOperationsInput | number
    accounts?: StringFieldUpdateOperationsInput | string
    openAccLink?: StringFieldUpdateOperationsInput | string
    learnMore?: StringFieldUpdateOperationsInput | string
    tradingCategory?: BrokerUpdatetradingCategoryInput | string[]
    accOpenCharge?: StringFieldUpdateOperationsInput | string
    maintainanceCharge?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: StringFieldUpdateOperationsInput | string
    intradayBrokerage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BrokerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    companyLogo?: StringFieldUpdateOperationsInput | string
    ratings?: FloatFieldUpdateOperationsInput | number
    reviews?: FloatFieldUpdateOperationsInput | number
    accounts?: StringFieldUpdateOperationsInput | string
    openAccLink?: StringFieldUpdateOperationsInput | string
    learnMore?: StringFieldUpdateOperationsInput | string
    tradingCategory?: BrokerUpdatetradingCategoryInput | string[]
    accOpenCharge?: StringFieldUpdateOperationsInput | string
    maintainanceCharge?: StringFieldUpdateOperationsInput | string
    deliveryCharge?: StringFieldUpdateOperationsInput | string
    intradayBrokerage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpiry?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordExpiry?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpiry?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordExpiry?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    isEmailVerified?: SortOrder
    emailVerificationToken?: SortOrder
    emailVerificationExpiry?: SortOrder
    forgotPasswordToken?: SortOrder
    forgotPasswordExpiry?: SortOrder
    refreshToken?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumIpoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IpoStatus | EnumIpoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IpoStatus[] | ListEnumIpoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IpoStatus[] | ListEnumIpoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIpoStatusFilter<$PrismaModel> | $Enums.IpoStatus
  }

  export type IpoCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IpoMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IpoMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    priceBand?: SortOrder
    openDate?: SortOrder
    closeDate?: SortOrder
    issueSize?: SortOrder
    issueType?: SortOrder
    listingDate?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumIpoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IpoStatus | EnumIpoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IpoStatus[] | ListEnumIpoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IpoStatus[] | ListEnumIpoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIpoStatusWithAggregatesFilter<$PrismaModel> | $Enums.IpoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIpoStatusFilter<$PrismaModel>
    _max?: NestedEnumIpoStatusFilter<$PrismaModel>
  }

  export type BlogCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    publishDate?: SortOrder
    externalLink?: SortOrder
  }

  export type BlogMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    publishDate?: SortOrder
    externalLink?: SortOrder
  }

  export type BlogMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    publishDate?: SortOrder
    externalLink?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type SectorCountOrderByAggregateInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    marketCaps?: SortOrder
    marketInsights?: SortOrder
    opportunities?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorMaxOrderByAggregateInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SectorMinOrderByAggregateInput = {
    id?: SortOrder
    sectorName?: SortOrder
    sectorDesc?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type SharkInvestorCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    sharkName?: SortOrder
    description?: SortOrder
    netWorth?: SortOrder
    portfolio?: SortOrder
    sectorFocus?: SortOrder
    stageFocus?: SortOrder
    notableInvestments?: SortOrder
    achievements?: SortOrder
    smLink?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharkInvestorMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    sharkName?: SortOrder
    description?: SortOrder
    netWorth?: SortOrder
    portfolio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SharkInvestorMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    sharkName?: SortOrder
    description?: SortOrder
    netWorth?: SortOrder
    portfolio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type BrokerCountOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyLogo?: SortOrder
    ratings?: SortOrder
    reviews?: SortOrder
    accounts?: SortOrder
    openAccLink?: SortOrder
    learnMore?: SortOrder
    tradingCategory?: SortOrder
    accOpenCharge?: SortOrder
    maintainanceCharge?: SortOrder
    deliveryCharge?: SortOrder
    intradayBrokerage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrokerAvgOrderByAggregateInput = {
    ratings?: SortOrder
    reviews?: SortOrder
  }

  export type BrokerMaxOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyLogo?: SortOrder
    ratings?: SortOrder
    reviews?: SortOrder
    accounts?: SortOrder
    openAccLink?: SortOrder
    learnMore?: SortOrder
    accOpenCharge?: SortOrder
    maintainanceCharge?: SortOrder
    deliveryCharge?: SortOrder
    intradayBrokerage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrokerMinOrderByAggregateInput = {
    id?: SortOrder
    companyName?: SortOrder
    companyLogo?: SortOrder
    ratings?: SortOrder
    reviews?: SortOrder
    accounts?: SortOrder
    openAccLink?: SortOrder
    learnMore?: SortOrder
    accOpenCharge?: SortOrder
    maintainanceCharge?: SortOrder
    deliveryCharge?: SortOrder
    intradayBrokerage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BrokerSumOrderByAggregateInput = {
    ratings?: SortOrder
    reviews?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumIpoStatusFieldUpdateOperationsInput = {
    set?: $Enums.IpoStatus
  }

  export type BrokerCreatetradingCategoryInput = {
    set: string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BrokerUpdatetradingCategoryInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumIpoStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IpoStatus | EnumIpoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IpoStatus[] | ListEnumIpoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IpoStatus[] | ListEnumIpoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIpoStatusFilter<$PrismaModel> | $Enums.IpoStatus
  }

  export type NestedEnumIpoStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IpoStatus | EnumIpoStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IpoStatus[] | ListEnumIpoStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IpoStatus[] | ListEnumIpoStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIpoStatusWithAggregatesFilter<$PrismaModel> | $Enums.IpoStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIpoStatusFilter<$PrismaModel>
    _max?: NestedEnumIpoStatusFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



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