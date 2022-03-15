import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Context } from './src/types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  EmailAddress: any;
  JSON: any;
  URL: any;
};

export type ChangeRossumPasswordInput = {
  new_password1?: InputMaybe<Scalars['String']>;
  new_password2?: InputMaybe<Scalars['String']>;
  old_password?: InputMaybe<Scalars['String']>;
};

export type CreateEmbeddedUrlForAnnotationResponse = {
  __typename?: 'CreateEmbeddedUrlForAnnotationResponse';
  status?: Maybe<RossumAnnotationStatus>;
  url?: Maybe<Scalars['URL']>;
};

export type CreateRossumConnectorInput = {
  authorization_token?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  queue: Array<Scalars['URL']>;
  service_url: Scalars['URL'];
};

export type CreateRossumHookInput = {
  config?: InputMaybe<RossumHookConfigInput>;
  events?: InputMaybe<Array<InputMaybe<RossumHookEvent>>>;
  name?: InputMaybe<Scalars['String']>;
  queues?: InputMaybe<Array<InputMaybe<Scalars['URL']>>>;
};

export type DeleteRossumConnectorInput = {
  id: Scalars['ID'];
};

export type DeleteRossumHookInput = {
  id: Scalars['ID'];
};

export type EmbeddedUrlResponse = {
  __typename?: 'EmbeddedUrlResponse';
  status?: Maybe<RossumAnnotationStatus>;
  url?: Maybe<Scalars['URL']>;
};

export type ListRossumDocumentsFilterInput = {
  arrived_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  original_file_name?: InputMaybe<Scalars['String']>;
};

export type ListRossumDocumentsInput = {
  filter?: InputMaybe<ListRossumDocumentsFilterInput>;
  order?: InputMaybe<ListRossumDocumentsOrderInput>;
};

export type ListRossumDocumentsOrderInput = {
  arrived_at?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['ID']>;
  mime_type?: InputMaybe<Scalars['String']>;
  original_file_name?: InputMaybe<Scalars['String']>;
  s3_name?: InputMaybe<Scalars['String']>;
};

export type ListRossumInboxesFilterInput = {
  bounce_deleted_annotations?: InputMaybe<Scalars['Boolean']>;
  bounce_email_to?: InputMaybe<Scalars['EmailAddress']>;
  bounce_postponed_annotations?: InputMaybe<Scalars['Boolean']>;
  bounce_unprocessable_attachments?: InputMaybe<Scalars['Boolean']>;
  email?: InputMaybe<Scalars['EmailAddress']>;
  email_prefix?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ListRossumInboxesInput = {
  filter?: InputMaybe<ListRossumInboxesFilterInput>;
};

export type ListRossumWorkspacesFilterInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
  organization?: InputMaybe<Scalars['ID']>;
};

export type ListRossumWorkspacesInput = {
  filter?: InputMaybe<ListRossumWorkspacesFilterInput>;
  order?: InputMaybe<ListRossumWorkspacesOrderInput>;
};

export type ListRossumWorkspacesOrderInput = {
  id?: InputMaybe<Scalars['ID']>;
  name?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword?: Maybe<RossumUser>;
  createConnector?: Maybe<RossumConnector>;
  createEmail?: Maybe<RossumEmail>;
  createHook?: Maybe<RossumHook>;
  createInbox?: Maybe<RossumInbox>;
  createMembership?: Maybe<RossumMembership>;
  createUser?: Maybe<RossumUser>;
  deleteConnector?: Maybe<RossumConnector>;
  deleteHook?: Maybe<RossumHook>;
  deleteInbox?: Maybe<RossumInbox>;
  deleteMembership?: Maybe<RossumMembership>;
  deleteUser?: Maybe<RossumUser>;
  login?: Maybe<RossumToken>;
  resetPassword?: Maybe<ResetRossumPasswordPayload>;
  sendEmail?: Maybe<RossumEmail>;
  testHook?: Maybe<TestRossumHookResponse>;
  updateConnector?: Maybe<RossumConnector>;
  updateEmail?: Maybe<RossumEmail>;
  updateHook?: Maybe<RossumHook>;
  updateInbox?: Maybe<RossumInbox>;
  updateMembership?: Maybe<RossumMembership>;
  updateUser?: Maybe<RossumUser>;
};


export type MutationChangePasswordArgs = {
  input: ChangeRossumPasswordInput;
};


export type MutationCreateConnectorArgs = {
  input: CreateRossumConnectorInput;
};


export type MutationCreateHookArgs = {
  input: CreateRossumHookInput;
};


export type MutationDeleteConnectorArgs = {
  input: DeleteRossumConnectorInput;
};


export type MutationDeleteHookArgs = {
  input: DeleteRossumHookInput;
};


export type MutationResetPasswordArgs = {
  input: ResetRossumPasswordInput;
};


export type MutationTestHookArgs = {
  input?: InputMaybe<TestRossumHookInput>;
};


export type MutationUpdateConnectorArgs = {
  input: UpdateRossumConnectorInput;
};


export type MutationUpdateHookArgs = {
  input: UpdateRossumHookInput;
};

export type Node = {
  id: Scalars['ID'];
};

export type Query = {
  __typename?: 'Query';
  createEmbeddedUrlForAnnotation?: Maybe<CreateEmbeddedUrlForAnnotationResponse>;
  listConnectors?: Maybe<Array<Maybe<RossumConnector>>>;
  listDocuments?: Maybe<Array<Maybe<RossumDocument>>>;
  listEmails?: Maybe<Array<Maybe<RossumEmail>>>;
  listHooks?: Maybe<Array<Maybe<RossumHook>>>;
  listInboxes?: Maybe<Array<Maybe<RossumInbox>>>;
  listMemberships?: Maybe<Array<Maybe<RossumMembership>>>;
  listPages?: Maybe<Array<Maybe<RossumPage>>>;
  listUserRoles?: Maybe<Array<Maybe<RossumUserRole>>>;
  listUsers?: Maybe<Array<Maybe<RossumUser>>>;
  listWorkspaces?: Maybe<Array<Maybe<RossumWorkspace>>>;
  retrieveConnector?: Maybe<RossumConnector>;
  retrieveDocument?: Maybe<RossumDocument>;
  retrieveEmail?: Maybe<RossumEmail>;
  retrieveHook?: Maybe<RossumHook>;
  retrieveInbox?: Maybe<RossumInbox>;
  retrieveMembership?: Maybe<RossumMembership>;
  retrievePage?: Maybe<RossumPage>;
  retrieveUser?: Maybe<RossumUser>;
  retrieveUserRole?: Maybe<RossumUserRole>;
  retrieveWorkspace?: Maybe<RossumWorkspace>;
  startAnnotation?: Maybe<StartAnnotationResponse>;
  startEmbeddedAnnotation?: Maybe<StartEmbeddedAnnotationResponse>;
  token?: Maybe<RossumToken>;
};


