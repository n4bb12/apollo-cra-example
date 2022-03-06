import { GraphQLResolveInfo } from "graphql"
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type AddBookResponse = MutationResponse & {
  __typename?: "AddBookResponse"
  book?: Maybe<Book>
  code: Scalars["String"]
  message: Scalars["String"]
  success: Scalars["Boolean"]
}

export type Author = {
  __typename?: "Author"
  name: Scalars["String"]
}

export type Book = {
  __typename?: "Book"
  authorName?: Maybe<Scalars["String"]>
  title?: Maybe<Scalars["String"]>
}

export type Mutation = {
  __typename?: "Mutation"
  addBook?: Maybe<AddBookResponse>
}

export type MutationAddBookArgs = {
  authorName?: InputMaybe<Scalars["String"]>
  title?: InputMaybe<Scalars["String"]>
}

export type MutationResponse = {
  code: Scalars["String"]
  message: Scalars["String"]
  success: Scalars["Boolean"]
}

export type Query = {
  __typename?: "Query"
  authors: Array<Author>
  books: Array<Book>
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs,
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {},
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo,
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {},
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AddBookResponse: ResolverTypeWrapper<AddBookResponse>
  Author: ResolverTypeWrapper<Author>
  Book: ResolverTypeWrapper<Book>
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>
  Mutation: ResolverTypeWrapper<{}>
  MutationResponse: ResolversTypes["AddBookResponse"]
  Query: ResolverTypeWrapper<{}>
  String: ResolverTypeWrapper<Scalars["String"]>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AddBookResponse: AddBookResponse
  Author: Author
  Book: Book
  Boolean: Scalars["Boolean"]
  Mutation: {}
  MutationResponse: ResolversParentTypes["AddBookResponse"]
  Query: {}
  String: Scalars["String"]
}

export type AddBookResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["AddBookResponse"] = ResolversParentTypes["AddBookResponse"],
> = {
  book?: Resolver<Maybe<ResolversTypes["Book"]>, ParentType, ContextType>
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type AuthorResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Author"] = ResolversParentTypes["Author"],
> = {
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type BookResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Book"] = ResolversParentTypes["Book"],
> = {
  authorName?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
  addBook?: Resolver<
    Maybe<ResolversTypes["AddBookResponse"]>,
    ParentType,
    ContextType,
    Partial<MutationAddBookArgs>
  >
}

export type MutationResponseResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MutationResponse"] = ResolversParentTypes["MutationResponse"],
> = {
  __resolveType: TypeResolveFn<"AddBookResponse", ParentType, ContextType>
  code?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  message?: Resolver<ResolversTypes["String"], ParentType, ContextType>
  success?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
  authors?: Resolver<Array<ResolversTypes["Author"]>, ParentType, ContextType>
  books?: Resolver<Array<ResolversTypes["Book"]>, ParentType, ContextType>
}

export type Resolvers<ContextType = any> = {
  AddBookResponse?: AddBookResponseResolvers<ContextType>
  Author?: AuthorResolvers<ContextType>
  Book?: BookResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  MutationResponse?: MutationResponseResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
}
