
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
 * Model Branch
 * 
 */
export type Branch = $Result.DefaultSelection<Prisma.$BranchPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Booking
 * 
 */
export type Booking = $Result.DefaultSelection<Prisma.$BookingPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model MasterAvailability
 * 
 */
export type MasterAvailability = $Result.DefaultSelection<Prisma.$MasterAvailabilityPayload>
/**
 * Model BookingLog
 * 
 */
export type BookingLog = $Result.DefaultSelection<Prisma.$BookingLogPayload>
/**
 * Model ServiceMaster
 * 
 */
export type ServiceMaster = $Result.DefaultSelection<Prisma.$ServiceMasterPayload>
/**
 * Model BookingMessage
 * 
 */
export type BookingMessage = $Result.DefaultSelection<Prisma.$BookingMessagePayload>

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.branch`: Exposes CRUD operations for the **Branch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Branches
    * const branches = await prisma.branch.findMany()
    * ```
    */
  get branch(): Prisma.BranchDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.booking`: Exposes CRUD operations for the **Booking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bookings
    * const bookings = await prisma.booking.findMany()
    * ```
    */
  get booking(): Prisma.BookingDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.masterAvailability`: Exposes CRUD operations for the **MasterAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MasterAvailabilities
    * const masterAvailabilities = await prisma.masterAvailability.findMany()
    * ```
    */
  get masterAvailability(): Prisma.MasterAvailabilityDelegate<ExtArgs>;

  /**
   * `prisma.bookingLog`: Exposes CRUD operations for the **BookingLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingLogs
    * const bookingLogs = await prisma.bookingLog.findMany()
    * ```
    */
  get bookingLog(): Prisma.BookingLogDelegate<ExtArgs>;

  /**
   * `prisma.serviceMaster`: Exposes CRUD operations for the **ServiceMaster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServiceMasters
    * const serviceMasters = await prisma.serviceMaster.findMany()
    * ```
    */
  get serviceMaster(): Prisma.ServiceMasterDelegate<ExtArgs>;

  /**
   * `prisma.bookingMessage`: Exposes CRUD operations for the **BookingMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BookingMessages
    * const bookingMessages = await prisma.bookingMessage.findMany()
    * ```
    */
  get bookingMessage(): Prisma.BookingMessageDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
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
    User: 'User',
    Branch: 'Branch',
    Category: 'Category',
    Service: 'Service',
    Client: 'Client',
    Booking: 'Booking',
    Review: 'Review',
    MasterAvailability: 'MasterAvailability',
    BookingLog: 'BookingLog',
    ServiceMaster: 'ServiceMaster',
    BookingMessage: 'BookingMessage'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "branch" | "category" | "service" | "client" | "booking" | "review" | "masterAvailability" | "bookingLog" | "serviceMaster" | "bookingMessage"
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
      Branch: {
        payload: Prisma.$BranchPayload<ExtArgs>
        fields: Prisma.BranchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BranchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BranchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findFirst: {
            args: Prisma.BranchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BranchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          findMany: {
            args: Prisma.BranchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          create: {
            args: Prisma.BranchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          createMany: {
            args: Prisma.BranchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BranchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>[]
          }
          delete: {
            args: Prisma.BranchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          update: {
            args: Prisma.BranchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          deleteMany: {
            args: Prisma.BranchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BranchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BranchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BranchPayload>
          }
          aggregate: {
            args: Prisma.BranchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBranch>
          }
          groupBy: {
            args: Prisma.BranchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BranchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BranchCountArgs<ExtArgs>
            result: $Utils.Optional<BranchCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Booking: {
        payload: Prisma.$BookingPayload<ExtArgs>
        fields: Prisma.BookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findFirst: {
            args: Prisma.BookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          findMany: {
            args: Prisma.BookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          create: {
            args: Prisma.BookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          createMany: {
            args: Prisma.BookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>[]
          }
          delete: {
            args: Prisma.BookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          update: {
            args: Prisma.BookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          deleteMany: {
            args: Prisma.BookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingPayload>
          }
          aggregate: {
            args: Prisma.BookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBooking>
          }
          groupBy: {
            args: Prisma.BookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingCountArgs<ExtArgs>
            result: $Utils.Optional<BookingCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      MasterAvailability: {
        payload: Prisma.$MasterAvailabilityPayload<ExtArgs>
        fields: Prisma.MasterAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MasterAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MasterAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.MasterAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MasterAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterAvailabilityPayload>
          }
          findMany: {
            args: Prisma.MasterAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterAvailabilityPayload>[]
          }
          create: {
            args: Prisma.MasterAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterAvailabilityPayload>
          }
          createMany: {
            args: Prisma.MasterAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MasterAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.MasterAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterAvailabilityPayload>
          }
          update: {
            args: Prisma.MasterAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.MasterAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MasterAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MasterAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MasterAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.MasterAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMasterAvailability>
          }
          groupBy: {
            args: Prisma.MasterAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<MasterAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.MasterAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<MasterAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      BookingLog: {
        payload: Prisma.$BookingLogPayload<ExtArgs>
        fields: Prisma.BookingLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingLogPayload>
          }
          findFirst: {
            args: Prisma.BookingLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingLogPayload>
          }
          findMany: {
            args: Prisma.BookingLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingLogPayload>[]
          }
          create: {
            args: Prisma.BookingLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingLogPayload>
          }
          createMany: {
            args: Prisma.BookingLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingLogPayload>[]
          }
          delete: {
            args: Prisma.BookingLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingLogPayload>
          }
          update: {
            args: Prisma.BookingLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingLogPayload>
          }
          deleteMany: {
            args: Prisma.BookingLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingLogPayload>
          }
          aggregate: {
            args: Prisma.BookingLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingLog>
          }
          groupBy: {
            args: Prisma.BookingLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingLogCountArgs<ExtArgs>
            result: $Utils.Optional<BookingLogCountAggregateOutputType> | number
          }
        }
      }
      ServiceMaster: {
        payload: Prisma.$ServiceMasterPayload<ExtArgs>
        fields: Prisma.ServiceMasterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceMasterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceMasterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceMasterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceMasterPayload>
          }
          findFirst: {
            args: Prisma.ServiceMasterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceMasterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceMasterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceMasterPayload>
          }
          findMany: {
            args: Prisma.ServiceMasterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceMasterPayload>[]
          }
          create: {
            args: Prisma.ServiceMasterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceMasterPayload>
          }
          createMany: {
            args: Prisma.ServiceMasterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceMasterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceMasterPayload>[]
          }
          delete: {
            args: Prisma.ServiceMasterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceMasterPayload>
          }
          update: {
            args: Prisma.ServiceMasterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceMasterPayload>
          }
          deleteMany: {
            args: Prisma.ServiceMasterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceMasterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ServiceMasterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServiceMasterPayload>
          }
          aggregate: {
            args: Prisma.ServiceMasterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServiceMaster>
          }
          groupBy: {
            args: Prisma.ServiceMasterGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceMasterGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceMasterCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceMasterCountAggregateOutputType> | number
          }
        }
      }
      BookingMessage: {
        payload: Prisma.$BookingMessagePayload<ExtArgs>
        fields: Prisma.BookingMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BookingMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BookingMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingMessagePayload>
          }
          findFirst: {
            args: Prisma.BookingMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BookingMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingMessagePayload>
          }
          findMany: {
            args: Prisma.BookingMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingMessagePayload>[]
          }
          create: {
            args: Prisma.BookingMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingMessagePayload>
          }
          createMany: {
            args: Prisma.BookingMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BookingMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingMessagePayload>[]
          }
          delete: {
            args: Prisma.BookingMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingMessagePayload>
          }
          update: {
            args: Prisma.BookingMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingMessagePayload>
          }
          deleteMany: {
            args: Prisma.BookingMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BookingMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BookingMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BookingMessagePayload>
          }
          aggregate: {
            args: Prisma.BookingMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBookingMessage>
          }
          groupBy: {
            args: Prisma.BookingMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<BookingMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.BookingMessageCountArgs<ExtArgs>
            result: $Utils.Optional<BookingMessageCountAggregateOutputType> | number
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    services: number
    bookings: number
    serviceMasters: number
    reviews: number
    categories: number
    masterAvailability: number
    bookingLogs: number
    clients: number
    managedBranches: number
    createdBranches: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | UserCountOutputTypeCountServicesArgs
    bookings?: boolean | UserCountOutputTypeCountBookingsArgs
    serviceMasters?: boolean | UserCountOutputTypeCountServiceMastersArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    categories?: boolean | UserCountOutputTypeCountCategoriesArgs
    masterAvailability?: boolean | UserCountOutputTypeCountMasterAvailabilityArgs
    bookingLogs?: boolean | UserCountOutputTypeCountBookingLogsArgs
    clients?: boolean | UserCountOutputTypeCountClientsArgs
    managedBranches?: boolean | UserCountOutputTypeCountManagedBranchesArgs
    createdBranches?: boolean | UserCountOutputTypeCountCreatedBranchesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountServiceMastersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceMasterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMasterAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterAvailabilityWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBookingLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountManagedBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
  }


  /**
   * Count Type BranchCountOutputType
   */

  export type BranchCountOutputType = {
    users: number
    services: number
    bookings: number
    reviews: number
  }

  export type BranchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | BranchCountOutputTypeCountUsersArgs
    services?: boolean | BranchCountOutputTypeCountServicesArgs
    bookings?: boolean | BranchCountOutputTypeCountBookingsArgs
    reviews?: boolean | BranchCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BranchCountOutputType
     */
    select?: BranchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * BranchCountOutputType without action
   */
  export type BranchCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    services: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | CategoryCountOutputTypeCountServicesArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    bookings: number
    masters: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bookings?: boolean | ServiceCountOutputTypeCountBookingsArgs
    masters?: boolean | ServiceCountOutputTypeCountMastersArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountMastersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceMasterWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    reviews: number
    bookings: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ClientCountOutputTypeCountReviewsArgs
    bookings?: boolean | ClientCountOutputTypeCountBookingsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountBookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
  }


  /**
   * Count Type BookingCountOutputType
   */

  export type BookingCountOutputType = {
    services: number
    review: number
    logs: number
    messages: number
  }

  export type BookingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | BookingCountOutputTypeCountServicesArgs
    review?: boolean | BookingCountOutputTypeCountReviewArgs
    logs?: boolean | BookingCountOutputTypeCountLogsArgs
    messages?: boolean | BookingCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingCountOutputType
     */
    select?: BookingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountServicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingLogWhereInput
  }

  /**
   * BookingCountOutputType without action
   */
  export type BookingCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingMessageWhereInput
  }


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
    email: string | null
    password: string | null
    name: string | null
    image: string | null
    description: string | null
    phoneNumber: string | null
    role: string | null
    chatId: string | null
    nickName: string | null
    branchId: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    image: string | null
    description: string | null
    phoneNumber: string | null
    role: string | null
    chatId: string | null
    nickName: string | null
    branchId: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    image: number
    description: number
    phoneNumber: number
    role: number
    chatId: number
    nickName: number
    branchId: number
    resetToken: number
    resetTokenExpiry: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    image?: true
    description?: true
    phoneNumber?: true
    role?: true
    chatId?: true
    nickName?: true
    branchId?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    image?: true
    description?: true
    phoneNumber?: true
    role?: true
    chatId?: true
    nickName?: true
    branchId?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    image?: true
    description?: true
    phoneNumber?: true
    role?: true
    chatId?: true
    nickName?: true
    branchId?: true
    resetToken?: true
    resetTokenExpiry?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
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
    email: string
    password: string
    name: string
    image: string | null
    description: string | null
    phoneNumber: string | null
    role: string
    chatId: string | null
    nickName: string | null
    branchId: string | null
    resetToken: string | null
    resetTokenExpiry: Date | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
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
    email?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    phoneNumber?: boolean
    role?: boolean
    chatId?: boolean
    nickName?: boolean
    branchId?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    services?: boolean | User$servicesArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    serviceMasters?: boolean | User$serviceMastersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    masterAvailability?: boolean | User$masterAvailabilityArgs<ExtArgs>
    bookingLogs?: boolean | User$bookingLogsArgs<ExtArgs>
    branch?: boolean | User$branchArgs<ExtArgs>
    clients?: boolean | User$clientsArgs<ExtArgs>
    managedBranches?: boolean | User$managedBranchesArgs<ExtArgs>
    createdBranches?: boolean | User$createdBranchesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    phoneNumber?: boolean
    role?: boolean
    chatId?: boolean
    nickName?: boolean
    branchId?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    branch?: boolean | User$branchArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    image?: boolean
    description?: boolean
    phoneNumber?: boolean
    role?: boolean
    chatId?: boolean
    nickName?: boolean
    branchId?: boolean
    resetToken?: boolean
    resetTokenExpiry?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | User$servicesArgs<ExtArgs>
    bookings?: boolean | User$bookingsArgs<ExtArgs>
    serviceMasters?: boolean | User$serviceMastersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    categories?: boolean | User$categoriesArgs<ExtArgs>
    masterAvailability?: boolean | User$masterAvailabilityArgs<ExtArgs>
    bookingLogs?: boolean | User$bookingLogsArgs<ExtArgs>
    branch?: boolean | User$branchArgs<ExtArgs>
    clients?: boolean | User$clientsArgs<ExtArgs>
    managedBranches?: boolean | User$managedBranchesArgs<ExtArgs>
    createdBranches?: boolean | User$createdBranchesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    branch?: boolean | User$branchArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      serviceMasters: Prisma.$ServiceMasterPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      masterAvailability: Prisma.$MasterAvailabilityPayload<ExtArgs>[]
      bookingLogs: Prisma.$BookingLogPayload<ExtArgs>[]
      branch: Prisma.$BranchPayload<ExtArgs> | null
      clients: Prisma.$ClientPayload<ExtArgs>[]
      managedBranches: Prisma.$BranchPayload<ExtArgs>[]
      createdBranches: Prisma.$BranchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      image: string | null
      description: string | null
      phoneNumber: string | null
      role: string
      chatId: string | null
      nickName: string | null
      branchId: string | null
      resetToken: string | null
      resetTokenExpiry: Date | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends User$servicesArgs<ExtArgs> = {}>(args?: Subset<T, User$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany"> | Null>
    bookings<T extends User$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    serviceMasters<T extends User$serviceMastersArgs<ExtArgs> = {}>(args?: Subset<T, User$serviceMastersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceMasterPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    categories<T extends User$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany"> | Null>
    masterAvailability<T extends User$masterAvailabilityArgs<ExtArgs> = {}>(args?: Subset<T, User$masterAvailabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterAvailabilityPayload<ExtArgs>, T, "findMany"> | Null>
    bookingLogs<T extends User$bookingLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$bookingLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingLogPayload<ExtArgs>, T, "findMany"> | Null>
    branch<T extends User$branchArgs<ExtArgs> = {}>(args?: Subset<T, User$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    clients<T extends User$clientsArgs<ExtArgs> = {}>(args?: Subset<T, User$clientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany"> | Null>
    managedBranches<T extends User$managedBranchesArgs<ExtArgs> = {}>(args?: Subset<T, User$managedBranchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany"> | Null>
    createdBranches<T extends User$createdBranchesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdBranchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany"> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly description: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly chatId: FieldRef<"User", 'String'>
    readonly nickName: FieldRef<"User", 'String'>
    readonly branchId: FieldRef<"User", 'String'>
    readonly resetToken: FieldRef<"User", 'String'>
    readonly resetTokenExpiry: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly deletedAt: FieldRef<"User", 'DateTime'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  }

  /**
   * User.services
   */
  export type User$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * User.bookings
   */
  export type User$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * User.serviceMasters
   */
  export type User$serviceMastersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterInclude<ExtArgs> | null
    where?: ServiceMasterWhereInput
    orderBy?: ServiceMasterOrderByWithRelationInput | ServiceMasterOrderByWithRelationInput[]
    cursor?: ServiceMasterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceMasterScalarFieldEnum | ServiceMasterScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.categories
   */
  export type User$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * User.masterAvailability
   */
  export type User$masterAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterAvailability
     */
    select?: MasterAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterAvailabilityInclude<ExtArgs> | null
    where?: MasterAvailabilityWhereInput
    orderBy?: MasterAvailabilityOrderByWithRelationInput | MasterAvailabilityOrderByWithRelationInput[]
    cursor?: MasterAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MasterAvailabilityScalarFieldEnum | MasterAvailabilityScalarFieldEnum[]
  }

  /**
   * User.bookingLogs
   */
  export type User$bookingLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogInclude<ExtArgs> | null
    where?: BookingLogWhereInput
    orderBy?: BookingLogOrderByWithRelationInput | BookingLogOrderByWithRelationInput[]
    cursor?: BookingLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingLogScalarFieldEnum | BookingLogScalarFieldEnum[]
  }

  /**
   * User.branch
   */
  export type User$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * User.clients
   */
  export type User$clientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    cursor?: ClientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * User.managedBranches
   */
  export type User$managedBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    cursor?: BranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * User.createdBranches
   */
  export type User$createdBranchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    cursor?: BranchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Branch
   */

  export type AggregateBranch = {
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  export type BranchMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phoneNumber: string | null
    description: string | null
    socialMedia: string | null
    city: string | null
    image: string | null
    status: string | null
    superAdminId: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BranchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    phoneNumber: string | null
    description: string | null
    socialMedia: string | null
    city: string | null
    image: string | null
    status: string | null
    superAdminId: string | null
    adminId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type BranchCountAggregateOutputType = {
    id: number
    name: number
    address: number
    phoneNumber: number
    description: number
    socialMedia: number
    city: number
    image: number
    status: number
    superAdminId: number
    adminId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type BranchMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    description?: true
    socialMedia?: true
    city?: true
    image?: true
    status?: true
    superAdminId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BranchMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    description?: true
    socialMedia?: true
    city?: true
    image?: true
    status?: true
    superAdminId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type BranchCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    phoneNumber?: true
    description?: true
    socialMedia?: true
    city?: true
    image?: true
    status?: true
    superAdminId?: true
    adminId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type BranchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branch to aggregate.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Branches
    **/
    _count?: true | BranchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BranchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BranchMaxAggregateInputType
  }

  export type GetBranchAggregateType<T extends BranchAggregateArgs> = {
        [P in keyof T & keyof AggregateBranch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBranch[P]>
      : GetScalarType<T[P], AggregateBranch[P]>
  }




  export type BranchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BranchWhereInput
    orderBy?: BranchOrderByWithAggregationInput | BranchOrderByWithAggregationInput[]
    by: BranchScalarFieldEnum[] | BranchScalarFieldEnum
    having?: BranchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BranchCountAggregateInputType | true
    _min?: BranchMinAggregateInputType
    _max?: BranchMaxAggregateInputType
  }

  export type BranchGroupByOutputType = {
    id: string
    name: string
    address: string | null
    phoneNumber: string | null
    description: string | null
    socialMedia: string | null
    city: string | null
    image: string | null
    status: string
    superAdminId: string
    adminId: string
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: BranchCountAggregateOutputType | null
    _min: BranchMinAggregateOutputType | null
    _max: BranchMaxAggregateOutputType | null
  }

  type GetBranchGroupByPayload<T extends BranchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BranchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BranchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BranchGroupByOutputType[P]>
            : GetScalarType<T[P], BranchGroupByOutputType[P]>
        }
      >
    >


  export type BranchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phoneNumber?: boolean
    description?: boolean
    socialMedia?: boolean
    city?: boolean
    image?: boolean
    status?: boolean
    superAdminId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    superAdmin?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
    users?: boolean | Branch$usersArgs<ExtArgs>
    services?: boolean | Branch$servicesArgs<ExtArgs>
    bookings?: boolean | Branch$bookingsArgs<ExtArgs>
    reviews?: boolean | Branch$reviewsArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    phoneNumber?: boolean
    description?: boolean
    socialMedia?: boolean
    city?: boolean
    image?: boolean
    status?: boolean
    superAdminId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    superAdmin?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["branch"]>

  export type BranchSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    phoneNumber?: boolean
    description?: boolean
    socialMedia?: boolean
    city?: boolean
    image?: boolean
    status?: boolean
    superAdminId?: boolean
    adminId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type BranchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    superAdmin?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
    users?: boolean | Branch$usersArgs<ExtArgs>
    services?: boolean | Branch$servicesArgs<ExtArgs>
    bookings?: boolean | Branch$bookingsArgs<ExtArgs>
    reviews?: boolean | Branch$reviewsArgs<ExtArgs>
    _count?: boolean | BranchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BranchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    superAdmin?: boolean | UserDefaultArgs<ExtArgs>
    admin?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BranchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Branch"
    objects: {
      superAdmin: Prisma.$UserPayload<ExtArgs>
      admin: Prisma.$UserPayload<ExtArgs>
      users: Prisma.$UserPayload<ExtArgs>[]
      services: Prisma.$ServicePayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string | null
      phoneNumber: string | null
      description: string | null
      socialMedia: string | null
      city: string | null
      image: string | null
      status: string
      superAdminId: string
      adminId: string
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["branch"]>
    composites: {}
  }

  type BranchGetPayload<S extends boolean | null | undefined | BranchDefaultArgs> = $Result.GetResult<Prisma.$BranchPayload, S>

  type BranchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BranchFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BranchCountAggregateInputType | true
    }

  export interface BranchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Branch'], meta: { name: 'Branch' } }
    /**
     * Find zero or one Branch that matches the filter.
     * @param {BranchFindUniqueArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BranchFindUniqueArgs>(args: SelectSubset<T, BranchFindUniqueArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Branch that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BranchFindUniqueOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BranchFindUniqueOrThrowArgs>(args: SelectSubset<T, BranchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Branch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BranchFindFirstArgs>(args?: SelectSubset<T, BranchFindFirstArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Branch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindFirstOrThrowArgs} args - Arguments to find a Branch
     * @example
     * // Get one Branch
     * const branch = await prisma.branch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BranchFindFirstOrThrowArgs>(args?: SelectSubset<T, BranchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Branches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Branches
     * const branches = await prisma.branch.findMany()
     * 
     * // Get first 10 Branches
     * const branches = await prisma.branch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const branchWithIdOnly = await prisma.branch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BranchFindManyArgs>(args?: SelectSubset<T, BranchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Branch.
     * @param {BranchCreateArgs} args - Arguments to create a Branch.
     * @example
     * // Create one Branch
     * const Branch = await prisma.branch.create({
     *   data: {
     *     // ... data to create a Branch
     *   }
     * })
     * 
     */
    create<T extends BranchCreateArgs>(args: SelectSubset<T, BranchCreateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Branches.
     * @param {BranchCreateManyArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BranchCreateManyArgs>(args?: SelectSubset<T, BranchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Branches and returns the data saved in the database.
     * @param {BranchCreateManyAndReturnArgs} args - Arguments to create many Branches.
     * @example
     * // Create many Branches
     * const branch = await prisma.branch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Branches and only return the `id`
     * const branchWithIdOnly = await prisma.branch.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BranchCreateManyAndReturnArgs>(args?: SelectSubset<T, BranchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Branch.
     * @param {BranchDeleteArgs} args - Arguments to delete one Branch.
     * @example
     * // Delete one Branch
     * const Branch = await prisma.branch.delete({
     *   where: {
     *     // ... filter to delete one Branch
     *   }
     * })
     * 
     */
    delete<T extends BranchDeleteArgs>(args: SelectSubset<T, BranchDeleteArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Branch.
     * @param {BranchUpdateArgs} args - Arguments to update one Branch.
     * @example
     * // Update one Branch
     * const branch = await prisma.branch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BranchUpdateArgs>(args: SelectSubset<T, BranchUpdateArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Branches.
     * @param {BranchDeleteManyArgs} args - Arguments to filter Branches to delete.
     * @example
     * // Delete a few Branches
     * const { count } = await prisma.branch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BranchDeleteManyArgs>(args?: SelectSubset<T, BranchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Branches
     * const branch = await prisma.branch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BranchUpdateManyArgs>(args: SelectSubset<T, BranchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Branch.
     * @param {BranchUpsertArgs} args - Arguments to update or create a Branch.
     * @example
     * // Update or create a Branch
     * const branch = await prisma.branch.upsert({
     *   create: {
     *     // ... data to create a Branch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Branch we want to update
     *   }
     * })
     */
    upsert<T extends BranchUpsertArgs>(args: SelectSubset<T, BranchUpsertArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Branches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchCountArgs} args - Arguments to filter Branches to count.
     * @example
     * // Count the number of Branches
     * const count = await prisma.branch.count({
     *   where: {
     *     // ... the filter for the Branches we want to count
     *   }
     * })
    **/
    count<T extends BranchCountArgs>(
      args?: Subset<T, BranchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BranchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BranchAggregateArgs>(args: Subset<T, BranchAggregateArgs>): Prisma.PrismaPromise<GetBranchAggregateType<T>>

    /**
     * Group by Branch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BranchGroupByArgs} args - Group by arguments.
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
      T extends BranchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BranchGroupByArgs['orderBy'] }
        : { orderBy?: BranchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BranchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBranchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Branch model
   */
  readonly fields: BranchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Branch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BranchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    superAdmin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    admin<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    users<T extends Branch$usersArgs<ExtArgs> = {}>(args?: Subset<T, Branch$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    services<T extends Branch$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Branch$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany"> | Null>
    bookings<T extends Branch$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    reviews<T extends Branch$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Branch$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Branch model
   */ 
  interface BranchFieldRefs {
    readonly id: FieldRef<"Branch", 'String'>
    readonly name: FieldRef<"Branch", 'String'>
    readonly address: FieldRef<"Branch", 'String'>
    readonly phoneNumber: FieldRef<"Branch", 'String'>
    readonly description: FieldRef<"Branch", 'String'>
    readonly socialMedia: FieldRef<"Branch", 'String'>
    readonly city: FieldRef<"Branch", 'String'>
    readonly image: FieldRef<"Branch", 'String'>
    readonly status: FieldRef<"Branch", 'String'>
    readonly superAdminId: FieldRef<"Branch", 'String'>
    readonly adminId: FieldRef<"Branch", 'String'>
    readonly createdAt: FieldRef<"Branch", 'DateTime'>
    readonly updatedAt: FieldRef<"Branch", 'DateTime'>
    readonly deletedAt: FieldRef<"Branch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Branch findUnique
   */
  export type BranchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findUniqueOrThrow
   */
  export type BranchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch findFirst
   */
  export type BranchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findFirstOrThrow
   */
  export type BranchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branch to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Branches.
     */
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch findMany
   */
  export type BranchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter, which Branches to fetch.
     */
    where?: BranchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Branches to fetch.
     */
    orderBy?: BranchOrderByWithRelationInput | BranchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Branches.
     */
    cursor?: BranchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Branches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Branches.
     */
    skip?: number
    distinct?: BranchScalarFieldEnum | BranchScalarFieldEnum[]
  }

  /**
   * Branch create
   */
  export type BranchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to create a Branch.
     */
    data: XOR<BranchCreateInput, BranchUncheckedCreateInput>
  }

  /**
   * Branch createMany
   */
  export type BranchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
  }

  /**
   * Branch createManyAndReturn
   */
  export type BranchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Branches.
     */
    data: BranchCreateManyInput | BranchCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Branch update
   */
  export type BranchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The data needed to update a Branch.
     */
    data: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
    /**
     * Choose, which Branch to update.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch updateMany
   */
  export type BranchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Branches.
     */
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyInput>
    /**
     * Filter which Branches to update
     */
    where?: BranchWhereInput
  }

  /**
   * Branch upsert
   */
  export type BranchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * The filter to search for the Branch to update in case it exists.
     */
    where: BranchWhereUniqueInput
    /**
     * In case the Branch found by the `where` argument doesn't exist, create a new Branch with this data.
     */
    create: XOR<BranchCreateInput, BranchUncheckedCreateInput>
    /**
     * In case the Branch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BranchUpdateInput, BranchUncheckedUpdateInput>
  }

  /**
   * Branch delete
   */
  export type BranchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    /**
     * Filter which Branch to delete.
     */
    where: BranchWhereUniqueInput
  }

  /**
   * Branch deleteMany
   */
  export type BranchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Branches to delete
     */
    where?: BranchWhereInput
  }

  /**
   * Branch.users
   */
  export type Branch$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Branch.services
   */
  export type Branch$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Branch.bookings
   */
  export type Branch$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Branch.reviews
   */
  export type Branch$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Branch without action
   */
  export type BranchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    services?: boolean | Category$servicesArgs<ExtArgs>
    user?: boolean | Category$userArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | Category$userArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    services?: boolean | Category$servicesArgs<ExtArgs>
    user?: boolean | Category$userArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Category$userArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      services: Prisma.$ServicePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    services<T extends Category$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Category$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends Category$userArgs<ExtArgs> = {}>(args?: Subset<T, Category$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
    readonly userId: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.services
   */
  export type Category$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Category.user
   */
  export type Category$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceAvgAggregateOutputType = {
    duration: number | null
    price: number | null
  }

  export type ServiceSumAggregateOutputType = {
    duration: number | null
    price: number | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    duration: number | null
    price: number | null
    userId: string | null
    currency: string | null
    categoryId: string | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    duration: number | null
    price: number | null
    userId: string | null
    currency: string | null
    categoryId: string | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    duration: number
    price: number
    userId: number
    currency: number
    categoryId: number
    branchId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ServiceAvgAggregateInputType = {
    duration?: true
    price?: true
  }

  export type ServiceSumAggregateInputType = {
    duration?: true
    price?: true
  }

  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration?: true
    price?: true
    userId?: true
    currency?: true
    categoryId?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration?: true
    price?: true
    userId?: true
    currency?: true
    categoryId?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    duration?: true
    price?: true
    userId?: true
    currency?: true
    categoryId?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _avg?: ServiceAvgAggregateInputType
    _sum?: ServiceSumAggregateInputType
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    description: string
    duration: number
    price: number
    userId: string
    currency: string
    categoryId: string
    branchId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ServiceCountAggregateOutputType | null
    _avg: ServiceAvgAggregateOutputType | null
    _sum: ServiceSumAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    price?: boolean
    userId?: boolean
    currency?: boolean
    categoryId?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    branch?: boolean | Service$branchArgs<ExtArgs>
    masters?: boolean | Service$mastersArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    price?: boolean
    userId?: boolean
    currency?: boolean
    categoryId?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    branch?: boolean | Service$branchArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    duration?: boolean
    price?: boolean
    userId?: boolean
    currency?: boolean
    categoryId?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    bookings?: boolean | Service$bookingsArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    branch?: boolean | Service$branchArgs<ExtArgs>
    masters?: boolean | Service$mastersArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    branch?: boolean | Service$branchArgs<ExtArgs>
  }

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      bookings: Prisma.$BookingPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs> | null
      masters: Prisma.$ServiceMasterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      duration: number
      price: number
      userId: string
      currency: string
      categoryId: string
      branchId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
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
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    bookings<T extends Service$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Service$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    branch<T extends Service$branchArgs<ExtArgs> = {}>(args?: Subset<T, Service$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    masters<T extends Service$mastersArgs<ExtArgs> = {}>(args?: Subset<T, Service$mastersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceMasterPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Service model
   */ 
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly duration: FieldRef<"Service", 'Int'>
    readonly price: FieldRef<"Service", 'Float'>
    readonly userId: FieldRef<"Service", 'String'>
    readonly currency: FieldRef<"Service", 'String'>
    readonly categoryId: FieldRef<"Service", 'String'>
    readonly branchId: FieldRef<"Service", 'String'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
    readonly deletedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
  }

  /**
   * Service.bookings
   */
  export type Service$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Service.branch
   */
  export type Service$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Service.masters
   */
  export type Service$mastersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterInclude<ExtArgs> | null
    where?: ServiceMasterWhereInput
    orderBy?: ServiceMasterOrderByWithRelationInput | ServiceMasterOrderByWithRelationInput[]
    cursor?: ServiceMasterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceMasterScalarFieldEnum | ServiceMasterScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    nickName: string | null
    phoneNumber: string | null
    chatId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    nickName: string | null
    phoneNumber: string | null
    chatId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deletedAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    nickName: number
    phoneNumber: number
    chatId: number
    userId: number
    createdAt: number
    updatedAt: number
    deletedAt: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    nickName?: true
    phoneNumber?: true
    chatId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    nickName?: true
    phoneNumber?: true
    chatId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    nickName?: true
    phoneNumber?: true
    chatId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    deletedAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
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
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    nickName: string
    phoneNumber: string | null
    chatId: string | null
    userId: string | null
    createdAt: Date
    updatedAt: Date
    deletedAt: Date | null
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nickName?: boolean
    phoneNumber?: boolean
    chatId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | Client$userArgs<ExtArgs>
    reviews?: boolean | Client$reviewsArgs<ExtArgs>
    bookings?: boolean | Client$bookingsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    nickName?: boolean
    phoneNumber?: boolean
    chatId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
    user?: boolean | Client$userArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    nickName?: boolean
    phoneNumber?: boolean
    chatId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deletedAt?: boolean
  }

  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Client$userArgs<ExtArgs>
    reviews?: boolean | Client$reviewsArgs<ExtArgs>
    bookings?: boolean | Client$bookingsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Client$userArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      bookings: Prisma.$BookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      nickName: string
      phoneNumber: string | null
      chatId: string | null
      userId: string | null
      createdAt: Date
      updatedAt: Date
      deletedAt: Date | null
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Client$userArgs<ExtArgs> = {}>(args?: Subset<T, Client$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    reviews<T extends Client$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Client$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    bookings<T extends Client$bookingsArgs<ExtArgs> = {}>(args?: Subset<T, Client$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly nickName: FieldRef<"Client", 'String'>
    readonly phoneNumber: FieldRef<"Client", 'String'>
    readonly chatId: FieldRef<"Client", 'String'>
    readonly userId: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updatedAt: FieldRef<"Client", 'DateTime'>
    readonly deletedAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
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
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
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
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
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
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }

  /**
   * Client.user
   */
  export type Client$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Client.reviews
   */
  export type Client$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Client.bookings
   */
  export type Client$bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    cursor?: BookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Booking
   */

  export type AggregateBooking = {
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  export type BookingMinAggregateOutputType = {
    id: string | null
    userId: string | null
    clientId: string | null
    branchId: string | null
    date: Date | null
    time: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type BookingMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    clientId: string | null
    branchId: string | null
    date: Date | null
    time: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    status: string | null
  }

  export type BookingCountAggregateOutputType = {
    id: number
    userId: number
    clientId: number
    branchId: number
    date: number
    time: number
    notes: number
    createdAt: number
    updatedAt: number
    status: number
    _all: number
  }


  export type BookingMinAggregateInputType = {
    id?: true
    userId?: true
    clientId?: true
    branchId?: true
    date?: true
    time?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type BookingMaxAggregateInputType = {
    id?: true
    userId?: true
    clientId?: true
    branchId?: true
    date?: true
    time?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    status?: true
  }

  export type BookingCountAggregateInputType = {
    id?: true
    userId?: true
    clientId?: true
    branchId?: true
    date?: true
    time?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    status?: true
    _all?: true
  }

  export type BookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Booking to aggregate.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bookings
    **/
    _count?: true | BookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMaxAggregateInputType
  }

  export type GetBookingAggregateType<T extends BookingAggregateArgs> = {
        [P in keyof T & keyof AggregateBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBooking[P]>
      : GetScalarType<T[P], AggregateBooking[P]>
  }




  export type BookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingWhereInput
    orderBy?: BookingOrderByWithAggregationInput | BookingOrderByWithAggregationInput[]
    by: BookingScalarFieldEnum[] | BookingScalarFieldEnum
    having?: BookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingCountAggregateInputType | true
    _min?: BookingMinAggregateInputType
    _max?: BookingMaxAggregateInputType
  }

  export type BookingGroupByOutputType = {
    id: string
    userId: string
    clientId: string
    branchId: string | null
    date: Date
    time: string
    notes: string | null
    createdAt: Date
    updatedAt: Date
    status: string
    _count: BookingCountAggregateOutputType | null
    _min: BookingMinAggregateOutputType | null
    _max: BookingMaxAggregateOutputType | null
  }

  type GetBookingGroupByPayload<T extends BookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingGroupByOutputType[P]>
            : GetScalarType<T[P], BookingGroupByOutputType[P]>
        }
      >
    >


  export type BookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clientId?: boolean
    branchId?: boolean
    date?: boolean
    time?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    services?: boolean | Booking$servicesArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    branch?: boolean | Booking$branchArgs<ExtArgs>
    logs?: boolean | Booking$logsArgs<ExtArgs>
    messages?: boolean | Booking$messagesArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    clientId?: boolean
    branchId?: boolean
    date?: boolean
    time?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    branch?: boolean | Booking$branchArgs<ExtArgs>
  }, ExtArgs["result"]["booking"]>

  export type BookingSelectScalar = {
    id?: boolean
    userId?: boolean
    clientId?: boolean
    branchId?: boolean
    date?: boolean
    time?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    status?: boolean
  }

  export type BookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    services?: boolean | Booking$servicesArgs<ExtArgs>
    review?: boolean | Booking$reviewArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    branch?: boolean | Booking$branchArgs<ExtArgs>
    logs?: boolean | Booking$logsArgs<ExtArgs>
    messages?: boolean | Booking$messagesArgs<ExtArgs>
    _count?: boolean | BookingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BookingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    client?: boolean | ClientDefaultArgs<ExtArgs>
    branch?: boolean | Booking$branchArgs<ExtArgs>
  }

  export type $BookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Booking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      services: Prisma.$ServicePayload<ExtArgs>[]
      review: Prisma.$ReviewPayload<ExtArgs>[]
      client: Prisma.$ClientPayload<ExtArgs>
      branch: Prisma.$BranchPayload<ExtArgs> | null
      logs: Prisma.$BookingLogPayload<ExtArgs>[]
      messages: Prisma.$BookingMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      clientId: string
      branchId: string | null
      date: Date
      time: string
      notes: string | null
      createdAt: Date
      updatedAt: Date
      status: string
    }, ExtArgs["result"]["booking"]>
    composites: {}
  }

  type BookingGetPayload<S extends boolean | null | undefined | BookingDefaultArgs> = $Result.GetResult<Prisma.$BookingPayload, S>

  type BookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingCountAggregateInputType | true
    }

  export interface BookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Booking'], meta: { name: 'Booking' } }
    /**
     * Find zero or one Booking that matches the filter.
     * @param {BookingFindUniqueArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingFindUniqueArgs>(args: SelectSubset<T, BookingFindUniqueArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Booking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookingFindUniqueOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Booking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingFindFirstArgs>(args?: SelectSubset<T, BookingFindFirstArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Booking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindFirstOrThrowArgs} args - Arguments to find a Booking
     * @example
     * // Get one Booking
     * const booking = await prisma.booking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Bookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bookings
     * const bookings = await prisma.booking.findMany()
     * 
     * // Get first 10 Bookings
     * const bookings = await prisma.booking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingWithIdOnly = await prisma.booking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingFindManyArgs>(args?: SelectSubset<T, BookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Booking.
     * @param {BookingCreateArgs} args - Arguments to create a Booking.
     * @example
     * // Create one Booking
     * const Booking = await prisma.booking.create({
     *   data: {
     *     // ... data to create a Booking
     *   }
     * })
     * 
     */
    create<T extends BookingCreateArgs>(args: SelectSubset<T, BookingCreateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Bookings.
     * @param {BookingCreateManyArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingCreateManyArgs>(args?: SelectSubset<T, BookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Bookings and returns the data saved in the database.
     * @param {BookingCreateManyAndReturnArgs} args - Arguments to create many Bookings.
     * @example
     * // Create many Bookings
     * const booking = await prisma.booking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Bookings and only return the `id`
     * const bookingWithIdOnly = await prisma.booking.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Booking.
     * @param {BookingDeleteArgs} args - Arguments to delete one Booking.
     * @example
     * // Delete one Booking
     * const Booking = await prisma.booking.delete({
     *   where: {
     *     // ... filter to delete one Booking
     *   }
     * })
     * 
     */
    delete<T extends BookingDeleteArgs>(args: SelectSubset<T, BookingDeleteArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Booking.
     * @param {BookingUpdateArgs} args - Arguments to update one Booking.
     * @example
     * // Update one Booking
     * const booking = await prisma.booking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingUpdateArgs>(args: SelectSubset<T, BookingUpdateArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Bookings.
     * @param {BookingDeleteManyArgs} args - Arguments to filter Bookings to delete.
     * @example
     * // Delete a few Bookings
     * const { count } = await prisma.booking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingDeleteManyArgs>(args?: SelectSubset<T, BookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bookings
     * const booking = await prisma.booking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingUpdateManyArgs>(args: SelectSubset<T, BookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Booking.
     * @param {BookingUpsertArgs} args - Arguments to update or create a Booking.
     * @example
     * // Update or create a Booking
     * const booking = await prisma.booking.upsert({
     *   create: {
     *     // ... data to create a Booking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Booking we want to update
     *   }
     * })
     */
    upsert<T extends BookingUpsertArgs>(args: SelectSubset<T, BookingUpsertArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Bookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingCountArgs} args - Arguments to filter Bookings to count.
     * @example
     * // Count the number of Bookings
     * const count = await prisma.booking.count({
     *   where: {
     *     // ... the filter for the Bookings we want to count
     *   }
     * })
    **/
    count<T extends BookingCountArgs>(
      args?: Subset<T, BookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingAggregateArgs>(args: Subset<T, BookingAggregateArgs>): Prisma.PrismaPromise<GetBookingAggregateType<T>>

    /**
     * Group by Booking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingGroupByArgs} args - Group by arguments.
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
      T extends BookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingGroupByArgs['orderBy'] }
        : { orderBy?: BookingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Booking model
   */
  readonly fields: BookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Booking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    services<T extends Booking$servicesArgs<ExtArgs> = {}>(args?: Subset<T, Booking$servicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany"> | Null>
    review<T extends Booking$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Booking$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    branch<T extends Booking$branchArgs<ExtArgs> = {}>(args?: Subset<T, Booking$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    logs<T extends Booking$logsArgs<ExtArgs> = {}>(args?: Subset<T, Booking$logsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingLogPayload<ExtArgs>, T, "findMany"> | Null>
    messages<T extends Booking$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Booking$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingMessagePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Booking model
   */ 
  interface BookingFieldRefs {
    readonly id: FieldRef<"Booking", 'String'>
    readonly userId: FieldRef<"Booking", 'String'>
    readonly clientId: FieldRef<"Booking", 'String'>
    readonly branchId: FieldRef<"Booking", 'String'>
    readonly date: FieldRef<"Booking", 'DateTime'>
    readonly time: FieldRef<"Booking", 'String'>
    readonly notes: FieldRef<"Booking", 'String'>
    readonly createdAt: FieldRef<"Booking", 'DateTime'>
    readonly updatedAt: FieldRef<"Booking", 'DateTime'>
    readonly status: FieldRef<"Booking", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Booking findUnique
   */
  export type BookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findUniqueOrThrow
   */
  export type BookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking findFirst
   */
  export type BookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findFirstOrThrow
   */
  export type BookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Booking to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bookings.
     */
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking findMany
   */
  export type BookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter, which Bookings to fetch.
     */
    where?: BookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bookings to fetch.
     */
    orderBy?: BookingOrderByWithRelationInput | BookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bookings.
     */
    cursor?: BookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bookings.
     */
    skip?: number
    distinct?: BookingScalarFieldEnum | BookingScalarFieldEnum[]
  }

  /**
   * Booking create
   */
  export type BookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to create a Booking.
     */
    data: XOR<BookingCreateInput, BookingUncheckedCreateInput>
  }

  /**
   * Booking createMany
   */
  export type BookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
  }

  /**
   * Booking createManyAndReturn
   */
  export type BookingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Bookings.
     */
    data: BookingCreateManyInput | BookingCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Booking update
   */
  export type BookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The data needed to update a Booking.
     */
    data: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
    /**
     * Choose, which Booking to update.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking updateMany
   */
  export type BookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bookings.
     */
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyInput>
    /**
     * Filter which Bookings to update
     */
    where?: BookingWhereInput
  }

  /**
   * Booking upsert
   */
  export type BookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * The filter to search for the Booking to update in case it exists.
     */
    where: BookingWhereUniqueInput
    /**
     * In case the Booking found by the `where` argument doesn't exist, create a new Booking with this data.
     */
    create: XOR<BookingCreateInput, BookingUncheckedCreateInput>
    /**
     * In case the Booking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingUpdateInput, BookingUncheckedUpdateInput>
  }

  /**
   * Booking delete
   */
  export type BookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    /**
     * Filter which Booking to delete.
     */
    where: BookingWhereUniqueInput
  }

  /**
   * Booking deleteMany
   */
  export type BookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bookings to delete
     */
    where?: BookingWhereInput
  }

  /**
   * Booking.services
   */
  export type Booking$servicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    cursor?: ServiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Booking.review
   */
  export type Booking$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Booking.branch
   */
  export type Booking$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Booking.logs
   */
  export type Booking$logsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogInclude<ExtArgs> | null
    where?: BookingLogWhereInput
    orderBy?: BookingLogOrderByWithRelationInput | BookingLogOrderByWithRelationInput[]
    cursor?: BookingLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingLogScalarFieldEnum | BookingLogScalarFieldEnum[]
  }

  /**
   * Booking.messages
   */
  export type Booking$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingMessage
     */
    select?: BookingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingMessageInclude<ExtArgs> | null
    where?: BookingMessageWhereInput
    orderBy?: BookingMessageOrderByWithRelationInput | BookingMessageOrderByWithRelationInput[]
    cursor?: BookingMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BookingMessageScalarFieldEnum | BookingMessageScalarFieldEnum[]
  }

  /**
   * Booking without action
   */
  export type BookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    clientId: string | null
    userId: string | null
    bookingId: string | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    comment: string | null
    clientId: string | null
    userId: string | null
    bookingId: string | null
    branchId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    comment: number
    clientId: number
    userId: number
    bookingId: number
    branchId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    clientId?: true
    userId?: true
    bookingId?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    clientId?: true
    userId?: true
    bookingId?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    comment?: true
    clientId?: true
    userId?: true
    bookingId?: true
    branchId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number
    comment: string | null
    clientId: string | null
    userId: string | null
    bookingId: string | null
    branchId: string | null
    createdAt: Date
    updatedAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    clientId?: boolean
    userId?: boolean
    bookingId?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Review$clientArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
    booking?: boolean | Review$bookingArgs<ExtArgs>
    branch?: boolean | Review$branchArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    comment?: boolean
    clientId?: boolean
    userId?: boolean
    bookingId?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    client?: boolean | Review$clientArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
    booking?: boolean | Review$bookingArgs<ExtArgs>
    branch?: boolean | Review$branchArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    comment?: boolean
    clientId?: boolean
    userId?: boolean
    bookingId?: boolean
    branchId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Review$clientArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
    booking?: boolean | Review$bookingArgs<ExtArgs>
    branch?: boolean | Review$branchArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | Review$clientArgs<ExtArgs>
    user?: boolean | Review$userArgs<ExtArgs>
    booking?: boolean | Review$bookingArgs<ExtArgs>
    branch?: boolean | Review$branchArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
      booking: Prisma.$BookingPayload<ExtArgs> | null
      branch: Prisma.$BranchPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      comment: string | null
      clientId: string | null
      userId: string | null
      bookingId: string | null
      branchId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends Review$clientArgs<ExtArgs> = {}>(args?: Subset<T, Review$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    user<T extends Review$userArgs<ExtArgs> = {}>(args?: Subset<T, Review$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    booking<T extends Review$bookingArgs<ExtArgs> = {}>(args?: Subset<T, Review$bookingArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    branch<T extends Review$branchArgs<ExtArgs> = {}>(args?: Subset<T, Review$branchArgs<ExtArgs>>): Prisma__BranchClient<$Result.GetResult<Prisma.$BranchPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
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
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly clientId: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly bookingId: FieldRef<"Review", 'String'>
    readonly branchId: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
    readonly updatedAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review.client
   */
  export type Review$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Review.user
   */
  export type Review$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Review.booking
   */
  export type Review$bookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Booking
     */
    select?: BookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingInclude<ExtArgs> | null
    where?: BookingWhereInput
  }

  /**
   * Review.branch
   */
  export type Review$branchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Branch
     */
    select?: BranchSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BranchInclude<ExtArgs> | null
    where?: BranchWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model MasterAvailability
   */

  export type AggregateMasterAvailability = {
    _count: MasterAvailabilityCountAggregateOutputType | null
    _min: MasterAvailabilityMinAggregateOutputType | null
    _max: MasterAvailabilityMaxAggregateOutputType | null
  }

  export type MasterAvailabilityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    availability: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MasterAvailabilityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    availability: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MasterAvailabilityCountAggregateOutputType = {
    id: number
    userId: number
    availability: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MasterAvailabilityMinAggregateInputType = {
    id?: true
    userId?: true
    availability?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MasterAvailabilityMaxAggregateInputType = {
    id?: true
    userId?: true
    availability?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MasterAvailabilityCountAggregateInputType = {
    id?: true
    userId?: true
    availability?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MasterAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterAvailability to aggregate.
     */
    where?: MasterAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterAvailabilities to fetch.
     */
    orderBy?: MasterAvailabilityOrderByWithRelationInput | MasterAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MasterAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MasterAvailabilities
    **/
    _count?: true | MasterAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MasterAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MasterAvailabilityMaxAggregateInputType
  }

  export type GetMasterAvailabilityAggregateType<T extends MasterAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateMasterAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMasterAvailability[P]>
      : GetScalarType<T[P], AggregateMasterAvailability[P]>
  }




  export type MasterAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MasterAvailabilityWhereInput
    orderBy?: MasterAvailabilityOrderByWithAggregationInput | MasterAvailabilityOrderByWithAggregationInput[]
    by: MasterAvailabilityScalarFieldEnum[] | MasterAvailabilityScalarFieldEnum
    having?: MasterAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MasterAvailabilityCountAggregateInputType | true
    _min?: MasterAvailabilityMinAggregateInputType
    _max?: MasterAvailabilityMaxAggregateInputType
  }

  export type MasterAvailabilityGroupByOutputType = {
    id: string
    userId: string
    availability: string
    createdAt: Date
    updatedAt: Date
    _count: MasterAvailabilityCountAggregateOutputType | null
    _min: MasterAvailabilityMinAggregateOutputType | null
    _max: MasterAvailabilityMaxAggregateOutputType | null
  }

  type GetMasterAvailabilityGroupByPayload<T extends MasterAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MasterAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MasterAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MasterAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], MasterAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type MasterAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    availability?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterAvailability"]>

  export type MasterAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    availability?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["masterAvailability"]>

  export type MasterAvailabilitySelectScalar = {
    id?: boolean
    userId?: boolean
    availability?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MasterAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MasterAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MasterAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MasterAvailability"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      availability: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["masterAvailability"]>
    composites: {}
  }

  type MasterAvailabilityGetPayload<S extends boolean | null | undefined | MasterAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$MasterAvailabilityPayload, S>

  type MasterAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MasterAvailabilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MasterAvailabilityCountAggregateInputType | true
    }

  export interface MasterAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MasterAvailability'], meta: { name: 'MasterAvailability' } }
    /**
     * Find zero or one MasterAvailability that matches the filter.
     * @param {MasterAvailabilityFindUniqueArgs} args - Arguments to find a MasterAvailability
     * @example
     * // Get one MasterAvailability
     * const masterAvailability = await prisma.masterAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MasterAvailabilityFindUniqueArgs>(args: SelectSubset<T, MasterAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__MasterAvailabilityClient<$Result.GetResult<Prisma.$MasterAvailabilityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one MasterAvailability that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MasterAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a MasterAvailability
     * @example
     * // Get one MasterAvailability
     * const masterAvailability = await prisma.masterAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MasterAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, MasterAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MasterAvailabilityClient<$Result.GetResult<Prisma.$MasterAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first MasterAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterAvailabilityFindFirstArgs} args - Arguments to find a MasterAvailability
     * @example
     * // Get one MasterAvailability
     * const masterAvailability = await prisma.masterAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MasterAvailabilityFindFirstArgs>(args?: SelectSubset<T, MasterAvailabilityFindFirstArgs<ExtArgs>>): Prisma__MasterAvailabilityClient<$Result.GetResult<Prisma.$MasterAvailabilityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first MasterAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterAvailabilityFindFirstOrThrowArgs} args - Arguments to find a MasterAvailability
     * @example
     * // Get one MasterAvailability
     * const masterAvailability = await prisma.masterAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MasterAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, MasterAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__MasterAvailabilityClient<$Result.GetResult<Prisma.$MasterAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more MasterAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MasterAvailabilities
     * const masterAvailabilities = await prisma.masterAvailability.findMany()
     * 
     * // Get first 10 MasterAvailabilities
     * const masterAvailabilities = await prisma.masterAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const masterAvailabilityWithIdOnly = await prisma.masterAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MasterAvailabilityFindManyArgs>(args?: SelectSubset<T, MasterAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterAvailabilityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a MasterAvailability.
     * @param {MasterAvailabilityCreateArgs} args - Arguments to create a MasterAvailability.
     * @example
     * // Create one MasterAvailability
     * const MasterAvailability = await prisma.masterAvailability.create({
     *   data: {
     *     // ... data to create a MasterAvailability
     *   }
     * })
     * 
     */
    create<T extends MasterAvailabilityCreateArgs>(args: SelectSubset<T, MasterAvailabilityCreateArgs<ExtArgs>>): Prisma__MasterAvailabilityClient<$Result.GetResult<Prisma.$MasterAvailabilityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many MasterAvailabilities.
     * @param {MasterAvailabilityCreateManyArgs} args - Arguments to create many MasterAvailabilities.
     * @example
     * // Create many MasterAvailabilities
     * const masterAvailability = await prisma.masterAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MasterAvailabilityCreateManyArgs>(args?: SelectSubset<T, MasterAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MasterAvailabilities and returns the data saved in the database.
     * @param {MasterAvailabilityCreateManyAndReturnArgs} args - Arguments to create many MasterAvailabilities.
     * @example
     * // Create many MasterAvailabilities
     * const masterAvailability = await prisma.masterAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MasterAvailabilities and only return the `id`
     * const masterAvailabilityWithIdOnly = await prisma.masterAvailability.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MasterAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, MasterAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MasterAvailabilityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a MasterAvailability.
     * @param {MasterAvailabilityDeleteArgs} args - Arguments to delete one MasterAvailability.
     * @example
     * // Delete one MasterAvailability
     * const MasterAvailability = await prisma.masterAvailability.delete({
     *   where: {
     *     // ... filter to delete one MasterAvailability
     *   }
     * })
     * 
     */
    delete<T extends MasterAvailabilityDeleteArgs>(args: SelectSubset<T, MasterAvailabilityDeleteArgs<ExtArgs>>): Prisma__MasterAvailabilityClient<$Result.GetResult<Prisma.$MasterAvailabilityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one MasterAvailability.
     * @param {MasterAvailabilityUpdateArgs} args - Arguments to update one MasterAvailability.
     * @example
     * // Update one MasterAvailability
     * const masterAvailability = await prisma.masterAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MasterAvailabilityUpdateArgs>(args: SelectSubset<T, MasterAvailabilityUpdateArgs<ExtArgs>>): Prisma__MasterAvailabilityClient<$Result.GetResult<Prisma.$MasterAvailabilityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more MasterAvailabilities.
     * @param {MasterAvailabilityDeleteManyArgs} args - Arguments to filter MasterAvailabilities to delete.
     * @example
     * // Delete a few MasterAvailabilities
     * const { count } = await prisma.masterAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MasterAvailabilityDeleteManyArgs>(args?: SelectSubset<T, MasterAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MasterAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MasterAvailabilities
     * const masterAvailability = await prisma.masterAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MasterAvailabilityUpdateManyArgs>(args: SelectSubset<T, MasterAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MasterAvailability.
     * @param {MasterAvailabilityUpsertArgs} args - Arguments to update or create a MasterAvailability.
     * @example
     * // Update or create a MasterAvailability
     * const masterAvailability = await prisma.masterAvailability.upsert({
     *   create: {
     *     // ... data to create a MasterAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MasterAvailability we want to update
     *   }
     * })
     */
    upsert<T extends MasterAvailabilityUpsertArgs>(args: SelectSubset<T, MasterAvailabilityUpsertArgs<ExtArgs>>): Prisma__MasterAvailabilityClient<$Result.GetResult<Prisma.$MasterAvailabilityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of MasterAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterAvailabilityCountArgs} args - Arguments to filter MasterAvailabilities to count.
     * @example
     * // Count the number of MasterAvailabilities
     * const count = await prisma.masterAvailability.count({
     *   where: {
     *     // ... the filter for the MasterAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends MasterAvailabilityCountArgs>(
      args?: Subset<T, MasterAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MasterAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MasterAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MasterAvailabilityAggregateArgs>(args: Subset<T, MasterAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetMasterAvailabilityAggregateType<T>>

    /**
     * Group by MasterAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MasterAvailabilityGroupByArgs} args - Group by arguments.
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
      T extends MasterAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MasterAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: MasterAvailabilityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MasterAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMasterAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MasterAvailability model
   */
  readonly fields: MasterAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MasterAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MasterAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the MasterAvailability model
   */ 
  interface MasterAvailabilityFieldRefs {
    readonly id: FieldRef<"MasterAvailability", 'String'>
    readonly userId: FieldRef<"MasterAvailability", 'String'>
    readonly availability: FieldRef<"MasterAvailability", 'String'>
    readonly createdAt: FieldRef<"MasterAvailability", 'DateTime'>
    readonly updatedAt: FieldRef<"MasterAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MasterAvailability findUnique
   */
  export type MasterAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterAvailability
     */
    select?: MasterAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MasterAvailability to fetch.
     */
    where: MasterAvailabilityWhereUniqueInput
  }

  /**
   * MasterAvailability findUniqueOrThrow
   */
  export type MasterAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterAvailability
     */
    select?: MasterAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MasterAvailability to fetch.
     */
    where: MasterAvailabilityWhereUniqueInput
  }

  /**
   * MasterAvailability findFirst
   */
  export type MasterAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterAvailability
     */
    select?: MasterAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MasterAvailability to fetch.
     */
    where?: MasterAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterAvailabilities to fetch.
     */
    orderBy?: MasterAvailabilityOrderByWithRelationInput | MasterAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterAvailabilities.
     */
    cursor?: MasterAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterAvailabilities.
     */
    distinct?: MasterAvailabilityScalarFieldEnum | MasterAvailabilityScalarFieldEnum[]
  }

  /**
   * MasterAvailability findFirstOrThrow
   */
  export type MasterAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterAvailability
     */
    select?: MasterAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MasterAvailability to fetch.
     */
    where?: MasterAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterAvailabilities to fetch.
     */
    orderBy?: MasterAvailabilityOrderByWithRelationInput | MasterAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MasterAvailabilities.
     */
    cursor?: MasterAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MasterAvailabilities.
     */
    distinct?: MasterAvailabilityScalarFieldEnum | MasterAvailabilityScalarFieldEnum[]
  }

  /**
   * MasterAvailability findMany
   */
  export type MasterAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterAvailability
     */
    select?: MasterAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which MasterAvailabilities to fetch.
     */
    where?: MasterAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MasterAvailabilities to fetch.
     */
    orderBy?: MasterAvailabilityOrderByWithRelationInput | MasterAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MasterAvailabilities.
     */
    cursor?: MasterAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MasterAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MasterAvailabilities.
     */
    skip?: number
    distinct?: MasterAvailabilityScalarFieldEnum | MasterAvailabilityScalarFieldEnum[]
  }

  /**
   * MasterAvailability create
   */
  export type MasterAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterAvailability
     */
    select?: MasterAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a MasterAvailability.
     */
    data: XOR<MasterAvailabilityCreateInput, MasterAvailabilityUncheckedCreateInput>
  }

  /**
   * MasterAvailability createMany
   */
  export type MasterAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MasterAvailabilities.
     */
    data: MasterAvailabilityCreateManyInput | MasterAvailabilityCreateManyInput[]
  }

  /**
   * MasterAvailability createManyAndReturn
   */
  export type MasterAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterAvailability
     */
    select?: MasterAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many MasterAvailabilities.
     */
    data: MasterAvailabilityCreateManyInput | MasterAvailabilityCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MasterAvailability update
   */
  export type MasterAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterAvailability
     */
    select?: MasterAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a MasterAvailability.
     */
    data: XOR<MasterAvailabilityUpdateInput, MasterAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which MasterAvailability to update.
     */
    where: MasterAvailabilityWhereUniqueInput
  }

  /**
   * MasterAvailability updateMany
   */
  export type MasterAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MasterAvailabilities.
     */
    data: XOR<MasterAvailabilityUpdateManyMutationInput, MasterAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which MasterAvailabilities to update
     */
    where?: MasterAvailabilityWhereInput
  }

  /**
   * MasterAvailability upsert
   */
  export type MasterAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterAvailability
     */
    select?: MasterAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the MasterAvailability to update in case it exists.
     */
    where: MasterAvailabilityWhereUniqueInput
    /**
     * In case the MasterAvailability found by the `where` argument doesn't exist, create a new MasterAvailability with this data.
     */
    create: XOR<MasterAvailabilityCreateInput, MasterAvailabilityUncheckedCreateInput>
    /**
     * In case the MasterAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MasterAvailabilityUpdateInput, MasterAvailabilityUncheckedUpdateInput>
  }

  /**
   * MasterAvailability delete
   */
  export type MasterAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterAvailability
     */
    select?: MasterAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which MasterAvailability to delete.
     */
    where: MasterAvailabilityWhereUniqueInput
  }

  /**
   * MasterAvailability deleteMany
   */
  export type MasterAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MasterAvailabilities to delete
     */
    where?: MasterAvailabilityWhereInput
  }

  /**
   * MasterAvailability without action
   */
  export type MasterAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MasterAvailability
     */
    select?: MasterAvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MasterAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model BookingLog
   */

  export type AggregateBookingLog = {
    _count: BookingLogCountAggregateOutputType | null
    _min: BookingLogMinAggregateOutputType | null
    _max: BookingLogMaxAggregateOutputType | null
  }

  export type BookingLogMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    userId: string | null
    action: string | null
    timestamp: Date | null
  }

  export type BookingLogMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    userId: string | null
    action: string | null
    timestamp: Date | null
  }

  export type BookingLogCountAggregateOutputType = {
    id: number
    bookingId: number
    userId: number
    action: number
    timestamp: number
    _all: number
  }


  export type BookingLogMinAggregateInputType = {
    id?: true
    bookingId?: true
    userId?: true
    action?: true
    timestamp?: true
  }

  export type BookingLogMaxAggregateInputType = {
    id?: true
    bookingId?: true
    userId?: true
    action?: true
    timestamp?: true
  }

  export type BookingLogCountAggregateInputType = {
    id?: true
    bookingId?: true
    userId?: true
    action?: true
    timestamp?: true
    _all?: true
  }

  export type BookingLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingLog to aggregate.
     */
    where?: BookingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingLogs to fetch.
     */
    orderBy?: BookingLogOrderByWithRelationInput | BookingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingLogs
    **/
    _count?: true | BookingLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingLogMaxAggregateInputType
  }

  export type GetBookingLogAggregateType<T extends BookingLogAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingLog[P]>
      : GetScalarType<T[P], AggregateBookingLog[P]>
  }




  export type BookingLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingLogWhereInput
    orderBy?: BookingLogOrderByWithAggregationInput | BookingLogOrderByWithAggregationInput[]
    by: BookingLogScalarFieldEnum[] | BookingLogScalarFieldEnum
    having?: BookingLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingLogCountAggregateInputType | true
    _min?: BookingLogMinAggregateInputType
    _max?: BookingLogMaxAggregateInputType
  }

  export type BookingLogGroupByOutputType = {
    id: string
    bookingId: string
    userId: string
    action: string
    timestamp: Date
    _count: BookingLogCountAggregateOutputType | null
    _min: BookingLogMinAggregateOutputType | null
    _max: BookingLogMaxAggregateOutputType | null
  }

  type GetBookingLogGroupByPayload<T extends BookingLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingLogGroupByOutputType[P]>
            : GetScalarType<T[P], BookingLogGroupByOutputType[P]>
        }
      >
    >


  export type BookingLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    userId?: boolean
    action?: boolean
    timestamp?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingLog"]>

  export type BookingLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    userId?: boolean
    action?: boolean
    timestamp?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingLog"]>

  export type BookingLogSelectScalar = {
    id?: boolean
    bookingId?: boolean
    userId?: boolean
    action?: boolean
    timestamp?: boolean
  }

  export type BookingLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type BookingLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BookingLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingLog"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      userId: string
      action: string
      timestamp: Date
    }, ExtArgs["result"]["bookingLog"]>
    composites: {}
  }

  type BookingLogGetPayload<S extends boolean | null | undefined | BookingLogDefaultArgs> = $Result.GetResult<Prisma.$BookingLogPayload, S>

  type BookingLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingLogCountAggregateInputType | true
    }

  export interface BookingLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingLog'], meta: { name: 'BookingLog' } }
    /**
     * Find zero or one BookingLog that matches the filter.
     * @param {BookingLogFindUniqueArgs} args - Arguments to find a BookingLog
     * @example
     * // Get one BookingLog
     * const bookingLog = await prisma.bookingLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingLogFindUniqueArgs>(args: SelectSubset<T, BookingLogFindUniqueArgs<ExtArgs>>): Prisma__BookingLogClient<$Result.GetResult<Prisma.$BookingLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BookingLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookingLogFindUniqueOrThrowArgs} args - Arguments to find a BookingLog
     * @example
     * // Get one BookingLog
     * const bookingLog = await prisma.bookingLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingLogFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingLogClient<$Result.GetResult<Prisma.$BookingLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BookingLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingLogFindFirstArgs} args - Arguments to find a BookingLog
     * @example
     * // Get one BookingLog
     * const bookingLog = await prisma.bookingLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingLogFindFirstArgs>(args?: SelectSubset<T, BookingLogFindFirstArgs<ExtArgs>>): Prisma__BookingLogClient<$Result.GetResult<Prisma.$BookingLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BookingLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingLogFindFirstOrThrowArgs} args - Arguments to find a BookingLog
     * @example
     * // Get one BookingLog
     * const bookingLog = await prisma.bookingLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingLogFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingLogClient<$Result.GetResult<Prisma.$BookingLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BookingLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingLogs
     * const bookingLogs = await prisma.bookingLog.findMany()
     * 
     * // Get first 10 BookingLogs
     * const bookingLogs = await prisma.bookingLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingLogWithIdOnly = await prisma.bookingLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingLogFindManyArgs>(args?: SelectSubset<T, BookingLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BookingLog.
     * @param {BookingLogCreateArgs} args - Arguments to create a BookingLog.
     * @example
     * // Create one BookingLog
     * const BookingLog = await prisma.bookingLog.create({
     *   data: {
     *     // ... data to create a BookingLog
     *   }
     * })
     * 
     */
    create<T extends BookingLogCreateArgs>(args: SelectSubset<T, BookingLogCreateArgs<ExtArgs>>): Prisma__BookingLogClient<$Result.GetResult<Prisma.$BookingLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BookingLogs.
     * @param {BookingLogCreateManyArgs} args - Arguments to create many BookingLogs.
     * @example
     * // Create many BookingLogs
     * const bookingLog = await prisma.bookingLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingLogCreateManyArgs>(args?: SelectSubset<T, BookingLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingLogs and returns the data saved in the database.
     * @param {BookingLogCreateManyAndReturnArgs} args - Arguments to create many BookingLogs.
     * @example
     * // Create many BookingLogs
     * const bookingLog = await prisma.bookingLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingLogs and only return the `id`
     * const bookingLogWithIdOnly = await prisma.bookingLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingLogCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BookingLog.
     * @param {BookingLogDeleteArgs} args - Arguments to delete one BookingLog.
     * @example
     * // Delete one BookingLog
     * const BookingLog = await prisma.bookingLog.delete({
     *   where: {
     *     // ... filter to delete one BookingLog
     *   }
     * })
     * 
     */
    delete<T extends BookingLogDeleteArgs>(args: SelectSubset<T, BookingLogDeleteArgs<ExtArgs>>): Prisma__BookingLogClient<$Result.GetResult<Prisma.$BookingLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BookingLog.
     * @param {BookingLogUpdateArgs} args - Arguments to update one BookingLog.
     * @example
     * // Update one BookingLog
     * const bookingLog = await prisma.bookingLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingLogUpdateArgs>(args: SelectSubset<T, BookingLogUpdateArgs<ExtArgs>>): Prisma__BookingLogClient<$Result.GetResult<Prisma.$BookingLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BookingLogs.
     * @param {BookingLogDeleteManyArgs} args - Arguments to filter BookingLogs to delete.
     * @example
     * // Delete a few BookingLogs
     * const { count } = await prisma.bookingLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingLogDeleteManyArgs>(args?: SelectSubset<T, BookingLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingLogs
     * const bookingLog = await prisma.bookingLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingLogUpdateManyArgs>(args: SelectSubset<T, BookingLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookingLog.
     * @param {BookingLogUpsertArgs} args - Arguments to update or create a BookingLog.
     * @example
     * // Update or create a BookingLog
     * const bookingLog = await prisma.bookingLog.upsert({
     *   create: {
     *     // ... data to create a BookingLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingLog we want to update
     *   }
     * })
     */
    upsert<T extends BookingLogUpsertArgs>(args: SelectSubset<T, BookingLogUpsertArgs<ExtArgs>>): Prisma__BookingLogClient<$Result.GetResult<Prisma.$BookingLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BookingLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingLogCountArgs} args - Arguments to filter BookingLogs to count.
     * @example
     * // Count the number of BookingLogs
     * const count = await prisma.bookingLog.count({
     *   where: {
     *     // ... the filter for the BookingLogs we want to count
     *   }
     * })
    **/
    count<T extends BookingLogCountArgs>(
      args?: Subset<T, BookingLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingLogAggregateArgs>(args: Subset<T, BookingLogAggregateArgs>): Prisma.PrismaPromise<GetBookingLogAggregateType<T>>

    /**
     * Group by BookingLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingLogGroupByArgs} args - Group by arguments.
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
      T extends BookingLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingLogGroupByArgs['orderBy'] }
        : { orderBy?: BookingLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingLog model
   */
  readonly fields: BookingLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BookingLog model
   */ 
  interface BookingLogFieldRefs {
    readonly id: FieldRef<"BookingLog", 'String'>
    readonly bookingId: FieldRef<"BookingLog", 'String'>
    readonly userId: FieldRef<"BookingLog", 'String'>
    readonly action: FieldRef<"BookingLog", 'String'>
    readonly timestamp: FieldRef<"BookingLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingLog findUnique
   */
  export type BookingLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogInclude<ExtArgs> | null
    /**
     * Filter, which BookingLog to fetch.
     */
    where: BookingLogWhereUniqueInput
  }

  /**
   * BookingLog findUniqueOrThrow
   */
  export type BookingLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogInclude<ExtArgs> | null
    /**
     * Filter, which BookingLog to fetch.
     */
    where: BookingLogWhereUniqueInput
  }

  /**
   * BookingLog findFirst
   */
  export type BookingLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogInclude<ExtArgs> | null
    /**
     * Filter, which BookingLog to fetch.
     */
    where?: BookingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingLogs to fetch.
     */
    orderBy?: BookingLogOrderByWithRelationInput | BookingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingLogs.
     */
    cursor?: BookingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingLogs.
     */
    distinct?: BookingLogScalarFieldEnum | BookingLogScalarFieldEnum[]
  }

  /**
   * BookingLog findFirstOrThrow
   */
  export type BookingLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogInclude<ExtArgs> | null
    /**
     * Filter, which BookingLog to fetch.
     */
    where?: BookingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingLogs to fetch.
     */
    orderBy?: BookingLogOrderByWithRelationInput | BookingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingLogs.
     */
    cursor?: BookingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingLogs.
     */
    distinct?: BookingLogScalarFieldEnum | BookingLogScalarFieldEnum[]
  }

  /**
   * BookingLog findMany
   */
  export type BookingLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogInclude<ExtArgs> | null
    /**
     * Filter, which BookingLogs to fetch.
     */
    where?: BookingLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingLogs to fetch.
     */
    orderBy?: BookingLogOrderByWithRelationInput | BookingLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingLogs.
     */
    cursor?: BookingLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingLogs.
     */
    skip?: number
    distinct?: BookingLogScalarFieldEnum | BookingLogScalarFieldEnum[]
  }

  /**
   * BookingLog create
   */
  export type BookingLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingLog.
     */
    data: XOR<BookingLogCreateInput, BookingLogUncheckedCreateInput>
  }

  /**
   * BookingLog createMany
   */
  export type BookingLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingLogs.
     */
    data: BookingLogCreateManyInput | BookingLogCreateManyInput[]
  }

  /**
   * BookingLog createManyAndReturn
   */
  export type BookingLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BookingLogs.
     */
    data: BookingLogCreateManyInput | BookingLogCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingLog update
   */
  export type BookingLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingLog.
     */
    data: XOR<BookingLogUpdateInput, BookingLogUncheckedUpdateInput>
    /**
     * Choose, which BookingLog to update.
     */
    where: BookingLogWhereUniqueInput
  }

  /**
   * BookingLog updateMany
   */
  export type BookingLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingLogs.
     */
    data: XOR<BookingLogUpdateManyMutationInput, BookingLogUncheckedUpdateManyInput>
    /**
     * Filter which BookingLogs to update
     */
    where?: BookingLogWhereInput
  }

  /**
   * BookingLog upsert
   */
  export type BookingLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingLog to update in case it exists.
     */
    where: BookingLogWhereUniqueInput
    /**
     * In case the BookingLog found by the `where` argument doesn't exist, create a new BookingLog with this data.
     */
    create: XOR<BookingLogCreateInput, BookingLogUncheckedCreateInput>
    /**
     * In case the BookingLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingLogUpdateInput, BookingLogUncheckedUpdateInput>
  }

  /**
   * BookingLog delete
   */
  export type BookingLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogInclude<ExtArgs> | null
    /**
     * Filter which BookingLog to delete.
     */
    where: BookingLogWhereUniqueInput
  }

  /**
   * BookingLog deleteMany
   */
  export type BookingLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingLogs to delete
     */
    where?: BookingLogWhereInput
  }

  /**
   * BookingLog without action
   */
  export type BookingLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingLog
     */
    select?: BookingLogSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingLogInclude<ExtArgs> | null
  }


  /**
   * Model ServiceMaster
   */

  export type AggregateServiceMaster = {
    _count: ServiceMasterCountAggregateOutputType | null
    _min: ServiceMasterMinAggregateOutputType | null
    _max: ServiceMasterMaxAggregateOutputType | null
  }

  export type ServiceMasterMinAggregateOutputType = {
    serviceId: string | null
    masterId: string | null
  }

  export type ServiceMasterMaxAggregateOutputType = {
    serviceId: string | null
    masterId: string | null
  }

  export type ServiceMasterCountAggregateOutputType = {
    serviceId: number
    masterId: number
    _all: number
  }


  export type ServiceMasterMinAggregateInputType = {
    serviceId?: true
    masterId?: true
  }

  export type ServiceMasterMaxAggregateInputType = {
    serviceId?: true
    masterId?: true
  }

  export type ServiceMasterCountAggregateInputType = {
    serviceId?: true
    masterId?: true
    _all?: true
  }

  export type ServiceMasterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceMaster to aggregate.
     */
    where?: ServiceMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceMasters to fetch.
     */
    orderBy?: ServiceMasterOrderByWithRelationInput | ServiceMasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceMasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceMasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServiceMasters
    **/
    _count?: true | ServiceMasterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMasterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMasterMaxAggregateInputType
  }

  export type GetServiceMasterAggregateType<T extends ServiceMasterAggregateArgs> = {
        [P in keyof T & keyof AggregateServiceMaster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServiceMaster[P]>
      : GetScalarType<T[P], AggregateServiceMaster[P]>
  }




  export type ServiceMasterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceMasterWhereInput
    orderBy?: ServiceMasterOrderByWithAggregationInput | ServiceMasterOrderByWithAggregationInput[]
    by: ServiceMasterScalarFieldEnum[] | ServiceMasterScalarFieldEnum
    having?: ServiceMasterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceMasterCountAggregateInputType | true
    _min?: ServiceMasterMinAggregateInputType
    _max?: ServiceMasterMaxAggregateInputType
  }

  export type ServiceMasterGroupByOutputType = {
    serviceId: string
    masterId: string
    _count: ServiceMasterCountAggregateOutputType | null
    _min: ServiceMasterMinAggregateOutputType | null
    _max: ServiceMasterMaxAggregateOutputType | null
  }

  type GetServiceMasterGroupByPayload<T extends ServiceMasterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceMasterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceMasterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceMasterGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceMasterGroupByOutputType[P]>
        }
      >
    >


  export type ServiceMasterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serviceId?: boolean
    masterId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    master?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceMaster"]>

  export type ServiceMasterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    serviceId?: boolean
    masterId?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    master?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["serviceMaster"]>

  export type ServiceMasterSelectScalar = {
    serviceId?: boolean
    masterId?: boolean
  }

  export type ServiceMasterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    master?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ServiceMasterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    master?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ServiceMasterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServiceMaster"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      master: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      serviceId: string
      masterId: string
    }, ExtArgs["result"]["serviceMaster"]>
    composites: {}
  }

  type ServiceMasterGetPayload<S extends boolean | null | undefined | ServiceMasterDefaultArgs> = $Result.GetResult<Prisma.$ServiceMasterPayload, S>

  type ServiceMasterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ServiceMasterFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ServiceMasterCountAggregateInputType | true
    }

  export interface ServiceMasterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServiceMaster'], meta: { name: 'ServiceMaster' } }
    /**
     * Find zero or one ServiceMaster that matches the filter.
     * @param {ServiceMasterFindUniqueArgs} args - Arguments to find a ServiceMaster
     * @example
     * // Get one ServiceMaster
     * const serviceMaster = await prisma.serviceMaster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceMasterFindUniqueArgs>(args: SelectSubset<T, ServiceMasterFindUniqueArgs<ExtArgs>>): Prisma__ServiceMasterClient<$Result.GetResult<Prisma.$ServiceMasterPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ServiceMaster that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ServiceMasterFindUniqueOrThrowArgs} args - Arguments to find a ServiceMaster
     * @example
     * // Get one ServiceMaster
     * const serviceMaster = await prisma.serviceMaster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceMasterFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceMasterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceMasterClient<$Result.GetResult<Prisma.$ServiceMasterPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ServiceMaster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceMasterFindFirstArgs} args - Arguments to find a ServiceMaster
     * @example
     * // Get one ServiceMaster
     * const serviceMaster = await prisma.serviceMaster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceMasterFindFirstArgs>(args?: SelectSubset<T, ServiceMasterFindFirstArgs<ExtArgs>>): Prisma__ServiceMasterClient<$Result.GetResult<Prisma.$ServiceMasterPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ServiceMaster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceMasterFindFirstOrThrowArgs} args - Arguments to find a ServiceMaster
     * @example
     * // Get one ServiceMaster
     * const serviceMaster = await prisma.serviceMaster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceMasterFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceMasterFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceMasterClient<$Result.GetResult<Prisma.$ServiceMasterPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ServiceMasters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceMasterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServiceMasters
     * const serviceMasters = await prisma.serviceMaster.findMany()
     * 
     * // Get first 10 ServiceMasters
     * const serviceMasters = await prisma.serviceMaster.findMany({ take: 10 })
     * 
     * // Only select the `serviceId`
     * const serviceMasterWithServiceIdOnly = await prisma.serviceMaster.findMany({ select: { serviceId: true } })
     * 
     */
    findMany<T extends ServiceMasterFindManyArgs>(args?: SelectSubset<T, ServiceMasterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceMasterPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ServiceMaster.
     * @param {ServiceMasterCreateArgs} args - Arguments to create a ServiceMaster.
     * @example
     * // Create one ServiceMaster
     * const ServiceMaster = await prisma.serviceMaster.create({
     *   data: {
     *     // ... data to create a ServiceMaster
     *   }
     * })
     * 
     */
    create<T extends ServiceMasterCreateArgs>(args: SelectSubset<T, ServiceMasterCreateArgs<ExtArgs>>): Prisma__ServiceMasterClient<$Result.GetResult<Prisma.$ServiceMasterPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ServiceMasters.
     * @param {ServiceMasterCreateManyArgs} args - Arguments to create many ServiceMasters.
     * @example
     * // Create many ServiceMasters
     * const serviceMaster = await prisma.serviceMaster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceMasterCreateManyArgs>(args?: SelectSubset<T, ServiceMasterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServiceMasters and returns the data saved in the database.
     * @param {ServiceMasterCreateManyAndReturnArgs} args - Arguments to create many ServiceMasters.
     * @example
     * // Create many ServiceMasters
     * const serviceMaster = await prisma.serviceMaster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServiceMasters and only return the `serviceId`
     * const serviceMasterWithServiceIdOnly = await prisma.serviceMaster.createManyAndReturn({ 
     *   select: { serviceId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceMasterCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceMasterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServiceMasterPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ServiceMaster.
     * @param {ServiceMasterDeleteArgs} args - Arguments to delete one ServiceMaster.
     * @example
     * // Delete one ServiceMaster
     * const ServiceMaster = await prisma.serviceMaster.delete({
     *   where: {
     *     // ... filter to delete one ServiceMaster
     *   }
     * })
     * 
     */
    delete<T extends ServiceMasterDeleteArgs>(args: SelectSubset<T, ServiceMasterDeleteArgs<ExtArgs>>): Prisma__ServiceMasterClient<$Result.GetResult<Prisma.$ServiceMasterPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ServiceMaster.
     * @param {ServiceMasterUpdateArgs} args - Arguments to update one ServiceMaster.
     * @example
     * // Update one ServiceMaster
     * const serviceMaster = await prisma.serviceMaster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceMasterUpdateArgs>(args: SelectSubset<T, ServiceMasterUpdateArgs<ExtArgs>>): Prisma__ServiceMasterClient<$Result.GetResult<Prisma.$ServiceMasterPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ServiceMasters.
     * @param {ServiceMasterDeleteManyArgs} args - Arguments to filter ServiceMasters to delete.
     * @example
     * // Delete a few ServiceMasters
     * const { count } = await prisma.serviceMaster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceMasterDeleteManyArgs>(args?: SelectSubset<T, ServiceMasterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServiceMasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceMasterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServiceMasters
     * const serviceMaster = await prisma.serviceMaster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceMasterUpdateManyArgs>(args: SelectSubset<T, ServiceMasterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ServiceMaster.
     * @param {ServiceMasterUpsertArgs} args - Arguments to update or create a ServiceMaster.
     * @example
     * // Update or create a ServiceMaster
     * const serviceMaster = await prisma.serviceMaster.upsert({
     *   create: {
     *     // ... data to create a ServiceMaster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServiceMaster we want to update
     *   }
     * })
     */
    upsert<T extends ServiceMasterUpsertArgs>(args: SelectSubset<T, ServiceMasterUpsertArgs<ExtArgs>>): Prisma__ServiceMasterClient<$Result.GetResult<Prisma.$ServiceMasterPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ServiceMasters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceMasterCountArgs} args - Arguments to filter ServiceMasters to count.
     * @example
     * // Count the number of ServiceMasters
     * const count = await prisma.serviceMaster.count({
     *   where: {
     *     // ... the filter for the ServiceMasters we want to count
     *   }
     * })
    **/
    count<T extends ServiceMasterCountArgs>(
      args?: Subset<T, ServiceMasterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceMasterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServiceMaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceMasterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServiceMasterAggregateArgs>(args: Subset<T, ServiceMasterAggregateArgs>): Prisma.PrismaPromise<GetServiceMasterAggregateType<T>>

    /**
     * Group by ServiceMaster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceMasterGroupByArgs} args - Group by arguments.
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
      T extends ServiceMasterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceMasterGroupByArgs['orderBy'] }
        : { orderBy?: ServiceMasterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServiceMasterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceMasterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServiceMaster model
   */
  readonly fields: ServiceMasterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServiceMaster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceMasterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    master<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ServiceMaster model
   */ 
  interface ServiceMasterFieldRefs {
    readonly serviceId: FieldRef<"ServiceMaster", 'String'>
    readonly masterId: FieldRef<"ServiceMaster", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ServiceMaster findUnique
   */
  export type ServiceMasterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterInclude<ExtArgs> | null
    /**
     * Filter, which ServiceMaster to fetch.
     */
    where: ServiceMasterWhereUniqueInput
  }

  /**
   * ServiceMaster findUniqueOrThrow
   */
  export type ServiceMasterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterInclude<ExtArgs> | null
    /**
     * Filter, which ServiceMaster to fetch.
     */
    where: ServiceMasterWhereUniqueInput
  }

  /**
   * ServiceMaster findFirst
   */
  export type ServiceMasterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterInclude<ExtArgs> | null
    /**
     * Filter, which ServiceMaster to fetch.
     */
    where?: ServiceMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceMasters to fetch.
     */
    orderBy?: ServiceMasterOrderByWithRelationInput | ServiceMasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceMasters.
     */
    cursor?: ServiceMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceMasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceMasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceMasters.
     */
    distinct?: ServiceMasterScalarFieldEnum | ServiceMasterScalarFieldEnum[]
  }

  /**
   * ServiceMaster findFirstOrThrow
   */
  export type ServiceMasterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterInclude<ExtArgs> | null
    /**
     * Filter, which ServiceMaster to fetch.
     */
    where?: ServiceMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceMasters to fetch.
     */
    orderBy?: ServiceMasterOrderByWithRelationInput | ServiceMasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServiceMasters.
     */
    cursor?: ServiceMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceMasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceMasters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServiceMasters.
     */
    distinct?: ServiceMasterScalarFieldEnum | ServiceMasterScalarFieldEnum[]
  }

  /**
   * ServiceMaster findMany
   */
  export type ServiceMasterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterInclude<ExtArgs> | null
    /**
     * Filter, which ServiceMasters to fetch.
     */
    where?: ServiceMasterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServiceMasters to fetch.
     */
    orderBy?: ServiceMasterOrderByWithRelationInput | ServiceMasterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServiceMasters.
     */
    cursor?: ServiceMasterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServiceMasters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServiceMasters.
     */
    skip?: number
    distinct?: ServiceMasterScalarFieldEnum | ServiceMasterScalarFieldEnum[]
  }

  /**
   * ServiceMaster create
   */
  export type ServiceMasterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterInclude<ExtArgs> | null
    /**
     * The data needed to create a ServiceMaster.
     */
    data: XOR<ServiceMasterCreateInput, ServiceMasterUncheckedCreateInput>
  }

  /**
   * ServiceMaster createMany
   */
  export type ServiceMasterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServiceMasters.
     */
    data: ServiceMasterCreateManyInput | ServiceMasterCreateManyInput[]
  }

  /**
   * ServiceMaster createManyAndReturn
   */
  export type ServiceMasterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ServiceMasters.
     */
    data: ServiceMasterCreateManyInput | ServiceMasterCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServiceMaster update
   */
  export type ServiceMasterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterInclude<ExtArgs> | null
    /**
     * The data needed to update a ServiceMaster.
     */
    data: XOR<ServiceMasterUpdateInput, ServiceMasterUncheckedUpdateInput>
    /**
     * Choose, which ServiceMaster to update.
     */
    where: ServiceMasterWhereUniqueInput
  }

  /**
   * ServiceMaster updateMany
   */
  export type ServiceMasterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServiceMasters.
     */
    data: XOR<ServiceMasterUpdateManyMutationInput, ServiceMasterUncheckedUpdateManyInput>
    /**
     * Filter which ServiceMasters to update
     */
    where?: ServiceMasterWhereInput
  }

  /**
   * ServiceMaster upsert
   */
  export type ServiceMasterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterInclude<ExtArgs> | null
    /**
     * The filter to search for the ServiceMaster to update in case it exists.
     */
    where: ServiceMasterWhereUniqueInput
    /**
     * In case the ServiceMaster found by the `where` argument doesn't exist, create a new ServiceMaster with this data.
     */
    create: XOR<ServiceMasterCreateInput, ServiceMasterUncheckedCreateInput>
    /**
     * In case the ServiceMaster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceMasterUpdateInput, ServiceMasterUncheckedUpdateInput>
  }

  /**
   * ServiceMaster delete
   */
  export type ServiceMasterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterInclude<ExtArgs> | null
    /**
     * Filter which ServiceMaster to delete.
     */
    where: ServiceMasterWhereUniqueInput
  }

  /**
   * ServiceMaster deleteMany
   */
  export type ServiceMasterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServiceMasters to delete
     */
    where?: ServiceMasterWhereInput
  }

  /**
   * ServiceMaster without action
   */
  export type ServiceMasterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceMaster
     */
    select?: ServiceMasterSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceMasterInclude<ExtArgs> | null
  }


  /**
   * Model BookingMessage
   */

  export type AggregateBookingMessage = {
    _count: BookingMessageCountAggregateOutputType | null
    _avg: BookingMessageAvgAggregateOutputType | null
    _sum: BookingMessageSumAggregateOutputType | null
    _min: BookingMessageMinAggregateOutputType | null
    _max: BookingMessageMaxAggregateOutputType | null
  }

  export type BookingMessageAvgAggregateOutputType = {
    messageId: number | null
  }

  export type BookingMessageSumAggregateOutputType = {
    messageId: number | null
  }

  export type BookingMessageMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    chatId: string | null
    messageId: number | null
    createdAt: Date | null
  }

  export type BookingMessageMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    chatId: string | null
    messageId: number | null
    createdAt: Date | null
  }

  export type BookingMessageCountAggregateOutputType = {
    id: number
    bookingId: number
    chatId: number
    messageId: number
    createdAt: number
    _all: number
  }


  export type BookingMessageAvgAggregateInputType = {
    messageId?: true
  }

  export type BookingMessageSumAggregateInputType = {
    messageId?: true
  }

  export type BookingMessageMinAggregateInputType = {
    id?: true
    bookingId?: true
    chatId?: true
    messageId?: true
    createdAt?: true
  }

  export type BookingMessageMaxAggregateInputType = {
    id?: true
    bookingId?: true
    chatId?: true
    messageId?: true
    createdAt?: true
  }

  export type BookingMessageCountAggregateInputType = {
    id?: true
    bookingId?: true
    chatId?: true
    messageId?: true
    createdAt?: true
    _all?: true
  }

  export type BookingMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingMessage to aggregate.
     */
    where?: BookingMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingMessages to fetch.
     */
    orderBy?: BookingMessageOrderByWithRelationInput | BookingMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BookingMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BookingMessages
    **/
    _count?: true | BookingMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BookingMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BookingMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BookingMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BookingMessageMaxAggregateInputType
  }

  export type GetBookingMessageAggregateType<T extends BookingMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateBookingMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBookingMessage[P]>
      : GetScalarType<T[P], AggregateBookingMessage[P]>
  }




  export type BookingMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BookingMessageWhereInput
    orderBy?: BookingMessageOrderByWithAggregationInput | BookingMessageOrderByWithAggregationInput[]
    by: BookingMessageScalarFieldEnum[] | BookingMessageScalarFieldEnum
    having?: BookingMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BookingMessageCountAggregateInputType | true
    _avg?: BookingMessageAvgAggregateInputType
    _sum?: BookingMessageSumAggregateInputType
    _min?: BookingMessageMinAggregateInputType
    _max?: BookingMessageMaxAggregateInputType
  }

  export type BookingMessageGroupByOutputType = {
    id: string
    bookingId: string
    chatId: string
    messageId: number
    createdAt: Date
    _count: BookingMessageCountAggregateOutputType | null
    _avg: BookingMessageAvgAggregateOutputType | null
    _sum: BookingMessageSumAggregateOutputType | null
    _min: BookingMessageMinAggregateOutputType | null
    _max: BookingMessageMaxAggregateOutputType | null
  }

  type GetBookingMessageGroupByPayload<T extends BookingMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BookingMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BookingMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BookingMessageGroupByOutputType[P]>
            : GetScalarType<T[P], BookingMessageGroupByOutputType[P]>
        }
      >
    >


  export type BookingMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    chatId?: boolean
    messageId?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingMessage"]>

  export type BookingMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    chatId?: boolean
    messageId?: boolean
    createdAt?: boolean
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bookingMessage"]>

  export type BookingMessageSelectScalar = {
    id?: boolean
    bookingId?: boolean
    chatId?: boolean
    messageId?: boolean
    createdAt?: boolean
  }

  export type BookingMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }
  export type BookingMessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    booking?: boolean | BookingDefaultArgs<ExtArgs>
  }

  export type $BookingMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BookingMessage"
    objects: {
      booking: Prisma.$BookingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      chatId: string
      messageId: number
      createdAt: Date
    }, ExtArgs["result"]["bookingMessage"]>
    composites: {}
  }

  type BookingMessageGetPayload<S extends boolean | null | undefined | BookingMessageDefaultArgs> = $Result.GetResult<Prisma.$BookingMessagePayload, S>

  type BookingMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BookingMessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BookingMessageCountAggregateInputType | true
    }

  export interface BookingMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BookingMessage'], meta: { name: 'BookingMessage' } }
    /**
     * Find zero or one BookingMessage that matches the filter.
     * @param {BookingMessageFindUniqueArgs} args - Arguments to find a BookingMessage
     * @example
     * // Get one BookingMessage
     * const bookingMessage = await prisma.bookingMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BookingMessageFindUniqueArgs>(args: SelectSubset<T, BookingMessageFindUniqueArgs<ExtArgs>>): Prisma__BookingMessageClient<$Result.GetResult<Prisma.$BookingMessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one BookingMessage that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {BookingMessageFindUniqueOrThrowArgs} args - Arguments to find a BookingMessage
     * @example
     * // Get one BookingMessage
     * const bookingMessage = await prisma.bookingMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BookingMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, BookingMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BookingMessageClient<$Result.GetResult<Prisma.$BookingMessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first BookingMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingMessageFindFirstArgs} args - Arguments to find a BookingMessage
     * @example
     * // Get one BookingMessage
     * const bookingMessage = await prisma.bookingMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BookingMessageFindFirstArgs>(args?: SelectSubset<T, BookingMessageFindFirstArgs<ExtArgs>>): Prisma__BookingMessageClient<$Result.GetResult<Prisma.$BookingMessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first BookingMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingMessageFindFirstOrThrowArgs} args - Arguments to find a BookingMessage
     * @example
     * // Get one BookingMessage
     * const bookingMessage = await prisma.bookingMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BookingMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, BookingMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__BookingMessageClient<$Result.GetResult<Prisma.$BookingMessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more BookingMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BookingMessages
     * const bookingMessages = await prisma.bookingMessage.findMany()
     * 
     * // Get first 10 BookingMessages
     * const bookingMessages = await prisma.bookingMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bookingMessageWithIdOnly = await prisma.bookingMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BookingMessageFindManyArgs>(args?: SelectSubset<T, BookingMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingMessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a BookingMessage.
     * @param {BookingMessageCreateArgs} args - Arguments to create a BookingMessage.
     * @example
     * // Create one BookingMessage
     * const BookingMessage = await prisma.bookingMessage.create({
     *   data: {
     *     // ... data to create a BookingMessage
     *   }
     * })
     * 
     */
    create<T extends BookingMessageCreateArgs>(args: SelectSubset<T, BookingMessageCreateArgs<ExtArgs>>): Prisma__BookingMessageClient<$Result.GetResult<Prisma.$BookingMessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many BookingMessages.
     * @param {BookingMessageCreateManyArgs} args - Arguments to create many BookingMessages.
     * @example
     * // Create many BookingMessages
     * const bookingMessage = await prisma.bookingMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BookingMessageCreateManyArgs>(args?: SelectSubset<T, BookingMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many BookingMessages and returns the data saved in the database.
     * @param {BookingMessageCreateManyAndReturnArgs} args - Arguments to create many BookingMessages.
     * @example
     * // Create many BookingMessages
     * const bookingMessage = await prisma.bookingMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many BookingMessages and only return the `id`
     * const bookingMessageWithIdOnly = await prisma.bookingMessage.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BookingMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, BookingMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BookingMessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a BookingMessage.
     * @param {BookingMessageDeleteArgs} args - Arguments to delete one BookingMessage.
     * @example
     * // Delete one BookingMessage
     * const BookingMessage = await prisma.bookingMessage.delete({
     *   where: {
     *     // ... filter to delete one BookingMessage
     *   }
     * })
     * 
     */
    delete<T extends BookingMessageDeleteArgs>(args: SelectSubset<T, BookingMessageDeleteArgs<ExtArgs>>): Prisma__BookingMessageClient<$Result.GetResult<Prisma.$BookingMessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one BookingMessage.
     * @param {BookingMessageUpdateArgs} args - Arguments to update one BookingMessage.
     * @example
     * // Update one BookingMessage
     * const bookingMessage = await prisma.bookingMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BookingMessageUpdateArgs>(args: SelectSubset<T, BookingMessageUpdateArgs<ExtArgs>>): Prisma__BookingMessageClient<$Result.GetResult<Prisma.$BookingMessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more BookingMessages.
     * @param {BookingMessageDeleteManyArgs} args - Arguments to filter BookingMessages to delete.
     * @example
     * // Delete a few BookingMessages
     * const { count } = await prisma.bookingMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BookingMessageDeleteManyArgs>(args?: SelectSubset<T, BookingMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BookingMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BookingMessages
     * const bookingMessage = await prisma.bookingMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BookingMessageUpdateManyArgs>(args: SelectSubset<T, BookingMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BookingMessage.
     * @param {BookingMessageUpsertArgs} args - Arguments to update or create a BookingMessage.
     * @example
     * // Update or create a BookingMessage
     * const bookingMessage = await prisma.bookingMessage.upsert({
     *   create: {
     *     // ... data to create a BookingMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BookingMessage we want to update
     *   }
     * })
     */
    upsert<T extends BookingMessageUpsertArgs>(args: SelectSubset<T, BookingMessageUpsertArgs<ExtArgs>>): Prisma__BookingMessageClient<$Result.GetResult<Prisma.$BookingMessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of BookingMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingMessageCountArgs} args - Arguments to filter BookingMessages to count.
     * @example
     * // Count the number of BookingMessages
     * const count = await prisma.bookingMessage.count({
     *   where: {
     *     // ... the filter for the BookingMessages we want to count
     *   }
     * })
    **/
    count<T extends BookingMessageCountArgs>(
      args?: Subset<T, BookingMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BookingMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BookingMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BookingMessageAggregateArgs>(args: Subset<T, BookingMessageAggregateArgs>): Prisma.PrismaPromise<GetBookingMessageAggregateType<T>>

    /**
     * Group by BookingMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BookingMessageGroupByArgs} args - Group by arguments.
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
      T extends BookingMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BookingMessageGroupByArgs['orderBy'] }
        : { orderBy?: BookingMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BookingMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BookingMessage model
   */
  readonly fields: BookingMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BookingMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BookingMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    booking<T extends BookingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BookingDefaultArgs<ExtArgs>>): Prisma__BookingClient<$Result.GetResult<Prisma.$BookingPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the BookingMessage model
   */ 
  interface BookingMessageFieldRefs {
    readonly id: FieldRef<"BookingMessage", 'String'>
    readonly bookingId: FieldRef<"BookingMessage", 'String'>
    readonly chatId: FieldRef<"BookingMessage", 'String'>
    readonly messageId: FieldRef<"BookingMessage", 'Int'>
    readonly createdAt: FieldRef<"BookingMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BookingMessage findUnique
   */
  export type BookingMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingMessage
     */
    select?: BookingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingMessageInclude<ExtArgs> | null
    /**
     * Filter, which BookingMessage to fetch.
     */
    where: BookingMessageWhereUniqueInput
  }

  /**
   * BookingMessage findUniqueOrThrow
   */
  export type BookingMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingMessage
     */
    select?: BookingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingMessageInclude<ExtArgs> | null
    /**
     * Filter, which BookingMessage to fetch.
     */
    where: BookingMessageWhereUniqueInput
  }

  /**
   * BookingMessage findFirst
   */
  export type BookingMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingMessage
     */
    select?: BookingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingMessageInclude<ExtArgs> | null
    /**
     * Filter, which BookingMessage to fetch.
     */
    where?: BookingMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingMessages to fetch.
     */
    orderBy?: BookingMessageOrderByWithRelationInput | BookingMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingMessages.
     */
    cursor?: BookingMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingMessages.
     */
    distinct?: BookingMessageScalarFieldEnum | BookingMessageScalarFieldEnum[]
  }

  /**
   * BookingMessage findFirstOrThrow
   */
  export type BookingMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingMessage
     */
    select?: BookingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingMessageInclude<ExtArgs> | null
    /**
     * Filter, which BookingMessage to fetch.
     */
    where?: BookingMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingMessages to fetch.
     */
    orderBy?: BookingMessageOrderByWithRelationInput | BookingMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BookingMessages.
     */
    cursor?: BookingMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BookingMessages.
     */
    distinct?: BookingMessageScalarFieldEnum | BookingMessageScalarFieldEnum[]
  }

  /**
   * BookingMessage findMany
   */
  export type BookingMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingMessage
     */
    select?: BookingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingMessageInclude<ExtArgs> | null
    /**
     * Filter, which BookingMessages to fetch.
     */
    where?: BookingMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BookingMessages to fetch.
     */
    orderBy?: BookingMessageOrderByWithRelationInput | BookingMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BookingMessages.
     */
    cursor?: BookingMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BookingMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BookingMessages.
     */
    skip?: number
    distinct?: BookingMessageScalarFieldEnum | BookingMessageScalarFieldEnum[]
  }

  /**
   * BookingMessage create
   */
  export type BookingMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingMessage
     */
    select?: BookingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a BookingMessage.
     */
    data: XOR<BookingMessageCreateInput, BookingMessageUncheckedCreateInput>
  }

  /**
   * BookingMessage createMany
   */
  export type BookingMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BookingMessages.
     */
    data: BookingMessageCreateManyInput | BookingMessageCreateManyInput[]
  }

  /**
   * BookingMessage createManyAndReturn
   */
  export type BookingMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingMessage
     */
    select?: BookingMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many BookingMessages.
     */
    data: BookingMessageCreateManyInput | BookingMessageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingMessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * BookingMessage update
   */
  export type BookingMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingMessage
     */
    select?: BookingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a BookingMessage.
     */
    data: XOR<BookingMessageUpdateInput, BookingMessageUncheckedUpdateInput>
    /**
     * Choose, which BookingMessage to update.
     */
    where: BookingMessageWhereUniqueInput
  }

  /**
   * BookingMessage updateMany
   */
  export type BookingMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BookingMessages.
     */
    data: XOR<BookingMessageUpdateManyMutationInput, BookingMessageUncheckedUpdateManyInput>
    /**
     * Filter which BookingMessages to update
     */
    where?: BookingMessageWhereInput
  }

  /**
   * BookingMessage upsert
   */
  export type BookingMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingMessage
     */
    select?: BookingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the BookingMessage to update in case it exists.
     */
    where: BookingMessageWhereUniqueInput
    /**
     * In case the BookingMessage found by the `where` argument doesn't exist, create a new BookingMessage with this data.
     */
    create: XOR<BookingMessageCreateInput, BookingMessageUncheckedCreateInput>
    /**
     * In case the BookingMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BookingMessageUpdateInput, BookingMessageUncheckedUpdateInput>
  }

  /**
   * BookingMessage delete
   */
  export type BookingMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingMessage
     */
    select?: BookingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingMessageInclude<ExtArgs> | null
    /**
     * Filter which BookingMessage to delete.
     */
    where: BookingMessageWhereUniqueInput
  }

  /**
   * BookingMessage deleteMany
   */
  export type BookingMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BookingMessages to delete
     */
    where?: BookingMessageWhereInput
  }

  /**
   * BookingMessage without action
   */
  export type BookingMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BookingMessage
     */
    select?: BookingMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BookingMessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    image: 'image',
    description: 'description',
    phoneNumber: 'phoneNumber',
    role: 'role',
    chatId: 'chatId',
    nickName: 'nickName',
    branchId: 'branchId',
    resetToken: 'resetToken',
    resetTokenExpiry: 'resetTokenExpiry',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BranchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    phoneNumber: 'phoneNumber',
    description: 'description',
    socialMedia: 'socialMedia',
    city: 'city',
    image: 'image',
    status: 'status',
    superAdminId: 'superAdminId',
    adminId: 'adminId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type BranchScalarFieldEnum = (typeof BranchScalarFieldEnum)[keyof typeof BranchScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    duration: 'duration',
    price: 'price',
    userId: 'userId',
    currency: 'currency',
    categoryId: 'categoryId',
    branchId: 'branchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    nickName: 'nickName',
    phoneNumber: 'phoneNumber',
    chatId: 'chatId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const BookingScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    clientId: 'clientId',
    branchId: 'branchId',
    date: 'date',
    time: 'time',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    status: 'status'
  };

  export type BookingScalarFieldEnum = (typeof BookingScalarFieldEnum)[keyof typeof BookingScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    comment: 'comment',
    clientId: 'clientId',
    userId: 'userId',
    bookingId: 'bookingId',
    branchId: 'branchId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const MasterAvailabilityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    availability: 'availability',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MasterAvailabilityScalarFieldEnum = (typeof MasterAvailabilityScalarFieldEnum)[keyof typeof MasterAvailabilityScalarFieldEnum]


  export const BookingLogScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    userId: 'userId',
    action: 'action',
    timestamp: 'timestamp'
  };

  export type BookingLogScalarFieldEnum = (typeof BookingLogScalarFieldEnum)[keyof typeof BookingLogScalarFieldEnum]


  export const ServiceMasterScalarFieldEnum: {
    serviceId: 'serviceId',
    masterId: 'masterId'
  };

  export type ServiceMasterScalarFieldEnum = (typeof ServiceMasterScalarFieldEnum)[keyof typeof ServiceMasterScalarFieldEnum]


  export const BookingMessageScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    chatId: 'chatId',
    messageId: 'messageId',
    createdAt: 'createdAt'
  };

  export type BookingMessageScalarFieldEnum = (typeof BookingMessageScalarFieldEnum)[keyof typeof BookingMessageScalarFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    description?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    chatId?: StringNullableFilter<"User"> | string | null
    nickName?: StringNullableFilter<"User"> | string | null
    branchId?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    services?: ServiceListRelationFilter
    bookings?: BookingListRelationFilter
    serviceMasters?: ServiceMasterListRelationFilter
    reviews?: ReviewListRelationFilter
    categories?: CategoryListRelationFilter
    masterAvailability?: MasterAvailabilityListRelationFilter
    bookingLogs?: BookingLogListRelationFilter
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
    clients?: ClientListRelationFilter
    managedBranches?: BranchListRelationFilter
    createdBranches?: BranchListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    chatId?: SortOrderInput | SortOrder
    nickName?: SortOrderInput | SortOrder
    branchId?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    services?: ServiceOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    serviceMasters?: ServiceMasterOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
    categories?: CategoryOrderByRelationAggregateInput
    masterAvailability?: MasterAvailabilityOrderByRelationAggregateInput
    bookingLogs?: BookingLogOrderByRelationAggregateInput
    branch?: BranchOrderByWithRelationInput
    clients?: ClientOrderByRelationAggregateInput
    managedBranches?: BranchOrderByRelationAggregateInput
    createdBranches?: BranchOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    chatId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    description?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    nickName?: StringNullableFilter<"User"> | string | null
    branchId?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    services?: ServiceListRelationFilter
    bookings?: BookingListRelationFilter
    serviceMasters?: ServiceMasterListRelationFilter
    reviews?: ReviewListRelationFilter
    categories?: CategoryListRelationFilter
    masterAvailability?: MasterAvailabilityListRelationFilter
    bookingLogs?: BookingLogListRelationFilter
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
    clients?: ClientListRelationFilter
    managedBranches?: BranchListRelationFilter
    createdBranches?: BranchListRelationFilter
  }, "id" | "email" | "chatId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    chatId?: SortOrderInput | SortOrder
    nickName?: SortOrderInput | SortOrder
    branchId?: SortOrderInput | SortOrder
    resetToken?: SortOrderInput | SortOrder
    resetTokenExpiry?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    description?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    chatId?: StringNullableWithAggregatesFilter<"User"> | string | null
    nickName?: StringNullableWithAggregatesFilter<"User"> | string | null
    branchId?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type BranchWhereInput = {
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    address?: StringNullableFilter<"Branch"> | string | null
    phoneNumber?: StringNullableFilter<"Branch"> | string | null
    description?: StringNullableFilter<"Branch"> | string | null
    socialMedia?: StringNullableFilter<"Branch"> | string | null
    city?: StringNullableFilter<"Branch"> | string | null
    image?: StringNullableFilter<"Branch"> | string | null
    status?: StringFilter<"Branch"> | string
    superAdminId?: StringFilter<"Branch"> | string
    adminId?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Branch"> | Date | string | null
    superAdmin?: XOR<UserRelationFilter, UserWhereInput>
    admin?: XOR<UserRelationFilter, UserWhereInput>
    users?: UserListRelationFilter
    services?: ServiceListRelationFilter
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type BranchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    socialMedia?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    status?: SortOrder
    superAdminId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    superAdmin?: UserOrderByWithRelationInput
    admin?: UserOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
    services?: ServiceOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type BranchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BranchWhereInput | BranchWhereInput[]
    OR?: BranchWhereInput[]
    NOT?: BranchWhereInput | BranchWhereInput[]
    name?: StringFilter<"Branch"> | string
    address?: StringNullableFilter<"Branch"> | string | null
    phoneNumber?: StringNullableFilter<"Branch"> | string | null
    description?: StringNullableFilter<"Branch"> | string | null
    socialMedia?: StringNullableFilter<"Branch"> | string | null
    city?: StringNullableFilter<"Branch"> | string | null
    image?: StringNullableFilter<"Branch"> | string | null
    status?: StringFilter<"Branch"> | string
    superAdminId?: StringFilter<"Branch"> | string
    adminId?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Branch"> | Date | string | null
    superAdmin?: XOR<UserRelationFilter, UserWhereInput>
    admin?: XOR<UserRelationFilter, UserWhereInput>
    users?: UserListRelationFilter
    services?: ServiceListRelationFilter
    bookings?: BookingListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type BranchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    socialMedia?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    status?: SortOrder
    superAdminId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: BranchCountOrderByAggregateInput
    _max?: BranchMaxOrderByAggregateInput
    _min?: BranchMinOrderByAggregateInput
  }

  export type BranchScalarWhereWithAggregatesInput = {
    AND?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    OR?: BranchScalarWhereWithAggregatesInput[]
    NOT?: BranchScalarWhereWithAggregatesInput | BranchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Branch"> | string
    name?: StringWithAggregatesFilter<"Branch"> | string
    address?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    description?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    socialMedia?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    city?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    image?: StringNullableWithAggregatesFilter<"Branch"> | string | null
    status?: StringWithAggregatesFilter<"Branch"> | string
    superAdminId?: StringWithAggregatesFilter<"Branch"> | string
    adminId?: StringWithAggregatesFilter<"Branch"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Branch"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Branch"> | Date | string | null
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    userId?: StringNullableFilter<"Category"> | string | null
    services?: ServiceListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    services?: ServiceOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    userId?: StringNullableFilter<"Category"> | string | null
    services?: ServiceListRelationFilter
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    userId?: StringFilter<"Service"> | string
    currency?: StringFilter<"Service"> | string
    categoryId?: StringFilter<"Service"> | string
    branchId?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
    masters?: ServiceMasterListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    currency?: SortOrder
    categoryId?: SortOrder
    branchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    bookings?: BookingOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    masters?: ServiceMasterOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    userId?: StringFilter<"Service"> | string
    currency?: StringFilter<"Service"> | string
    categoryId?: StringFilter<"Service"> | string
    branchId?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
    bookings?: BookingListRelationFilter
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
    masters?: ServiceMasterListRelationFilter
  }, "id">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    currency?: SortOrder
    categoryId?: SortOrder
    branchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _avg?: ServiceAvgOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
    _sum?: ServiceSumOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringWithAggregatesFilter<"Service"> | string
    duration?: IntWithAggregatesFilter<"Service"> | number
    price?: FloatWithAggregatesFilter<"Service"> | number
    userId?: StringWithAggregatesFilter<"Service"> | string
    currency?: StringWithAggregatesFilter<"Service"> | string
    categoryId?: StringWithAggregatesFilter<"Service"> | string
    branchId?: StringNullableWithAggregatesFilter<"Service"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Service"> | Date | string | null
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    nickName?: StringFilter<"Client"> | string
    phoneNumber?: StringNullableFilter<"Client"> | string | null
    chatId?: StringNullableFilter<"Client"> | string | null
    userId?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    reviews?: ReviewListRelationFilter
    bookings?: BookingListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    nickName?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    chatId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    reviews?: ReviewOrderByRelationAggregateInput
    bookings?: BookingOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chatId?: string
    userId?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    nickName?: StringFilter<"Client"> | string
    phoneNumber?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    reviews?: ReviewListRelationFilter
    bookings?: BookingListRelationFilter
  }, "id" | "chatId" | "userId">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    nickName?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    chatId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    nickName?: StringWithAggregatesFilter<"Client"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"Client"> | string | null
    chatId?: StringNullableWithAggregatesFilter<"Client"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
  }

  export type BookingWhereInput = {
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    clientId?: StringFilter<"Booking"> | string
    branchId?: StringNullableFilter<"Booking"> | string | null
    date?: DateTimeFilter<"Booking"> | Date | string
    time?: StringFilter<"Booking"> | string
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    services?: ServiceListRelationFilter
    review?: ReviewListRelationFilter
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
    logs?: BookingLogListRelationFilter
    messages?: BookingMessageListRelationFilter
  }

  export type BookingOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    branchId?: SortOrderInput | SortOrder
    date?: SortOrder
    time?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    services?: ServiceOrderByRelationAggregateInput
    review?: ReviewOrderByRelationAggregateInput
    client?: ClientOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
    logs?: BookingLogOrderByRelationAggregateInput
    messages?: BookingMessageOrderByRelationAggregateInput
  }

  export type BookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingWhereInput | BookingWhereInput[]
    OR?: BookingWhereInput[]
    NOT?: BookingWhereInput | BookingWhereInput[]
    userId?: StringFilter<"Booking"> | string
    clientId?: StringFilter<"Booking"> | string
    branchId?: StringNullableFilter<"Booking"> | string | null
    date?: DateTimeFilter<"Booking"> | Date | string
    time?: StringFilter<"Booking"> | string
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    services?: ServiceListRelationFilter
    review?: ReviewListRelationFilter
    client?: XOR<ClientRelationFilter, ClientWhereInput>
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
    logs?: BookingLogListRelationFilter
    messages?: BookingMessageListRelationFilter
  }, "id">

  export type BookingOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    branchId?: SortOrderInput | SortOrder
    date?: SortOrder
    time?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    _count?: BookingCountOrderByAggregateInput
    _max?: BookingMaxOrderByAggregateInput
    _min?: BookingMinOrderByAggregateInput
  }

  export type BookingScalarWhereWithAggregatesInput = {
    AND?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    OR?: BookingScalarWhereWithAggregatesInput[]
    NOT?: BookingScalarWhereWithAggregatesInput | BookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Booking"> | string
    userId?: StringWithAggregatesFilter<"Booking"> | string
    clientId?: StringWithAggregatesFilter<"Booking"> | string
    branchId?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    date?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    time?: StringWithAggregatesFilter<"Booking"> | string
    notes?: StringNullableWithAggregatesFilter<"Booking"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Booking"> | Date | string
    status?: StringWithAggregatesFilter<"Booking"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    clientId?: StringNullableFilter<"Review"> | string | null
    userId?: StringNullableFilter<"Review"> | string | null
    bookingId?: StringNullableFilter<"Review"> | string | null
    branchId?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    booking?: XOR<BookingNullableRelationFilter, BookingWhereInput> | null
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    branchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    booking?: BookingOrderByWithRelationInput
    branch?: BranchOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    clientId?: StringNullableFilter<"Review"> | string | null
    userId?: StringNullableFilter<"Review"> | string | null
    bookingId?: StringNullableFilter<"Review"> | string | null
    branchId?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
    client?: XOR<ClientNullableRelationFilter, ClientWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    booking?: XOR<BookingNullableRelationFilter, BookingWhereInput> | null
    branch?: XOR<BranchNullableRelationFilter, BranchWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    clientId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    bookingId?: SortOrderInput | SortOrder
    branchId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    clientId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    userId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    bookingId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    branchId?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type MasterAvailabilityWhereInput = {
    AND?: MasterAvailabilityWhereInput | MasterAvailabilityWhereInput[]
    OR?: MasterAvailabilityWhereInput[]
    NOT?: MasterAvailabilityWhereInput | MasterAvailabilityWhereInput[]
    id?: StringFilter<"MasterAvailability"> | string
    userId?: StringFilter<"MasterAvailability"> | string
    availability?: StringFilter<"MasterAvailability"> | string
    createdAt?: DateTimeFilter<"MasterAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"MasterAvailability"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MasterAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MasterAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: MasterAvailabilityWhereInput | MasterAvailabilityWhereInput[]
    OR?: MasterAvailabilityWhereInput[]
    NOT?: MasterAvailabilityWhereInput | MasterAvailabilityWhereInput[]
    availability?: StringFilter<"MasterAvailability"> | string
    createdAt?: DateTimeFilter<"MasterAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"MasterAvailability"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type MasterAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MasterAvailabilityCountOrderByAggregateInput
    _max?: MasterAvailabilityMaxOrderByAggregateInput
    _min?: MasterAvailabilityMinOrderByAggregateInput
  }

  export type MasterAvailabilityScalarWhereWithAggregatesInput = {
    AND?: MasterAvailabilityScalarWhereWithAggregatesInput | MasterAvailabilityScalarWhereWithAggregatesInput[]
    OR?: MasterAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: MasterAvailabilityScalarWhereWithAggregatesInput | MasterAvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MasterAvailability"> | string
    userId?: StringWithAggregatesFilter<"MasterAvailability"> | string
    availability?: StringWithAggregatesFilter<"MasterAvailability"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MasterAvailability"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MasterAvailability"> | Date | string
  }

  export type BookingLogWhereInput = {
    AND?: BookingLogWhereInput | BookingLogWhereInput[]
    OR?: BookingLogWhereInput[]
    NOT?: BookingLogWhereInput | BookingLogWhereInput[]
    id?: StringFilter<"BookingLog"> | string
    bookingId?: StringFilter<"BookingLog"> | string
    userId?: StringFilter<"BookingLog"> | string
    action?: StringFilter<"BookingLog"> | string
    timestamp?: DateTimeFilter<"BookingLog"> | Date | string
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type BookingLogOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    booking?: BookingOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type BookingLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingLogWhereInput | BookingLogWhereInput[]
    OR?: BookingLogWhereInput[]
    NOT?: BookingLogWhereInput | BookingLogWhereInput[]
    bookingId?: StringFilter<"BookingLog"> | string
    userId?: StringFilter<"BookingLog"> | string
    action?: StringFilter<"BookingLog"> | string
    timestamp?: DateTimeFilter<"BookingLog"> | Date | string
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type BookingLogOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
    _count?: BookingLogCountOrderByAggregateInput
    _max?: BookingLogMaxOrderByAggregateInput
    _min?: BookingLogMinOrderByAggregateInput
  }

  export type BookingLogScalarWhereWithAggregatesInput = {
    AND?: BookingLogScalarWhereWithAggregatesInput | BookingLogScalarWhereWithAggregatesInput[]
    OR?: BookingLogScalarWhereWithAggregatesInput[]
    NOT?: BookingLogScalarWhereWithAggregatesInput | BookingLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingLog"> | string
    bookingId?: StringWithAggregatesFilter<"BookingLog"> | string
    userId?: StringWithAggregatesFilter<"BookingLog"> | string
    action?: StringWithAggregatesFilter<"BookingLog"> | string
    timestamp?: DateTimeWithAggregatesFilter<"BookingLog"> | Date | string
  }

  export type ServiceMasterWhereInput = {
    AND?: ServiceMasterWhereInput | ServiceMasterWhereInput[]
    OR?: ServiceMasterWhereInput[]
    NOT?: ServiceMasterWhereInput | ServiceMasterWhereInput[]
    serviceId?: StringFilter<"ServiceMaster"> | string
    masterId?: StringFilter<"ServiceMaster"> | string
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    master?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ServiceMasterOrderByWithRelationInput = {
    serviceId?: SortOrder
    masterId?: SortOrder
    service?: ServiceOrderByWithRelationInput
    master?: UserOrderByWithRelationInput
  }

  export type ServiceMasterWhereUniqueInput = Prisma.AtLeast<{
    serviceId_masterId?: ServiceMasterServiceIdMasterIdCompoundUniqueInput
    AND?: ServiceMasterWhereInput | ServiceMasterWhereInput[]
    OR?: ServiceMasterWhereInput[]
    NOT?: ServiceMasterWhereInput | ServiceMasterWhereInput[]
    serviceId?: StringFilter<"ServiceMaster"> | string
    masterId?: StringFilter<"ServiceMaster"> | string
    service?: XOR<ServiceRelationFilter, ServiceWhereInput>
    master?: XOR<UserRelationFilter, UserWhereInput>
  }, "serviceId_masterId">

  export type ServiceMasterOrderByWithAggregationInput = {
    serviceId?: SortOrder
    masterId?: SortOrder
    _count?: ServiceMasterCountOrderByAggregateInput
    _max?: ServiceMasterMaxOrderByAggregateInput
    _min?: ServiceMasterMinOrderByAggregateInput
  }

  export type ServiceMasterScalarWhereWithAggregatesInput = {
    AND?: ServiceMasterScalarWhereWithAggregatesInput | ServiceMasterScalarWhereWithAggregatesInput[]
    OR?: ServiceMasterScalarWhereWithAggregatesInput[]
    NOT?: ServiceMasterScalarWhereWithAggregatesInput | ServiceMasterScalarWhereWithAggregatesInput[]
    serviceId?: StringWithAggregatesFilter<"ServiceMaster"> | string
    masterId?: StringWithAggregatesFilter<"ServiceMaster"> | string
  }

  export type BookingMessageWhereInput = {
    AND?: BookingMessageWhereInput | BookingMessageWhereInput[]
    OR?: BookingMessageWhereInput[]
    NOT?: BookingMessageWhereInput | BookingMessageWhereInput[]
    id?: StringFilter<"BookingMessage"> | string
    bookingId?: StringFilter<"BookingMessage"> | string
    chatId?: StringFilter<"BookingMessage"> | string
    messageId?: IntFilter<"BookingMessage"> | number
    createdAt?: DateTimeFilter<"BookingMessage"> | Date | string
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
  }

  export type BookingMessageOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    createdAt?: SortOrder
    booking?: BookingOrderByWithRelationInput
  }

  export type BookingMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BookingMessageWhereInput | BookingMessageWhereInput[]
    OR?: BookingMessageWhereInput[]
    NOT?: BookingMessageWhereInput | BookingMessageWhereInput[]
    bookingId?: StringFilter<"BookingMessage"> | string
    chatId?: StringFilter<"BookingMessage"> | string
    messageId?: IntFilter<"BookingMessage"> | number
    createdAt?: DateTimeFilter<"BookingMessage"> | Date | string
    booking?: XOR<BookingRelationFilter, BookingWhereInput>
  }, "id">

  export type BookingMessageOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    createdAt?: SortOrder
    _count?: BookingMessageCountOrderByAggregateInput
    _avg?: BookingMessageAvgOrderByAggregateInput
    _max?: BookingMessageMaxOrderByAggregateInput
    _min?: BookingMessageMinOrderByAggregateInput
    _sum?: BookingMessageSumOrderByAggregateInput
  }

  export type BookingMessageScalarWhereWithAggregatesInput = {
    AND?: BookingMessageScalarWhereWithAggregatesInput | BookingMessageScalarWhereWithAggregatesInput[]
    OR?: BookingMessageScalarWhereWithAggregatesInput[]
    NOT?: BookingMessageScalarWhereWithAggregatesInput | BookingMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BookingMessage"> | string
    bookingId?: StringWithAggregatesFilter<"BookingMessage"> | string
    chatId?: StringWithAggregatesFilter<"BookingMessage"> | string
    messageId?: IntWithAggregatesFilter<"BookingMessage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"BookingMessage"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterCreateNestedManyWithoutMasterInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogCreateNestedManyWithoutUserInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    clients?: ClientCreateNestedManyWithoutUserInput
    managedBranches?: BranchCreateNestedManyWithoutAdminInput
    createdBranches?: BranchCreateNestedManyWithoutSuperAdminInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    branchId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterUncheckedCreateNestedManyWithoutMasterInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityUncheckedCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    managedBranches?: BranchUncheckedCreateNestedManyWithoutAdminInput
    createdBranches?: BranchUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUpdateManyWithoutUserNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUncheckedUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUncheckedUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    branchId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BranchCreateInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    superAdmin: UserCreateNestedOneWithoutCreatedBranchesInput
    admin: UserCreateNestedOneWithoutManagedBranchesInput
    users?: UserCreateNestedManyWithoutBranchInput
    services?: ServiceCreateNestedManyWithoutBranchInput
    bookings?: BookingCreateNestedManyWithoutBranchInput
    reviews?: ReviewCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    superAdminId: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    services?: ServiceUncheckedCreateNestedManyWithoutBranchInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBranchInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    superAdmin?: UserUpdateOneRequiredWithoutCreatedBranchesNestedInput
    admin?: UserUpdateOneRequiredWithoutManagedBranchesNestedInput
    users?: UserUpdateManyWithoutBranchNestedInput
    services?: ServiceUpdateManyWithoutBranchNestedInput
    bookings?: BookingUpdateManyWithoutBranchNestedInput
    reviews?: ReviewUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    superAdminId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    services?: ServiceUncheckedUpdateManyWithoutBranchNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBranchNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchCreateManyInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    superAdminId: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BranchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BranchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    superAdminId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutCategoryInput
    user?: UserCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    services?: ServiceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutCategoryNestedInput
    user?: UserUpdateOneWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    services?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutServicesInput
    bookings?: BookingCreateNestedManyWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    branch?: BranchCreateNestedOneWithoutServicesInput
    masters?: ServiceMasterCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    userId: string
    currency?: string
    categoryId: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutServicesInput
    masters?: ServiceMasterUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutServicesNestedInput
    bookings?: BookingUpdateManyWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    branch?: BranchUpdateOneWithoutServicesNestedInput
    masters?: ServiceMasterUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutServicesNestedInput
    masters?: ServiceMasterUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    userId: string
    currency?: string
    categoryId: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    nickName: string
    phoneNumber?: string | null
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutClientsInput
    reviews?: ReviewCreateNestedManyWithoutClientInput
    bookings?: BookingCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    nickName: string
    phoneNumber?: string | null
    chatId?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutClientInput
    bookings?: BookingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutClientsNestedInput
    reviews?: ReviewUpdateManyWithoutClientNestedInput
    bookings?: BookingUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    nickName: string
    phoneNumber?: string | null
    chatId?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingCreateInput = {
    id?: string
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    user: UserCreateNestedOneWithoutBookingsInput
    services?: ServiceCreateNestedManyWithoutBookingsInput
    review?: ReviewCreateNestedManyWithoutBookingInput
    client: ClientCreateNestedOneWithoutBookingsInput
    branch?: BranchCreateNestedOneWithoutBookingsInput
    logs?: BookingLogCreateNestedManyWithoutBookingInput
    messages?: BookingMessageCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateInput = {
    id?: string
    userId: string
    clientId: string
    branchId?: string | null
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    services?: ServiceUncheckedCreateNestedManyWithoutBookingsInput
    review?: ReviewUncheckedCreateNestedManyWithoutBookingInput
    logs?: BookingLogUncheckedCreateNestedManyWithoutBookingInput
    messages?: BookingMessageUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    services?: ServiceUpdateManyWithoutBookingsNestedInput
    review?: ReviewUpdateManyWithoutBookingNestedInput
    client?: ClientUpdateOneRequiredWithoutBookingsNestedInput
    branch?: BranchUpdateOneWithoutBookingsNestedInput
    logs?: BookingLogUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutBookingsNestedInput
    review?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
    logs?: BookingLogUncheckedUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingCreateManyInput = {
    id?: string
    userId: string
    clientId: string
    branchId?: string | null
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type BookingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type BookingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutReviewsInput
    user?: UserCreateNestedOneWithoutReviewsInput
    booking?: BookingCreateNestedOneWithoutReviewInput
    branch?: BranchCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    clientId?: string | null
    userId?: string | null
    bookingId?: string | null
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutReviewsNestedInput
    user?: UserUpdateOneWithoutReviewsNestedInput
    booking?: BookingUpdateOneWithoutReviewNestedInput
    branch?: BranchUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating: number
    comment?: string | null
    clientId?: string | null
    userId?: string | null
    bookingId?: string | null
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterAvailabilityCreateInput = {
    id?: string
    availability: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutMasterAvailabilityInput
  }

  export type MasterAvailabilityUncheckedCreateInput = {
    id?: string
    userId: string
    availability: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterAvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMasterAvailabilityNestedInput
  }

  export type MasterAvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterAvailabilityCreateManyInput = {
    id?: string
    userId: string
    availability: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterAvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterAvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingLogCreateInput = {
    id?: string
    action: string
    timestamp?: Date | string
    booking: BookingCreateNestedOneWithoutLogsInput
    user: UserCreateNestedOneWithoutBookingLogsInput
  }

  export type BookingLogUncheckedCreateInput = {
    id?: string
    bookingId: string
    userId: string
    action: string
    timestamp?: Date | string
  }

  export type BookingLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutLogsNestedInput
    user?: UserUpdateOneRequiredWithoutBookingLogsNestedInput
  }

  export type BookingLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingLogCreateManyInput = {
    id?: string
    bookingId: string
    userId: string
    action: string
    timestamp?: Date | string
  }

  export type BookingLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceMasterCreateInput = {
    service: ServiceCreateNestedOneWithoutMastersInput
    master: UserCreateNestedOneWithoutServiceMastersInput
  }

  export type ServiceMasterUncheckedCreateInput = {
    serviceId: string
    masterId: string
  }

  export type ServiceMasterUpdateInput = {
    service?: ServiceUpdateOneRequiredWithoutMastersNestedInput
    master?: UserUpdateOneRequiredWithoutServiceMastersNestedInput
  }

  export type ServiceMasterUncheckedUpdateInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
    masterId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceMasterCreateManyInput = {
    serviceId: string
    masterId: string
  }

  export type ServiceMasterUpdateManyMutationInput = {

  }

  export type ServiceMasterUncheckedUpdateManyInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
    masterId?: StringFieldUpdateOperationsInput | string
  }

  export type BookingMessageCreateInput = {
    id?: string
    chatId: string
    messageId: number
    createdAt?: Date | string
    booking: BookingCreateNestedOneWithoutMessagesInput
  }

  export type BookingMessageUncheckedCreateInput = {
    id?: string
    bookingId: string
    chatId: string
    messageId: number
    createdAt?: Date | string
  }

  export type BookingMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type BookingMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingMessageCreateManyInput = {
    id?: string
    bookingId: string
    chatId: string
    messageId: number
    createdAt?: Date | string
  }

  export type BookingMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type ServiceListRelationFilter = {
    every?: ServiceWhereInput
    some?: ServiceWhereInput
    none?: ServiceWhereInput
  }

  export type BookingListRelationFilter = {
    every?: BookingWhereInput
    some?: BookingWhereInput
    none?: BookingWhereInput
  }

  export type ServiceMasterListRelationFilter = {
    every?: ServiceMasterWhereInput
    some?: ServiceMasterWhereInput
    none?: ServiceMasterWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type MasterAvailabilityListRelationFilter = {
    every?: MasterAvailabilityWhereInput
    some?: MasterAvailabilityWhereInput
    none?: MasterAvailabilityWhereInput
  }

  export type BookingLogListRelationFilter = {
    every?: BookingLogWhereInput
    some?: BookingLogWhereInput
    none?: BookingLogWhereInput
  }

  export type BranchNullableRelationFilter = {
    is?: BranchWhereInput | null
    isNot?: BranchWhereInput | null
  }

  export type ClientListRelationFilter = {
    every?: ClientWhereInput
    some?: ClientWhereInput
    none?: ClientWhereInput
  }

  export type BranchListRelationFilter = {
    every?: BranchWhereInput
    some?: BranchWhereInput
    none?: BranchWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceMasterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MasterAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    chatId?: SortOrder
    nickName?: SortOrder
    branchId?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    chatId?: SortOrder
    nickName?: SortOrder
    branchId?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    image?: SortOrder
    description?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    chatId?: SortOrder
    nickName?: SortOrder
    branchId?: SortOrder
    resetToken?: SortOrder
    resetTokenExpiry?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BranchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    socialMedia?: SortOrder
    city?: SortOrder
    image?: SortOrder
    status?: SortOrder
    superAdminId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BranchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    socialMedia?: SortOrder
    city?: SortOrder
    image?: SortOrder
    status?: SortOrder
    superAdminId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type BranchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    phoneNumber?: SortOrder
    description?: SortOrder
    socialMedia?: SortOrder
    city?: SortOrder
    image?: SortOrder
    status?: SortOrder
    superAdminId?: SortOrder
    adminId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    currency?: SortOrder
    categoryId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ServiceAvgOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    currency?: SortOrder
    categoryId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    price?: SortOrder
    userId?: SortOrder
    currency?: SortOrder
    categoryId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ServiceSumOrderByAggregateInput = {
    duration?: SortOrder
    price?: SortOrder
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickName?: SortOrder
    phoneNumber?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickName?: SortOrder
    phoneNumber?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    nickName?: SortOrder
    phoneNumber?: SortOrder
    chatId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deletedAt?: SortOrder
  }

  export type ClientRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type BookingMessageListRelationFilter = {
    every?: BookingMessageWhereInput
    some?: BookingMessageWhereInput
    none?: BookingMessageWhereInput
  }

  export type BookingMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BookingCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    branchId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type BookingMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    branchId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type BookingMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    clientId?: SortOrder
    branchId?: SortOrder
    date?: SortOrder
    time?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
  }

  export type ClientNullableRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type BookingNullableRelationFilter = {
    is?: BookingWhereInput | null
    isNot?: BookingWhereInput | null
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    clientId?: SortOrder
    userId?: SortOrder
    bookingId?: SortOrder
    branchId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type MasterAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MasterAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    availability?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BookingRelationFilter = {
    is?: BookingWhereInput
    isNot?: BookingWhereInput
  }

  export type BookingLogCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type BookingLogMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type BookingLogMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    timestamp?: SortOrder
  }

  export type ServiceRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type ServiceMasterServiceIdMasterIdCompoundUniqueInput = {
    serviceId: string
    masterId: string
  }

  export type ServiceMasterCountOrderByAggregateInput = {
    serviceId?: SortOrder
    masterId?: SortOrder
  }

  export type ServiceMasterMaxOrderByAggregateInput = {
    serviceId?: SortOrder
    masterId?: SortOrder
  }

  export type ServiceMasterMinOrderByAggregateInput = {
    serviceId?: SortOrder
    masterId?: SortOrder
  }

  export type BookingMessageCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMessageAvgOrderByAggregateInput = {
    messageId?: SortOrder
  }

  export type BookingMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMessageMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    chatId?: SortOrder
    messageId?: SortOrder
    createdAt?: SortOrder
  }

  export type BookingMessageSumOrderByAggregateInput = {
    messageId?: SortOrder
  }

  export type ServiceCreateNestedManyWithoutUserInput = {
    create?: XOR<ServiceCreateWithoutUserInput, ServiceUncheckedCreateWithoutUserInput> | ServiceCreateWithoutUserInput[] | ServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutUserInput | ServiceCreateOrConnectWithoutUserInput[]
    createMany?: ServiceCreateManyUserInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ServiceMasterCreateNestedManyWithoutMasterInput = {
    create?: XOR<ServiceMasterCreateWithoutMasterInput, ServiceMasterUncheckedCreateWithoutMasterInput> | ServiceMasterCreateWithoutMasterInput[] | ServiceMasterUncheckedCreateWithoutMasterInput[]
    connectOrCreate?: ServiceMasterCreateOrConnectWithoutMasterInput | ServiceMasterCreateOrConnectWithoutMasterInput[]
    createMany?: ServiceMasterCreateManyMasterInputEnvelope
    connect?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CategoryCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MasterAvailabilityCreateNestedManyWithoutUserInput = {
    create?: XOR<MasterAvailabilityCreateWithoutUserInput, MasterAvailabilityUncheckedCreateWithoutUserInput> | MasterAvailabilityCreateWithoutUserInput[] | MasterAvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MasterAvailabilityCreateOrConnectWithoutUserInput | MasterAvailabilityCreateOrConnectWithoutUserInput[]
    createMany?: MasterAvailabilityCreateManyUserInputEnvelope
    connect?: MasterAvailabilityWhereUniqueInput | MasterAvailabilityWhereUniqueInput[]
  }

  export type BookingLogCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingLogCreateWithoutUserInput, BookingLogUncheckedCreateWithoutUserInput> | BookingLogCreateWithoutUserInput[] | BookingLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingLogCreateOrConnectWithoutUserInput | BookingLogCreateOrConnectWithoutUserInput[]
    createMany?: BookingLogCreateManyUserInputEnvelope
    connect?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
  }

  export type BranchCreateNestedOneWithoutUsersInput = {
    create?: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutUsersInput
    connect?: BranchWhereUniqueInput
  }

  export type ClientCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type BranchCreateNestedManyWithoutAdminInput = {
    create?: XOR<BranchCreateWithoutAdminInput, BranchUncheckedCreateWithoutAdminInput> | BranchCreateWithoutAdminInput[] | BranchUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutAdminInput | BranchCreateOrConnectWithoutAdminInput[]
    createMany?: BranchCreateManyAdminInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type BranchCreateNestedManyWithoutSuperAdminInput = {
    create?: XOR<BranchCreateWithoutSuperAdminInput, BranchUncheckedCreateWithoutSuperAdminInput> | BranchCreateWithoutSuperAdminInput[] | BranchUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutSuperAdminInput | BranchCreateOrConnectWithoutSuperAdminInput[]
    createMany?: BranchCreateManySuperAdminInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ServiceCreateWithoutUserInput, ServiceUncheckedCreateWithoutUserInput> | ServiceCreateWithoutUserInput[] | ServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutUserInput | ServiceCreateOrConnectWithoutUserInput[]
    createMany?: ServiceCreateManyUserInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ServiceMasterUncheckedCreateNestedManyWithoutMasterInput = {
    create?: XOR<ServiceMasterCreateWithoutMasterInput, ServiceMasterUncheckedCreateWithoutMasterInput> | ServiceMasterCreateWithoutMasterInput[] | ServiceMasterUncheckedCreateWithoutMasterInput[]
    connectOrCreate?: ServiceMasterCreateOrConnectWithoutMasterInput | ServiceMasterCreateOrConnectWithoutMasterInput[]
    createMany?: ServiceMasterCreateManyMasterInputEnvelope
    connect?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type MasterAvailabilityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MasterAvailabilityCreateWithoutUserInput, MasterAvailabilityUncheckedCreateWithoutUserInput> | MasterAvailabilityCreateWithoutUserInput[] | MasterAvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MasterAvailabilityCreateOrConnectWithoutUserInput | MasterAvailabilityCreateOrConnectWithoutUserInput[]
    createMany?: MasterAvailabilityCreateManyUserInputEnvelope
    connect?: MasterAvailabilityWhereUniqueInput | MasterAvailabilityWhereUniqueInput[]
  }

  export type BookingLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<BookingLogCreateWithoutUserInput, BookingLogUncheckedCreateWithoutUserInput> | BookingLogCreateWithoutUserInput[] | BookingLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingLogCreateOrConnectWithoutUserInput | BookingLogCreateOrConnectWithoutUserInput[]
    createMany?: BookingLogCreateManyUserInputEnvelope
    connect?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
  }

  export type ClientUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<BranchCreateWithoutAdminInput, BranchUncheckedCreateWithoutAdminInput> | BranchCreateWithoutAdminInput[] | BranchUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutAdminInput | BranchCreateOrConnectWithoutAdminInput[]
    createMany?: BranchCreateManyAdminInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type BranchUncheckedCreateNestedManyWithoutSuperAdminInput = {
    create?: XOR<BranchCreateWithoutSuperAdminInput, BranchUncheckedCreateWithoutSuperAdminInput> | BranchCreateWithoutSuperAdminInput[] | BranchUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutSuperAdminInput | BranchCreateOrConnectWithoutSuperAdminInput[]
    createMany?: BranchCreateManySuperAdminInputEnvelope
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ServiceUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServiceCreateWithoutUserInput, ServiceUncheckedCreateWithoutUserInput> | ServiceCreateWithoutUserInput[] | ServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutUserInput | ServiceCreateOrConnectWithoutUserInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutUserInput | ServiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServiceCreateManyUserInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutUserInput | ServiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutUserInput | ServiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ServiceMasterUpdateManyWithoutMasterNestedInput = {
    create?: XOR<ServiceMasterCreateWithoutMasterInput, ServiceMasterUncheckedCreateWithoutMasterInput> | ServiceMasterCreateWithoutMasterInput[] | ServiceMasterUncheckedCreateWithoutMasterInput[]
    connectOrCreate?: ServiceMasterCreateOrConnectWithoutMasterInput | ServiceMasterCreateOrConnectWithoutMasterInput[]
    upsert?: ServiceMasterUpsertWithWhereUniqueWithoutMasterInput | ServiceMasterUpsertWithWhereUniqueWithoutMasterInput[]
    createMany?: ServiceMasterCreateManyMasterInputEnvelope
    set?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    disconnect?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    delete?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    connect?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    update?: ServiceMasterUpdateWithWhereUniqueWithoutMasterInput | ServiceMasterUpdateWithWhereUniqueWithoutMasterInput[]
    updateMany?: ServiceMasterUpdateManyWithWhereWithoutMasterInput | ServiceMasterUpdateManyWithWhereWithoutMasterInput[]
    deleteMany?: ServiceMasterScalarWhereInput | ServiceMasterScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CategoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MasterAvailabilityUpdateManyWithoutUserNestedInput = {
    create?: XOR<MasterAvailabilityCreateWithoutUserInput, MasterAvailabilityUncheckedCreateWithoutUserInput> | MasterAvailabilityCreateWithoutUserInput[] | MasterAvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MasterAvailabilityCreateOrConnectWithoutUserInput | MasterAvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: MasterAvailabilityUpsertWithWhereUniqueWithoutUserInput | MasterAvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MasterAvailabilityCreateManyUserInputEnvelope
    set?: MasterAvailabilityWhereUniqueInput | MasterAvailabilityWhereUniqueInput[]
    disconnect?: MasterAvailabilityWhereUniqueInput | MasterAvailabilityWhereUniqueInput[]
    delete?: MasterAvailabilityWhereUniqueInput | MasterAvailabilityWhereUniqueInput[]
    connect?: MasterAvailabilityWhereUniqueInput | MasterAvailabilityWhereUniqueInput[]
    update?: MasterAvailabilityUpdateWithWhereUniqueWithoutUserInput | MasterAvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MasterAvailabilityUpdateManyWithWhereWithoutUserInput | MasterAvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MasterAvailabilityScalarWhereInput | MasterAvailabilityScalarWhereInput[]
  }

  export type BookingLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingLogCreateWithoutUserInput, BookingLogUncheckedCreateWithoutUserInput> | BookingLogCreateWithoutUserInput[] | BookingLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingLogCreateOrConnectWithoutUserInput | BookingLogCreateOrConnectWithoutUserInput[]
    upsert?: BookingLogUpsertWithWhereUniqueWithoutUserInput | BookingLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingLogCreateManyUserInputEnvelope
    set?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    disconnect?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    delete?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    connect?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    update?: BookingLogUpdateWithWhereUniqueWithoutUserInput | BookingLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingLogUpdateManyWithWhereWithoutUserInput | BookingLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingLogScalarWhereInput | BookingLogScalarWhereInput[]
  }

  export type BranchUpdateOneWithoutUsersNestedInput = {
    create?: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    connectOrCreate?: BranchCreateOrConnectWithoutUsersInput
    upsert?: BranchUpsertWithoutUsersInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutUsersInput, BranchUpdateWithoutUsersInput>, BranchUncheckedUpdateWithoutUsersInput>
  }

  export type ClientUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUserInput | ClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUserInput | ClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUserInput | ClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type BranchUpdateManyWithoutAdminNestedInput = {
    create?: XOR<BranchCreateWithoutAdminInput, BranchUncheckedCreateWithoutAdminInput> | BranchCreateWithoutAdminInput[] | BranchUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutAdminInput | BranchCreateOrConnectWithoutAdminInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutAdminInput | BranchUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: BranchCreateManyAdminInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutAdminInput | BranchUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutAdminInput | BranchUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type BranchUpdateManyWithoutSuperAdminNestedInput = {
    create?: XOR<BranchCreateWithoutSuperAdminInput, BranchUncheckedCreateWithoutSuperAdminInput> | BranchCreateWithoutSuperAdminInput[] | BranchUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutSuperAdminInput | BranchCreateOrConnectWithoutSuperAdminInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutSuperAdminInput | BranchUpsertWithWhereUniqueWithoutSuperAdminInput[]
    createMany?: BranchCreateManySuperAdminInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutSuperAdminInput | BranchUpdateWithWhereUniqueWithoutSuperAdminInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutSuperAdminInput | BranchUpdateManyWithWhereWithoutSuperAdminInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ServiceCreateWithoutUserInput, ServiceUncheckedCreateWithoutUserInput> | ServiceCreateWithoutUserInput[] | ServiceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutUserInput | ServiceCreateOrConnectWithoutUserInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutUserInput | ServiceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ServiceCreateManyUserInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutUserInput | ServiceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutUserInput | ServiceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput> | BookingCreateWithoutUserInput[] | BookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutUserInput | BookingCreateOrConnectWithoutUserInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutUserInput | BookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingCreateManyUserInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutUserInput | BookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutUserInput | BookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ServiceMasterUncheckedUpdateManyWithoutMasterNestedInput = {
    create?: XOR<ServiceMasterCreateWithoutMasterInput, ServiceMasterUncheckedCreateWithoutMasterInput> | ServiceMasterCreateWithoutMasterInput[] | ServiceMasterUncheckedCreateWithoutMasterInput[]
    connectOrCreate?: ServiceMasterCreateOrConnectWithoutMasterInput | ServiceMasterCreateOrConnectWithoutMasterInput[]
    upsert?: ServiceMasterUpsertWithWhereUniqueWithoutMasterInput | ServiceMasterUpsertWithWhereUniqueWithoutMasterInput[]
    createMany?: ServiceMasterCreateManyMasterInputEnvelope
    set?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    disconnect?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    delete?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    connect?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    update?: ServiceMasterUpdateWithWhereUniqueWithoutMasterInput | ServiceMasterUpdateWithWhereUniqueWithoutMasterInput[]
    updateMany?: ServiceMasterUpdateManyWithWhereWithoutMasterInput | ServiceMasterUpdateManyWithWhereWithoutMasterInput[]
    deleteMany?: ServiceMasterScalarWhereInput | ServiceMasterScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput> | CategoryCreateWithoutUserInput[] | CategoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutUserInput | CategoryCreateOrConnectWithoutUserInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutUserInput | CategoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CategoryCreateManyUserInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutUserInput | CategoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutUserInput | CategoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type MasterAvailabilityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MasterAvailabilityCreateWithoutUserInput, MasterAvailabilityUncheckedCreateWithoutUserInput> | MasterAvailabilityCreateWithoutUserInput[] | MasterAvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MasterAvailabilityCreateOrConnectWithoutUserInput | MasterAvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: MasterAvailabilityUpsertWithWhereUniqueWithoutUserInput | MasterAvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MasterAvailabilityCreateManyUserInputEnvelope
    set?: MasterAvailabilityWhereUniqueInput | MasterAvailabilityWhereUniqueInput[]
    disconnect?: MasterAvailabilityWhereUniqueInput | MasterAvailabilityWhereUniqueInput[]
    delete?: MasterAvailabilityWhereUniqueInput | MasterAvailabilityWhereUniqueInput[]
    connect?: MasterAvailabilityWhereUniqueInput | MasterAvailabilityWhereUniqueInput[]
    update?: MasterAvailabilityUpdateWithWhereUniqueWithoutUserInput | MasterAvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MasterAvailabilityUpdateManyWithWhereWithoutUserInput | MasterAvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MasterAvailabilityScalarWhereInput | MasterAvailabilityScalarWhereInput[]
  }

  export type BookingLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<BookingLogCreateWithoutUserInput, BookingLogUncheckedCreateWithoutUserInput> | BookingLogCreateWithoutUserInput[] | BookingLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: BookingLogCreateOrConnectWithoutUserInput | BookingLogCreateOrConnectWithoutUserInput[]
    upsert?: BookingLogUpsertWithWhereUniqueWithoutUserInput | BookingLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: BookingLogCreateManyUserInputEnvelope
    set?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    disconnect?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    delete?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    connect?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    update?: BookingLogUpdateWithWhereUniqueWithoutUserInput | BookingLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: BookingLogUpdateManyWithWhereWithoutUserInput | BookingLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: BookingLogScalarWhereInput | BookingLogScalarWhereInput[]
  }

  export type ClientUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput> | ClientCreateWithoutUserInput[] | ClientUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ClientCreateOrConnectWithoutUserInput | ClientCreateOrConnectWithoutUserInput[]
    upsert?: ClientUpsertWithWhereUniqueWithoutUserInput | ClientUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ClientCreateManyUserInputEnvelope
    set?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    disconnect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    delete?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    connect?: ClientWhereUniqueInput | ClientWhereUniqueInput[]
    update?: ClientUpdateWithWhereUniqueWithoutUserInput | ClientUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ClientUpdateManyWithWhereWithoutUserInput | ClientUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ClientScalarWhereInput | ClientScalarWhereInput[]
  }

  export type BranchUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<BranchCreateWithoutAdminInput, BranchUncheckedCreateWithoutAdminInput> | BranchCreateWithoutAdminInput[] | BranchUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutAdminInput | BranchCreateOrConnectWithoutAdminInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutAdminInput | BranchUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: BranchCreateManyAdminInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutAdminInput | BranchUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutAdminInput | BranchUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type BranchUncheckedUpdateManyWithoutSuperAdminNestedInput = {
    create?: XOR<BranchCreateWithoutSuperAdminInput, BranchUncheckedCreateWithoutSuperAdminInput> | BranchCreateWithoutSuperAdminInput[] | BranchUncheckedCreateWithoutSuperAdminInput[]
    connectOrCreate?: BranchCreateOrConnectWithoutSuperAdminInput | BranchCreateOrConnectWithoutSuperAdminInput[]
    upsert?: BranchUpsertWithWhereUniqueWithoutSuperAdminInput | BranchUpsertWithWhereUniqueWithoutSuperAdminInput[]
    createMany?: BranchCreateManySuperAdminInputEnvelope
    set?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    disconnect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    delete?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    connect?: BranchWhereUniqueInput | BranchWhereUniqueInput[]
    update?: BranchUpdateWithWhereUniqueWithoutSuperAdminInput | BranchUpdateWithWhereUniqueWithoutSuperAdminInput[]
    updateMany?: BranchUpdateManyWithWhereWithoutSuperAdminInput | BranchUpdateManyWithWhereWithoutSuperAdminInput[]
    deleteMany?: BranchScalarWhereInput | BranchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedBranchesInput = {
    create?: XOR<UserCreateWithoutCreatedBranchesInput, UserUncheckedCreateWithoutCreatedBranchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedBranchesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutManagedBranchesInput = {
    create?: XOR<UserCreateWithoutManagedBranchesInput, UserUncheckedCreateWithoutManagedBranchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedBranchesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutBranchInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ServiceCreateNestedManyWithoutBranchInput = {
    create?: XOR<ServiceCreateWithoutBranchInput, ServiceUncheckedCreateWithoutBranchInput> | ServiceCreateWithoutBranchInput[] | ServiceUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBranchInput | ServiceCreateOrConnectWithoutBranchInput[]
    createMany?: ServiceCreateManyBranchInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutBranchInput = {
    create?: XOR<BookingCreateWithoutBranchInput, BookingUncheckedCreateWithoutBranchInput> | BookingCreateWithoutBranchInput[] | BookingUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBranchInput | BookingCreateOrConnectWithoutBranchInput[]
    createMany?: BookingCreateManyBranchInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutBranchInput = {
    create?: XOR<ReviewCreateWithoutBranchInput, ReviewUncheckedCreateWithoutBranchInput> | ReviewCreateWithoutBranchInput[] | ReviewUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBranchInput | ReviewCreateOrConnectWithoutBranchInput[]
    createMany?: ReviewCreateManyBranchInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<ServiceCreateWithoutBranchInput, ServiceUncheckedCreateWithoutBranchInput> | ServiceCreateWithoutBranchInput[] | ServiceUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBranchInput | ServiceCreateOrConnectWithoutBranchInput[]
    createMany?: ServiceCreateManyBranchInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<BookingCreateWithoutBranchInput, BookingUncheckedCreateWithoutBranchInput> | BookingCreateWithoutBranchInput[] | BookingUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBranchInput | BookingCreateOrConnectWithoutBranchInput[]
    createMany?: BookingCreateManyBranchInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutBranchInput = {
    create?: XOR<ReviewCreateWithoutBranchInput, ReviewUncheckedCreateWithoutBranchInput> | ReviewCreateWithoutBranchInput[] | ReviewUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBranchInput | ReviewCreateOrConnectWithoutBranchInput[]
    createMany?: ReviewCreateManyBranchInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedBranchesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedBranchesInput, UserUncheckedCreateWithoutCreatedBranchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedBranchesInput
    upsert?: UserUpsertWithoutCreatedBranchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedBranchesInput, UserUpdateWithoutCreatedBranchesInput>, UserUncheckedUpdateWithoutCreatedBranchesInput>
  }

  export type UserUpdateOneRequiredWithoutManagedBranchesNestedInput = {
    create?: XOR<UserCreateWithoutManagedBranchesInput, UserUncheckedCreateWithoutManagedBranchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutManagedBranchesInput
    upsert?: UserUpsertWithoutManagedBranchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutManagedBranchesInput, UserUpdateWithoutManagedBranchesInput>, UserUncheckedUpdateWithoutManagedBranchesInput>
  }

  export type UserUpdateManyWithoutBranchNestedInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchInput | UserUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchInput | UserUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchInput | UserUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ServiceUpdateManyWithoutBranchNestedInput = {
    create?: XOR<ServiceCreateWithoutBranchInput, ServiceUncheckedCreateWithoutBranchInput> | ServiceCreateWithoutBranchInput[] | ServiceUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBranchInput | ServiceCreateOrConnectWithoutBranchInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutBranchInput | ServiceUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: ServiceCreateManyBranchInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutBranchInput | ServiceUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutBranchInput | ServiceUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutBranchNestedInput = {
    create?: XOR<BookingCreateWithoutBranchInput, BookingUncheckedCreateWithoutBranchInput> | BookingCreateWithoutBranchInput[] | BookingUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBranchInput | BookingCreateOrConnectWithoutBranchInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBranchInput | BookingUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: BookingCreateManyBranchInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBranchInput | BookingUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBranchInput | BookingUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutBranchNestedInput = {
    create?: XOR<ReviewCreateWithoutBranchInput, ReviewUncheckedCreateWithoutBranchInput> | ReviewCreateWithoutBranchInput[] | ReviewUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBranchInput | ReviewCreateOrConnectWithoutBranchInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBranchInput | ReviewUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: ReviewCreateManyBranchInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBranchInput | ReviewUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBranchInput | ReviewUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput> | UserCreateWithoutBranchInput[] | UserUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBranchInput | UserCreateOrConnectWithoutBranchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBranchInput | UserUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: UserCreateManyBranchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBranchInput | UserUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBranchInput | UserUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<ServiceCreateWithoutBranchInput, ServiceUncheckedCreateWithoutBranchInput> | ServiceCreateWithoutBranchInput[] | ServiceUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBranchInput | ServiceCreateOrConnectWithoutBranchInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutBranchInput | ServiceUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: ServiceCreateManyBranchInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutBranchInput | ServiceUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutBranchInput | ServiceUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<BookingCreateWithoutBranchInput, BookingUncheckedCreateWithoutBranchInput> | BookingCreateWithoutBranchInput[] | BookingUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutBranchInput | BookingCreateOrConnectWithoutBranchInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutBranchInput | BookingUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: BookingCreateManyBranchInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutBranchInput | BookingUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutBranchInput | BookingUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutBranchNestedInput = {
    create?: XOR<ReviewCreateWithoutBranchInput, ReviewUncheckedCreateWithoutBranchInput> | ReviewCreateWithoutBranchInput[] | ReviewUncheckedCreateWithoutBranchInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBranchInput | ReviewCreateOrConnectWithoutBranchInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBranchInput | ReviewUpsertWithWhereUniqueWithoutBranchInput[]
    createMany?: ReviewCreateManyBranchInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBranchInput | ReviewUpdateWithWhereUniqueWithoutBranchInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBranchInput | ReviewUpdateManyWithWhereWithoutBranchInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ServiceCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCategoriesInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ServiceUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type UserUpdateOneWithoutCategoriesNestedInput = {
    create?: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCategoriesInput
    upsert?: UserUpsertWithoutCategoriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCategoriesInput, UserUpdateWithoutCategoriesInput>, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput> | ServiceCreateWithoutCategoryInput[] | ServiceUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutCategoryInput | ServiceCreateOrConnectWithoutCategoryInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutCategoryInput | ServiceUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ServiceCreateManyCategoryInputEnvelope
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutCategoryInput | ServiceUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutCategoryInput | ServiceUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutServicesInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedManyWithoutServicesInput = {
    create?: XOR<BookingCreateWithoutServicesInput, BookingUncheckedCreateWithoutServicesInput> | BookingCreateWithoutServicesInput[] | BookingUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServicesInput | BookingCreateOrConnectWithoutServicesInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutServicesInput = {
    create?: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput
    connect?: CategoryWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutServicesInput = {
    create?: XOR<BranchCreateWithoutServicesInput, BranchUncheckedCreateWithoutServicesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutServicesInput
    connect?: BranchWhereUniqueInput
  }

  export type ServiceMasterCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceMasterCreateWithoutServiceInput, ServiceMasterUncheckedCreateWithoutServiceInput> | ServiceMasterCreateWithoutServiceInput[] | ServiceMasterUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceMasterCreateOrConnectWithoutServiceInput | ServiceMasterCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceMasterCreateManyServiceInputEnvelope
    connect?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutServicesInput = {
    create?: XOR<BookingCreateWithoutServicesInput, BookingUncheckedCreateWithoutServicesInput> | BookingCreateWithoutServicesInput[] | BookingUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServicesInput | BookingCreateOrConnectWithoutServicesInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ServiceMasterUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<ServiceMasterCreateWithoutServiceInput, ServiceMasterUncheckedCreateWithoutServiceInput> | ServiceMasterCreateWithoutServiceInput[] | ServiceMasterUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceMasterCreateOrConnectWithoutServiceInput | ServiceMasterCreateOrConnectWithoutServiceInput[]
    createMany?: ServiceMasterCreateManyServiceInputEnvelope
    connect?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    connectOrCreate?: UserCreateOrConnectWithoutServicesInput
    upsert?: UserUpsertWithoutServicesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServicesInput, UserUpdateWithoutServicesInput>, UserUncheckedUpdateWithoutServicesInput>
  }

  export type BookingUpdateManyWithoutServicesNestedInput = {
    create?: XOR<BookingCreateWithoutServicesInput, BookingUncheckedCreateWithoutServicesInput> | BookingCreateWithoutServicesInput[] | BookingUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServicesInput | BookingCreateOrConnectWithoutServicesInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServicesInput | BookingUpsertWithWhereUniqueWithoutServicesInput[]
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServicesInput | BookingUpdateWithWhereUniqueWithoutServicesInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServicesInput | BookingUpdateManyWithWhereWithoutServicesInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type CategoryUpdateOneRequiredWithoutServicesNestedInput = {
    create?: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutServicesInput
    upsert?: CategoryUpsertWithoutServicesInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutServicesInput, CategoryUpdateWithoutServicesInput>, CategoryUncheckedUpdateWithoutServicesInput>
  }

  export type BranchUpdateOneWithoutServicesNestedInput = {
    create?: XOR<BranchCreateWithoutServicesInput, BranchUncheckedCreateWithoutServicesInput>
    connectOrCreate?: BranchCreateOrConnectWithoutServicesInput
    upsert?: BranchUpsertWithoutServicesInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutServicesInput, BranchUpdateWithoutServicesInput>, BranchUncheckedUpdateWithoutServicesInput>
  }

  export type ServiceMasterUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceMasterCreateWithoutServiceInput, ServiceMasterUncheckedCreateWithoutServiceInput> | ServiceMasterCreateWithoutServiceInput[] | ServiceMasterUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceMasterCreateOrConnectWithoutServiceInput | ServiceMasterCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceMasterUpsertWithWhereUniqueWithoutServiceInput | ServiceMasterUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceMasterCreateManyServiceInputEnvelope
    set?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    disconnect?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    delete?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    connect?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    update?: ServiceMasterUpdateWithWhereUniqueWithoutServiceInput | ServiceMasterUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceMasterUpdateManyWithWhereWithoutServiceInput | ServiceMasterUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceMasterScalarWhereInput | ServiceMasterScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutServicesNestedInput = {
    create?: XOR<BookingCreateWithoutServicesInput, BookingUncheckedCreateWithoutServicesInput> | BookingCreateWithoutServicesInput[] | BookingUncheckedCreateWithoutServicesInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutServicesInput | BookingCreateOrConnectWithoutServicesInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutServicesInput | BookingUpsertWithWhereUniqueWithoutServicesInput[]
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutServicesInput | BookingUpdateWithWhereUniqueWithoutServicesInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutServicesInput | BookingUpdateManyWithWhereWithoutServicesInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ServiceMasterUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<ServiceMasterCreateWithoutServiceInput, ServiceMasterUncheckedCreateWithoutServiceInput> | ServiceMasterCreateWithoutServiceInput[] | ServiceMasterUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: ServiceMasterCreateOrConnectWithoutServiceInput | ServiceMasterCreateOrConnectWithoutServiceInput[]
    upsert?: ServiceMasterUpsertWithWhereUniqueWithoutServiceInput | ServiceMasterUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: ServiceMasterCreateManyServiceInputEnvelope
    set?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    disconnect?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    delete?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    connect?: ServiceMasterWhereUniqueInput | ServiceMasterWhereUniqueInput[]
    update?: ServiceMasterUpdateWithWhereUniqueWithoutServiceInput | ServiceMasterUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: ServiceMasterUpdateManyWithWhereWithoutServiceInput | ServiceMasterUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: ServiceMasterScalarWhereInput | ServiceMasterScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutClientsInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    connect?: UserWhereUniqueInput
  }

  export type ReviewCreateNestedManyWithoutClientInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingCreateNestedManyWithoutClientInput = {
    create?: XOR<BookingCreateWithoutClientInput, BookingUncheckedCreateWithoutClientInput> | BookingCreateWithoutClientInput[] | BookingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClientInput | BookingCreateOrConnectWithoutClientInput[]
    createMany?: BookingCreateManyClientInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<BookingCreateWithoutClientInput, BookingUncheckedCreateWithoutClientInput> | BookingCreateWithoutClientInput[] | BookingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClientInput | BookingCreateOrConnectWithoutClientInput[]
    createMany?: BookingCreateManyClientInputEnvelope
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutClientsNestedInput = {
    create?: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    connectOrCreate?: UserCreateOrConnectWithoutClientsInput
    upsert?: UserUpsertWithoutClientsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutClientsInput, UserUpdateWithoutClientsInput>, UserUncheckedUpdateWithoutClientsInput>
  }

  export type ReviewUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutClientInput | ReviewUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutClientInput | ReviewUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutClientInput | ReviewUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUpdateManyWithoutClientNestedInput = {
    create?: XOR<BookingCreateWithoutClientInput, BookingUncheckedCreateWithoutClientInput> | BookingCreateWithoutClientInput[] | BookingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClientInput | BookingCreateOrConnectWithoutClientInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutClientInput | BookingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BookingCreateManyClientInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutClientInput | BookingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutClientInput | BookingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput> | ReviewCreateWithoutClientInput[] | ReviewUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutClientInput | ReviewCreateOrConnectWithoutClientInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutClientInput | ReviewUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReviewCreateManyClientInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutClientInput | ReviewUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutClientInput | ReviewUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<BookingCreateWithoutClientInput, BookingUncheckedCreateWithoutClientInput> | BookingCreateWithoutClientInput[] | BookingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: BookingCreateOrConnectWithoutClientInput | BookingCreateOrConnectWithoutClientInput[]
    upsert?: BookingUpsertWithWhereUniqueWithoutClientInput | BookingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: BookingCreateManyClientInputEnvelope
    set?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    disconnect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    delete?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    connect?: BookingWhereUniqueInput | BookingWhereUniqueInput[]
    update?: BookingUpdateWithWhereUniqueWithoutClientInput | BookingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: BookingUpdateManyWithWhereWithoutClientInput | BookingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: BookingScalarWhereInput | BookingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBookingsInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceCreateNestedManyWithoutBookingsInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput> | ServiceCreateWithoutBookingsInput[] | ServiceUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput | ServiceCreateOrConnectWithoutBookingsInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput> | ReviewCreateWithoutBookingInput[] | ReviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput | ReviewCreateOrConnectWithoutBookingInput[]
    createMany?: ReviewCreateManyBookingInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ClientCreateNestedOneWithoutBookingsInput = {
    create?: XOR<ClientCreateWithoutBookingsInput, ClientUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBookingsInput
    connect?: ClientWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutBookingsInput = {
    create?: XOR<BranchCreateWithoutBookingsInput, BranchUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutBookingsInput
    connect?: BranchWhereUniqueInput
  }

  export type BookingLogCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingLogCreateWithoutBookingInput, BookingLogUncheckedCreateWithoutBookingInput> | BookingLogCreateWithoutBookingInput[] | BookingLogUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingLogCreateOrConnectWithoutBookingInput | BookingLogCreateOrConnectWithoutBookingInput[]
    createMany?: BookingLogCreateManyBookingInputEnvelope
    connect?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
  }

  export type BookingMessageCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingMessageCreateWithoutBookingInput, BookingMessageUncheckedCreateWithoutBookingInput> | BookingMessageCreateWithoutBookingInput[] | BookingMessageUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingMessageCreateOrConnectWithoutBookingInput | BookingMessageCreateOrConnectWithoutBookingInput[]
    createMany?: BookingMessageCreateManyBookingInputEnvelope
    connect?: BookingMessageWhereUniqueInput | BookingMessageWhereUniqueInput[]
  }

  export type ServiceUncheckedCreateNestedManyWithoutBookingsInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput> | ServiceCreateWithoutBookingsInput[] | ServiceUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput | ServiceCreateOrConnectWithoutBookingsInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput> | ReviewCreateWithoutBookingInput[] | ReviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput | ReviewCreateOrConnectWithoutBookingInput[]
    createMany?: ReviewCreateManyBookingInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type BookingLogUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingLogCreateWithoutBookingInput, BookingLogUncheckedCreateWithoutBookingInput> | BookingLogCreateWithoutBookingInput[] | BookingLogUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingLogCreateOrConnectWithoutBookingInput | BookingLogCreateOrConnectWithoutBookingInput[]
    createMany?: BookingLogCreateManyBookingInputEnvelope
    connect?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
  }

  export type BookingMessageUncheckedCreateNestedManyWithoutBookingInput = {
    create?: XOR<BookingMessageCreateWithoutBookingInput, BookingMessageUncheckedCreateWithoutBookingInput> | BookingMessageCreateWithoutBookingInput[] | BookingMessageUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingMessageCreateOrConnectWithoutBookingInput | BookingMessageCreateOrConnectWithoutBookingInput[]
    createMany?: BookingMessageCreateManyBookingInputEnvelope
    connect?: BookingMessageWhereUniqueInput | BookingMessageWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingsInput
    upsert?: UserUpsertWithoutBookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingsInput, UserUpdateWithoutBookingsInput>, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateManyWithoutBookingsNestedInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput> | ServiceCreateWithoutBookingsInput[] | ServiceUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput | ServiceCreateOrConnectWithoutBookingsInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutBookingsInput | ServiceUpsertWithWhereUniqueWithoutBookingsInput[]
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutBookingsInput | ServiceUpdateWithWhereUniqueWithoutBookingsInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutBookingsInput | ServiceUpdateManyWithWhereWithoutBookingsInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput> | ReviewCreateWithoutBookingInput[] | ReviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput | ReviewCreateOrConnectWithoutBookingInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBookingInput | ReviewUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: ReviewCreateManyBookingInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBookingInput | ReviewUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBookingInput | ReviewUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ClientUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: XOR<ClientCreateWithoutBookingsInput, ClientUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutBookingsInput
    upsert?: ClientUpsertWithoutBookingsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutBookingsInput, ClientUpdateWithoutBookingsInput>, ClientUncheckedUpdateWithoutBookingsInput>
  }

  export type BranchUpdateOneWithoutBookingsNestedInput = {
    create?: XOR<BranchCreateWithoutBookingsInput, BranchUncheckedCreateWithoutBookingsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutBookingsInput
    upsert?: BranchUpsertWithoutBookingsInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutBookingsInput, BranchUpdateWithoutBookingsInput>, BranchUncheckedUpdateWithoutBookingsInput>
  }

  export type BookingLogUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingLogCreateWithoutBookingInput, BookingLogUncheckedCreateWithoutBookingInput> | BookingLogCreateWithoutBookingInput[] | BookingLogUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingLogCreateOrConnectWithoutBookingInput | BookingLogCreateOrConnectWithoutBookingInput[]
    upsert?: BookingLogUpsertWithWhereUniqueWithoutBookingInput | BookingLogUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingLogCreateManyBookingInputEnvelope
    set?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    disconnect?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    delete?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    connect?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    update?: BookingLogUpdateWithWhereUniqueWithoutBookingInput | BookingLogUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingLogUpdateManyWithWhereWithoutBookingInput | BookingLogUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingLogScalarWhereInput | BookingLogScalarWhereInput[]
  }

  export type BookingMessageUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingMessageCreateWithoutBookingInput, BookingMessageUncheckedCreateWithoutBookingInput> | BookingMessageCreateWithoutBookingInput[] | BookingMessageUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingMessageCreateOrConnectWithoutBookingInput | BookingMessageCreateOrConnectWithoutBookingInput[]
    upsert?: BookingMessageUpsertWithWhereUniqueWithoutBookingInput | BookingMessageUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingMessageCreateManyBookingInputEnvelope
    set?: BookingMessageWhereUniqueInput | BookingMessageWhereUniqueInput[]
    disconnect?: BookingMessageWhereUniqueInput | BookingMessageWhereUniqueInput[]
    delete?: BookingMessageWhereUniqueInput | BookingMessageWhereUniqueInput[]
    connect?: BookingMessageWhereUniqueInput | BookingMessageWhereUniqueInput[]
    update?: BookingMessageUpdateWithWhereUniqueWithoutBookingInput | BookingMessageUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingMessageUpdateManyWithWhereWithoutBookingInput | BookingMessageUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingMessageScalarWhereInput | BookingMessageScalarWhereInput[]
  }

  export type ServiceUncheckedUpdateManyWithoutBookingsNestedInput = {
    create?: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput> | ServiceCreateWithoutBookingsInput[] | ServiceUncheckedCreateWithoutBookingsInput[]
    connectOrCreate?: ServiceCreateOrConnectWithoutBookingsInput | ServiceCreateOrConnectWithoutBookingsInput[]
    upsert?: ServiceUpsertWithWhereUniqueWithoutBookingsInput | ServiceUpsertWithWhereUniqueWithoutBookingsInput[]
    set?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    disconnect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    delete?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    connect?: ServiceWhereUniqueInput | ServiceWhereUniqueInput[]
    update?: ServiceUpdateWithWhereUniqueWithoutBookingsInput | ServiceUpdateWithWhereUniqueWithoutBookingsInput[]
    updateMany?: ServiceUpdateManyWithWhereWithoutBookingsInput | ServiceUpdateManyWithWhereWithoutBookingsInput[]
    deleteMany?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput> | ReviewCreateWithoutBookingInput[] | ReviewUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutBookingInput | ReviewCreateOrConnectWithoutBookingInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutBookingInput | ReviewUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: ReviewCreateManyBookingInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutBookingInput | ReviewUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutBookingInput | ReviewUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type BookingLogUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingLogCreateWithoutBookingInput, BookingLogUncheckedCreateWithoutBookingInput> | BookingLogCreateWithoutBookingInput[] | BookingLogUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingLogCreateOrConnectWithoutBookingInput | BookingLogCreateOrConnectWithoutBookingInput[]
    upsert?: BookingLogUpsertWithWhereUniqueWithoutBookingInput | BookingLogUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingLogCreateManyBookingInputEnvelope
    set?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    disconnect?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    delete?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    connect?: BookingLogWhereUniqueInput | BookingLogWhereUniqueInput[]
    update?: BookingLogUpdateWithWhereUniqueWithoutBookingInput | BookingLogUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingLogUpdateManyWithWhereWithoutBookingInput | BookingLogUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingLogScalarWhereInput | BookingLogScalarWhereInput[]
  }

  export type BookingMessageUncheckedUpdateManyWithoutBookingNestedInput = {
    create?: XOR<BookingMessageCreateWithoutBookingInput, BookingMessageUncheckedCreateWithoutBookingInput> | BookingMessageCreateWithoutBookingInput[] | BookingMessageUncheckedCreateWithoutBookingInput[]
    connectOrCreate?: BookingMessageCreateOrConnectWithoutBookingInput | BookingMessageCreateOrConnectWithoutBookingInput[]
    upsert?: BookingMessageUpsertWithWhereUniqueWithoutBookingInput | BookingMessageUpsertWithWhereUniqueWithoutBookingInput[]
    createMany?: BookingMessageCreateManyBookingInputEnvelope
    set?: BookingMessageWhereUniqueInput | BookingMessageWhereUniqueInput[]
    disconnect?: BookingMessageWhereUniqueInput | BookingMessageWhereUniqueInput[]
    delete?: BookingMessageWhereUniqueInput | BookingMessageWhereUniqueInput[]
    connect?: BookingMessageWhereUniqueInput | BookingMessageWhereUniqueInput[]
    update?: BookingMessageUpdateWithWhereUniqueWithoutBookingInput | BookingMessageUpdateWithWhereUniqueWithoutBookingInput[]
    updateMany?: BookingMessageUpdateManyWithWhereWithoutBookingInput | BookingMessageUpdateManyWithWhereWithoutBookingInput[]
    deleteMany?: BookingMessageScalarWhereInput | BookingMessageScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ClientCreateWithoutReviewsInput, ClientUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutReviewsInput
    connect?: ClientWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingCreateNestedOneWithoutReviewInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    connect?: BookingWhereUniqueInput
  }

  export type BranchCreateNestedOneWithoutReviewsInput = {
    create?: XOR<BranchCreateWithoutReviewsInput, BranchUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutReviewsInput
    connect?: BranchWhereUniqueInput
  }

  export type ClientUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<ClientCreateWithoutReviewsInput, ClientUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutReviewsInput
    upsert?: ClientUpsertWithoutReviewsInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutReviewsInput, ClientUpdateWithoutReviewsInput>, ClientUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type BookingUpdateOneWithoutReviewNestedInput = {
    create?: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    connectOrCreate?: BookingCreateOrConnectWithoutReviewInput
    upsert?: BookingUpsertWithoutReviewInput
    disconnect?: BookingWhereInput | boolean
    delete?: BookingWhereInput | boolean
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutReviewInput, BookingUpdateWithoutReviewInput>, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type BranchUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<BranchCreateWithoutReviewsInput, BranchUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: BranchCreateOrConnectWithoutReviewsInput
    upsert?: BranchUpsertWithoutReviewsInput
    disconnect?: BranchWhereInput | boolean
    delete?: BranchWhereInput | boolean
    connect?: BranchWhereUniqueInput
    update?: XOR<XOR<BranchUpdateToOneWithWhereWithoutReviewsInput, BranchUpdateWithoutReviewsInput>, BranchUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutMasterAvailabilityInput = {
    create?: XOR<UserCreateWithoutMasterAvailabilityInput, UserUncheckedCreateWithoutMasterAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutMasterAvailabilityInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutMasterAvailabilityNestedInput = {
    create?: XOR<UserCreateWithoutMasterAvailabilityInput, UserUncheckedCreateWithoutMasterAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutMasterAvailabilityInput
    upsert?: UserUpsertWithoutMasterAvailabilityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMasterAvailabilityInput, UserUpdateWithoutMasterAvailabilityInput>, UserUncheckedUpdateWithoutMasterAvailabilityInput>
  }

  export type BookingCreateNestedOneWithoutLogsInput = {
    create?: XOR<BookingCreateWithoutLogsInput, BookingUncheckedCreateWithoutLogsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutLogsInput
    connect?: BookingWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutBookingLogsInput = {
    create?: XOR<UserCreateWithoutBookingLogsInput, UserUncheckedCreateWithoutBookingLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingLogsInput
    connect?: UserWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutLogsNestedInput = {
    create?: XOR<BookingCreateWithoutLogsInput, BookingUncheckedCreateWithoutLogsInput>
    connectOrCreate?: BookingCreateOrConnectWithoutLogsInput
    upsert?: BookingUpsertWithoutLogsInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutLogsInput, BookingUpdateWithoutLogsInput>, BookingUncheckedUpdateWithoutLogsInput>
  }

  export type UserUpdateOneRequiredWithoutBookingLogsNestedInput = {
    create?: XOR<UserCreateWithoutBookingLogsInput, UserUncheckedCreateWithoutBookingLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBookingLogsInput
    upsert?: UserUpsertWithoutBookingLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBookingLogsInput, UserUpdateWithoutBookingLogsInput>, UserUncheckedUpdateWithoutBookingLogsInput>
  }

  export type ServiceCreateNestedOneWithoutMastersInput = {
    create?: XOR<ServiceCreateWithoutMastersInput, ServiceUncheckedCreateWithoutMastersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutMastersInput
    connect?: ServiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutServiceMastersInput = {
    create?: XOR<UserCreateWithoutServiceMastersInput, UserUncheckedCreateWithoutServiceMastersInput>
    connectOrCreate?: UserCreateOrConnectWithoutServiceMastersInput
    connect?: UserWhereUniqueInput
  }

  export type ServiceUpdateOneRequiredWithoutMastersNestedInput = {
    create?: XOR<ServiceCreateWithoutMastersInput, ServiceUncheckedCreateWithoutMastersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutMastersInput
    upsert?: ServiceUpsertWithoutMastersInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutMastersInput, ServiceUpdateWithoutMastersInput>, ServiceUncheckedUpdateWithoutMastersInput>
  }

  export type UserUpdateOneRequiredWithoutServiceMastersNestedInput = {
    create?: XOR<UserCreateWithoutServiceMastersInput, UserUncheckedCreateWithoutServiceMastersInput>
    connectOrCreate?: UserCreateOrConnectWithoutServiceMastersInput
    upsert?: UserUpsertWithoutServiceMastersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutServiceMastersInput, UserUpdateWithoutServiceMastersInput>, UserUncheckedUpdateWithoutServiceMastersInput>
  }

  export type BookingCreateNestedOneWithoutMessagesInput = {
    create?: XOR<BookingCreateWithoutMessagesInput, BookingUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: BookingCreateOrConnectWithoutMessagesInput
    connect?: BookingWhereUniqueInput
  }

  export type BookingUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<BookingCreateWithoutMessagesInput, BookingUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: BookingCreateOrConnectWithoutMessagesInput
    upsert?: BookingUpsertWithoutMessagesInput
    connect?: BookingWhereUniqueInput
    update?: XOR<XOR<BookingUpdateToOneWithWhereWithoutMessagesInput, BookingUpdateWithoutMessagesInput>, BookingUncheckedUpdateWithoutMessagesInput>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type ServiceCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookings?: BookingCreateNestedManyWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    branch?: BranchCreateNestedOneWithoutServicesInput
    masters?: ServiceMasterCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    currency?: string
    categoryId: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutServicesInput
    masters?: ServiceMasterUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutUserInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutUserInput, ServiceUncheckedCreateWithoutUserInput>
  }

  export type ServiceCreateManyUserInputEnvelope = {
    data: ServiceCreateManyUserInput | ServiceCreateManyUserInput[]
  }

  export type BookingCreateWithoutUserInput = {
    id?: string
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    services?: ServiceCreateNestedManyWithoutBookingsInput
    review?: ReviewCreateNestedManyWithoutBookingInput
    client: ClientCreateNestedOneWithoutBookingsInput
    branch?: BranchCreateNestedOneWithoutBookingsInput
    logs?: BookingLogCreateNestedManyWithoutBookingInput
    messages?: BookingMessageCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutUserInput = {
    id?: string
    clientId: string
    branchId?: string | null
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    services?: ServiceUncheckedCreateNestedManyWithoutBookingsInput
    review?: ReviewUncheckedCreateNestedManyWithoutBookingInput
    logs?: BookingLogUncheckedCreateNestedManyWithoutBookingInput
    messages?: BookingMessageUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutUserInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingCreateManyUserInputEnvelope = {
    data: BookingCreateManyUserInput | BookingCreateManyUserInput[]
  }

  export type ServiceMasterCreateWithoutMasterInput = {
    service: ServiceCreateNestedOneWithoutMastersInput
  }

  export type ServiceMasterUncheckedCreateWithoutMasterInput = {
    serviceId: string
  }

  export type ServiceMasterCreateOrConnectWithoutMasterInput = {
    where: ServiceMasterWhereUniqueInput
    create: XOR<ServiceMasterCreateWithoutMasterInput, ServiceMasterUncheckedCreateWithoutMasterInput>
  }

  export type ServiceMasterCreateManyMasterInputEnvelope = {
    data: ServiceMasterCreateManyMasterInput | ServiceMasterCreateManyMasterInput[]
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutReviewsInput
    booking?: BookingCreateNestedOneWithoutReviewInput
    branch?: BranchCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    rating: number
    comment?: string | null
    clientId?: string | null
    bookingId?: string | null
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
  }

  export type CategoryCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    services?: ServiceUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutUserInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryCreateManyUserInputEnvelope = {
    data: CategoryCreateManyUserInput | CategoryCreateManyUserInput[]
  }

  export type MasterAvailabilityCreateWithoutUserInput = {
    id?: string
    availability: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterAvailabilityUncheckedCreateWithoutUserInput = {
    id?: string
    availability: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterAvailabilityCreateOrConnectWithoutUserInput = {
    where: MasterAvailabilityWhereUniqueInput
    create: XOR<MasterAvailabilityCreateWithoutUserInput, MasterAvailabilityUncheckedCreateWithoutUserInput>
  }

  export type MasterAvailabilityCreateManyUserInputEnvelope = {
    data: MasterAvailabilityCreateManyUserInput | MasterAvailabilityCreateManyUserInput[]
  }

  export type BookingLogCreateWithoutUserInput = {
    id?: string
    action: string
    timestamp?: Date | string
    booking: BookingCreateNestedOneWithoutLogsInput
  }

  export type BookingLogUncheckedCreateWithoutUserInput = {
    id?: string
    bookingId: string
    action: string
    timestamp?: Date | string
  }

  export type BookingLogCreateOrConnectWithoutUserInput = {
    where: BookingLogWhereUniqueInput
    create: XOR<BookingLogCreateWithoutUserInput, BookingLogUncheckedCreateWithoutUserInput>
  }

  export type BookingLogCreateManyUserInputEnvelope = {
    data: BookingLogCreateManyUserInput | BookingLogCreateManyUserInput[]
  }

  export type BranchCreateWithoutUsersInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    superAdmin: UserCreateNestedOneWithoutCreatedBranchesInput
    admin: UserCreateNestedOneWithoutManagedBranchesInput
    services?: ServiceCreateNestedManyWithoutBranchInput
    bookings?: BookingCreateNestedManyWithoutBranchInput
    reviews?: ReviewCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    superAdminId: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutBranchInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBranchInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutUsersInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
  }

  export type ClientCreateWithoutUserInput = {
    id?: string
    name: string
    nickName: string
    phoneNumber?: string | null
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewCreateNestedManyWithoutClientInput
    bookings?: BookingCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    nickName: string
    phoneNumber?: string | null
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutClientInput
    bookings?: BookingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutUserInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientCreateManyUserInputEnvelope = {
    data: ClientCreateManyUserInput | ClientCreateManyUserInput[]
  }

  export type BranchCreateWithoutAdminInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    superAdmin: UserCreateNestedOneWithoutCreatedBranchesInput
    users?: UserCreateNestedManyWithoutBranchInput
    services?: ServiceCreateNestedManyWithoutBranchInput
    bookings?: BookingCreateNestedManyWithoutBranchInput
    reviews?: ReviewCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    superAdminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    services?: ServiceUncheckedCreateNestedManyWithoutBranchInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBranchInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutAdminInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutAdminInput, BranchUncheckedCreateWithoutAdminInput>
  }

  export type BranchCreateManyAdminInputEnvelope = {
    data: BranchCreateManyAdminInput | BranchCreateManyAdminInput[]
  }

  export type BranchCreateWithoutSuperAdminInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    admin: UserCreateNestedOneWithoutManagedBranchesInput
    users?: UserCreateNestedManyWithoutBranchInput
    services?: ServiceCreateNestedManyWithoutBranchInput
    bookings?: BookingCreateNestedManyWithoutBranchInput
    reviews?: ReviewCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutSuperAdminInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    services?: ServiceUncheckedCreateNestedManyWithoutBranchInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBranchInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutSuperAdminInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutSuperAdminInput, BranchUncheckedCreateWithoutSuperAdminInput>
  }

  export type BranchCreateManySuperAdminInputEnvelope = {
    data: BranchCreateManySuperAdminInput | BranchCreateManySuperAdminInput[]
  }

  export type ServiceUpsertWithWhereUniqueWithoutUserInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutUserInput, ServiceUncheckedUpdateWithoutUserInput>
    create: XOR<ServiceCreateWithoutUserInput, ServiceUncheckedCreateWithoutUserInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutUserInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutUserInput, ServiceUncheckedUpdateWithoutUserInput>
  }

  export type ServiceUpdateManyWithWhereWithoutUserInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutUserInput>
  }

  export type ServiceScalarWhereInput = {
    AND?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    OR?: ServiceScalarWhereInput[]
    NOT?: ServiceScalarWhereInput | ServiceScalarWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringFilter<"Service"> | string
    duration?: IntFilter<"Service"> | number
    price?: FloatFilter<"Service"> | number
    userId?: StringFilter<"Service"> | string
    currency?: StringFilter<"Service"> | string
    categoryId?: StringFilter<"Service"> | string
    branchId?: StringNullableFilter<"Service"> | string | null
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Service"> | Date | string | null
  }

  export type BookingUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
    create: XOR<BookingCreateWithoutUserInput, BookingUncheckedCreateWithoutUserInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutUserInput, BookingUncheckedUpdateWithoutUserInput>
  }

  export type BookingUpdateManyWithWhereWithoutUserInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingScalarWhereInput = {
    AND?: BookingScalarWhereInput | BookingScalarWhereInput[]
    OR?: BookingScalarWhereInput[]
    NOT?: BookingScalarWhereInput | BookingScalarWhereInput[]
    id?: StringFilter<"Booking"> | string
    userId?: StringFilter<"Booking"> | string
    clientId?: StringFilter<"Booking"> | string
    branchId?: StringNullableFilter<"Booking"> | string | null
    date?: DateTimeFilter<"Booking"> | Date | string
    time?: StringFilter<"Booking"> | string
    notes?: StringNullableFilter<"Booking"> | string | null
    createdAt?: DateTimeFilter<"Booking"> | Date | string
    updatedAt?: DateTimeFilter<"Booking"> | Date | string
    status?: StringFilter<"Booking"> | string
  }

  export type ServiceMasterUpsertWithWhereUniqueWithoutMasterInput = {
    where: ServiceMasterWhereUniqueInput
    update: XOR<ServiceMasterUpdateWithoutMasterInput, ServiceMasterUncheckedUpdateWithoutMasterInput>
    create: XOR<ServiceMasterCreateWithoutMasterInput, ServiceMasterUncheckedCreateWithoutMasterInput>
  }

  export type ServiceMasterUpdateWithWhereUniqueWithoutMasterInput = {
    where: ServiceMasterWhereUniqueInput
    data: XOR<ServiceMasterUpdateWithoutMasterInput, ServiceMasterUncheckedUpdateWithoutMasterInput>
  }

  export type ServiceMasterUpdateManyWithWhereWithoutMasterInput = {
    where: ServiceMasterScalarWhereInput
    data: XOR<ServiceMasterUpdateManyMutationInput, ServiceMasterUncheckedUpdateManyWithoutMasterInput>
  }

  export type ServiceMasterScalarWhereInput = {
    AND?: ServiceMasterScalarWhereInput | ServiceMasterScalarWhereInput[]
    OR?: ServiceMasterScalarWhereInput[]
    NOT?: ServiceMasterScalarWhereInput | ServiceMasterScalarWhereInput[]
    serviceId?: StringFilter<"ServiceMaster"> | string
    masterId?: StringFilter<"ServiceMaster"> | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    clientId?: StringNullableFilter<"Review"> | string | null
    userId?: StringNullableFilter<"Review"> | string | null
    bookingId?: StringNullableFilter<"Review"> | string | null
    branchId?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    updatedAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
    create: XOR<CategoryCreateWithoutUserInput, CategoryUncheckedCreateWithoutUserInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutUserInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutUserInput, CategoryUncheckedUpdateWithoutUserInput>
  }

  export type CategoryUpdateManyWithWhereWithoutUserInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutUserInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    userId?: StringNullableFilter<"Category"> | string | null
  }

  export type MasterAvailabilityUpsertWithWhereUniqueWithoutUserInput = {
    where: MasterAvailabilityWhereUniqueInput
    update: XOR<MasterAvailabilityUpdateWithoutUserInput, MasterAvailabilityUncheckedUpdateWithoutUserInput>
    create: XOR<MasterAvailabilityCreateWithoutUserInput, MasterAvailabilityUncheckedCreateWithoutUserInput>
  }

  export type MasterAvailabilityUpdateWithWhereUniqueWithoutUserInput = {
    where: MasterAvailabilityWhereUniqueInput
    data: XOR<MasterAvailabilityUpdateWithoutUserInput, MasterAvailabilityUncheckedUpdateWithoutUserInput>
  }

  export type MasterAvailabilityUpdateManyWithWhereWithoutUserInput = {
    where: MasterAvailabilityScalarWhereInput
    data: XOR<MasterAvailabilityUpdateManyMutationInput, MasterAvailabilityUncheckedUpdateManyWithoutUserInput>
  }

  export type MasterAvailabilityScalarWhereInput = {
    AND?: MasterAvailabilityScalarWhereInput | MasterAvailabilityScalarWhereInput[]
    OR?: MasterAvailabilityScalarWhereInput[]
    NOT?: MasterAvailabilityScalarWhereInput | MasterAvailabilityScalarWhereInput[]
    id?: StringFilter<"MasterAvailability"> | string
    userId?: StringFilter<"MasterAvailability"> | string
    availability?: StringFilter<"MasterAvailability"> | string
    createdAt?: DateTimeFilter<"MasterAvailability"> | Date | string
    updatedAt?: DateTimeFilter<"MasterAvailability"> | Date | string
  }

  export type BookingLogUpsertWithWhereUniqueWithoutUserInput = {
    where: BookingLogWhereUniqueInput
    update: XOR<BookingLogUpdateWithoutUserInput, BookingLogUncheckedUpdateWithoutUserInput>
    create: XOR<BookingLogCreateWithoutUserInput, BookingLogUncheckedCreateWithoutUserInput>
  }

  export type BookingLogUpdateWithWhereUniqueWithoutUserInput = {
    where: BookingLogWhereUniqueInput
    data: XOR<BookingLogUpdateWithoutUserInput, BookingLogUncheckedUpdateWithoutUserInput>
  }

  export type BookingLogUpdateManyWithWhereWithoutUserInput = {
    where: BookingLogScalarWhereInput
    data: XOR<BookingLogUpdateManyMutationInput, BookingLogUncheckedUpdateManyWithoutUserInput>
  }

  export type BookingLogScalarWhereInput = {
    AND?: BookingLogScalarWhereInput | BookingLogScalarWhereInput[]
    OR?: BookingLogScalarWhereInput[]
    NOT?: BookingLogScalarWhereInput | BookingLogScalarWhereInput[]
    id?: StringFilter<"BookingLog"> | string
    bookingId?: StringFilter<"BookingLog"> | string
    userId?: StringFilter<"BookingLog"> | string
    action?: StringFilter<"BookingLog"> | string
    timestamp?: DateTimeFilter<"BookingLog"> | Date | string
  }

  export type BranchUpsertWithoutUsersInput = {
    update: XOR<BranchUpdateWithoutUsersInput, BranchUncheckedUpdateWithoutUsersInput>
    create: XOR<BranchCreateWithoutUsersInput, BranchUncheckedCreateWithoutUsersInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutUsersInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutUsersInput, BranchUncheckedUpdateWithoutUsersInput>
  }

  export type BranchUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    superAdmin?: UserUpdateOneRequiredWithoutCreatedBranchesNestedInput
    admin?: UserUpdateOneRequiredWithoutManagedBranchesNestedInput
    services?: ServiceUpdateManyWithoutBranchNestedInput
    bookings?: BookingUpdateManyWithoutBranchNestedInput
    reviews?: ReviewUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    superAdminId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutBranchNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBranchNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type ClientUpsertWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    update: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
    create: XOR<ClientCreateWithoutUserInput, ClientUncheckedCreateWithoutUserInput>
  }

  export type ClientUpdateWithWhereUniqueWithoutUserInput = {
    where: ClientWhereUniqueInput
    data: XOR<ClientUpdateWithoutUserInput, ClientUncheckedUpdateWithoutUserInput>
  }

  export type ClientUpdateManyWithWhereWithoutUserInput = {
    where: ClientScalarWhereInput
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyWithoutUserInput>
  }

  export type ClientScalarWhereInput = {
    AND?: ClientScalarWhereInput | ClientScalarWhereInput[]
    OR?: ClientScalarWhereInput[]
    NOT?: ClientScalarWhereInput | ClientScalarWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    nickName?: StringFilter<"Client"> | string
    phoneNumber?: StringNullableFilter<"Client"> | string | null
    chatId?: StringNullableFilter<"Client"> | string | null
    userId?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeFilter<"Client"> | Date | string
    updatedAt?: DateTimeFilter<"Client"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Client"> | Date | string | null
  }

  export type BranchUpsertWithWhereUniqueWithoutAdminInput = {
    where: BranchWhereUniqueInput
    update: XOR<BranchUpdateWithoutAdminInput, BranchUncheckedUpdateWithoutAdminInput>
    create: XOR<BranchCreateWithoutAdminInput, BranchUncheckedCreateWithoutAdminInput>
  }

  export type BranchUpdateWithWhereUniqueWithoutAdminInput = {
    where: BranchWhereUniqueInput
    data: XOR<BranchUpdateWithoutAdminInput, BranchUncheckedUpdateWithoutAdminInput>
  }

  export type BranchUpdateManyWithWhereWithoutAdminInput = {
    where: BranchScalarWhereInput
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyWithoutAdminInput>
  }

  export type BranchScalarWhereInput = {
    AND?: BranchScalarWhereInput | BranchScalarWhereInput[]
    OR?: BranchScalarWhereInput[]
    NOT?: BranchScalarWhereInput | BranchScalarWhereInput[]
    id?: StringFilter<"Branch"> | string
    name?: StringFilter<"Branch"> | string
    address?: StringNullableFilter<"Branch"> | string | null
    phoneNumber?: StringNullableFilter<"Branch"> | string | null
    description?: StringNullableFilter<"Branch"> | string | null
    socialMedia?: StringNullableFilter<"Branch"> | string | null
    city?: StringNullableFilter<"Branch"> | string | null
    image?: StringNullableFilter<"Branch"> | string | null
    status?: StringFilter<"Branch"> | string
    superAdminId?: StringFilter<"Branch"> | string
    adminId?: StringFilter<"Branch"> | string
    createdAt?: DateTimeFilter<"Branch"> | Date | string
    updatedAt?: DateTimeFilter<"Branch"> | Date | string
    deletedAt?: DateTimeNullableFilter<"Branch"> | Date | string | null
  }

  export type BranchUpsertWithWhereUniqueWithoutSuperAdminInput = {
    where: BranchWhereUniqueInput
    update: XOR<BranchUpdateWithoutSuperAdminInput, BranchUncheckedUpdateWithoutSuperAdminInput>
    create: XOR<BranchCreateWithoutSuperAdminInput, BranchUncheckedCreateWithoutSuperAdminInput>
  }

  export type BranchUpdateWithWhereUniqueWithoutSuperAdminInput = {
    where: BranchWhereUniqueInput
    data: XOR<BranchUpdateWithoutSuperAdminInput, BranchUncheckedUpdateWithoutSuperAdminInput>
  }

  export type BranchUpdateManyWithWhereWithoutSuperAdminInput = {
    where: BranchScalarWhereInput
    data: XOR<BranchUpdateManyMutationInput, BranchUncheckedUpdateManyWithoutSuperAdminInput>
  }

  export type UserCreateWithoutCreatedBranchesInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterCreateNestedManyWithoutMasterInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogCreateNestedManyWithoutUserInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    clients?: ClientCreateNestedManyWithoutUserInput
    managedBranches?: BranchCreateNestedManyWithoutAdminInput
  }

  export type UserUncheckedCreateWithoutCreatedBranchesInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    branchId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterUncheckedCreateNestedManyWithoutMasterInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityUncheckedCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    managedBranches?: BranchUncheckedCreateNestedManyWithoutAdminInput
  }

  export type UserCreateOrConnectWithoutCreatedBranchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedBranchesInput, UserUncheckedCreateWithoutCreatedBranchesInput>
  }

  export type UserCreateWithoutManagedBranchesInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterCreateNestedManyWithoutMasterInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogCreateNestedManyWithoutUserInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    clients?: ClientCreateNestedManyWithoutUserInput
    createdBranches?: BranchCreateNestedManyWithoutSuperAdminInput
  }

  export type UserUncheckedCreateWithoutManagedBranchesInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    branchId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterUncheckedCreateNestedManyWithoutMasterInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityUncheckedCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    createdBranches?: BranchUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type UserCreateOrConnectWithoutManagedBranchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagedBranchesInput, UserUncheckedCreateWithoutManagedBranchesInput>
  }

  export type UserCreateWithoutBranchInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterCreateNestedManyWithoutMasterInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogCreateNestedManyWithoutUserInput
    clients?: ClientCreateNestedManyWithoutUserInput
    managedBranches?: BranchCreateNestedManyWithoutAdminInput
    createdBranches?: BranchCreateNestedManyWithoutSuperAdminInput
  }

  export type UserUncheckedCreateWithoutBranchInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterUncheckedCreateNestedManyWithoutMasterInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityUncheckedCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    managedBranches?: BranchUncheckedCreateNestedManyWithoutAdminInput
    createdBranches?: BranchUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type UserCreateOrConnectWithoutBranchInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput>
  }

  export type UserCreateManyBranchInputEnvelope = {
    data: UserCreateManyBranchInput | UserCreateManyBranchInput[]
  }

  export type ServiceCreateWithoutBranchInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutServicesInput
    bookings?: BookingCreateNestedManyWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    masters?: ServiceMasterCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutBranchInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    userId: string
    currency?: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutServicesInput
    masters?: ServiceMasterUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutBranchInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBranchInput, ServiceUncheckedCreateWithoutBranchInput>
  }

  export type ServiceCreateManyBranchInputEnvelope = {
    data: ServiceCreateManyBranchInput | ServiceCreateManyBranchInput[]
  }

  export type BookingCreateWithoutBranchInput = {
    id?: string
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    user: UserCreateNestedOneWithoutBookingsInput
    services?: ServiceCreateNestedManyWithoutBookingsInput
    review?: ReviewCreateNestedManyWithoutBookingInput
    client: ClientCreateNestedOneWithoutBookingsInput
    logs?: BookingLogCreateNestedManyWithoutBookingInput
    messages?: BookingMessageCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutBranchInput = {
    id?: string
    userId: string
    clientId: string
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    services?: ServiceUncheckedCreateNestedManyWithoutBookingsInput
    review?: ReviewUncheckedCreateNestedManyWithoutBookingInput
    logs?: BookingLogUncheckedCreateNestedManyWithoutBookingInput
    messages?: BookingMessageUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutBranchInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutBranchInput, BookingUncheckedCreateWithoutBranchInput>
  }

  export type BookingCreateManyBranchInputEnvelope = {
    data: BookingCreateManyBranchInput | BookingCreateManyBranchInput[]
  }

  export type ReviewCreateWithoutBranchInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutReviewsInput
    user?: UserCreateNestedOneWithoutReviewsInput
    booking?: BookingCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutBranchInput = {
    id?: string
    rating: number
    comment?: string | null
    clientId?: string | null
    userId?: string | null
    bookingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutBranchInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBranchInput, ReviewUncheckedCreateWithoutBranchInput>
  }

  export type ReviewCreateManyBranchInputEnvelope = {
    data: ReviewCreateManyBranchInput | ReviewCreateManyBranchInput[]
  }

  export type UserUpsertWithoutCreatedBranchesInput = {
    update: XOR<UserUpdateWithoutCreatedBranchesInput, UserUncheckedUpdateWithoutCreatedBranchesInput>
    create: XOR<UserCreateWithoutCreatedBranchesInput, UserUncheckedCreateWithoutCreatedBranchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedBranchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedBranchesInput, UserUncheckedUpdateWithoutCreatedBranchesInput>
  }

  export type UserUpdateWithoutCreatedBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUpdateManyWithoutUserNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUpdateManyWithoutAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUncheckedUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type UserUpsertWithoutManagedBranchesInput = {
    update: XOR<UserUpdateWithoutManagedBranchesInput, UserUncheckedUpdateWithoutManagedBranchesInput>
    create: XOR<UserCreateWithoutManagedBranchesInput, UserUncheckedCreateWithoutManagedBranchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutManagedBranchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutManagedBranchesInput, UserUncheckedUpdateWithoutManagedBranchesInput>
  }

  export type UserUpdateWithoutManagedBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUpdateManyWithoutUserNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    createdBranches?: BranchUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutManagedBranchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUncheckedUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    createdBranches?: BranchUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutBranchInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBranchInput, UserUncheckedUpdateWithoutBranchInput>
    create: XOR<UserCreateWithoutBranchInput, UserUncheckedCreateWithoutBranchInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBranchInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBranchInput, UserUncheckedUpdateWithoutBranchInput>
  }

  export type UserUpdateManyWithWhereWithoutBranchInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBranchInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    image?: StringNullableFilter<"User"> | string | null
    description?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    chatId?: StringNullableFilter<"User"> | string | null
    nickName?: StringNullableFilter<"User"> | string | null
    branchId?: StringNullableFilter<"User"> | string | null
    resetToken?: StringNullableFilter<"User"> | string | null
    resetTokenExpiry?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    deletedAt?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type ServiceUpsertWithWhereUniqueWithoutBranchInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutBranchInput, ServiceUncheckedUpdateWithoutBranchInput>
    create: XOR<ServiceCreateWithoutBranchInput, ServiceUncheckedCreateWithoutBranchInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutBranchInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutBranchInput, ServiceUncheckedUpdateWithoutBranchInput>
  }

  export type ServiceUpdateManyWithWhereWithoutBranchInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutBranchInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutBranchInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutBranchInput, BookingUncheckedUpdateWithoutBranchInput>
    create: XOR<BookingCreateWithoutBranchInput, BookingUncheckedCreateWithoutBranchInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutBranchInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutBranchInput, BookingUncheckedUpdateWithoutBranchInput>
  }

  export type BookingUpdateManyWithWhereWithoutBranchInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutBranchInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutBranchInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutBranchInput, ReviewUncheckedUpdateWithoutBranchInput>
    create: XOR<ReviewCreateWithoutBranchInput, ReviewUncheckedCreateWithoutBranchInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutBranchInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutBranchInput, ReviewUncheckedUpdateWithoutBranchInput>
  }

  export type ReviewUpdateManyWithWhereWithoutBranchInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutBranchInput>
  }

  export type ServiceCreateWithoutCategoryInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutServicesInput
    bookings?: BookingCreateNestedManyWithoutServicesInput
    branch?: BranchCreateNestedOneWithoutServicesInput
    masters?: ServiceMasterCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    userId: string
    currency?: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutServicesInput
    masters?: ServiceMasterUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceCreateManyCategoryInputEnvelope = {
    data: ServiceCreateManyCategoryInput | ServiceCreateManyCategoryInput[]
  }

  export type UserCreateWithoutCategoriesInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterCreateNestedManyWithoutMasterInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogCreateNestedManyWithoutUserInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    clients?: ClientCreateNestedManyWithoutUserInput
    managedBranches?: BranchCreateNestedManyWithoutAdminInput
    createdBranches?: BranchCreateNestedManyWithoutSuperAdminInput
  }

  export type UserUncheckedCreateWithoutCategoriesInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    branchId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterUncheckedCreateNestedManyWithoutMasterInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityUncheckedCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    managedBranches?: BranchUncheckedCreateNestedManyWithoutAdminInput
    createdBranches?: BranchUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type UserCreateOrConnectWithoutCategoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
  }

  export type ServiceUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
    create: XOR<ServiceCreateWithoutCategoryInput, ServiceUncheckedCreateWithoutCategoryInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutCategoryInput, ServiceUncheckedUpdateWithoutCategoryInput>
  }

  export type ServiceUpdateManyWithWhereWithoutCategoryInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutCategoryInput>
  }

  export type UserUpsertWithoutCategoriesInput = {
    update: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
    create: XOR<UserCreateWithoutCategoriesInput, UserUncheckedCreateWithoutCategoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCategoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCategoriesInput, UserUncheckedUpdateWithoutCategoriesInput>
  }

  export type UserUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUpdateManyWithoutUserNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutCategoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUncheckedUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUncheckedUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserCreateWithoutServicesInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookings?: BookingCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterCreateNestedManyWithoutMasterInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogCreateNestedManyWithoutUserInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    clients?: ClientCreateNestedManyWithoutUserInput
    managedBranches?: BranchCreateNestedManyWithoutAdminInput
    createdBranches?: BranchCreateNestedManyWithoutSuperAdminInput
  }

  export type UserUncheckedCreateWithoutServicesInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    branchId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterUncheckedCreateNestedManyWithoutMasterInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityUncheckedCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    managedBranches?: BranchUncheckedCreateNestedManyWithoutAdminInput
    createdBranches?: BranchUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type UserCreateOrConnectWithoutServicesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
  }

  export type BookingCreateWithoutServicesInput = {
    id?: string
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    user: UserCreateNestedOneWithoutBookingsInput
    review?: ReviewCreateNestedManyWithoutBookingInput
    client: ClientCreateNestedOneWithoutBookingsInput
    branch?: BranchCreateNestedOneWithoutBookingsInput
    logs?: BookingLogCreateNestedManyWithoutBookingInput
    messages?: BookingMessageCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutServicesInput = {
    id?: string
    userId: string
    clientId: string
    branchId?: string | null
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    review?: ReviewUncheckedCreateNestedManyWithoutBookingInput
    logs?: BookingLogUncheckedCreateNestedManyWithoutBookingInput
    messages?: BookingMessageUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutServicesInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutServicesInput, BookingUncheckedCreateWithoutServicesInput>
  }

  export type CategoryCreateWithoutServicesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type CategoryCreateOrConnectWithoutServicesInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
  }

  export type BranchCreateWithoutServicesInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    superAdmin: UserCreateNestedOneWithoutCreatedBranchesInput
    admin: UserCreateNestedOneWithoutManagedBranchesInput
    users?: UserCreateNestedManyWithoutBranchInput
    bookings?: BookingCreateNestedManyWithoutBranchInput
    reviews?: ReviewCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutServicesInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    superAdminId: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBranchInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutServicesInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutServicesInput, BranchUncheckedCreateWithoutServicesInput>
  }

  export type ServiceMasterCreateWithoutServiceInput = {
    master: UserCreateNestedOneWithoutServiceMastersInput
  }

  export type ServiceMasterUncheckedCreateWithoutServiceInput = {
    masterId: string
  }

  export type ServiceMasterCreateOrConnectWithoutServiceInput = {
    where: ServiceMasterWhereUniqueInput
    create: XOR<ServiceMasterCreateWithoutServiceInput, ServiceMasterUncheckedCreateWithoutServiceInput>
  }

  export type ServiceMasterCreateManyServiceInputEnvelope = {
    data: ServiceMasterCreateManyServiceInput | ServiceMasterCreateManyServiceInput[]
  }

  export type UserUpsertWithoutServicesInput = {
    update: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
    create: XOR<UserCreateWithoutServicesInput, UserUncheckedCreateWithoutServicesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServicesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServicesInput, UserUncheckedUpdateWithoutServicesInput>
  }

  export type UserUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUpdateManyWithoutUserNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUncheckedUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUncheckedUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type BookingUpsertWithWhereUniqueWithoutServicesInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutServicesInput, BookingUncheckedUpdateWithoutServicesInput>
    create: XOR<BookingCreateWithoutServicesInput, BookingUncheckedCreateWithoutServicesInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutServicesInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutServicesInput, BookingUncheckedUpdateWithoutServicesInput>
  }

  export type BookingUpdateManyWithWhereWithoutServicesInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutServicesInput>
  }

  export type CategoryUpsertWithoutServicesInput = {
    update: XOR<CategoryUpdateWithoutServicesInput, CategoryUncheckedUpdateWithoutServicesInput>
    create: XOR<CategoryCreateWithoutServicesInput, CategoryUncheckedCreateWithoutServicesInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutServicesInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutServicesInput, CategoryUncheckedUpdateWithoutServicesInput>
  }

  export type CategoryUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BranchUpsertWithoutServicesInput = {
    update: XOR<BranchUpdateWithoutServicesInput, BranchUncheckedUpdateWithoutServicesInput>
    create: XOR<BranchCreateWithoutServicesInput, BranchUncheckedCreateWithoutServicesInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutServicesInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutServicesInput, BranchUncheckedUpdateWithoutServicesInput>
  }

  export type BranchUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    superAdmin?: UserUpdateOneRequiredWithoutCreatedBranchesNestedInput
    admin?: UserUpdateOneRequiredWithoutManagedBranchesNestedInput
    users?: UserUpdateManyWithoutBranchNestedInput
    bookings?: BookingUpdateManyWithoutBranchNestedInput
    reviews?: ReviewUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    superAdminId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBranchNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type ServiceMasterUpsertWithWhereUniqueWithoutServiceInput = {
    where: ServiceMasterWhereUniqueInput
    update: XOR<ServiceMasterUpdateWithoutServiceInput, ServiceMasterUncheckedUpdateWithoutServiceInput>
    create: XOR<ServiceMasterCreateWithoutServiceInput, ServiceMasterUncheckedCreateWithoutServiceInput>
  }

  export type ServiceMasterUpdateWithWhereUniqueWithoutServiceInput = {
    where: ServiceMasterWhereUniqueInput
    data: XOR<ServiceMasterUpdateWithoutServiceInput, ServiceMasterUncheckedUpdateWithoutServiceInput>
  }

  export type ServiceMasterUpdateManyWithWhereWithoutServiceInput = {
    where: ServiceMasterScalarWhereInput
    data: XOR<ServiceMasterUpdateManyMutationInput, ServiceMasterUncheckedUpdateManyWithoutServiceInput>
  }

  export type UserCreateWithoutClientsInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterCreateNestedManyWithoutMasterInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogCreateNestedManyWithoutUserInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    managedBranches?: BranchCreateNestedManyWithoutAdminInput
    createdBranches?: BranchCreateNestedManyWithoutSuperAdminInput
  }

  export type UserUncheckedCreateWithoutClientsInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    branchId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterUncheckedCreateNestedManyWithoutMasterInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityUncheckedCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogUncheckedCreateNestedManyWithoutUserInput
    managedBranches?: BranchUncheckedCreateNestedManyWithoutAdminInput
    createdBranches?: BranchUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type UserCreateOrConnectWithoutClientsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
  }

  export type ReviewCreateWithoutClientInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutReviewsInput
    booking?: BookingCreateNestedOneWithoutReviewInput
    branch?: BranchCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutClientInput = {
    id?: string
    rating: number
    comment?: string | null
    userId?: string | null
    bookingId?: string | null
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutClientInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput>
  }

  export type ReviewCreateManyClientInputEnvelope = {
    data: ReviewCreateManyClientInput | ReviewCreateManyClientInput[]
  }

  export type BookingCreateWithoutClientInput = {
    id?: string
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    user: UserCreateNestedOneWithoutBookingsInput
    services?: ServiceCreateNestedManyWithoutBookingsInput
    review?: ReviewCreateNestedManyWithoutBookingInput
    branch?: BranchCreateNestedOneWithoutBookingsInput
    logs?: BookingLogCreateNestedManyWithoutBookingInput
    messages?: BookingMessageCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutClientInput = {
    id?: string
    userId: string
    branchId?: string | null
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    services?: ServiceUncheckedCreateNestedManyWithoutBookingsInput
    review?: ReviewUncheckedCreateNestedManyWithoutBookingInput
    logs?: BookingLogUncheckedCreateNestedManyWithoutBookingInput
    messages?: BookingMessageUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutClientInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutClientInput, BookingUncheckedCreateWithoutClientInput>
  }

  export type BookingCreateManyClientInputEnvelope = {
    data: BookingCreateManyClientInput | BookingCreateManyClientInput[]
  }

  export type UserUpsertWithoutClientsInput = {
    update: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
    create: XOR<UserCreateWithoutClientsInput, UserUncheckedCreateWithoutClientsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutClientsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutClientsInput, UserUncheckedUpdateWithoutClientsInput>
  }

  export type UserUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUpdateManyWithoutUserNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    managedBranches?: BranchUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutClientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUncheckedUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUncheckedUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUncheckedUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type ReviewUpsertWithWhereUniqueWithoutClientInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutClientInput, ReviewUncheckedUpdateWithoutClientInput>
    create: XOR<ReviewCreateWithoutClientInput, ReviewUncheckedCreateWithoutClientInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutClientInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutClientInput, ReviewUncheckedUpdateWithoutClientInput>
  }

  export type ReviewUpdateManyWithWhereWithoutClientInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutClientInput>
  }

  export type BookingUpsertWithWhereUniqueWithoutClientInput = {
    where: BookingWhereUniqueInput
    update: XOR<BookingUpdateWithoutClientInput, BookingUncheckedUpdateWithoutClientInput>
    create: XOR<BookingCreateWithoutClientInput, BookingUncheckedCreateWithoutClientInput>
  }

  export type BookingUpdateWithWhereUniqueWithoutClientInput = {
    where: BookingWhereUniqueInput
    data: XOR<BookingUpdateWithoutClientInput, BookingUncheckedUpdateWithoutClientInput>
  }

  export type BookingUpdateManyWithWhereWithoutClientInput = {
    where: BookingScalarWhereInput
    data: XOR<BookingUpdateManyMutationInput, BookingUncheckedUpdateManyWithoutClientInput>
  }

  export type UserCreateWithoutBookingsInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterCreateNestedManyWithoutMasterInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogCreateNestedManyWithoutUserInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    clients?: ClientCreateNestedManyWithoutUserInput
    managedBranches?: BranchCreateNestedManyWithoutAdminInput
    createdBranches?: BranchCreateNestedManyWithoutSuperAdminInput
  }

  export type UserUncheckedCreateWithoutBookingsInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    branchId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterUncheckedCreateNestedManyWithoutMasterInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityUncheckedCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    managedBranches?: BranchUncheckedCreateNestedManyWithoutAdminInput
    createdBranches?: BranchUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type UserCreateOrConnectWithoutBookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
  }

  export type ServiceCreateWithoutBookingsInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    branch?: BranchCreateNestedOneWithoutServicesInput
    masters?: ServiceMasterCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    userId: string
    currency?: string
    categoryId: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    masters?: ServiceMasterUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutBookingsInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
  }

  export type ReviewCreateWithoutBookingInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    client?: ClientCreateNestedOneWithoutReviewsInput
    user?: UserCreateNestedOneWithoutReviewsInput
    branch?: BranchCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutBookingInput = {
    id?: string
    rating: number
    comment?: string | null
    clientId?: string | null
    userId?: string | null
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
  }

  export type ReviewCreateManyBookingInputEnvelope = {
    data: ReviewCreateManyBookingInput | ReviewCreateManyBookingInput[]
  }

  export type ClientCreateWithoutBookingsInput = {
    id?: string
    name: string
    nickName: string
    phoneNumber?: string | null
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutClientsInput
    reviews?: ReviewCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    nickName: string
    phoneNumber?: string | null
    chatId?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutBookingsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutBookingsInput, ClientUncheckedCreateWithoutBookingsInput>
  }

  export type BranchCreateWithoutBookingsInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    superAdmin: UserCreateNestedOneWithoutCreatedBranchesInput
    admin: UserCreateNestedOneWithoutManagedBranchesInput
    users?: UserCreateNestedManyWithoutBranchInput
    services?: ServiceCreateNestedManyWithoutBranchInput
    reviews?: ReviewCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutBookingsInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    superAdminId: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    services?: ServiceUncheckedCreateNestedManyWithoutBranchInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutBookingsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutBookingsInput, BranchUncheckedCreateWithoutBookingsInput>
  }

  export type BookingLogCreateWithoutBookingInput = {
    id?: string
    action: string
    timestamp?: Date | string
    user: UserCreateNestedOneWithoutBookingLogsInput
  }

  export type BookingLogUncheckedCreateWithoutBookingInput = {
    id?: string
    userId: string
    action: string
    timestamp?: Date | string
  }

  export type BookingLogCreateOrConnectWithoutBookingInput = {
    where: BookingLogWhereUniqueInput
    create: XOR<BookingLogCreateWithoutBookingInput, BookingLogUncheckedCreateWithoutBookingInput>
  }

  export type BookingLogCreateManyBookingInputEnvelope = {
    data: BookingLogCreateManyBookingInput | BookingLogCreateManyBookingInput[]
  }

  export type BookingMessageCreateWithoutBookingInput = {
    id?: string
    chatId: string
    messageId: number
    createdAt?: Date | string
  }

  export type BookingMessageUncheckedCreateWithoutBookingInput = {
    id?: string
    chatId: string
    messageId: number
    createdAt?: Date | string
  }

  export type BookingMessageCreateOrConnectWithoutBookingInput = {
    where: BookingMessageWhereUniqueInput
    create: XOR<BookingMessageCreateWithoutBookingInput, BookingMessageUncheckedCreateWithoutBookingInput>
  }

  export type BookingMessageCreateManyBookingInputEnvelope = {
    data: BookingMessageCreateManyBookingInput | BookingMessageCreateManyBookingInput[]
  }

  export type UserUpsertWithoutBookingsInput = {
    update: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
    create: XOR<UserCreateWithoutBookingsInput, UserUncheckedCreateWithoutBookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingsInput, UserUncheckedUpdateWithoutBookingsInput>
  }

  export type UserUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUpdateManyWithoutUserNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUncheckedUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUncheckedUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type ServiceUpsertWithWhereUniqueWithoutBookingsInput = {
    where: ServiceWhereUniqueInput
    update: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
    create: XOR<ServiceCreateWithoutBookingsInput, ServiceUncheckedCreateWithoutBookingsInput>
  }

  export type ServiceUpdateWithWhereUniqueWithoutBookingsInput = {
    where: ServiceWhereUniqueInput
    data: XOR<ServiceUpdateWithoutBookingsInput, ServiceUncheckedUpdateWithoutBookingsInput>
  }

  export type ServiceUpdateManyWithWhereWithoutBookingsInput = {
    where: ServiceScalarWhereInput
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyWithoutBookingsInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
    create: XOR<ReviewCreateWithoutBookingInput, ReviewUncheckedCreateWithoutBookingInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutBookingInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutBookingInput, ReviewUncheckedUpdateWithoutBookingInput>
  }

  export type ReviewUpdateManyWithWhereWithoutBookingInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutBookingInput>
  }

  export type ClientUpsertWithoutBookingsInput = {
    update: XOR<ClientUpdateWithoutBookingsInput, ClientUncheckedUpdateWithoutBookingsInput>
    create: XOR<ClientCreateWithoutBookingsInput, ClientUncheckedCreateWithoutBookingsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutBookingsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutBookingsInput, ClientUncheckedUpdateWithoutBookingsInput>
  }

  export type ClientUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutClientsNestedInput
    reviews?: ReviewUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutClientNestedInput
  }

  export type BranchUpsertWithoutBookingsInput = {
    update: XOR<BranchUpdateWithoutBookingsInput, BranchUncheckedUpdateWithoutBookingsInput>
    create: XOR<BranchCreateWithoutBookingsInput, BranchUncheckedCreateWithoutBookingsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutBookingsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutBookingsInput, BranchUncheckedUpdateWithoutBookingsInput>
  }

  export type BranchUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    superAdmin?: UserUpdateOneRequiredWithoutCreatedBranchesNestedInput
    admin?: UserUpdateOneRequiredWithoutManagedBranchesNestedInput
    users?: UserUpdateManyWithoutBranchNestedInput
    services?: ServiceUpdateManyWithoutBranchNestedInput
    reviews?: ReviewUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    superAdminId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    services?: ServiceUncheckedUpdateManyWithoutBranchNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BookingLogUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingLogWhereUniqueInput
    update: XOR<BookingLogUpdateWithoutBookingInput, BookingLogUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingLogCreateWithoutBookingInput, BookingLogUncheckedCreateWithoutBookingInput>
  }

  export type BookingLogUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingLogWhereUniqueInput
    data: XOR<BookingLogUpdateWithoutBookingInput, BookingLogUncheckedUpdateWithoutBookingInput>
  }

  export type BookingLogUpdateManyWithWhereWithoutBookingInput = {
    where: BookingLogScalarWhereInput
    data: XOR<BookingLogUpdateManyMutationInput, BookingLogUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingMessageUpsertWithWhereUniqueWithoutBookingInput = {
    where: BookingMessageWhereUniqueInput
    update: XOR<BookingMessageUpdateWithoutBookingInput, BookingMessageUncheckedUpdateWithoutBookingInput>
    create: XOR<BookingMessageCreateWithoutBookingInput, BookingMessageUncheckedCreateWithoutBookingInput>
  }

  export type BookingMessageUpdateWithWhereUniqueWithoutBookingInput = {
    where: BookingMessageWhereUniqueInput
    data: XOR<BookingMessageUpdateWithoutBookingInput, BookingMessageUncheckedUpdateWithoutBookingInput>
  }

  export type BookingMessageUpdateManyWithWhereWithoutBookingInput = {
    where: BookingMessageScalarWhereInput
    data: XOR<BookingMessageUpdateManyMutationInput, BookingMessageUncheckedUpdateManyWithoutBookingInput>
  }

  export type BookingMessageScalarWhereInput = {
    AND?: BookingMessageScalarWhereInput | BookingMessageScalarWhereInput[]
    OR?: BookingMessageScalarWhereInput[]
    NOT?: BookingMessageScalarWhereInput | BookingMessageScalarWhereInput[]
    id?: StringFilter<"BookingMessage"> | string
    bookingId?: StringFilter<"BookingMessage"> | string
    chatId?: StringFilter<"BookingMessage"> | string
    messageId?: IntFilter<"BookingMessage"> | number
    createdAt?: DateTimeFilter<"BookingMessage"> | Date | string
  }

  export type ClientCreateWithoutReviewsInput = {
    id?: string
    name: string
    nickName: string
    phoneNumber?: string | null
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutClientsInput
    bookings?: BookingCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    nickName: string
    phoneNumber?: string | null
    chatId?: string | null
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutReviewsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutReviewsInput, ClientUncheckedCreateWithoutReviewsInput>
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterCreateNestedManyWithoutMasterInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogCreateNestedManyWithoutUserInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    clients?: ClientCreateNestedManyWithoutUserInput
    managedBranches?: BranchCreateNestedManyWithoutAdminInput
    createdBranches?: BranchCreateNestedManyWithoutSuperAdminInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    branchId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterUncheckedCreateNestedManyWithoutMasterInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityUncheckedCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    managedBranches?: BranchUncheckedCreateNestedManyWithoutAdminInput
    createdBranches?: BranchUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type BookingCreateWithoutReviewInput = {
    id?: string
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    user: UserCreateNestedOneWithoutBookingsInput
    services?: ServiceCreateNestedManyWithoutBookingsInput
    client: ClientCreateNestedOneWithoutBookingsInput
    branch?: BranchCreateNestedOneWithoutBookingsInput
    logs?: BookingLogCreateNestedManyWithoutBookingInput
    messages?: BookingMessageCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutReviewInput = {
    id?: string
    userId: string
    clientId: string
    branchId?: string | null
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    services?: ServiceUncheckedCreateNestedManyWithoutBookingsInput
    logs?: BookingLogUncheckedCreateNestedManyWithoutBookingInput
    messages?: BookingMessageUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutReviewInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
  }

  export type BranchCreateWithoutReviewsInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    superAdmin: UserCreateNestedOneWithoutCreatedBranchesInput
    admin: UserCreateNestedOneWithoutManagedBranchesInput
    users?: UserCreateNestedManyWithoutBranchInput
    services?: ServiceCreateNestedManyWithoutBranchInput
    bookings?: BookingCreateNestedManyWithoutBranchInput
  }

  export type BranchUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    superAdminId: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    users?: UserUncheckedCreateNestedManyWithoutBranchInput
    services?: ServiceUncheckedCreateNestedManyWithoutBranchInput
    bookings?: BookingUncheckedCreateNestedManyWithoutBranchInput
  }

  export type BranchCreateOrConnectWithoutReviewsInput = {
    where: BranchWhereUniqueInput
    create: XOR<BranchCreateWithoutReviewsInput, BranchUncheckedCreateWithoutReviewsInput>
  }

  export type ClientUpsertWithoutReviewsInput = {
    update: XOR<ClientUpdateWithoutReviewsInput, ClientUncheckedUpdateWithoutReviewsInput>
    create: XOR<ClientCreateWithoutReviewsInput, ClientUncheckedCreateWithoutReviewsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutReviewsInput, ClientUncheckedUpdateWithoutReviewsInput>
  }

  export type ClientUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutClientsNestedInput
    bookings?: BookingUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUpdateManyWithoutMasterNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUpdateManyWithoutUserNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUncheckedUpdateManyWithoutMasterNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUncheckedUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type BookingUpsertWithoutReviewInput = {
    update: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
    create: XOR<BookingCreateWithoutReviewInput, BookingUncheckedCreateWithoutReviewInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutReviewInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutReviewInput, BookingUncheckedUpdateWithoutReviewInput>
  }

  export type BookingUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    services?: ServiceUpdateManyWithoutBookingsNestedInput
    client?: ClientUpdateOneRequiredWithoutBookingsNestedInput
    branch?: BranchUpdateOneWithoutBookingsNestedInput
    logs?: BookingLogUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutBookingsNestedInput
    logs?: BookingLogUncheckedUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BranchUpsertWithoutReviewsInput = {
    update: XOR<BranchUpdateWithoutReviewsInput, BranchUncheckedUpdateWithoutReviewsInput>
    create: XOR<BranchCreateWithoutReviewsInput, BranchUncheckedCreateWithoutReviewsInput>
    where?: BranchWhereInput
  }

  export type BranchUpdateToOneWithWhereWithoutReviewsInput = {
    where?: BranchWhereInput
    data: XOR<BranchUpdateWithoutReviewsInput, BranchUncheckedUpdateWithoutReviewsInput>
  }

  export type BranchUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    superAdmin?: UserUpdateOneRequiredWithoutCreatedBranchesNestedInput
    admin?: UserUpdateOneRequiredWithoutManagedBranchesNestedInput
    users?: UserUpdateManyWithoutBranchNestedInput
    services?: ServiceUpdateManyWithoutBranchNestedInput
    bookings?: BookingUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    superAdminId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    services?: ServiceUncheckedUpdateManyWithoutBranchNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type UserCreateWithoutMasterAvailabilityInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterCreateNestedManyWithoutMasterInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogCreateNestedManyWithoutUserInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    clients?: ClientCreateNestedManyWithoutUserInput
    managedBranches?: BranchCreateNestedManyWithoutAdminInput
    createdBranches?: BranchCreateNestedManyWithoutSuperAdminInput
  }

  export type UserUncheckedCreateWithoutMasterAvailabilityInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    branchId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterUncheckedCreateNestedManyWithoutMasterInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    managedBranches?: BranchUncheckedCreateNestedManyWithoutAdminInput
    createdBranches?: BranchUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type UserCreateOrConnectWithoutMasterAvailabilityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMasterAvailabilityInput, UserUncheckedCreateWithoutMasterAvailabilityInput>
  }

  export type UserUpsertWithoutMasterAvailabilityInput = {
    update: XOR<UserUpdateWithoutMasterAvailabilityInput, UserUncheckedUpdateWithoutMasterAvailabilityInput>
    create: XOR<UserCreateWithoutMasterAvailabilityInput, UserUncheckedCreateWithoutMasterAvailabilityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMasterAvailabilityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMasterAvailabilityInput, UserUncheckedUpdateWithoutMasterAvailabilityInput>
  }

  export type UserUpdateWithoutMasterAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUpdateManyWithoutUserNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutMasterAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUncheckedUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUncheckedUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type BookingCreateWithoutLogsInput = {
    id?: string
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    user: UserCreateNestedOneWithoutBookingsInput
    services?: ServiceCreateNestedManyWithoutBookingsInput
    review?: ReviewCreateNestedManyWithoutBookingInput
    client: ClientCreateNestedOneWithoutBookingsInput
    branch?: BranchCreateNestedOneWithoutBookingsInput
    messages?: BookingMessageCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutLogsInput = {
    id?: string
    userId: string
    clientId: string
    branchId?: string | null
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    services?: ServiceUncheckedCreateNestedManyWithoutBookingsInput
    review?: ReviewUncheckedCreateNestedManyWithoutBookingInput
    messages?: BookingMessageUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutLogsInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutLogsInput, BookingUncheckedCreateWithoutLogsInput>
  }

  export type UserCreateWithoutBookingLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterCreateNestedManyWithoutMasterInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityCreateNestedManyWithoutUserInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    clients?: ClientCreateNestedManyWithoutUserInput
    managedBranches?: BranchCreateNestedManyWithoutAdminInput
    createdBranches?: BranchCreateNestedManyWithoutSuperAdminInput
  }

  export type UserUncheckedCreateWithoutBookingLogsInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    branchId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    serviceMasters?: ServiceMasterUncheckedCreateNestedManyWithoutMasterInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    managedBranches?: BranchUncheckedCreateNestedManyWithoutAdminInput
    createdBranches?: BranchUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type UserCreateOrConnectWithoutBookingLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBookingLogsInput, UserUncheckedCreateWithoutBookingLogsInput>
  }

  export type BookingUpsertWithoutLogsInput = {
    update: XOR<BookingUpdateWithoutLogsInput, BookingUncheckedUpdateWithoutLogsInput>
    create: XOR<BookingCreateWithoutLogsInput, BookingUncheckedCreateWithoutLogsInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutLogsInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutLogsInput, BookingUncheckedUpdateWithoutLogsInput>
  }

  export type BookingUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    services?: ServiceUpdateManyWithoutBookingsNestedInput
    review?: ReviewUpdateManyWithoutBookingNestedInput
    client?: ClientUpdateOneRequiredWithoutBookingsNestedInput
    branch?: BranchUpdateOneWithoutBookingsNestedInput
    messages?: BookingMessageUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutBookingsNestedInput
    review?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type UserUpsertWithoutBookingLogsInput = {
    update: XOR<UserUpdateWithoutBookingLogsInput, UserUncheckedUpdateWithoutBookingLogsInput>
    create: XOR<UserCreateWithoutBookingLogsInput, UserUncheckedCreateWithoutBookingLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBookingLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBookingLogsInput, UserUncheckedUpdateWithoutBookingLogsInput>
  }

  export type UserUpdateWithoutBookingLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUpdateManyWithoutUserNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutBookingLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUncheckedUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUncheckedUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type ServiceCreateWithoutMastersInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    currency?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    user: UserCreateNestedOneWithoutServicesInput
    bookings?: BookingCreateNestedManyWithoutServicesInput
    category: CategoryCreateNestedOneWithoutServicesInput
    branch?: BranchCreateNestedOneWithoutServicesInput
  }

  export type ServiceUncheckedCreateWithoutMastersInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    userId: string
    currency?: string
    categoryId: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    bookings?: BookingUncheckedCreateNestedManyWithoutServicesInput
  }

  export type ServiceCreateOrConnectWithoutMastersInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutMastersInput, ServiceUncheckedCreateWithoutMastersInput>
  }

  export type UserCreateWithoutServiceMastersInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceCreateNestedManyWithoutUserInput
    bookings?: BookingCreateNestedManyWithoutUserInput
    reviews?: ReviewCreateNestedManyWithoutUserInput
    categories?: CategoryCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogCreateNestedManyWithoutUserInput
    branch?: BranchCreateNestedOneWithoutUsersInput
    clients?: ClientCreateNestedManyWithoutUserInput
    managedBranches?: BranchCreateNestedManyWithoutAdminInput
    createdBranches?: BranchCreateNestedManyWithoutSuperAdminInput
  }

  export type UserUncheckedCreateWithoutServiceMastersInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    branchId?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
    services?: ServiceUncheckedCreateNestedManyWithoutUserInput
    bookings?: BookingUncheckedCreateNestedManyWithoutUserInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    categories?: CategoryUncheckedCreateNestedManyWithoutUserInput
    masterAvailability?: MasterAvailabilityUncheckedCreateNestedManyWithoutUserInput
    bookingLogs?: BookingLogUncheckedCreateNestedManyWithoutUserInput
    clients?: ClientUncheckedCreateNestedManyWithoutUserInput
    managedBranches?: BranchUncheckedCreateNestedManyWithoutAdminInput
    createdBranches?: BranchUncheckedCreateNestedManyWithoutSuperAdminInput
  }

  export type UserCreateOrConnectWithoutServiceMastersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServiceMastersInput, UserUncheckedCreateWithoutServiceMastersInput>
  }

  export type ServiceUpsertWithoutMastersInput = {
    update: XOR<ServiceUpdateWithoutMastersInput, ServiceUncheckedUpdateWithoutMastersInput>
    create: XOR<ServiceCreateWithoutMastersInput, ServiceUncheckedCreateWithoutMastersInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutMastersInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutMastersInput, ServiceUncheckedUpdateWithoutMastersInput>
  }

  export type ServiceUpdateWithoutMastersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutServicesNestedInput
    bookings?: BookingUpdateManyWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    branch?: BranchUpdateOneWithoutServicesNestedInput
  }

  export type ServiceUncheckedUpdateWithoutMastersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutServicesNestedInput
  }

  export type UserUpsertWithoutServiceMastersInput = {
    update: XOR<UserUpdateWithoutServiceMastersInput, UserUncheckedUpdateWithoutServiceMastersInput>
    create: XOR<UserCreateWithoutServiceMastersInput, UserUncheckedCreateWithoutServiceMastersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutServiceMastersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutServiceMastersInput, UserUncheckedUpdateWithoutServiceMastersInput>
  }

  export type UserUpdateWithoutServiceMastersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUpdateManyWithoutUserNestedInput
    branch?: BranchUpdateOneWithoutUsersNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutServiceMastersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUncheckedUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type BookingCreateWithoutMessagesInput = {
    id?: string
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    user: UserCreateNestedOneWithoutBookingsInput
    services?: ServiceCreateNestedManyWithoutBookingsInput
    review?: ReviewCreateNestedManyWithoutBookingInput
    client: ClientCreateNestedOneWithoutBookingsInput
    branch?: BranchCreateNestedOneWithoutBookingsInput
    logs?: BookingLogCreateNestedManyWithoutBookingInput
  }

  export type BookingUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    clientId: string
    branchId?: string | null
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
    services?: ServiceUncheckedCreateNestedManyWithoutBookingsInput
    review?: ReviewUncheckedCreateNestedManyWithoutBookingInput
    logs?: BookingLogUncheckedCreateNestedManyWithoutBookingInput
  }

  export type BookingCreateOrConnectWithoutMessagesInput = {
    where: BookingWhereUniqueInput
    create: XOR<BookingCreateWithoutMessagesInput, BookingUncheckedCreateWithoutMessagesInput>
  }

  export type BookingUpsertWithoutMessagesInput = {
    update: XOR<BookingUpdateWithoutMessagesInput, BookingUncheckedUpdateWithoutMessagesInput>
    create: XOR<BookingCreateWithoutMessagesInput, BookingUncheckedCreateWithoutMessagesInput>
    where?: BookingWhereInput
  }

  export type BookingUpdateToOneWithWhereWithoutMessagesInput = {
    where?: BookingWhereInput
    data: XOR<BookingUpdateWithoutMessagesInput, BookingUncheckedUpdateWithoutMessagesInput>
  }

  export type BookingUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    services?: ServiceUpdateManyWithoutBookingsNestedInput
    review?: ReviewUpdateManyWithoutBookingNestedInput
    client?: ClientUpdateOneRequiredWithoutBookingsNestedInput
    branch?: BranchUpdateOneWithoutBookingsNestedInput
    logs?: BookingLogUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutBookingsNestedInput
    review?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
    logs?: BookingLogUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type ServiceCreateManyUserInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    currency?: string
    categoryId: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BookingCreateManyUserInput = {
    id?: string
    clientId: string
    branchId?: string | null
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type ServiceMasterCreateManyMasterInput = {
    serviceId: string
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    rating: number
    comment?: string | null
    clientId?: string | null
    bookingId?: string | null
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MasterAvailabilityCreateManyUserInput = {
    id?: string
    availability: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingLogCreateManyUserInput = {
    id?: string
    bookingId: string
    action: string
    timestamp?: Date | string
  }

  export type ClientCreateManyUserInput = {
    id?: string
    name: string
    nickName: string
    phoneNumber?: string | null
    chatId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BranchCreateManyAdminInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    superAdminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BranchCreateManySuperAdminInput = {
    id?: string
    name: string
    address?: string | null
    phoneNumber?: string | null
    description?: string | null
    socialMedia?: string | null
    city?: string | null
    image?: string | null
    status?: string
    adminId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ServiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUpdateManyWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    branch?: BranchUpdateOneWithoutServicesNestedInput
    masters?: ServiceMasterUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutServicesNestedInput
    masters?: ServiceMasterUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    services?: ServiceUpdateManyWithoutBookingsNestedInput
    review?: ReviewUpdateManyWithoutBookingNestedInput
    client?: ClientUpdateOneRequiredWithoutBookingsNestedInput
    branch?: BranchUpdateOneWithoutBookingsNestedInput
    logs?: BookingLogUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutBookingsNestedInput
    review?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
    logs?: BookingLogUncheckedUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceMasterUpdateWithoutMasterInput = {
    service?: ServiceUpdateOneRequiredWithoutMastersNestedInput
  }

  export type ServiceMasterUncheckedUpdateWithoutMasterInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceMasterUncheckedUpdateManyWithoutMasterInput = {
    serviceId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutReviewsNestedInput
    booking?: BookingUpdateOneWithoutReviewNestedInput
    branch?: BranchUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    services?: ServiceUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterAvailabilityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterAvailabilityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MasterAvailabilityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    availability?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    booking?: BookingUpdateOneRequiredWithoutLogsNestedInput
  }

  export type BookingLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bookingId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUpdateManyWithoutClientNestedInput
    bookings?: BookingUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutClientNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    nickName?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BranchUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    superAdmin?: UserUpdateOneRequiredWithoutCreatedBranchesNestedInput
    users?: UserUpdateManyWithoutBranchNestedInput
    services?: ServiceUpdateManyWithoutBranchNestedInput
    bookings?: BookingUpdateManyWithoutBranchNestedInput
    reviews?: ReviewUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    superAdminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    services?: ServiceUncheckedUpdateManyWithoutBranchNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBranchNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    superAdminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BranchUpdateWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    admin?: UserUpdateOneRequiredWithoutManagedBranchesNestedInput
    users?: UserUpdateManyWithoutBranchNestedInput
    services?: ServiceUpdateManyWithoutBranchNestedInput
    bookings?: BookingUpdateManyWithoutBranchNestedInput
    reviews?: ReviewUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: UserUncheckedUpdateManyWithoutBranchNestedInput
    services?: ServiceUncheckedUpdateManyWithoutBranchNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutBranchNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutBranchNestedInput
  }

  export type BranchUncheckedUpdateManyWithoutSuperAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    socialMedia?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserCreateManyBranchInput = {
    id?: string
    email: string
    password: string
    name: string
    image?: string | null
    description?: string | null
    phoneNumber?: string | null
    role?: string
    chatId?: string | null
    nickName?: string | null
    resetToken?: string | null
    resetTokenExpiry?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ServiceCreateManyBranchInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    userId: string
    currency?: string
    categoryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type BookingCreateManyBranchInput = {
    id?: string
    userId: string
    clientId: string
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type ReviewCreateManyBranchInput = {
    id?: string
    rating: number
    comment?: string | null
    clientId?: string | null
    userId?: string | null
    bookingId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUpdateManyWithoutUserNestedInput
    bookings?: BookingUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    categories?: CategoryUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUpdateManyWithoutUserNestedInput
    clients?: ClientUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    services?: ServiceUncheckedUpdateManyWithoutUserNestedInput
    bookings?: BookingUncheckedUpdateManyWithoutUserNestedInput
    serviceMasters?: ServiceMasterUncheckedUpdateManyWithoutMasterNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    categories?: CategoryUncheckedUpdateManyWithoutUserNestedInput
    masterAvailability?: MasterAvailabilityUncheckedUpdateManyWithoutUserNestedInput
    bookingLogs?: BookingLogUncheckedUpdateManyWithoutUserNestedInput
    clients?: ClientUncheckedUpdateManyWithoutUserNestedInput
    managedBranches?: BranchUncheckedUpdateManyWithoutAdminNestedInput
    createdBranches?: BranchUncheckedUpdateManyWithoutSuperAdminNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nickName?: NullableStringFieldUpdateOperationsInput | string | null
    resetToken?: NullableStringFieldUpdateOperationsInput | string | null
    resetTokenExpiry?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutServicesNestedInput
    bookings?: BookingUpdateManyWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    masters?: ServiceMasterUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutServicesNestedInput
    masters?: ServiceMasterUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BookingUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    services?: ServiceUpdateManyWithoutBookingsNestedInput
    review?: ReviewUpdateManyWithoutBookingNestedInput
    client?: ClientUpdateOneRequiredWithoutBookingsNestedInput
    logs?: BookingLogUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutBookingsNestedInput
    review?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
    logs?: BookingLogUncheckedUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutReviewsNestedInput
    user?: UserUpdateOneWithoutReviewsNestedInput
    booking?: BookingUpdateOneWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutBranchInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceCreateManyCategoryInput = {
    id?: string
    name: string
    description: string
    duration: number
    price: number
    userId: string
    currency?: string
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    deletedAt?: Date | string | null
  }

  export type ServiceUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutServicesNestedInput
    bookings?: BookingUpdateManyWithoutServicesNestedInput
    branch?: BranchUpdateOneWithoutServicesNestedInput
    masters?: ServiceMasterUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bookings?: BookingUncheckedUpdateManyWithoutServicesNestedInput
    masters?: ServiceMasterUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ServiceMasterCreateManyServiceInput = {
    masterId: string
  }

  export type BookingUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    review?: ReviewUpdateManyWithoutBookingNestedInput
    client?: ClientUpdateOneRequiredWithoutBookingsNestedInput
    branch?: BranchUpdateOneWithoutBookingsNestedInput
    logs?: BookingLogUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    review?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
    logs?: BookingLogUncheckedUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutServicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceMasterUpdateWithoutServiceInput = {
    master?: UserUpdateOneRequiredWithoutServiceMastersNestedInput
  }

  export type ServiceMasterUncheckedUpdateWithoutServiceInput = {
    masterId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceMasterUncheckedUpdateManyWithoutServiceInput = {
    masterId?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyClientInput = {
    id?: string
    rating: number
    comment?: string | null
    userId?: string | null
    bookingId?: string | null
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingCreateManyClientInput = {
    id?: string
    userId: string
    branchId?: string | null
    date: Date | string
    time: string
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    status?: string
  }

  export type ReviewUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutReviewsNestedInput
    booking?: BookingUpdateOneWithoutReviewNestedInput
    branch?: BranchUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bookingId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutBookingsNestedInput
    services?: ServiceUpdateManyWithoutBookingsNestedInput
    review?: ReviewUpdateManyWithoutBookingNestedInput
    branch?: BranchUpdateOneWithoutBookingsNestedInput
    logs?: BookingLogUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    services?: ServiceUncheckedUpdateManyWithoutBookingsNestedInput
    review?: ReviewUncheckedUpdateManyWithoutBookingNestedInput
    logs?: BookingLogUncheckedUpdateManyWithoutBookingNestedInput
    messages?: BookingMessageUncheckedUpdateManyWithoutBookingNestedInput
  }

  export type BookingUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    time?: StringFieldUpdateOperationsInput | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyBookingInput = {
    id?: string
    rating: number
    comment?: string | null
    clientId?: string | null
    userId?: string | null
    branchId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BookingLogCreateManyBookingInput = {
    id?: string
    userId: string
    action: string
    timestamp?: Date | string
  }

  export type BookingMessageCreateManyBookingInput = {
    id?: string
    chatId: string
    messageId: number
    createdAt?: Date | string
  }

  export type ServiceUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutServicesNestedInput
    category?: CategoryUpdateOneRequiredWithoutServicesNestedInput
    branch?: BranchUpdateOneWithoutServicesNestedInput
    masters?: ServiceMasterUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    masters?: ServiceMasterUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateManyWithoutBookingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReviewUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneWithoutReviewsNestedInput
    user?: UserUpdateOneWithoutReviewsNestedInput
    branch?: BranchUpdateOneWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    clientId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    branchId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingLogUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutBookingLogsNestedInput
  }

  export type BookingLogUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingLogUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingMessageUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingMessageUncheckedUpdateWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BookingMessageUncheckedUpdateManyWithoutBookingInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    messageId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchCountOutputTypeDefaultArgs instead
     */
    export type BranchCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceCountOutputTypeDefaultArgs instead
     */
    export type ServiceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientCountOutputTypeDefaultArgs instead
     */
    export type ClientCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingCountOutputTypeDefaultArgs instead
     */
    export type BookingCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BranchDefaultArgs instead
     */
    export type BranchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BranchDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceDefaultArgs instead
     */
    export type ServiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingDefaultArgs instead
     */
    export type BookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReviewDefaultArgs instead
     */
    export type ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReviewDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MasterAvailabilityDefaultArgs instead
     */
    export type MasterAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MasterAvailabilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingLogDefaultArgs instead
     */
    export type BookingLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ServiceMasterDefaultArgs instead
     */
    export type ServiceMasterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ServiceMasterDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BookingMessageDefaultArgs instead
     */
    export type BookingMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BookingMessageDefaultArgs<ExtArgs>

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