export type QueryListDocumentsArgs = {
  input?: InputMaybe<ListRossumDocumentsInput>;
};


export type QueryListInboxesArgs = {
  input?: InputMaybe<ListRossumInboxesInput>;
};


export type QueryListWorkspacesArgs = {
  input?: InputMaybe<ListRossumWorkspacesInput>;
};


export type QueryRetrieveDocumentArgs = {
  input: RetrieveRossumDocumentInput;
};


export type QueryRetrieveWorkspaceArgs = {
  input: RetrieveRossumWorkspaceInput;
};

export type ResetRossumPasswordInput = {
  email?: InputMaybe<Scalars['EmailAddress']>;
};

export type ResetRossumPasswordPayload = {
  __typename?: 'ResetRossumPasswordPayload';
  detail?: Maybe<Scalars['String']>;
};

export type RetrieveRossumDocumentInput = {
  id: Scalars['ID'];
};

export type RetrieveRossumWorkspaceInput = {
  id: Scalars['ID'];
};

export type RossumAnnotation = Node & RossumEntity & {
  __typename?: 'RossumAnnotation';
  assigned_at?: Maybe<Scalars['String']>;
  confirmed_at?: Maybe<Scalars['DateTime']>;
  content?: Maybe<Array<Maybe<RossumContentSection>>>;
  document?: Maybe<RossumDocument>;
  exported_at?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  messages?: Maybe<Array<Maybe<Scalars['String']>>>;
  modified_at?: Maybe<Scalars['DateTime']>;
  modifier?: Maybe<Scalars['String']>;
  pages?: Maybe<Array<Maybe<RossumPage>>>;
  queue?: Maybe<Scalars['String']>;
  relations?: Maybe<Array<Maybe<Scalars['String']>>>;
  rir_poll_id?: Maybe<Scalars['String']>;
  schema?: Maybe<RossumAnnotationSchema>;
  status?: Maybe<Scalars['String']>;
  time_spent?: Maybe<Scalars['Int']>;
  url: Scalars['URL'];
};

export type RossumAnnotationContent = Node & RossumEntity & {
  __typename?: 'RossumAnnotationContent';
  id: Scalars['ID'];
  url: Scalars['URL'];
};

export type RossumAnnotationSchema = {
  __typename?: 'RossumAnnotationSchema';
  id: Scalars['ID'];
};

export enum RossumAnnotationStatus {
  /** Annotation is validated and confirmed by the user. This status must be explicitly enabled on the queue to be present. */
  Confirmed = 'confirmed',
  /** When the annotation was deleted by the user. */
  Deleted = 'deleted',
  /** Annotation is validated and successfully passed all hooks; this is the typical terminal state of an annotation. */
  Exported = 'exported',
  /** Annotation is validated and is now awaiting the completion of connector save call. See connector extension for more information on this status. */
  Exporting = 'exporting',
  /** When the connector returned an error. */
  FailedExport = 'failed_export',
  /** Import failed e.g. due to a malformed document file. */
  FailedImport = 'failed_import',
  /** Document is being processed by the AI Engine for data extraction; initial state of the annotation. */
  Importing = 'importing',
  /** Operator has chosen to postpone the annotation instead of exporting it. */
  Postponed = 'postponed',
  /** Only metadata was preserved after a deletion. Internal status, shall not be used in production. */
  Purged = 'purged',
  /** Annotation is undergoing validation in the user interface. */
  Reviewing = 'reviewing',
  /** Annotation was split in user interface and new annotations were created from it. */
  Split = 'split',
  /** Initial extraction step is done and the annotation is waiting for user validation. */
  ToReview = 'to_review'
}

export type RossumConnector = Node & RossumEntity & {
  __typename?: 'RossumConnector';
  asynchronous?: Maybe<Scalars['Boolean']>;
  authorization_token?: Maybe<Scalars['String']>;
  client_ssl_certificate?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  name?: Maybe<Scalars['String']>;
  params?: Maybe<Scalars['String']>;
  queues?: Maybe<Array<Maybe<RossumQueue>>>;
  service_url?: Maybe<Scalars['URL']>;
  url: Scalars['URL'];
};

export type RossumContent = {
  category?: Maybe<Rossum_Content_Category>;
  schema_id?: Maybe<Scalars['String']>;
};

export type RossumContentSection = Node & RossumEntity & {
  __typename?: 'RossumContentSection';
  category?: Maybe<Rossum_Content_Category>;
  children?: Maybe<Array<Maybe<RossumContent>>>;
  id: Scalars['ID'];
  schema_id?: Maybe<Scalars['ID']>;
  url: Scalars['URL'];
};

export type RossumDatapoint = RossumContent & {
  __typename?: 'RossumDatapoint';
  category?: Maybe<Rossum_Content_Category>;
  rir_confidence?: Maybe<Scalars['String']>;
  schema_id?: Maybe<Scalars['String']>;
  type?: Maybe<Rossum_Content_Value_Type>;
  value?: Maybe<Scalars['String']>;
};

export type RossumDocument = Node & RossumEntity & {
  __typename?: 'RossumDocument';
  annotations?: Maybe<Array<Maybe<RossumAnnotation>>>;
  arrived_at?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  mime_type?: Maybe<Scalars['String']>;
  original?: Maybe<Scalars['String']>;
  original_file_name?: Maybe<Scalars['String']>;
  s3_name?: Maybe<Scalars['String']>;
  url: Scalars['URL'];
};

