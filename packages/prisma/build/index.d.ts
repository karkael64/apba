
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model Post
 */

export type Post = {
  id: number
  title: string
  content: string | null
  published: boolean
  authorId: number | null
}

/**
 * Model User
 */

export type User = {
  id: number
  email: string
  name: string | null
  levelId: number
}

/**
 * Model UserLevel
 */

export type UserLevel = {
  id: number
  name: string
}

/**
 * Model Blog
 */

export type Blog = {
  id: number
  authorId: number
  slug: string
  title: string
  body: string
}

/**
 * Model BlogSection
 */

export type BlogSection = {
  id: number
  order: number
  model: string
  json: string
  blogId: number
}

/**
 * Model File
 */

export type File = {
  id: number
  path: string
  url: string
  authorId: number
  blogId: number | null
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Posts
 * const posts = await prisma.post.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Posts
   * const posts = await prisma.post.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.userLevel`: Exposes CRUD operations for the **UserLevel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLevels
    * const userLevels = await prisma.userLevel.findMany()
    * ```
    */
  get userLevel(): Prisma.UserLevelDelegate<GlobalReject>;

  /**
   * `prisma.blog`: Exposes CRUD operations for the **Blog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blogs
    * const blogs = await prisma.blog.findMany()
    * ```
    */
  get blog(): Prisma.BlogDelegate<GlobalReject>;

  /**
   * `prisma.blogSection`: Exposes CRUD operations for the **BlogSection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlogSections
    * const blogSections = await prisma.blogSection.findMany()
    * ```
    */
  get blogSection(): Prisma.BlogSectionDelegate<GlobalReject>;

  /**
   * `prisma.file`: Exposes CRUD operations for the **File** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.file.findMany()
    * ```
    */
  get file(): Prisma.FileDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 2.30.3
   * Query Engine version: b8c35d44de987a9691890b3ddf3e2e7effb9bf20
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
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    Post: 'Post',
    User: 'User',
    UserLevel: 'UserLevel',
    Blog: 'Blog',
    BlogSection: 'BlogSection',
    File: 'File'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
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

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
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
   * Model Post
   */


  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
    max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    published: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs = {
    /**
     * Filter which Post to aggregate.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }


    
    
  export type PostGroupByArgs = {
    where?: PostWhereInput
    orderBy?: Enumerable<PostOrderByInput>
    by: Array<PostScalarFieldEnum>
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }


  export type PostGroupByOutputType = {
    id: number
    title: string
    content: string | null
    published: boolean
    authorId: number | null
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Promise<
    Array<
      PickArray<PostGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PostGroupByOutputType[P]> 
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      > 
    >


  export type PostSelect = {
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
  }

  export type PostInclude = {
    author?: boolean | UserArgs
  }

  export type PostGetPayload<
    S extends boolean | null | undefined | PostArgs,
    U = keyof S
      > = S extends true
        ? Post
    : S extends undefined
    ? never
    : S extends PostArgs | PostFindManyArgs
    ?'include' extends U
    ? Post  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'author'
        ? UserGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Post ?Post [P]
  : 
          P extends 'author'
        ? UserGetPayload<S['select'][P]> | null : never
  } 
    : Post
  : Post


  type PostCountArgs = Merge<
    Omit<PostFindManyArgs, 'select' | 'include'> & {
      select?: PostCountAggregateInputType | true
    }
  >

  export interface PostDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PostFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PostFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PostFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PostFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Post'> extends True ? CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>> : CheckSelect<T, Prisma__PostClient<Post | null >, Prisma__PostClient<PostGetPayload<T> | null >>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PostFindManyArgs>(
      args?: SelectSubset<T, PostFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
    **/
    create<T extends PostCreateArgs>(
      args: SelectSubset<T, PostCreateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Create many Posts.
     *     @param {PostCreateManyArgs} args - Arguments to create many Posts.
     *     @example
     *     // Create many Posts
     *     const post = await prisma.post.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PostCreateManyArgs>(
      args?: SelectSubset<T, PostCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
    **/
    delete<T extends PostDeleteArgs>(
      args: SelectSubset<T, PostDeleteArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PostUpdateArgs>(
      args: SelectSubset<T, PostUpdateArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PostDeleteManyArgs>(
      args?: SelectSubset<T, PostDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PostUpdateManyArgs>(
      args: SelectSubset<T, PostUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
    **/
    upsert<T extends PostUpsertArgs>(
      args: SelectSubset<T, PostUpsertArgs>
    ): CheckSelect<T, Prisma__PostClient<Post>, Prisma__PostClient<PostGetPayload<T>>>

    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
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
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PostClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post findFirst
   */
  export type PostFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Throw an Error if a Post can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Post to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     * 
    **/
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post findMany
   */
  export type PostFindManyArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter, which Posts to fetch.
     * 
    **/
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     * 
    **/
    orderBy?: Enumerable<PostOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     * 
    **/
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PostScalarFieldEnum>
  }


  /**
   * Post create
   */
  export type PostCreateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to create a Post.
     * 
    **/
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }


  /**
   * Post createMany
   */
  export type PostCreateManyArgs = {
    data: Enumerable<PostCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Post update
   */
  export type PostUpdateArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The data needed to update a Post.
     * 
    **/
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs = {
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    where?: PostWhereInput
  }


  /**
   * Post upsert
   */
  export type PostUpsertArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * The filter to search for the Post to update in case it exists.
     * 
    **/
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     * 
    **/
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }


  /**
   * Post delete
   */
  export type PostDeleteArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
    /**
     * Filter which Post to delete.
     * 
    **/
    where: PostWhereUniqueInput
  }


  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs = {
    where?: PostWhereInput
  }


  /**
   * Post without action
   */
  export type PostArgs = {
    /**
     * Select specific fields to fetch from the Post
     * 
    **/
    select?: PostSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PostInclude | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
    max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    levelId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    levelId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    levelId: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    levelId: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    levelId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    levelId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    levelId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    levelId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    levelId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    levelId?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }


    
    
  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    levelId: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Promise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UserGroupByOutputType[P]> 
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      > 
    >


  export type UserSelect = {
    id?: boolean
    email?: boolean
    name?: boolean
    posts?: boolean | PostFindManyArgs
    blogs?: boolean | BlogFindManyArgs
    files?: boolean | FileFindManyArgs
    level?: boolean | UserLevelArgs
    levelId?: boolean
  }

  export type UserInclude = {
    posts?: boolean | PostFindManyArgs
    blogs?: boolean | BlogFindManyArgs
    files?: boolean | FileFindManyArgs
    level?: boolean | UserLevelArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'posts'
        ? Array < PostGetPayload<S['include'][P]>>  :
        P extends 'blogs'
        ? Array < BlogGetPayload<S['include'][P]>>  :
        P extends 'files'
        ? Array < FileGetPayload<S['include'][P]>>  :
        P extends 'level'
        ? UserLevelGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof User ?User [P]
  : 
          P extends 'posts'
        ? Array < PostGetPayload<S['select'][P]>>  :
        P extends 'blogs'
        ? Array < BlogGetPayload<S['select'][P]>>  :
        P extends 'files'
        ? Array < FileGetPayload<S['select'][P]>>  :
        P extends 'level'
        ? UserLevelGetPayload<S['select'][P]> : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
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
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

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
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

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
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    posts<T extends PostFindManyArgs = {}>(args?: Subset<T, PostFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Post>>, PrismaPromise<Array<PostGetPayload<T>>>>;

    blogs<T extends BlogFindManyArgs = {}>(args?: Subset<T, BlogFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Blog>>, PrismaPromise<Array<BlogGetPayload<T>>>>;

    files<T extends FileFindManyArgs = {}>(args?: Subset<T, FileFindManyArgs>): CheckSelect<T, PrismaPromise<Array<File>>, PrismaPromise<Array<FileGetPayload<T>>>>;

    level<T extends UserLevelArgs = {}>(args?: Subset<T, UserLevelArgs>): CheckSelect<T, Prisma__UserLevelClient<UserLevel | null >, Prisma__UserLevelClient<UserLevelGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model UserLevel
   */


  export type AggregateUserLevel = {
    _count: UserLevelCountAggregateOutputType | null
    count: UserLevelCountAggregateOutputType | null
    _avg: UserLevelAvgAggregateOutputType | null
    avg: UserLevelAvgAggregateOutputType | null
    _sum: UserLevelSumAggregateOutputType | null
    sum: UserLevelSumAggregateOutputType | null
    _min: UserLevelMinAggregateOutputType | null
    min: UserLevelMinAggregateOutputType | null
    _max: UserLevelMaxAggregateOutputType | null
    max: UserLevelMaxAggregateOutputType | null
  }

  export type UserLevelAvgAggregateOutputType = {
    id: number | null
  }

  export type UserLevelSumAggregateOutputType = {
    id: number | null
  }

  export type UserLevelMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type UserLevelMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type UserLevelCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type UserLevelAvgAggregateInputType = {
    id?: true
  }

  export type UserLevelSumAggregateInputType = {
    id?: true
  }

  export type UserLevelMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserLevelMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type UserLevelCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type UserLevelAggregateArgs = {
    /**
     * Filter which UserLevel to aggregate.
     * 
    **/
    where?: UserLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLevels to fetch.
     * 
    **/
    orderBy?: Enumerable<UserLevelOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLevels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLevels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLevels
    **/
    _count?: true | UserLevelCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | UserLevelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserLevelAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: UserLevelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserLevelSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: UserLevelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLevelMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: UserLevelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLevelMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: UserLevelMaxAggregateInputType
  }

  export type GetUserLevelAggregateType<T extends UserLevelAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLevel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLevel[P]>
      : GetScalarType<T[P], AggregateUserLevel[P]>
  }


    
    
  export type UserLevelGroupByArgs = {
    where?: UserLevelWhereInput
    orderBy?: Enumerable<UserLevelOrderByInput>
    by: Array<UserLevelScalarFieldEnum>
    having?: UserLevelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLevelCountAggregateInputType | true
    _avg?: UserLevelAvgAggregateInputType
    _sum?: UserLevelSumAggregateInputType
    _min?: UserLevelMinAggregateInputType
    _max?: UserLevelMaxAggregateInputType
  }


  export type UserLevelGroupByOutputType = {
    id: number
    name: string
    _count: UserLevelCountAggregateOutputType | null
    _avg: UserLevelAvgAggregateOutputType | null
    _sum: UserLevelSumAggregateOutputType | null
    _min: UserLevelMinAggregateOutputType | null
    _max: UserLevelMaxAggregateOutputType | null
  }

  type GetUserLevelGroupByPayload<T extends UserLevelGroupByArgs> = Promise<
    Array<
      PickArray<UserLevelGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UserLevelGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UserLevelGroupByOutputType[P]> 
            : GetScalarType<T[P], UserLevelGroupByOutputType[P]>
        }
      > 
    >


  export type UserLevelSelect = {
    id?: boolean
    name?: boolean
    users?: boolean | UserFindManyArgs
  }

  export type UserLevelInclude = {
    users?: boolean | UserFindManyArgs
  }

  export type UserLevelGetPayload<
    S extends boolean | null | undefined | UserLevelArgs,
    U = keyof S
      > = S extends true
        ? UserLevel
    : S extends undefined
    ? never
    : S extends UserLevelArgs | UserLevelFindManyArgs
    ?'include' extends U
    ? UserLevel  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'users'
        ? Array < UserGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof UserLevel ?UserLevel [P]
  : 
          P extends 'users'
        ? Array < UserGetPayload<S['select'][P]>>  : never
  } 
    : UserLevel
  : UserLevel


  type UserLevelCountArgs = Merge<
    Omit<UserLevelFindManyArgs, 'select' | 'include'> & {
      select?: UserLevelCountAggregateInputType | true
    }
  >

  export interface UserLevelDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one UserLevel that matches the filter.
     * @param {UserLevelFindUniqueArgs} args - Arguments to find a UserLevel
     * @example
     * // Get one UserLevel
     * const userLevel = await prisma.userLevel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserLevelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserLevelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserLevel'> extends True ? CheckSelect<T, Prisma__UserLevelClient<UserLevel>, Prisma__UserLevelClient<UserLevelGetPayload<T>>> : CheckSelect<T, Prisma__UserLevelClient<UserLevel | null >, Prisma__UserLevelClient<UserLevelGetPayload<T> | null >>

    /**
     * Find the first UserLevel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelFindFirstArgs} args - Arguments to find a UserLevel
     * @example
     * // Get one UserLevel
     * const userLevel = await prisma.userLevel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserLevelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserLevelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserLevel'> extends True ? CheckSelect<T, Prisma__UserLevelClient<UserLevel>, Prisma__UserLevelClient<UserLevelGetPayload<T>>> : CheckSelect<T, Prisma__UserLevelClient<UserLevel | null >, Prisma__UserLevelClient<UserLevelGetPayload<T> | null >>

    /**
     * Find zero or more UserLevels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLevels
     * const userLevels = await prisma.userLevel.findMany()
     * 
     * // Get first 10 UserLevels
     * const userLevels = await prisma.userLevel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLevelWithIdOnly = await prisma.userLevel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserLevelFindManyArgs>(
      args?: SelectSubset<T, UserLevelFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<UserLevel>>, PrismaPromise<Array<UserLevelGetPayload<T>>>>

    /**
     * Create a UserLevel.
     * @param {UserLevelCreateArgs} args - Arguments to create a UserLevel.
     * @example
     * // Create one UserLevel
     * const UserLevel = await prisma.userLevel.create({
     *   data: {
     *     // ... data to create a UserLevel
     *   }
     * })
     * 
    **/
    create<T extends UserLevelCreateArgs>(
      args: SelectSubset<T, UserLevelCreateArgs>
    ): CheckSelect<T, Prisma__UserLevelClient<UserLevel>, Prisma__UserLevelClient<UserLevelGetPayload<T>>>

    /**
     * Create many UserLevels.
     *     @param {UserLevelCreateManyArgs} args - Arguments to create many UserLevels.
     *     @example
     *     // Create many UserLevels
     *     const userLevel = await prisma.userLevel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserLevelCreateManyArgs>(
      args?: SelectSubset<T, UserLevelCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a UserLevel.
     * @param {UserLevelDeleteArgs} args - Arguments to delete one UserLevel.
     * @example
     * // Delete one UserLevel
     * const UserLevel = await prisma.userLevel.delete({
     *   where: {
     *     // ... filter to delete one UserLevel
     *   }
     * })
     * 
    **/
    delete<T extends UserLevelDeleteArgs>(
      args: SelectSubset<T, UserLevelDeleteArgs>
    ): CheckSelect<T, Prisma__UserLevelClient<UserLevel>, Prisma__UserLevelClient<UserLevelGetPayload<T>>>

    /**
     * Update one UserLevel.
     * @param {UserLevelUpdateArgs} args - Arguments to update one UserLevel.
     * @example
     * // Update one UserLevel
     * const userLevel = await prisma.userLevel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserLevelUpdateArgs>(
      args: SelectSubset<T, UserLevelUpdateArgs>
    ): CheckSelect<T, Prisma__UserLevelClient<UserLevel>, Prisma__UserLevelClient<UserLevelGetPayload<T>>>

    /**
     * Delete zero or more UserLevels.
     * @param {UserLevelDeleteManyArgs} args - Arguments to filter UserLevels to delete.
     * @example
     * // Delete a few UserLevels
     * const { count } = await prisma.userLevel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserLevelDeleteManyArgs>(
      args?: SelectSubset<T, UserLevelDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLevels
     * const userLevel = await prisma.userLevel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserLevelUpdateManyArgs>(
      args: SelectSubset<T, UserLevelUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLevel.
     * @param {UserLevelUpsertArgs} args - Arguments to update or create a UserLevel.
     * @example
     * // Update or create a UserLevel
     * const userLevel = await prisma.userLevel.upsert({
     *   create: {
     *     // ... data to create a UserLevel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLevel we want to update
     *   }
     * })
    **/
    upsert<T extends UserLevelUpsertArgs>(
      args: SelectSubset<T, UserLevelUpsertArgs>
    ): CheckSelect<T, Prisma__UserLevelClient<UserLevel>, Prisma__UserLevelClient<UserLevelGetPayload<T>>>

    /**
     * Count the number of UserLevels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelCountArgs} args - Arguments to filter UserLevels to count.
     * @example
     * // Count the number of UserLevels
     * const count = await prisma.userLevel.count({
     *   where: {
     *     // ... the filter for the UserLevels we want to count
     *   }
     * })
    **/
    count<T extends UserLevelCountArgs>(
      args?: Subset<T, UserLevelCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLevelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserLevelAggregateArgs>(args: Subset<T, UserLevelAggregateArgs>): PrismaPromise<GetUserLevelAggregateType<T>>

    /**
     * Group by UserLevel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLevelGroupByArgs} args - Group by arguments.
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
      T extends UserLevelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLevelGroupByArgs['orderBy'] }
        : { orderBy?: UserLevelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserLevelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLevelGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLevel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserLevelClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    users<T extends UserFindManyArgs = {}>(args?: Subset<T, UserFindManyArgs>): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * UserLevel findUnique
   */
  export type UserLevelFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the UserLevel
     * 
    **/
    select?: UserLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserLevelInclude | null
    /**
     * Throw an Error if a UserLevel can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserLevel to fetch.
     * 
    **/
    where: UserLevelWhereUniqueInput
  }


  /**
   * UserLevel findFirst
   */
  export type UserLevelFindFirstArgs = {
    /**
     * Select specific fields to fetch from the UserLevel
     * 
    **/
    select?: UserLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserLevelInclude | null
    /**
     * Throw an Error if a UserLevel can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which UserLevel to fetch.
     * 
    **/
    where?: UserLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLevels to fetch.
     * 
    **/
    orderBy?: Enumerable<UserLevelOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLevels.
     * 
    **/
    cursor?: UserLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLevels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLevels.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLevels.
     * 
    **/
    distinct?: Enumerable<UserLevelScalarFieldEnum>
  }


  /**
   * UserLevel findMany
   */
  export type UserLevelFindManyArgs = {
    /**
     * Select specific fields to fetch from the UserLevel
     * 
    **/
    select?: UserLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserLevelInclude | null
    /**
     * Filter, which UserLevels to fetch.
     * 
    **/
    where?: UserLevelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLevels to fetch.
     * 
    **/
    orderBy?: Enumerable<UserLevelOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLevels.
     * 
    **/
    cursor?: UserLevelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLevels from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLevels.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserLevelScalarFieldEnum>
  }


  /**
   * UserLevel create
   */
  export type UserLevelCreateArgs = {
    /**
     * Select specific fields to fetch from the UserLevel
     * 
    **/
    select?: UserLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserLevelInclude | null
    /**
     * The data needed to create a UserLevel.
     * 
    **/
    data: XOR<UserLevelCreateInput, UserLevelUncheckedCreateInput>
  }


  /**
   * UserLevel createMany
   */
  export type UserLevelCreateManyArgs = {
    data: Enumerable<UserLevelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * UserLevel update
   */
  export type UserLevelUpdateArgs = {
    /**
     * Select specific fields to fetch from the UserLevel
     * 
    **/
    select?: UserLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserLevelInclude | null
    /**
     * The data needed to update a UserLevel.
     * 
    **/
    data: XOR<UserLevelUpdateInput, UserLevelUncheckedUpdateInput>
    /**
     * Choose, which UserLevel to update.
     * 
    **/
    where: UserLevelWhereUniqueInput
  }


  /**
   * UserLevel updateMany
   */
  export type UserLevelUpdateManyArgs = {
    data: XOR<UserLevelUpdateManyMutationInput, UserLevelUncheckedUpdateManyInput>
    where?: UserLevelWhereInput
  }


  /**
   * UserLevel upsert
   */
  export type UserLevelUpsertArgs = {
    /**
     * Select specific fields to fetch from the UserLevel
     * 
    **/
    select?: UserLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserLevelInclude | null
    /**
     * The filter to search for the UserLevel to update in case it exists.
     * 
    **/
    where: UserLevelWhereUniqueInput
    /**
     * In case the UserLevel found by the `where` argument doesn't exist, create a new UserLevel with this data.
     * 
    **/
    create: XOR<UserLevelCreateInput, UserLevelUncheckedCreateInput>
    /**
     * In case the UserLevel was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserLevelUpdateInput, UserLevelUncheckedUpdateInput>
  }


  /**
   * UserLevel delete
   */
  export type UserLevelDeleteArgs = {
    /**
     * Select specific fields to fetch from the UserLevel
     * 
    **/
    select?: UserLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserLevelInclude | null
    /**
     * Filter which UserLevel to delete.
     * 
    **/
    where: UserLevelWhereUniqueInput
  }


  /**
   * UserLevel deleteMany
   */
  export type UserLevelDeleteManyArgs = {
    where?: UserLevelWhereInput
  }


  /**
   * UserLevel without action
   */
  export type UserLevelArgs = {
    /**
     * Select specific fields to fetch from the UserLevel
     * 
    **/
    select?: UserLevelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserLevelInclude | null
  }



  /**
   * Model Blog
   */


  export type AggregateBlog = {
    _count: BlogCountAggregateOutputType | null
    count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
    max: BlogMaxAggregateOutputType | null
  }

  export type BlogAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type BlogSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type BlogMinAggregateOutputType = {
    id: number | null
    authorId: number | null
    slug: string | null
    title: string | null
    body: string | null
  }

  export type BlogMaxAggregateOutputType = {
    id: number | null
    authorId: number | null
    slug: string | null
    title: string | null
    body: string | null
  }

  export type BlogCountAggregateOutputType = {
    id: number
    authorId: number
    slug: number
    title: number
    body: number
    _all: number
  }


  export type BlogAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type BlogSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type BlogMinAggregateInputType = {
    id?: true
    authorId?: true
    slug?: true
    title?: true
    body?: true
  }

  export type BlogMaxAggregateInputType = {
    id?: true
    authorId?: true
    slug?: true
    title?: true
    body?: true
  }

  export type BlogCountAggregateInputType = {
    id?: true
    authorId?: true
    slug?: true
    title?: true
    body?: true
    _all?: true
  }

  export type BlogAggregateArgs = {
    /**
     * Filter which Blog to aggregate.
     * 
    **/
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blogs
    **/
    _count?: true | BlogCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | BlogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: BlogAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: BlogSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: BlogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: BlogMaxAggregateInputType
  }

  export type GetBlogAggregateType<T extends BlogAggregateArgs> = {
        [P in keyof T & keyof AggregateBlog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog[P]>
      : GetScalarType<T[P], AggregateBlog[P]>
  }


    
    
  export type BlogGroupByArgs = {
    where?: BlogWhereInput
    orderBy?: Enumerable<BlogOrderByInput>
    by: Array<BlogScalarFieldEnum>
    having?: BlogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogCountAggregateInputType | true
    _avg?: BlogAvgAggregateInputType
    _sum?: BlogSumAggregateInputType
    _min?: BlogMinAggregateInputType
    _max?: BlogMaxAggregateInputType
  }


  export type BlogGroupByOutputType = {
    id: number
    authorId: number
    slug: string
    title: string
    body: string
    _count: BlogCountAggregateOutputType | null
    _avg: BlogAvgAggregateOutputType | null
    _sum: BlogSumAggregateOutputType | null
    _min: BlogMinAggregateOutputType | null
    _max: BlogMaxAggregateOutputType | null
  }

  type GetBlogGroupByPayload<T extends BlogGroupByArgs> = Promise<
    Array<
      PickArray<BlogGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof BlogGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], BlogGroupByOutputType[P]> 
            : GetScalarType<T[P], BlogGroupByOutputType[P]>
        }
      > 
    >


  export type BlogSelect = {
    id?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
    slug?: boolean
    title?: boolean
    body?: boolean
    files?: boolean | FileFindManyArgs
    sections?: boolean | BlogSectionFindManyArgs
  }

  export type BlogInclude = {
    author?: boolean | UserArgs
    files?: boolean | FileFindManyArgs
    sections?: boolean | BlogSectionFindManyArgs
  }

  export type BlogGetPayload<
    S extends boolean | null | undefined | BlogArgs,
    U = keyof S
      > = S extends true
        ? Blog
    : S extends undefined
    ? never
    : S extends BlogArgs | BlogFindManyArgs
    ?'include' extends U
    ? Blog  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'author'
        ? UserGetPayload<S['include'][P]> :
        P extends 'files'
        ? Array < FileGetPayload<S['include'][P]>>  :
        P extends 'sections'
        ? Array < BlogSectionGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Blog ?Blog [P]
  : 
          P extends 'author'
        ? UserGetPayload<S['select'][P]> :
        P extends 'files'
        ? Array < FileGetPayload<S['select'][P]>>  :
        P extends 'sections'
        ? Array < BlogSectionGetPayload<S['select'][P]>>  : never
  } 
    : Blog
  : Blog


  type BlogCountArgs = Merge<
    Omit<BlogFindManyArgs, 'select' | 'include'> & {
      select?: BlogCountAggregateInputType | true
    }
  >

  export interface BlogDelegate<GlobalRejectSettings> {
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
    **/
    findUnique<T extends BlogFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BlogFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Blog'> extends True ? CheckSelect<T, Prisma__BlogClient<Blog>, Prisma__BlogClient<BlogGetPayload<T>>> : CheckSelect<T, Prisma__BlogClient<Blog | null >, Prisma__BlogClient<BlogGetPayload<T> | null >>

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
    **/
    findFirst<T extends BlogFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BlogFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Blog'> extends True ? CheckSelect<T, Prisma__BlogClient<Blog>, Prisma__BlogClient<BlogGetPayload<T>>> : CheckSelect<T, Prisma__BlogClient<Blog | null >, Prisma__BlogClient<BlogGetPayload<T> | null >>

    /**
     * Find zero or more Blogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends BlogFindManyArgs>(
      args?: SelectSubset<T, BlogFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Blog>>, PrismaPromise<Array<BlogGetPayload<T>>>>

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
    **/
    create<T extends BlogCreateArgs>(
      args: SelectSubset<T, BlogCreateArgs>
    ): CheckSelect<T, Prisma__BlogClient<Blog>, Prisma__BlogClient<BlogGetPayload<T>>>

    /**
     * Create many Blogs.
     *     @param {BlogCreateManyArgs} args - Arguments to create many Blogs.
     *     @example
     *     // Create many Blogs
     *     const blog = await prisma.blog.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlogCreateManyArgs>(
      args?: SelectSubset<T, BlogCreateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    delete<T extends BlogDeleteArgs>(
      args: SelectSubset<T, BlogDeleteArgs>
    ): CheckSelect<T, Prisma__BlogClient<Blog>, Prisma__BlogClient<BlogGetPayload<T>>>

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
    **/
    update<T extends BlogUpdateArgs>(
      args: SelectSubset<T, BlogUpdateArgs>
    ): CheckSelect<T, Prisma__BlogClient<Blog>, Prisma__BlogClient<BlogGetPayload<T>>>

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
    **/
    deleteMany<T extends BlogDeleteManyArgs>(
      args?: SelectSubset<T, BlogDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends BlogUpdateManyArgs>(
      args: SelectSubset<T, BlogUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends BlogUpsertArgs>(
      args: SelectSubset<T, BlogUpsertArgs>
    ): CheckSelect<T, Prisma__BlogClient<Blog>, Prisma__BlogClient<BlogGetPayload<T>>>

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
    ): PrismaPromise<
      T extends _Record<'select', any>
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
    aggregate<T extends BlogAggregateArgs>(args: Subset<T, BlogAggregateArgs>): PrismaPromise<GetBlogAggregateType<T>>

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
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BlogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BlogClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    files<T extends FileFindManyArgs = {}>(args?: Subset<T, FileFindManyArgs>): CheckSelect<T, PrismaPromise<Array<File>>, PrismaPromise<Array<FileGetPayload<T>>>>;

    sections<T extends BlogSectionFindManyArgs = {}>(args?: Subset<T, BlogSectionFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BlogSection>>, PrismaPromise<Array<BlogSectionGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Blog findUnique
   */
  export type BlogFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * Throw an Error if a Blog can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Blog to fetch.
     * 
    **/
    where: BlogWhereUniqueInput
  }


  /**
   * Blog findFirst
   */
  export type BlogFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * Throw an Error if a Blog can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Blog to fetch.
     * 
    **/
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blogs.
     * 
    **/
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blogs.
     * 
    **/
    distinct?: Enumerable<BlogScalarFieldEnum>
  }


  /**
   * Blog findMany
   */
  export type BlogFindManyArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * Filter, which Blogs to fetch.
     * 
    **/
    where?: BlogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blogs to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blogs.
     * 
    **/
    cursor?: BlogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blogs from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blogs.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BlogScalarFieldEnum>
  }


  /**
   * Blog create
   */
  export type BlogCreateArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * The data needed to create a Blog.
     * 
    **/
    data: XOR<BlogCreateInput, BlogUncheckedCreateInput>
  }


  /**
   * Blog createMany
   */
  export type BlogCreateManyArgs = {
    data: Enumerable<BlogCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Blog update
   */
  export type BlogUpdateArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * The data needed to update a Blog.
     * 
    **/
    data: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
    /**
     * Choose, which Blog to update.
     * 
    **/
    where: BlogWhereUniqueInput
  }


  /**
   * Blog updateMany
   */
  export type BlogUpdateManyArgs = {
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyInput>
    where?: BlogWhereInput
  }


  /**
   * Blog upsert
   */
  export type BlogUpsertArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * The filter to search for the Blog to update in case it exists.
     * 
    **/
    where: BlogWhereUniqueInput
    /**
     * In case the Blog found by the `where` argument doesn't exist, create a new Blog with this data.
     * 
    **/
    create: XOR<BlogCreateInput, BlogUncheckedCreateInput>
    /**
     * In case the Blog was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BlogUpdateInput, BlogUncheckedUpdateInput>
  }


  /**
   * Blog delete
   */
  export type BlogDeleteArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
    /**
     * Filter which Blog to delete.
     * 
    **/
    where: BlogWhereUniqueInput
  }


  /**
   * Blog deleteMany
   */
  export type BlogDeleteManyArgs = {
    where?: BlogWhereInput
  }


  /**
   * Blog without action
   */
  export type BlogArgs = {
    /**
     * Select specific fields to fetch from the Blog
     * 
    **/
    select?: BlogSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogInclude | null
  }



  /**
   * Model BlogSection
   */


  export type AggregateBlogSection = {
    _count: BlogSectionCountAggregateOutputType | null
    count: BlogSectionCountAggregateOutputType | null
    _avg: BlogSectionAvgAggregateOutputType | null
    avg: BlogSectionAvgAggregateOutputType | null
    _sum: BlogSectionSumAggregateOutputType | null
    sum: BlogSectionSumAggregateOutputType | null
    _min: BlogSectionMinAggregateOutputType | null
    min: BlogSectionMinAggregateOutputType | null
    _max: BlogSectionMaxAggregateOutputType | null
    max: BlogSectionMaxAggregateOutputType | null
  }

  export type BlogSectionAvgAggregateOutputType = {
    id: number | null
    order: number | null
    blogId: number | null
  }

  export type BlogSectionSumAggregateOutputType = {
    id: number | null
    order: number | null
    blogId: number | null
  }

  export type BlogSectionMinAggregateOutputType = {
    id: number | null
    order: number | null
    model: string | null
    json: string | null
    blogId: number | null
  }

  export type BlogSectionMaxAggregateOutputType = {
    id: number | null
    order: number | null
    model: string | null
    json: string | null
    blogId: number | null
  }

  export type BlogSectionCountAggregateOutputType = {
    id: number
    order: number
    model: number
    json: number
    blogId: number
    _all: number
  }


  export type BlogSectionAvgAggregateInputType = {
    id?: true
    order?: true
    blogId?: true
  }

  export type BlogSectionSumAggregateInputType = {
    id?: true
    order?: true
    blogId?: true
  }

  export type BlogSectionMinAggregateInputType = {
    id?: true
    order?: true
    model?: true
    json?: true
    blogId?: true
  }

  export type BlogSectionMaxAggregateInputType = {
    id?: true
    order?: true
    model?: true
    json?: true
    blogId?: true
  }

  export type BlogSectionCountAggregateInputType = {
    id?: true
    order?: true
    model?: true
    json?: true
    blogId?: true
    _all?: true
  }

  export type BlogSectionAggregateArgs = {
    /**
     * Filter which BlogSection to aggregate.
     * 
    **/
    where?: BlogSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogSections to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogSectionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BlogSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogSections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogSections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlogSections
    **/
    _count?: true | BlogSectionCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | BlogSectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlogSectionAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: BlogSectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlogSectionSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: BlogSectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlogSectionMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: BlogSectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlogSectionMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: BlogSectionMaxAggregateInputType
  }

  export type GetBlogSectionAggregateType<T extends BlogSectionAggregateArgs> = {
        [P in keyof T & keyof AggregateBlogSection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlogSection[P]>
      : GetScalarType<T[P], AggregateBlogSection[P]>
  }


    
    
  export type BlogSectionGroupByArgs = {
    where?: BlogSectionWhereInput
    orderBy?: Enumerable<BlogSectionOrderByInput>
    by: Array<BlogSectionScalarFieldEnum>
    having?: BlogSectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlogSectionCountAggregateInputType | true
    _avg?: BlogSectionAvgAggregateInputType
    _sum?: BlogSectionSumAggregateInputType
    _min?: BlogSectionMinAggregateInputType
    _max?: BlogSectionMaxAggregateInputType
  }


  export type BlogSectionGroupByOutputType = {
    id: number
    order: number
    model: string
    json: string
    blogId: number
    _count: BlogSectionCountAggregateOutputType | null
    _avg: BlogSectionAvgAggregateOutputType | null
    _sum: BlogSectionSumAggregateOutputType | null
    _min: BlogSectionMinAggregateOutputType | null
    _max: BlogSectionMaxAggregateOutputType | null
  }

  type GetBlogSectionGroupByPayload<T extends BlogSectionGroupByArgs> = Promise<
    Array<
      PickArray<BlogSectionGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof BlogSectionGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], BlogSectionGroupByOutputType[P]> 
            : GetScalarType<T[P], BlogSectionGroupByOutputType[P]>
        }
      > 
    >


  export type BlogSectionSelect = {
    id?: boolean
    order?: boolean
    model?: boolean
    json?: boolean
    blog?: boolean | BlogArgs
    blogId?: boolean
  }

  export type BlogSectionInclude = {
    blog?: boolean | BlogArgs
  }

  export type BlogSectionGetPayload<
    S extends boolean | null | undefined | BlogSectionArgs,
    U = keyof S
      > = S extends true
        ? BlogSection
    : S extends undefined
    ? never
    : S extends BlogSectionArgs | BlogSectionFindManyArgs
    ?'include' extends U
    ? BlogSection  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'blog'
        ? BlogGetPayload<S['include'][P]> : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof BlogSection ?BlogSection [P]
  : 
          P extends 'blog'
        ? BlogGetPayload<S['select'][P]> : never
  } 
    : BlogSection
  : BlogSection


  type BlogSectionCountArgs = Merge<
    Omit<BlogSectionFindManyArgs, 'select' | 'include'> & {
      select?: BlogSectionCountAggregateInputType | true
    }
  >

  export interface BlogSectionDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one BlogSection that matches the filter.
     * @param {BlogSectionFindUniqueArgs} args - Arguments to find a BlogSection
     * @example
     * // Get one BlogSection
     * const blogSection = await prisma.blogSection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlogSectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BlogSectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BlogSection'> extends True ? CheckSelect<T, Prisma__BlogSectionClient<BlogSection>, Prisma__BlogSectionClient<BlogSectionGetPayload<T>>> : CheckSelect<T, Prisma__BlogSectionClient<BlogSection | null >, Prisma__BlogSectionClient<BlogSectionGetPayload<T> | null >>

    /**
     * Find the first BlogSection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSectionFindFirstArgs} args - Arguments to find a BlogSection
     * @example
     * // Get one BlogSection
     * const blogSection = await prisma.blogSection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlogSectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BlogSectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BlogSection'> extends True ? CheckSelect<T, Prisma__BlogSectionClient<BlogSection>, Prisma__BlogSectionClient<BlogSectionGetPayload<T>>> : CheckSelect<T, Prisma__BlogSectionClient<BlogSection | null >, Prisma__BlogSectionClient<BlogSectionGetPayload<T> | null >>

    /**
     * Find zero or more BlogSections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlogSections
     * const blogSections = await prisma.blogSection.findMany()
     * 
     * // Get first 10 BlogSections
     * const blogSections = await prisma.blogSection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blogSectionWithIdOnly = await prisma.blogSection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlogSectionFindManyArgs>(
      args?: SelectSubset<T, BlogSectionFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<BlogSection>>, PrismaPromise<Array<BlogSectionGetPayload<T>>>>

    /**
     * Create a BlogSection.
     * @param {BlogSectionCreateArgs} args - Arguments to create a BlogSection.
     * @example
     * // Create one BlogSection
     * const BlogSection = await prisma.blogSection.create({
     *   data: {
     *     // ... data to create a BlogSection
     *   }
     * })
     * 
    **/
    create<T extends BlogSectionCreateArgs>(
      args: SelectSubset<T, BlogSectionCreateArgs>
    ): CheckSelect<T, Prisma__BlogSectionClient<BlogSection>, Prisma__BlogSectionClient<BlogSectionGetPayload<T>>>

    /**
     * Create many BlogSections.
     *     @param {BlogSectionCreateManyArgs} args - Arguments to create many BlogSections.
     *     @example
     *     // Create many BlogSections
     *     const blogSection = await prisma.blogSection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlogSectionCreateManyArgs>(
      args?: SelectSubset<T, BlogSectionCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BlogSection.
     * @param {BlogSectionDeleteArgs} args - Arguments to delete one BlogSection.
     * @example
     * // Delete one BlogSection
     * const BlogSection = await prisma.blogSection.delete({
     *   where: {
     *     // ... filter to delete one BlogSection
     *   }
     * })
     * 
    **/
    delete<T extends BlogSectionDeleteArgs>(
      args: SelectSubset<T, BlogSectionDeleteArgs>
    ): CheckSelect<T, Prisma__BlogSectionClient<BlogSection>, Prisma__BlogSectionClient<BlogSectionGetPayload<T>>>

    /**
     * Update one BlogSection.
     * @param {BlogSectionUpdateArgs} args - Arguments to update one BlogSection.
     * @example
     * // Update one BlogSection
     * const blogSection = await prisma.blogSection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlogSectionUpdateArgs>(
      args: SelectSubset<T, BlogSectionUpdateArgs>
    ): CheckSelect<T, Prisma__BlogSectionClient<BlogSection>, Prisma__BlogSectionClient<BlogSectionGetPayload<T>>>

    /**
     * Delete zero or more BlogSections.
     * @param {BlogSectionDeleteManyArgs} args - Arguments to filter BlogSections to delete.
     * @example
     * // Delete a few BlogSections
     * const { count } = await prisma.blogSection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlogSectionDeleteManyArgs>(
      args?: SelectSubset<T, BlogSectionDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlogSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlogSections
     * const blogSection = await prisma.blogSection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlogSectionUpdateManyArgs>(
      args: SelectSubset<T, BlogSectionUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BlogSection.
     * @param {BlogSectionUpsertArgs} args - Arguments to update or create a BlogSection.
     * @example
     * // Update or create a BlogSection
     * const blogSection = await prisma.blogSection.upsert({
     *   create: {
     *     // ... data to create a BlogSection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlogSection we want to update
     *   }
     * })
    **/
    upsert<T extends BlogSectionUpsertArgs>(
      args: SelectSubset<T, BlogSectionUpsertArgs>
    ): CheckSelect<T, Prisma__BlogSectionClient<BlogSection>, Prisma__BlogSectionClient<BlogSectionGetPayload<T>>>

    /**
     * Count the number of BlogSections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSectionCountArgs} args - Arguments to filter BlogSections to count.
     * @example
     * // Count the number of BlogSections
     * const count = await prisma.blogSection.count({
     *   where: {
     *     // ... the filter for the BlogSections we want to count
     *   }
     * })
    **/
    count<T extends BlogSectionCountArgs>(
      args?: Subset<T, BlogSectionCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlogSectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlogSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BlogSectionAggregateArgs>(args: Subset<T, BlogSectionAggregateArgs>): PrismaPromise<GetBlogSectionAggregateType<T>>

    /**
     * Group by BlogSection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlogSectionGroupByArgs} args - Group by arguments.
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
      T extends BlogSectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlogSectionGroupByArgs['orderBy'] }
        : { orderBy?: BlogSectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BlogSectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlogSectionGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlogSection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BlogSectionClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    blog<T extends BlogArgs = {}>(args?: Subset<T, BlogArgs>): CheckSelect<T, Prisma__BlogClient<Blog | null >, Prisma__BlogClient<BlogGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * BlogSection findUnique
   */
  export type BlogSectionFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the BlogSection
     * 
    **/
    select?: BlogSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogSectionInclude | null
    /**
     * Throw an Error if a BlogSection can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BlogSection to fetch.
     * 
    **/
    where: BlogSectionWhereUniqueInput
  }


  /**
   * BlogSection findFirst
   */
  export type BlogSectionFindFirstArgs = {
    /**
     * Select specific fields to fetch from the BlogSection
     * 
    **/
    select?: BlogSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogSectionInclude | null
    /**
     * Throw an Error if a BlogSection can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BlogSection to fetch.
     * 
    **/
    where?: BlogSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogSections to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogSectionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlogSections.
     * 
    **/
    cursor?: BlogSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogSections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogSections.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlogSections.
     * 
    **/
    distinct?: Enumerable<BlogSectionScalarFieldEnum>
  }


  /**
   * BlogSection findMany
   */
  export type BlogSectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the BlogSection
     * 
    **/
    select?: BlogSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogSectionInclude | null
    /**
     * Filter, which BlogSections to fetch.
     * 
    **/
    where?: BlogSectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlogSections to fetch.
     * 
    **/
    orderBy?: Enumerable<BlogSectionOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlogSections.
     * 
    **/
    cursor?: BlogSectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlogSections from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlogSections.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BlogSectionScalarFieldEnum>
  }


  /**
   * BlogSection create
   */
  export type BlogSectionCreateArgs = {
    /**
     * Select specific fields to fetch from the BlogSection
     * 
    **/
    select?: BlogSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogSectionInclude | null
    /**
     * The data needed to create a BlogSection.
     * 
    **/
    data: XOR<BlogSectionCreateInput, BlogSectionUncheckedCreateInput>
  }


  /**
   * BlogSection createMany
   */
  export type BlogSectionCreateManyArgs = {
    data: Enumerable<BlogSectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BlogSection update
   */
  export type BlogSectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the BlogSection
     * 
    **/
    select?: BlogSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogSectionInclude | null
    /**
     * The data needed to update a BlogSection.
     * 
    **/
    data: XOR<BlogSectionUpdateInput, BlogSectionUncheckedUpdateInput>
    /**
     * Choose, which BlogSection to update.
     * 
    **/
    where: BlogSectionWhereUniqueInput
  }


  /**
   * BlogSection updateMany
   */
  export type BlogSectionUpdateManyArgs = {
    data: XOR<BlogSectionUpdateManyMutationInput, BlogSectionUncheckedUpdateManyInput>
    where?: BlogSectionWhereInput
  }


  /**
   * BlogSection upsert
   */
  export type BlogSectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the BlogSection
     * 
    **/
    select?: BlogSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogSectionInclude | null
    /**
     * The filter to search for the BlogSection to update in case it exists.
     * 
    **/
    where: BlogSectionWhereUniqueInput
    /**
     * In case the BlogSection found by the `where` argument doesn't exist, create a new BlogSection with this data.
     * 
    **/
    create: XOR<BlogSectionCreateInput, BlogSectionUncheckedCreateInput>
    /**
     * In case the BlogSection was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BlogSectionUpdateInput, BlogSectionUncheckedUpdateInput>
  }


  /**
   * BlogSection delete
   */
  export type BlogSectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the BlogSection
     * 
    **/
    select?: BlogSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogSectionInclude | null
    /**
     * Filter which BlogSection to delete.
     * 
    **/
    where: BlogSectionWhereUniqueInput
  }


  /**
   * BlogSection deleteMany
   */
  export type BlogSectionDeleteManyArgs = {
    where?: BlogSectionWhereInput
  }


  /**
   * BlogSection without action
   */
  export type BlogSectionArgs = {
    /**
     * Select specific fields to fetch from the BlogSection
     * 
    **/
    select?: BlogSectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BlogSectionInclude | null
  }



  /**
   * Model File
   */


  export type AggregateFile = {
    _count: FileCountAggregateOutputType | null
    count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
    max: FileMaxAggregateOutputType | null
  }

  export type FileAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
    blogId: number | null
  }

  export type FileSumAggregateOutputType = {
    id: number | null
    authorId: number | null
    blogId: number | null
  }

  export type FileMinAggregateOutputType = {
    id: number | null
    path: string | null
    url: string | null
    authorId: number | null
    blogId: number | null
  }

  export type FileMaxAggregateOutputType = {
    id: number | null
    path: string | null
    url: string | null
    authorId: number | null
    blogId: number | null
  }

  export type FileCountAggregateOutputType = {
    id: number
    path: number
    url: number
    authorId: number
    blogId: number
    _all: number
  }


  export type FileAvgAggregateInputType = {
    id?: true
    authorId?: true
    blogId?: true
  }

  export type FileSumAggregateInputType = {
    id?: true
    authorId?: true
    blogId?: true
  }

  export type FileMinAggregateInputType = {
    id?: true
    path?: true
    url?: true
    authorId?: true
    blogId?: true
  }

  export type FileMaxAggregateInputType = {
    id?: true
    path?: true
    url?: true
    authorId?: true
    blogId?: true
  }

  export type FileCountAggregateInputType = {
    id?: true
    path?: true
    url?: true
    authorId?: true
    blogId?: true
    _all?: true
  }

  export type FileAggregateArgs = {
    /**
     * Filter which File to aggregate.
     * 
    **/
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     * 
    **/
    orderBy?: Enumerable<FileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FileCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | FileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FileAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: FileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FileSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: FileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FileMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: FileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FileMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: FileMaxAggregateInputType
  }

  export type GetFileAggregateType<T extends FileAggregateArgs> = {
        [P in keyof T & keyof AggregateFile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFile[P]>
      : GetScalarType<T[P], AggregateFile[P]>
  }


    
    
  export type FileGroupByArgs = {
    where?: FileWhereInput
    orderBy?: Enumerable<FileOrderByInput>
    by: Array<FileScalarFieldEnum>
    having?: FileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FileCountAggregateInputType | true
    _avg?: FileAvgAggregateInputType
    _sum?: FileSumAggregateInputType
    _min?: FileMinAggregateInputType
    _max?: FileMaxAggregateInputType
  }


  export type FileGroupByOutputType = {
    id: number
    path: string
    url: string
    authorId: number
    blogId: number | null
    _count: FileCountAggregateOutputType | null
    _avg: FileAvgAggregateOutputType | null
    _sum: FileSumAggregateOutputType | null
    _min: FileMinAggregateOutputType | null
    _max: FileMaxAggregateOutputType | null
  }

  type GetFileGroupByPayload<T extends FileGroupByArgs> = Promise<
    Array<
      PickArray<FileGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof FileGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], FileGroupByOutputType[P]> 
            : GetScalarType<T[P], FileGroupByOutputType[P]>
        }
      > 
    >


  export type FileSelect = {
    id?: boolean
    path?: boolean
    url?: boolean
    author?: boolean | UserArgs
    authorId?: boolean
    blog?: boolean | BlogArgs
    blogId?: boolean
  }

  export type FileInclude = {
    author?: boolean | UserArgs
    blog?: boolean | BlogArgs
  }

  export type FileGetPayload<
    S extends boolean | null | undefined | FileArgs,
    U = keyof S
      > = S extends true
        ? File
    : S extends undefined
    ? never
    : S extends FileArgs | FileFindManyArgs
    ?'include' extends U
    ? File  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'author'
        ? UserGetPayload<S['include'][P]> :
        P extends 'blog'
        ? BlogGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof File ?File [P]
  : 
          P extends 'author'
        ? UserGetPayload<S['select'][P]> :
        P extends 'blog'
        ? BlogGetPayload<S['select'][P]> | null : never
  } 
    : File
  : File


  type FileCountArgs = Merge<
    Omit<FileFindManyArgs, 'select' | 'include'> & {
      select?: FileCountAggregateInputType | true
    }
  >

  export interface FileDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one File that matches the filter.
     * @param {FileFindUniqueArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FileFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FileFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'File'> extends True ? CheckSelect<T, Prisma__FileClient<File>, Prisma__FileClient<FileGetPayload<T>>> : CheckSelect<T, Prisma__FileClient<File | null >, Prisma__FileClient<FileGetPayload<T> | null >>

    /**
     * Find the first File that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindFirstArgs} args - Arguments to find a File
     * @example
     * // Get one File
     * const file = await prisma.file.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FileFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FileFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'File'> extends True ? CheckSelect<T, Prisma__FileClient<File>, Prisma__FileClient<FileGetPayload<T>>> : CheckSelect<T, Prisma__FileClient<File | null >, Prisma__FileClient<FileGetPayload<T> | null >>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.file.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.file.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fileWithIdOnly = await prisma.file.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FileFindManyArgs>(
      args?: SelectSubset<T, FileFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<File>>, PrismaPromise<Array<FileGetPayload<T>>>>

    /**
     * Create a File.
     * @param {FileCreateArgs} args - Arguments to create a File.
     * @example
     * // Create one File
     * const File = await prisma.file.create({
     *   data: {
     *     // ... data to create a File
     *   }
     * })
     * 
    **/
    create<T extends FileCreateArgs>(
      args: SelectSubset<T, FileCreateArgs>
    ): CheckSelect<T, Prisma__FileClient<File>, Prisma__FileClient<FileGetPayload<T>>>

    /**
     * Create many Files.
     *     @param {FileCreateManyArgs} args - Arguments to create many Files.
     *     @example
     *     // Create many Files
     *     const file = await prisma.file.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FileCreateManyArgs>(
      args?: SelectSubset<T, FileCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a File.
     * @param {FileDeleteArgs} args - Arguments to delete one File.
     * @example
     * // Delete one File
     * const File = await prisma.file.delete({
     *   where: {
     *     // ... filter to delete one File
     *   }
     * })
     * 
    **/
    delete<T extends FileDeleteArgs>(
      args: SelectSubset<T, FileDeleteArgs>
    ): CheckSelect<T, Prisma__FileClient<File>, Prisma__FileClient<FileGetPayload<T>>>

    /**
     * Update one File.
     * @param {FileUpdateArgs} args - Arguments to update one File.
     * @example
     * // Update one File
     * const file = await prisma.file.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FileUpdateArgs>(
      args: SelectSubset<T, FileUpdateArgs>
    ): CheckSelect<T, Prisma__FileClient<File>, Prisma__FileClient<FileGetPayload<T>>>

    /**
     * Delete zero or more Files.
     * @param {FileDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.file.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FileDeleteManyArgs>(
      args?: SelectSubset<T, FileDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const file = await prisma.file.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FileUpdateManyArgs>(
      args: SelectSubset<T, FileUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one File.
     * @param {FileUpsertArgs} args - Arguments to update or create a File.
     * @example
     * // Update or create a File
     * const file = await prisma.file.upsert({
     *   create: {
     *     // ... data to create a File
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the File we want to update
     *   }
     * })
    **/
    upsert<T extends FileUpsertArgs>(
      args: SelectSubset<T, FileUpsertArgs>
    ): CheckSelect<T, Prisma__FileClient<File>, Prisma__FileClient<FileGetPayload<T>>>

    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.file.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FileCountArgs>(
      args?: Subset<T, FileCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FileAggregateArgs>(args: Subset<T, FileAggregateArgs>): PrismaPromise<GetFileAggregateType<T>>

    /**
     * Group by File.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FileGroupByArgs} args - Group by arguments.
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
      T extends FileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FileGroupByArgs['orderBy'] }
        : { orderBy?: FileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFileGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for File.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FileClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    author<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    blog<T extends BlogArgs = {}>(args?: Subset<T, BlogArgs>): CheckSelect<T, Prisma__BlogClient<Blog | null >, Prisma__BlogClient<BlogGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * File findUnique
   */
  export type FileFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * Throw an Error if a File can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which File to fetch.
     * 
    **/
    where: FileWhereUniqueInput
  }


  /**
   * File findFirst
   */
  export type FileFindFirstArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * Throw an Error if a File can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which File to fetch.
     * 
    **/
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     * 
    **/
    orderBy?: Enumerable<FileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     * 
    **/
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     * 
    **/
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * File findMany
   */
  export type FileFindManyArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * Filter, which Files to fetch.
     * 
    **/
    where?: FileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     * 
    **/
    orderBy?: Enumerable<FileOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     * 
    **/
    cursor?: FileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FileScalarFieldEnum>
  }


  /**
   * File create
   */
  export type FileCreateArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * The data needed to create a File.
     * 
    **/
    data: XOR<FileCreateInput, FileUncheckedCreateInput>
  }


  /**
   * File createMany
   */
  export type FileCreateManyArgs = {
    data: Enumerable<FileCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * File update
   */
  export type FileUpdateArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * The data needed to update a File.
     * 
    **/
    data: XOR<FileUpdateInput, FileUncheckedUpdateInput>
    /**
     * Choose, which File to update.
     * 
    **/
    where: FileWhereUniqueInput
  }


  /**
   * File updateMany
   */
  export type FileUpdateManyArgs = {
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyInput>
    where?: FileWhereInput
  }


  /**
   * File upsert
   */
  export type FileUpsertArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * The filter to search for the File to update in case it exists.
     * 
    **/
    where: FileWhereUniqueInput
    /**
     * In case the File found by the `where` argument doesn't exist, create a new File with this data.
     * 
    **/
    create: XOR<FileCreateInput, FileUncheckedCreateInput>
    /**
     * In case the File was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FileUpdateInput, FileUncheckedUpdateInput>
  }


  /**
   * File delete
   */
  export type FileDeleteArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
    /**
     * Filter which File to delete.
     * 
    **/
    where: FileWhereUniqueInput
  }


  /**
   * File deleteMany
   */
  export type FileDeleteManyArgs = {
    where?: FileWhereInput
  }


  /**
   * File without action
   */
  export type FileArgs = {
    /**
     * Select specific fields to fetch from the File
     * 
    **/
    select?: FileSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FileInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    published: 'published',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    levelId: 'levelId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserLevelScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type UserLevelScalarFieldEnum = (typeof UserLevelScalarFieldEnum)[keyof typeof UserLevelScalarFieldEnum]


  export const BlogScalarFieldEnum: {
    id: 'id',
    authorId: 'authorId',
    slug: 'slug',
    title: 'title',
    body: 'body'
  };

  export type BlogScalarFieldEnum = (typeof BlogScalarFieldEnum)[keyof typeof BlogScalarFieldEnum]


  export const BlogSectionScalarFieldEnum: {
    id: 'id',
    order: 'order',
    model: 'model',
    json: 'json',
    blogId: 'blogId'
  };

  export type BlogSectionScalarFieldEnum = (typeof BlogSectionScalarFieldEnum)[keyof typeof BlogSectionScalarFieldEnum]


  export const FileScalarFieldEnum: {
    id: 'id',
    path: 'path',
    url: 'url',
    authorId: 'authorId',
    blogId: 'blogId'
  };

  export type FileScalarFieldEnum = (typeof FileScalarFieldEnum)[keyof typeof FileScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type PostWhereInput = {
    AND?: Enumerable<PostWhereInput>
    OR?: Enumerable<PostWhereInput>
    NOT?: Enumerable<PostWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    published?: BoolFilter | boolean
    author?: XOR<UserRelationFilter, UserWhereInput> | null
    authorId?: IntNullableFilter | number | null
  }

  export type PostOrderByInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostWhereUniqueInput = {
    id?: number
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PostScalarWhereWithAggregatesInput>
    OR?: Enumerable<PostScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PostScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    title?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
    published?: BoolWithAggregatesFilter | boolean
    authorId?: IntNullableWithAggregatesFilter | number | null
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringNullableFilter | string | null
    posts?: PostListRelationFilter
    blogs?: BlogListRelationFilter
    files?: FileListRelationFilter
    level?: XOR<UserLevelRelationFilter, UserLevelWhereInput>
    levelId?: IntFilter | number
  }

  export type UserOrderByInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    levelId?: SortOrder
  }

  export type UserWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    email?: StringWithAggregatesFilter | string
    name?: StringNullableWithAggregatesFilter | string | null
    levelId?: IntWithAggregatesFilter | number
  }

  export type UserLevelWhereInput = {
    AND?: Enumerable<UserLevelWhereInput>
    OR?: Enumerable<UserLevelWhereInput>
    NOT?: Enumerable<UserLevelWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    users?: UserListRelationFilter
  }

  export type UserLevelOrderByInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserLevelWhereUniqueInput = {
    id?: number
  }

  export type UserLevelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserLevelScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserLevelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserLevelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type BlogWhereInput = {
    AND?: Enumerable<BlogWhereInput>
    OR?: Enumerable<BlogWhereInput>
    NOT?: Enumerable<BlogWhereInput>
    id?: IntFilter | number
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: IntFilter | number
    slug?: StringFilter | string
    title?: StringFilter | string
    body?: StringFilter | string
    files?: FileListRelationFilter
    sections?: BlogSectionListRelationFilter
  }

  export type BlogOrderByInput = {
    id?: SortOrder
    authorId?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    body?: SortOrder
  }

  export type BlogWhereUniqueInput = {
    id?: number
    slug?: string
  }

  export type BlogScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BlogScalarWhereWithAggregatesInput>
    OR?: Enumerable<BlogScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BlogScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    authorId?: IntWithAggregatesFilter | number
    slug?: StringWithAggregatesFilter | string
    title?: StringWithAggregatesFilter | string
    body?: StringWithAggregatesFilter | string
  }

  export type BlogSectionWhereInput = {
    AND?: Enumerable<BlogSectionWhereInput>
    OR?: Enumerable<BlogSectionWhereInput>
    NOT?: Enumerable<BlogSectionWhereInput>
    id?: IntFilter | number
    order?: IntFilter | number
    model?: StringFilter | string
    json?: StringFilter | string
    blog?: XOR<BlogRelationFilter, BlogWhereInput>
    blogId?: IntFilter | number
  }

  export type BlogSectionOrderByInput = {
    id?: SortOrder
    order?: SortOrder
    model?: SortOrder
    json?: SortOrder
    blogId?: SortOrder
  }

  export type BlogSectionWhereUniqueInput = {
    id?: number
  }

  export type BlogSectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BlogSectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<BlogSectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BlogSectionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    order?: IntWithAggregatesFilter | number
    model?: StringWithAggregatesFilter | string
    json?: StringWithAggregatesFilter | string
    blogId?: IntWithAggregatesFilter | number
  }

  export type FileWhereInput = {
    AND?: Enumerable<FileWhereInput>
    OR?: Enumerable<FileWhereInput>
    NOT?: Enumerable<FileWhereInput>
    id?: IntFilter | number
    path?: StringFilter | string
    url?: StringFilter | string
    author?: XOR<UserRelationFilter, UserWhereInput>
    authorId?: IntFilter | number
    blog?: XOR<BlogRelationFilter, BlogWhereInput> | null
    blogId?: IntNullableFilter | number | null
  }

  export type FileOrderByInput = {
    id?: SortOrder
    path?: SortOrder
    url?: SortOrder
    authorId?: SortOrder
    blogId?: SortOrder
  }

  export type FileWhereUniqueInput = {
    id?: number
  }

  export type FileScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FileScalarWhereWithAggregatesInput>
    OR?: Enumerable<FileScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FileScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    path?: StringWithAggregatesFilter | string
    url?: StringWithAggregatesFilter | string
    authorId?: IntWithAggregatesFilter | number
    blogId?: IntNullableWithAggregatesFilter | number | null
  }

  export type PostCreateInput = {
    title: string
    content?: string | null
    published?: boolean
    author?: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
    authorId?: number | null
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneWithoutPostsInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
    authorId?: number | null
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    files?: FileCreateNestedManyWithoutAuthorInput
    level: UserLevelCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    levelId: number
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    files?: FileUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorInput
    blogs?: BlogUpdateManyWithoutAuthorInput
    files?: FileUpdateManyWithoutAuthorInput
    level?: UserLevelUpdateOneRequiredWithoutUsersInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    levelId?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    blogs?: BlogUncheckedUpdateManyWithoutAuthorInput
    files?: FileUncheckedUpdateManyWithoutAuthorInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    levelId: number
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    levelId?: IntFieldUpdateOperationsInput | number
  }

  export type UserLevelCreateInput = {
    name: string
    users?: UserCreateNestedManyWithoutLevelInput
  }

  export type UserLevelUncheckedCreateInput = {
    id?: number
    name: string
    users?: UserUncheckedCreateNestedManyWithoutLevelInput
  }

  export type UserLevelUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutLevelInput
  }

  export type UserLevelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutLevelInput
  }

  export type UserLevelCreateManyInput = {
    id?: number
    name: string
  }

  export type UserLevelUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserLevelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type BlogCreateInput = {
    slug: string
    title: string
    body: string
    author: UserCreateNestedOneWithoutBlogsInput
    files?: FileCreateNestedManyWithoutBlogInput
    sections?: BlogSectionCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateInput = {
    id?: number
    authorId: number
    slug: string
    title: string
    body: string
    files?: FileUncheckedCreateNestedManyWithoutBlogInput
    sections?: BlogSectionUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBlogsInput
    files?: FileUpdateManyWithoutBlogInput
    sections?: BlogSectionUpdateManyWithoutBlogInput
  }

  export type BlogUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    files?: FileUncheckedUpdateManyWithoutBlogInput
    sections?: BlogSectionUncheckedUpdateManyWithoutBlogInput
  }

  export type BlogCreateManyInput = {
    id?: number
    authorId: number
    slug: string
    title: string
    body: string
  }

  export type BlogUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type BlogUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type BlogSectionCreateInput = {
    order: number
    model: string
    json: string
    blog: BlogCreateNestedOneWithoutSectionsInput
  }

  export type BlogSectionUncheckedCreateInput = {
    id?: number
    order: number
    model: string
    json: string
    blogId: number
  }

  export type BlogSectionUpdateInput = {
    order?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    blog?: BlogUpdateOneRequiredWithoutSectionsInput
  }

  export type BlogSectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    blogId?: IntFieldUpdateOperationsInput | number
  }

  export type BlogSectionCreateManyInput = {
    id?: number
    order: number
    model: string
    json: string
    blogId: number
  }

  export type BlogSectionUpdateManyMutationInput = {
    order?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
  }

  export type BlogSectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
    blogId?: IntFieldUpdateOperationsInput | number
  }

  export type FileCreateInput = {
    path: string
    url: string
    author: UserCreateNestedOneWithoutFilesInput
    blog?: BlogCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateInput = {
    id?: number
    path: string
    url: string
    authorId: number
    blogId?: number | null
  }

  export type FileUpdateInput = {
    path?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutFilesInput
    blog?: BlogUpdateOneWithoutFilesInput
  }

  export type FileUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FileCreateManyInput = {
    id?: number
    path: string
    url: string
    authorId: number
    blogId?: number | null
  }

  export type FileUpdateManyMutationInput = {
    path?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
  }

  export type FileUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntNullableFilter
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type BlogListRelationFilter = {
    every?: BlogWhereInput
    some?: BlogWhereInput
    none?: BlogWhereInput
  }

  export type FileListRelationFilter = {
    every?: FileWhereInput
    some?: FileWhereInput
    none?: FileWhereInput
  }

  export type UserLevelRelationFilter = {
    is?: UserLevelWhereInput
    isNot?: UserLevelWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type BlogSectionListRelationFilter = {
    every?: BlogSectionWhereInput
    some?: BlogSectionWhereInput
    none?: BlogSectionWhereInput
  }

  export type BlogRelationFilter = {
    is?: BlogWhereInput | null
    isNot?: BlogWhereInput | null
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
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

  export type UserUpdateOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type BlogCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BlogCreateWithoutAuthorInput>, Enumerable<BlogUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BlogCreateOrConnectWithoutAuthorInput>
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: Enumerable<BlogWhereUniqueInput>
  }

  export type FileCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<FileCreateWithoutAuthorInput>, Enumerable<FileUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutAuthorInput>
    createMany?: FileCreateManyAuthorInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type UserLevelCreateNestedOneWithoutUsersInput = {
    create?: XOR<UserLevelCreateWithoutUsersInput, UserLevelUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserLevelCreateOrConnectWithoutUsersInput
    connect?: UserLevelWhereUniqueInput
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
  }

  export type BlogUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BlogCreateWithoutAuthorInput>, Enumerable<BlogUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BlogCreateOrConnectWithoutAuthorInput>
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: Enumerable<BlogWhereUniqueInput>
  }

  export type FileUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<Enumerable<FileCreateWithoutAuthorInput>, Enumerable<FileUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutAuthorInput>
    createMany?: FileCreateManyAuthorInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type PostUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type BlogUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BlogCreateWithoutAuthorInput>, Enumerable<BlogUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BlogCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<BlogUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: Enumerable<BlogWhereUniqueInput>
    set?: Enumerable<BlogWhereUniqueInput>
    disconnect?: Enumerable<BlogWhereUniqueInput>
    delete?: Enumerable<BlogWhereUniqueInput>
    update?: Enumerable<BlogUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<BlogUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<BlogScalarWhereInput>
  }

  export type FileUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<FileCreateWithoutAuthorInput>, Enumerable<FileUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: FileCreateManyAuthorInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type UserLevelUpdateOneRequiredWithoutUsersInput = {
    create?: XOR<UserLevelCreateWithoutUsersInput, UserLevelUncheckedCreateWithoutUsersInput>
    connectOrCreate?: UserLevelCreateOrConnectWithoutUsersInput
    upsert?: UserLevelUpsertWithoutUsersInput
    connect?: UserLevelWhereUniqueInput
    update?: XOR<UserLevelUpdateWithoutUsersInput, UserLevelUncheckedUpdateWithoutUsersInput>
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<PostCreateWithoutAuthorInput>, Enumerable<PostUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<PostCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<PostUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: Enumerable<PostWhereUniqueInput>
    set?: Enumerable<PostWhereUniqueInput>
    disconnect?: Enumerable<PostWhereUniqueInput>
    delete?: Enumerable<PostWhereUniqueInput>
    update?: Enumerable<PostUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<PostUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<PostScalarWhereInput>
  }

  export type BlogUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<BlogCreateWithoutAuthorInput>, Enumerable<BlogUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<BlogCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<BlogUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: BlogCreateManyAuthorInputEnvelope
    connect?: Enumerable<BlogWhereUniqueInput>
    set?: Enumerable<BlogWhereUniqueInput>
    disconnect?: Enumerable<BlogWhereUniqueInput>
    delete?: Enumerable<BlogWhereUniqueInput>
    update?: Enumerable<BlogUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<BlogUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<BlogScalarWhereInput>
  }

  export type FileUncheckedUpdateManyWithoutAuthorInput = {
    create?: XOR<Enumerable<FileCreateWithoutAuthorInput>, Enumerable<FileUncheckedCreateWithoutAuthorInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutAuthorInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutAuthorInput>
    createMany?: FileCreateManyAuthorInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutAuthorInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutAuthorInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type UserCreateNestedManyWithoutLevelInput = {
    create?: XOR<Enumerable<UserCreateWithoutLevelInput>, Enumerable<UserUncheckedCreateWithoutLevelInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLevelInput>
    createMany?: UserCreateManyLevelInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUncheckedCreateNestedManyWithoutLevelInput = {
    create?: XOR<Enumerable<UserCreateWithoutLevelInput>, Enumerable<UserUncheckedCreateWithoutLevelInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLevelInput>
    createMany?: UserCreateManyLevelInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
  }

  export type UserUpdateManyWithoutLevelInput = {
    create?: XOR<Enumerable<UserCreateWithoutLevelInput>, Enumerable<UserUncheckedCreateWithoutLevelInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLevelInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutLevelInput>
    createMany?: UserCreateManyLevelInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutLevelInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutLevelInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserUncheckedUpdateManyWithoutLevelInput = {
    create?: XOR<Enumerable<UserCreateWithoutLevelInput>, Enumerable<UserUncheckedCreateWithoutLevelInput>>
    connectOrCreate?: Enumerable<UserCreateOrConnectWithoutLevelInput>
    upsert?: Enumerable<UserUpsertWithWhereUniqueWithoutLevelInput>
    createMany?: UserCreateManyLevelInputEnvelope
    connect?: Enumerable<UserWhereUniqueInput>
    set?: Enumerable<UserWhereUniqueInput>
    disconnect?: Enumerable<UserWhereUniqueInput>
    delete?: Enumerable<UserWhereUniqueInput>
    update?: Enumerable<UserUpdateWithWhereUniqueWithoutLevelInput>
    updateMany?: Enumerable<UserUpdateManyWithWhereWithoutLevelInput>
    deleteMany?: Enumerable<UserScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutBlogsInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    connect?: UserWhereUniqueInput
  }

  export type FileCreateNestedManyWithoutBlogInput = {
    create?: XOR<Enumerable<FileCreateWithoutBlogInput>, Enumerable<FileUncheckedCreateWithoutBlogInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutBlogInput>
    createMany?: FileCreateManyBlogInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type BlogSectionCreateNestedManyWithoutBlogInput = {
    create?: XOR<Enumerable<BlogSectionCreateWithoutBlogInput>, Enumerable<BlogSectionUncheckedCreateWithoutBlogInput>>
    connectOrCreate?: Enumerable<BlogSectionCreateOrConnectWithoutBlogInput>
    createMany?: BlogSectionCreateManyBlogInputEnvelope
    connect?: Enumerable<BlogSectionWhereUniqueInput>
  }

  export type FileUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<Enumerable<FileCreateWithoutBlogInput>, Enumerable<FileUncheckedCreateWithoutBlogInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutBlogInput>
    createMany?: FileCreateManyBlogInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
  }

  export type BlogSectionUncheckedCreateNestedManyWithoutBlogInput = {
    create?: XOR<Enumerable<BlogSectionCreateWithoutBlogInput>, Enumerable<BlogSectionUncheckedCreateWithoutBlogInput>>
    connectOrCreate?: Enumerable<BlogSectionCreateOrConnectWithoutBlogInput>
    createMany?: BlogSectionCreateManyBlogInputEnvelope
    connect?: Enumerable<BlogSectionWhereUniqueInput>
  }

  export type UserUpdateOneRequiredWithoutBlogsInput = {
    create?: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutBlogsInput
    upsert?: UserUpsertWithoutBlogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
  }

  export type FileUpdateManyWithoutBlogInput = {
    create?: XOR<Enumerable<FileCreateWithoutBlogInput>, Enumerable<FileUncheckedCreateWithoutBlogInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutBlogInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutBlogInput>
    createMany?: FileCreateManyBlogInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutBlogInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutBlogInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type BlogSectionUpdateManyWithoutBlogInput = {
    create?: XOR<Enumerable<BlogSectionCreateWithoutBlogInput>, Enumerable<BlogSectionUncheckedCreateWithoutBlogInput>>
    connectOrCreate?: Enumerable<BlogSectionCreateOrConnectWithoutBlogInput>
    upsert?: Enumerable<BlogSectionUpsertWithWhereUniqueWithoutBlogInput>
    createMany?: BlogSectionCreateManyBlogInputEnvelope
    connect?: Enumerable<BlogSectionWhereUniqueInput>
    set?: Enumerable<BlogSectionWhereUniqueInput>
    disconnect?: Enumerable<BlogSectionWhereUniqueInput>
    delete?: Enumerable<BlogSectionWhereUniqueInput>
    update?: Enumerable<BlogSectionUpdateWithWhereUniqueWithoutBlogInput>
    updateMany?: Enumerable<BlogSectionUpdateManyWithWhereWithoutBlogInput>
    deleteMany?: Enumerable<BlogSectionScalarWhereInput>
  }

  export type FileUncheckedUpdateManyWithoutBlogInput = {
    create?: XOR<Enumerable<FileCreateWithoutBlogInput>, Enumerable<FileUncheckedCreateWithoutBlogInput>>
    connectOrCreate?: Enumerable<FileCreateOrConnectWithoutBlogInput>
    upsert?: Enumerable<FileUpsertWithWhereUniqueWithoutBlogInput>
    createMany?: FileCreateManyBlogInputEnvelope
    connect?: Enumerable<FileWhereUniqueInput>
    set?: Enumerable<FileWhereUniqueInput>
    disconnect?: Enumerable<FileWhereUniqueInput>
    delete?: Enumerable<FileWhereUniqueInput>
    update?: Enumerable<FileUpdateWithWhereUniqueWithoutBlogInput>
    updateMany?: Enumerable<FileUpdateManyWithWhereWithoutBlogInput>
    deleteMany?: Enumerable<FileScalarWhereInput>
  }

  export type BlogSectionUncheckedUpdateManyWithoutBlogInput = {
    create?: XOR<Enumerable<BlogSectionCreateWithoutBlogInput>, Enumerable<BlogSectionUncheckedCreateWithoutBlogInput>>
    connectOrCreate?: Enumerable<BlogSectionCreateOrConnectWithoutBlogInput>
    upsert?: Enumerable<BlogSectionUpsertWithWhereUniqueWithoutBlogInput>
    createMany?: BlogSectionCreateManyBlogInputEnvelope
    connect?: Enumerable<BlogSectionWhereUniqueInput>
    set?: Enumerable<BlogSectionWhereUniqueInput>
    disconnect?: Enumerable<BlogSectionWhereUniqueInput>
    delete?: Enumerable<BlogSectionWhereUniqueInput>
    update?: Enumerable<BlogSectionUpdateWithWhereUniqueWithoutBlogInput>
    updateMany?: Enumerable<BlogSectionUpdateManyWithWhereWithoutBlogInput>
    deleteMany?: Enumerable<BlogSectionScalarWhereInput>
  }

  export type BlogCreateNestedOneWithoutSectionsInput = {
    create?: XOR<BlogCreateWithoutSectionsInput, BlogUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutSectionsInput
    connect?: BlogWhereUniqueInput
  }

  export type BlogUpdateOneRequiredWithoutSectionsInput = {
    create?: XOR<BlogCreateWithoutSectionsInput, BlogUncheckedCreateWithoutSectionsInput>
    connectOrCreate?: BlogCreateOrConnectWithoutSectionsInput
    upsert?: BlogUpsertWithoutSectionsInput
    connect?: BlogWhereUniqueInput
    update?: XOR<BlogUpdateWithoutSectionsInput, BlogUncheckedUpdateWithoutSectionsInput>
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type BlogCreateNestedOneWithoutFilesInput = {
    create?: XOR<BlogCreateWithoutFilesInput, BlogUncheckedCreateWithoutFilesInput>
    connectOrCreate?: BlogCreateOrConnectWithoutFilesInput
    connect?: BlogWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
  }

  export type BlogUpdateOneWithoutFilesInput = {
    create?: XOR<BlogCreateWithoutFilesInput, BlogUncheckedCreateWithoutFilesInput>
    connectOrCreate?: BlogCreateOrConnectWithoutFilesInput
    upsert?: BlogUpsertWithoutFilesInput
    connect?: BlogWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<BlogUpdateWithoutFilesInput, BlogUncheckedUpdateWithoutFilesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolFilter
    _max?: NestedBoolFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    name?: string | null
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    files?: FileCreateNestedManyWithoutAuthorInput
    level: UserLevelCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    name?: string | null
    levelId: number
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    files?: FileUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    blogs?: BlogUpdateManyWithoutAuthorInput
    files?: FileUpdateManyWithoutAuthorInput
    level?: UserLevelUpdateOneRequiredWithoutUsersInput
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    levelId?: IntFieldUpdateOperationsInput | number
    blogs?: BlogUncheckedUpdateManyWithoutAuthorInput
    files?: FileUncheckedUpdateManyWithoutAuthorInput
  }

  export type PostCreateWithoutAuthorInput = {
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: Enumerable<PostCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type BlogCreateWithoutAuthorInput = {
    slug: string
    title: string
    body: string
    files?: FileCreateNestedManyWithoutBlogInput
    sections?: BlogSectionCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutAuthorInput = {
    id?: number
    slug: string
    title: string
    body: string
    files?: FileUncheckedCreateNestedManyWithoutBlogInput
    sections?: BlogSectionUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput>
  }

  export type BlogCreateManyAuthorInputEnvelope = {
    data: Enumerable<BlogCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type FileCreateWithoutAuthorInput = {
    path: string
    url: string
    blog?: BlogCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutAuthorInput = {
    id?: number
    path: string
    url: string
    blogId?: number | null
  }

  export type FileCreateOrConnectWithoutAuthorInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutAuthorInput, FileUncheckedCreateWithoutAuthorInput>
  }

  export type FileCreateManyAuthorInputEnvelope = {
    data: Enumerable<FileCreateManyAuthorInput>
    skipDuplicates?: boolean
  }

  export type UserLevelCreateWithoutUsersInput = {
    name: string
  }

  export type UserLevelUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
  }

  export type UserLevelCreateOrConnectWithoutUsersInput = {
    where: UserLevelWhereUniqueInput
    create: XOR<UserLevelCreateWithoutUsersInput, UserLevelUncheckedCreateWithoutUsersInput>
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutPostsInput>
  }

  export type PostScalarWhereInput = {
    AND?: Enumerable<PostScalarWhereInput>
    OR?: Enumerable<PostScalarWhereInput>
    NOT?: Enumerable<PostScalarWhereInput>
    id?: IntFilter | number
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    published?: BoolFilter | boolean
    authorId?: IntNullableFilter | number | null
  }

  export type BlogUpsertWithWhereUniqueWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    update: XOR<BlogUpdateWithoutAuthorInput, BlogUncheckedUpdateWithoutAuthorInput>
    create: XOR<BlogCreateWithoutAuthorInput, BlogUncheckedCreateWithoutAuthorInput>
  }

  export type BlogUpdateWithWhereUniqueWithoutAuthorInput = {
    where: BlogWhereUniqueInput
    data: XOR<BlogUpdateWithoutAuthorInput, BlogUncheckedUpdateWithoutAuthorInput>
  }

  export type BlogUpdateManyWithWhereWithoutAuthorInput = {
    where: BlogScalarWhereInput
    data: XOR<BlogUpdateManyMutationInput, BlogUncheckedUpdateManyWithoutBlogsInput>
  }

  export type BlogScalarWhereInput = {
    AND?: Enumerable<BlogScalarWhereInput>
    OR?: Enumerable<BlogScalarWhereInput>
    NOT?: Enumerable<BlogScalarWhereInput>
    id?: IntFilter | number
    authorId?: IntFilter | number
    slug?: StringFilter | string
    title?: StringFilter | string
    body?: StringFilter | string
  }

  export type FileUpsertWithWhereUniqueWithoutAuthorInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutAuthorInput, FileUncheckedUpdateWithoutAuthorInput>
    create: XOR<FileCreateWithoutAuthorInput, FileUncheckedCreateWithoutAuthorInput>
  }

  export type FileUpdateWithWhereUniqueWithoutAuthorInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutAuthorInput, FileUncheckedUpdateWithoutAuthorInput>
  }

  export type FileUpdateManyWithWhereWithoutAuthorInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutFilesInput>
  }

  export type FileScalarWhereInput = {
    AND?: Enumerable<FileScalarWhereInput>
    OR?: Enumerable<FileScalarWhereInput>
    NOT?: Enumerable<FileScalarWhereInput>
    id?: IntFilter | number
    path?: StringFilter | string
    url?: StringFilter | string
    authorId?: IntFilter | number
    blogId?: IntNullableFilter | number | null
  }

  export type UserLevelUpsertWithoutUsersInput = {
    update: XOR<UserLevelUpdateWithoutUsersInput, UserLevelUncheckedUpdateWithoutUsersInput>
    create: XOR<UserLevelCreateWithoutUsersInput, UserLevelUncheckedCreateWithoutUsersInput>
  }

  export type UserLevelUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserLevelUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutLevelInput = {
    email: string
    name?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    files?: FileCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateWithoutLevelInput = {
    id?: number
    email: string
    name?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
    files?: FileUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutLevelInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLevelInput, UserUncheckedCreateWithoutLevelInput>
  }

  export type UserCreateManyLevelInputEnvelope = {
    data: Enumerable<UserCreateManyLevelInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutLevelInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutLevelInput, UserUncheckedUpdateWithoutLevelInput>
    create: XOR<UserCreateWithoutLevelInput, UserUncheckedCreateWithoutLevelInput>
  }

  export type UserUpdateWithWhereUniqueWithoutLevelInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutLevelInput, UserUncheckedUpdateWithoutLevelInput>
  }

  export type UserUpdateManyWithWhereWithoutLevelInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUsersInput>
  }

  export type UserScalarWhereInput = {
    AND?: Enumerable<UserScalarWhereInput>
    OR?: Enumerable<UserScalarWhereInput>
    NOT?: Enumerable<UserScalarWhereInput>
    id?: IntFilter | number
    email?: StringFilter | string
    name?: StringNullableFilter | string | null
    levelId?: IntFilter | number
  }

  export type UserCreateWithoutBlogsInput = {
    email: string
    name?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    files?: FileCreateNestedManyWithoutAuthorInput
    level: UserLevelCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutBlogsInput = {
    id?: number
    email: string
    name?: string | null
    levelId: number
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    files?: FileUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutBlogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
  }

  export type FileCreateWithoutBlogInput = {
    path: string
    url: string
    author: UserCreateNestedOneWithoutFilesInput
  }

  export type FileUncheckedCreateWithoutBlogInput = {
    id?: number
    path: string
    url: string
    authorId: number
  }

  export type FileCreateOrConnectWithoutBlogInput = {
    where: FileWhereUniqueInput
    create: XOR<FileCreateWithoutBlogInput, FileUncheckedCreateWithoutBlogInput>
  }

  export type FileCreateManyBlogInputEnvelope = {
    data: Enumerable<FileCreateManyBlogInput>
    skipDuplicates?: boolean
  }

  export type BlogSectionCreateWithoutBlogInput = {
    order: number
    model: string
    json: string
  }

  export type BlogSectionUncheckedCreateWithoutBlogInput = {
    id?: number
    order: number
    model: string
    json: string
  }

  export type BlogSectionCreateOrConnectWithoutBlogInput = {
    where: BlogSectionWhereUniqueInput
    create: XOR<BlogSectionCreateWithoutBlogInput, BlogSectionUncheckedCreateWithoutBlogInput>
  }

  export type BlogSectionCreateManyBlogInputEnvelope = {
    data: Enumerable<BlogSectionCreateManyBlogInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBlogsInput = {
    update: XOR<UserUpdateWithoutBlogsInput, UserUncheckedUpdateWithoutBlogsInput>
    create: XOR<UserCreateWithoutBlogsInput, UserUncheckedCreateWithoutBlogsInput>
  }

  export type UserUpdateWithoutBlogsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorInput
    files?: FileUpdateManyWithoutAuthorInput
    level?: UserLevelUpdateOneRequiredWithoutUsersInput
  }

  export type UserUncheckedUpdateWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    levelId?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    files?: FileUncheckedUpdateManyWithoutAuthorInput
  }

  export type FileUpsertWithWhereUniqueWithoutBlogInput = {
    where: FileWhereUniqueInput
    update: XOR<FileUpdateWithoutBlogInput, FileUncheckedUpdateWithoutBlogInput>
    create: XOR<FileCreateWithoutBlogInput, FileUncheckedCreateWithoutBlogInput>
  }

  export type FileUpdateWithWhereUniqueWithoutBlogInput = {
    where: FileWhereUniqueInput
    data: XOR<FileUpdateWithoutBlogInput, FileUncheckedUpdateWithoutBlogInput>
  }

  export type FileUpdateManyWithWhereWithoutBlogInput = {
    where: FileScalarWhereInput
    data: XOR<FileUpdateManyMutationInput, FileUncheckedUpdateManyWithoutFilesInput>
  }

  export type BlogSectionUpsertWithWhereUniqueWithoutBlogInput = {
    where: BlogSectionWhereUniqueInput
    update: XOR<BlogSectionUpdateWithoutBlogInput, BlogSectionUncheckedUpdateWithoutBlogInput>
    create: XOR<BlogSectionCreateWithoutBlogInput, BlogSectionUncheckedCreateWithoutBlogInput>
  }

  export type BlogSectionUpdateWithWhereUniqueWithoutBlogInput = {
    where: BlogSectionWhereUniqueInput
    data: XOR<BlogSectionUpdateWithoutBlogInput, BlogSectionUncheckedUpdateWithoutBlogInput>
  }

  export type BlogSectionUpdateManyWithWhereWithoutBlogInput = {
    where: BlogSectionScalarWhereInput
    data: XOR<BlogSectionUpdateManyMutationInput, BlogSectionUncheckedUpdateManyWithoutSectionsInput>
  }

  export type BlogSectionScalarWhereInput = {
    AND?: Enumerable<BlogSectionScalarWhereInput>
    OR?: Enumerable<BlogSectionScalarWhereInput>
    NOT?: Enumerable<BlogSectionScalarWhereInput>
    id?: IntFilter | number
    order?: IntFilter | number
    model?: StringFilter | string
    json?: StringFilter | string
    blogId?: IntFilter | number
  }

  export type BlogCreateWithoutSectionsInput = {
    slug: string
    title: string
    body: string
    author: UserCreateNestedOneWithoutBlogsInput
    files?: FileCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutSectionsInput = {
    id?: number
    authorId: number
    slug: string
    title: string
    body: string
    files?: FileUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutSectionsInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutSectionsInput, BlogUncheckedCreateWithoutSectionsInput>
  }

  export type BlogUpsertWithoutSectionsInput = {
    update: XOR<BlogUpdateWithoutSectionsInput, BlogUncheckedUpdateWithoutSectionsInput>
    create: XOR<BlogCreateWithoutSectionsInput, BlogUncheckedCreateWithoutSectionsInput>
  }

  export type BlogUpdateWithoutSectionsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBlogsInput
    files?: FileUpdateManyWithoutBlogInput
  }

  export type BlogUncheckedUpdateWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    files?: FileUncheckedUpdateManyWithoutBlogInput
  }

  export type UserCreateWithoutFilesInput = {
    email: string
    name?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
    blogs?: BlogCreateNestedManyWithoutAuthorInput
    level: UserLevelCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    id?: number
    email: string
    name?: string | null
    levelId: number
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
    blogs?: BlogUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type BlogCreateWithoutFilesInput = {
    slug: string
    title: string
    body: string
    author: UserCreateNestedOneWithoutBlogsInput
    sections?: BlogSectionCreateNestedManyWithoutBlogInput
  }

  export type BlogUncheckedCreateWithoutFilesInput = {
    id?: number
    authorId: number
    slug: string
    title: string
    body: string
    sections?: BlogSectionUncheckedCreateNestedManyWithoutBlogInput
  }

  export type BlogCreateOrConnectWithoutFilesInput = {
    where: BlogWhereUniqueInput
    create: XOR<BlogCreateWithoutFilesInput, BlogUncheckedCreateWithoutFilesInput>
  }

  export type UserUpsertWithoutFilesInput = {
    update: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type UserUpdateWithoutFilesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorInput
    blogs?: BlogUpdateManyWithoutAuthorInput
    level?: UserLevelUpdateOneRequiredWithoutUsersInput
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    levelId?: IntFieldUpdateOperationsInput | number
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    blogs?: BlogUncheckedUpdateManyWithoutAuthorInput
  }

  export type BlogUpsertWithoutFilesInput = {
    update: XOR<BlogUpdateWithoutFilesInput, BlogUncheckedUpdateWithoutFilesInput>
    create: XOR<BlogCreateWithoutFilesInput, BlogUncheckedCreateWithoutFilesInput>
  }

  export type BlogUpdateWithoutFilesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutBlogsInput
    sections?: BlogSectionUpdateManyWithoutBlogInput
  }

  export type BlogUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    authorId?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    sections?: BlogSectionUncheckedUpdateManyWithoutBlogInput
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
  }

  export type BlogCreateManyAuthorInput = {
    id?: number
    slug: string
    title: string
    body: string
  }

  export type FileCreateManyAuthorInput = {
    id?: number
    path: string
    url: string
    blogId?: number | null
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlogUpdateWithoutAuthorInput = {
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    files?: FileUpdateManyWithoutBlogInput
    sections?: BlogSectionUpdateManyWithoutBlogInput
  }

  export type BlogUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    files?: FileUncheckedUpdateManyWithoutBlogInput
    sections?: BlogSectionUncheckedUpdateManyWithoutBlogInput
  }

  export type BlogUncheckedUpdateManyWithoutBlogsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
  }

  export type FileUpdateWithoutAuthorInput = {
    path?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blog?: BlogUpdateOneWithoutFilesInput
  }

  export type FileUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type FileUncheckedUpdateManyWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    blogId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type UserCreateManyLevelInput = {
    id?: number
    email: string
    name?: string | null
  }

  export type UserUpdateWithoutLevelInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorInput
    blogs?: BlogUpdateManyWithoutAuthorInput
    files?: FileUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateWithoutLevelInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorInput
    blogs?: BlogUncheckedUpdateManyWithoutAuthorInput
    files?: FileUncheckedUpdateManyWithoutAuthorInput
  }

  export type UserUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FileCreateManyBlogInput = {
    id?: number
    path: string
    url: string
    authorId: number
  }

  export type BlogSectionCreateManyBlogInput = {
    id?: number
    order: number
    model: string
    json: string
  }

  export type FileUpdateWithoutBlogInput = {
    path?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    author?: UserUpdateOneRequiredWithoutFilesInput
  }

  export type FileUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    path?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type BlogSectionUpdateWithoutBlogInput = {
    order?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
  }

  export type BlogSectionUncheckedUpdateWithoutBlogInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
  }

  export type BlogSectionUncheckedUpdateManyWithoutSectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order?: IntFieldUpdateOperationsInput | number
    model?: StringFieldUpdateOperationsInput | string
    json?: StringFieldUpdateOperationsInput | string
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
  export const dmmf: runtime.DMMF.Document;
}