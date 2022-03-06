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