export type RossumEmail = Node & RossumEntity & {
  __typename?: 'RossumEmail';
  arrived_at?: Maybe<Scalars['DateTime']>;
  bcc?: Maybe<Array<Maybe<RossumEmailParticipant>>>;
  body_text_html?: Maybe<Scalars['String']>;
  body_text_plain?: Maybe<Scalars['String']>;
  cc?: Maybe<Array<Maybe<RossumEmailParticipant>>>;
  children?: Maybe<Array<Maybe<RossumEmail>>>;
  documents?: Maybe<Array<Maybe<RossumDocument>>>;
  from?: Maybe<RossumEmailParticipant>;
  id: Scalars['ID'];
  inbox?: Maybe<RossumInbox>;
  metadata?: Maybe<Scalars['JSON']>;
  parent?: Maybe<RossumEmail>;
  subject?: Maybe<Scalars['String']>;
  to?: Maybe<Array<Maybe<RossumEmailParticipant>>>;
  type?: Maybe<RossumEmailType>;
  url: Scalars['URL'];
};

export type RossumEmailParticipant = {
  __typename?: 'RossumEmailParticipant';
  email?: Maybe<Scalars['EmailAddress']>;
  name?: Maybe<Scalars['String']>;
};

export enum RossumEmailType {
  Incoming = 'incoming',
  Outgoing = 'outgoing'
}

export type RossumEntity = {
  url: Scalars['URL'];
};

export type RossumHook = Node & RossumEntity & {
  __typename?: 'RossumHook';
  active?: Maybe<Scalars['Boolean']>;
  config?: Maybe<RossumHookConfig>;
  events?: Maybe<Array<Maybe<RossumHookEvent>>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  queues?: Maybe<Array<Maybe<RossumQueue>>>;
  run_after?: Maybe<Array<Maybe<Scalars['String']>>>;
  sideload?: Maybe<Array<Maybe<Scalars['String']>>>;
  type?: Maybe<RossumHookType>;
  url: Scalars['URL'];
};

