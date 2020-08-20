export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  uuid: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** columns and relationships of "collections" */
export type Collections = {
  __typename?: 'collections';
  amount: Scalars['Int'];
  colony_id: Scalars['uuid'];
  date: Scalars['date'];
  id: Scalars['uuid'];
};

/** aggregated selection of "collections" */
export type Collections_Aggregate = {
  __typename?: 'collections_aggregate';
  aggregate?: Maybe<Collections_Aggregate_Fields>;
  nodes: Array<Collections>;
};

/** aggregate fields of "collections" */
export type Collections_Aggregate_Fields = {
  __typename?: 'collections_aggregate_fields';
  avg?: Maybe<Collections_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Collections_Max_Fields>;
  min?: Maybe<Collections_Min_Fields>;
  stddev?: Maybe<Collections_Stddev_Fields>;
  stddev_pop?: Maybe<Collections_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Collections_Stddev_Samp_Fields>;
  sum?: Maybe<Collections_Sum_Fields>;
  var_pop?: Maybe<Collections_Var_Pop_Fields>;
  var_samp?: Maybe<Collections_Var_Samp_Fields>;
  variance?: Maybe<Collections_Variance_Fields>;
};


/** aggregate fields of "collections" */
export type Collections_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Collections_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "collections" */
export type Collections_Aggregate_Order_By = {
  avg?: Maybe<Collections_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Collections_Max_Order_By>;
  min?: Maybe<Collections_Min_Order_By>;
  stddev?: Maybe<Collections_Stddev_Order_By>;
  stddev_pop?: Maybe<Collections_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Collections_Stddev_Samp_Order_By>;
  sum?: Maybe<Collections_Sum_Order_By>;
  var_pop?: Maybe<Collections_Var_Pop_Order_By>;
  var_samp?: Maybe<Collections_Var_Samp_Order_By>;
  variance?: Maybe<Collections_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "collections" */
export type Collections_Arr_Rel_Insert_Input = {
  data: Array<Collections_Insert_Input>;
  on_conflict?: Maybe<Collections_On_Conflict>;
};

/** aggregate avg on columns */
export type Collections_Avg_Fields = {
  __typename?: 'collections_avg_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "collections" */
export type Collections_Avg_Order_By = {
  amount?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "collections". All fields are combined with a logical 'AND'. */
export type Collections_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Collections_Bool_Exp>>>;
  _not?: Maybe<Collections_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Collections_Bool_Exp>>>;
  amount?: Maybe<Int_Comparison_Exp>;
  colony_id?: Maybe<Uuid_Comparison_Exp>;
  date?: Maybe<Date_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "collections" */
export enum Collections_Constraint {
  /** unique or primary key constraint */
  CollectionsPkey = 'collections_pkey'
}

/** input type for incrementing integer column in table "collections" */
export type Collections_Inc_Input = {
  amount?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "collections" */
export type Collections_Insert_Input = {
  amount?: Maybe<Scalars['Int']>;
  colony_id?: Maybe<Scalars['uuid']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Collections_Max_Fields = {
  __typename?: 'collections_max_fields';
  amount?: Maybe<Scalars['Int']>;
  colony_id?: Maybe<Scalars['uuid']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "collections" */
export type Collections_Max_Order_By = {
  amount?: Maybe<Order_By>;
  colony_id?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Collections_Min_Fields = {
  __typename?: 'collections_min_fields';
  amount?: Maybe<Scalars['Int']>;
  colony_id?: Maybe<Scalars['uuid']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "collections" */
export type Collections_Min_Order_By = {
  amount?: Maybe<Order_By>;
  colony_id?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "collections" */
export type Collections_Mutation_Response = {
  __typename?: 'collections_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Collections>;
};

/** input type for inserting object relation for remote table "collections" */
export type Collections_Obj_Rel_Insert_Input = {
  data: Collections_Insert_Input;
  on_conflict?: Maybe<Collections_On_Conflict>;
};

/** on conflict condition type for table "collections" */
export type Collections_On_Conflict = {
  constraint: Collections_Constraint;
  update_columns: Array<Collections_Update_Column>;
  where?: Maybe<Collections_Bool_Exp>;
};

/** ordering options when selecting data from "collections" */
export type Collections_Order_By = {
  amount?: Maybe<Order_By>;
  colony_id?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "collections" */
export type Collections_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "collections" */
export enum Collections_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ColonyId = 'colony_id',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "collections" */
export type Collections_Set_Input = {
  amount?: Maybe<Scalars['Int']>;
  colony_id?: Maybe<Scalars['uuid']>;
  date?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Collections_Stddev_Fields = {
  __typename?: 'collections_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "collections" */
export type Collections_Stddev_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Collections_Stddev_Pop_Fields = {
  __typename?: 'collections_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "collections" */
export type Collections_Stddev_Pop_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Collections_Stddev_Samp_Fields = {
  __typename?: 'collections_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "collections" */
export type Collections_Stddev_Samp_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Collections_Sum_Fields = {
  __typename?: 'collections_sum_fields';
  amount?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "collections" */
export type Collections_Sum_Order_By = {
  amount?: Maybe<Order_By>;
};

/** update columns of table "collections" */
export enum Collections_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  ColonyId = 'colony_id',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Collections_Var_Pop_Fields = {
  __typename?: 'collections_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "collections" */
export type Collections_Var_Pop_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Collections_Var_Samp_Fields = {
  __typename?: 'collections_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "collections" */
export type Collections_Var_Samp_Order_By = {
  amount?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Collections_Variance_Fields = {
  __typename?: 'collections_variance_fields';
  amount?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "collections" */
export type Collections_Variance_Order_By = {
  amount?: Maybe<Order_By>;
};

/** columns and relationships of "colonies" */
export type Colonies = {
  __typename?: 'colonies';
  bees: Scalars['Int'];
  hives: Scalars['Int'];
  id: Scalars['uuid'];
};

/** aggregated selection of "colonies" */
export type Colonies_Aggregate = {
  __typename?: 'colonies_aggregate';
  aggregate?: Maybe<Colonies_Aggregate_Fields>;
  nodes: Array<Colonies>;
};

/** aggregate fields of "colonies" */
export type Colonies_Aggregate_Fields = {
  __typename?: 'colonies_aggregate_fields';
  avg?: Maybe<Colonies_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Colonies_Max_Fields>;
  min?: Maybe<Colonies_Min_Fields>;
  stddev?: Maybe<Colonies_Stddev_Fields>;
  stddev_pop?: Maybe<Colonies_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Colonies_Stddev_Samp_Fields>;
  sum?: Maybe<Colonies_Sum_Fields>;
  var_pop?: Maybe<Colonies_Var_Pop_Fields>;
  var_samp?: Maybe<Colonies_Var_Samp_Fields>;
  variance?: Maybe<Colonies_Variance_Fields>;
};


/** aggregate fields of "colonies" */
export type Colonies_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Colonies_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "colonies" */
export type Colonies_Aggregate_Order_By = {
  avg?: Maybe<Colonies_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Colonies_Max_Order_By>;
  min?: Maybe<Colonies_Min_Order_By>;
  stddev?: Maybe<Colonies_Stddev_Order_By>;
  stddev_pop?: Maybe<Colonies_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Colonies_Stddev_Samp_Order_By>;
  sum?: Maybe<Colonies_Sum_Order_By>;
  var_pop?: Maybe<Colonies_Var_Pop_Order_By>;
  var_samp?: Maybe<Colonies_Var_Samp_Order_By>;
  variance?: Maybe<Colonies_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "colonies" */
export type Colonies_Arr_Rel_Insert_Input = {
  data: Array<Colonies_Insert_Input>;
  on_conflict?: Maybe<Colonies_On_Conflict>;
};

/** aggregate avg on columns */
export type Colonies_Avg_Fields = {
  __typename?: 'colonies_avg_fields';
  bees?: Maybe<Scalars['Float']>;
  hives?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "colonies" */
export type Colonies_Avg_Order_By = {
  bees?: Maybe<Order_By>;
  hives?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "colonies". All fields are combined with a logical 'AND'. */
export type Colonies_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Colonies_Bool_Exp>>>;
  _not?: Maybe<Colonies_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Colonies_Bool_Exp>>>;
  bees?: Maybe<Int_Comparison_Exp>;
  hives?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "colonies" */
export enum Colonies_Constraint {
  /** unique or primary key constraint */
  ColoniesPkey = 'colonies_pkey'
}

/** input type for incrementing integer column in table "colonies" */
export type Colonies_Inc_Input = {
  bees?: Maybe<Scalars['Int']>;
  hives?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "colonies" */
export type Colonies_Insert_Input = {
  bees?: Maybe<Scalars['Int']>;
  hives?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Colonies_Max_Fields = {
  __typename?: 'colonies_max_fields';
  bees?: Maybe<Scalars['Int']>;
  hives?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "colonies" */
export type Colonies_Max_Order_By = {
  bees?: Maybe<Order_By>;
  hives?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Colonies_Min_Fields = {
  __typename?: 'colonies_min_fields';
  bees?: Maybe<Scalars['Int']>;
  hives?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "colonies" */
export type Colonies_Min_Order_By = {
  bees?: Maybe<Order_By>;
  hives?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** response of any mutation on the table "colonies" */
export type Colonies_Mutation_Response = {
  __typename?: 'colonies_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Colonies>;
};

/** input type for inserting object relation for remote table "colonies" */
export type Colonies_Obj_Rel_Insert_Input = {
  data: Colonies_Insert_Input;
  on_conflict?: Maybe<Colonies_On_Conflict>;
};

/** on conflict condition type for table "colonies" */
export type Colonies_On_Conflict = {
  constraint: Colonies_Constraint;
  update_columns: Array<Colonies_Update_Column>;
  where?: Maybe<Colonies_Bool_Exp>;
};

/** ordering options when selecting data from "colonies" */
export type Colonies_Order_By = {
  bees?: Maybe<Order_By>;
  hives?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** primary key columns input for table: "colonies" */
export type Colonies_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "colonies" */
export enum Colonies_Select_Column {
  /** column name */
  Bees = 'bees',
  /** column name */
  Hives = 'hives',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "colonies" */
export type Colonies_Set_Input = {
  bees?: Maybe<Scalars['Int']>;
  hives?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Colonies_Stddev_Fields = {
  __typename?: 'colonies_stddev_fields';
  bees?: Maybe<Scalars['Float']>;
  hives?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "colonies" */
export type Colonies_Stddev_Order_By = {
  bees?: Maybe<Order_By>;
  hives?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Colonies_Stddev_Pop_Fields = {
  __typename?: 'colonies_stddev_pop_fields';
  bees?: Maybe<Scalars['Float']>;
  hives?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "colonies" */
export type Colonies_Stddev_Pop_Order_By = {
  bees?: Maybe<Order_By>;
  hives?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Colonies_Stddev_Samp_Fields = {
  __typename?: 'colonies_stddev_samp_fields';
  bees?: Maybe<Scalars['Float']>;
  hives?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "colonies" */
export type Colonies_Stddev_Samp_Order_By = {
  bees?: Maybe<Order_By>;
  hives?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Colonies_Sum_Fields = {
  __typename?: 'colonies_sum_fields';
  bees?: Maybe<Scalars['Int']>;
  hives?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "colonies" */
export type Colonies_Sum_Order_By = {
  bees?: Maybe<Order_By>;
  hives?: Maybe<Order_By>;
};

/** update columns of table "colonies" */
export enum Colonies_Update_Column {
  /** column name */
  Bees = 'bees',
  /** column name */
  Hives = 'hives',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Colonies_Var_Pop_Fields = {
  __typename?: 'colonies_var_pop_fields';
  bees?: Maybe<Scalars['Float']>;
  hives?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "colonies" */
export type Colonies_Var_Pop_Order_By = {
  bees?: Maybe<Order_By>;
  hives?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Colonies_Var_Samp_Fields = {
  __typename?: 'colonies_var_samp_fields';
  bees?: Maybe<Scalars['Float']>;
  hives?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "colonies" */
export type Colonies_Var_Samp_Order_By = {
  bees?: Maybe<Order_By>;
  hives?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Colonies_Variance_Fields = {
  __typename?: 'colonies_variance_fields';
  bees?: Maybe<Scalars['Float']>;
  hives?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "colonies" */
export type Colonies_Variance_Order_By = {
  bees?: Maybe<Order_By>;
  hives?: Maybe<Order_By>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "collections" */
  delete_collections?: Maybe<Collections_Mutation_Response>;
  /** delete single row from the table: "collections" */
  delete_collections_by_pk?: Maybe<Collections>;
  /** delete data from the table: "colonies" */
  delete_colonies?: Maybe<Colonies_Mutation_Response>;
  /** delete single row from the table: "colonies" */
  delete_colonies_by_pk?: Maybe<Colonies>;
  /** insert data into the table: "collections" */
  insert_collections?: Maybe<Collections_Mutation_Response>;
  /** insert a single row into the table: "collections" */
  insert_collections_one?: Maybe<Collections>;
  /** insert data into the table: "colonies" */
  insert_colonies?: Maybe<Colonies_Mutation_Response>;
  /** insert a single row into the table: "colonies" */
  insert_colonies_one?: Maybe<Colonies>;
  /** update data of the table: "collections" */
  update_collections?: Maybe<Collections_Mutation_Response>;
  /** update single row of the table: "collections" */
  update_collections_by_pk?: Maybe<Collections>;
  /** update data of the table: "colonies" */
  update_colonies?: Maybe<Colonies_Mutation_Response>;
  /** update single row of the table: "colonies" */
  update_colonies_by_pk?: Maybe<Colonies>;
};


/** mutation root */
export type Mutation_RootDelete_CollectionsArgs = {
  where: Collections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Collections_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ColoniesArgs = {
  where: Colonies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Colonies_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_CollectionsArgs = {
  objects: Array<Collections_Insert_Input>;
  on_conflict?: Maybe<Collections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collections_OneArgs = {
  object: Collections_Insert_Input;
  on_conflict?: Maybe<Collections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ColoniesArgs = {
  objects: Array<Colonies_Insert_Input>;
  on_conflict?: Maybe<Colonies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Colonies_OneArgs = {
  object: Colonies_Insert_Input;
  on_conflict?: Maybe<Colonies_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_CollectionsArgs = {
  _inc?: Maybe<Collections_Inc_Input>;
  _set?: Maybe<Collections_Set_Input>;
  where: Collections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Collections_By_PkArgs = {
  _inc?: Maybe<Collections_Inc_Input>;
  _set?: Maybe<Collections_Set_Input>;
  pk_columns: Collections_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ColoniesArgs = {
  _inc?: Maybe<Colonies_Inc_Input>;
  _set?: Maybe<Colonies_Set_Input>;
  where: Colonies_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Colonies_By_PkArgs = {
  _inc?: Maybe<Colonies_Inc_Input>;
  _set?: Maybe<Colonies_Set_Input>;
  pk_columns: Colonies_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "collections" */
  collections: Array<Collections>;
  /** fetch aggregated fields from the table: "collections" */
  collections_aggregate: Collections_Aggregate;
  /** fetch data from the table: "collections" using primary key columns */
  collections_by_pk?: Maybe<Collections>;
  /** fetch data from the table: "colonies" */
  colonies: Array<Colonies>;
  /** fetch aggregated fields from the table: "colonies" */
  colonies_aggregate: Colonies_Aggregate;
  /** fetch data from the table: "colonies" using primary key columns */
  colonies_by_pk?: Maybe<Colonies>;
};


/** query root */
export type Query_RootCollectionsArgs = {
  distinct_on?: Maybe<Array<Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collections_Order_By>>;
  where?: Maybe<Collections_Bool_Exp>;
};


/** query root */
export type Query_RootCollections_AggregateArgs = {
  distinct_on?: Maybe<Array<Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collections_Order_By>>;
  where?: Maybe<Collections_Bool_Exp>;
};


/** query root */
export type Query_RootCollections_By_PkArgs = {
  id: Scalars['uuid'];
};


/** query root */
export type Query_RootColoniesArgs = {
  distinct_on?: Maybe<Array<Colonies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Colonies_Order_By>>;
  where?: Maybe<Colonies_Bool_Exp>;
};


/** query root */
export type Query_RootColonies_AggregateArgs = {
  distinct_on?: Maybe<Array<Colonies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Colonies_Order_By>>;
  where?: Maybe<Colonies_Bool_Exp>;
};


/** query root */
export type Query_RootColonies_By_PkArgs = {
  id: Scalars['uuid'];
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "collections" */
  collections: Array<Collections>;
  /** fetch aggregated fields from the table: "collections" */
  collections_aggregate: Collections_Aggregate;
  /** fetch data from the table: "collections" using primary key columns */
  collections_by_pk?: Maybe<Collections>;
  /** fetch data from the table: "colonies" */
  colonies: Array<Colonies>;
  /** fetch aggregated fields from the table: "colonies" */
  colonies_aggregate: Colonies_Aggregate;
  /** fetch data from the table: "colonies" using primary key columns */
  colonies_by_pk?: Maybe<Colonies>;
};


/** subscription root */
export type Subscription_RootCollectionsArgs = {
  distinct_on?: Maybe<Array<Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collections_Order_By>>;
  where?: Maybe<Collections_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCollections_AggregateArgs = {
  distinct_on?: Maybe<Array<Collections_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Collections_Order_By>>;
  where?: Maybe<Collections_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootCollections_By_PkArgs = {
  id: Scalars['uuid'];
};


/** subscription root */
export type Subscription_RootColoniesArgs = {
  distinct_on?: Maybe<Array<Colonies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Colonies_Order_By>>;
  where?: Maybe<Colonies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootColonies_AggregateArgs = {
  distinct_on?: Maybe<Array<Colonies_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Colonies_Order_By>>;
  where?: Maybe<Colonies_Bool_Exp>;
};


/** subscription root */
export type Subscription_RootColonies_By_PkArgs = {
  id: Scalars['uuid'];
};


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type AllColoniesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllColoniesQuery = (
  { __typename?: 'query_root' }
  & { colonies: Array<(
    { __typename?: 'colonies' }
    & Pick<Colonies, 'id' | 'hives' | 'bees'>
  )> }
);

export type CreateColonyMutationVariables = Exact<{
  bees: Scalars['Int'];
  hives: Scalars['Int'];
}>;


export type CreateColonyMutation = (
  { __typename?: 'mutation_root' }
  & { insert_colonies?: Maybe<(
    { __typename?: 'colonies_mutation_response' }
    & { returning: Array<(
      { __typename?: 'colonies' }
      & Pick<Colonies, 'id' | 'hives' | 'bees'>
    )> }
  )> }
);