export type RossumHookConfig = {
  __typename?: 'RossumHookConfig';
  client_ssl_certificate?: Maybe<Scalars['String']>;
  insecure_ssl?: Maybe<Scalars['Boolean']>;
  secret?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type RossumHookConfigInput = {
  client_ssl_certificate?: InputMaybe<Scalars['String']>;
  insecure_ssl?: InputMaybe<Scalars['Boolean']>;
  secret?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
};

export enum RossumHookEvent {
  AnnotationContent = 'annotation_content',
  /** annotation_content.export */
  AnnotationContentExport = 'annotation_content__export',
  AnnotationContentInitialize = 'annotation_content__initialize',
  AnnotationContentUserUpdate = 'annotation_content__user_update',
  AnnotationStatus = 'annotation_status',
  AnnotationStatusChanged = 'annotation_status__changed',
  /** email.received */
  Email = 'email',
  EmailReceived = 'email__received'
}

export enum RossumHookType {
  Function = 'function',
  Webhook = 'webhook'
}

export type RossumInbox = Node & RossumEntity & {
  __typename?: 'RossumInbox';
  bounce_deleted_annotations?: Maybe<Scalars['Boolean']>;
  bounce_email_to?: Maybe<Scalars['EmailAddress']>;
  bounce_email_with_no_attachments?: Maybe<Scalars['Boolean']>;
  bounce_unprocessable_attachments?: Maybe<Scalars['Boolean']>;
  email?: Maybe<Scalars['EmailAddress']>;
  email_prefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  queues?: Maybe<Array<Maybe<Scalars['URL']>>>;
  url: Scalars['URL'];
};

export type RossumMembership = Node & RossumEntity & {
  __typename?: 'RossumMembership';
  id: Scalars['ID'];
  organization?: Maybe<RossumOrganization>;
  url: Scalars['URL'];
  user?: Maybe<RossumUser>;
};

export type RossumMultivalue = RossumContent & {
  __typename?: 'RossumMultivalue';
  category?: Maybe<Rossum_Content_Category>;
  children?: Maybe<Scalars['JSON']>;
  schema_id?: Maybe<Scalars['String']>;
};

export type RossumOrganization = Node & RossumEntity & {
  __typename?: 'RossumOrganization';
  id: Scalars['ID'];
  is_trial?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  trial_expires_at?: Maybe<Scalars['String']>;
  url: Scalars['URL'];
  users?: Maybe<Array<Maybe<RossumUser>>>;
  workspaces?: Maybe<Array<Maybe<RossumWorkspace>>>;
};

export type RossumPage = Node & RossumEntity & {
  __typename?: 'RossumPage';
  annotation?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['URL']>;
  id: Scalars['ID'];
  metadata?: Maybe<Scalars['JSON']>;
  mime_type?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  rotation_deg?: Maybe<Scalars['Int']>;
  s3_name?: Maybe<Scalars['String']>;
  url: Scalars['URL'];
};

export type RossumQueue = Node & RossumEntity & {
  __typename?: 'RossumQueue';
  export?: Maybe<Array<Maybe<RossumAnnotation>>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  url: Scalars['URL'];
  workspace?: Maybe<RossumWorkspace>;
};

export type RossumToken = {
  __typename?: 'RossumToken';
  key?: Maybe<Scalars['String']>;
};

export type RossumTuple = RossumContent & {
  __typename?: 'RossumTuple';
  category?: Maybe<Rossum_Content_Category>;
  schema_id?: Maybe<Scalars['String']>;
};

export type RossumUser = Node & RossumEntity & {
  __typename?: 'RossumUser';
  date_joined?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['EmailAddress']>;
  first_name?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Scalars['String']>>>;
  id: Scalars['ID'];
  is_active?: Maybe<Scalars['Boolean']>;
  last_login?: Maybe<Scalars['DateTime']>;
  last_name?: Maybe<Scalars['String']>;
  oidc_id?: Maybe<Scalars['String']>;
  organization?: Maybe<RossumOrganization>;
  queues?: Maybe<Array<Maybe<RossumUserRole>>>;
  url: Scalars['URL'];
  username?: Maybe<Scalars['String']>;
};

export type RossumUserRole = Node & RossumEntity & {
  __typename?: 'RossumUserRole';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  url: Scalars['URL'];
};

export type RossumWorkspace = Node & RossumEntity & {
  __typename?: 'RossumWorkspace';
  autopilot?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  organization?: Maybe<RossumOrganization>;
  queues?: Maybe<Array<Maybe<RossumQueue>>>;
  url: Scalars['URL'];
};

export enum Rossum_Content_Category {
  Datapoint = 'datapoint',
  Multivalue = 'multivalue',
  Section = 'section',
  Tuple = 'tuple'
}

export enum Rossum_Content_Value_Type {
  Number = 'number',
  String = 'string'
}

export type StartAnnotationResponse = {
  __typename?: 'StartAnnotationResponse';
  annotation?: Maybe<RossumAnnotation>;
  session_timeout?: Maybe<Scalars['String']>;
};

export type StartEmbeddedAnnotationResponse = {
  __typename?: 'StartEmbeddedAnnotationResponse';
  url?: Maybe<Scalars['URL']>;
};

export type TestRossumHookInput = {
  config?: InputMaybe<RossumHookConfigInput>;
  payload: TestRossumHookPayloadInput;
};

/** Payload sent to the Hook, please note only supported combination of action and event can be passed. */
export type TestRossumHookPayloadInput = {
  action?: InputMaybe<Scalars['String']>;
  annotation?: InputMaybe<Scalars['JSON']>;
  document?: InputMaybe<Scalars['JSON']>;
  event?: InputMaybe<RossumHookEvent>;
  settings?: InputMaybe<Scalars['JSON']>;
};

export type TestRossumHookResponse = {
  __typename?: 'TestRossumHookResponse';
  detail?: Maybe<Scalars['String']>;
};

export type UpdateRossumConnectorInput = {
  id: Scalars['ID'];
};

export type UpdateRossumHookInput = {
  config?: InputMaybe<RossumHookConfigInput>;
  events?: InputMaybe<Array<InputMaybe<RossumHookEvent>>>;
  id: Scalars['ID'];
  name?: InputMaybe<Scalars['String']>;
  queues?: InputMaybe<Array<InputMaybe<Scalars['URL']>>>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ChangeRossumPasswordInput: ChangeRossumPasswordInput;
  CreateEmbeddedUrlForAnnotationResponse: ResolverTypeWrapper<CreateEmbeddedUrlForAnnotationResponse>;
  CreateRossumConnectorInput: CreateRossumConnectorInput;
  CreateRossumHookInput: CreateRossumHookInput;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  DeleteRossumConnectorInput: DeleteRossumConnectorInput;
  DeleteRossumHookInput: DeleteRossumHookInput;
  EmailAddress: ResolverTypeWrapper<Scalars['EmailAddress']>;
  EmbeddedUrlResponse: ResolverTypeWrapper<EmbeddedUrlResponse>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JSON: ResolverTypeWrapper<Scalars['JSON']>;
  ListRossumDocumentsFilterInput: ListRossumDocumentsFilterInput;
  ListRossumDocumentsInput: ListRossumDocumentsInput;
  ListRossumDocumentsOrderInput: ListRossumDocumentsOrderInput;
  ListRossumInboxesFilterInput: ListRossumInboxesFilterInput;
  ListRossumInboxesInput: ListRossumInboxesInput;
  ListRossumWorkspacesFilterInput: ListRossumWorkspacesFilterInput;
  ListRossumWorkspacesInput: ListRossumWorkspacesInput;
  ListRossumWorkspacesOrderInput: ListRossumWorkspacesOrderInput;
  Mutation: ResolverTypeWrapper<{}>;
  Node: ResolversTypes['RossumAnnotation'] | ResolversTypes['RossumAnnotationContent'] | ResolversTypes['RossumConnector'] | ResolversTypes['RossumContentSection'] | ResolversTypes['RossumDocument'] | ResolversTypes['RossumEmail'] | ResolversTypes['RossumHook'] | ResolversTypes['RossumInbox'] | ResolversTypes['RossumMembership'] | ResolversTypes['RossumOrganization'] | ResolversTypes['RossumPage'] | ResolversTypes['RossumQueue'] | ResolversTypes['RossumUser'] | ResolversTypes['RossumUserRole'] | ResolversTypes['RossumWorkspace'];
  Query: ResolverTypeWrapper<{}>;
  ResetRossumPasswordInput: ResetRossumPasswordInput;
  ResetRossumPasswordPayload: ResolverTypeWrapper<ResetRossumPasswordPayload>;
  RetrieveRossumDocumentInput: RetrieveRossumDocumentInput;
  RetrieveRossumWorkspaceInput: RetrieveRossumWorkspaceInput;
  RossumAnnotation: ResolverTypeWrapper<RossumAnnotation>;
  RossumAnnotationContent: ResolverTypeWrapper<RossumAnnotationContent>;
  RossumAnnotationSchema: ResolverTypeWrapper<RossumAnnotationSchema>;
  RossumAnnotationStatus: RossumAnnotationStatus;
  RossumConnector: ResolverTypeWrapper<RossumConnector>;
  RossumContent: ResolversTypes['RossumDatapoint'] | ResolversTypes['RossumMultivalue'] | ResolversTypes['RossumTuple'];
  RossumContentSection: ResolverTypeWrapper<RossumContentSection>;
  RossumDatapoint: ResolverTypeWrapper<RossumDatapoint>;
  RossumDocument: ResolverTypeWrapper<RossumDocument>;
  RossumEmail: ResolverTypeWrapper<RossumEmail>;
  RossumEmailParticipant: ResolverTypeWrapper<RossumEmailParticipant>;
  RossumEmailType: RossumEmailType;
  RossumEntity: ResolversTypes['RossumAnnotation'] | ResolversTypes['RossumAnnotationContent'] | ResolversTypes['RossumConnector'] | ResolversTypes['RossumContentSection'] | ResolversTypes['RossumDocument'] | ResolversTypes['RossumEmail'] | ResolversTypes['RossumHook'] | ResolversTypes['RossumInbox'] | ResolversTypes['RossumMembership'] | ResolversTypes['RossumOrganization'] | ResolversTypes['RossumPage'] | ResolversTypes['RossumQueue'] | ResolversTypes['RossumUser'] | ResolversTypes['RossumUserRole'] | ResolversTypes['RossumWorkspace'];
  RossumHook: ResolverTypeWrapper<RossumHook>;
  RossumHookConfig: ResolverTypeWrapper<RossumHookConfig>;
  RossumHookConfigInput: RossumHookConfigInput;
  RossumHookEvent: RossumHookEvent;
  RossumHookType: RossumHookType;
  RossumInbox: ResolverTypeWrapper<RossumInbox>;
  RossumMembership: ResolverTypeWrapper<RossumMembership>;
  RossumMultivalue: ResolverTypeWrapper<RossumMultivalue>;
  RossumOrganization: ResolverTypeWrapper<RossumOrganization>;
  RossumPage: ResolverTypeWrapper<RossumPage>;
  RossumQueue: ResolverTypeWrapper<RossumQueue>;
  RossumToken: ResolverTypeWrapper<RossumToken>;
  RossumTuple: ResolverTypeWrapper<RossumTuple>;
  RossumUser: ResolverTypeWrapper<RossumUser>;
  RossumUserRole: ResolverTypeWrapper<RossumUserRole>;
  RossumWorkspace: ResolverTypeWrapper<RossumWorkspace>;
  Rossum_CONTENT_CATEGORY: Rossum_Content_Category;
  Rossum_CONTENT_VALUE_TYPE: Rossum_Content_Value_Type;
  StartAnnotationResponse: ResolverTypeWrapper<StartAnnotationResponse>;
  StartEmbeddedAnnotationResponse: ResolverTypeWrapper<StartEmbeddedAnnotationResponse>;
  String: ResolverTypeWrapper<Scalars['String']>;
  TestRossumHookInput: TestRossumHookInput;
  TestRossumHookPayloadInput: TestRossumHookPayloadInput;
  TestRossumHookResponse: ResolverTypeWrapper<TestRossumHookResponse>;
  URL: ResolverTypeWrapper<Scalars['URL']>;
  UpdateRossumConnectorInput: UpdateRossumConnectorInput;
  UpdateRossumHookInput: UpdateRossumHookInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  ChangeRossumPasswordInput: ChangeRossumPasswordInput;
  CreateEmbeddedUrlForAnnotationResponse: CreateEmbeddedUrlForAnnotationResponse;
  CreateRossumConnectorInput: CreateRossumConnectorInput;
  CreateRossumHookInput: CreateRossumHookInput;
  DateTime: Scalars['DateTime'];
  DeleteRossumConnectorInput: DeleteRossumConnectorInput;
  DeleteRossumHookInput: DeleteRossumHookInput;
  EmailAddress: Scalars['EmailAddress'];
  EmbeddedUrlResponse: EmbeddedUrlResponse;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  JSON: Scalars['JSON'];
  ListRossumDocumentsFilterInput: ListRossumDocumentsFilterInput;
  ListRossumDocumentsInput: ListRossumDocumentsInput;
  ListRossumDocumentsOrderInput: ListRossumDocumentsOrderInput;
  ListRossumInboxesFilterInput: ListRossumInboxesFilterInput;
  ListRossumInboxesInput: ListRossumInboxesInput;
  ListRossumWorkspacesFilterInput: ListRossumWorkspacesFilterInput;
  ListRossumWorkspacesInput: ListRossumWorkspacesInput;
  ListRossumWorkspacesOrderInput: ListRossumWorkspacesOrderInput;
  Mutation: {};
  Node: ResolversParentTypes['RossumAnnotation'] | ResolversParentTypes['RossumAnnotationContent'] | ResolversParentTypes['RossumConnector'] | ResolversParentTypes['RossumContentSection'] | ResolversParentTypes['RossumDocument'] | ResolversParentTypes['RossumEmail'] | ResolversParentTypes['RossumHook'] | ResolversParentTypes['RossumInbox'] | ResolversParentTypes['RossumMembership'] | ResolversParentTypes['RossumOrganization'] | ResolversParentTypes['RossumPage'] | ResolversParentTypes['RossumQueue'] | ResolversParentTypes['RossumUser'] | ResolversParentTypes['RossumUserRole'] | ResolversParentTypes['RossumWorkspace'];
  Query: {};
  ResetRossumPasswordInput: ResetRossumPasswordInput;
  ResetRossumPasswordPayload: ResetRossumPasswordPayload;
  RetrieveRossumDocumentInput: RetrieveRossumDocumentInput;
  RetrieveRossumWorkspaceInput: RetrieveRossumWorkspaceInput;
  RossumAnnotation: RossumAnnotation;
  RossumAnnotationContent: RossumAnnotationContent;
  RossumAnnotationSchema: RossumAnnotationSchema;
  RossumConnector: RossumConnector;
  RossumContent: ResolversParentTypes['RossumDatapoint'] | ResolversParentTypes['RossumMultivalue'] | ResolversParentTypes['RossumTuple'];
  RossumContentSection: RossumContentSection;
  RossumDatapoint: RossumDatapoint;
  RossumDocument: RossumDocument;
  RossumEmail: RossumEmail;
  RossumEmailParticipant: RossumEmailParticipant;
  RossumEntity: ResolversParentTypes['RossumAnnotation'] | ResolversParentTypes['RossumAnnotationContent'] | ResolversParentTypes['RossumConnector'] | ResolversParentTypes['RossumContentSection'] | ResolversParentTypes['RossumDocument'] | ResolversParentTypes['RossumEmail'] | ResolversParentTypes['RossumHook'] | ResolversParentTypes['RossumInbox'] | ResolversParentTypes['RossumMembership'] | ResolversParentTypes['RossumOrganization'] | ResolversParentTypes['RossumPage'] | ResolversParentTypes['RossumQueue'] | ResolversParentTypes['RossumUser'] | ResolversParentTypes['RossumUserRole'] | ResolversParentTypes['RossumWorkspace'];
  RossumHook: RossumHook;
  RossumHookConfig: RossumHookConfig;
  RossumHookConfigInput: RossumHookConfigInput;
  RossumInbox: RossumInbox;
  RossumMembership: RossumMembership;
  RossumMultivalue: RossumMultivalue;
  RossumOrganization: RossumOrganization;
  RossumPage: RossumPage;
  RossumQueue: RossumQueue;
  RossumToken: RossumToken;
  RossumTuple: RossumTuple;
  RossumUser: RossumUser;
  RossumUserRole: RossumUserRole;
  RossumWorkspace: RossumWorkspace;
  StartAnnotationResponse: StartAnnotationResponse;
  StartEmbeddedAnnotationResponse: StartEmbeddedAnnotationResponse;
  String: Scalars['String'];
  TestRossumHookInput: TestRossumHookInput;
  TestRossumHookPayloadInput: TestRossumHookPayloadInput;
  TestRossumHookResponse: TestRossumHookResponse;
  URL: Scalars['URL'];
  UpdateRossumConnectorInput: UpdateRossumConnectorInput;
  UpdateRossumHookInput: UpdateRossumHookInput;
};

export type CreateEmbeddedUrlForAnnotationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['CreateEmbeddedUrlForAnnotationResponse'] = ResolversParentTypes['CreateEmbeddedUrlForAnnotationResponse']> = {
  status?: Resolver<Maybe<ResolversTypes['RossumAnnotationStatus']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export interface EmailAddressScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['EmailAddress'], any> {
  name: 'EmailAddress';
}

export type EmbeddedUrlResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['EmbeddedUrlResponse'] = ResolversParentTypes['EmbeddedUrlResponse']> = {
  status?: Resolver<Maybe<ResolversTypes['RossumAnnotationStatus']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['JSON'], any> {
  name: 'JSON';
}

export type MutationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  changePassword?: Resolver<Maybe<ResolversTypes['RossumUser']>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, 'input'>>;
  createConnector?: Resolver<Maybe<ResolversTypes['RossumConnector']>, ParentType, ContextType, RequireFields<MutationCreateConnectorArgs, 'input'>>;
  createEmail?: Resolver<Maybe<ResolversTypes['RossumEmail']>, ParentType, ContextType>;
  createHook?: Resolver<Maybe<ResolversTypes['RossumHook']>, ParentType, ContextType, RequireFields<MutationCreateHookArgs, 'input'>>;
  createInbox?: Resolver<Maybe<ResolversTypes['RossumInbox']>, ParentType, ContextType>;
  createMembership?: Resolver<Maybe<ResolversTypes['RossumMembership']>, ParentType, ContextType>;
  createUser?: Resolver<Maybe<ResolversTypes['RossumUser']>, ParentType, ContextType>;
  deleteConnector?: Resolver<Maybe<ResolversTypes['RossumConnector']>, ParentType, ContextType, RequireFields<MutationDeleteConnectorArgs, 'input'>>;
  deleteHook?: Resolver<Maybe<ResolversTypes['RossumHook']>, ParentType, ContextType, RequireFields<MutationDeleteHookArgs, 'input'>>;
  deleteInbox?: Resolver<Maybe<ResolversTypes['RossumInbox']>, ParentType, ContextType>;
  deleteMembership?: Resolver<Maybe<ResolversTypes['RossumMembership']>, ParentType, ContextType>;
  deleteUser?: Resolver<Maybe<ResolversTypes['RossumUser']>, ParentType, ContextType>;
  login?: Resolver<Maybe<ResolversTypes['RossumToken']>, ParentType, ContextType>;
  resetPassword?: Resolver<Maybe<ResolversTypes['ResetRossumPasswordPayload']>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'input'>>;
  sendEmail?: Resolver<Maybe<ResolversTypes['RossumEmail']>, ParentType, ContextType>;
  testHook?: Resolver<Maybe<ResolversTypes['TestRossumHookResponse']>, ParentType, ContextType, Partial<MutationTestHookArgs>>;
  updateConnector?: Resolver<Maybe<ResolversTypes['RossumConnector']>, ParentType, ContextType, RequireFields<MutationUpdateConnectorArgs, 'input'>>;
  updateEmail?: Resolver<Maybe<ResolversTypes['RossumEmail']>, ParentType, ContextType>;
  updateHook?: Resolver<Maybe<ResolversTypes['RossumHook']>, ParentType, ContextType, RequireFields<MutationUpdateHookArgs, 'input'>>;
  updateInbox?: Resolver<Maybe<ResolversTypes['RossumInbox']>, ParentType, ContextType>;
  updateMembership?: Resolver<Maybe<ResolversTypes['RossumMembership']>, ParentType, ContextType>;
  updateUser?: Resolver<Maybe<ResolversTypes['RossumUser']>, ParentType, ContextType>;
};

export type NodeResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Node'] = ResolversParentTypes['Node']> = {
  __resolveType: TypeResolveFn<'RossumAnnotation' | 'RossumAnnotationContent' | 'RossumConnector' | 'RossumContentSection' | 'RossumDocument' | 'RossumEmail' | 'RossumHook' | 'RossumInbox' | 'RossumMembership' | 'RossumOrganization' | 'RossumPage' | 'RossumQueue' | 'RossumUser' | 'RossumUserRole' | 'RossumWorkspace', ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
};

export type QueryResolvers<ContextType = Context, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  createEmbeddedUrlForAnnotation?: Resolver<Maybe<ResolversTypes['CreateEmbeddedUrlForAnnotationResponse']>, ParentType, ContextType>;
  listConnectors?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumConnector']>>>, ParentType, ContextType>;
  listDocuments?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumDocument']>>>, ParentType, ContextType, Partial<QueryListDocumentsArgs>>;
  listEmails?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumEmail']>>>, ParentType, ContextType>;
  listHooks?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumHook']>>>, ParentType, ContextType>;
  listInboxes?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumInbox']>>>, ParentType, ContextType, Partial<QueryListInboxesArgs>>;
  listMemberships?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumMembership']>>>, ParentType, ContextType>;
  listPages?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumPage']>>>, ParentType, ContextType>;
  listUserRoles?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumUserRole']>>>, ParentType, ContextType>;
  listUsers?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumUser']>>>, ParentType, ContextType>;
  listWorkspaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumWorkspace']>>>, ParentType, ContextType, Partial<QueryListWorkspacesArgs>>;
  retrieveConnector?: Resolver<Maybe<ResolversTypes['RossumConnector']>, ParentType, ContextType>;
  retrieveDocument?: Resolver<Maybe<ResolversTypes['RossumDocument']>, ParentType, ContextType, RequireFields<QueryRetrieveDocumentArgs, 'input'>>;
  retrieveEmail?: Resolver<Maybe<ResolversTypes['RossumEmail']>, ParentType, ContextType>;
  retrieveHook?: Resolver<Maybe<ResolversTypes['RossumHook']>, ParentType, ContextType>;
  retrieveInbox?: Resolver<Maybe<ResolversTypes['RossumInbox']>, ParentType, ContextType>;
  retrieveMembership?: Resolver<Maybe<ResolversTypes['RossumMembership']>, ParentType, ContextType>;
  retrievePage?: Resolver<Maybe<ResolversTypes['RossumPage']>, ParentType, ContextType>;
  retrieveUser?: Resolver<Maybe<ResolversTypes['RossumUser']>, ParentType, ContextType>;
  retrieveUserRole?: Resolver<Maybe<ResolversTypes['RossumUserRole']>, ParentType, ContextType>;
  retrieveWorkspace?: Resolver<Maybe<ResolversTypes['RossumWorkspace']>, ParentType, ContextType, RequireFields<QueryRetrieveWorkspaceArgs, 'input'>>;
  startAnnotation?: Resolver<Maybe<ResolversTypes['StartAnnotationResponse']>, ParentType, ContextType>;
  startEmbeddedAnnotation?: Resolver<Maybe<ResolversTypes['StartEmbeddedAnnotationResponse']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['RossumToken']>, ParentType, ContextType>;
};

export type ResetRossumPasswordPayloadResolvers<ContextType = Context, ParentType extends ResolversParentTypes['ResetRossumPasswordPayload'] = ResolversParentTypes['ResetRossumPasswordPayload']> = {
  detail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumAnnotationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumAnnotation'] = ResolversParentTypes['RossumAnnotation']> = {
  assigned_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  confirmed_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  content?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumContentSection']>>>, ParentType, ContextType>;
  document?: Resolver<Maybe<ResolversTypes['RossumDocument']>, ParentType, ContextType>;
  exported_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  messages?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  modified_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  modifier?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  pages?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumPage']>>>, ParentType, ContextType>;
  queue?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  relations?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  rir_poll_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schema?: Resolver<Maybe<ResolversTypes['RossumAnnotationSchema']>, ParentType, ContextType>;
  status?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  time_spent?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumAnnotationContentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumAnnotationContent'] = ResolversParentTypes['RossumAnnotationContent']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumAnnotationSchemaResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumAnnotationSchema'] = ResolversParentTypes['RossumAnnotationSchema']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumConnectorResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumConnector'] = ResolversParentTypes['RossumConnector']> = {
  asynchronous?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  authorization_token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  client_ssl_certificate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  params?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  queues?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumQueue']>>>, ParentType, ContextType>;
  service_url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumContentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumContent'] = ResolversParentTypes['RossumContent']> = {
  __resolveType: TypeResolveFn<'RossumDatapoint' | 'RossumMultivalue' | 'RossumTuple', ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['Rossum_CONTENT_CATEGORY']>, ParentType, ContextType>;
  schema_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
};

export type RossumContentSectionResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumContentSection'] = ResolversParentTypes['RossumContentSection']> = {
  category?: Resolver<Maybe<ResolversTypes['Rossum_CONTENT_CATEGORY']>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumContent']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  schema_id?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumDatapointResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumDatapoint'] = ResolversParentTypes['RossumDatapoint']> = {
  category?: Resolver<Maybe<ResolversTypes['Rossum_CONTENT_CATEGORY']>, ParentType, ContextType>;
  rir_confidence?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  schema_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['Rossum_CONTENT_VALUE_TYPE']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumDocumentResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumDocument'] = ResolversParentTypes['RossumDocument']> = {
  annotations?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumAnnotation']>>>, ParentType, ContextType>;
  arrived_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  file?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  mime_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  original?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  original_file_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  s3_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumEmailResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumEmail'] = ResolversParentTypes['RossumEmail']> = {
  arrived_at?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  bcc?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumEmailParticipant']>>>, ParentType, ContextType>;
  body_text_html?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  body_text_plain?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  cc?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumEmailParticipant']>>>, ParentType, ContextType>;
  children?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumEmail']>>>, ParentType, ContextType>;
  documents?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumDocument']>>>, ParentType, ContextType>;
  from?: Resolver<Maybe<ResolversTypes['RossumEmailParticipant']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  inbox?: Resolver<Maybe<ResolversTypes['RossumInbox']>, ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  parent?: Resolver<Maybe<ResolversTypes['RossumEmail']>, ParentType, ContextType>;
  subject?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  to?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumEmailParticipant']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RossumEmailType']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumEmailParticipantResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumEmailParticipant'] = ResolversParentTypes['RossumEmailParticipant']> = {
  email?: Resolver<Maybe<ResolversTypes['EmailAddress']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumEntityResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumEntity'] = ResolversParentTypes['RossumEntity']> = {
  __resolveType: TypeResolveFn<'RossumAnnotation' | 'RossumAnnotationContent' | 'RossumConnector' | 'RossumContentSection' | 'RossumDocument' | 'RossumEmail' | 'RossumHook' | 'RossumInbox' | 'RossumMembership' | 'RossumOrganization' | 'RossumPage' | 'RossumQueue' | 'RossumUser' | 'RossumUserRole' | 'RossumWorkspace', ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
};

export type RossumHookResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumHook'] = ResolversParentTypes['RossumHook']> = {
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  config?: Resolver<Maybe<ResolversTypes['RossumHookConfig']>, ParentType, ContextType>;
  events?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumHookEvent']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  queues?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumQueue']>>>, ParentType, ContextType>;
  run_after?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  sideload?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['RossumHookType']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumHookConfigResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumHookConfig'] = ResolversParentTypes['RossumHookConfig']> = {
  client_ssl_certificate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  insecure_ssl?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  secret?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumInboxResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumInbox'] = ResolversParentTypes['RossumInbox']> = {
  bounce_deleted_annotations?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bounce_email_to?: Resolver<Maybe<ResolversTypes['EmailAddress']>, ParentType, ContextType>;
  bounce_email_with_no_attachments?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  bounce_unprocessable_attachments?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EmailAddress']>, ParentType, ContextType>;
  email_prefix?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  queues?: Resolver<Maybe<Array<Maybe<ResolversTypes['URL']>>>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumMembershipResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumMembership'] = ResolversParentTypes['RossumMembership']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['RossumOrganization']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  user?: Resolver<Maybe<ResolversTypes['RossumUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumMultivalueResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumMultivalue'] = ResolversParentTypes['RossumMultivalue']> = {
  category?: Resolver<Maybe<ResolversTypes['Rossum_CONTENT_CATEGORY']>, ParentType, ContextType>;
  children?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  schema_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumOrganizationResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumOrganization'] = ResolversParentTypes['RossumOrganization']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_trial?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  trial_expires_at?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  users?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumUser']>>>, ParentType, ContextType>;
  workspaces?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumWorkspace']>>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumPageResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumPage'] = ResolversParentTypes['RossumPage']> = {
  annotation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  content?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  metadata?: Resolver<Maybe<ResolversTypes['JSON']>, ParentType, ContextType>;
  mime_type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  rotation_deg?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  s3_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumQueueResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumQueue'] = ResolversParentTypes['RossumQueue']> = {
  export?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumAnnotation']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  workspace?: Resolver<Maybe<ResolversTypes['RossumWorkspace']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumTokenResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumToken'] = ResolversParentTypes['RossumToken']> = {
  key?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumTupleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumTuple'] = ResolversParentTypes['RossumTuple']> = {
  category?: Resolver<Maybe<ResolversTypes['Rossum_CONTENT_CATEGORY']>, ParentType, ContextType>;
  schema_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumUserResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumUser'] = ResolversParentTypes['RossumUser']> = {
  date_joined?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['EmailAddress']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  groups?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  is_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  last_login?: Resolver<Maybe<ResolversTypes['DateTime']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  oidc_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['RossumOrganization']>, ParentType, ContextType>;
  queues?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumUserRole']>>>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  username?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumUserRoleResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumUserRole'] = ResolversParentTypes['RossumUserRole']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RossumWorkspaceResolvers<ContextType = Context, ParentType extends ResolversParentTypes['RossumWorkspace'] = ResolversParentTypes['RossumWorkspace']> = {
  autopilot?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  organization?: Resolver<Maybe<ResolversTypes['RossumOrganization']>, ParentType, ContextType>;
  queues?: Resolver<Maybe<Array<Maybe<ResolversTypes['RossumQueue']>>>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes['URL'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StartAnnotationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StartAnnotationResponse'] = ResolversParentTypes['StartAnnotationResponse']> = {
  annotation?: Resolver<Maybe<ResolversTypes['RossumAnnotation']>, ParentType, ContextType>;
  session_timeout?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type StartEmbeddedAnnotationResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['StartEmbeddedAnnotationResponse'] = ResolversParentTypes['StartEmbeddedAnnotationResponse']> = {
  url?: Resolver<Maybe<ResolversTypes['URL']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TestRossumHookResponseResolvers<ContextType = Context, ParentType extends ResolversParentTypes['TestRossumHookResponse'] = ResolversParentTypes['TestRossumHookResponse']> = {
  detail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['URL'], any> {
  name: 'URL';
}

export type Resolvers<ContextType = Context> = {
  CreateEmbeddedUrlForAnnotationResponse?: CreateEmbeddedUrlForAnnotationResponseResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  EmailAddress?: GraphQLScalarType;
  EmbeddedUrlResponse?: EmbeddedUrlResponseResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Node?: NodeResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ResetRossumPasswordPayload?: ResetRossumPasswordPayloadResolvers<ContextType>;
  RossumAnnotation?: RossumAnnotationResolvers<ContextType>;
  RossumAnnotationContent?: RossumAnnotationContentResolvers<ContextType>;
  RossumAnnotationSchema?: RossumAnnotationSchemaResolvers<ContextType>;
  RossumConnector?: RossumConnectorResolvers<ContextType>;
  RossumContent?: RossumContentResolvers<ContextType>;
  RossumContentSection?: RossumContentSectionResolvers<ContextType>;
  RossumDatapoint?: RossumDatapointResolvers<ContextType>;
  RossumDocument?: RossumDocumentResolvers<ContextType>;
  RossumEmail?: RossumEmailResolvers<ContextType>;
  RossumEmailParticipant?: RossumEmailParticipantResolvers<ContextType>;
  RossumEntity?: RossumEntityResolvers<ContextType>;
  RossumHook?: RossumHookResolvers<ContextType>;
  RossumHookConfig?: RossumHookConfigResolvers<ContextType>;
  RossumInbox?: RossumInboxResolvers<ContextType>;
  RossumMembership?: RossumMembershipResolvers<ContextType>;
  RossumMultivalue?: RossumMultivalueResolvers<ContextType>;
  RossumOrganization?: RossumOrganizationResolvers<ContextType>;
  RossumPage?: RossumPageResolvers<ContextType>;
  RossumQueue?: RossumQueueResolvers<ContextType>;
  RossumToken?: RossumTokenResolvers<ContextType>;
  RossumTuple?: RossumTupleResolvers<ContextType>;
  RossumUser?: RossumUserResolvers<ContextType>;
  RossumUserRole?: RossumUserRoleResolvers<ContextType>;
  RossumWorkspace?: RossumWorkspaceResolvers<ContextType>;
  StartAnnotationResponse?: StartAnnotationResponseResolvers<ContextType>;
  StartEmbeddedAnnotationResponse?: StartEmbeddedAnnotationResponseResolvers<ContextType>;
  TestRossumHookResponse?: TestRossumHookResponseResolvers<ContextType>;
  URL?: GraphQLScalarType;
};

