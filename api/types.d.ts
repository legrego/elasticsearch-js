/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

export interface BulkCreateOperation extends BulkOperation {
}

export interface BulkCreateResponseItem extends BulkResponseItemBase {
}

export interface BulkDeleteOperation extends BulkOperation {
}

export interface BulkDeleteResponseItem extends BulkResponseItemBase {
}

export interface BulkIndexOperation extends BulkOperation {
}

export interface BulkIndexResponseItem extends BulkResponseItemBase {
}

export interface BulkOperation {
  _id: Id
  _index: IndexName
  retry_on_conflict: integer
  routing: Routing
  version: VersionNumber
  version_type: VersionType
}

export interface BulkOperationContainer {
  index?: BulkIndexOperation
  create?: BulkCreateOperation
  update?: BulkUpdateOperation
  delete?: BulkDeleteOperation
}

export interface BulkRequest<TSource = unknown> extends RequestBase {
  index?: IndexName
  type?: Type
  pipeline?: string
  refresh?: Refresh
  routing?: Routing
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  require_alias?: boolean
  body?: (BulkOperationContainer | TSource)[]
}

export interface BulkResponse {
  errors: boolean
  items: BulkResponseItemContainer[]
  took: long
  ingest_took?: long
}

export interface BulkResponseItemBase {
  _id?: string | null
  _index: string
  status: integer
  error?: ErrorCause
  _primary_term?: long
  result?: string
  _seq_no?: SequenceNumber
  _shards?: ShardStatistics
  _type?: string
  _version?: VersionNumber
  forced_refresh?: boolean
  get?: InlineGet<Record<string, any>>
}

export interface BulkResponseItemContainer {
  index?: BulkIndexResponseItem
  create?: BulkCreateResponseItem
  update?: BulkUpdateResponseItem
  delete?: BulkDeleteResponseItem
}

export interface BulkUpdateOperation extends BulkOperation {
}

export interface BulkUpdateResponseItem extends BulkResponseItemBase {
}

export interface ClearScrollRequest extends RequestBase {
  scroll_id?: Ids
  body?: {
    scroll_id?: Ids
  }
}

export interface ClearScrollResponse {
  succeeded: boolean
  num_freed: integer
}

export interface ClosePointInTimeRequest extends RequestBase {
  body?: {
    id: Id
  }
}

export interface ClosePointInTimeResponse {
  succeeded: boolean
  num_freed: integer
}

export interface CountRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  default_operator?: DefaultOperator
  df?: string
  expand_wildcards?: ExpandWildcards
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  lenient?: boolean
  min_score?: double
  preference?: string
  query_on_query_string?: string
  routing?: Routing
  terminate_after?: long
  q?: string
  body?: {
    query?: QueryDslQueryContainer
  }
}

export interface CountResponse {
  count: long
  _shards: ShardStatistics
}

export interface CreateRequest<TDocument = unknown> extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  pipeline?: string
  refresh?: Refresh
  routing?: Routing
  timeout?: Time
  version?: VersionNumber
  version_type?: VersionType
  wait_for_active_shards?: WaitForActiveShards
  body?: TDocument
}

export interface CreateResponse extends WriteResponseBase {
}

export interface DeleteRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  if_primary_term?: long
  if_seq_no?: SequenceNumber
  refresh?: Refresh
  routing?: Routing
  timeout?: Time
  version?: VersionNumber
  version_type?: VersionType
  wait_for_active_shards?: WaitForActiveShards
}

export interface DeleteResponse extends WriteResponseBase {
}

export interface DeleteByQueryRequest extends RequestBase {
  index: Indices
  type?: Types
  allow_no_indices?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  conflicts?: Conflicts
  default_operator?: DefaultOperator
  df?: string
  expand_wildcards?: ExpandWildcards
  from?: long
  ignore_unavailable?: boolean
  lenient?: boolean
  max_docs?: long
  preference?: string
  refresh?: boolean
  request_cache?: boolean
  requests_per_second?: long
  routing?: Routing
  q?: string
  scroll?: Time
  scroll_size?: long
  search_timeout?: Time
  search_type?: SearchType
  size?: long
  slices?: long
  sort?: string[]
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  stats?: string[]
  terminate_after?: long
  timeout?: Time
  version?: boolean
  wait_for_active_shards?: WaitForActiveShards
  wait_for_completion?: boolean
  body?: {
    max_docs?: long
    query?: QueryDslQueryContainer
    slice?: SlicedScroll
  }
}

export interface DeleteByQueryResponse {
  batches?: long
  deleted?: long
  failures?: BulkIndexByScrollFailure[]
  noops?: long
  requests_per_second?: float
  retries?: Retries
  slice_id?: integer
  task?: TaskId
  throttled_millis?: long
  throttled_until_millis?: long
  timed_out?: boolean
  took?: long
  total?: long
  version_conflicts?: long
}

export interface DeleteByQueryRethrottleRequest extends RequestBase {
  task_id: Id
  requests_per_second?: long
}

export interface DeleteByQueryRethrottleResponse extends TaskListResponse {
}

export interface DeleteScriptRequest extends RequestBase {
  id: Id
  master_timeout?: Time
  timeout?: Time
}

export interface DeleteScriptResponse extends AcknowledgedResponseBase {
}

export interface ExistsRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  source_enabled?: boolean
  source_excludes?: Fields
  source_includes?: Fields
  stored_fields?: Fields
  version?: VersionNumber
  version_type?: VersionType
}

export type ExistsResponse = boolean

export interface ExistsSourceRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  source_enabled?: boolean
  source_excludes?: Fields
  source_includes?: Fields
  version?: VersionNumber
  version_type?: VersionType
}

export type ExistsSourceResponse = boolean

export interface ExplainExplanation {
  description: string
  details: ExplainExplanationDetail[]
  value: float
}

export interface ExplainExplanationDetail {
  description: string
  details?: ExplainExplanationDetail[]
  value: float
}

export interface ExplainRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  analyzer?: string
  analyze_wildcard?: boolean
  default_operator?: DefaultOperator
  df?: string
  lenient?: boolean
  preference?: string
  query_on_query_string?: string
  routing?: Routing
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  stored_fields?: Fields
  q?: string
  body?: {
    query?: QueryDslQueryContainer
  }
}

export interface ExplainResponse<TDocument = unknown> {
  _index: IndexName
  _type?: Type
  _id: Id
  matched: boolean
  explanation?: ExplainExplanationDetail
  get?: InlineGet<TDocument>
}

export interface FieldCapsFieldCapabilitiesBodyIndexFilter {
  range?: FieldCapsFieldCapabilitiesBodyIndexFilterRange
  match_none?: EmptyObject
  term?: FieldCapsFieldCapabilitiesBodyIndexFilterTerm
}

export interface FieldCapsFieldCapabilitiesBodyIndexFilterRange {
  timestamp: FieldCapsFieldCapabilitiesBodyIndexFilterRangeTimestamp
}

export interface FieldCapsFieldCapabilitiesBodyIndexFilterRangeTimestamp {
  gte?: integer
  gt?: integer
  lte?: integer
  lt?: integer
}

export interface FieldCapsFieldCapabilitiesBodyIndexFilterTerm {
  versionControl: FieldCapsFieldCapabilitiesBodyIndexFilterTermVersionControl
}

export interface FieldCapsFieldCapabilitiesBodyIndexFilterTermVersionControl {
  value: string
}

export interface FieldCapsFieldCapability {
  aggregatable: boolean
  indices?: Indices
  meta?: Record<string, string[]>
  non_aggregatable_indices?: Indices
  non_searchable_indices?: Indices
  searchable: boolean
  type: string
}

export interface FieldCapsRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  fields?: Fields
  ignore_unavailable?: boolean
  include_unmapped?: boolean
  body?: {
    index_filter?: FieldCapsFieldCapabilitiesBodyIndexFilter
  }
}

export interface FieldCapsResponse {
  indices: Indices
  fields: Record<Field, Record<string, FieldCapsFieldCapability>>
}

export interface GetRequest extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  source_enabled?: boolean
  _source_excludes?: Fields
  _source_includes?: Fields
  stored_fields?: Fields
  version?: VersionNumber
  version_type?: VersionType
  _source?: boolean | Fields
}

export interface GetResponse<TDocument = unknown> {
  _index: IndexName
  fields?: Record<string, any>
  found: boolean
  _id: Id
  _primary_term?: long
  _routing?: string
  _seq_no?: SequenceNumber
  _source?: TDocument
  _type?: Type
  _version?: VersionNumber
}

export interface GetScriptRequest extends RequestBase {
  id: Id
  master_timeout?: Time
}

export interface GetScriptResponse {
  _id: Id
  found: boolean
  script?: StoredScript
}

export interface GetScriptContextContext {
  methods: GetScriptContextContextMethod[]
  name: Name
}

export interface GetScriptContextContextMethod {
  name: Name
  return_type: string
  params: GetScriptContextContextMethodParam[]
}

export interface GetScriptContextContextMethodParam {
  name: Name
  type: string
}

export interface GetScriptContextRequest extends RequestBase {
}

export interface GetScriptContextResponse {
  contexts: GetScriptContextContext[]
}

export interface GetScriptLanguagesLanguageContext {
  contexts: string[]
  language: ScriptLanguage
}

export interface GetScriptLanguagesRequest extends RequestBase {
}

export interface GetScriptLanguagesResponse {
  language_contexts: GetScriptLanguagesLanguageContext[]
  types_allowed: string[]
}

export interface GetSourceRequest extends GetRequest {
}

export type GetSourceResponse<TDocument = unknown> = TDocument

export interface IndexRequest<TDocument = unknown> extends RequestBase {
  id?: Id
  index: IndexName
  type?: Type
  if_primary_term?: long
  if_seq_no?: SequenceNumber
  op_type?: OpType
  pipeline?: string
  refresh?: Refresh
  routing?: Routing
  timeout?: Time
  version?: VersionNumber
  version_type?: VersionType
  wait_for_active_shards?: WaitForActiveShards
  require_alias?: boolean
  body?: TDocument
}

export interface IndexResponse extends WriteResponseBase {
}

export interface InfoRequest extends RequestBase {
}

export interface InfoResponse {
  cluster_name: Name
  cluster_uuid: Uuid
  name: Name
  tagline: string
  version: ElasticsearchVersionInfo
}

export interface MgetHit<TDocument = unknown> {
  error?: MainError
  fields?: Record<string, any>
  found?: boolean
  _id: Id
  _index: IndexName
  _primary_term?: long
  _routing?: Routing
  _seq_no?: SequenceNumber
  _source?: TDocument
  _type?: Type
  _version?: VersionNumber
}

export type MgetMultiGetId = string | integer

export interface MgetOperation {
  _id: MgetMultiGetId
  _index?: IndexName
  routing?: Routing
  _source?: boolean | Fields | SearchSourceFilter
  stored_fields?: Fields
  _type?: Type
  version?: VersionNumber
  version_type?: VersionType
}

export interface MgetRequest extends RequestBase {
  index?: IndexName
  type?: Type
  preference?: string
  realtime?: boolean
  refresh?: boolean
  routing?: Routing
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  stored_fields?: Fields
  body?: {
    docs?: MgetOperation[]
    ids?: MgetMultiGetId[]
  }
}

export interface MgetResponse<TDocument = unknown> {
  docs: MgetHit<TDocument>[]
}

export interface MsearchBody {
  aggregations?: Record<string, AggregationsAggregationContainer>
  aggs?: Record<string, AggregationsAggregationContainer>
  query?: QueryDslQueryContainer
  from?: integer
  size?: integer
  pit?: SearchPointInTimeReference
  track_total_hits?: boolean | integer
  suggest?: SearchSuggestContainer | Record<string, SearchSuggestContainer>
}

export interface MsearchHeader {
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  index?: Indices
  preference?: string
  request_cache?: boolean
  routing?: string
  search_type?: SearchType
}

export interface MsearchRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  ccs_minimize_roundtrips?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  max_concurrent_searches?: long
  max_concurrent_shard_requests?: long
  pre_filter_shard_size?: long
  search_type?: SearchType
  rest_total_hits_as_int?: boolean
  typed_keys?: boolean
  body?: (MsearchHeader | MsearchBody)[]
}

export interface MsearchResponse<TDocument = unknown> {
  took: long
  responses: (MsearchSearchResult<TDocument> | ErrorResponseBase)[]
}

export interface MsearchSearchResult<TDocument = unknown> extends SearchResponse<TDocument> {
  status: integer
}

export interface MsearchTemplateRequest extends RequestBase {
  index?: Indices
  type?: Types
  ccs_minimize_roundtrips?: boolean
  max_concurrent_searches?: long
  search_type?: SearchType
  rest_total_hits_as_int?: boolean
  typed_keys?: boolean
  body?: MsearchTemplateTemplateItem[]
}

export interface MsearchTemplateResponse<TDocument = unknown> {
  responses: SearchResponse<TDocument>[]
  took: long
}

export interface MsearchTemplateTemplateItem {
  id?: Id
  index?: Indices
  params?: Record<string, any>
  source?: string
}

export interface MtermvectorsOperation {
  doc: object
  fields: Fields
  field_statistics: boolean
  filter: TermvectorsFilter
  _id: Id
  _index: IndexName
  offsets: boolean
  payloads: boolean
  positions: boolean
  routing: Routing
  term_statistics: boolean
  version: VersionNumber
  version_type: VersionType
}

export interface MtermvectorsRequest extends RequestBase {
  index?: IndexName
  type?: Type
  fields?: Fields
  field_statistics?: boolean
  offsets?: boolean
  payloads?: boolean
  positions?: boolean
  preference?: string
  realtime?: boolean
  routing?: Routing
  term_statistics?: boolean
  version?: VersionNumber
  version_type?: VersionType
  body?: {
    docs?: MtermvectorsOperation[]
    ids?: Id[]
  }
}

export interface MtermvectorsResponse {
  docs: MtermvectorsTermVectorsResult[]
}

export interface MtermvectorsTermVectorsResult {
  found: boolean
  id: Id
  index: IndexName
  term_vectors: Record<Field, TermvectorsTermVector>
  took: long
  version: VersionNumber
}

export interface OpenPointInTimeRequest extends RequestBase {
  index: Indices
  keep_alive?: Time
}

export interface OpenPointInTimeResponse {
  id: Id
}

export interface PingRequest extends RequestBase {
}

export type PingResponse = boolean

export interface PutScriptRequest extends RequestBase {
  id: Id
  context?: Name
  master_timeout?: Time
  timeout?: Time
  body?: {
    script?: StoredScript
  }
}

export interface PutScriptResponse extends AcknowledgedResponseBase {
}

export interface RankEvalDocumentRating {
  _id: Id
  _index: IndexName
  rating: integer
}

export interface RankEvalRankEvalHit {
  _id: Id
  _index: IndexName
  _type?: Type
  _score: double
}

export interface RankEvalRankEvalHitItem {
  hit: RankEvalRankEvalHit
  rating?: double
}

export interface RankEvalRankEvalMetric {
  precision?: RankEvalRankEvalMetricPrecision
  recall?: RankEvalRankEvalMetricRecall
  mean_reciprocal_rank?: RankEvalRankEvalMetricMeanReciprocalRank
  dcg?: RankEvalRankEvalMetricDiscountedCumulativeGain
  expected_reciprocal_rank?: RankEvalRankEvalMetricExpectedReciprocalRank
}

export interface RankEvalRankEvalMetricBase {
  k?: integer
}

export interface RankEvalRankEvalMetricDetail {
  metric_score: double
  unrated_docs: RankEvalUnratedDocument[]
  hits: RankEvalRankEvalHitItem[]
  metric_details: Record<string, Record<string, any>>
}

export interface RankEvalRankEvalMetricDiscountedCumulativeGain extends RankEvalRankEvalMetricBase {
  normalize?: boolean
}

export interface RankEvalRankEvalMetricExpectedReciprocalRank extends RankEvalRankEvalMetricBase {
  maximum_relevance: integer
}

export interface RankEvalRankEvalMetricMeanReciprocalRank extends RankEvalRankEvalMetricRatingTreshold {
}

export interface RankEvalRankEvalMetricPrecision extends RankEvalRankEvalMetricRatingTreshold {
  ignore_unlabeled?: boolean
}

export interface RankEvalRankEvalMetricRatingTreshold extends RankEvalRankEvalMetricBase {
  relevant_rating_threshold?: integer
}

export interface RankEvalRankEvalMetricRecall extends RankEvalRankEvalMetricRatingTreshold {
}

export interface RankEvalRankEvalQuery {
  query: QueryDslQueryContainer
  size?: integer
}

export interface RankEvalRankEvalRequestItem {
  id: Id
  request?: RankEvalRankEvalQuery
  ratings: RankEvalDocumentRating[]
  template_id?: Id
  params?: Record<string, any>
}

export interface RankEvalRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  search_type?: string
  body?: {
    requests: RankEvalRankEvalRequestItem[]
    metric?: RankEvalRankEvalMetric
  }
}

export interface RankEvalResponse {
  metric_score: double
  details: Record<Id, RankEvalRankEvalMetricDetail>
  failures: Record<string, any>
}

export interface RankEvalUnratedDocument {
  _id: Id
  _index: IndexName
}

export interface ReindexDestination {
  index: IndexName
  op_type?: OpType
  pipeline?: string
  routing?: Routing
  version_type?: VersionType
}

export interface ReindexRemoteSource {
  connect_timeout: Time
  host: Host
  username: Username
  password: Password
  socket_timeout: Time
}

export interface ReindexRequest extends RequestBase {
  refresh?: boolean
  requests_per_second?: long
  scroll?: Time
  slices?: long
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  wait_for_completion?: boolean
  require_alias?: boolean
  body?: {
    conflicts?: Conflicts
    dest?: ReindexDestination
    max_docs?: long
    script?: Script
    size?: long
    source?: ReindexSource
  }
}

export interface ReindexResponse {
  batches?: long
  created?: long
  deleted?: long
  failures?: BulkIndexByScrollFailure[]
  noops?: long
  retries?: Retries
  requests_per_second?: long
  slice_id?: integer
  task?: TaskId
  throttled_millis?: EpochMillis
  throttled_until_millis?: EpochMillis
  timed_out?: boolean
  took?: Time
  total?: long
  updated?: long
  version_conflicts?: long
}

export interface ReindexSource {
  index: Indices
  query?: QueryDslQueryContainer
  remote?: ReindexRemoteSource
  size?: integer
  slice?: SlicedScroll
  sort?: SearchSort
  _source?: Fields
}

export interface ReindexRethrottleReindexNode extends SpecUtilsBaseNode {
  tasks: Record<TaskId, ReindexRethrottleReindexTask>
}

export interface ReindexRethrottleReindexStatus {
  batches: long
  created: long
  deleted: long
  noops: long
  requests_per_second: float
  retries: Retries
  throttled_millis: long
  throttled_until_millis: long
  total: long
  updated: long
  version_conflicts: long
}

export interface ReindexRethrottleReindexTask {
  action: string
  cancellable: boolean
  description: string
  id: long
  node: Name
  running_time_in_nanos: long
  start_time_in_millis: long
  status: ReindexRethrottleReindexStatus
  type: string
  headers: HttpHeaders
}

export interface ReindexRethrottleRequest extends RequestBase {
  task_id: Id
  requests_per_second?: long
}

export interface ReindexRethrottleResponse {
  nodes: Record<string, ReindexRethrottleReindexNode>
}

export interface RenderSearchTemplateRequest extends RequestBase {
  body?: {
    file?: string
    params?: Record<string, any>
    source?: string
  }
}

export interface RenderSearchTemplateResponse {
  template_output: Record<string, any>
}

export interface ScriptsPainlessExecutePainlessContextSetup {
  document: any
  index: IndexName
  query: QueryDslQueryContainer
}

export interface ScriptsPainlessExecutePainlessExecutionPosition {
  offset: integer
  start: integer
  end: integer
}

export interface ScriptsPainlessExecuteRequest extends RequestBase {
  body?: {
    context?: string
    context_setup?: ScriptsPainlessExecutePainlessContextSetup
    script?: InlineScript
  }
}

export interface ScriptsPainlessExecuteResponse<TResult = unknown> {
  result: TResult
}

export interface ScrollRequest extends RequestBase {
  scroll_id?: Id
  scroll?: Time
  rest_total_hits_as_int?: boolean
  total_hits_as_integer?: boolean
  body?: {
    scroll?: Time
    scroll_id: ScrollId
    rest_total_hits_as_int?: boolean
  }
}

export interface ScrollResponse<TDocument = unknown> extends SearchResponse<TDocument> {
}

export interface SearchRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  allow_partial_search_results?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  batched_reduce_size?: long
  ccs_minimize_roundtrips?: boolean
  default_operator?: DefaultOperator
  df?: string
  docvalue_fields?: Fields
  expand_wildcards?: ExpandWildcards
  explain?: boolean
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  lenient?: boolean
  max_concurrent_shard_requests?: long
  min_compatible_shard_node?: VersionString
  preference?: string
  pre_filter_shard_size?: long
  request_cache?: boolean
  routing?: Routing
  scroll?: Time
  search_type?: SearchType
  stats?: string[]
  stored_fields?: Fields
  suggest_field?: Field
  suggest_mode?: SuggestMode
  suggest_size?: long
  suggest_text?: string
  terminate_after?: long
  timeout?: Time
  track_total_hits?: boolean | integer
  track_scores?: boolean
  typed_keys?: boolean
  rest_total_hits_as_int?: boolean
  version?: boolean
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  seq_no_primary_term?: boolean
  q?: string
  size?: integer
  from?: integer
  sort?: string | string[]
  body?: {
    aggs?: Record<string, AggregationsAggregationContainer>
    aggregations?: Record<string, AggregationsAggregationContainer>
    collapse?: SearchFieldCollapse
    explain?: boolean
    from?: integer
    highlight?: SearchHighlight
    track_total_hits?: boolean | integer
    indices_boost?: Record<IndexName, double>[]
    docvalue_fields?: SearchDocValueField | (Field | SearchDocValueField)[]
    min_score?: double
    post_filter?: QueryDslQueryContainer
    profile?: boolean
    query?: QueryDslQueryContainer
    rescore?: SearchRescore | SearchRescore[]
    script_fields?: Record<string, ScriptField>
    search_after?: (integer | string)[]
    size?: integer
    slice?: SlicedScroll
    sort?: SearchSort
    _source?: boolean | Fields | SearchSourceFilter
    fields?: (Field | DateField)[]
    suggest?: SearchSuggestContainer | Record<string, SearchSuggestContainer>
    terminate_after?: long
    timeout?: string
    track_scores?: boolean
    version?: boolean
    seq_no_primary_term?: boolean
    stored_fields?: Fields
    pit?: SearchPointInTimeReference
    runtime_mappings?: MappingRuntimeFields
    stats?: string[]
  }
}

export interface SearchResponse<TDocument = unknown> {
  took: long
  timed_out: boolean
  _shards: ShardStatistics
  hits: SearchHitsMetadata<TDocument>
  aggregations?: Record<AggregateName, AggregationsAggregate>
  _clusters?: ClusterStatistics
  documents?: TDocument[]
  fields?: Record<string, any>
  max_score?: double
  num_reduce_phases?: long
  profile?: SearchProfile
  pit_id?: Id
  _scroll_id?: ScrollId
  suggest?: Record<SuggestionName, SearchSuggest<TDocument>[]>
  terminated_early?: boolean
}

export interface SearchAggregationBreakdown {
  build_aggregation: long
  build_aggregation_count: long
  build_leaf_collector: long
  build_leaf_collector_count: long
  collect: long
  collect_count: long
  initialize: long
  initialize_count: long
  post_collection?: long
  post_collection_count?: long
  reduce: long
  reduce_count: long
}

export interface SearchAggregationProfile {
  breakdown: SearchAggregationBreakdown
  description: string
  time_in_nanos: long
  type: string
  debug?: SearchAggregationProfileDebug
  children?: SearchAggregationProfileDebug[]
}

export interface SearchAggregationProfileDebug {
}

export type SearchBoundaryScanner = 'chars' | 'sentence' | 'word'

export interface SearchCollector {
  name: string
  reason: string
  time_in_nanos: long
  children?: SearchCollector[]
}

export interface SearchCompletionSuggestOption<TDocument = unknown> {
  collate_match?: boolean
  contexts?: Record<string, SearchContext[]>
  fields?: Record<string, any>
  _id: string
  _index: IndexName
  _type?: Type
  _routing?: Routing
  _score: double
  _source: TDocument
  text: string
}

export interface SearchCompletionSuggester extends SearchSuggesterBase {
  contexts?: Record<string, string | string[] | QueryDslGeoLocation | SearchSuggestContextQuery[]>
  fuzzy?: SearchSuggestFuzziness
  prefix?: string
  regex?: string
  skip_duplicates?: boolean
}

export type SearchContext = string | QueryDslGeoLocation

export interface SearchDirectGenerator {
  field: Field
  max_edits?: integer
  max_inspections?: float
  max_term_freq?: float
  min_doc_freq?: float
  min_word_length?: integer
  post_filter?: string
  pre_filter?: string
  prefix_length?: integer
  size?: integer
  suggest_mode?: SuggestMode
}

export interface SearchDocValueField {
  field: Field
  format?: string
}

export interface SearchFieldCollapse {
  field: Field
  inner_hits?: SearchInnerHits | SearchInnerHits[]
  max_concurrent_group_searches?: integer
}

export interface SearchFieldSort {
  missing?: AggregationsMissing
  mode?: SearchSortMode
  nested?: SearchNestedSortValue
  order?: SearchSortOrder
  unmapped_type?: MappingFieldType
}

export interface SearchGeoDistanceSortKeys {
  mode?: SearchSortMode
  distance_type?: GeoDistanceType
  order?: SearchSortOrder
  unit?: DistanceUnit
}
export type SearchGeoDistanceSort = SearchGeoDistanceSortKeys |
    { [property: string]: QueryDslGeoLocation | QueryDslGeoLocation[] }

export interface SearchHighlight {
  fields: Record<Field, SearchHighlightField>
  type?: SearchHighlighterType
  boundary_chars?: string
  boundary_max_scan?: integer
  boundary_scanner?: SearchBoundaryScanner
  boundary_scanner_locale?: string
  encoder?: SearchHighlighterEncoder
  fragmenter?: SearchHighlighterFragmenter
  fragment_offset?: integer
  fragment_size?: integer
  max_fragment_length?: integer
  no_match_size?: integer
  number_of_fragments?: integer
  order?: SearchHighlighterOrder
  post_tags?: string[]
  pre_tags?: string[]
  require_field_match?: boolean
  tags_schema?: SearchHighlighterTagsSchema
  highlight_query?: QueryDslQueryContainer
  max_analyzed_offset?: string | integer
}

export interface SearchHighlightField {
  boundary_chars?: string
  boundary_max_scan?: integer
  boundary_scanner?: SearchBoundaryScanner
  boundary_scanner_locale?: string
  field?: Field
  force_source?: boolean
  fragmenter?: SearchHighlighterFragmenter
  fragment_offset?: integer
  fragment_size?: integer
  highlight_query?: QueryDslQueryContainer
  matched_fields?: Fields
  max_fragment_length?: integer
  no_match_size?: integer
  number_of_fragments?: integer
  order?: SearchHighlighterOrder
  phrase_limit?: integer
  post_tags?: string[]
  pre_tags?: string[]
  require_field_match?: boolean
  tags_schema?: SearchHighlighterTagsSchema
  type?: SearchHighlighterType | string
}

export type SearchHighlighterEncoder = 'default' | 'html'

export type SearchHighlighterFragmenter = 'simple' | 'span'

export type SearchHighlighterOrder = 'score'

export type SearchHighlighterTagsSchema = 'styled'

export type SearchHighlighterType = 'plain' | 'fvh' | 'unified'

export interface SearchHit<TDocument = unknown> {
  _index: IndexName
  _id: Id
  _score?: double
  _type?: Type
  _explanation?: ExplainExplanation
  fields?: Record<string, any>
  highlight?: Record<string, string[]>
  inner_hits?: Record<string, SearchInnerHitsResult>
  matched_queries?: string[]
  _nested?: SearchNestedIdentity
  _ignored?: string[]
  _shard?: string
  _node?: string
  _routing?: string
  _source?: TDocument
  _seq_no?: SequenceNumber
  _primary_term?: long
  _version?: VersionNumber
  sort?: SearchSortResults
}

export interface SearchHitsMetadata<T = unknown> {
  total: SearchTotalHits | long
  hits: SearchHit<T>[]
  max_score?: double
}

export interface SearchInnerHits {
  name?: Name
  size?: integer
  from?: integer
  collapse?: SearchFieldCollapse
  docvalue_fields?: Fields
  explain?: boolean
  highlight?: SearchHighlight
  ignore_unmapped?: boolean
  script_fields?: Record<string, ScriptField>
  seq_no_primary_term?: boolean
  fields?: Fields
  sort?: SearchSort
  _source?: boolean | SearchSourceFilter
  version?: boolean
}

export interface SearchInnerHitsMetadata {
  total: SearchTotalHits | long
  hits: SearchHit<Record<string, any>>[]
  max_score?: double
}

export interface SearchInnerHitsResult {
  hits: SearchInnerHitsMetadata
}

export interface SearchLaplaceSmoothingModel {
  alpha: double
}

export interface SearchLinearInterpolationSmoothingModel {
  bigram_lambda: double
  trigram_lambda: double
  unigram_lambda: double
}

export interface SearchNestedIdentity {
  field: Field
  offset: integer
  _nested?: SearchNestedIdentity
}

export interface SearchNestedSortValue {
  filter?: QueryDslQueryContainer
  max_children?: integer
  path: Field
}

export interface SearchPhraseSuggestCollate {
  params?: Record<string, any>
  prune?: boolean
  query: SearchPhraseSuggestCollateQuery
}

export interface SearchPhraseSuggestCollateQuery {
  id?: Id
  source?: string
}

export interface SearchPhraseSuggestHighlight {
  post_tag: string
  pre_tag: string
}

export interface SearchPhraseSuggestOption {
  text: string
  highlighted: string
  score: double
}

export interface SearchPhraseSuggester extends SearchSuggesterBase {
  collate?: SearchPhraseSuggestCollate
  confidence?: double
  direct_generator?: SearchDirectGenerator[]
  force_unigrams?: boolean
  gram_size?: integer
  highlight?: SearchPhraseSuggestHighlight
  max_errors?: double
  real_word_error_likelihood?: double
  separator?: string
  shard_size?: integer
  smoothing?: SearchSmoothingModelContainer
  text?: string
  token_limit?: integer
}

export interface SearchPointInTimeReference {
  id: Id
  keep_alive?: Time
}

export interface SearchProfile {
  shards: SearchShardProfile[]
}

export interface SearchQueryBreakdown {
  advance: long
  advance_count: long
  build_scorer: long
  build_scorer_count: long
  create_weight: long
  create_weight_count: long
  match: long
  match_count: long
  shallow_advance: long
  shallow_advance_count: long
  next_doc: long
  next_doc_count: long
  score: long
  score_count: long
  compute_max_score: long
  compute_max_score_count: long
  set_min_competitive_score: long
  set_min_competitive_score_count: long
}

export interface SearchQueryProfile {
  breakdown: SearchQueryBreakdown
  description: string
  time_in_nanos: long
  type: string
  children?: SearchQueryProfile[]
}

export interface SearchRescore {
  query: SearchRescoreQuery
  window_size?: integer
}

export interface SearchRescoreQuery {
  rescore_query: QueryDslQueryContainer
  query_weight?: double
  rescore_query_weight?: double
  score_mode?: SearchScoreMode
}

export type SearchScoreMode = 'avg' | 'max' | 'min' | 'multiply' | 'total'

export interface SearchScoreSort {
  mode?: SearchSortMode
  order?: SearchSortOrder
}

export interface SearchScriptSort {
  order?: SearchSortOrder
  script: Script
  type?: string
}

export interface SearchSearchProfile {
  collector: SearchCollector[]
  query: SearchQueryProfile[]
  rewrite_time: long
}

export interface SearchShardProfile {
  aggregations: SearchAggregationProfile[]
  id: string
  searches: SearchSearchProfile[]
}

export interface SearchSmoothingModelContainer {
  laplace?: SearchLaplaceSmoothingModel
  linear_interpolation?: SearchLinearInterpolationSmoothingModel
  stupid_backoff?: SearchStupidBackoffSmoothingModel
}

export type SearchSort = SearchSortCombinations | SearchSortCombinations[]

export type SearchSortCombinations = Field | SearchSortContainer | SearchSortOrder

export interface SearchSortContainerKeys {
  _score?: SearchScoreSort
  _doc?: SearchScoreSort
  _geo_distance?: SearchGeoDistanceSort
  _script?: SearchScriptSort
}
export type SearchSortContainer = SearchSortContainerKeys |
    { [property: string]: SearchFieldSort | SearchSortOrder }

export type SearchSortMode = 'min' | 'max' | 'sum' | 'avg' | 'median'

export type SearchSortOrder = 'asc' | 'desc' | '_doc'

export type SearchSortResults = (long | double | string | null)[]

export interface SearchSourceFilter {
  excludes?: Fields
  includes?: Fields
  exclude?: Fields
  include?: Fields
}

export type SearchStringDistance = 'internal' | 'damerau_levenshtein' | 'levenshtein' | 'jaro_winkler' | 'ngram'

export interface SearchStupidBackoffSmoothingModel {
  discount: double
}

export interface SearchSuggest<T = unknown> {
  length: integer
  offset: integer
  options: SearchSuggestOption<T>[]
  text: string
}

export interface SearchSuggestContainer {
  completion?: SearchCompletionSuggester
  phrase?: SearchPhraseSuggester
  prefix?: string
  regex?: string
  term?: SearchTermSuggester
  text?: string
}

export interface SearchSuggestContextQuery {
  boost?: double
  context: SearchContext
  neighbours?: Distance[] | integer[]
  precision?: Distance | integer
  prefix?: boolean
}

export interface SearchSuggestFuzziness {
  fuzziness: Fuzziness
  min_length: integer
  prefix_length: integer
  transpositions: boolean
  unicode_aware: boolean
}

export type SearchSuggestOption<TDocument = unknown> = SearchCompletionSuggestOption<TDocument> | SearchPhraseSuggestOption | SearchTermSuggestOption

export type SearchSuggestSort = 'score' | 'frequency'

export interface SearchSuggesterBase {
  field: Field
  analyzer?: string
  size?: integer
}

export interface SearchTermSuggestOption {
  text: string
  freq?: long
  score: double
}

export interface SearchTermSuggester extends SearchSuggesterBase {
  lowercase_terms?: boolean
  max_edits?: integer
  max_inspections?: integer
  max_term_freq?: float
  min_doc_freq?: float
  min_word_length?: integer
  prefix_length?: integer
  shard_size?: integer
  sort?: SearchSuggestSort
  string_distance?: SearchStringDistance
  suggest_mode?: SuggestMode
  text?: string
}

export interface SearchTotalHits {
  relation: SearchTotalHitsRelation
  value: long
}

export type SearchTotalHitsRelation = 'eq' | 'gte'

export interface SearchShardsRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  local?: boolean
  preference?: string
  routing?: Routing
}

export interface SearchShardsResponse {
  nodes: Record<string, NodeAttributes>
  shards: NodeShard[][]
  indices: Record<IndexName, SearchShardsShardStoreIndex>
}

export interface SearchShardsShardStoreIndex {
  aliases?: Name[]
  filter?: QueryDslQueryContainer
}

export interface SearchTemplateRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  ccs_minimize_roundtrips?: boolean
  expand_wildcards?: ExpandWildcards
  explain?: boolean
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  preference?: string
  profile?: boolean
  routing?: Routing
  scroll?: Time
  search_type?: SearchType
  total_hits_as_integer?: boolean
  typed_keys?: boolean
  body?: {
    id?: Id
    params?: Record<string, any>
    source?: string
  }
}

export interface SearchTemplateResponse<TDocument = unknown> {
  _shards: ShardStatistics
  timed_out: boolean
  took: integer
  hits: SearchHitsMetadata<TDocument>
}

export interface TermsEnumRequest extends RequestBase {
  index: IndexName
  body?: {
    field: Field
    size?: integer
    timeout?: Time
    case_insensitive?: boolean
    index_filter?: QueryDslQueryContainer
    string?: string
    search_after?: string
  }
}

export interface TermsEnumResponse {
  _shards: ShardStatistics
  terms: string[]
  complete: boolean
}

export interface TermvectorsFieldStatistics {
  doc_count: integer
  sum_doc_freq: long
  sum_ttf: long
}

export interface TermvectorsFilter {
  max_doc_freq?: integer
  max_num_terms?: integer
  max_term_freq?: integer
  max_word_length?: integer
  min_doc_freq?: integer
  min_term_freq?: integer
  min_word_length?: integer
}

export interface TermvectorsRequest<TDocument = unknown> extends RequestBase {
  index: IndexName
  id?: Id
  type?: Type
  fields?: Fields
  field_statistics?: boolean
  offsets?: boolean
  payloads?: boolean
  positions?: boolean
  preference?: string
  realtime?: boolean
  routing?: Routing
  term_statistics?: boolean
  version?: VersionNumber
  version_type?: VersionType
  body?: {
    doc?: TDocument
    filter?: TermvectorsFilter
    per_field_analyzer?: Record<Field, string>
  }
}

export interface TermvectorsResponse {
  found: boolean
  _id: Id
  _index: IndexName
  term_vectors?: Record<Field, TermvectorsTermVector>
  took: long
  _type?: Type
  _version: VersionNumber
}

export interface TermvectorsTerm {
  doc_freq?: integer
  score?: double
  term_freq: integer
  tokens: TermvectorsToken[]
  ttf?: integer
}

export interface TermvectorsTermVector {
  field_statistics: TermvectorsFieldStatistics
  terms: Record<string, TermvectorsTerm>
}

export interface TermvectorsToken {
  end_offset?: integer
  payload?: string
  position: integer
  start_offset?: integer
}

export interface UpdateRequest<TDocument = unknown, TPartialDocument = unknown> extends RequestBase {
  id: Id
  index: IndexName
  type?: Type
  if_primary_term?: long
  if_seq_no?: SequenceNumber
  lang?: string
  refresh?: Refresh
  require_alias?: boolean
  retry_on_conflict?: long
  routing?: Routing
  source_enabled?: boolean
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  _source?: boolean | Fields
  _source_excludes?: Fields
  _source_includes?: Fields
  body?: {
    detect_noop?: boolean
    doc?: TPartialDocument
    doc_as_upsert?: boolean
    script?: Script
    scripted_upsert?: boolean
    _source?: boolean | SearchSourceFilter
    upsert?: TDocument
  }
}

export interface UpdateResponse<TDocument = unknown> extends WriteResponseBase {
  get?: InlineGet<TDocument>
}

export interface UpdateByQueryRequest extends RequestBase {
  index: Indices
  type?: Types
  allow_no_indices?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  conflicts?: Conflicts
  default_operator?: DefaultOperator
  df?: string
  expand_wildcards?: ExpandWildcards
  from?: long
  ignore_unavailable?: boolean
  lenient?: boolean
  pipeline?: string
  preference?: string
  query_on_query_string?: string
  refresh?: boolean
  request_cache?: boolean
  requests_per_second?: long
  routing?: Routing
  scroll?: Time
  scroll_size?: long
  search_timeout?: Time
  search_type?: SearchType
  size?: long
  slices?: long
  sort?: string[]
  source_enabled?: boolean
  source_excludes?: Fields
  source_includes?: Fields
  stats?: string[]
  terminate_after?: long
  timeout?: Time
  version?: boolean
  version_type?: boolean
  wait_for_active_shards?: WaitForActiveShards
  wait_for_completion?: boolean
  body?: {
    max_docs?: long
    query?: QueryDslQueryContainer
    script?: Script
    slice?: SlicedScroll
    conflicts?: Conflicts
  }
}

export interface UpdateByQueryResponse {
  batches?: long
  failures?: BulkIndexByScrollFailure[]
  noops?: long
  deleted?: long
  requests_per_second?: float
  retries?: Retries
  task?: TaskId
  timed_out?: boolean
  took?: long
  total?: long
  updated?: long
  version_conflicts?: long
  throttled_millis?: ulong
  throttled_until_millis?: ulong
}

export interface UpdateByQueryRethrottleRequest extends RequestBase {
  task_id: Id
  requests_per_second?: long
}

export interface UpdateByQueryRethrottleResponse {
  nodes: Record<string, UpdateByQueryRethrottleUpdateByQueryRethrottleNode>
}

export interface UpdateByQueryRethrottleUpdateByQueryRethrottleNode extends SpecUtilsBaseNode {
  tasks: Record<TaskId, TaskInfo>
}

export interface SpecUtilsBaseNode {
  attributes: Record<string, string>
  host: Host
  ip: Ip
  name: Name
  roles?: NodeRoles
  transport_address: TransportAddress
}

export interface AcknowledgedResponseBase {
  acknowledged: boolean
}

export type AggregateName = string

export interface BulkIndexByScrollFailure {
  cause: MainError
  id: Id
  index: IndexName
  status: integer
  type: string
}

export interface BulkStats {
  total_operations: long
  total_time?: string
  total_time_in_millis: long
  total_size?: ByteSize
  total_size_in_bytes: long
  avg_time?: string
  avg_time_in_millis: long
  avg_size?: ByteSize
  avg_size_in_bytes: long
}

export type ByteSize = long | string

export type Bytes = 'b' | 'k' | 'kb' | 'm' | 'mb' | 'g' | 'gb' | 't' | 'tb' | 'p' | 'pb'

export type CategoryId = string

export interface ChainTransform {
  transforms: TransformContainer[]
}

export interface ClusterStatistics {
  skipped: integer
  successful: integer
  total: integer
}

export interface CompletionStats {
  size_in_bytes: long
  size?: ByteSize
  fields?: Record<Field, FieldSizeUsage>
}

export type Conflicts = 'abort' | 'proceed'

export type DataStreamName = string

export interface DateField {
  field: Field
  format?: string
  include_unmapped?: boolean
}

export type DateMath = string

export type DateMathTime = string

export type DateString = string

export type DefaultOperator = 'AND' | 'OR'

export interface DictionaryResponseBase<TKey = unknown, TValue = unknown> {
  [key: string]: TValue
}

export type Distance = string

export type DistanceUnit = 'in' | 'ft' | 'yd' | 'mi' | 'nmi' | 'km' | 'm' | 'cm' | 'mm'

export interface DocStats {
  count: long
  deleted: long
}

export interface ElasticsearchVersionInfo {
  build_date: DateString
  build_flavor: string
  build_hash: string
  build_snapshot: boolean
  build_type: string
  lucene_version: VersionString
  minimum_index_compatibility_version: VersionString
  minimum_wire_compatibility_version: VersionString
  number: string
}

export interface EmptyObject {
}

export type EpochMillis = string | long

export interface ErrorCause {
  type: string
  reason: string
  caused_by?: ErrorCause
  shard?: integer | string
  stack_trace?: string
  root_cause?: ErrorCause[]
  bytes_limit?: long
  bytes_wanted?: long
  column?: integer
  col?: integer
  failed_shards?: ShardFailure[]
  grouped?: boolean
  index?: IndexName
  index_uuid?: Uuid
  language?: string
  licensed_expired_feature?: string
  line?: integer
  max_buckets?: integer
  phase?: string
  property_name?: string
  processor_type?: string
  resource_id?: Ids
  'resource.id'?: Ids
  resource_type?: string
  'resource.type'?: string
  script?: string
  script_stack?: string[]
  header?: HttpHeaders
  lang?: string
  position?: ScriptsPainlessExecutePainlessExecutionPosition
}

export interface ErrorResponseBase {
  error: MainError | string
  status: integer
}

export type ExpandWildcardOptions = 'all' | 'open' | 'closed' | 'hidden' | 'none'

export type ExpandWildcards = ExpandWildcardOptions | ExpandWildcardOptions[] | string

export type Field = string

export interface FieldMemoryUsage {
  memory_size?: ByteSize
  memory_size_in_bytes: long
}

export interface FieldSizeUsage {
  size?: ByteSize
  size_in_bytes: long
}

export interface FielddataStats {
  evictions?: long
  memory_size?: ByteSize
  memory_size_in_bytes: long
  fields?: Record<Field, FieldMemoryUsage>
}

export type Fields = Field | Field[]

export interface FlushStats {
  periodic: long
  total: long
  total_time?: string
  total_time_in_millis: long
}

export type Fuzziness = string | integer

export type GeoDistanceType = 'arc' | 'plane'

export type GeoHashPrecision = number

export type GeoShapeRelation = 'intersects' | 'disjoint' | 'within' | 'contains'

export type GeoTilePrecision = number

export interface GetStats {
  current: long
  exists_time?: string
  exists_time_in_millis: long
  exists_total: long
  missing_time?: string
  missing_time_in_millis: long
  missing_total: long
  time?: string
  time_in_millis: long
  total: long
}

export type GroupBy = 'nodes' | 'parents' | 'none'

export type Health = 'green' | 'yellow' | 'red'

export type Host = string

export type HttpHeaders = Record<string, string | string[]>

export type Id = string

export type Ids = Id | Id[]

export type IndexAlias = string

export type IndexName = string

export type IndexPattern = string

export type IndexPatterns = IndexPattern[]

export interface IndexedScript extends ScriptBase {
  id: Id
}

export interface IndexingStats {
  index_current: long
  delete_current: long
  delete_time?: string
  delete_time_in_millis: long
  delete_total: long
  is_throttled: boolean
  noop_update_total: long
  throttle_time?: string
  throttle_time_in_millis: long
  index_time?: string
  index_time_in_millis: long
  index_total: long
  index_failed: long
  types?: Record<string, IndexingStats>
}

export type Indices = string | string[]

export interface IndicesResponseBase extends AcknowledgedResponseBase {
  _shards?: ShardStatistics
}

export interface InlineGet<TDocument = unknown> {
  fields?: Record<string, any>
  found: boolean
  _seq_no: SequenceNumber
  _primary_term: long
  _routing?: Routing
  _source: TDocument
}

export interface InlineScript extends ScriptBase {
  source: string
}

export type Ip = string

export interface LatLon {
  lat: double
  lon: double
}

export type Level = 'cluster' | 'indices' | 'shards'

export type LifecycleOperationMode = 'RUNNING' | 'STOPPING' | 'STOPPED'

export interface MainError extends ErrorCause {
  headers?: Record<string, string>
  root_cause: ErrorCause[]
}

export interface MergesStats {
  current: long
  current_docs: long
  current_size?: string
  current_size_in_bytes: long
  total: long
  total_auto_throttle?: string
  total_auto_throttle_in_bytes: long
  total_docs: long
  total_size?: string
  total_size_in_bytes: long
  total_stopped_time?: string
  total_stopped_time_in_millis: long
  total_throttled_time?: string
  total_throttled_time_in_millis: long
  total_time?: string
  total_time_in_millis: long
}

export type Metadata = Record<string, any>

export type Metrics = string | string[]

export type MinimumShouldMatch = integer | string

export type MultiTermQueryRewrite = string

export type Name = string

export type Names = string | string[]

export type Namespace = string

export interface NodeAttributes {
  attributes: Record<string, string>
  ephemeral_id: Id
  id?: Id
  name: NodeName
  transport_address: TransportAddress
  roles?: NodeRoles
}

export type NodeId = string

export type NodeIds = string

export type NodeName = string

export type NodeRole = 'master' | 'data' | 'data_cold' | 'data_content' | 'data_frozen' | 'data_hot' | 'data_warm' | 'client' | 'ingest' | 'ml' | 'voting_only' | 'transform' | 'remote_cluster_client' | 'coordinating_only'

export type NodeRoles = NodeRole[]

export interface NodeShard {
  state: IndicesStatsShardRoutingState
  primary: boolean
  node?: NodeName
  shard: integer
  index: IndexName
  allocation_id?: Record<string, Id>
  recovery_source?: Record<string, Id>
  unassigned_info?: ClusterAllocationExplainUnassignedInformation
}

export interface NodeStatistics {
  failures?: ErrorCause[]
  total: integer
  successful: integer
  failed: integer
}

export type OpType = 'index' | 'create'

export type Password = string

export type Percentage = string | float

export type PipelineName = string

export interface PluginStats {
  classname: string
  description: string
  elasticsearch_version: VersionString
  extended_plugins: string[]
  has_native_controller: boolean
  java_version: VersionString
  name: Name
  version: VersionString
  licensed: boolean
  type: string
}

export type PropertyName = string

export interface QueryCacheStats {
  cache_count: integer
  cache_size: integer
  evictions: integer
  hit_count: integer
  memory_size?: ByteSize
  memory_size_in_bytes: integer
  miss_count: integer
  total_count: integer
}

export interface RecoveryStats {
  current_as_source: long
  current_as_target: long
  throttle_time?: string
  throttle_time_in_millis: long
}

export type Refresh = boolean | RefreshOptions

export type RefreshOptions = 'wait_for'

export interface RefreshStats {
  external_total: long
  external_total_time_in_millis: long
  listeners: long
  total: long
  total_time?: string
  total_time_in_millis: long
}

export type RelationName = string

export interface RequestBase extends SpecUtilsCommonQueryParameters {
}

export interface RequestCacheStats {
  evictions: long
  hit_count: long
  memory_size?: string
  memory_size_in_bytes: long
  miss_count: long
}

export type Result = 'Error' | 'created' | 'updated' | 'deleted' | 'not_found' | 'noop'

export interface Retries {
  bulk: long
  search: long
}

export type Routing = string | number

export type Script = InlineScript | IndexedScript | string

export interface ScriptBase {
  lang?: ScriptLanguage
  params?: Record<string, any>
}

export interface ScriptField {
  script: Script
}

export type ScriptLanguage = 'painless' | 'expression' | 'mustache' | 'java'

export interface ScriptTransform {
  lang: string
  params: Record<string, any>
}

export type ScrollId = string

export interface SearchStats {
  fetch_current: long
  fetch_time_in_millis: long
  fetch_total: long
  open_contexts?: long
  query_current: long
  query_time_in_millis: long
  query_total: long
  scroll_current: long
  scroll_time_in_millis: long
  scroll_total: long
  suggest_current: long
  suggest_time_in_millis: long
  suggest_total: long
  groups?: Record<string, SearchStats>
}

export interface SearchTransform {
  request: WatcherSearchInputRequestDefinition
  timeout: Time
}

export type SearchType = 'query_then_fetch' | 'dfs_query_then_fetch'

export interface SegmentsStats {
  count: integer
  doc_values_memory?: ByteSize
  doc_values_memory_in_bytes: integer
  file_sizes: Record<string, IndicesStatsShardFileSizeInfo>
  fixed_bit_set?: ByteSize
  fixed_bit_set_memory_in_bytes: integer
  index_writer_memory?: ByteSize
  index_writer_max_memory_in_bytes?: integer
  index_writer_memory_in_bytes: integer
  max_unsafe_auto_id_timestamp: integer
  memory?: ByteSize
  memory_in_bytes: integer
  norms_memory?: ByteSize
  norms_memory_in_bytes: integer
  points_memory?: ByteSize
  points_memory_in_bytes: integer
  stored_memory?: ByteSize
  stored_fields_memory_in_bytes: integer
  terms_memory_in_bytes: integer
  terms_memory?: ByteSize
  term_vectory_memory?: ByteSize
  term_vectors_memory_in_bytes: integer
  version_map_memory?: ByteSize
  version_map_memory_in_bytes: integer
}

export type SequenceNumber = integer

export type Service = string

export type ShapeRelation = 'intersects' | 'disjoint' | 'within'

export interface ShardFailure {
  index?: IndexName
  node?: string
  reason: ErrorCause
  shard: integer
  status?: string
}

export interface ShardStatistics {
  failed: uint
  successful: uint
  total: uint
  failures?: ShardFailure[]
  skipped?: uint
}

export interface ShardsOperationResponseBase {
  _shards: ShardStatistics
}

export type Size = 'Raw' | 'k' | 'm' | 'g' | 't' | 'p'

export interface SlicedScroll {
  field?: Field
  id: integer
  max: integer
}

export interface StoreStats {
  size?: ByteSize
  size_in_bytes: integer
  reserved?: ByteSize
  reserved_in_bytes: integer
  total_data_set_size?: ByteSize
  total_data_set_size_in_bytes?: integer
}

export interface StoredScript {
  lang?: ScriptLanguage
  source: string
}

export type SuggestMode = 'missing' | 'popular' | 'always'

export type SuggestionName = string

export type TaskId = string | integer

export type ThreadType = 'cpu' | 'wait' | 'block'

export type Time = string | integer

export type TimeSpan = string

export type Timestamp = string

export interface Transform {
}

export interface TransformContainer {
  chain?: ChainTransform
  script?: ScriptTransform
  search?: SearchTransform
}

export interface TranslogStats {
  earliest_last_modified_age: long
  operations: long
  size?: string
  size_in_bytes: long
  uncommitted_operations: integer
  uncommitted_size?: string
  uncommitted_size_in_bytes: long
}

export type TransportAddress = string

export type Type = string

export type Types = Type | Type[]

export type Username = string

export type Uuid = string

export type VersionNumber = long

export type VersionString = string

export type VersionType = 'internal' | 'external' | 'external_gte' | 'force'

export type WaitForActiveShardOptions = 'all'

export type WaitForActiveShards = integer | WaitForActiveShardOptions

export type WaitForEvents = 'immediate' | 'urgent' | 'high' | 'normal' | 'low' | 'languid'

export type WaitForStatus = 'green' | 'yellow' | 'red'

export interface WarmerStats {
  current: long
  total: long
  total_time?: string
  total_time_in_millis: long
}

export interface WriteResponseBase {
  _id: Id
  _index: IndexName
  _primary_term: long
  result: Result
  _seq_no: SequenceNumber
  _shards: ShardStatistics
  _type?: Type
  _version: VersionNumber
  forced_refresh?: boolean
  error?: ErrorCause
}

export type double = number

export type float = number

export type integer = number

export type long = number

export type uint = number

export type ulong = number

export interface AggregationsAdjacencyMatrixAggregation extends AggregationsBucketAggregationBase {
  filters?: Record<string, QueryDslQueryContainer>
}

export type AggregationsAggregate = AggregationsSingleBucketAggregate | AggregationsAutoDateHistogramAggregate | AggregationsFiltersAggregate | AggregationsSignificantTermsAggregate<any> | AggregationsTermsAggregate<any> | AggregationsBucketAggregate | AggregationsCompositeBucketAggregate | AggregationsMultiBucketAggregate<AggregationsBucket> | AggregationsMatrixStatsAggregate | AggregationsKeyedValueAggregate | AggregationsMetricAggregate

export interface AggregationsAggregateBase {
  meta?: Record<string, any>
}

export interface AggregationsAggregation {
  meta?: Record<string, any>
  name?: string
}

export interface AggregationsAggregationContainer {
  aggs?: Record<string, AggregationsAggregationContainer>
  meta?: Record<string, any>
  adjacency_matrix?: AggregationsAdjacencyMatrixAggregation
  aggregations?: Record<string, AggregationsAggregationContainer>
  auto_date_histogram?: AggregationsAutoDateHistogramAggregation
  avg?: AggregationsAverageAggregation
  avg_bucket?: AggregationsAverageBucketAggregation
  boxplot?: AggregationsBoxplotAggregation
  bucket_script?: AggregationsBucketScriptAggregation
  bucket_selector?: AggregationsBucketSelectorAggregation
  bucket_sort?: AggregationsBucketSortAggregation
  cardinality?: AggregationsCardinalityAggregation
  children?: AggregationsChildrenAggregation
  composite?: AggregationsCompositeAggregation
  cumulative_cardinality?: AggregationsCumulativeCardinalityAggregation
  cumulative_sum?: AggregationsCumulativeSumAggregation
  date_histogram?: AggregationsDateHistogramAggregation
  date_range?: AggregationsDateRangeAggregation
  derivative?: AggregationsDerivativeAggregation
  diversified_sampler?: AggregationsDiversifiedSamplerAggregation
  extended_stats?: AggregationsExtendedStatsAggregation
  extended_stats_bucket?: AggregationsExtendedStatsBucketAggregation
  filter?: QueryDslQueryContainer
  filters?: AggregationsFiltersAggregation
  geo_bounds?: AggregationsGeoBoundsAggregation
  geo_centroid?: AggregationsGeoCentroidAggregation
  geo_distance?: AggregationsGeoDistanceAggregation
  geohash_grid?: AggregationsGeoHashGridAggregation
  geo_line?: AggregationsGeoLineAggregation
  geotile_grid?: AggregationsGeoTileGridAggregation
  global?: AggregationsGlobalAggregation
  histogram?: AggregationsHistogramAggregation
  ip_range?: AggregationsIpRangeAggregation
  inference?: AggregationsInferenceAggregation
  line?: AggregationsGeoLineAggregation
  matrix_stats?: AggregationsMatrixStatsAggregation
  max?: AggregationsMaxAggregation
  max_bucket?: AggregationsMaxBucketAggregation
  median_absolute_deviation?: AggregationsMedianAbsoluteDeviationAggregation
  min?: AggregationsMinAggregation
  min_bucket?: AggregationsMinBucketAggregation
  missing?: AggregationsMissingAggregation
  moving_avg?: AggregationsMovingAverageAggregation
  moving_percentiles?: AggregationsMovingPercentilesAggregation
  moving_fn?: AggregationsMovingFunctionAggregation
  multi_terms?: AggregationsMultiTermsAggregation
  nested?: AggregationsNestedAggregation
  normalize?: AggregationsNormalizeAggregation
  parent?: AggregationsParentAggregation
  percentile_ranks?: AggregationsPercentileRanksAggregation
  percentiles?: AggregationsPercentilesAggregation
  percentiles_bucket?: AggregationsPercentilesBucketAggregation
  range?: AggregationsRangeAggregation
  rare_terms?: AggregationsRareTermsAggregation
  rate?: AggregationsRateAggregation
  reverse_nested?: AggregationsReverseNestedAggregation
  sampler?: AggregationsSamplerAggregation
  scripted_metric?: AggregationsScriptedMetricAggregation
  serial_diff?: AggregationsSerialDifferencingAggregation
  significant_terms?: AggregationsSignificantTermsAggregation
  significant_text?: AggregationsSignificantTextAggregation
  stats?: AggregationsStatsAggregation
  stats_bucket?: AggregationsStatsBucketAggregation
  string_stats?: AggregationsStringStatsAggregation
  sum?: AggregationsSumAggregation
  sum_bucket?: AggregationsSumBucketAggregation
  terms?: AggregationsTermsAggregation
  top_hits?: AggregationsTopHitsAggregation
  t_test?: AggregationsTTestAggregation
  top_metrics?: AggregationsTopMetricsAggregation
  value_count?: AggregationsValueCountAggregation
  weighted_avg?: AggregationsWeightedAverageAggregation
  variable_width_histogram?: AggregationsVariableWidthHistogramAggregation
}

export interface AggregationsAggregationRange {
  from?: double | string
  key?: string
  to?: double | string
}

export interface AggregationsAutoDateHistogramAggregate extends AggregationsMultiBucketAggregate<AggregationsKeyedBucket<long>> {
  interval: DateMathTime
}

export interface AggregationsAutoDateHistogramAggregation extends AggregationsBucketAggregationBase {
  buckets?: integer
  field?: Field
  format?: string
  minimum_interval?: AggregationsMinimumInterval
  missing?: DateString
  offset?: string
  params?: Record<string, any>
  script?: Script
  time_zone?: string
}

export interface AggregationsAverageAggregation extends AggregationsFormatMetricAggregationBase {
}

export interface AggregationsAverageBucketAggregation extends AggregationsPipelineAggregationBase {
}

export interface AggregationsBoxPlotAggregate extends AggregationsAggregateBase {
  min: double
  max: double
  q1: double
  q2: double
  q3: double
}

export interface AggregationsBoxplotAggregation extends AggregationsMetricAggregationBase {
  compression?: double
}

export type AggregationsBucket = AggregationsCompositeBucket | AggregationsDateHistogramBucket | AggregationsFiltersBucketItem | AggregationsIpRangeBucket | AggregationsRangeBucket | AggregationsRareTermsBucket<any> | AggregationsSignificantTermsBucket<any> | AggregationsKeyedBucket<any>

export interface AggregationsBucketAggregate extends AggregationsAggregateBase {
  after_key: Record<string, any>
  bg_count: long
  doc_count: long
  doc_count_error_upper_bound: long
  sum_other_doc_count: long
  interval: DateMathTime
  items: AggregationsBucket
}

export interface AggregationsBucketAggregationBase extends AggregationsAggregation {
  aggregations?: Record<string, AggregationsAggregationContainer>
}

export interface AggregationsBucketScriptAggregation extends AggregationsPipelineAggregationBase {
  script?: Script
}

export interface AggregationsBucketSelectorAggregation extends AggregationsPipelineAggregationBase {
  script?: Script
}

export interface AggregationsBucketSortAggregation extends AggregationsAggregation {
  from?: integer
  gap_policy?: AggregationsGapPolicy
  size?: integer
  sort?: SearchSort
}

export interface AggregationsBucketsPath {
}

export interface AggregationsCardinalityAggregation extends AggregationsMetricAggregationBase {
  precision_threshold?: integer
  rehash?: boolean
}

export interface AggregationsChiSquareHeuristic {
  background_is_superset: boolean
  include_negatives: boolean
}

export interface AggregationsChildrenAggregation extends AggregationsBucketAggregationBase {
  type?: RelationName
}

export interface AggregationsClassificationInferenceOptions {
  num_top_classes?: integer
  num_top_feature_importance_values?: integer
  prediction_field_type?: string
  results_field?: string
  top_classes_results_field?: string
}

export interface AggregationsCompositeAggregation extends AggregationsBucketAggregationBase {
  after?: Record<string, string | float | null>
  size?: integer
  sources?: Record<string, AggregationsCompositeAggregationSource>[]
}

export interface AggregationsCompositeAggregationSource {
  terms?: AggregationsTermsAggregation
  histogram?: AggregationsHistogramAggregation
  date_histogram?: AggregationsDateHistogramAggregation
  geotile_grid?: AggregationsGeoTileGridAggregation
}

export interface AggregationsCompositeBucketKeys {
}
export type AggregationsCompositeBucket = AggregationsCompositeBucketKeys |
    { [property: string]: AggregationsAggregate }

export interface AggregationsCompositeBucketAggregate extends AggregationsMultiBucketAggregate<Record<string, any>> {
  after_key: Record<string, any>
}

export interface AggregationsCumulativeCardinalityAggregation extends AggregationsPipelineAggregationBase {
}

export interface AggregationsCumulativeSumAggregation extends AggregationsPipelineAggregationBase {
}

export interface AggregationsDateHistogramAggregation extends AggregationsBucketAggregationBase {
  calendar_interval?: AggregationsDateInterval | Time
  extended_bounds?: AggregationsExtendedBounds<DateMath | long>
  hard_bounds?: AggregationsExtendedBounds<DateMath | long>
  field?: Field
  fixed_interval?: AggregationsDateInterval | Time
  format?: string
  interval?: AggregationsDateInterval | Time
  min_doc_count?: integer
  missing?: DateString
  offset?: Time
  order?: AggregationsHistogramOrder
  params?: Record<string, any>
  script?: Script
  time_zone?: string
}

export interface AggregationsDateHistogramBucketKeys {
}
export type AggregationsDateHistogramBucket = AggregationsDateHistogramBucketKeys |
    { [property: string]: AggregationsAggregate }

export type AggregationsDateInterval = 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'

export interface AggregationsDateRangeAggregation extends AggregationsBucketAggregationBase {
  field?: Field
  format?: string
  missing?: AggregationsMissing
  ranges?: AggregationsDateRangeExpression[]
  time_zone?: string
}

export interface AggregationsDateRangeExpression {
  from?: DateMath | float
  from_as_string?: string
  to_as_string?: string
  key?: string
  to?: DateMath | float
  doc_count?: long
}

export interface AggregationsDerivativeAggregation extends AggregationsPipelineAggregationBase {
}

export interface AggregationsDiversifiedSamplerAggregation extends AggregationsBucketAggregationBase {
  execution_hint?: AggregationsSamplerAggregationExecutionHint
  max_docs_per_value?: integer
  script?: Script
  shard_size?: integer
  field?: Field
}

export interface AggregationsEwmaModelSettings {
  alpha?: float
}

export interface AggregationsExtendedBounds<T = unknown> {
  max: T
  min: T
}

export interface AggregationsExtendedStatsAggregate extends AggregationsStatsAggregate {
  std_deviation_bounds: AggregationsStandardDeviationBounds
  sum_of_squares?: double
  variance?: double
  variance_population?: double
  variance_sampling?: double
  std_deviation?: double
  std_deviation_population?: double
  std_deviation_sampling?: double
}

export interface AggregationsExtendedStatsAggregation extends AggregationsFormatMetricAggregationBase {
  sigma?: double
}

export interface AggregationsExtendedStatsBucketAggregation extends AggregationsPipelineAggregationBase {
  sigma?: double
}

export interface AggregationsFiltersAggregate extends AggregationsAggregateBase {
  buckets: AggregationsFiltersBucketItem[] | Record<string, AggregationsFiltersBucketItem>
}

export interface AggregationsFiltersAggregation extends AggregationsBucketAggregationBase {
  filters?: Record<string, QueryDslQueryContainer> | QueryDslQueryContainer[]
  other_bucket?: boolean
  other_bucket_key?: string
}

export interface AggregationsFiltersBucketItemKeys {
  doc_count: long
}
export type AggregationsFiltersBucketItem = AggregationsFiltersBucketItemKeys |
    { [property: string]: AggregationsAggregate }

export interface AggregationsFormatMetricAggregationBase extends AggregationsMetricAggregationBase {
  format?: string
}

export interface AggregationsFormattableMetricAggregation extends AggregationsMetricAggregationBase {
  format?: string
}

export type AggregationsGapPolicy = 'skip' | 'insert_zeros'

export interface AggregationsGeoBounds {
  bottom_right: LatLon
  top_left: LatLon
}

export interface AggregationsGeoBoundsAggregate extends AggregationsAggregateBase {
  bounds: AggregationsGeoBounds
}

export interface AggregationsGeoBoundsAggregation extends AggregationsMetricAggregationBase {
  wrap_longitude?: boolean
}

export interface AggregationsGeoCentroidAggregate extends AggregationsAggregateBase {
  count: long
  location: QueryDslGeoLocation
}

export interface AggregationsGeoCentroidAggregation extends AggregationsMetricAggregationBase {
  count?: long
  location?: QueryDslGeoLocation
}

export interface AggregationsGeoDistanceAggregation extends AggregationsBucketAggregationBase {
  distance_type?: GeoDistanceType
  field?: Field
  origin?: QueryDslGeoLocation | string
  ranges?: AggregationsAggregationRange[]
  unit?: DistanceUnit
}

export interface AggregationsGeoHashGridAggregation extends AggregationsBucketAggregationBase {
  bounds?: QueryDslBoundingBox
  field?: Field
  precision?: GeoHashPrecision
  shard_size?: integer
  size?: integer
}

export interface AggregationsGeoLineAggregate extends AggregationsAggregateBase {
  type: string
  geometry: AggregationsLineStringGeoShape
  properties: AggregationsGeoLineProperties
}

export interface AggregationsGeoLineAggregation {
  point: AggregationsGeoLinePoint
  sort: AggregationsGeoLineSort
  include_sort?: boolean
  sort_order?: SearchSortOrder
  size?: integer
}

export interface AggregationsGeoLinePoint {
  field: Field
}

export interface AggregationsGeoLineProperties {
  complete: boolean
  sort_values: double[]
}

export interface AggregationsGeoLineSort {
  field: Field
}

export interface AggregationsGeoTileGridAggregation extends AggregationsBucketAggregationBase {
  field?: Field
  precision?: GeoTilePrecision
  shard_size?: integer
  size?: integer
  bounds?: AggregationsGeoBounds
}

export interface AggregationsGlobalAggregation extends AggregationsBucketAggregationBase {
}

export interface AggregationsGoogleNormalizedDistanceHeuristic {
  background_is_superset: boolean
}

export interface AggregationsHdrMethod {
  number_of_significant_value_digits?: integer
}

export interface AggregationsHdrPercentileItem {
  key: double
  value: double
}

export interface AggregationsHdrPercentilesAggregate extends AggregationsAggregateBase {
  values: AggregationsHdrPercentileItem[]
}

export interface AggregationsHistogramAggregation extends AggregationsBucketAggregationBase {
  extended_bounds?: AggregationsExtendedBounds<double>
  hard_bounds?: AggregationsExtendedBounds<double>
  field?: Field
  interval?: double
  min_doc_count?: integer
  missing?: double
  offset?: double
  order?: AggregationsHistogramOrder
  script?: Script
  format?: string
}

export interface AggregationsHistogramOrder {
  _count?: SearchSortOrder
  _key?: SearchSortOrder
}

export interface AggregationsHoltLinearModelSettings {
  alpha?: float
  beta?: float
}

export interface AggregationsHoltWintersModelSettings {
  alpha?: float
  beta?: float
  gamma?: float
  pad?: boolean
  period?: integer
  type?: AggregationsHoltWintersType
}

export type AggregationsHoltWintersType = 'add' | 'mult'

export interface AggregationsInferenceAggregation extends AggregationsPipelineAggregationBase {
  model_id: Name
  inference_config?: AggregationsInferenceConfigContainer
}

export interface AggregationsInferenceConfigContainer {
  regression?: AggregationsRegressionInferenceOptions
  classification?: AggregationsClassificationInferenceOptions
}

export interface AggregationsIpRangeAggregation extends AggregationsBucketAggregationBase {
  field?: Field
  ranges?: AggregationsIpRangeAggregationRange[]
}

export interface AggregationsIpRangeAggregationRange {
  from?: string
  mask?: string
  to?: string
}

export interface AggregationsIpRangeBucketKeys {
}
export type AggregationsIpRangeBucket = AggregationsIpRangeBucketKeys |
    { [property: string]: AggregationsAggregate }

export interface AggregationsKeyedBucketKeys<TKey = unknown> {
  doc_count: long
  key: TKey
  key_as_string: string
}
export type AggregationsKeyedBucket<TKey = unknown> = AggregationsKeyedBucketKeys<TKey> |
    { [property: string]: AggregationsAggregate }

export interface AggregationsKeyedValueAggregate extends AggregationsValueAggregate {
  keys: string[]
}

export interface AggregationsLineStringGeoShape {
  coordinates: QueryDslGeoCoordinate[]
}

export interface AggregationsMatrixAggregation extends AggregationsAggregation {
  fields?: Fields
  missing?: Record<Field, double>
}

export interface AggregationsMatrixStatsAggregate extends AggregationsAggregateBase {
  correlation: Record<string, double>
  covariance: Record<string, double>
  count: integer
  kurtosis: double
  mean: double
  skewness: double
  variance: double
  name: string
}

export interface AggregationsMatrixStatsAggregation extends AggregationsMatrixAggregation {
  mode?: AggregationsMatrixStatsMode
}

export type AggregationsMatrixStatsMode = 'avg' | 'min' | 'max' | 'sum' | 'median'

export interface AggregationsMaxAggregation extends AggregationsFormatMetricAggregationBase {
}

export interface AggregationsMaxBucketAggregation extends AggregationsPipelineAggregationBase {
}

export interface AggregationsMedianAbsoluteDeviationAggregation extends AggregationsFormatMetricAggregationBase {
  compression?: double
}

export type AggregationsMetricAggregate = AggregationsValueAggregate | AggregationsBoxPlotAggregate | AggregationsGeoBoundsAggregate | AggregationsGeoCentroidAggregate | AggregationsGeoLineAggregate | AggregationsPercentilesAggregate | AggregationsScriptedMetricAggregate | AggregationsStatsAggregate | AggregationsStringStatsAggregate | AggregationsTopHitsAggregate | AggregationsTopMetricsAggregate | AggregationsExtendedStatsAggregate | AggregationsTDigestPercentilesAggregate | AggregationsHdrPercentilesAggregate

export interface AggregationsMetricAggregationBase {
  field?: Field
  missing?: AggregationsMissing
  script?: Script
}

export interface AggregationsMinAggregation extends AggregationsFormatMetricAggregationBase {
}

export interface AggregationsMinBucketAggregation extends AggregationsPipelineAggregationBase {
}

export type AggregationsMinimumInterval = 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year'

export type AggregationsMissing = string | integer | double | boolean

export interface AggregationsMissingAggregation extends AggregationsBucketAggregationBase {
  field?: Field
  missing?: AggregationsMissing
}

export interface AggregationsMovingAverageAggregation extends AggregationsPipelineAggregationBase {
  minimize?: boolean
  model?: AggregationsMovingAverageModel
  settings: AggregationsMovingAverageSettings
  predict?: integer
  window?: integer
}

export type AggregationsMovingAverageModel = 'linear' | 'simple' | 'ewma' | 'holt' | 'holt_winters'

export type AggregationsMovingAverageSettings = AggregationsEwmaModelSettings | AggregationsHoltLinearModelSettings | AggregationsHoltWintersModelSettings

export interface AggregationsMovingFunctionAggregation extends AggregationsPipelineAggregationBase {
  script?: string
  shift?: integer
  window?: integer
}

export interface AggregationsMovingPercentilesAggregation extends AggregationsPipelineAggregationBase {
  window?: integer
  shift?: integer
}

export interface AggregationsMultiBucketAggregate<TBucket = unknown> extends AggregationsAggregateBase {
  buckets: TBucket[]
}

export interface AggregationsMultiTermLookup {
  field: Field
}

export interface AggregationsMultiTermsAggregation extends AggregationsBucketAggregationBase {
  terms: AggregationsMultiTermLookup[]
}

export interface AggregationsMutualInformationHeuristic {
  background_is_superset: boolean
  include_negatives: boolean
}

export interface AggregationsNestedAggregation extends AggregationsBucketAggregationBase {
  path?: Field
}

export interface AggregationsNormalizeAggregation extends AggregationsPipelineAggregationBase {
  method?: AggregationsNormalizeMethod
}

export type AggregationsNormalizeMethod = 'rescale_0_1' | 'rescale_0_100' | 'percent_of_sum' | 'mean' | 'zscore' | 'softmax'

export interface AggregationsParentAggregation extends AggregationsBucketAggregationBase {
  type?: RelationName
}

export interface AggregationsPercentageScoreHeuristic {
}

export interface AggregationsPercentileItem {
  percentile: double
  value: double
}

export interface AggregationsPercentileRanksAggregation extends AggregationsFormatMetricAggregationBase {
  keyed?: boolean
  values?: double[]
  hdr?: AggregationsHdrMethod
  tdigest?: AggregationsTDigest
}

export interface AggregationsPercentilesAggregate extends AggregationsAggregateBase {
  items: AggregationsPercentileItem[]
}

export interface AggregationsPercentilesAggregation extends AggregationsFormatMetricAggregationBase {
  keyed?: boolean
  percents?: double[]
  hdr?: AggregationsHdrMethod
  tdigest?: AggregationsTDigest
}

export interface AggregationsPercentilesBucketAggregation extends AggregationsPipelineAggregationBase {
  percents?: double[]
}

export interface AggregationsPipelineAggregationBase extends AggregationsAggregation {
  buckets_path?: AggregationsBucketsPath
  format?: string
  gap_policy?: AggregationsGapPolicy
}

export interface AggregationsRangeAggregation extends AggregationsBucketAggregationBase {
  field?: Field
  ranges?: AggregationsAggregationRange[]
  script?: Script
}

export interface AggregationsRangeBucketKeys {
}
export type AggregationsRangeBucket = AggregationsRangeBucketKeys |
    { [property: string]: AggregationsAggregate }

export interface AggregationsRareTermsAggregation extends AggregationsBucketAggregationBase {
  exclude?: string | string[]
  field?: Field
  include?: string | string[] | AggregationsTermsInclude
  max_doc_count?: long
  missing?: AggregationsMissing
  precision?: double
  value_type?: string
}

export interface AggregationsRareTermsBucketKeys<TKey = unknown> {
}
export type AggregationsRareTermsBucket<TKey = unknown> = AggregationsRareTermsBucketKeys<TKey> |
    { [property: string]: AggregationsAggregate }

export interface AggregationsRateAggregation extends AggregationsFormatMetricAggregationBase {
  unit?: AggregationsDateInterval
  mode?: AggregationsRateMode
}

export type AggregationsRateMode = 'sum' | 'value_count'

export interface AggregationsRegressionInferenceOptions {
  results_field: Field
  num_top_feature_importance_values?: integer
}

export interface AggregationsReverseNestedAggregation extends AggregationsBucketAggregationBase {
  path?: Field
}

export interface AggregationsSamplerAggregation extends AggregationsBucketAggregationBase {
  shard_size?: integer
}

export type AggregationsSamplerAggregationExecutionHint = 'map' | 'global_ordinals' | 'bytes_hash'

export interface AggregationsScriptedHeuristic {
  script: Script
}

export interface AggregationsScriptedMetricAggregate extends AggregationsAggregateBase {
  value: any
}

export interface AggregationsScriptedMetricAggregation extends AggregationsMetricAggregationBase {
  combine_script?: Script
  init_script?: Script
  map_script?: Script
  params?: Record<string, any>
  reduce_script?: Script
}

export interface AggregationsSerialDifferencingAggregation extends AggregationsPipelineAggregationBase {
  lag?: integer
}

export interface AggregationsSignificantTermsAggregate<TKey = unknown> extends AggregationsMultiBucketAggregate<TKey> {
  bg_count: long
  doc_count: long
}

export interface AggregationsSignificantTermsAggregation extends AggregationsBucketAggregationBase {
  background_filter?: QueryDslQueryContainer
  chi_square?: AggregationsChiSquareHeuristic
  exclude?: string | string[]
  execution_hint?: AggregationsTermsAggregationExecutionHint
  field?: Field
  gnd?: AggregationsGoogleNormalizedDistanceHeuristic
  include?: string | string[]
  min_doc_count?: long
  mutual_information?: AggregationsMutualInformationHeuristic
  percentage?: AggregationsPercentageScoreHeuristic
  script_heuristic?: AggregationsScriptedHeuristic
  shard_min_doc_count?: long
  shard_size?: integer
  size?: integer
}

export interface AggregationsSignificantTermsBucketKeys<TKey = unknown> {
}
export type AggregationsSignificantTermsBucket<TKey = unknown> = AggregationsSignificantTermsBucketKeys<TKey> |
    { [property: string]: AggregationsAggregate }

export interface AggregationsSignificantTextAggregation extends AggregationsBucketAggregationBase {
  background_filter?: QueryDslQueryContainer
  chi_square?: AggregationsChiSquareHeuristic
  exclude?: string | string[]
  execution_hint?: AggregationsTermsAggregationExecutionHint
  field?: Field
  filter_duplicate_text?: boolean
  gnd?: AggregationsGoogleNormalizedDistanceHeuristic
  include?: string | string[]
  min_doc_count?: long
  mutual_information?: AggregationsMutualInformationHeuristic
  percentage?: AggregationsPercentageScoreHeuristic
  script_heuristic?: AggregationsScriptedHeuristic
  shard_min_doc_count?: long
  shard_size?: integer
  size?: integer
  source_fields?: Fields
}

export interface AggregationsSingleBucketAggregateKeys extends AggregationsAggregateBase {
  doc_count: double
}
export type AggregationsSingleBucketAggregate = AggregationsSingleBucketAggregateKeys |
    { [property: string]: AggregationsAggregate }

export interface AggregationsStandardDeviationBounds {
  lower?: double
  upper?: double
  lower_population?: double
  upper_population?: double
  lower_sampling?: double
  upper_sampling?: double
}

export interface AggregationsStatsAggregate extends AggregationsAggregateBase {
  count: double
  sum: double
  avg?: double
  max?: double
  min?: double
}

export interface AggregationsStatsAggregation extends AggregationsFormatMetricAggregationBase {
}

export interface AggregationsStatsBucketAggregation extends AggregationsPipelineAggregationBase {
}

export interface AggregationsStringStatsAggregate extends AggregationsAggregateBase {
  count: long
  min_length: integer
  max_length: integer
  avg_length: double
  entropy: double
  distribution?: Record<string, double>
}

export interface AggregationsStringStatsAggregation extends AggregationsMetricAggregationBase {
  show_distribution?: boolean
}

export interface AggregationsSumAggregation extends AggregationsFormatMetricAggregationBase {
}

export interface AggregationsSumBucketAggregation extends AggregationsPipelineAggregationBase {
}

export interface AggregationsTDigest {
  compression?: integer
}

export interface AggregationsTDigestPercentilesAggregate extends AggregationsAggregateBase {
  values: Record<string, double>
}

export interface AggregationsTTestAggregation extends AggregationsAggregation {
  a?: AggregationsTestPopulation
  b?: AggregationsTestPopulation
  type?: AggregationsTTestType
}

export type AggregationsTTestType = 'paired' | 'homoscedastic' | 'heteroscedastic'

export interface AggregationsTermsAggregate<TKey = unknown> extends AggregationsMultiBucketAggregate<TKey> {
  doc_count_error_upper_bound: long
  sum_other_doc_count: long
}

export interface AggregationsTermsAggregation extends AggregationsBucketAggregationBase {
  collect_mode?: AggregationsTermsAggregationCollectMode
  exclude?: string | string[]
  execution_hint?: AggregationsTermsAggregationExecutionHint
  field?: Field
  include?: string | string[] | AggregationsTermsInclude
  min_doc_count?: integer
  missing?: AggregationsMissing
  missing_bucket?: boolean
  value_type?: string
  order?: AggregationsTermsAggregationOrder
  script?: Script
  shard_size?: integer
  show_term_doc_count_error?: boolean
  size?: integer
}

export type AggregationsTermsAggregationCollectMode = 'depth_first' | 'breadth_first'

export type AggregationsTermsAggregationExecutionHint = 'map' | 'global_ordinals' | 'global_ordinals_hash' | 'global_ordinals_low_cardinality'

export type AggregationsTermsAggregationOrder = SearchSortOrder | Record<string, SearchSortOrder> | Record<string, SearchSortOrder>[]

export interface AggregationsTermsInclude {
  num_partitions: long
  partition: long
}

export interface AggregationsTestPopulation {
  field: Field
  script?: Script
  filter?: QueryDslQueryContainer
}

export interface AggregationsTopHitsAggregate extends AggregationsAggregateBase {
  hits: SearchHitsMetadata<Record<string, any>>
}

export interface AggregationsTopHitsAggregation extends AggregationsMetricAggregationBase {
  docvalue_fields?: Fields
  explain?: boolean
  from?: integer
  highlight?: SearchHighlight
  script_fields?: Record<string, ScriptField>
  size?: integer
  sort?: SearchSort
  _source?: boolean | SearchSourceFilter | Fields
  stored_fields?: Fields
  track_scores?: boolean
  version?: boolean
  seq_no_primary_term?: boolean
}

export interface AggregationsTopMetrics {
  sort: (long | double | string)[]
  metrics: Record<string, long | double | string>
}

export interface AggregationsTopMetricsAggregate extends AggregationsAggregateBase {
  top: AggregationsTopMetrics[]
}

export interface AggregationsTopMetricsAggregation extends AggregationsMetricAggregationBase {
  metrics?: AggregationsTopMetricsValue | AggregationsTopMetricsValue[]
  size?: integer
  sort?: SearchSort
}

export interface AggregationsTopMetricsValue {
  field: Field
}

export interface AggregationsValueAggregate extends AggregationsAggregateBase {
  value: double
  value_as_string?: string
}

export interface AggregationsValueCountAggregation extends AggregationsFormattableMetricAggregation {
}

export type AggregationsValueType = 'string' | 'long' | 'double' | 'number' | 'date' | 'date_nanos' | 'ip' | 'numeric' | 'geo_point' | 'boolean'

export interface AggregationsVariableWidthHistogramAggregation {
  field?: Field
  buckets?: integer
  shard_size?: integer
  initial_buffer?: integer
}

export interface AggregationsWeightedAverageAggregation extends AggregationsAggregation {
  format?: string
  value?: AggregationsWeightedAverageValue
  value_type?: AggregationsValueType
  weight?: AggregationsWeightedAverageValue
}

export interface AggregationsWeightedAverageValue {
  field?: Field
  missing?: double
  script?: Script
}

export interface AnalysisAsciiFoldingTokenFilter extends AnalysisTokenFilterBase {
  preserve_original: boolean
}

export type AnalysisCharFilter = AnalysisHtmlStripCharFilter | AnalysisMappingCharFilter | AnalysisPatternReplaceTokenFilter

export interface AnalysisCharFilterBase {
  type: string
  version?: VersionString
}

export interface AnalysisCharGroupTokenizer extends AnalysisTokenizerBase {
  tokenize_on_chars: string[]
}

export interface AnalysisCommonGramsTokenFilter extends AnalysisTokenFilterBase {
  common_words: string[]
  common_words_path: string
  ignore_case: boolean
  query_mode: boolean
}

export interface AnalysisCompoundWordTokenFilterBase extends AnalysisTokenFilterBase {
  hyphenation_patterns_path: string
  max_subword_size: integer
  min_subword_size: integer
  min_word_size: integer
  only_longest_match: boolean
  word_list: string[]
  word_list_path: string
}

export interface AnalysisConditionTokenFilter extends AnalysisTokenFilterBase {
  filter: string[]
  script: Script
}

export type AnalysisDelimitedPayloadEncoding = 'int' | 'float' | 'identity'

export interface AnalysisDelimitedPayloadTokenFilter extends AnalysisTokenFilterBase {
  delimiter: string
  encoding: AnalysisDelimitedPayloadEncoding
}

export type AnalysisEdgeNGramSide = 'front' | 'back'

export interface AnalysisEdgeNGramTokenFilter extends AnalysisTokenFilterBase {
  max_gram: integer
  min_gram: integer
  side: AnalysisEdgeNGramSide
}

export interface AnalysisEdgeNGramTokenizer extends AnalysisTokenizerBase {
  custom_token_chars: string
  max_gram: integer
  min_gram: integer
  token_chars: AnalysisTokenChar[]
}

export interface AnalysisElisionTokenFilter extends AnalysisTokenFilterBase {
  articles: string[]
  articles_case: boolean
}

export interface AnalysisFingerprintTokenFilter extends AnalysisTokenFilterBase {
  max_output_size: integer
  separator: string
}

export interface AnalysisHtmlStripCharFilter extends AnalysisCharFilterBase {
}

export interface AnalysisHunspellTokenFilter extends AnalysisTokenFilterBase {
  dedup: boolean
  dictionary: string
  locale: string
  longest_only: boolean
}

export interface AnalysisHyphenationDecompounderTokenFilter extends AnalysisCompoundWordTokenFilterBase {
}

export interface AnalysisKStemTokenFilter extends AnalysisTokenFilterBase {
}

export type AnalysisKeepTypesMode = 'include' | 'exclude'

export interface AnalysisKeepTypesTokenFilter extends AnalysisTokenFilterBase {
  mode: AnalysisKeepTypesMode
  types: string[]
}

export interface AnalysisKeepWordsTokenFilter extends AnalysisTokenFilterBase {
  keep_words: string[]
  keep_words_case: boolean
  keep_words_path: string
}

export interface AnalysisKeywordMarkerTokenFilter extends AnalysisTokenFilterBase {
  ignore_case: boolean
  keywords: string[]
  keywords_path: string
  keywords_pattern: string
}

export interface AnalysisKeywordTokenizer extends AnalysisTokenizerBase {
  buffer_size: integer
}

export interface AnalysisLengthTokenFilter extends AnalysisTokenFilterBase {
  max: integer
  min: integer
}

export interface AnalysisLetterTokenizer extends AnalysisTokenizerBase {
}

export interface AnalysisLimitTokenCountTokenFilter extends AnalysisTokenFilterBase {
  consume_all_tokens: boolean
  max_token_count: integer
}

export interface AnalysisLowercaseTokenFilter extends AnalysisTokenFilterBase {
  language: string
}

export interface AnalysisLowercaseTokenizer extends AnalysisTokenizerBase {
}

export interface AnalysisMappingCharFilter extends AnalysisCharFilterBase {
  mappings: string[]
  mappings_path: string
}

export interface AnalysisMultiplexerTokenFilter extends AnalysisTokenFilterBase {
  filters: string[]
  preserve_original: boolean
}

export interface AnalysisNGramTokenFilter extends AnalysisTokenFilterBase {
  max_gram: integer
  min_gram: integer
}

export interface AnalysisNGramTokenizer extends AnalysisTokenizerBase {
  custom_token_chars: string
  max_gram: integer
  min_gram: integer
  token_chars: AnalysisTokenChar[]
}

export type AnalysisNoriDecompoundMode = 'discard' | 'none' | 'mixed'

export interface AnalysisNoriPartOfSpeechTokenFilter extends AnalysisTokenFilterBase {
  stoptags: string[]
}

export interface AnalysisNoriTokenizer extends AnalysisTokenizerBase {
  decompound_mode: AnalysisNoriDecompoundMode
  discard_punctuation: boolean
  user_dictionary: string
  user_dictionary_rules: string[]
}

export interface AnalysisPathHierarchyTokenizer extends AnalysisTokenizerBase {
  buffer_size: integer
  delimiter: string
  replacement: string
  reverse: boolean
  skip: integer
}

export interface AnalysisPatternCaptureTokenFilter extends AnalysisTokenFilterBase {
  patterns: string[]
  preserve_original: boolean
}

export interface AnalysisPatternReplaceTokenFilter extends AnalysisTokenFilterBase {
  flags: string
  pattern: string
  replacement: string
}

export interface AnalysisPorterStemTokenFilter extends AnalysisTokenFilterBase {
}

export interface AnalysisPredicateTokenFilter extends AnalysisTokenFilterBase {
  script: Script
}

export interface AnalysisRemoveDuplicatesTokenFilter extends AnalysisTokenFilterBase {
}

export interface AnalysisReverseTokenFilter extends AnalysisTokenFilterBase {
}

export interface AnalysisShingleTokenFilter extends AnalysisTokenFilterBase {
  filler_token: string
  max_shingle_size: integer
  min_shingle_size: integer
  output_unigrams: boolean
  output_unigrams_if_no_shingles: boolean
  token_separator: string
}

export type AnalysisSnowballLanguage = 'Armenian' | 'Basque' | 'Catalan' | 'Danish' | 'Dutch' | 'English' | 'Finnish' | 'French' | 'German' | 'German2' | 'Hungarian' | 'Italian' | 'Kp' | 'Lovins' | 'Norwegian' | 'Porter' | 'Portuguese' | 'Romanian' | 'Russian' | 'Spanish' | 'Swedish' | 'Turkish'

export interface AnalysisSnowballTokenFilter extends AnalysisTokenFilterBase {
  language: AnalysisSnowballLanguage
}

export interface AnalysisStandardTokenizer extends AnalysisTokenizerBase {
  max_token_length: integer
}

export interface AnalysisStemmerOverrideTokenFilter extends AnalysisTokenFilterBase {
  rules: string[]
  rules_path: string
}

export interface AnalysisStemmerTokenFilter extends AnalysisTokenFilterBase {
  language: string
}

export interface AnalysisStopTokenFilter extends AnalysisTokenFilterBase {
  ignore_case?: boolean
  remove_trailing?: boolean
  stopwords: AnalysisStopWords
  stopwords_path?: string
}

export type AnalysisStopWords = string | string[]

export type AnalysisSynonymFormat = 'solr' | 'wordnet'

export interface AnalysisSynonymGraphTokenFilter extends AnalysisTokenFilterBase {
  expand: boolean
  format: AnalysisSynonymFormat
  lenient: boolean
  synonyms: string[]
  synonyms_path: string
  tokenizer: string
  updateable: boolean
}

export interface AnalysisSynonymTokenFilter extends AnalysisTokenFilterBase {
  expand: boolean
  format: AnalysisSynonymFormat
  lenient: boolean
  synonyms: string[]
  synonyms_path: string
  tokenizer: string
  updateable: boolean
}

export type AnalysisTokenChar = 'letter' | 'digit' | 'whitespace' | 'punctuation' | 'symbol' | 'custom'

export type AnalysisTokenFilter = AnalysisAsciiFoldingTokenFilter | AnalysisCommonGramsTokenFilter | AnalysisConditionTokenFilter | AnalysisDelimitedPayloadTokenFilter | AnalysisEdgeNGramTokenFilter | AnalysisElisionTokenFilter | AnalysisFingerprintTokenFilter | AnalysisHunspellTokenFilter | AnalysisHyphenationDecompounderTokenFilter | AnalysisKeepTypesTokenFilter | AnalysisKeepWordsTokenFilter | AnalysisKeywordMarkerTokenFilter | AnalysisKStemTokenFilter | AnalysisLengthTokenFilter | AnalysisLimitTokenCountTokenFilter | AnalysisLowercaseTokenFilter | AnalysisMultiplexerTokenFilter | AnalysisNGramTokenFilter | AnalysisNoriPartOfSpeechTokenFilter | AnalysisPatternCaptureTokenFilter | AnalysisPatternReplaceTokenFilter | AnalysisPorterStemTokenFilter | AnalysisPredicateTokenFilter | AnalysisRemoveDuplicatesTokenFilter | AnalysisReverseTokenFilter | AnalysisShingleTokenFilter | AnalysisSnowballTokenFilter | AnalysisStemmerOverrideTokenFilter | AnalysisStemmerTokenFilter | AnalysisStopTokenFilter | AnalysisSynonymGraphTokenFilter | AnalysisSynonymTokenFilter | AnalysisTrimTokenFilter | AnalysisTruncateTokenFilter | AnalysisUniqueTokenFilter | AnalysisUppercaseTokenFilter | AnalysisWordDelimiterGraphTokenFilter | AnalysisWordDelimiterTokenFilter

export interface AnalysisTokenFilterBase {
  type: string
  version?: VersionString
}

export type AnalysisTokenizer = AnalysisCharGroupTokenizer | AnalysisEdgeNGramTokenizer | AnalysisKeywordTokenizer | AnalysisLetterTokenizer | AnalysisLowercaseTokenizer | AnalysisNGramTokenizer | AnalysisNoriTokenizer | AnalysisPathHierarchyTokenizer | AnalysisStandardTokenizer | AnalysisUaxEmailUrlTokenizer | AnalysisWhitespaceTokenizer

export interface AnalysisTokenizerBase {
  type: string
  version?: VersionString
}

export interface AnalysisTrimTokenFilter extends AnalysisTokenFilterBase {
}

export interface AnalysisTruncateTokenFilter extends AnalysisTokenFilterBase {
  length: integer
}

export interface AnalysisUaxEmailUrlTokenizer extends AnalysisTokenizerBase {
  max_token_length: integer
}

export interface AnalysisUniqueTokenFilter extends AnalysisTokenFilterBase {
  only_on_same_position: boolean
}

export interface AnalysisUppercaseTokenFilter extends AnalysisTokenFilterBase {
}

export interface AnalysisWhitespaceTokenizer extends AnalysisTokenizerBase {
  max_token_length: integer
}

export interface AnalysisWordDelimiterGraphTokenFilter extends AnalysisTokenFilterBase {
  adjust_offsets: boolean
  catenate_all: boolean
  catenate_numbers: boolean
  catenate_words: boolean
  generate_number_parts: boolean
  generate_word_parts: boolean
  preserve_original: boolean
  protected_words: string[]
  protected_words_path: string
  split_on_case_change: boolean
  split_on_numerics: boolean
  stem_english_possessive: boolean
  type_table: string[]
  type_table_path: string
}

export interface AnalysisWordDelimiterTokenFilter extends AnalysisTokenFilterBase {
  catenate_all: boolean
  catenate_numbers: boolean
  catenate_words: boolean
  generate_number_parts: boolean
  generate_word_parts: boolean
  preserve_original: boolean
  protected_words: string[]
  protected_words_path: string
  split_on_case_change: boolean
  split_on_numerics: boolean
  stem_english_possessive: boolean
  type_table: string[]
  type_table_path: string
}

export interface MappingAllField {
  analyzer: string
  enabled: boolean
  omit_norms: boolean
  search_analyzer: string
  similarity: string
  store: boolean
  store_term_vector_offsets: boolean
  store_term_vector_payloads: boolean
  store_term_vector_positions: boolean
  store_term_vectors: boolean
}

export interface MappingBinaryProperty extends MappingDocValuesPropertyBase {
  type: 'binary'
}

export interface MappingBooleanProperty extends MappingDocValuesPropertyBase {
  boost?: double
  fielddata?: IndicesNumericFielddata
  index?: boolean
  null_value?: boolean
  type: 'boolean'
}

export interface MappingCompletionProperty extends MappingDocValuesPropertyBase {
  analyzer?: string
  contexts?: MappingSuggestContext[]
  max_input_length?: integer
  preserve_position_increments?: boolean
  preserve_separators?: boolean
  search_analyzer?: string
  type: 'completion'
}

export interface MappingConstantKeywordProperty extends MappingPropertyBase {
  value?: any
  type: 'constant_keyword'
}

export type MappingCoreProperty = MappingObjectProperty | MappingNestedProperty | MappingSearchAsYouTypeProperty | MappingTextProperty | MappingDocValuesProperty

export interface MappingCorePropertyBase extends MappingPropertyBase {
  copy_to?: Fields
  similarity?: string
  store?: boolean
}

export interface MappingDateNanosProperty extends MappingDocValuesPropertyBase {
  boost?: double
  format?: string
  ignore_malformed?: boolean
  index?: boolean
  null_value?: DateString
  precision_step?: integer
  type: 'date_nanos'
}

export interface MappingDateProperty extends MappingDocValuesPropertyBase {
  boost?: double
  fielddata?: IndicesNumericFielddata
  format?: string
  ignore_malformed?: boolean
  index?: boolean
  null_value?: DateString
  precision_step?: integer
  type: 'date'
}

export interface MappingDateRangeProperty extends MappingRangePropertyBase {
  format?: string
  type: 'date_range'
}

export type MappingDocValuesProperty = MappingBinaryProperty | MappingBooleanProperty | MappingDateProperty | MappingDateNanosProperty | MappingKeywordProperty | MappingNumberProperty | MappingRangeProperty | MappingGeoPointProperty | MappingGeoShapeProperty | MappingCompletionProperty | MappingGenericProperty | MappingIpProperty | MappingMurmur3HashProperty | MappingShapeProperty | MappingTokenCountProperty | MappingVersionProperty | MappingWildcardProperty | MappingPointProperty

export interface MappingDocValuesPropertyBase extends MappingCorePropertyBase {
  doc_values?: boolean
}

export interface MappingDoubleRangeProperty extends MappingRangePropertyBase {
  type: 'double_range'
}

export type MappingDynamicMapping = 'strict' | 'runtime' | 'true' | 'false'

export interface MappingDynamicTemplate {
  mapping?: MappingPropertyBase
  match?: string
  match_mapping_type?: string
  match_pattern?: MappingMatchType
  path_match?: string
  path_unmatch?: string
  unmatch?: string
}

export interface MappingFieldAliasProperty extends MappingPropertyBase {
  path?: Field
  type: 'alias'
}

export interface MappingFieldMapping {
}

export interface MappingFieldNamesField {
  enabled: boolean
}

export type MappingFieldType = 'none' | 'geo_point' | 'geo_shape' | 'ip' | 'binary' | 'keyword' | 'text' | 'search_as_you_type' | 'date' | 'date_nanos' | 'boolean' | 'completion' | 'nested' | 'object' | 'murmur3' | 'token_count' | 'percolator' | 'integer' | 'long' | 'short' | 'byte' | 'float' | 'half_float' | 'scaled_float' | 'double' | 'integer_range' | 'float_range' | 'long_range' | 'double_range' | 'date_range' | 'ip_range' | 'alias' | 'join' | 'rank_feature' | 'rank_features' | 'flattened' | 'shape' | 'histogram' | 'constant_keyword'

export interface MappingFlattenedProperty extends MappingPropertyBase {
  boost?: double
  depth_limit?: integer
  doc_values?: boolean
  eager_global_ordinals?: boolean
  index?: boolean
  index_options?: MappingIndexOptions
  null_value?: string
  similarity?: string
  split_queries_on_whitespace?: boolean
  type: 'flattened'
}

export interface MappingFloatRangeProperty extends MappingRangePropertyBase {
  type: 'float_range'
}

export interface MappingGenericProperty extends MappingDocValuesPropertyBase {
  analyzer: string
  boost: double
  fielddata: IndicesStringFielddata
  ignore_malformed: boolean
  index: boolean
  index_options: MappingIndexOptions
  norms: boolean
  null_value: string
  position_increment_gap: integer
  search_analyzer: string
  term_vector: MappingTermVectorOption
  type: string
}

export type MappingGeoOrientation = 'right' | 'RIGHT' | 'counterclockwise' | 'COUNTERCLOCKWISE' | 'ccw' | 'CCW' | 'left' | 'LEFT' | 'clockwise' | 'CLOCKWISE' | 'cw' | 'CW'

export interface MappingGeoPointProperty extends MappingDocValuesPropertyBase {
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  null_value?: QueryDslGeoLocation
  type: 'geo_point'
}

export interface MappingGeoShapeProperty extends MappingDocValuesPropertyBase {
  coerce?: boolean
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  orientation?: MappingGeoOrientation
  strategy?: MappingGeoStrategy
  type: 'geo_shape'
}

export type MappingGeoStrategy = 'recursive' | 'term'

export interface MappingHistogramProperty extends MappingPropertyBase {
  ignore_malformed?: boolean
  type: 'histogram'
}

export interface MappingIndexField {
  enabled: boolean
}

export type MappingIndexOptions = 'docs' | 'freqs' | 'positions' | 'offsets'

export interface MappingIntegerRangeProperty extends MappingRangePropertyBase {
  type: 'integer_range'
}

export interface MappingIpProperty extends MappingDocValuesPropertyBase {
  boost?: double
  index?: boolean
  null_value?: string
  type: 'ip'
}

export interface MappingIpRangeProperty extends MappingRangePropertyBase {
  type: 'ip_range'
}

export interface MappingJoinProperty extends MappingPropertyBase {
  relations?: Record<RelationName, RelationName | RelationName[]>
  type: 'join'
}

export interface MappingKeywordProperty extends MappingDocValuesPropertyBase {
  boost?: double
  eager_global_ordinals?: boolean
  index?: boolean
  index_options?: MappingIndexOptions
  normalizer?: string
  norms?: boolean
  null_value?: string
  split_queries_on_whitespace?: boolean
  type: 'keyword'
}

export interface MappingLongRangeProperty extends MappingRangePropertyBase {
  type: 'long_range'
}

export type MappingMatchType = 'simple' | 'regex'

export interface MappingMurmur3HashProperty extends MappingDocValuesPropertyBase {
  type: 'murmur3'
}

export interface MappingNestedProperty extends MappingCorePropertyBase {
  enabled?: boolean
  include_in_parent?: boolean
  include_in_root?: boolean
  type: 'nested'
}

export interface MappingNumberProperty extends MappingDocValuesPropertyBase {
  boost?: double
  coerce?: boolean
  fielddata?: IndicesNumericFielddata
  ignore_malformed?: boolean
  index?: boolean
  null_value?: double
  scaling_factor?: double
  type: MappingNumberType
}

export type MappingNumberType = 'float' | 'half_float' | 'scaled_float' | 'double' | 'integer' | 'long' | 'short' | 'byte' | 'unsigned_long'

export interface MappingObjectProperty extends MappingCorePropertyBase {
  enabled?: boolean
  type?: 'object'
}

export interface MappingPercolatorProperty extends MappingPropertyBase {
  type: 'percolator'
}

export interface MappingPointProperty extends MappingDocValuesPropertyBase {
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  null_value?: string
  type: 'point'
}

export type MappingProperty = MappingFlattenedProperty | MappingJoinProperty | MappingPercolatorProperty | MappingRankFeatureProperty | MappingRankFeaturesProperty | MappingConstantKeywordProperty | MappingFieldAliasProperty | MappingHistogramProperty | MappingCoreProperty

export interface MappingPropertyBase {
  local_metadata?: Metadata
  meta?: Record<string, string>
  name?: PropertyName
  properties?: Record<PropertyName, MappingProperty>
  ignore_above?: integer
  dynamic?: boolean | MappingDynamicMapping
  fields?: Record<PropertyName, MappingProperty>
}

export type MappingRangeProperty = MappingLongRangeProperty | MappingIpRangeProperty | MappingIntegerRangeProperty | MappingFloatRangeProperty | MappingDoubleRangeProperty | MappingDateRangeProperty

export interface MappingRangePropertyBase extends MappingDocValuesPropertyBase {
  boost?: double
  coerce?: boolean
  index?: boolean
}

export interface MappingRankFeatureProperty extends MappingPropertyBase {
  positive_score_impact?: boolean
  type: 'rank_feature'
}

export interface MappingRankFeaturesProperty extends MappingPropertyBase {
  type: 'rank_features'
}

export interface MappingRoutingField {
  required: boolean
}

export interface MappingRuntimeField {
  format?: string
  script?: Script
  type: MappingRuntimeFieldType
}

export type MappingRuntimeFieldType = 'boolean' | 'date' | 'double' | 'geo_point' | 'ip' | 'keyword' | 'long'

export type MappingRuntimeFields = Record<Field, MappingRuntimeField>

export interface MappingSearchAsYouTypeProperty extends MappingCorePropertyBase {
  analyzer?: string
  index?: boolean
  index_options?: MappingIndexOptions
  max_shingle_size?: integer
  norms?: boolean
  search_analyzer?: string
  search_quote_analyzer?: string
  term_vector?: MappingTermVectorOption
  type: 'search_as_you_type'
}

export type MappingShapeOrientation = 'right' | 'counterclockwise' | 'ccw' | 'left' | 'clockwise' | 'cw'

export interface MappingShapeProperty extends MappingDocValuesPropertyBase {
  coerce?: boolean
  ignore_malformed?: boolean
  ignore_z_value?: boolean
  orientation?: MappingShapeOrientation
  type: 'shape'
}

export interface MappingSizeField {
  enabled: boolean
}

export interface MappingSourceField {
  compress?: boolean
  compress_threshold?: string
  enabled: boolean
  excludes?: string[]
  includes?: string[]
}

export interface MappingSuggestContext {
  name: Name
  path?: Field
  type: string
  precision?: integer
}

export type MappingTermVectorOption = 'no' | 'yes' | 'with_offsets' | 'with_positions' | 'with_positions_offsets' | 'with_positions_offsets_payloads'

export interface MappingTextIndexPrefixes {
  max_chars: integer
  min_chars: integer
}

export interface MappingTextProperty extends MappingCorePropertyBase {
  analyzer?: string
  boost?: double
  eager_global_ordinals?: boolean
  fielddata?: boolean
  fielddata_frequency_filter?: IndicesFielddataFrequencyFilter
  index?: boolean
  index_options?: MappingIndexOptions
  index_phrases?: boolean
  index_prefixes?: MappingTextIndexPrefixes
  norms?: boolean
  position_increment_gap?: integer
  search_analyzer?: string
  search_quote_analyzer?: string
  term_vector?: MappingTermVectorOption
  type: 'text'
}

export interface MappingTokenCountProperty extends MappingDocValuesPropertyBase {
  analyzer?: string
  boost?: double
  index?: boolean
  null_value?: double
  enable_position_increments?: boolean
  type: 'token_count'
}

export interface MappingTypeMapping {
  all_field?: MappingAllField
  date_detection?: boolean
  dynamic?: boolean | MappingDynamicMapping
  dynamic_date_formats?: string[]
  dynamic_templates?: Record<string, MappingDynamicTemplate> | Record<string, MappingDynamicTemplate>[]
  _field_names?: MappingFieldNamesField
  index_field?: MappingIndexField
  _meta?: Metadata
  numeric_detection?: boolean
  properties?: Record<PropertyName, MappingProperty>
  _routing?: MappingRoutingField
  _size?: MappingSizeField
  _source?: MappingSourceField
  runtime?: Record<string, MappingRuntimeField>
}

export interface MappingVersionProperty extends MappingDocValuesPropertyBase {
  type: 'version'
}

export interface MappingWildcardProperty extends MappingDocValuesPropertyBase {
  type: 'wildcard'
}

export interface QueryDslBoolQuery extends QueryDslQueryBase {
  filter?: QueryDslQueryContainer | QueryDslQueryContainer[]
  minimum_should_match?: MinimumShouldMatch
  must?: QueryDslQueryContainer | QueryDslQueryContainer[]
  must_not?: QueryDslQueryContainer | QueryDslQueryContainer[]
  should?: QueryDslQueryContainer | QueryDslQueryContainer[]
}

export interface QueryDslBoostingQuery extends QueryDslQueryBase {
  negative_boost?: double
  negative?: QueryDslQueryContainer
  positive?: QueryDslQueryContainer
}

export interface QueryDslBoundingBox {
  bottom_right?: QueryDslGeoLocation
  top_left?: QueryDslGeoLocation
  wkt?: string
}

export type QueryDslChildScoreMode = 'none' | 'avg' | 'sum' | 'max' | 'min'

export interface QueryDslCombinedFieldsQuery {
  query: string
  fields: Field[]
  operator?: string
}

export interface QueryDslCommonTermsQuery extends QueryDslQueryBase {
  analyzer?: string
  cutoff_frequency?: double
  high_freq_operator?: QueryDslOperator
  low_freq_operator?: QueryDslOperator
  minimum_should_match?: MinimumShouldMatch
  query?: string
}

export interface QueryDslConstantScoreQuery extends QueryDslQueryBase {
  filter?: QueryDslQueryContainer
}

export interface QueryDslDateDecayFunctionKeys extends QueryDslDecayFunctionBase {
}
export type QueryDslDateDecayFunction = QueryDslDateDecayFunctionKeys |
    { [property: string]: QueryDslDecayPlacement<DateMath, Time> }

export type QueryDslDecayFunction = QueryDslDateDecayFunction | QueryDslNumericDecayFunction | QueryDslGeoDecayFunction

export interface QueryDslDecayFunctionBase extends QueryDslScoreFunctionBase {
  multi_value_mode?: QueryDslMultiValueMode
}

export interface QueryDslDecayPlacement<TOrigin = unknown, TScale = unknown> {
  decay?: double
  offset?: TScale
  scale?: TScale
  origin?: TOrigin
}

export interface QueryDslDisMaxQuery extends QueryDslQueryBase {
  queries?: QueryDslQueryContainer[]
  tie_breaker?: double
}

export interface QueryDslDistanceFeatureQuery extends QueryDslQueryBase {
  origin?: number[] | QueryDslGeoCoordinate | DateMath
  pivot?: Distance | Time
  field?: Field
}

export interface QueryDslExistsQuery extends QueryDslQueryBase {
  field?: Field
}

export interface QueryDslFieldLookup {
  id?: Id
  index?: IndexName
  path?: Field
  routing?: Routing
}

export type QueryDslFieldValueFactorModifier = 'none' | 'log' | 'log1p' | 'log2p' | 'ln' | 'ln1p' | 'ln2p' | 'square' | 'sqrt' | 'reciprocal'

export interface QueryDslFieldValueFactorScoreFunction extends QueryDslScoreFunctionBase {
  field: Field
  factor?: double
  missing?: double
  modifier?: QueryDslFieldValueFactorModifier
}

export type QueryDslFunctionBoostMode = 'multiply' | 'replace' | 'sum' | 'avg' | 'max' | 'min'

export interface QueryDslFunctionScoreContainer {
  exp?: QueryDslDecayFunction
  gauss?: QueryDslDecayFunction
  linear?: QueryDslDecayFunction
  field_value_factor?: QueryDslFieldValueFactorScoreFunction
  random_score?: QueryDslRandomScoreFunction
  script_score?: QueryDslScriptScoreFunction
  filter?: QueryDslQueryContainer
  weight?: double
}

export type QueryDslFunctionScoreMode = 'multiply' | 'sum' | 'avg' | 'first' | 'max' | 'min'

export interface QueryDslFunctionScoreQuery extends QueryDslQueryBase {
  boost_mode?: QueryDslFunctionBoostMode
  functions?: QueryDslFunctionScoreContainer[]
  max_boost?: double
  min_score?: double
  query?: QueryDslQueryContainer
  score_mode?: QueryDslFunctionScoreMode
}

export interface QueryDslFuzzyQuery extends QueryDslQueryBase {
  max_expansions?: integer
  prefix_length?: integer
  rewrite?: MultiTermQueryRewrite
  transpositions?: boolean
  fuzziness?: Fuzziness
  value: any
}

export interface QueryDslGeoBoundingBoxQuery extends QueryDslQueryBase {
  bounding_box?: QueryDslBoundingBox
  type?: QueryDslGeoExecution
  validation_method?: QueryDslGeoValidationMethod
  top_left?: LatLon
  bottom_right?: LatLon
}

export type QueryDslGeoCoordinate = string | double[] | QueryDslThreeDimensionalPoint

export interface QueryDslGeoDecayFunctionKeys extends QueryDslDecayFunctionBase {
}
export type QueryDslGeoDecayFunction = QueryDslGeoDecayFunctionKeys |
    { [property: string]: QueryDslDecayPlacement<QueryDslGeoLocation, Distance> }

export interface QueryDslGeoDistanceQueryKeys extends QueryDslQueryBase {
  distance?: Distance
  distance_type?: GeoDistanceType
  validation_method?: QueryDslGeoValidationMethod
}
export type QueryDslGeoDistanceQuery = QueryDslGeoDistanceQueryKeys |
    { [property: string]: QueryDslGeoLocation }

export type QueryDslGeoExecution = 'memory' | 'indexed'

export type QueryDslGeoLocation = string | double[] | QueryDslTwoDimensionalPoint

export interface QueryDslGeoPolygonQuery extends QueryDslQueryBase {
  points?: QueryDslGeoLocation[]
  validation_method?: QueryDslGeoValidationMethod
}

export interface QueryDslGeoShape {
  type?: string
}

export interface QueryDslGeoShapeQuery extends QueryDslQueryBase {
  ignore_unmapped?: boolean
  indexed_shape?: QueryDslFieldLookup
  relation?: GeoShapeRelation
  shape?: QueryDslGeoShape
}

export type QueryDslGeoValidationMethod = 'coerce' | 'ignore_malformed' | 'strict'

export interface QueryDslHasChildQuery extends QueryDslQueryBase {
  ignore_unmapped?: boolean
  inner_hits?: SearchInnerHits
  max_children?: integer
  min_children?: integer
  query?: QueryDslQueryContainer
  score_mode?: QueryDslChildScoreMode
  type?: RelationName
}

export interface QueryDslHasParentQuery extends QueryDslQueryBase {
  ignore_unmapped?: boolean
  inner_hits?: SearchInnerHits
  parent_type?: RelationName
  query?: QueryDslQueryContainer
  score?: boolean
}

export interface QueryDslIdsQuery extends QueryDslQueryBase {
  values?: Id[] | long[]
}

export interface QueryDslIntervalsAllOf {
  intervals?: QueryDslIntervalsContainer[]
  max_gaps?: integer
  ordered?: boolean
  filter?: QueryDslIntervalsFilter
}

export interface QueryDslIntervalsAnyOf {
  intervals?: QueryDslIntervalsContainer[]
  filter?: QueryDslIntervalsFilter
}

export interface QueryDslIntervalsContainer {
  all_of?: QueryDslIntervalsAllOf
  any_of?: QueryDslIntervalsAnyOf
  fuzzy?: QueryDslIntervalsFuzzy
  match?: QueryDslIntervalsMatch
  prefix?: QueryDslIntervalsPrefix
  wildcard?: QueryDslIntervalsWildcard
}

export interface QueryDslIntervalsFilter {
  after?: QueryDslIntervalsContainer
  before?: QueryDslIntervalsContainer
  contained_by?: QueryDslIntervalsContainer
  containing?: QueryDslIntervalsContainer
  not_contained_by?: QueryDslIntervalsContainer
  not_containing?: QueryDslIntervalsContainer
  not_overlapping?: QueryDslIntervalsContainer
  overlapping?: QueryDslIntervalsContainer
  script?: Script
}

export interface QueryDslIntervalsFuzzy {
  analyzer?: string
  fuzziness?: Fuzziness
  prefix_length?: integer
  term?: string
  transpositions?: boolean
  use_field?: Field
}

export interface QueryDslIntervalsMatch {
  analyzer?: string
  max_gaps?: integer
  ordered?: boolean
  query?: string
  use_field?: Field
  filter?: QueryDslIntervalsFilter
}

export interface QueryDslIntervalsPrefix {
  analyzer?: string
  prefix?: string
  use_field?: Field
}

export interface QueryDslIntervalsQuery extends QueryDslQueryBase {
  all_of?: QueryDslIntervalsAllOf
  any_of?: QueryDslIntervalsAnyOf
  fuzzy?: QueryDslIntervalsFuzzy
  match?: QueryDslIntervalsMatch
  prefix?: QueryDslIntervalsPrefix
  wildcard?: QueryDslIntervalsWildcard
}

export interface QueryDslIntervalsWildcard {
  analyzer?: string
  pattern?: string
  use_field?: Field
}

export type QueryDslLike = string | QueryDslLikeDocument

export interface QueryDslLikeDocument {
  doc?: any
  fields?: Fields
  _id?: Id | number
  _type?: Type
  _index?: IndexName
  per_field_analyzer?: Record<Field, string>
  routing?: Routing
}

export interface QueryDslMatchAllQuery extends QueryDslQueryBase {
  norm_field?: string
}

export interface QueryDslMatchBoolPrefixQuery extends QueryDslQueryBase {
  analyzer?: string
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: QueryDslOperator
  prefix_length?: integer
  query?: string
}

export interface QueryDslMatchNoneQuery extends QueryDslQueryBase {
}

export interface QueryDslMatchPhrasePrefixQuery extends QueryDslQueryBase {
  analyzer?: string
  max_expansions?: integer
  query?: string
  slop?: integer
  zero_terms_query?: QueryDslZeroTermsQuery
}

export interface QueryDslMatchPhraseQuery extends QueryDslQueryBase {
  analyzer?: string
  query?: string
  slop?: integer
}

export interface QueryDslMatchQuery extends QueryDslQueryBase {
  analyzer?: string
  auto_generate_synonyms_phrase_query?: boolean
  cutoff_frequency?: double
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: QueryDslOperator
  prefix_length?: integer
  query?: string | float | boolean
  zero_terms_query?: QueryDslZeroTermsQuery
}

export interface QueryDslMoreLikeThisQuery extends QueryDslQueryBase {
  analyzer?: string
  boost_terms?: double
  fields?: Fields
  include?: boolean
  like?: QueryDslLike | QueryDslLike[]
  max_doc_freq?: integer
  max_query_terms?: integer
  max_word_length?: integer
  min_doc_freq?: integer
  minimum_should_match?: MinimumShouldMatch
  min_term_freq?: integer
  min_word_length?: integer
  per_field_analyzer?: Record<Field, string>
  routing?: Routing
  stop_words?: AnalysisStopWords
  unlike?: QueryDslLike | QueryDslLike[]
  version?: VersionNumber
  version_type?: VersionType
}

export interface QueryDslMultiMatchQuery extends QueryDslQueryBase {
  analyzer?: string
  auto_generate_synonyms_phrase_query?: boolean
  cutoff_frequency?: double
  fields?: Fields
  fuzziness?: Fuzziness
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_expansions?: integer
  minimum_should_match?: MinimumShouldMatch
  operator?: QueryDslOperator
  prefix_length?: integer
  query?: string
  slop?: integer
  tie_breaker?: double
  type?: QueryDslTextQueryType
  use_dis_max?: boolean
  zero_terms_query?: QueryDslZeroTermsQuery
}

export type QueryDslMultiValueMode = 'min' | 'max' | 'avg' | 'sum'

export interface QueryDslNamedQueryKeys<TQuery = unknown> {
  boost?: float
  _name?: string
  ignore_unmapped?: boolean
}
export type QueryDslNamedQuery<TQuery = unknown> = QueryDslNamedQueryKeys<TQuery> |
    { [property: string]: TQuery }

export interface QueryDslNestedQuery extends QueryDslQueryBase {
  ignore_unmapped?: boolean
  inner_hits?: SearchInnerHits
  path?: Field
  query?: QueryDslQueryContainer
  score_mode?: QueryDslNestedScoreMode
}

export type QueryDslNestedScoreMode = 'avg' | 'sum' | 'min' | 'max' | 'none'

export interface QueryDslNumericDecayFunctionKeys extends QueryDslDecayFunctionBase {
}
export type QueryDslNumericDecayFunction = QueryDslNumericDecayFunctionKeys |
    { [property: string]: QueryDslDecayPlacement<double, double> }

export type QueryDslOperator = 'and' | 'or' | 'AND' | 'OR'

export interface QueryDslParentIdQuery extends QueryDslQueryBase {
  id?: Id
  ignore_unmapped?: boolean
  type?: RelationName
}

export interface QueryDslPercolateQuery extends QueryDslQueryBase {
  document?: any
  documents?: any[]
  field?: Field
  id?: Id
  index?: IndexName
  preference?: string
  routing?: Routing
  version?: VersionNumber
}

export interface QueryDslPinnedQuery extends QueryDslQueryBase {
  ids?: Id[] | long[]
  organic?: QueryDslQueryContainer
}

export interface QueryDslPrefixQuery extends QueryDslQueryBase {
  rewrite?: MultiTermQueryRewrite
  value: string
}

export interface QueryDslQueryBase {
  boost?: float
  _name?: string
}

export interface QueryDslQueryContainer {
  bool?: QueryDslBoolQuery
  boosting?: QueryDslBoostingQuery
  common?: Record<Field, QueryDslCommonTermsQuery | string>
  combined_fields?: QueryDslCombinedFieldsQuery
  constant_score?: QueryDslConstantScoreQuery
  dis_max?: QueryDslDisMaxQuery
  distance_feature?: Record<Field, QueryDslDistanceFeatureQuery | string> | QueryDslDistanceFeatureQuery
  exists?: QueryDslExistsQuery
  function_score?: QueryDslFunctionScoreQuery
  fuzzy?: Record<Field, QueryDslFuzzyQuery | string>
  geo_bounding_box?: QueryDslNamedQuery<QueryDslGeoBoundingBoxQuery | string>
  geo_distance?: QueryDslGeoDistanceQuery
  geo_polygon?: QueryDslNamedQuery<QueryDslGeoPolygonQuery | string>
  geo_shape?: QueryDslNamedQuery<QueryDslGeoShapeQuery | string>
  has_child?: QueryDslHasChildQuery
  has_parent?: QueryDslHasParentQuery
  ids?: QueryDslIdsQuery
  intervals?: QueryDslNamedQuery<QueryDslIntervalsQuery | string>
  match?: QueryDslNamedQuery<QueryDslMatchQuery | string | float | boolean>
  match_all?: QueryDslMatchAllQuery
  match_bool_prefix?: QueryDslNamedQuery<QueryDslMatchBoolPrefixQuery | string>
  match_none?: QueryDslMatchNoneQuery
  match_phrase?: QueryDslNamedQuery<QueryDslMatchPhraseQuery | string>
  match_phrase_prefix?: QueryDslNamedQuery<QueryDslMatchPhrasePrefixQuery | string>
  more_like_this?: QueryDslMoreLikeThisQuery
  multi_match?: QueryDslMultiMatchQuery
  nested?: QueryDslNestedQuery
  parent_id?: QueryDslParentIdQuery
  percolate?: QueryDslPercolateQuery
  pinned?: QueryDslPinnedQuery
  prefix?: QueryDslNamedQuery<QueryDslPrefixQuery | string>
  query_string?: QueryDslQueryStringQuery
  range?: QueryDslNamedQuery<QueryDslRangeQuery>
  rank_feature?: QueryDslNamedQuery<QueryDslRankFeatureQuery | string>
  regexp?: QueryDslNamedQuery<QueryDslRegexpQuery | string>
  script?: QueryDslScriptQuery
  script_score?: QueryDslScriptScoreQuery
  shape?: QueryDslNamedQuery<QueryDslShapeQuery | string>
  simple_query_string?: QueryDslSimpleQueryStringQuery
  span_containing?: QueryDslSpanContainingQuery
  field_masking_span?: QueryDslSpanFieldMaskingQuery
  span_first?: QueryDslSpanFirstQuery
  span_multi?: QueryDslSpanMultiTermQuery
  span_near?: QueryDslSpanNearQuery
  span_not?: QueryDslSpanNotQuery
  span_or?: QueryDslSpanOrQuery
  span_term?: QueryDslNamedQuery<QueryDslSpanTermQuery | string>
  span_within?: QueryDslSpanWithinQuery
  template?: QueryDslQueryTemplate
  term?: QueryDslNamedQuery<QueryDslTermQuery | string | float | boolean>
  terms?: QueryDslNamedQuery<QueryDslTermsQuery | string[] | long[]>
  terms_set?: QueryDslNamedQuery<QueryDslTermsSetQuery | string>
  wildcard?: QueryDslNamedQuery<QueryDslWildcardQuery | string>
  type?: QueryDslTypeQuery
}

export interface QueryDslQueryStringQuery extends QueryDslQueryBase {
  allow_leading_wildcard?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  auto_generate_synonyms_phrase_query?: boolean
  default_field?: Field
  default_operator?: QueryDslOperator
  enable_position_increments?: boolean
  escape?: boolean
  fields?: Fields
  fuzziness?: Fuzziness
  fuzzy_max_expansions?: integer
  fuzzy_prefix_length?: integer
  fuzzy_rewrite?: MultiTermQueryRewrite
  fuzzy_transpositions?: boolean
  lenient?: boolean
  max_determinized_states?: integer
  minimum_should_match?: MinimumShouldMatch
  phrase_slop?: double
  query?: string
  quote_analyzer?: string
  quote_field_suffix?: string
  rewrite?: MultiTermQueryRewrite
  tie_breaker?: double
  time_zone?: string
  type?: QueryDslTextQueryType
}

export interface QueryDslQueryTemplate {
  source: string
}

export interface QueryDslRandomScoreFunction extends QueryDslScoreFunctionBase {
  field?: Field
  seed?: long | string
}

export interface QueryDslRangeQuery extends QueryDslQueryBase {
  gt?: double | DateMath
  gte?: double | DateMath
  lt?: double | DateMath
  lte?: double | DateMath
  relation?: QueryDslRangeRelation
  time_zone?: string
  from?: double | DateMath
  to?: double | DateMath
}

export type QueryDslRangeRelation = 'within' | 'contains' | 'intersects'

export interface QueryDslRankFeatureFunction {
}

export interface QueryDslRankFeatureQuery extends QueryDslQueryBase {
  function?: QueryDslRankFeatureFunction
}

export interface QueryDslRegexpQuery extends QueryDslQueryBase {
  flags?: string
  max_determinized_states?: integer
  value?: string
}

export interface QueryDslScoreFunctionBase {
  filter?: QueryDslQueryContainer
  weight?: double
}

export interface QueryDslScriptQuery extends QueryDslQueryBase {
  script?: Script
}

export interface QueryDslScriptScoreFunction extends QueryDslScoreFunctionBase {
  script: Script
}

export interface QueryDslScriptScoreQuery extends QueryDslQueryBase {
  query?: QueryDslQueryContainer
  script?: Script
}

export interface QueryDslShapeQuery extends QueryDslQueryBase {
  ignore_unmapped?: boolean
  indexed_shape?: QueryDslFieldLookup
  relation?: ShapeRelation
  shape?: QueryDslGeoShape
}

export type QueryDslSimpleQueryStringFlags = 'NONE' | 'AND' | 'OR' | 'NOT' | 'PREFIX' | 'PHRASE' | 'PRECEDENCE' | 'ESCAPE' | 'WHITESPACE' | 'FUZZY' | 'NEAR' | 'SLOP' | 'ALL'

export interface QueryDslSimpleQueryStringQuery extends QueryDslQueryBase {
  analyzer?: string
  analyze_wildcard?: boolean
  auto_generate_synonyms_phrase_query?: boolean
  default_operator?: QueryDslOperator
  fields?: Fields
  flags?: QueryDslSimpleQueryStringFlags | string
  fuzzy_max_expansions?: integer
  fuzzy_prefix_length?: integer
  fuzzy_transpositions?: boolean
  lenient?: boolean
  minimum_should_match?: MinimumShouldMatch
  query?: string
  quote_field_suffix?: string
}

export interface QueryDslSpanContainingQuery extends QueryDslQueryBase {
  big?: QueryDslSpanQuery
  little?: QueryDslSpanQuery
}

export interface QueryDslSpanFieldMaskingQuery extends QueryDslQueryBase {
  field?: Field
  query?: QueryDslSpanQuery
}

export interface QueryDslSpanFirstQuery extends QueryDslQueryBase {
  end?: integer
  match?: QueryDslSpanQuery
}

export interface QueryDslSpanGapQuery extends QueryDslQueryBase {
  field?: Field
  width?: integer
}

export interface QueryDslSpanMultiTermQuery extends QueryDslQueryBase {
  match?: QueryDslQueryContainer
}

export interface QueryDslSpanNearQuery extends QueryDslQueryBase {
  clauses?: QueryDslSpanQuery[]
  in_order?: boolean
  slop?: integer
}

export interface QueryDslSpanNotQuery extends QueryDslQueryBase {
  dist?: integer
  exclude?: QueryDslSpanQuery
  include?: QueryDslSpanQuery
  post?: integer
  pre?: integer
}

export interface QueryDslSpanOrQuery extends QueryDslQueryBase {
  clauses?: QueryDslSpanQuery[]
}

export interface QueryDslSpanQuery extends QueryDslQueryBase {
  span_containing?: QueryDslNamedQuery<QueryDslSpanContainingQuery | string>
  field_masking_span?: QueryDslNamedQuery<QueryDslSpanFieldMaskingQuery | string>
  span_first?: QueryDslNamedQuery<QueryDslSpanFirstQuery | string>
  span_gap?: QueryDslNamedQuery<QueryDslSpanGapQuery | integer>
  span_multi?: QueryDslSpanMultiTermQuery
  span_near?: QueryDslNamedQuery<QueryDslSpanNearQuery | string>
  span_not?: QueryDslNamedQuery<QueryDslSpanNotQuery | string>
  span_or?: QueryDslNamedQuery<QueryDslSpanOrQuery | string>
  span_term?: QueryDslNamedQuery<QueryDslSpanTermQuery | string>
  span_within?: QueryDslNamedQuery<QueryDslSpanWithinQuery | string>
}

export interface QueryDslSpanTermQuery extends QueryDslQueryBase {
  value: string
}

export interface QueryDslSpanWithinQuery extends QueryDslQueryBase {
  big?: QueryDslSpanQuery
  little?: QueryDslSpanQuery
}

export interface QueryDslTermQuery extends QueryDslQueryBase {
  value?: string | float | boolean
}

export interface QueryDslTermsQuery extends QueryDslQueryBase {
  terms?: string[]
  index?: IndexName
  id?: Id
  path?: string
  routing?: Routing
}

export interface QueryDslTermsSetQuery extends QueryDslQueryBase {
  minimum_should_match_field?: Field
  minimum_should_match_script?: Script
  terms?: string[]
}

export type QueryDslTextQueryType = 'best_fields' | 'most_fields' | 'cross_fields' | 'phrase' | 'phrase_prefix' | 'bool_prefix'

export interface QueryDslThreeDimensionalPoint {
  lat: double
  lon: double
  z?: double
}

export interface QueryDslTwoDimensionalPoint {
  lat: double
  lon: double
}

export interface QueryDslTypeQuery extends QueryDslQueryBase {
  value: string
}

export interface QueryDslWildcardQuery extends QueryDslQueryBase {
  rewrite?: MultiTermQueryRewrite
  value: string
}

export type QueryDslZeroTermsQuery = 'all' | 'none'

export interface AsyncSearchAsyncSearch<TDocument = unknown> {
  aggregations?: Record<string, AggregationsAggregate>
  _clusters?: ClusterStatistics
  fields?: Record<string, any>
  hits: SearchHitsMetadata<TDocument>
  max_score?: double
  num_reduce_phases?: long
  profile?: SearchProfile
  pit_id?: Id
  _scroll_id?: Id
  _shards: ShardStatistics
  suggest?: Record<SuggestionName, SearchSuggest<TDocument>[]>
  terminated_early?: boolean
  timed_out: boolean
  took: long
}

export interface AsyncSearchAsyncSearchDocumentResponseBase<TDocument = unknown> extends AsyncSearchAsyncSearchResponseBase {
  response: AsyncSearchAsyncSearch<TDocument>
}

export interface AsyncSearchAsyncSearchResponseBase {
  id?: Id
  is_partial: boolean
  is_running: boolean
  expiration_time_in_millis: EpochMillis
  start_time_in_millis: EpochMillis
}

export interface AsyncSearchDeleteRequest extends RequestBase {
  id: Id
}

export interface AsyncSearchDeleteResponse extends AcknowledgedResponseBase {
}

export interface AsyncSearchGetRequest extends RequestBase {
  id: Id
  keep_alive?: Time
  typed_keys?: boolean
  wait_for_completion_timeout?: Time
}

export interface AsyncSearchGetResponse<TDocument = unknown> extends AsyncSearchAsyncSearchDocumentResponseBase<TDocument> {
}

export interface AsyncSearchStatusRequest extends RequestBase {
  id: Id
}

export interface AsyncSearchStatusResponse<TDocument = unknown> extends AsyncSearchAsyncSearchResponseBase {
  _shards: ShardStatistics
  completion_status: integer
}

export interface AsyncSearchSubmitRequest extends RequestBase {
  index?: Indices
  batched_reduce_size?: long
  wait_for_completion_timeout?: Time
  keep_on_completion?: boolean
  typed_keys?: boolean
  body?: {
    aggs?: Record<string, AggregationsAggregationContainer>
    allow_no_indices?: boolean
    allow_partial_search_results?: boolean
    analyzer?: string
    analyze_wildcard?: boolean
    batched_reduce_size?: long
    collapse?: SearchFieldCollapse
    default_operator?: DefaultOperator
    df?: string
    docvalue_fields?: Fields
    expand_wildcards?: ExpandWildcards
    explain?: boolean
    from?: integer
    highlight?: SearchHighlight
    ignore_throttled?: boolean
    ignore_unavailable?: boolean
    indices_boost?: Record<IndexName, double>[]
    keep_alive?: Time
    keep_on_completion?: boolean
    lenient?: boolean
    max_concurrent_shard_requests?: long
    min_score?: double
    post_filter?: QueryDslQueryContainer
    preference?: string
    profile?: boolean
    pit?: SearchPointInTimeReference
    query?: QueryDslQueryContainer
    query_on_query_string?: string
    request_cache?: boolean
    rescore?: SearchRescore[]
    routing?: Routing
    script_fields?: Record<string, ScriptField>
    search_after?: any[]
    search_type?: SearchType
    sequence_number_primary_term?: boolean
    size?: integer
    sort?: SearchSort
    _source?: boolean | SearchSourceFilter
    stats?: string[]
    stored_fields?: Fields
    suggest?: Record<string, SearchSuggestContainer>
    suggest_field?: Field
    suggest_mode?: SuggestMode
    suggest_size?: long
    suggest_text?: string
    terminate_after?: long
    timeout?: string
    track_scores?: boolean
    track_total_hits?: boolean
    typed_keys?: boolean
    version?: boolean
    wait_for_completion_timeout?: Time
    fields?: (Field | DateField)[]
  }
}

export interface AsyncSearchSubmitResponse<TDocument = unknown> extends AsyncSearchAsyncSearchDocumentResponseBase<TDocument> {
}

export interface AutoscalingCapacityGetRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface AutoscalingCapacityGetResponse {
  stub: integer
}

export interface AutoscalingPolicyDeleteRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface AutoscalingPolicyDeleteResponse {
  stub: integer
}

export interface AutoscalingPolicyGetRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface AutoscalingPolicyGetResponse {
  stub: integer
}

export interface AutoscalingPolicyPutRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface AutoscalingPolicyPutResponse {
  stub: integer
}

export interface CatCatRequestBase extends RequestBase, SpecUtilsCommonCatQueryParameters {
}

export interface CatAliasesAliasesRecord {
  alias?: string
  a?: string
  index?: IndexName
  i?: IndexName
  idx?: IndexName
  filter?: string
  f?: string
  fi?: string
  'routing.index'?: string
  ri?: string
  routingIndex?: string
  'routing.search'?: string
  rs?: string
  routingSearch?: string
  is_write_index?: string
  w?: string
  isWriteIndex?: string
}

export interface CatAliasesRequest extends CatCatRequestBase {
  name?: Names
  expand_wildcards?: ExpandWildcards
}

export type CatAliasesResponse = CatAliasesAliasesRecord[]

export interface CatAllocationAllocationRecord {
  shards?: string
  s?: string
  'disk.indices'?: ByteSize
  di?: ByteSize
  diskIndices?: ByteSize
  'disk.used'?: ByteSize
  du?: ByteSize
  diskUsed?: ByteSize
  'disk.avail'?: ByteSize
  da?: ByteSize
  diskAvail?: ByteSize
  'disk.total'?: ByteSize
  dt?: ByteSize
  diskTotal?: ByteSize
  'disk.percent'?: Percentage
  dp?: Percentage
  diskPercent?: Percentage
  host?: Host
  h?: Host
  ip?: Ip
  node?: string
  n?: string
}

export interface CatAllocationRequest extends CatCatRequestBase {
  node_id?: NodeIds
  bytes?: Bytes
}

export type CatAllocationResponse = CatAllocationAllocationRecord[]

export interface CatCountCountRecord {
  epoch?: EpochMillis
  t?: EpochMillis
  time?: EpochMillis
  timestamp?: DateString
  ts?: DateString
  hms?: DateString
  hhmmss?: DateString
  count?: string
  dc?: string
  'docs.count'?: string
  docsCount?: string
}

export interface CatCountRequest extends CatCatRequestBase {
  index?: Indices
}

export type CatCountResponse = CatCountCountRecord[]

export interface CatDataFrameAnalyticsDataFrameAnalyticsRecord {
  id?: Id
  type?: Type
  t?: Type
  create_time?: string
  ct?: string
  createTime?: string
  version?: VersionString
  v?: VersionString
  source_index?: IndexName
  si?: IndexName
  sourceIndex?: IndexName
  dest_index?: IndexName
  di?: IndexName
  destIndex?: IndexName
  description?: string
  d?: string
  model_memory_limit?: string
  mml?: string
  modelMemoryLimit?: string
  state?: string
  s?: string
  failure_reason?: string
  fr?: string
  failureReason?: string
  progress?: string
  p?: string
  assignment_explanation?: string
  ae?: string
  assignmentExplanation?: string
  'node.id'?: Id
  ni?: Id
  nodeId?: Id
  'node.name'?: Name
  nn?: Name
  nodeName?: Name
  'node.ephemeral_id'?: Id
  ne?: Id
  nodeEphemeralId?: Id
  'node.address'?: string
  na?: string
  nodeAddress?: string
}

export interface CatDataFrameAnalyticsRequest extends CatCatRequestBase {
  id?: Id
  allow_no_match?: boolean
  bytes?: Bytes
}

export type CatDataFrameAnalyticsResponse = CatDataFrameAnalyticsDataFrameAnalyticsRecord[]

export interface CatDatafeedsDatafeedsRecord {
  id?: string
  state?: MlDatafeedState
  s?: MlDatafeedState
  assignment_explanation?: string
  ae?: string
  'buckets.count'?: string
  bc?: string
  bucketsCount?: string
  'search.count'?: string
  sc?: string
  searchCount?: string
  'search.time'?: string
  st?: string
  searchTime?: string
  'search.bucket_avg'?: string
  sba?: string
  searchBucketAvg?: string
  'search.exp_avg_hour'?: string
  seah?: string
  searchExpAvgHour?: string
  'node.id'?: string
  ni?: string
  nodeId?: string
  'node.name'?: string
  nn?: string
  nodeName?: string
  'node.ephemeral_id'?: string
  ne?: string
  nodeEphemeralId?: string
  'node.address'?: string
  na?: string
  nodeAddress?: string
}

export interface CatDatafeedsRequest extends CatCatRequestBase {
  datafeed_id?: Id
  allow_no_datafeeds?: boolean
}

export type CatDatafeedsResponse = CatDatafeedsDatafeedsRecord[]

export interface CatFielddataFielddataRecord {
  id?: string
  host?: string
  h?: string
  ip?: string
  node?: string
  n?: string
  field?: string
  f?: string
  size?: string
}

export interface CatFielddataRequest extends CatCatRequestBase {
  fields?: Fields
  bytes?: Bytes
}

export type CatFielddataResponse = CatFielddataFielddataRecord[]

export interface CatHealthHealthRecord {
  epoch?: EpochMillis
  time?: EpochMillis
  timestamp?: DateString
  ts?: DateString
  hms?: DateString
  hhmmss?: DateString
  cluster?: string
  cl?: string
  status?: string
  st?: string
  'node.total'?: string
  nt?: string
  nodeTotal?: string
  'node.data'?: string
  nd?: string
  nodeData?: string
  shards?: string
  t?: string
  sh?: string
  'shards.total'?: string
  shardsTotal?: string
  pri?: string
  p?: string
  'shards.primary'?: string
  shardsPrimary?: string
  relo?: string
  r?: string
  'shards.relocating'?: string
  shardsRelocating?: string
  init?: string
  i?: string
  'shards.initializing'?: string
  shardsInitializing?: string
  unassign?: string
  u?: string
  'shards.unassigned'?: string
  shardsUnassigned?: string
  pending_tasks?: string
  pt?: string
  pendingTasks?: string
  max_task_wait_time?: string
  mtwt?: string
  maxTaskWaitTime?: string
  active_shards_percent?: string
  asp?: string
  activeShardsPercent?: string
}

export interface CatHealthRequest extends CatCatRequestBase {
  include_timestamp?: boolean
  ts?: boolean
}

export type CatHealthResponse = CatHealthHealthRecord[]

export interface CatHelpHelpRecord {
  endpoint: string
}

export interface CatHelpRequest extends CatCatRequestBase {
}

export type CatHelpResponse = CatHelpHelpRecord[]

export interface CatIndicesIndicesRecord {
  health?: string
  h?: string
  status?: string
  s?: string
  index?: string
  i?: string
  idx?: string
  uuid?: string
  id?: string
  pri?: string
  p?: string
  'shards.primary'?: string
  shardsPrimary?: string
  rep?: string
  r?: string
  'shards.replica'?: string
  shardsReplica?: string
  'docs.count'?: string
  dc?: string
  docsCount?: string
  'docs.deleted'?: string
  dd?: string
  docsDeleted?: string
  'creation.date'?: string
  cd?: string
  'creation.date.string'?: string
  cds?: string
  'store.size'?: string
  ss?: string
  storeSize?: string
  'pri.store.size'?: string
  'completion.size'?: string
  cs?: string
  completionSize?: string
  'pri.completion.size'?: string
  'fielddata.memory_size'?: string
  fm?: string
  fielddataMemory?: string
  'pri.fielddata.memory_size'?: string
  'fielddata.evictions'?: string
  fe?: string
  fielddataEvictions?: string
  'pri.fielddata.evictions'?: string
  'query_cache.memory_size'?: string
  qcm?: string
  queryCacheMemory?: string
  'pri.query_cache.memory_size'?: string
  'query_cache.evictions'?: string
  qce?: string
  queryCacheEvictions?: string
  'pri.query_cache.evictions'?: string
  'request_cache.memory_size'?: string
  rcm?: string
  requestCacheMemory?: string
  'pri.request_cache.memory_size'?: string
  'request_cache.evictions'?: string
  rce?: string
  requestCacheEvictions?: string
  'pri.request_cache.evictions'?: string
  'request_cache.hit_count'?: string
  rchc?: string
  requestCacheHitCount?: string
  'pri.request_cache.hit_count'?: string
  'request_cache.miss_count'?: string
  rcmc?: string
  requestCacheMissCount?: string
  'pri.request_cache.miss_count'?: string
  'flush.total'?: string
  ft?: string
  flushTotal?: string
  'pri.flush.total'?: string
  'flush.total_time'?: string
  ftt?: string
  flushTotalTime?: string
  'pri.flush.total_time'?: string
  'get.current'?: string
  gc?: string
  getCurrent?: string
  'pri.get.current'?: string
  'get.time'?: string
  gti?: string
  getTime?: string
  'pri.get.time'?: string
  'get.total'?: string
  gto?: string
  getTotal?: string
  'pri.get.total'?: string
  'get.exists_time'?: string
  geti?: string
  getExistsTime?: string
  'pri.get.exists_time'?: string
  'get.exists_total'?: string
  geto?: string
  getExistsTotal?: string
  'pri.get.exists_total'?: string
  'get.missing_time'?: string
  gmti?: string
  getMissingTime?: string
  'pri.get.missing_time'?: string
  'get.missing_total'?: string
  gmto?: string
  getMissingTotal?: string
  'pri.get.missing_total'?: string
  'indexing.delete_current'?: string
  idc?: string
  indexingDeleteCurrent?: string
  'pri.indexing.delete_current'?: string
  'indexing.delete_time'?: string
  idti?: string
  indexingDeleteTime?: string
  'pri.indexing.delete_time'?: string
  'indexing.delete_total'?: string
  idto?: string
  indexingDeleteTotal?: string
  'pri.indexing.delete_total'?: string
  'indexing.index_current'?: string
  iic?: string
  indexingIndexCurrent?: string
  'pri.indexing.index_current'?: string
  'indexing.index_time'?: string
  iiti?: string
  indexingIndexTime?: string
  'pri.indexing.index_time'?: string
  'indexing.index_total'?: string
  iito?: string
  indexingIndexTotal?: string
  'pri.indexing.index_total'?: string
  'indexing.index_failed'?: string
  iif?: string
  indexingIndexFailed?: string
  'pri.indexing.index_failed'?: string
  'merges.current'?: string
  mc?: string
  mergesCurrent?: string
  'pri.merges.current'?: string
  'merges.current_docs'?: string
  mcd?: string
  mergesCurrentDocs?: string
  'pri.merges.current_docs'?: string
  'merges.current_size'?: string
  mcs?: string
  mergesCurrentSize?: string
  'pri.merges.current_size'?: string
  'merges.total'?: string
  mt?: string
  mergesTotal?: string
  'pri.merges.total'?: string
  'merges.total_docs'?: string
  mtd?: string
  mergesTotalDocs?: string
  'pri.merges.total_docs'?: string
  'merges.total_size'?: string
  mts?: string
  mergesTotalSize?: string
  'pri.merges.total_size'?: string
  'merges.total_time'?: string
  mtt?: string
  mergesTotalTime?: string
  'pri.merges.total_time'?: string
  'refresh.total'?: string
  rto?: string
  refreshTotal?: string
  'pri.refresh.total'?: string
  'refresh.time'?: string
  rti?: string
  refreshTime?: string
  'pri.refresh.time'?: string
  'refresh.external_total'?: string
  reto?: string
  'pri.refresh.external_total'?: string
  'refresh.external_time'?: string
  reti?: string
  'pri.refresh.external_time'?: string
  'refresh.listeners'?: string
  rli?: string
  refreshListeners?: string
  'pri.refresh.listeners'?: string
  'search.fetch_current'?: string
  sfc?: string
  searchFetchCurrent?: string
  'pri.search.fetch_current'?: string
  'search.fetch_time'?: string
  sfti?: string
  searchFetchTime?: string
  'pri.search.fetch_time'?: string
  'search.fetch_total'?: string
  sfto?: string
  searchFetchTotal?: string
  'pri.search.fetch_total'?: string
  'search.open_contexts'?: string
  so?: string
  searchOpenContexts?: string
  'pri.search.open_contexts'?: string
  'search.query_current'?: string
  sqc?: string
  searchQueryCurrent?: string
  'pri.search.query_current'?: string
  'search.query_time'?: string
  sqti?: string
  searchQueryTime?: string
  'pri.search.query_time'?: string
  'search.query_total'?: string
  sqto?: string
  searchQueryTotal?: string
  'pri.search.query_total'?: string
  'search.scroll_current'?: string
  scc?: string
  searchScrollCurrent?: string
  'pri.search.scroll_current'?: string
  'search.scroll_time'?: string
  scti?: string
  searchScrollTime?: string
  'pri.search.scroll_time'?: string
  'search.scroll_total'?: string
  scto?: string
  searchScrollTotal?: string
  'pri.search.scroll_total'?: string
  'segments.count'?: string
  sc?: string
  segmentsCount?: string
  'pri.segments.count'?: string
  'segments.memory'?: string
  sm?: string
  segmentsMemory?: string
  'pri.segments.memory'?: string
  'segments.index_writer_memory'?: string
  siwm?: string
  segmentsIndexWriterMemory?: string
  'pri.segments.index_writer_memory'?: string
  'segments.version_map_memory'?: string
  svmm?: string
  segmentsVersionMapMemory?: string
  'pri.segments.version_map_memory'?: string
  'segments.fixed_bitset_memory'?: string
  sfbm?: string
  fixedBitsetMemory?: string
  'pri.segments.fixed_bitset_memory'?: string
  'warmer.current'?: string
  wc?: string
  warmerCurrent?: string
  'pri.warmer.current'?: string
  'warmer.total'?: string
  wto?: string
  warmerTotal?: string
  'pri.warmer.total'?: string
  'warmer.total_time'?: string
  wtt?: string
  warmerTotalTime?: string
  'pri.warmer.total_time'?: string
  'suggest.current'?: string
  suc?: string
  suggestCurrent?: string
  'pri.suggest.current'?: string
  'suggest.time'?: string
  suti?: string
  suggestTime?: string
  'pri.suggest.time'?: string
  'suggest.total'?: string
  suto?: string
  suggestTotal?: string
  'pri.suggest.total'?: string
  'memory.total'?: string
  tm?: string
  memoryTotal?: string
  'pri.memory.total'?: string
  'search.throttled'?: string
  sth?: string
  'bulk.total_operations'?: string
  bto?: string
  bulkTotalOperation?: string
  'pri.bulk.total_operations'?: string
  'bulk.total_time'?: string
  btti?: string
  bulkTotalTime?: string
  'pri.bulk.total_time'?: string
  'bulk.total_size_in_bytes'?: string
  btsi?: string
  bulkTotalSizeInBytes?: string
  'pri.bulk.total_size_in_bytes'?: string
  'bulk.avg_time'?: string
  bati?: string
  bulkAvgTime?: string
  'pri.bulk.avg_time'?: string
  'bulk.avg_size_in_bytes'?: string
  basi?: string
  bulkAvgSizeInBytes?: string
  'pri.bulk.avg_size_in_bytes'?: string
}

export interface CatIndicesRequest extends CatCatRequestBase {
  index?: Indices
  bytes?: Bytes
  expand_wildcards?: ExpandWildcards
  health?: Health
  include_unloaded_segments?: boolean
  pri?: boolean
}

export type CatIndicesResponse = CatIndicesIndicesRecord[]

export interface CatJobsJobsRecord {
  id?: Id
  state?: MlJobState
  s?: MlJobState
  opened_time?: string
  ot?: string
  assignment_explanation?: string
  ae?: string
  'data.processed_records'?: string
  dpr?: string
  dataProcessedRecords?: string
  'data.processed_fields'?: string
  dpf?: string
  dataProcessedFields?: string
  'data.input_bytes'?: ByteSize
  dib?: ByteSize
  dataInputBytes?: ByteSize
  'data.input_records'?: string
  dir?: string
  dataInputRecords?: string
  'data.input_fields'?: string
  dif?: string
  dataInputFields?: string
  'data.invalid_dates'?: string
  did?: string
  dataInvalidDates?: string
  'data.missing_fields'?: string
  dmf?: string
  dataMissingFields?: string
  'data.out_of_order_timestamps'?: string
  doot?: string
  dataOutOfOrderTimestamps?: string
  'data.empty_buckets'?: string
  deb?: string
  dataEmptyBuckets?: string
  'data.sparse_buckets'?: string
  dsb?: string
  dataSparseBuckets?: string
  'data.buckets'?: string
  db?: string
  dataBuckets?: string
  'data.earliest_record'?: string
  der?: string
  dataEarliestRecord?: string
  'data.latest_record'?: string
  dlr?: string
  dataLatestRecord?: string
  'data.last'?: string
  dl?: string
  dataLast?: string
  'data.last_empty_bucket'?: string
  dleb?: string
  dataLastEmptyBucket?: string
  'data.last_sparse_bucket'?: string
  dlsb?: string
  dataLastSparseBucket?: string
  'model.bytes'?: ByteSize
  mb?: ByteSize
  modelBytes?: ByteSize
  'model.memory_status'?: MlMemoryStatus
  mms?: MlMemoryStatus
  modelMemoryStatus?: MlMemoryStatus
  'model.bytes_exceeded'?: ByteSize
  mbe?: ByteSize
  modelBytesExceeded?: ByteSize
  'model.memory_limit'?: string
  mml?: string
  modelMemoryLimit?: string
  'model.by_fields'?: string
  mbf?: string
  modelByFields?: string
  'model.over_fields'?: string
  mof?: string
  modelOverFields?: string
  'model.partition_fields'?: string
  mpf?: string
  modelPartitionFields?: string
  'model.bucket_allocation_failures'?: string
  mbaf?: string
  modelBucketAllocationFailures?: string
  'model.categorization_status'?: MlCategorizationStatus
  mcs?: MlCategorizationStatus
  modelCategorizationStatus?: MlCategorizationStatus
  'model.categorized_doc_count'?: string
  mcdc?: string
  modelCategorizedDocCount?: string
  'model.total_category_count'?: string
  mtcc?: string
  modelTotalCategoryCount?: string
  'model.frequent_category_count'?: string
  modelFrequentCategoryCount?: string
  'model.rare_category_count'?: string
  mrcc?: string
  modelRareCategoryCount?: string
  'model.dead_category_count'?: string
  mdcc?: string
  modelDeadCategoryCount?: string
  'model.failed_category_count'?: string
  mfcc?: string
  modelFailedCategoryCount?: string
  'model.log_time'?: string
  mlt?: string
  modelLogTime?: string
  'model.timestamp'?: string
  mt?: string
  modelTimestamp?: string
  'forecasts.total'?: string
  ft?: string
  forecastsTotal?: string
  'forecasts.memory.min'?: string
  fmmin?: string
  forecastsMemoryMin?: string
  'forecasts.memory.max'?: string
  fmmax?: string
  forecastsMemoryMax?: string
  'forecasts.memory.avg'?: string
  fmavg?: string
  forecastsMemoryAvg?: string
  'forecasts.memory.total'?: string
  fmt?: string
  forecastsMemoryTotal?: string
  'forecasts.records.min'?: string
  frmin?: string
  forecastsRecordsMin?: string
  'forecasts.records.max'?: string
  frmax?: string
  forecastsRecordsMax?: string
  'forecasts.records.avg'?: string
  fravg?: string
  forecastsRecordsAvg?: string
  'forecasts.records.total'?: string
  frt?: string
  forecastsRecordsTotal?: string
  'forecasts.time.min'?: string
  ftmin?: string
  forecastsTimeMin?: string
  'forecasts.time.max'?: string
  ftmax?: string
  forecastsTimeMax?: string
  'forecasts.time.avg'?: string
  ftavg?: string
  forecastsTimeAvg?: string
  'forecasts.time.total'?: string
  ftt?: string
  forecastsTimeTotal?: string
  'node.id'?: NodeId
  ni?: NodeId
  nodeId?: NodeId
  'node.name'?: string
  nn?: string
  nodeName?: string
  'node.ephemeral_id'?: NodeId
  ne?: NodeId
  nodeEphemeralId?: NodeId
  'node.address'?: string
  na?: string
  nodeAddress?: string
  'buckets.count'?: string
  bc?: string
  bucketsCount?: string
  'buckets.time.total'?: string
  btt?: string
  bucketsTimeTotal?: string
  'buckets.time.min'?: string
  btmin?: string
  bucketsTimeMin?: string
  'buckets.time.max'?: string
  btmax?: string
  bucketsTimeMax?: string
  'buckets.time.exp_avg'?: string
  btea?: string
  bucketsTimeExpAvg?: string
  'buckets.time.exp_avg_hour'?: string
  bteah?: string
  bucketsTimeExpAvgHour?: string
}

export interface CatJobsRequest extends CatCatRequestBase {
  job_id?: Id
  allow_no_jobs?: boolean
  bytes?: Bytes
}

export type CatJobsResponse = CatJobsJobsRecord[]

export interface CatMasterMasterRecord {
  id?: string
  host?: string
  h?: string
  ip?: string
  node?: string
  n?: string
}

export interface CatMasterRequest extends CatCatRequestBase {
}

export type CatMasterResponse = CatMasterMasterRecord[]

export interface CatNodeAttributesNodeAttributesRecord {
  node?: string
  id?: string
  pid?: string
  host?: string
  h?: string
  ip?: string
  i?: string
  port?: string
  attr?: string
  value?: string
}

export interface CatNodeAttributesRequest extends CatCatRequestBase {
}

export type CatNodeAttributesResponse = CatNodeAttributesNodeAttributesRecord[]

export interface CatNodesNodesRecord {
  id?: Id
  nodeId?: Id
  pid?: string
  p?: string
  ip?: string
  i?: string
  port?: string
  po?: string
  http_address?: string
  http?: string
  version?: VersionString
  v?: VersionString
  flavor?: string
  f?: string
  type?: Type
  t?: Type
  build?: string
  b?: string
  jdk?: string
  j?: string
  'disk.total'?: ByteSize
  dt?: ByteSize
  diskTotal?: ByteSize
  'disk.used'?: ByteSize
  du?: ByteSize
  diskUsed?: ByteSize
  'disk.avail'?: ByteSize
  d?: ByteSize
  da?: ByteSize
  disk?: ByteSize
  diskAvail?: ByteSize
  'disk.used_percent'?: Percentage
  dup?: Percentage
  diskUsedPercent?: Percentage
  'heap.current'?: string
  hc?: string
  heapCurrent?: string
  'heap.percent'?: Percentage
  hp?: Percentage
  heapPercent?: Percentage
  'heap.max'?: string
  hm?: string
  heapMax?: string
  'ram.current'?: string
  rc?: string
  ramCurrent?: string
  'ram.percent'?: Percentage
  rp?: Percentage
  ramPercent?: Percentage
  'ram.max'?: string
  rn?: string
  ramMax?: string
  'file_desc.current'?: string
  fdc?: string
  fileDescriptorCurrent?: string
  'file_desc.percent'?: Percentage
  fdp?: Percentage
  fileDescriptorPercent?: Percentage
  'file_desc.max'?: string
  fdm?: string
  fileDescriptorMax?: string
  cpu?: string
  load_1m?: string
  load_5m?: string
  load_15m?: string
  l?: string
  uptime?: string
  u?: string
  'node.role'?: string
  r?: string
  role?: string
  nodeRole?: string
  master?: string
  m?: string
  name?: Name
  n?: Name
  'completion.size'?: string
  cs?: string
  completionSize?: string
  'fielddata.memory_size'?: string
  fm?: string
  fielddataMemory?: string
  'fielddata.evictions'?: string
  fe?: string
  fielddataEvictions?: string
  'query_cache.memory_size'?: string
  qcm?: string
  queryCacheMemory?: string
  'query_cache.evictions'?: string
  qce?: string
  queryCacheEvictions?: string
  'query_cache.hit_count'?: string
  qchc?: string
  queryCacheHitCount?: string
  'query_cache.miss_count'?: string
  qcmc?: string
  queryCacheMissCount?: string
  'request_cache.memory_size'?: string
  rcm?: string
  requestCacheMemory?: string
  'request_cache.evictions'?: string
  rce?: string
  requestCacheEvictions?: string
  'request_cache.hit_count'?: string
  rchc?: string
  requestCacheHitCount?: string
  'request_cache.miss_count'?: string
  rcmc?: string
  requestCacheMissCount?: string
  'flush.total'?: string
  ft?: string
  flushTotal?: string
  'flush.total_time'?: string
  ftt?: string
  flushTotalTime?: string
  'get.current'?: string
  gc?: string
  getCurrent?: string
  'get.time'?: string
  gti?: string
  getTime?: string
  'get.total'?: string
  gto?: string
  getTotal?: string
  'get.exists_time'?: string
  geti?: string
  getExistsTime?: string
  'get.exists_total'?: string
  geto?: string
  getExistsTotal?: string
  'get.missing_time'?: string
  gmti?: string
  getMissingTime?: string
  'get.missing_total'?: string
  gmto?: string
  getMissingTotal?: string
  'indexing.delete_current'?: string
  idc?: string
  indexingDeleteCurrent?: string
  'indexing.delete_time'?: string
  idti?: string
  indexingDeleteTime?: string
  'indexing.delete_total'?: string
  idto?: string
  indexingDeleteTotal?: string
  'indexing.index_current'?: string
  iic?: string
  indexingIndexCurrent?: string
  'indexing.index_time'?: string
  iiti?: string
  indexingIndexTime?: string
  'indexing.index_total'?: string
  iito?: string
  indexingIndexTotal?: string
  'indexing.index_failed'?: string
  iif?: string
  indexingIndexFailed?: string
  'merges.current'?: string
  mc?: string
  mergesCurrent?: string
  'merges.current_docs'?: string
  mcd?: string
  mergesCurrentDocs?: string
  'merges.current_size'?: string
  mcs?: string
  mergesCurrentSize?: string
  'merges.total'?: string
  mt?: string
  mergesTotal?: string
  'merges.total_docs'?: string
  mtd?: string
  mergesTotalDocs?: string
  'merges.total_size'?: string
  mts?: string
  mergesTotalSize?: string
  'merges.total_time'?: string
  mtt?: string
  mergesTotalTime?: string
  'refresh.total'?: string
  'refresh.time'?: string
  'refresh.external_total'?: string
  rto?: string
  refreshTotal?: string
  'refresh.external_time'?: string
  rti?: string
  refreshTime?: string
  'refresh.listeners'?: string
  rli?: string
  refreshListeners?: string
  'script.compilations'?: string
  scrcc?: string
  scriptCompilations?: string
  'script.cache_evictions'?: string
  scrce?: string
  scriptCacheEvictions?: string
  'script.compilation_limit_triggered'?: string
  scrclt?: string
  scriptCacheCompilationLimitTriggered?: string
  'search.fetch_current'?: string
  sfc?: string
  searchFetchCurrent?: string
  'search.fetch_time'?: string
  sfti?: string
  searchFetchTime?: string
  'search.fetch_total'?: string
  sfto?: string
  searchFetchTotal?: string
  'search.open_contexts'?: string
  so?: string
  searchOpenContexts?: string
  'search.query_current'?: string
  sqc?: string
  searchQueryCurrent?: string
  'search.query_time'?: string
  sqti?: string
  searchQueryTime?: string
  'search.query_total'?: string
  sqto?: string
  searchQueryTotal?: string
  'search.scroll_current'?: string
  scc?: string
  searchScrollCurrent?: string
  'search.scroll_time'?: string
  scti?: string
  searchScrollTime?: string
  'search.scroll_total'?: string
  scto?: string
  searchScrollTotal?: string
  'segments.count'?: string
  sc?: string
  segmentsCount?: string
  'segments.memory'?: string
  sm?: string
  segmentsMemory?: string
  'segments.index_writer_memory'?: string
  siwm?: string
  segmentsIndexWriterMemory?: string
  'segments.version_map_memory'?: string
  svmm?: string
  segmentsVersionMapMemory?: string
  'segments.fixed_bitset_memory'?: string
  sfbm?: string
  fixedBitsetMemory?: string
  'suggest.current'?: string
  suc?: string
  suggestCurrent?: string
  'suggest.time'?: string
  suti?: string
  suggestTime?: string
  'suggest.total'?: string
  suto?: string
  suggestTotal?: string
  'bulk.total_operations'?: string
  bto?: string
  bulkTotalOperations?: string
  'bulk.total_time'?: string
  btti?: string
  bulkTotalTime?: string
  'bulk.total_size_in_bytes'?: string
  btsi?: string
  bulkTotalSizeInBytes?: string
  'bulk.avg_time'?: string
  bati?: string
  bulkAvgTime?: string
  'bulk.avg_size_in_bytes'?: string
  basi?: string
  bulkAvgSizeInBytes?: string
}

export interface CatNodesRequest extends CatCatRequestBase {
  bytes?: Bytes
  full_id?: boolean | string
}

export type CatNodesResponse = CatNodesNodesRecord[]

export interface CatPendingTasksPendingTasksRecord {
  insertOrder?: string
  o?: string
  timeInQueue?: string
  t?: string
  priority?: string
  p?: string
  source?: string
  s?: string
}

export interface CatPendingTasksRequest extends CatCatRequestBase {
}

export type CatPendingTasksResponse = CatPendingTasksPendingTasksRecord[]

export interface CatPluginsPluginsRecord {
  id?: NodeId
  name?: Name
  n?: Name
  component?: string
  c?: string
  version?: VersionString
  v?: VersionString
  description?: string
  d?: string
  type?: Type
  t?: Type
}

export interface CatPluginsRequest extends CatCatRequestBase {
}

export type CatPluginsResponse = CatPluginsPluginsRecord[]

export interface CatRecoveryRecoveryRecord {
  index?: IndexName
  i?: IndexName
  idx?: IndexName
  shard?: string
  s?: string
  sh?: string
  start_time?: string
  start?: string
  start_time_millis?: string
  start_millis?: string
  stop_time?: string
  stop?: string
  stop_time_millis?: string
  stop_millis?: string
  time?: string
  t?: string
  ti?: string
  type?: Type
  ty?: Type
  stage?: string
  st?: string
  source_host?: string
  shost?: string
  source_node?: string
  snode?: string
  target_host?: string
  thost?: string
  target_node?: string
  tnode?: string
  repository?: string
  rep?: string
  snapshot?: string
  snap?: string
  files?: string
  f?: string
  files_recovered?: string
  fr?: string
  files_percent?: Percentage
  fp?: Percentage
  files_total?: string
  tf?: string
  bytes?: string
  b?: string
  bytes_recovered?: string
  br?: string
  bytes_percent?: Percentage
  bp?: Percentage
  bytes_total?: string
  tb?: string
  translog_ops?: string
  to?: string
  translog_ops_recovered?: string
  tor?: string
  translog_ops_percent?: Percentage
  top?: Percentage
}

export interface CatRecoveryRequest extends CatCatRequestBase {
  index?: Indices
  active_only?: boolean
  bytes?: Bytes
  detailed?: boolean
}

export type CatRecoveryResponse = CatRecoveryRecoveryRecord[]

export interface CatRepositoriesRepositoriesRecord {
  id?: string
  repoId?: string
  type?: string
  t?: string
}

export interface CatRepositoriesRequest extends CatCatRequestBase {
}

export type CatRepositoriesResponse = CatRepositoriesRepositoriesRecord[]

export interface CatSegmentsRequest extends CatCatRequestBase {
  index?: Indices
  bytes?: Bytes
}

export type CatSegmentsResponse = CatSegmentsSegmentsRecord[]

export interface CatSegmentsSegmentsRecord {
  index?: IndexName
  i?: IndexName
  idx?: IndexName
  shard?: string
  s?: string
  sh?: string
  prirep?: string
  p?: string
  pr?: string
  primaryOrReplica?: string
  ip?: string
  id?: NodeId
  segment?: string
  seg?: string
  generation?: string
  g?: string
  gen?: string
  'docs.count'?: string
  dc?: string
  docsCount?: string
  'docs.deleted'?: string
  dd?: string
  docsDeleted?: string
  size?: ByteSize
  si?: ByteSize
  'size.memory'?: ByteSize
  sm?: ByteSize
  sizeMemory?: ByteSize
  committed?: string
  ic?: string
  isCommitted?: string
  searchable?: string
  is?: string
  isSearchable?: string
  version?: VersionString
  v?: VersionString
  compound?: string
  ico?: string
  isCompound?: string
}

export interface CatShardsRequest extends CatCatRequestBase {
  index?: Indices
  bytes?: Bytes
}

export type CatShardsResponse = CatShardsShardsRecord[]

export interface CatShardsShardsRecord {
  index?: string
  i?: string
  idx?: string
  shard?: string
  s?: string
  sh?: string
  prirep?: string
  p?: string
  pr?: string
  primaryOrReplica?: string
  state?: string
  st?: string
  docs?: string
  d?: string
  dc?: string
  store?: string
  sto?: string
  ip?: string
  id?: string
  node?: string
  n?: string
  sync_id?: string
  'unassigned.reason'?: string
  ur?: string
  'unassigned.at'?: string
  ua?: string
  'unassigned.for'?: string
  uf?: string
  'unassigned.details'?: string
  ud?: string
  'recoverysource.type'?: string
  rs?: string
  'completion.size'?: string
  cs?: string
  completionSize?: string
  'fielddata.memory_size'?: string
  fm?: string
  fielddataMemory?: string
  'fielddata.evictions'?: string
  fe?: string
  fielddataEvictions?: string
  'query_cache.memory_size'?: string
  qcm?: string
  queryCacheMemory?: string
  'query_cache.evictions'?: string
  qce?: string
  queryCacheEvictions?: string
  'flush.total'?: string
  ft?: string
  flushTotal?: string
  'flush.total_time'?: string
  ftt?: string
  flushTotalTime?: string
  'get.current'?: string
  gc?: string
  getCurrent?: string
  'get.time'?: string
  gti?: string
  getTime?: string
  'get.total'?: string
  gto?: string
  getTotal?: string
  'get.exists_time'?: string
  geti?: string
  getExistsTime?: string
  'get.exists_total'?: string
  geto?: string
  getExistsTotal?: string
  'get.missing_time'?: string
  gmti?: string
  getMissingTime?: string
  'get.missing_total'?: string
  gmto?: string
  getMissingTotal?: string
  'indexing.delete_current'?: string
  idc?: string
  indexingDeleteCurrent?: string
  'indexing.delete_time'?: string
  idti?: string
  indexingDeleteTime?: string
  'indexing.delete_total'?: string
  idto?: string
  indexingDeleteTotal?: string
  'indexing.index_current'?: string
  iic?: string
  indexingIndexCurrent?: string
  'indexing.index_time'?: string
  iiti?: string
  indexingIndexTime?: string
  'indexing.index_total'?: string
  iito?: string
  indexingIndexTotal?: string
  'indexing.index_failed'?: string
  iif?: string
  indexingIndexFailed?: string
  'merges.current'?: string
  mc?: string
  mergesCurrent?: string
  'merges.current_docs'?: string
  mcd?: string
  mergesCurrentDocs?: string
  'merges.current_size'?: string
  mcs?: string
  mergesCurrentSize?: string
  'merges.total'?: string
  mt?: string
  mergesTotal?: string
  'merges.total_docs'?: string
  mtd?: string
  mergesTotalDocs?: string
  'merges.total_size'?: string
  mts?: string
  mergesTotalSize?: string
  'merges.total_time'?: string
  mtt?: string
  mergesTotalTime?: string
  'refresh.total'?: string
  'refresh.time'?: string
  'refresh.external_total'?: string
  rto?: string
  refreshTotal?: string
  'refresh.external_time'?: string
  rti?: string
  refreshTime?: string
  'refresh.listeners'?: string
  rli?: string
  refreshListeners?: string
  'search.fetch_current'?: string
  sfc?: string
  searchFetchCurrent?: string
  'search.fetch_time'?: string
  sfti?: string
  searchFetchTime?: string
  'search.fetch_total'?: string
  sfto?: string
  searchFetchTotal?: string
  'search.open_contexts'?: string
  so?: string
  searchOpenContexts?: string
  'search.query_current'?: string
  sqc?: string
  searchQueryCurrent?: string
  'search.query_time'?: string
  sqti?: string
  searchQueryTime?: string
  'search.query_total'?: string
  sqto?: string
  searchQueryTotal?: string
  'search.scroll_current'?: string
  scc?: string
  searchScrollCurrent?: string
  'search.scroll_time'?: string
  scti?: string
  searchScrollTime?: string
  'search.scroll_total'?: string
  scto?: string
  searchScrollTotal?: string
  'segments.count'?: string
  sc?: string
  segmentsCount?: string
  'segments.memory'?: string
  sm?: string
  segmentsMemory?: string
  'segments.index_writer_memory'?: string
  siwm?: string
  segmentsIndexWriterMemory?: string
  'segments.version_map_memory'?: string
  svmm?: string
  segmentsVersionMapMemory?: string
  'segments.fixed_bitset_memory'?: string
  sfbm?: string
  fixedBitsetMemory?: string
  'seq_no.max'?: string
  sqm?: string
  maxSeqNo?: string
  'seq_no.local_checkpoint'?: string
  sql?: string
  localCheckpoint?: string
  'seq_no.global_checkpoint'?: string
  sqg?: string
  globalCheckpoint?: string
  'warmer.current'?: string
  wc?: string
  warmerCurrent?: string
  'warmer.total'?: string
  wto?: string
  warmerTotal?: string
  'warmer.total_time'?: string
  wtt?: string
  warmerTotalTime?: string
  'path.data'?: string
  pd?: string
  dataPath?: string
  'path.state'?: string
  ps?: string
  statsPath?: string
  'bulk.total_operations'?: string
  bto?: string
  bulkTotalOperations?: string
  'bulk.total_time'?: string
  btti?: string
  bulkTotalTime?: string
  'bulk.total_size_in_bytes'?: string
  btsi?: string
  bulkTotalSizeInBytes?: string
  'bulk.avg_time'?: string
  bati?: string
  bulkAvgTime?: string
  'bulk.avg_size_in_bytes'?: string
  basi?: string
  bulkAvgSizeInBytes?: string
}

export interface CatSnapshotsRequest extends CatCatRequestBase {
  repository?: Names
  ignore_unavailable?: boolean
}

export type CatSnapshotsResponse = CatSnapshotsSnapshotsRecord[]

export interface CatSnapshotsSnapshotsRecord {
  id?: string
  snapshot?: string
  repository?: string
  re?: string
  repo?: string
  status?: string
  s?: string
  start_epoch?: EpochMillis
  ste?: EpochMillis
  startEpoch?: EpochMillis
  start_time?: DateString
  sti?: DateString
  startTime?: DateString
  end_epoch?: EpochMillis
  ete?: EpochMillis
  endEpoch?: EpochMillis
  end_time?: DateString
  eti?: DateString
  endTime?: DateString
  duration?: Time
  dur?: Time
  indices?: string
  i?: string
  successful_shards?: string
  ss?: string
  failed_shards?: string
  fs?: string
  total_shards?: string
  ts?: string
  reason?: string
  r?: string
}

export interface CatTasksRequest extends CatCatRequestBase {
  actions?: string[]
  detailed?: boolean
  node_id?: string[]
  parent_task?: long
}

export type CatTasksResponse = CatTasksTasksRecord[]

export interface CatTasksTasksRecord {
  id?: Id
  action?: string
  ac?: string
  task_id?: Id
  ti?: Id
  parent_task_id?: string
  pti?: string
  type?: Type
  ty?: Type
  start_time?: string
  start?: string
  timestamp?: string
  ts?: string
  hms?: string
  hhmmss?: string
  running_time_ns?: string
  running_time?: string
  time?: string
  node_id?: NodeId
  ni?: NodeId
  ip?: string
  i?: string
  port?: string
  po?: string
  node?: string
  n?: string
  version?: VersionString
  v?: VersionString
  x_opaque_id?: string
  x?: string
  description?: string
  desc?: string
}

export interface CatTemplatesRequest extends CatCatRequestBase {
  name?: Name
}

export type CatTemplatesResponse = CatTemplatesTemplatesRecord[]

export interface CatTemplatesTemplatesRecord {
  name?: Name
  n?: Name
  index_patterns?: string
  t?: string
  order?: string
  o?: string
  p?: string
  version?: VersionString
  v?: VersionString
  composed_of?: string
  c?: string
}

export interface CatThreadPoolRequest extends CatCatRequestBase {
  thread_pool_patterns?: Names
  size?: Size | boolean
}

export type CatThreadPoolResponse = CatThreadPoolThreadPoolRecord[]

export interface CatThreadPoolThreadPoolRecord {
  node_name?: string
  nn?: string
  node_id?: NodeId
  id?: NodeId
  ephemeral_node_id?: string
  eid?: string
  pid?: string
  p?: string
  host?: string
  h?: string
  ip?: string
  i?: string
  port?: string
  po?: string
  name?: string
  n?: string
  type?: string
  t?: string
  active?: string
  a?: string
  pool_size?: string
  psz?: string
  queue?: string
  q?: string
  queue_size?: string
  qs?: string
  rejected?: string
  r?: string
  largest?: string
  l?: string
  completed?: string
  c?: string
  core?: string
  cr?: string
  max?: string
  mx?: string
  size?: string
  sz?: string
  keep_alive?: string
  ka?: string
}

export interface CatTrainedModelsRequest extends CatCatRequestBase {
  model_id?: Id
  allow_no_match?: boolean
  bytes?: Bytes
  from?: integer
  size?: integer
}

export type CatTrainedModelsResponse = CatTrainedModelsTrainedModelsRecord[]

export interface CatTrainedModelsTrainedModelsRecord {
  id?: Id
  created_by?: string
  c?: string
  createdBy?: string
  heap_size?: ByteSize
  hs?: ByteSize
  modelHeapSize?: ByteSize
  operations?: string
  o?: string
  modelOperations?: string
  license?: string
  l?: string
  create_time?: DateString
  ct?: DateString
  version?: VersionString
  v?: VersionString
  description?: string
  d?: string
  'ingest.pipelines'?: string
  ip?: string
  ingestPipelines?: string
  'ingest.count'?: string
  ic?: string
  ingestCount?: string
  'ingest.time'?: string
  it?: string
  ingestTime?: string
  'ingest.current'?: string
  icurr?: string
  ingestCurrent?: string
  'ingest.failed'?: string
  if?: string
  ingestFailed?: string
  'data_frame.id'?: string
  dfid?: string
  dataFrameAnalytics?: string
  'data_frame.create_time'?: string
  dft?: string
  dataFrameAnalyticsTime?: string
  'data_frame.source_index'?: string
  dfsi?: string
  dataFrameAnalyticsSrcIndex?: string
  'data_frame.analysis'?: string
  dfa?: string
  dataFrameAnalyticsAnalysis?: string
}

export interface CatTransformsRequest extends CatCatRequestBase {
  transform_id?: Id
  allow_no_match?: boolean
  from?: integer
  size?: integer
}

export type CatTransformsResponse = CatTransformsTransformsRecord[]

export interface CatTransformsTransformsRecord {
  id?: Id
  state?: string
  s?: string
  checkpoint?: string
  c?: string
  documents_processed?: string
  docp?: string
  documentsProcessed?: string
  checkpoint_progress?: string
  cp?: string
  checkpointProgress?: string
  last_search_time?: string
  lst?: string
  lastSearchTime?: string
  changes_last_detection_time?: string
  cldt?: string
  create_time?: string
  ct?: string
  createTime?: string
  version?: VersionString
  v?: VersionString
  source_index?: string
  si?: string
  sourceIndex?: string
  dest_index?: string
  di?: string
  destIndex?: string
  pipeline?: string
  p?: string
  description?: string
  d?: string
  transform_type?: string
  tt?: string
  frequency?: string
  f?: string
  max_page_search_size?: string
  mpsz?: string
  docs_per_second?: string
  dps?: string
  reason?: string
  r?: string
  search_total?: string
  st?: string
  search_failure?: string
  sf?: string
  search_time?: string
  stime?: string
  index_total?: string
  it?: string
  index_failure?: string
  if?: string
  index_time?: string
  itime?: string
  documents_indexed?: string
  doci?: string
  delete_time?: string
  dtime?: string
  documents_deleted?: string
  docd?: string
  trigger_count?: string
  tc?: string
  pages_processed?: string
  pp?: string
  processing_time?: string
  pt?: string
  checkpoint_duration_time_exp_avg?: string
  cdtea?: string
  checkpointTimeExpAvg?: string
  indexed_documents_exp_avg?: string
  idea?: string
  processed_documents_exp_avg?: string
  pdea?: string
}

export interface CcrFollowIndexStats {
  index: IndexName
  shards: CcrShardStats[]
}

export interface CcrReadException {
  exception: ErrorCause
  from_seq_no: SequenceNumber
  retries: integer
}

export interface CcrShardStats {
  bytes_read: long
  failed_read_requests: long
  failed_write_requests: long
  fatal_exception?: ErrorCause
  follower_aliases_version: VersionNumber
  follower_global_checkpoint: long
  follower_index: string
  follower_mapping_version: VersionNumber
  follower_max_seq_no: SequenceNumber
  follower_settings_version: VersionNumber
  last_requested_seq_no: SequenceNumber
  leader_global_checkpoint: long
  leader_index: string
  leader_max_seq_no: SequenceNumber
  operations_read: long
  operations_written: long
  outstanding_read_requests: integer
  outstanding_write_requests: integer
  read_exceptions: CcrReadException[]
  remote_cluster: string
  shard_id: integer
  successful_read_requests: long
  successful_write_requests: long
  time_since_last_read_millis: EpochMillis
  total_read_remote_exec_time_millis: EpochMillis
  total_read_time_millis: EpochMillis
  total_write_time_millis: EpochMillis
  write_buffer_operation_count: long
  write_buffer_size_in_bytes: ByteSize
}

export interface CcrCreateFollowIndexRequest extends RequestBase {
  index: IndexName
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    leader_index?: IndexName
    max_outstanding_read_requests?: long
    max_outstanding_write_requests?: long
    max_read_request_operation_count?: long
    max_read_request_size?: string
    max_retry_delay?: Time
    max_write_buffer_count?: long
    max_write_buffer_size?: string
    max_write_request_operation_count?: long
    max_write_request_size?: string
    read_poll_timeout?: Time
    remote_cluster?: string
  }
}

export interface CcrCreateFollowIndexResponse {
  follow_index_created: boolean
  follow_index_shards_acked: boolean
  index_following_started: boolean
}

export interface CcrDeleteAutoFollowPatternRequest extends RequestBase {
  name: Name
}

export interface CcrDeleteAutoFollowPatternResponse extends AcknowledgedResponseBase {
}

export interface CcrFollowIndexStatsRequest extends RequestBase {
  index: Indices
}

export interface CcrFollowIndexStatsResponse {
  indices: CcrFollowIndexStats[]
}

export interface CcrFollowInfoFollowerIndex {
  follower_index: IndexName
  leader_index: IndexName
  parameters?: CcrFollowInfoFollowerIndexParameters
  remote_cluster: Name
  status: CcrFollowInfoFollowerIndexStatus
}

export interface CcrFollowInfoFollowerIndexParameters {
  max_outstanding_read_requests: integer
  max_outstanding_write_requests: integer
  max_read_request_operation_count: integer
  max_read_request_size: string
  max_retry_delay: Time
  max_write_buffer_count: integer
  max_write_buffer_size: string
  max_write_request_operation_count: integer
  max_write_request_size: string
  read_poll_timeout: Time
}

export type CcrFollowInfoFollowerIndexStatus = 'active' | 'paused'

export interface CcrFollowInfoRequest extends RequestBase {
  index: Indices
}

export interface CcrFollowInfoResponse {
  follower_indices: CcrFollowInfoFollowerIndex[]
}

export interface CcrForgetFollowerIndexRequest extends RequestBase {
  index: IndexName
  body?: {
    follower_cluster?: string
    follower_index?: IndexName
    follower_index_uuid?: Uuid
    leader_remote_cluster?: string
  }
}

export interface CcrForgetFollowerIndexResponse {
  _shards: ShardStatistics
}

export interface CcrGetAutoFollowPatternAutoFollowPattern {
  name: Name
  pattern: CcrGetAutoFollowPatternAutoFollowPatternSummary
}

export interface CcrGetAutoFollowPatternAutoFollowPatternSummary {
  active: boolean
  remote_cluster: string
  follow_index_pattern?: IndexPattern
  leader_index_patterns: IndexPatterns
  max_outstanding_read_requests: integer
}

export interface CcrGetAutoFollowPatternRequest extends RequestBase {
  name?: Name
}

export interface CcrGetAutoFollowPatternResponse {
  patterns: CcrGetAutoFollowPatternAutoFollowPattern[]
}

export interface CcrPauseAutoFollowPatternRequest extends RequestBase {
  name: Name
}

export interface CcrPauseAutoFollowPatternResponse extends AcknowledgedResponseBase {
}

export interface CcrPauseFollowIndexRequest extends RequestBase {
  index: IndexName
}

export interface CcrPauseFollowIndexResponse extends AcknowledgedResponseBase {
}

export interface CcrPutAutoFollowPatternRequest extends RequestBase {
  name: Name
  body?: {
    remote_cluster: string
    follow_index_pattern?: IndexPattern
    leader_index_patterns?: IndexPatterns
    max_outstanding_read_requests?: integer
    settings?: Record<string, any>
    max_outstanding_write_requests?: integer
    read_poll_timeout?: Time
    max_read_request_operation_count?: integer
    max_read_request_size?: ByteSize
    max_retry_delay?: Time
    max_write_buffer_count?: integer
    max_write_buffer_size?: ByteSize
    max_write_request_operation_count?: integer
    max_write_request_size?: ByteSize
  }
}

export interface CcrPutAutoFollowPatternResponse extends AcknowledgedResponseBase {
}

export interface CcrResumeAutoFollowPatternRequest extends RequestBase {
  name: Name
}

export interface CcrResumeAutoFollowPatternResponse extends AcknowledgedResponseBase {
}

export interface CcrResumeFollowIndexRequest extends RequestBase {
  index: IndexName
  body?: {
    max_outstanding_read_requests?: long
    max_outstanding_write_requests?: long
    max_read_request_operation_count?: long
    max_read_request_size?: string
    max_retry_delay?: Time
    max_write_buffer_count?: long
    max_write_buffer_size?: string
    max_write_request_operation_count?: long
    max_write_request_size?: string
    read_poll_timeout?: Time
  }
}

export interface CcrResumeFollowIndexResponse extends AcknowledgedResponseBase {
}

export interface CcrStatsAutoFollowStats {
  auto_followed_clusters: CcrStatsAutoFollowedCluster[]
  number_of_failed_follow_indices: long
  number_of_failed_remote_cluster_state_requests: long
  number_of_successful_follow_indices: long
  recent_auto_follow_errors: ErrorCause[]
}

export interface CcrStatsAutoFollowedCluster {
  cluster_name: Name
  last_seen_metadata_version: VersionNumber
  time_since_last_check_millis: DateString
}

export interface CcrStatsFollowStats {
  indices: CcrFollowIndexStats[]
}

export interface CcrStatsRequest extends RequestBase {
}

export interface CcrStatsResponse {
  auto_follow_stats: CcrStatsAutoFollowStats
  follow_stats: CcrStatsFollowStats
}

export interface CcrUnfollowIndexRequest extends RequestBase {
  index: IndexName
}

export interface CcrUnfollowIndexResponse extends AcknowledgedResponseBase {
}

export interface ClusterClusterStateBlockIndex {
  description?: string
  retryable?: boolean
  levels?: string[]
  aliases?: IndexAlias[]
  aliases_version?: VersionNumber
  version?: VersionNumber
  mapping_version?: VersionNumber
  settings_version?: VersionNumber
  routing_num_shards?: VersionNumber
  state?: string
  settings?: Record<IndexName, IndicesIndexSettings>
  in_sync_allocations?: Record<string, string[]>
  primary_terms?: Record<string, integer>
  mappings?: Record<string, MappingTypeMapping>
  rollover_info?: Record<string, IndicesRolloverRolloverConditions>
  timestamp_range?: Record<string, any>
  system?: boolean
}

export interface ClusterClusterStateDeletedSnapshots {
  snapshot_deletions: string[]
}

export interface ClusterClusterStateIndexLifecycle {
  policies: Record<IndexName, ClusterClusterStateIndexLifecycleSummary>
  operation_mode: LifecycleOperationMode
}

export interface ClusterClusterStateIndexLifecyclePolicy {
  phases: IlmPhases
}

export interface ClusterClusterStateIndexLifecycleSummary {
  policy: ClusterClusterStateIndexLifecyclePolicy
  headers: HttpHeaders
  version: VersionNumber
  modified_date: long
  modified_date_string: DateString
}

export interface ClusterClusterStateIngest {
  pipeline: ClusterClusterStateIngestPipeline[]
}

export interface ClusterClusterStateIngestPipeline {
  id: Id
  config: ClusterClusterStateIngestPipelineConfig
}

export interface ClusterClusterStateIngestPipelineConfig {
  description?: string
  version?: VersionNumber
  processors: IngestProcessorContainer[]
}

export interface ClusterClusterStateMetadata {
  cluster_uuid: Uuid
  cluster_uuid_committed: boolean
  templates: ClusterClusterStateMetadataTemplate
  indices?: Record<IndexName, ClusterClusterStateBlockIndex>
  'index-graveyard': ClusterClusterStateMetadataIndexGraveyard
  cluster_coordination: ClusterClusterStateMetadataClusterCoordination
  ingest?: ClusterClusterStateIngest
  repositories?: Record<string, string>
  component_template?: Record<string, any>
  index_template?: Record<string, any>
  index_lifecycle?: ClusterClusterStateIndexLifecycle
}

export interface ClusterClusterStateMetadataClusterCoordination {
  term: integer
  last_committed_config: string[]
  last_accepted_config: string[]
  voting_config_exclusions: ClusterVotingConfigExclusionsItem[]
}

export interface ClusterClusterStateMetadataIndexGraveyard {
  tombstones: ClusterTombstone[]
}

export interface ClusterClusterStateMetadataTemplate {
}

export interface ClusterClusterStateRoutingNodes {
  unassigned: NodeShard[]
  nodes: Record<string, NodeShard[]>
}

export interface ClusterClusterStateSnapshots {
  snapshots: SnapshotStatus[]
}

export type ClusterClusterStatus = 'green' | 'yellow' | 'red'

export interface ClusterComponentTemplate {
  name: Name
  component_template: ClusterComponentTemplateNode
}

export interface ClusterComponentTemplateNode {
  template: ClusterComponentTemplateSummary
  version?: VersionNumber
  _meta?: Metadata
}

export interface ClusterComponentTemplateSummary {
  _meta?: Metadata
  version?: VersionNumber
  settings: Record<IndexName, IndicesIndexSettings>
  mappings?: MappingTypeMapping
  aliases?: Record<string, IndicesAliasDefinition>
}

export interface ClusterTombstone {
  index: ClusterTombstoneIndex
  delete_date?: DateString
  delete_date_in_millis: long
}

export interface ClusterTombstoneIndex {
  index_name: Name
  index_uuid: Uuid
}

export interface ClusterVotingConfigExclusionsItem {
  node_id: Id
  node_name: Name
}

export interface ClusterAllocationExplainAllocationDecision {
  decider: string
  decision: ClusterAllocationExplainAllocationExplainDecision
  explanation: string
}

export type ClusterAllocationExplainAllocationExplainDecision = 'NO' | 'YES' | 'THROTTLE' | 'ALWAYS'

export interface ClusterAllocationExplainAllocationStore {
  allocation_id: string
  found: boolean
  in_sync: boolean
  matching_size_in_bytes: long
  matching_sync_id: boolean
  store_exception: string
}

export interface ClusterAllocationExplainClusterInfo {
  nodes: Record<string, ClusterAllocationExplainNodeDiskUsage>
  shard_sizes: Record<string, long>
  shard_data_set_sizes?: Record<string, string>
  shard_paths: Record<string, string>
  reserved_sizes: ClusterAllocationExplainReservedSize[]
}

export interface ClusterAllocationExplainCurrentNode {
  id: Id
  name: Name
  attributes: Record<string, string>
  transport_address: TransportAddress
  weight_ranking: integer
}

export type ClusterAllocationExplainDecision = 'yes' | 'no' | 'worse_balance' | 'throttled' | 'awaiting_info' | 'allocation_delayed' | 'no_valid_shard_copy' | 'no_attempt'

export interface ClusterAllocationExplainDiskUsage {
  path: string
  total_bytes: long
  used_bytes: long
  free_bytes: long
  free_disk_percent: double
  used_disk_percent: double
}

export interface ClusterAllocationExplainNodeAllocationExplanation {
  deciders: ClusterAllocationExplainAllocationDecision[]
  node_attributes: Record<string, string>
  node_decision: ClusterAllocationExplainDecision
  node_id: Id
  node_name: Name
  store?: ClusterAllocationExplainAllocationStore
  transport_address: TransportAddress
  weight_ranking: integer
}

export interface ClusterAllocationExplainNodeDiskUsage {
  node_name: Name
  least_available: ClusterAllocationExplainDiskUsage
  most_available: ClusterAllocationExplainDiskUsage
}

export interface ClusterAllocationExplainRequest extends RequestBase {
  include_disk_info?: boolean
  include_yes_decisions?: boolean
  body?: {
    current_node?: string
    index?: IndexName
    primary?: boolean
    shard?: integer
  }
}

export interface ClusterAllocationExplainReservedSize {
  node_id: Id
  path: string
  total: long
  shards: string[]
}

export interface ClusterAllocationExplainResponse {
  allocate_explanation?: string
  allocation_delay?: string
  allocation_delay_in_millis?: long
  can_allocate?: ClusterAllocationExplainDecision
  can_move_to_other_node?: ClusterAllocationExplainDecision
  can_rebalance_cluster?: ClusterAllocationExplainDecision
  can_rebalance_cluster_decisions?: ClusterAllocationExplainAllocationDecision[]
  can_rebalance_to_other_node?: ClusterAllocationExplainDecision
  can_remain_decisions?: ClusterAllocationExplainAllocationDecision[]
  can_remain_on_current_node?: ClusterAllocationExplainDecision
  cluster_info?: ClusterAllocationExplainClusterInfo
  configured_delay?: string
  configured_delay_in_millis?: long
  current_node?: ClusterAllocationExplainCurrentNode
  current_state: string
  index: IndexName
  move_explanation?: string
  node_allocation_decisions?: ClusterAllocationExplainNodeAllocationExplanation[]
  primary: boolean
  rebalance_explanation?: string
  remaining_delay?: string
  remaining_delay_in_millis?: long
  shard: integer
  unassigned_info?: ClusterAllocationExplainUnassignedInformation
}

export interface ClusterAllocationExplainUnassignedInformation {
  at: DateString
  last_allocation_status?: string
  reason: ClusterAllocationExplainUnassignedInformationReason
  details?: string
  failed_allocation_attempts?: integer
  delayed?: boolean
  allocation_status?: string
}

export type ClusterAllocationExplainUnassignedInformationReason = 'INDEX_CREATED' | 'CLUSTER_RECOVERED' | 'INDEX_REOPENED' | 'DANGLING_INDEX_IMPORTED' | 'NEW_INDEX_RESTORED' | 'EXISTING_INDEX_RESTORED' | 'REPLICA_ADDED' | 'ALLOCATION_FAILED' | 'NODE_LEFT' | 'REROUTE_CANCELLED' | 'REINITIALIZED' | 'REALLOCATED_REPLICA' | 'PRIMARY_FAILED' | 'FORCED_EMPTY_PRIMARY' | 'MANUAL_ALLOCATION'

export interface ClusterDeleteComponentTemplateRequest extends RequestBase {
  name: Name
  master_timeout?: Time
  timeout?: Time
}

export interface ClusterDeleteComponentTemplateResponse extends AcknowledgedResponseBase {
}

export interface ClusterDeleteVotingConfigExclusionsRequest extends RequestBase {
  body?: {
    stub: string
  }
}

export interface ClusterDeleteVotingConfigExclusionsResponse {
  stub: integer
}

export interface ClusterExistsComponentTemplateRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface ClusterExistsComponentTemplateResponse {
  stub: integer
}

export interface ClusterGetComponentTemplateRequest extends RequestBase {
  name?: Name
  flat_settings?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface ClusterGetComponentTemplateResponse {
  component_templates: ClusterComponentTemplate[]
}

export interface ClusterGetSettingsRequest extends RequestBase {
  flat_settings?: boolean
  include_defaults?: boolean
  master_timeout?: Time
  timeout?: Time
}

export interface ClusterGetSettingsResponse {
  persistent: Record<string, any>
  transient: Record<string, any>
  defaults?: Record<string, any>
}

export interface ClusterHealthIndexHealthStats {
  active_primary_shards: integer
  active_shards: integer
  initializing_shards: integer
  number_of_replicas: integer
  number_of_shards: integer
  relocating_shards: integer
  shards?: Record<string, ClusterHealthShardHealthStats>
  status: Health
  unassigned_shards: integer
}

export interface ClusterHealthRequest extends RequestBase {
  index?: Indices
  expand_wildcards?: ExpandWildcards
  level?: Level
  local?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  wait_for_events?: WaitForEvents
  wait_for_nodes?: string
  wait_for_no_initializing_shards?: boolean
  wait_for_no_relocating_shards?: boolean
  wait_for_status?: WaitForStatus
}

export interface ClusterHealthResponse {
  active_primary_shards: integer
  active_shards: integer
  active_shards_percent_as_number: Percentage
  cluster_name: string
  delayed_unassigned_shards: integer
  indices?: Record<IndexName, ClusterHealthIndexHealthStats>
  initializing_shards: integer
  number_of_data_nodes: integer
  number_of_in_flight_fetch: integer
  number_of_nodes: integer
  number_of_pending_tasks: integer
  relocating_shards: integer
  status: Health
  task_max_waiting_in_queue_millis: EpochMillis
  timed_out: boolean
  unassigned_shards: integer
}

export interface ClusterHealthShardHealthStats {
  active_shards: integer
  initializing_shards: integer
  primary_active: boolean
  relocating_shards: integer
  status: Health
  unassigned_shards: integer
}

export interface ClusterPendingTasksPendingTask {
  insert_order: integer
  priority: string
  source: string
  time_in_queue: string
  time_in_queue_millis: integer
}

export interface ClusterPendingTasksRequest extends RequestBase {
  local?: boolean
  master_timeout?: Time
}

export interface ClusterPendingTasksResponse {
  tasks: ClusterPendingTasksPendingTask[]
}

export interface ClusterPutComponentTemplateRequest extends RequestBase {
  name: Name
  create?: boolean
  master_timeout?: Time
  body?: {
    template: IndicesIndexState
    aliases?: Record<string, IndicesAliasDefinition>
    mappings?: MappingTypeMapping
    settings?: IndicesIndexSettings
    version?: VersionNumber
    _meta?: Metadata
  }
}

export interface ClusterPutComponentTemplateResponse extends AcknowledgedResponseBase {
}

export interface ClusterPutSettingsRequest extends RequestBase {
  flat_settings?: boolean
  master_timeout?: Time
  timeout?: Time
  body?: {
    persistent?: Record<string, any>
    transient?: Record<string, any>
  }
}

export interface ClusterPutSettingsResponse {
  acknowledged: boolean
  persistent: Record<string, any>
  transient: Record<string, any>
}

export interface ClusterPutVotingConfigExclusionsRequest extends RequestBase {
  node_names?: Names
  node_ids?: Ids
  timeout?: Time
  wait_for_removal?: boolean
}

export interface ClusterPutVotingConfigExclusionsResponse {
  stub: integer
}

export interface ClusterRemoteInfoClusterRemoteInfo {
  connected: boolean
  initial_connect_timeout: Time
  max_connections_per_cluster: integer
  num_nodes_connected: long
  seeds: string[]
  skip_unavailable: boolean
}

export interface ClusterRemoteInfoRequest extends RequestBase {
  body?: {
    stub: string
  }
}

export interface ClusterRemoteInfoResponse extends DictionaryResponseBase<string, ClusterRemoteInfoClusterRemoteInfo> {
}

export interface ClusterRerouteCommand {
  cancel?: ClusterRerouteCommandCancelAction
  move?: ClusterRerouteCommandMoveAction
  allocate_replica?: ClusterRerouteCommandAllocateReplicaAction
  allocate_stale_primary?: ClusterRerouteCommandAllocatePrimaryAction
  allocate_empty_primary?: ClusterRerouteCommandAllocatePrimaryAction
}

export interface ClusterRerouteCommandAllocatePrimaryAction {
  index: IndexName
  shard: integer
  node: string
  accept_data_loss: boolean
}

export interface ClusterRerouteCommandAllocateReplicaAction {
  index: IndexName
  shard: integer
  node: string
}

export interface ClusterRerouteCommandCancelAction {
  index: IndexName
  shard: integer
  node: string
  allow_primary?: boolean
}

export interface ClusterRerouteCommandMoveAction {
  index: IndexName
  shard: integer
  from_node: string
  to_node: string
}

export interface ClusterRerouteRequest extends RequestBase {
  dry_run?: boolean
  explain?: boolean
  metric?: Metrics
  retry_failed?: boolean
  master_timeout?: Time
  timeout?: Time
  body?: {
    commands?: ClusterRerouteCommand[]
  }
}

export interface ClusterRerouteRerouteDecision {
  decider: string
  decision: string
  explanation: string
}

export interface ClusterRerouteRerouteExplanation {
  command: string
  decisions: ClusterRerouteRerouteDecision[]
  parameters: ClusterRerouteRerouteParameters
}

export interface ClusterRerouteRerouteParameters {
  allow_primary: boolean
  index: IndexName
  node: NodeName
  shard: integer
  from_node?: NodeName
  to_node?: NodeName
}

export interface ClusterRerouteRerouteState {
  cluster_uuid: Uuid
  state_uuid?: Uuid
  master_node?: string
  version?: VersionNumber
  blocks?: EmptyObject
  nodes?: Record<NodeName, NodeAttributes>
  routing_table?: Record<string, EmptyObject>
  routing_nodes?: ClusterClusterStateRoutingNodes
  security_tokens?: Record<string, string>
  snapshots?: ClusterClusterStateSnapshots
  snapshot_deletions?: ClusterClusterStateDeletedSnapshots
  metadata?: ClusterClusterStateMetadata
}

export interface ClusterRerouteResponse extends AcknowledgedResponseBase {
  explanations?: ClusterRerouteRerouteExplanation[]
  state: ClusterRerouteRerouteState
}

export interface ClusterStateClusterStateBlocks {
  indices?: Record<IndexName, Record<string, ClusterClusterStateBlockIndex>>
}

export interface ClusterStateRequest extends RequestBase {
  metric?: Metrics
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  local?: boolean
  master_timeout?: Time
  wait_for_metadata_version?: VersionNumber
  wait_for_timeout?: Time
}

export interface ClusterStateResponse {
  cluster_name: Name
  cluster_uuid: Uuid
  master_node?: string
  state?: string[]
  state_uuid?: Uuid
  version?: VersionNumber
  blocks?: ClusterStateClusterStateBlocks
  metadata?: ClusterClusterStateMetadata
  nodes?: Record<NodeName, NodeAttributes>
  routing_table?: Record<string, EmptyObject>
  routing_nodes?: ClusterClusterStateRoutingNodes
  snapshots?: ClusterClusterStateSnapshots
  snapshot_deletions?: ClusterClusterStateDeletedSnapshots
}

export interface ClusterStatsCharFilterTypes {
  char_filter_types: ClusterStatsFieldTypes[]
  tokenizer_types: ClusterStatsFieldTypes[]
  filter_types: ClusterStatsFieldTypes[]
  analyzer_types: ClusterStatsFieldTypes[]
  built_in_char_filters: ClusterStatsFieldTypes[]
  built_in_tokenizers: ClusterStatsFieldTypes[]
  built_in_filters: ClusterStatsFieldTypes[]
  built_in_analyzers: ClusterStatsFieldTypes[]
}

export interface ClusterStatsClusterFileSystem {
  available_in_bytes: long
  free_in_bytes: long
  total_in_bytes: long
}

export interface ClusterStatsClusterIndices {
  completion: CompletionStats
  count: long
  docs: DocStats
  fielddata: FielddataStats
  query_cache: QueryCacheStats
  segments: SegmentsStats
  shards: ClusterStatsClusterIndicesShards
  store: StoreStats
  mappings: ClusterStatsFieldTypesMappings
  analysis: ClusterStatsCharFilterTypes
  versions?: ClusterStatsIndicesVersions[]
}

export interface ClusterStatsClusterIndicesShards {
  index?: ClusterStatsClusterIndicesShardsIndex
  primaries?: double
  replication?: double
  total?: double
}

export interface ClusterStatsClusterIndicesShardsIndex {
  primaries: ClusterStatsClusterShardMetrics
  replication: ClusterStatsClusterShardMetrics
  shards: ClusterStatsClusterShardMetrics
}

export interface ClusterStatsClusterIngest {
  number_of_pipelines: integer
  processor_stats: Record<string, ClusterStatsClusterProcessor>
}

export interface ClusterStatsClusterJvm {
  max_uptime_in_millis: long
  mem: ClusterStatsClusterJvmMemory
  threads: long
  versions: ClusterStatsClusterJvmVersion[]
}

export interface ClusterStatsClusterJvmMemory {
  heap_max_in_bytes: long
  heap_used_in_bytes: long
}

export interface ClusterStatsClusterJvmVersion {
  bundled_jdk: boolean
  count: integer
  using_bundled_jdk: boolean
  version: VersionString
  vm_name: string
  vm_vendor: string
  vm_version: VersionString
}

export interface ClusterStatsClusterNetworkTypes {
  http_types: Record<string, integer>
  transport_types: Record<string, integer>
}

export interface ClusterStatsClusterNodeCount {
  coordinating_only: integer
  data: integer
  ingest: integer
  master: integer
  total: integer
  voting_only: integer
  data_cold: integer
  data_frozen?: integer
  data_content: integer
  data_warm: integer
  data_hot: integer
  ml: integer
  remote_cluster_client: integer
  transform: integer
}

export interface ClusterStatsClusterNodes {
  count: ClusterStatsClusterNodeCount
  discovery_types: Record<string, integer>
  fs: ClusterStatsClusterFileSystem
  ingest: ClusterStatsClusterIngest
  jvm: ClusterStatsClusterJvm
  network_types: ClusterStatsClusterNetworkTypes
  os: ClusterStatsClusterOperatingSystem
  packaging_types: ClusterStatsNodePackagingType[]
  plugins: PluginStats[]
  process: ClusterStatsClusterProcess
  versions: VersionString[]
}

export interface ClusterStatsClusterOperatingSystem {
  allocated_processors: integer
  available_processors: integer
  mem: ClusterStatsOperatingSystemMemoryInfo
  names: ClusterStatsClusterOperatingSystemName[]
  pretty_names: ClusterStatsClusterOperatingSystemName[]
  architectures?: ClusterStatsClusterOperatingSystemArchitecture[]
}

export interface ClusterStatsClusterOperatingSystemArchitecture {
  count: integer
  arch: string
}

export interface ClusterStatsClusterOperatingSystemName {
  count: integer
  name: Name
}

export interface ClusterStatsClusterProcess {
  cpu: ClusterStatsClusterProcessCpu
  open_file_descriptors: ClusterStatsClusterProcessOpenFileDescriptors
}

export interface ClusterStatsClusterProcessCpu {
  percent: integer
}

export interface ClusterStatsClusterProcessOpenFileDescriptors {
  avg: long
  max: long
  min: long
}

export interface ClusterStatsClusterProcessor {
  count: long
  current: long
  failed: long
  time_in_millis: long
}

export interface ClusterStatsClusterShardMetrics {
  avg: double
  max: double
  min: double
}

export interface ClusterStatsFieldTypes {
  name: Name
  count: integer
  index_count: integer
  script_count?: integer
}

export interface ClusterStatsFieldTypesMappings {
  field_types: ClusterStatsFieldTypes[]
  runtime_field_types?: ClusterStatsRuntimeFieldTypes[]
}

export interface ClusterStatsIndicesVersions {
  index_count: integer
  primary_shard_count: integer
  total_primary_bytes: long
  version: VersionString
}

export interface ClusterStatsNodePackagingType {
  count: integer
  flavor: string
  type: string
}

export interface ClusterStatsOperatingSystemMemoryInfo {
  free_in_bytes: long
  free_percent: integer
  total_in_bytes: long
  used_in_bytes: long
  used_percent: integer
}

export interface ClusterStatsRequest extends RequestBase {
  node_id?: NodeIds
  flat_settings?: boolean
  timeout?: Time
}

export interface ClusterStatsResponse extends NodesNodesResponseBase {
  cluster_name: Name
  cluster_uuid: Uuid
  indices: ClusterStatsClusterIndices
  nodes: ClusterStatsClusterNodes
  status: ClusterClusterStatus
  timestamp: long
}

export interface ClusterStatsRuntimeFieldTypes {
  name: Name
  count: integer
  index_count: integer
  scriptless_count: integer
  shadowed_count: integer
  lang: string[]
  lines_max: integer
  lines_total: integer
  chars_max: integer
  chars_total: integer
  source_max: integer
  source_total: integer
  doc_max: integer
  doc_total: integer
}

export interface DanglingIndicesIndexDeleteRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface DanglingIndicesIndexDeleteResponse {
  stub: integer
}

export interface DanglingIndicesIndexImportRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface DanglingIndicesIndexImportResponse {
  stub: integer
}

export interface DanglingIndicesIndicesListRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface DanglingIndicesIndicesListResponse {
  stub: integer
}

export interface EnrichConfiguration {
  geo_match?: EnrichPolicy
  match: EnrichPolicy
}

export interface EnrichPolicy {
  enrich_fields: Fields
  indices: Indices
  match_field: Field
  query?: string
  name?: Name
}

export interface EnrichSummary {
  config: EnrichConfiguration
}

export interface EnrichDeletePolicyRequest extends RequestBase {
  name: Name
}

export interface EnrichDeletePolicyResponse extends AcknowledgedResponseBase {
}

export type EnrichExecutePolicyEnrichPolicyPhase = 'SCHEDULED' | 'RUNNING' | 'COMPLETE' | 'FAILED'

export interface EnrichExecutePolicyExecuteEnrichPolicyStatus {
  phase: EnrichExecutePolicyEnrichPolicyPhase
}

export interface EnrichExecutePolicyRequest extends RequestBase {
  name: Name
  wait_for_completion?: boolean
}

export interface EnrichExecutePolicyResponse {
  status: EnrichExecutePolicyExecuteEnrichPolicyStatus
  task_id?: TaskId
}

export interface EnrichGetPolicyRequest extends RequestBase {
  name?: Names
}

export interface EnrichGetPolicyResponse {
  policies: EnrichSummary[]
}

export interface EnrichPutPolicyRequest extends RequestBase {
  name: Name
  body?: {
    geo_match?: EnrichPolicy
    match?: EnrichPolicy
  }
}

export interface EnrichPutPolicyResponse extends AcknowledgedResponseBase {
}

export interface EnrichStatsCoordinatorStats {
  executed_searches_total: long
  node_id: Id
  queue_size: integer
  remote_requests_current: integer
  remote_requests_total: long
}

export interface EnrichStatsExecutingPolicy {
  name: Name
  task: TaskInfo
}

export interface EnrichStatsRequest extends RequestBase {
}

export interface EnrichStatsResponse {
  coordinator_stats: EnrichStatsCoordinatorStats[]
  executing_policies: EnrichStatsExecutingPolicy[]
}

export interface EqlEqlHits<TEvent = unknown> {
  total?: SearchTotalHits
  events?: EqlHitsEvent<TEvent>[]
  sequences?: EqlHitsSequence<TEvent>[]
}

export interface EqlEqlSearchResponseBase<TEvent = unknown> {
  id?: Id
  is_partial?: boolean
  is_running?: boolean
  took?: integer
  timed_out?: boolean
  hits: EqlEqlHits<TEvent>
}

export interface EqlHitsEvent<TEvent = unknown> {
  _index: IndexName
  _id: Id
  _source: TEvent
  fields?: Record<Field, any[]>
}

export interface EqlHitsSequence<TEvent = unknown> {
  events: EqlHitsEvent<TEvent>[]
  join_keys: any[]
}

export interface EqlDeleteRequest extends RequestBase {
  id: Id
}

export interface EqlDeleteResponse extends AcknowledgedResponseBase {
}

export interface EqlGetRequest extends RequestBase {
  id: Id
  keep_alive?: Time
  wait_for_completion_timeout?: Time
}

export interface EqlGetResponse<TEvent = unknown> extends EqlEqlSearchResponseBase<TEvent> {
}

export interface EqlGetStatusRequest extends RequestBase {
  id: Id
}

export interface EqlGetStatusResponse {
  id: Id
  is_partial: boolean
  is_running: boolean
  start_time_in_millis?: EpochMillis
  expiration_time_in_millis?: EpochMillis
  completion_status?: integer
}

export interface EqlSearchRequest extends RequestBase {
  index: IndexName
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  keep_alive?: Time
  keep_on_completion?: boolean
  wait_for_completion_timeout?: Time
  body?: {
    query: string
    case_sensitive?: boolean
    event_category_field?: Field
    tiebreaker_field?: Field
    timestamp_field?: Field
    fetch_size?: uint
    filter?: QueryDslQueryContainer | QueryDslQueryContainer[]
    keep_alive?: Time
    keep_on_completion?: boolean
    wait_for_completion_timeout?: Time
    size?: uint | float
    fields?: (Field | EqlSearchSearchFieldFormatted)[]
    result_position?: EqlSearchResultPosition
  }
}

export interface EqlSearchResponse<TEvent = unknown> extends EqlEqlSearchResponseBase<TEvent> {
}

export type EqlSearchResultPosition = 'tail' | 'head'

export interface EqlSearchSearchFieldFormatted {
  field: Field
  format?: string
}

export interface FeaturesGetFeaturesRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface FeaturesGetFeaturesResponse {
  stub: integer
}

export interface FeaturesResetFeaturesRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface FeaturesResetFeaturesResponse {
  stub: integer
}

export interface GraphConnection {
  doc_count: long
  source: long
  target: long
  weight: double
}

export interface GraphExploreControls {
  sample_diversity?: GraphSampleDiversity
  sample_size?: integer
  timeout?: Time
  use_significance: boolean
}

export interface GraphHop {
  connections?: GraphHop
  query: QueryDslQueryContainer
  vertices: GraphVertexDefinition[]
}

export interface GraphSampleDiversity {
  field: Field
  max_docs_per_value: integer
}

export interface GraphVertex {
  depth: long
  field: Field
  term: string
  weight: double
}

export interface GraphVertexDefinition {
  exclude?: string[]
  field: Field
  include?: GraphVertexInclude[]
  min_doc_count?: long
  shard_min_doc_count?: long
  size?: integer
}

export interface GraphVertexInclude {
  boost: double
  term: string
}

export interface GraphExploreRequest extends RequestBase {
  index: Indices
  type?: Types
  routing?: Routing
  timeout?: Time
  body?: {
    connections?: GraphHop
    controls?: GraphExploreControls
    query?: QueryDslQueryContainer
    vertices?: GraphVertexDefinition[]
  }
}

export interface GraphExploreResponse {
  connections: GraphConnection[]
  failures: ShardFailure[]
  timed_out: boolean
  took: long
  vertices: GraphVertex[]
}

export interface IlmAction {
}

export interface IlmPhase {
  actions: Record<string, IlmAction> | string[]
  min_age?: Time
}

export interface IlmPhases {
  cold?: IlmPhase
  delete?: IlmPhase
  hot?: IlmPhase
  warm?: IlmPhase
}

export interface IlmPolicy {
  phases: IlmPhases
  name?: Name
}

export interface IlmDeleteLifecycleRequest extends RequestBase {
  policy?: Name
  policy_id: Id
}

export interface IlmDeleteLifecycleResponse extends AcknowledgedResponseBase {
}

export interface IlmExplainLifecycleLifecycleExplain {
  action: Name
  action_time_millis: EpochMillis
  age: Time
  failed_step?: Name
  failed_step_retry_count?: integer
  index: IndexName
  is_auto_retryable_error?: boolean
  lifecycle_date_millis: EpochMillis
  managed: boolean
  phase: Name
  phase_time_millis: EpochMillis
  policy: Name
  step: Name
  step_info?: Record<string, any>
  step_time_millis: EpochMillis
  phase_execution: IlmExplainLifecycleLifecycleExplainPhaseExecution
}

export interface IlmExplainLifecycleLifecycleExplainPhaseExecution {
  policy: Name
  version: VersionNumber
  modified_date_in_millis: EpochMillis
}

export interface IlmExplainLifecycleLifecycleExplainProject {
  project: IlmExplainLifecycleLifecycleExplainProjectSummary
}

export interface IlmExplainLifecycleLifecycleExplainProjectSummary {
  index: IndexName
  managed: boolean
}

export interface IlmExplainLifecycleRequest extends RequestBase {
  index: IndexName
  only_errors?: boolean
  only_managed?: boolean
}

export interface IlmExplainLifecycleResponse {
  indices: Record<IndexName, IlmExplainLifecycleLifecycleExplain> | IlmExplainLifecycleLifecycleExplainProject
}

export interface IlmGetLifecycleLifecycle {
  modified_date: DateString
  policy: IlmPolicy
  version: VersionNumber
}

export interface IlmGetLifecycleRequest extends RequestBase {
  policy?: Name
  policy_id?: Id
}

export interface IlmGetLifecycleResponse extends DictionaryResponseBase<string, IlmGetLifecycleLifecycle> {
}

export interface IlmGetStatusRequest extends RequestBase {
}

export interface IlmGetStatusResponse {
  operation_mode: LifecycleOperationMode
}

export interface IlmMoveToStepRequest extends RequestBase {
  index: IndexName
  body?: {
    current_step?: IlmMoveToStepStepKey
    next_step?: IlmMoveToStepStepKey
  }
}

export interface IlmMoveToStepResponse extends AcknowledgedResponseBase {
}

export interface IlmMoveToStepStepKey {
  action: string
  name: string
  phase: string
}

export interface IlmPutLifecycleRequest extends RequestBase {
  policy?: Name
  policy_id?: Id
  body?: {
    policy?: IlmPolicy
  }
}

export interface IlmPutLifecycleResponse extends AcknowledgedResponseBase {
}

export interface IlmRemovePolicyRequest extends RequestBase {
  index: IndexName
}

export interface IlmRemovePolicyResponse {
  failed_indexes: IndexName[]
  has_failures: boolean
}

export interface IlmRetryRequest extends RequestBase {
  index: IndexName
}

export interface IlmRetryResponse extends AcknowledgedResponseBase {
}

export interface IlmStartRequest extends RequestBase {
  body?: {
    stub: boolean
  }
}

export interface IlmStartResponse extends AcknowledgedResponseBase {
}

export interface IlmStopRequest extends RequestBase {
  body?: {
    stub: boolean
  }
}

export interface IlmStopResponse extends AcknowledgedResponseBase {
}

export interface IndicesAlias {
  filter?: QueryDslQueryContainer
  index_routing?: Routing
  is_hidden?: boolean
  is_write_index?: boolean
  routing?: Routing
  search_routing?: Routing
}

export interface IndicesAliasDefinition {
  filter?: QueryDslQueryContainer
  index_routing?: string
  is_write_index?: boolean
  routing?: string
  search_routing?: string
}

export type IndicesDataStreamHealthStatus = 'GREEN' | 'green' | 'YELLOW' | 'yellow' | 'RED' | 'red'

export interface IndicesFielddataFrequencyFilter {
  max: double
  min: double
  min_segment_size: integer
}

export type IndicesIndexCheckOnStartup = 'false' | 'checksum' | 'true'

export interface IndicesIndexRouting {
  allocation?: IndicesIndexRoutingAllocation
  rebalance?: IndicesIndexRoutingRebalance
}

export interface IndicesIndexRoutingAllocation {
  enable?: IndicesIndexRoutingAllocationOptions
  include?: IndicesIndexRoutingAllocationInclude
  initial_recovery?: IndicesIndexRoutingAllocationInitialRecovery
  disk?: IndicesIndexRoutingAllocationDisk
}

export interface IndicesIndexRoutingAllocationDisk {
  threshold_enabled: boolean | string
}

export interface IndicesIndexRoutingAllocationInclude {
  _tier_preference?: string
  _id?: Id
}

export interface IndicesIndexRoutingAllocationInitialRecovery {
  _id?: Id
}

export type IndicesIndexRoutingAllocationOptions = 'all' | 'primaries' | 'new_primaries' | 'none'

export interface IndicesIndexRoutingRebalance {
  enable: IndicesIndexRoutingRebalanceOptions
}

export type IndicesIndexRoutingRebalanceOptions = 'all' | 'primaries' | 'replicas' | 'none'

export interface IndicesIndexSettingBlocks {
  read_only?: boolean
  'index.blocks.read_only'?: boolean
  read_only_allow_delete?: boolean
  'index.blocks.read_only_allow_delete'?: boolean
  read?: boolean
  'index.blocks.read'?: boolean
  write?: boolean | string
  'index.blocks.write'?: boolean | string
  metadata?: boolean
  'index.blocks.metadata'?: boolean
}

export interface IndicesIndexSettings {
  number_of_shards?: integer | string
  'index.number_of_shards'?: integer | string
  number_of_replicas?: integer | string
  'index.number_of_replicas'?: integer | string
  number_of_routing_shards?: integer
  'index.number_of_routing_shards'?: integer
  check_on_startup?: IndicesIndexCheckOnStartup
  'index.check_on_startup'?: IndicesIndexCheckOnStartup
  codec?: string
  'index.codec'?: string
  routing_partition_size?: integer | string
  'index.routing_partition_size'?: integer | string
  'soft_deletes.retention_lease.period'?: Time
  'index.soft_deletes.retention_lease.period'?: Time
  load_fixed_bitset_filters_eagerly?: boolean
  'index.load_fixed_bitset_filters_eagerly'?: boolean
  hidden?: boolean | string
  'index.hidden'?: boolean | string
  auto_expand_replicas?: string
  'index.auto_expand_replicas'?: string
  'search.idle.after'?: Time
  'index.search.idle.after'?: Time
  refresh_interval?: Time
  'index.refresh_interval'?: Time
  max_result_window?: integer
  'index.max_result_window'?: integer
  max_inner_result_window?: integer
  'index.max_inner_result_window'?: integer
  max_rescore_window?: integer
  'index.max_rescore_window'?: integer
  max_docvalue_fields_search?: integer
  'index.max_docvalue_fields_search'?: integer
  max_script_fields?: integer
  'index.max_script_fields'?: integer
  max_ngram_diff?: integer
  'index.max_ngram_diff'?: integer
  max_shingle_diff?: integer
  'index.max_shingle_diff'?: integer
  blocks?: IndicesIndexSettingBlocks
  'index.blocks'?: IndicesIndexSettingBlocks
  max_refresh_listeners?: integer
  'index.max_refresh_listeners'?: integer
  'analyze.max_token_count'?: integer
  'index.analyze.max_token_count'?: integer
  'highlight.max_analyzed_offset'?: integer
  'index.highlight.max_analyzed_offset'?: integer
  max_terms_count?: integer
  'index.max_terms_count'?: integer
  max_regex_length?: integer
  'index.max_regex_length'?: integer
  routing?: IndicesIndexRouting
  'index.routing'?: IndicesIndexRouting
  gc_deletes?: Time
  'index.gc_deletes'?: Time
  default_pipeline?: PipelineName
  'index.default_pipeline'?: PipelineName
  final_pipeline?: PipelineName
  'index.final_pipeline'?: PipelineName
  lifecycle?: IndicesIndexSettingsLifecycle
  'index.lifecycle'?: IndicesIndexSettingsLifecycle
  provided_name?: Name
  'index.provided_name'?: Name
  creation_date?: DateString
  'index.creation_date'?: DateString
  uuid?: Uuid
  'index.uuid'?: Uuid
  version?: IndicesIndexVersioning
  'index.version'?: IndicesIndexVersioning
  verified_before_close?: boolean | string
  'index.verified_before_close'?: boolean | string
  format?: string | integer
  'index.format'?: string | integer
  max_slices_per_scroll?: integer
  'index.max_slices_per_scroll'?: integer
  'translog.durability'?: string
  'index.translog.durability'?: string
  'query_string.lenient'?: boolean | string
  'index.query_string.lenient'?: boolean | string
  priority?: integer | string
  'index.priority'?: integer | string
  top_metrics_max_size?: integer
  analysis?: IndicesIndexSettingsAnalysis
}

export interface IndicesIndexSettingsAnalysis {
  char_filter?: Record<string, AnalysisCharFilter>
}

export interface IndicesIndexSettingsLifecycle {
  name: Name
}

export interface IndicesIndexState {
  aliases?: Record<IndexName, IndicesAlias>
  mappings?: MappingTypeMapping
  settings: IndicesIndexSettings | IndicesIndexStatePrefixedSettings
}

export interface IndicesIndexStatePrefixedSettings {
  index: IndicesIndexSettings
}

export interface IndicesIndexVersioning {
  created: VersionString
}

export interface IndicesNumericFielddata {
  format: IndicesNumericFielddataFormat
}

export type IndicesNumericFielddataFormat = 'array' | 'disabled'

export interface IndicesOverlappingIndexTemplate {
  name: Name
  index_patterns?: IndexName[]
}

export interface IndicesStringFielddata {
  format: IndicesStringFielddataFormat
}

export type IndicesStringFielddataFormat = 'paged_bytes' | 'disabled'

export interface IndicesTemplateMapping {
  aliases: Record<IndexName, IndicesAlias>
  index_patterns: Name[]
  mappings: MappingTypeMapping
  order: integer
  settings: Record<string, any>
  version?: VersionNumber
}

export type IndicesAddBlockIndicesBlockOptions = 'metadata' | 'read' | 'read_only' | 'write'

export interface IndicesAddBlockIndicesBlockStatus {
  name: IndexName
  blocked: boolean
}

export interface IndicesAddBlockRequest extends RequestBase {
  index: IndexName
  block: IndicesAddBlockIndicesBlockOptions
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
}

export interface IndicesAddBlockResponse extends AcknowledgedResponseBase {
  shards_acknowledged: boolean
  indices: IndicesAddBlockIndicesBlockStatus[]
}

export interface IndicesAnalyzeAnalyzeDetail {
  analyzer?: IndicesAnalyzeAnalyzerDetail
  charfilters?: IndicesAnalyzeCharFilterDetail[]
  custom_analyzer: boolean
  tokenfilters?: IndicesAnalyzeTokenDetail[]
  tokenizer?: IndicesAnalyzeTokenDetail
}

export interface IndicesAnalyzeAnalyzeToken {
  end_offset: long
  position: long
  position_length?: long
  start_offset: long
  token: string
  type: string
}

export interface IndicesAnalyzeAnalyzerDetail {
  name: string
  tokens: IndicesAnalyzeExplainAnalyzeToken[]
}

export interface IndicesAnalyzeCharFilterDetail {
  filtered_text: string[]
  name: string
}

export interface IndicesAnalyzeExplainAnalyzeToken {
  bytes: string
  end_offset: long
  keyword?: boolean
  position: long
  positionLength: long
  start_offset: long
  termFrequency: long
  token: string
  type: string
}

export interface IndicesAnalyzeRequest extends RequestBase {
  index?: IndexName
  body?: {
    analyzer?: string
    attributes?: string[]
    char_filter?: (string | AnalysisCharFilter)[]
    explain?: boolean
    field?: Field
    filter?: (string | AnalysisTokenFilter)[]
    normalizer?: string
    text?: IndicesAnalyzeTextToAnalyze
    tokenizer?: string | AnalysisTokenizer
  }
}

export interface IndicesAnalyzeResponse {
  detail?: IndicesAnalyzeAnalyzeDetail
  tokens?: IndicesAnalyzeAnalyzeToken[]
}

export type IndicesAnalyzeTextToAnalyze = string | string[]

export interface IndicesAnalyzeTokenDetail {
  name: string
  tokens: IndicesAnalyzeExplainAnalyzeToken[]
}

export interface IndicesClearCacheRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  fielddata?: boolean
  fields?: Fields
  ignore_unavailable?: boolean
  query?: boolean
  request?: boolean
}

export interface IndicesClearCacheResponse extends ShardsOperationResponseBase {
}

export interface IndicesCloneRequest extends RequestBase {
  index: IndexName
  target: Name
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, IndicesAlias>
    settings?: Record<string, any>
  }
}

export interface IndicesCloneResponse extends AcknowledgedResponseBase {
  index: IndexName
  shards_acknowledged: boolean
}

export interface IndicesCloseCloseIndexResult {
  closed: boolean
  shards?: Record<string, IndicesCloseCloseShardResult>
}

export interface IndicesCloseCloseShardResult {
  failures: ShardFailure[]
}

export interface IndicesCloseRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
}

export interface IndicesCloseResponse extends AcknowledgedResponseBase {
  indices: Record<IndexName, IndicesCloseCloseIndexResult>
  shards_acknowledged: boolean
}

export interface IndicesCreateRequest extends RequestBase {
  index: IndexName
  include_type_name?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, IndicesAlias>
    mappings?: Record<string, MappingTypeMapping> | MappingTypeMapping
    settings?: Record<string, any>
  }
}

export interface IndicesCreateResponse extends AcknowledgedResponseBase {
  index: IndexName
  shards_acknowledged: boolean
}

export interface IndicesCreateDataStreamRequest extends RequestBase {
  name: DataStreamName
}

export interface IndicesCreateDataStreamResponse extends AcknowledgedResponseBase {
}

export interface IndicesDataStreamsStatsDataStreamsStatsItem {
  backing_indices: integer
  data_stream: Name
  store_size?: ByteSize
  store_size_bytes: integer
  maximum_timestamp: integer
}

export interface IndicesDataStreamsStatsRequest extends RequestBase {
  name?: IndexName
  expand_wildcards?: ExpandWildcards
  human?: boolean
}

export interface IndicesDataStreamsStatsResponse {
  _shards: ShardStatistics
  backing_indices: integer
  data_stream_count: integer
  total_store_sizes?: ByteSize
  total_store_size_bytes: integer
  data_streams: IndicesDataStreamsStatsDataStreamsStatsItem[]
}

export interface IndicesDeleteRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
}

export interface IndicesDeleteResponse extends IndicesResponseBase {
}

export interface IndicesDeleteAliasRequest extends RequestBase {
  index: Indices
  name: Names
  master_timeout?: Time
  timeout?: Time
}

export interface IndicesDeleteAliasResponse extends AcknowledgedResponseBase {
}

export interface IndicesDeleteDataStreamRequest extends RequestBase {
  name: DataStreamName
}

export interface IndicesDeleteDataStreamResponse extends AcknowledgedResponseBase {
}

export interface IndicesDeleteIndexTemplateRequest extends RequestBase {
  name: Name
}

export interface IndicesDeleteIndexTemplateResponse extends AcknowledgedResponseBase {
}

export interface IndicesDeleteTemplateRequest extends RequestBase {
  name: Name
  master_timeout?: Time
  timeout?: Time
}

export interface IndicesDeleteTemplateResponse extends AcknowledgedResponseBase {
}

export interface IndicesExistsRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  include_defaults?: boolean
  local?: boolean
}

export type IndicesExistsResponse = boolean

export interface IndicesExistsAliasRequest extends RequestBase {
  name: Names
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  local?: boolean
}

export type IndicesExistsAliasResponse = boolean

export interface IndicesExistsIndexTemplateRequest extends RequestBase {
  name: Name
  master_timeout?: Time
}

export type IndicesExistsIndexTemplateResponse = boolean

export interface IndicesExistsTemplateRequest extends RequestBase {
  name: Names
  flat_settings?: boolean
  local?: boolean
  master_timeout?: Time
}

export type IndicesExistsTemplateResponse = boolean

export interface IndicesExistsTypeRequest extends RequestBase {
  index: Indices
  type: Types
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  local?: boolean
}

export type IndicesExistsTypeResponse = boolean

export interface IndicesFlushRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  force?: boolean
  ignore_unavailable?: boolean
  wait_if_ongoing?: boolean
}

export interface IndicesFlushResponse extends ShardsOperationResponseBase {
}

export interface IndicesFlushSyncedRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
}

export interface IndicesFlushSyncedResponse extends DictionaryResponseBase<IndexName, ShardStatistics> {
  _shards: ShardStatistics
}

export interface IndicesForcemergeRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flush?: boolean
  ignore_unavailable?: boolean
  max_num_segments?: long
  only_expunge_deletes?: boolean
}

export interface IndicesForcemergeResponse extends ShardsOperationResponseBase {
}

export interface IndicesFreezeRequest extends RequestBase {
  index: IndexName
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
}

export interface IndicesFreezeResponse extends AcknowledgedResponseBase {
  shards_acknowledged: boolean
}

export interface IndicesGetRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  include_defaults?: boolean
  include_type_name?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesGetResponse extends DictionaryResponseBase<IndexName, IndicesIndexState> {
}

export interface IndicesGetAliasIndexAliases {
  aliases: Record<string, IndicesAliasDefinition>
}

export interface IndicesGetAliasRequest extends RequestBase {
  name?: Names
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  local?: boolean
}

export interface IndicesGetAliasResponse extends DictionaryResponseBase<IndexName, IndicesGetAliasIndexAliases> {
}

export interface IndicesGetDataStreamIndicesGetDataStreamItem {
  name: DataStreamName
  timestamp_field: IndicesGetDataStreamIndicesGetDataStreamItemTimestampField
  indices: IndicesGetDataStreamIndicesGetDataStreamItemIndex[]
  generation: integer
  template: Name
  hidden: boolean
  system?: boolean
  status: IndicesDataStreamHealthStatus
  ilm_policy?: Name
  _meta?: Metadata
}

export interface IndicesGetDataStreamIndicesGetDataStreamItemIndex {
  index_name: IndexName
  index_uuid: Uuid
}

export interface IndicesGetDataStreamIndicesGetDataStreamItemTimestampField {
  name: Field
}

export interface IndicesGetDataStreamRequest extends RequestBase {
  name?: IndexName
  expand_wildcards?: ExpandWildcards
}

export interface IndicesGetDataStreamResponse {
  data_streams: IndicesGetDataStreamIndicesGetDataStreamItem[]
}

export interface IndicesGetFieldMappingRequest extends RequestBase {
  fields: Fields
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  include_defaults?: boolean
  include_type_name?: boolean
  local?: boolean
}

export interface IndicesGetFieldMappingResponse extends DictionaryResponseBase<IndexName, IndicesGetFieldMappingTypeFieldMappings> {
}

export interface IndicesGetFieldMappingTypeFieldMappings {
  mappings: Record<Field, MappingFieldMapping>
}

export interface IndicesGetIndexTemplateIndexTemplate {
  index_patterns: Name[]
  composed_of: Name[]
  template: IndicesGetIndexTemplateIndexTemplateSummary
  version?: VersionNumber
  priority?: long
  _meta?: Metadata
  allow_auto_create?: boolean
  data_stream?: Record<string, any>
}

export interface IndicesGetIndexTemplateIndexTemplateItem {
  name: Name
  index_template: IndicesGetIndexTemplateIndexTemplate
}

export interface IndicesGetIndexTemplateIndexTemplateSummary {
  aliases?: Record<IndexName, IndicesAlias>
  mappings?: MappingTypeMapping
  settings?: Record<string, any>
}

export interface IndicesGetIndexTemplateRequest extends RequestBase {
  name?: Name
  local?: boolean
  body?: {
    flat_settings?: boolean
    include_type_name?: boolean
    master_timeout?: Time
  }
}

export interface IndicesGetIndexTemplateResponse {
  index_templates: IndicesGetIndexTemplateIndexTemplateItem[]
}

export interface IndicesGetMappingIndexMappingRecord {
  item?: MappingTypeMapping
  mappings: MappingTypeMapping
}

export interface IndicesGetMappingRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  include_type_name?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesGetMappingResponse extends DictionaryResponseBase<IndexName, IndicesGetMappingIndexMappingRecord> {
}

export interface IndicesGetSettingsRequest extends RequestBase {
  index?: Indices
  name?: Names
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  include_defaults?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesGetSettingsResponse extends DictionaryResponseBase<IndexName, IndicesIndexState> {
}

export interface IndicesGetTemplateRequest extends RequestBase {
  name?: Names
  flat_settings?: boolean
  include_type_name?: boolean
  local?: boolean
  master_timeout?: Time
}

export interface IndicesGetTemplateResponse extends DictionaryResponseBase<string, IndicesTemplateMapping> {
}

export interface IndicesGetUpgradeRequest extends RequestBase {
  stub: string
}

export interface IndicesGetUpgradeResponse {
  overlapping?: IndicesOverlappingIndexTemplate[]
  template?: IndicesTemplateMapping
}

export interface IndicesMigrateToDataStreamRequest extends RequestBase {
  name: IndexName
}

export interface IndicesMigrateToDataStreamResponse extends AcknowledgedResponseBase {
}

export interface IndicesOpenRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
}

export interface IndicesOpenResponse extends AcknowledgedResponseBase {
  shards_acknowledged: boolean
}

export interface IndicesPromoteDataStreamRequest extends RequestBase {
  name: IndexName
}

export interface IndicesPromoteDataStreamResponse {
  stub: integer
}

export interface IndicesPutAliasRequest extends RequestBase {
  index: Indices
  name: Name
  master_timeout?: Time
  timeout?: Time
  body?: {
    filter?: QueryDslQueryContainer
    index_routing?: Routing
    is_write_index?: boolean
    routing?: Routing
    search_routing?: Routing
  }
}

export interface IndicesPutAliasResponse extends AcknowledgedResponseBase {
}

export interface IndicesPutIndexTemplateIndexTemplateMapping {
  aliases?: Record<IndexName, IndicesAlias>
  mappings?: MappingTypeMapping
  settings?: IndicesIndexSettings
}

export interface IndicesPutIndexTemplateRequest extends RequestBase {
  name: Name
  body?: {
    index_patterns?: Indices
    composed_of?: Name[]
    template?: IndicesPutIndexTemplateIndexTemplateMapping
    data_stream?: EmptyObject
    priority?: integer
    version?: VersionNumber
    _meta?: Metadata
  }
}

export interface IndicesPutIndexTemplateResponse extends AcknowledgedResponseBase {
}

export interface IndicesPutMappingRequest extends RequestBase {
  index?: Indices
  type?: Type
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  include_type_name?: boolean
  master_timeout?: Time
  timeout?: Time
  write_index_only?: boolean
  body?: {
    all_field?: MappingAllField
    date_detection?: boolean
    dynamic?: boolean | MappingDynamicMapping
    dynamic_date_formats?: string[]
    dynamic_templates?: Record<string, MappingDynamicTemplate> | Record<string, MappingDynamicTemplate>[]
    field_names_field?: MappingFieldNamesField
    index_field?: MappingIndexField
    meta?: Record<string, any>
    numeric_detection?: boolean
    properties?: Record<PropertyName, MappingProperty>
    routing_field?: MappingRoutingField
    size_field?: MappingSizeField
    source_field?: MappingSourceField
    runtime?: MappingRuntimeFields
  }
}

export interface IndicesPutMappingResponse extends IndicesResponseBase {
}

export interface IndicesPutSettingsIndexSettingsBody extends IndicesIndexSettings {
  settings?: IndicesIndexSettings
}

export interface IndicesPutSettingsRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  flat_settings?: boolean
  ignore_unavailable?: boolean
  master_timeout?: Time
  preserve_existing?: boolean
  timeout?: Time
  body?: IndicesPutSettingsIndexSettingsBody
}

export interface IndicesPutSettingsResponse extends AcknowledgedResponseBase {
}

export interface IndicesPutTemplateRequest extends RequestBase {
  name: Name
  create?: boolean
  flat_settings?: boolean
  include_type_name?: boolean
  master_timeout?: Time
  timeout?: Time
  body?: {
    aliases?: Record<IndexName, IndicesAlias>
    index_patterns?: string | string[]
    mappings?: MappingTypeMapping
    order?: integer
    settings?: Record<string, any>
    version?: VersionNumber
  }
}

export interface IndicesPutTemplateResponse extends AcknowledgedResponseBase {
}

export interface IndicesRecoveryFileDetails {
  length: long
  name: string
  recovered: long
}

export interface IndicesRecoveryRecoveryBytes {
  percent: Percentage
  recovered?: ByteSize
  recovered_in_bytes: ByteSize
  reused?: ByteSize
  reused_in_bytes: ByteSize
  total?: ByteSize
  total_in_bytes: ByteSize
}

export interface IndicesRecoveryRecoveryFiles {
  details?: IndicesRecoveryFileDetails[]
  percent: Percentage
  recovered: long
  reused: long
  total: long
}

export interface IndicesRecoveryRecoveryIndexStatus {
  bytes?: IndicesRecoveryRecoveryBytes
  files: IndicesRecoveryRecoveryFiles
  size: IndicesRecoveryRecoveryBytes
  source_throttle_time?: Time
  source_throttle_time_in_millis: EpochMillis
  target_throttle_time?: Time
  target_throttle_time_in_millis: EpochMillis
  total_time_in_millis: EpochMillis
  total_time?: Time
}

export interface IndicesRecoveryRecoveryOrigin {
  hostname?: string
  host?: Host
  transport_address?: TransportAddress
  id?: Id
  ip?: Ip
  name?: Name
  bootstrap_new_history_uuid?: boolean
  repository?: Name
  snapshot?: Name
  version?: VersionString
  restoreUUID?: Uuid
  index?: IndexName
}

export interface IndicesRecoveryRecoveryStartStatus {
  check_index_time: long
  total_time_in_millis: string
}

export interface IndicesRecoveryRecoveryStatus {
  shards: IndicesRecoveryShardRecovery[]
}

export interface IndicesRecoveryRequest extends RequestBase {
  index?: Indices
  active_only?: boolean
  detailed?: boolean
}

export interface IndicesRecoveryResponse extends DictionaryResponseBase<IndexName, IndicesRecoveryRecoveryStatus> {
}

export interface IndicesRecoveryShardRecovery {
  id: long
  index: IndicesRecoveryRecoveryIndexStatus
  primary: boolean
  source: IndicesRecoveryRecoveryOrigin
  stage: string
  start?: IndicesRecoveryRecoveryStartStatus
  start_time?: DateString
  start_time_in_millis: EpochMillis
  stop_time?: DateString
  stop_time_in_millis: EpochMillis
  target: IndicesRecoveryRecoveryOrigin
  total_time?: DateString
  total_time_in_millis: EpochMillis
  translog: IndicesRecoveryTranslogStatus
  type: Type
  verify_index: IndicesRecoveryVerifyIndex
}

export interface IndicesRecoveryTranslogStatus {
  percent: Percentage
  recovered: long
  total: long
  total_on_start: long
  total_time?: string
  total_time_in_millis: EpochMillis
}

export interface IndicesRecoveryVerifyIndex {
  check_index_time?: Time
  check_index_time_in_millis: EpochMillis
  total_time?: Time
  total_time_in_millis: EpochMillis
}

export interface IndicesRefreshRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
}

export interface IndicesRefreshResponse extends ShardsOperationResponseBase {
}

export interface IndicesReloadSearchAnalyzersReloadDetails {
  index: string
  reloaded_analyzers: string[]
  reloaded_node_ids: string[]
}

export interface IndicesReloadSearchAnalyzersRequest extends RequestBase {
  index: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
}

export interface IndicesReloadSearchAnalyzersResponse {
  reload_details: IndicesReloadSearchAnalyzersReloadDetails[]
  _shards: ShardStatistics
}

export interface IndicesResolveIndexRequest extends RequestBase {
  name: Names
  expand_wildcards?: ExpandWildcards
}

export interface IndicesResolveIndexResolveIndexAliasItem {
  name: Name
  indices: Indices
}

export interface IndicesResolveIndexResolveIndexDataStreamsItem {
  name: DataStreamName
  timestamp_field: Field
  backing_indices: Indices
}

export interface IndicesResolveIndexResolveIndexItem {
  name: Name
  aliases?: string[]
  attributes: string[]
  data_stream?: DataStreamName
}

export interface IndicesResolveIndexResponse {
  indices: IndicesResolveIndexResolveIndexItem[]
  aliases: IndicesResolveIndexResolveIndexAliasItem[]
  data_streams: IndicesResolveIndexResolveIndexDataStreamsItem[]
}

export interface IndicesRolloverRequest extends RequestBase {
  alias: IndexAlias
  new_index?: IndexName
  dry_run?: boolean
  include_type_name?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, IndicesAlias>
    conditions?: IndicesRolloverRolloverConditions
    mappings?: Record<string, MappingTypeMapping> | MappingTypeMapping
    settings?: Record<string, any>
  }
}

export interface IndicesRolloverResponse extends AcknowledgedResponseBase {
  conditions: Record<string, boolean>
  dry_run: boolean
  new_index: string
  old_index: string
  rolled_over: boolean
  shards_acknowledged: boolean
}

export interface IndicesRolloverRolloverConditions {
  max_age?: Time
  max_docs?: long
  max_size?: string
  max_primary_shard_size?: ByteSize
}

export interface IndicesSegmentsIndexSegment {
  shards: Record<string, IndicesSegmentsShardsSegment | IndicesSegmentsShardsSegment[]>
}

export interface IndicesSegmentsRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  verbose?: boolean
}

export interface IndicesSegmentsResponse {
  indices: Record<string, IndicesSegmentsIndexSegment>
  _shards: ShardStatistics
}

export interface IndicesSegmentsSegment {
  attributes: Record<string, string>
  committed: boolean
  compound: boolean
  deleted_docs: long
  generation: integer
  memory_in_bytes: double
  search: boolean
  size_in_bytes: double
  num_docs: long
  version: VersionString
}

export interface IndicesSegmentsShardSegmentRouting {
  node: string
  primary: boolean
  state: string
}

export interface IndicesSegmentsShardsSegment {
  num_committed_segments: integer
  routing: IndicesSegmentsShardSegmentRouting
  num_search_segments: integer
  segments: Record<string, IndicesSegmentsSegment>
}

export interface IndicesShardStoresIndicesShardStores {
  shards: Record<string, IndicesShardStoresShardStoreWrapper>
}

export interface IndicesShardStoresRequest extends RequestBase {
  index?: Indices
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  status?: string | string[]
}

export interface IndicesShardStoresResponse {
  indices: Record<IndexName, IndicesShardStoresIndicesShardStores>
}

export interface IndicesShardStoresShardStore {
  allocation: IndicesShardStoresShardStoreAllocation
  allocation_id: Id
  attributes: Record<string, any>
  id: Id
  legacy_version: VersionNumber
  name: Name
  store_exception: IndicesShardStoresShardStoreException
  transport_address: TransportAddress
}

export type IndicesShardStoresShardStoreAllocation = 'primary' | 'replica' | 'unused'

export interface IndicesShardStoresShardStoreException {
  reason: string
  type: string
}

export interface IndicesShardStoresShardStoreWrapper {
  stores: IndicesShardStoresShardStore[]
}

export interface IndicesShrinkRequest extends RequestBase {
  index: IndexName
  target: IndexName
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, IndicesAlias>
    settings?: Record<string, any>
  }
}

export interface IndicesShrinkResponse extends AcknowledgedResponseBase {
  shards_acknowledged: boolean
  index: IndexName
}

export interface IndicesSimulateIndexTemplateRequest extends RequestBase {
  name?: Name
  body?: {
    index_patterns?: IndexName[]
    composed_of?: Name[]
    overlapping?: IndicesOverlappingIndexTemplate[]
    template?: IndicesTemplateMapping
  }
}

export interface IndicesSimulateIndexTemplateResponse {
}

export interface IndicesSimulateTemplateRequest extends RequestBase {
  name?: Name
  create?: boolean
  master_timeout?: Time
  body?: IndicesGetIndexTemplateIndexTemplate
}

export interface IndicesSimulateTemplateResponse {
  stub: string
}

export interface IndicesSplitRequest extends RequestBase {
  index: IndexName
  target: IndexName
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: WaitForActiveShards
  body?: {
    aliases?: Record<IndexName, IndicesAlias>
    settings?: Record<string, any>
  }
}

export interface IndicesSplitResponse extends AcknowledgedResponseBase {
  shards_acknowledged: boolean
  index: IndexName
}

export interface IndicesStatsIndexStats {
  completion?: CompletionStats
  docs?: DocStats
  fielddata?: FielddataStats
  flush?: FlushStats
  get?: GetStats
  indexing?: IndexingStats
  merges?: MergesStats
  query_cache?: QueryCacheStats
  recovery?: RecoveryStats
  refresh?: RefreshStats
  request_cache?: RequestCacheStats
  search?: SearchStats
  segments?: SegmentsStats
  store?: StoreStats
  translog?: TranslogStats
  warmer?: WarmerStats
  bulk?: BulkStats
}

export interface IndicesStatsIndicesStats {
  primaries: IndicesStatsIndexStats
  shards?: Record<string, IndicesStatsShardStats[]>
  total: IndicesStatsIndexStats
  uuid?: Uuid
}

export interface IndicesStatsRequest extends RequestBase {
  metric?: Metrics
  index?: Indices
  completion_fields?: Fields
  expand_wildcards?: ExpandWildcards
  fielddata_fields?: Fields
  fields?: Fields
  forbid_closed_indices?: boolean
  groups?: string | string[]
  include_segment_file_sizes?: boolean
  include_unloaded_segments?: boolean
  level?: Level
  types?: Types
}

export interface IndicesStatsResponse {
  indices?: Record<string, IndicesStatsIndicesStats>
  _shards: ShardStatistics
  _all: IndicesStatsIndicesStats
}

export interface IndicesStatsShardCommit {
  generation: integer
  id: Id
  num_docs: long
  user_data: Record<string, string>
}

export interface IndicesStatsShardFileSizeInfo {
  description: string
  size_in_bytes: long
  min_size_in_bytes?: long
  max_size_in_bytes?: long
  average_size_in_bytes?: long
  count?: long
}

export interface IndicesStatsShardLease {
  id: Id
  retaining_seq_no: SequenceNumber
  timestamp: long
  source: string
}

export interface IndicesStatsShardPath {
  data_path: string
  is_custom_data_path: boolean
  state_path: string
}

export interface IndicesStatsShardQueryCache {
  cache_count: long
  cache_size: long
  evictions: long
  hit_count: long
  memory_size_in_bytes: long
  miss_count: long
  total_count: long
}

export interface IndicesStatsShardRetentionLeases {
  primary_term: long
  version: VersionNumber
  leases: IndicesStatsShardLease[]
}

export interface IndicesStatsShardRouting {
  node: string
  primary: boolean
  relocating_node?: string
  state: IndicesStatsShardRoutingState
}

export type IndicesStatsShardRoutingState = 'UNASSIGNED' | 'INITIALIZING' | 'STARTED' | 'RELOCATING'

export interface IndicesStatsShardSequenceNumber {
  global_checkpoint: long
  local_checkpoint: long
  max_seq_no: SequenceNumber
}

export interface IndicesStatsShardStats {
  commit: IndicesStatsShardCommit
  completion: CompletionStats
  docs: DocStats
  fielddata: FielddataStats
  flush: FlushStats
  get: GetStats
  indexing: IndexingStats
  merges: MergesStats
  shard_path: IndicesStatsShardPath
  query_cache: IndicesStatsShardQueryCache
  recovery: RecoveryStats
  refresh: RefreshStats
  request_cache: RequestCacheStats
  retention_leases: IndicesStatsShardRetentionLeases
  routing: IndicesStatsShardRouting
  search: SearchStats
  segments: SegmentsStats
  seq_no: IndicesStatsShardSequenceNumber
  store: StoreStats
  translog: TranslogStats
  warmer: WarmerStats
  bulk?: BulkStats
}

export interface IndicesUnfreezeRequest extends RequestBase {
  index: IndexName
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  master_timeout?: Time
  timeout?: Time
  wait_for_active_shards?: string
}

export interface IndicesUnfreezeResponse extends AcknowledgedResponseBase {
  shards_acknowledged: boolean
}

export interface IndicesUpdateAliasesIndicesUpdateAliasBulk {
}

export interface IndicesUpdateAliasesRequest extends RequestBase {
  master_timeout?: Time
  timeout?: Time
  body?: {
    actions?: IndicesUpdateAliasesIndicesUpdateAliasBulk[]
  }
}

export interface IndicesUpdateAliasesResponse extends AcknowledgedResponseBase {
}

export interface IndicesUpgradeRequest extends RequestBase {
  stub_b: integer
  stub_a: integer
  body?: {
    stub_c: integer
  }
}

export interface IndicesUpgradeResponse {
  stub: integer
}

export interface IndicesValidateQueryIndicesValidationExplanation {
  error?: string
  explanation?: string
  index: IndexName
  valid: boolean
}

export interface IndicesValidateQueryRequest extends RequestBase {
  index?: Indices
  type?: Types
  allow_no_indices?: boolean
  all_shards?: boolean
  analyzer?: string
  analyze_wildcard?: boolean
  default_operator?: DefaultOperator
  df?: string
  expand_wildcards?: ExpandWildcards
  explain?: boolean
  ignore_unavailable?: boolean
  lenient?: boolean
  query_on_query_string?: string
  rewrite?: boolean
  q?: string
  body?: {
    query?: QueryDslQueryContainer
  }
}

export interface IndicesValidateQueryResponse {
  explanations?: IndicesValidateQueryIndicesValidationExplanation[]
  _shards?: ShardStatistics
  valid: boolean
  error?: string
}

export interface IngestAppendProcessor extends IngestProcessorBase {
  field: Field
  value: any[]
  allow_duplicates?: boolean
}

export interface IngestAttachmentProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  indexed_chars?: long
  indexed_chars_field?: Field
  properties?: string[]
  target_field?: Field
  resource_name?: string
}

export interface IngestBytesProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface IngestCircleProcessor extends IngestProcessorBase {
  error_distance: double
  field: Field
  ignore_missing: boolean
  shape_type: IngestShapeType
  target_field: Field
}

export interface IngestConvertProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field: Field
  type: IngestConvertType
}

export type IngestConvertType = 'integer' | 'long' | 'float' | 'double' | 'string' | 'boolean' | 'auto'

export interface IngestCsvProcessor extends IngestProcessorBase {
  empty_value: any
  description?: string
  field: Field
  ignore_missing?: boolean
  quote?: string
  separator?: string
  target_fields: Fields
  trim: boolean
}

export interface IngestDateIndexNameProcessor extends IngestProcessorBase {
  date_formats: string[]
  date_rounding: string | IngestDateRounding
  field: Field
  index_name_format: string
  index_name_prefix: string
  locale: string
  timezone: string
}

export interface IngestDateProcessor extends IngestProcessorBase {
  field: Field
  formats: string[]
  locale?: string
  target_field?: Field
  timezone?: string
}

export type IngestDateRounding = 's' | 'm' | 'h' | 'd' | 'w' | 'M' | 'y'

export interface IngestDissectProcessor extends IngestProcessorBase {
  append_separator: string
  field: Field
  ignore_missing: boolean
  pattern: string
}

export interface IngestDotExpanderProcessor extends IngestProcessorBase {
  field: Field
  path?: string
}

export interface IngestDropProcessor extends IngestProcessorBase {
}

export interface IngestEnrichProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  max_matches?: integer
  override?: boolean
  policy_name: string
  shape_relation?: GeoShapeRelation
  target_field: Field
}

export interface IngestFailProcessor extends IngestProcessorBase {
  message: string
}

export interface IngestForeachProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  processor: IngestProcessorContainer
}

export interface IngestGeoIpProcessor extends IngestProcessorBase {
  database_file: string
  field: Field
  first_only: boolean
  ignore_missing: boolean
  properties: string[]
  target_field: Field
}

export interface IngestGrokProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  pattern_definitions: Record<string, string>
  patterns: string[]
  trace_match?: boolean
}

export interface IngestGsubProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  pattern: string
  replacement: string
  target_field?: Field
}

export interface IngestInferenceConfig {
  regression?: IngestInferenceConfigRegression
}

export interface IngestInferenceConfigRegression {
  results_field: string
}

export interface IngestInferenceProcessor extends IngestProcessorBase {
  model_id: Id
  target_field: Field
  field_map?: Record<Field, any>
  inference_config?: IngestInferenceConfig
}

export interface IngestJoinProcessor extends IngestProcessorBase {
  field: Field
  separator: string
  target_field?: Field
}

export interface IngestJsonProcessor extends IngestProcessorBase {
  add_to_root: boolean
  field: Field
  target_field: Field
}

export interface IngestKeyValueProcessor extends IngestProcessorBase {
  exclude_keys?: string[]
  field: Field
  field_split: string
  ignore_missing?: boolean
  include_keys?: string[]
  prefix?: string
  strip_brackets?: boolean
  target_field?: Field
  trim_key?: string
  trim_value?: string
  value_split: string
}

export interface IngestLowercaseProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface IngestPipeline {
  description?: string
  on_failure?: IngestProcessorContainer[]
  processors?: IngestProcessorContainer[]
  version?: VersionNumber
}

export interface IngestPipelineConfig {
  description?: string
  version?: VersionNumber
  processors: IngestProcessorContainer[]
}

export interface IngestPipelineProcessor extends IngestProcessorBase {
  name: Name
}

export interface IngestProcessorBase {
  if?: string
  ignore_failure?: boolean
  on_failure?: IngestProcessorContainer[]
  tag?: string
}

export interface IngestProcessorContainer {
  attachment?: IngestAttachmentProcessor
  append?: IngestAppendProcessor
  csv?: IngestCsvProcessor
  convert?: IngestConvertProcessor
  date?: IngestDateProcessor
  date_index_name?: IngestDateIndexNameProcessor
  dot_expander?: IngestDotExpanderProcessor
  enrich?: IngestEnrichProcessor
  fail?: IngestFailProcessor
  foreach?: IngestForeachProcessor
  json?: IngestJsonProcessor
  user_agent?: IngestUserAgentProcessor
  kv?: IngestKeyValueProcessor
  geoip?: IngestGeoIpProcessor
  grok?: IngestGrokProcessor
  gsub?: IngestGsubProcessor
  join?: IngestJoinProcessor
  lowercase?: IngestLowercaseProcessor
  remove?: IngestRemoveProcessor
  rename?: IngestRenameProcessor
  script?: Script
  set?: IngestSetProcessor
  sort?: IngestSortProcessor
  split?: IngestSplitProcessor
  trim?: IngestTrimProcessor
  uppercase?: IngestUppercaseProcessor
  urldecode?: IngestUrlDecodeProcessor
  bytes?: IngestBytesProcessor
  dissect?: IngestDissectProcessor
  set_security_user?: IngestSetSecurityUserProcessor
  pipeline?: IngestPipelineProcessor
  drop?: IngestDropProcessor
  circle?: IngestCircleProcessor
  inference?: IngestInferenceProcessor
}

export interface IngestRemoveProcessor extends IngestProcessorBase {
  field: Fields
  ignore_missing?: boolean
}

export interface IngestRenameProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field: Field
}

export interface IngestSetProcessor extends IngestProcessorBase {
  field: Field
  override?: boolean
  value: any
}

export interface IngestSetSecurityUserProcessor extends IngestProcessorBase {
  field: Field
  properties?: string[]
}

export type IngestShapeType = 'geo_shape' | 'shape'

export interface IngestSortProcessor extends IngestProcessorBase {
  field: Field
  order: SearchSortOrder
  target_field: Field
}

export interface IngestSplitProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  preserve_trailing?: boolean
  separator: string
  target_field?: Field
}

export interface IngestTrimProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface IngestUppercaseProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface IngestUrlDecodeProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing?: boolean
  target_field?: Field
}

export interface IngestUserAgentProcessor extends IngestProcessorBase {
  field: Field
  ignore_missing: boolean
  options: IngestUserAgentProperty[]
  regex_file: string
  target_field: Field
}

export type IngestUserAgentProperty = 'NAME' | 'MAJOR' | 'MINOR' | 'PATCH' | 'OS' | 'OS_NAME' | 'OS_MAJOR' | 'OS_MINOR' | 'DEVICE' | 'BUILD'

export interface IngestDeletePipelineRequest extends RequestBase {
  id: Id
  master_timeout?: Time
  timeout?: Time
}

export interface IngestDeletePipelineResponse extends AcknowledgedResponseBase {
}

export interface IngestGeoIpStatsGeoIpDownloadStatistics {
  successful_downloads: integer
  failed_downloads: integer
  total_download_time: integer
  database_count: integer
  skipped_updates: integer
}

export interface IngestGeoIpStatsGeoIpNodeDatabaseName {
  name: Name
}

export interface IngestGeoIpStatsGeoIpNodeDatabases {
  databases: IngestGeoIpStatsGeoIpNodeDatabaseName[]
  files_in_temp: string[]
}

export interface IngestGeoIpStatsRequest extends RequestBase {
}

export interface IngestGeoIpStatsResponse {
  stats: IngestGeoIpStatsGeoIpDownloadStatistics
  nodes: Record<Id, IngestGeoIpStatsGeoIpNodeDatabases>
}

export interface IngestGetPipelineRequest extends RequestBase {
  id?: Id
  master_timeout?: Time
  summary?: boolean
}

export interface IngestGetPipelineResponse extends DictionaryResponseBase<string, IngestPipeline> {
}

export interface IngestProcessorGrokRequest extends RequestBase {
}

export interface IngestProcessorGrokResponse {
  patterns: Record<string, string>
}

export interface IngestPutPipelineRequest extends RequestBase {
  id: Id
  master_timeout?: Time
  timeout?: Time
  body?: {
    description?: string
    on_failure?: IngestProcessorContainer[]
    processors?: IngestProcessorContainer[]
    version?: VersionNumber
  }
}

export interface IngestPutPipelineResponse extends AcknowledgedResponseBase {
}

export interface IngestSimulatePipelineDocument {
  _id?: Id
  _index?: IndexName
  _source: any
}

export interface IngestSimulatePipelineDocumentSimulation {
  _id: Id
  _index: IndexName
  _ingest: IngestSimulatePipelineIngest
  _parent?: string
  _routing?: string
  _source: Record<string, any>
  _type?: Type
}

export interface IngestSimulatePipelineIngest {
  timestamp: DateString
  pipeline?: Name
}

export interface IngestSimulatePipelinePipelineSimulation {
  doc?: IngestSimulatePipelineDocumentSimulation
  processor_results?: IngestSimulatePipelinePipelineSimulation[]
  tag?: string
  processor_type?: string
  status?: WatcherActionStatusOptions
}

export interface IngestSimulatePipelineRequest extends RequestBase {
  id?: Id
  verbose?: boolean
  body?: {
    docs?: IngestSimulatePipelineDocument[]
    pipeline?: IngestPipeline
  }
}

export interface IngestSimulatePipelineResponse {
  docs: IngestSimulatePipelinePipelineSimulation[]
}

export interface LicenseLicense {
  expiry_date_in_millis: EpochMillis
  issue_date_in_millis: EpochMillis
  issued_to: string
  issuer: string
  max_nodes?: long
  max_resource_units?: long
  signature: string
  start_date_in_millis: EpochMillis
  type: LicenseLicenseType
  uid: string
}

export type LicenseLicenseStatus = 'active' | 'valid' | 'invalid' | 'expired'

export type LicenseLicenseType = 'missing' | 'trial' | 'basic' | 'standard' | 'dev' | 'silver' | 'gold' | 'platinum' | 'enterprise'

export interface LicenseDeleteRequest extends RequestBase {
}

export interface LicenseDeleteResponse extends AcknowledgedResponseBase {
}

export interface LicenseGetLicenseInformation {
  expiry_date: DateString
  expiry_date_in_millis: EpochMillis
  issue_date: DateString
  issue_date_in_millis: EpochMillis
  issued_to: string
  issuer: string
  max_nodes: long
  max_resource_units?: integer
  status: LicenseLicenseStatus
  type: LicenseLicenseType
  uid: Uuid
  start_date_in_millis: EpochMillis
}

export interface LicenseGetRequest extends RequestBase {
  accept_enterprise?: boolean
  local?: boolean
}

export interface LicenseGetResponse {
  license: LicenseGetLicenseInformation
}

export interface LicenseGetBasicStatusRequest extends RequestBase {
}

export interface LicenseGetBasicStatusResponse {
  eligible_to_start_basic: boolean
}

export interface LicenseGetTrialStatusRequest extends RequestBase {
}

export interface LicenseGetTrialStatusResponse {
  eligible_to_start_trial: boolean
}

export interface LicensePostAcknowledgement {
  license: string[]
  message: string
}

export interface LicensePostRequest extends RequestBase {
  acknowledge?: boolean
  body?: {
    license?: LicenseLicense
    licenses?: LicenseLicense[]
  }
}

export interface LicensePostResponse {
  acknowledge?: LicensePostAcknowledgement
  acknowledged: boolean
  license_status: LicenseLicenseStatus
}

export interface LicensePostStartBasicRequest extends RequestBase {
  acknowledge?: boolean
}

export interface LicensePostStartBasicResponse extends AcknowledgedResponseBase {
  acknowledge: Record<string, string | string[]>
  basic_was_started: boolean
  error_message: string
}

export interface LicensePostStartTrialRequest extends RequestBase {
  acknowledge?: boolean
  type_query_string?: string
}

export interface LicensePostStartTrialResponse extends AcknowledgedResponseBase {
  error_message?: string
  acknowledged: boolean
  trial_was_started: boolean
  type: LicenseLicenseType
}

export interface LogstashPipelineDeleteRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface LogstashPipelineDeleteResponse {
  stub: integer
}

export interface LogstashPipelineGetRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface LogstashPipelineGetResponse {
  stub: integer
}

export interface LogstashPipelinePutRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface LogstashPipelinePutResponse {
  stub: integer
}

export interface MigrationDeprecationInfoDeprecation {
  details: string
  level: MigrationDeprecationInfoDeprecationLevel
  message: string
  url: string
}

export type MigrationDeprecationInfoDeprecationLevel = 'none' | 'info' | 'warning' | 'critical'

export interface MigrationDeprecationInfoRequest extends RequestBase {
  index?: IndexName
}

export interface MigrationDeprecationInfoResponse {
  cluster_settings: MigrationDeprecationInfoDeprecation[]
  index_settings: Record<string, MigrationDeprecationInfoDeprecation[]>
  node_settings: MigrationDeprecationInfoDeprecation[]
  ml_settings: MigrationDeprecationInfoDeprecation[]
}

export interface MlAnalysisConfig {
  bucket_span: TimeSpan
  categorization_field_name?: Field
  categorization_filters?: string[]
  detectors: MlDetector[]
  influencers: Field[]
  latency?: Time
  multivariate_by_fields?: boolean
  per_partition_categorization?: MlPerPartitionCategorization
  summary_count_field_name?: Field
  categorization_analyzer?: MlCategorizationAnalyzer | string
}

export interface MlAnalysisLimits {
  categorization_examples_limit?: long
  model_memory_limit: string
}

export interface MlAnalysisMemoryLimit {
  model_memory_limit: string
}

export interface MlAnomaly {
  actual?: double[]
  bucket_span: Time
  by_field_name?: string
  by_field_value?: string
  causes?: MlAnomalyCause[]
  detector_index: integer
  field_name?: string
  function?: string
  function_description?: string
  influencers?: MlInfluence[]
  initial_record_score: double
  is_interim: boolean
  job_id: string
  over_field_name?: string
  over_field_value?: string
  partition_field_name?: string
  partition_field_value?: string
  probability: double
  record_score: double
  result_type: string
  timestamp: EpochMillis
  typical?: double[]
}

export interface MlAnomalyCause {
  actual: double[]
  by_field_name: Name
  by_field_value: string
  correlated_by_field_value: string
  field_name: Field
  function: string
  function_description: string
  influencers: MlInfluence[]
  over_field_name: Name
  over_field_value: string
  partition_field_name: string
  partition_field_value: string
  probability: double
  typical: double[]
}

export type MlAppliesTo = 'actual' | 'typical' | 'diff_from_typical' | 'time'

export interface MlBucketInfluencer {
  bucket_span: long
  influencer_score: double
  influencer_field_name: Field
  influencer_field_value: string
  initial_influencer_score: double
  is_interim: boolean
  job_id: Id
  probability: double
  result_type: string
  timestamp: Time
  foo?: string
}

export interface MlBucketSummary {
  anomaly_score: double
  bucket_influencers: MlBucketInfluencer[]
  bucket_span: Time
  event_count: long
  initial_anomaly_score: double
  is_interim: boolean
  job_id: Id
  partition_scores?: MlPartitionScore[]
  processing_time_ms: double
  result_type: string
  timestamp: Time
}

export interface MlCalendarEvent {
  calendar_id?: Id
  event_id?: Id
  description: string
  end_time: EpochMillis
  start_time: EpochMillis
}

export interface MlCategorizationAnalyzer {
  filter?: (string | AnalysisTokenFilter)[]
  tokenizer?: string | AnalysisTokenizer
  char_filter?: (string | AnalysisCharFilter)[]
}

export type MlCategorizationStatus = 'ok' | 'warn'

export interface MlCategory {
  category_id: ulong
  examples: string[]
  grok_pattern?: string
  job_id: Id
  max_matching_length: ulong
  partition_field_name?: string
  partition_field_value?: string
  regex: string
  terms: string
  num_matches?: long
  preferred_to_categories?: Id[]
  p?: string
  result_type: string
  mlcategory: string
}

export interface MlChunkingConfig {
  mode: MlChunkingMode
  time_span?: Time
}

export type MlChunkingMode = 'auto' | 'manual' | 'off'

export type MlConditionOperator = 'gt' | 'gte' | 'lt' | 'lte'

export interface MlCustomSettings {
  custom_urls?: XpackUsageUrlConfig[]
  created_by?: string
  job_tags?: Record<string, string>
}

export interface MlDataCounts {
  bucket_count: long
  earliest_record_timestamp: long
  empty_bucket_count: long
  input_bytes: long
  input_field_count: long
  input_record_count: long
  invalid_date_count: long
  job_id: Id
  last_data_time: long
  latest_empty_bucket_timestamp: long
  latest_record_timestamp: long
  latest_sparse_bucket_timestamp: long
  latest_bucket_timestamp: long
  missing_field_count: long
  out_of_order_timestamp_count: long
  processed_field_count: long
  processed_record_count: long
  sparse_bucket_count: long
}

export interface MlDataDescription {
  format?: string
  time_field: Field
  time_format?: string
  field_delimiter?: string
}

export interface MlDatafeed {
  aggregations?: Record<string, AggregationsAggregationContainer>
  aggs?: Record<string, AggregationsAggregationContainer>
  chunking_config?: MlChunkingConfig
  datafeed_id: Id
  frequency?: Timestamp
  indices: Indices
  indexes?: string[]
  job_id: Id
  max_empty_searches?: integer
  query: QueryDslQueryContainer
  query_delay?: Timestamp
  script_fields?: Record<string, ScriptField>
  scroll_size?: integer
  delayed_data_check_config: MlDelayedDataCheckConfig
  runtime_mappings?: MappingRuntimeFields
  indices_options?: MlDatafeedIndicesOptions
}

export interface MlDatafeedIndicesOptions {
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_unavailable?: boolean
  ignore_throttled?: boolean
}

export type MlDatafeedState = 'started' | 'stopped' | 'starting' | 'stopping'

export interface MlDatafeedStats {
  assignment_explanation: string
  datafeed_id: Id
  node: MlDiscoveryNode
  state: MlDatafeedState
  timing_stats: MlDatafeedTimingStats
}

export interface MlDatafeedTimingStats {
  bucket_count: long
  exponential_average_search_time_per_hour_ms: double
  job_id: Id
  search_count: long
  total_search_time_ms: double
  average_search_time_per_bucket_ms: number
}

export interface MlDataframeAnalysis {
  dependent_variable: string
  prediction_field_name?: Field
  alpha?: double
  lambda?: double
  gamma?: double
  eta?: double
  eta_growth_rate_per_tree?: double
  feature_bag_fraction?: double
  max_trees?: integer
  maximum_number_trees?: integer
  soft_tree_depth_limit?: integer
  soft_tree_depth_tolerance?: double
  downsample_factor?: double
  max_optimization_rounds_per_hyperparameter?: integer
  early_stopping_enabled?: boolean
  num_top_feature_importance_values?: integer
  feature_processors?: MlDataframeAnalysisFeatureProcessor[]
  randomize_seed?: double
  training_percent?: Percentage
}

export type MlDataframeAnalysisAnalyzedFields = string[] | MlDataframeAnalysisAnalyzedFieldsIncludeExclude

export interface MlDataframeAnalysisAnalyzedFieldsIncludeExclude {
  includes: string[]
  excludes: string[]
}

export interface MlDataframeAnalysisClassification extends MlDataframeAnalysis {
  class_assignment_objective?: string
  num_top_classes?: integer
}

export interface MlDataframeAnalysisContainer {
  outlier_detection?: MlDataframeAnalysisOutlierDetection
  regression?: MlDataframeAnalysisRegression
  classification?: MlDataframeAnalysisClassification
}

export interface MlDataframeAnalysisFeatureProcessor {
  frequency_encoding?: MlDataframeAnalysisFeatureProcessorFrequencyEncoding
  multi_encoding?: MlDataframeAnalysisFeatureProcessorMultiEncoding
  n_gram_encoding?: MlDataframeAnalysisFeatureProcessorNGramEncoding
  one_hot_encoding?: MlDataframeAnalysisFeatureProcessorOneHotEncoding
  target_mean_encoding?: MlDataframeAnalysisFeatureProcessorTargetMeanEncoding
}

export interface MlDataframeAnalysisFeatureProcessorFrequencyEncoding {
  feature_name: Name
  field: Field
  frequency_map: Record<string, double>
}

export interface MlDataframeAnalysisFeatureProcessorMultiEncoding {
  processors: integer[]
}

export interface MlDataframeAnalysisFeatureProcessorNGramEncoding {
  feature_prefix?: string
  field: Field
  length?: integer
  n_grams: integer[]
  start?: integer
  custom?: boolean
}

export interface MlDataframeAnalysisFeatureProcessorOneHotEncoding {
  field: Field
  hot_map: string
}

export interface MlDataframeAnalysisFeatureProcessorTargetMeanEncoding {
  default_value: integer
  feature_name: Name
  field: Field
  target_map: Record<string, any>
}

export interface MlDataframeAnalysisOutlierDetection {
  n_neighbors?: integer
  method?: string
  feature_influence_threshold?: double
  compute_feature_influence?: boolean
  outlier_fraction?: double
  standardization_enabled?: boolean
}

export interface MlDataframeAnalysisRegression extends MlDataframeAnalysis {
  loss_function?: string
  loss_function_parameter?: double
}

export interface MlDataframeAnalytics {
  analysis_stats?: MlDataframeAnalyticsStatsContainer
  assignment_explanation?: string
  data_counts: MlDataframeAnalyticsStatsDataCounts
  id: Id
  memory_usage: MlDataframeAnalyticsStatsMemoryUsage
  node?: NodeAttributes
  progress: MlDataframeAnalyticsStatsProgress[]
  state: MlDataframeState
}

export interface MlDataframeAnalyticsDestination {
  index: IndexName
  results_field?: Field
}

export interface MlDataframeAnalyticsFieldSelection {
  is_included: boolean
  is_required: boolean
  feature_type?: string
  mapping_types: string[]
  name: Field
  reason?: string
}

export interface MlDataframeAnalyticsMemoryEstimation {
  expected_memory_with_disk: string
  expected_memory_without_disk: string
}

export interface MlDataframeAnalyticsSource {
  index: Indices
  query?: QueryDslQueryContainer
  _source?: MlDataframeAnalysisAnalyzedFields
  runtime_mappings?: MappingRuntimeFields
}

export interface MlDataframeAnalyticsStatsContainer {
  classification_stats?: MlDataframeAnalyticsStatsHyperparameters
  outlier_detection_stats?: MlDataframeAnalyticsStatsOutlierDetection
  regression_stats?: MlDataframeAnalyticsStatsHyperparameters
}

export interface MlDataframeAnalyticsStatsDataCounts {
  skipped_docs_count: integer
  test_docs_count: integer
  training_docs_count: integer
}

export interface MlDataframeAnalyticsStatsHyperparameters {
  hyperparameters: MlHyperparameters
  iteration: integer
  timestamp: DateString
  timing_stats: MlTimingStats
  validation_loss: MlValidationLoss
}

export interface MlDataframeAnalyticsStatsMemoryUsage {
  memory_reestimate_bytes?: long
  peak_usage_bytes: long
  status: string
  timestamp?: DateString
}

export interface MlDataframeAnalyticsStatsOutlierDetection {
  parameters: MlOutlierDetectionParameters
  timestamp: DateString
  timing_stats: MlTimingStats
}

export interface MlDataframeAnalyticsStatsProgress {
  phase: string
  progress_percent: integer
}

export interface MlDataframeAnalyticsSummary {
  id: Id
  source: MlDataframeAnalyticsSource
  dest: MlDataframeAnalyticsDestination
  analysis: MlDataframeAnalysisContainer
  description?: string
  model_memory_limit?: string
  max_num_threads?: integer
  analyzed_fields?: MlDataframeAnalysisAnalyzedFields
  allow_lazy_start?: boolean
  create_time?: long
  version?: VersionString
}

export interface MlDataframeEvaluationClassification {
  actual_field: Field
  predicted_field?: Field
  top_classes_field?: Field
  metrics?: MlDataframeEvaluationClassificationMetrics
}

export interface MlDataframeEvaluationClassificationMetrics extends MlDataframeEvaluationMetrics {
  accuracy?: Record<string, any>
  multiclass_confusion_matrix?: Record<string, any>
}

export interface MlDataframeEvaluationClassificationMetricsAucRoc {
  class_name?: Name
  include_curve?: boolean
}

export interface MlDataframeEvaluationContainer {
  classification?: MlDataframeEvaluationClassification
  outlier_detection?: MlDataframeEvaluationOutlierDetection
  regression?: MlDataframeEvaluationRegression
}

export interface MlDataframeEvaluationMetrics {
  auc_roc?: MlDataframeEvaluationClassificationMetricsAucRoc
  precision?: Record<string, any>
  recall?: Record<string, any>
}

export interface MlDataframeEvaluationOutlierDetection {
  actual_field: Field
  predicted_probability_field: Field
  metrics?: MlDataframeEvaluationOutlierDetectionMetrics
}

export interface MlDataframeEvaluationOutlierDetectionMetrics extends MlDataframeEvaluationMetrics {
  confusion_matrix?: Record<string, any>
}

export interface MlDataframeEvaluationRegression {
  actual_field: Field
  predicted_field: Field
  metrics?: MlDataframeEvaluationRegressionMetrics
}

export interface MlDataframeEvaluationRegressionMetrics {
  mse?: Record<string, any>
  msle?: MlDataframeEvaluationRegressionMetricsMsle
  huber?: MlDataframeEvaluationRegressionMetricsHuber
  r_squared?: Record<string, any>
}

export interface MlDataframeEvaluationRegressionMetricsHuber {
  delta?: double
}

export interface MlDataframeEvaluationRegressionMetricsMsle {
  offset?: double
}

export type MlDataframeState = 'started' | 'stopped' | 'starting' | 'stopping' | 'failed'

export interface MlDelayedDataCheckConfig {
  check_window?: Time
  enabled: boolean
}

export interface MlDetectionRule {
  actions?: MlRuleAction[]
  conditions?: MlRuleCondition[]
  scope?: Record<Field, MlFilterRef>
}

export interface MlDetector {
  by_field_name?: Field
  custom_rules?: MlDetectionRule[]
  detector_description?: string
  detector_index?: integer
  exclude_frequent?: MlExcludeFrequent
  field_name?: Field
  function: string
  use_null?: boolean
  over_field_name?: Field
  partition_field_name?: Field
}

export interface MlDiscoveryNode {
  attributes: Record<string, string>
  ephemeral_id: Id
  id: Id
  name: Name
  transport_address: TransportAddress
}

export type MlExcludeFrequent = 'all' | 'none' | 'by' | 'over'

export interface MlFilter {
  description?: string
  filter_id: Id
  items: string[]
}

export interface MlFilterRef {
  filter_id: Id
  filter_type: MlFilterType
}

export type MlFilterType = 'include' | 'exclude'

export interface MlHyperparameter {
  absolute_importance?: double
  name: Name
  relative_importance?: double
  supplied: boolean
  value: double
}

export interface MlHyperparameters {
  alpha?: double
  lambda?: double
  gamma?: double
  eta?: double
  eta_growth_rate_per_tree?: double
  feature_bag_fraction?: double
  downsample_factor?: double
  max_attempts_to_add_tree?: integer
  max_optimization_rounds_per_hyperparameter?: integer
  max_trees?: integer
  num_folds?: integer
  num_splits_per_feature?: integer
  soft_tree_depth_limit?: integer
  soft_tree_depth_tolerance?: double
}

export interface MlInfluence {
  influencer_field_name: string
  influencer_field_values: string[]
}

export interface MlJob {
  allow_lazy_open?: boolean
  analysis_config: MlAnalysisConfig
  analysis_limits?: MlAnalysisLimits
  background_persist_interval: Time
  create_time: integer
  data_description: MlDataDescription
  description: string
  finished_time: integer
  job_id: Id
  job_type: string
  model_snapshot_id: Id
  model_snapshot_retention_days: long
  renormalization_window_days: long
  results_index_name?: IndexName
  results_retention_days?: long
  groups?: string[]
  model_plot_config?: MlModelPlotConfig
  custom_settings?: MlCustomSettings
  job_version?: VersionString
  deleting?: boolean
  daily_model_snapshot_retention_after_days?: long
}

export interface MlJobForecastStatistics {
  memory_bytes?: MlJobStatistics
  processing_time_ms?: MlJobStatistics
  records?: MlJobStatistics
  status?: Record<string, long>
  total: long
  forecasted_jobs: integer
}

export type MlJobState = 'closing' | 'closed' | 'opened' | 'failed' | 'opening'

export interface MlJobStatistics {
  avg: double
  max: double
  min: double
  total: double
}

export interface MlJobStats {
  assignment_explanation: string
  data_counts: MlDataCounts
  forecasts_stats: MlJobForecastStatistics
  job_id: string
  model_size_stats: MlModelSizeStats
  node: MlDiscoveryNode
  open_time?: DateString
  state: MlJobState
  timing_stats: MlJobTimingStats
  deleting?: boolean
}

export interface MlJobTimingStats {
  average_bucket_processing_time_ms: double
  bucket_count: long
  exponential_average_bucket_processing_time_ms: double
  exponential_average_bucket_processing_time_per_hour_ms: double
  job_id: Id
  total_bucket_processing_time_ms: double
  maximum_bucket_processing_time_ms: double
  minimum_bucket_processing_time_ms: double
}

export type MlMemoryStatus = 'ok' | 'soft_limit' | 'hard_limit'

export interface MlModelPlotConfig {
  terms?: Field
  enabled: boolean
  annotations_enabled?: boolean
}

export interface MlModelSizeStats {
  bucket_allocation_failures_count: long
  job_id: Id
  log_time: Time
  memory_status: MlMemoryStatus
  model_bytes: long
  model_bytes_exceeded: long
  model_bytes_memory_limit: long
  peak_model_bytes: long
  assignment_memory_basis?: string
  result_type: string
  total_by_field_count: long
  total_over_field_count: long
  total_partition_field_count: long
  categorization_status: MlCategorizationStatus
  categorized_doc_count: integer
  dead_category_count: integer
  failed_category_count: integer
  frequent_category_count: integer
  rare_category_count: integer
  total_category_count: integer
  timestamp?: long
}

export interface MlModelSnapshot {
  description?: string
  job_id: Id
  latest_record_time_stamp?: integer
  latest_result_time_stamp?: integer
  min_version: VersionString
  model_size_stats: MlModelSizeStats
  retain: boolean
  snapshot_doc_count: long
  snapshot_id: Id
  timestamp: integer
}

export interface MlOutlierDetectionParameters {
  compute_feature_influence?: boolean
  feature_influence_threshold?: double
  method?: string
  n_neighbors?: integer
  outlier_fraction?: double
  standardization_enabled?: boolean
}

export interface MlOverallBucket {
  bucket_span: long
  is_interim: boolean
  jobs: MlOverallBucketJob[]
  overall_score: double
  result_type: string
  timestamp: Time
}

export interface MlOverallBucketJob {
  job_id: Id
  max_anomaly_score: double
}

export interface MlPage {
  from?: integer
  size?: integer
}

export interface MlPartitionScore {
  initial_record_score: double
  partition_field_name: Field
  partition_field_value: string
  probability: double
  record_score: double
}

export interface MlPerPartitionCategorization {
  enabled?: boolean
  stop_on_warn?: boolean
}

export type MlRuleAction = 'skip_result' | 'skip_model_update'

export interface MlRuleCondition {
  applies_to: MlAppliesTo
  operator: MlConditionOperator
  value: double
}

export interface MlTimingStats {
  elapsed_time: integer
  iteration_time?: integer
}

export interface MlTotalFeatureImportance {
  feature_name: Name
  importance: MlTotalFeatureImportanceStatistics[]
  classes: MlTotalFeatureImportanceClass[]
}

export interface MlTotalFeatureImportanceClass {
  class_name: Name
  importance: MlTotalFeatureImportanceStatistics[]
}

export interface MlTotalFeatureImportanceStatistics {
  mean_magnitude: double
  max: integer
  min: integer
}

export interface MlTrainedModelConfig {
  model_id: Id
  tags: string[]
  version?: VersionString
  compressed_definition?: string
  created_by?: string
  create_time?: Time
  default_field_map?: Record<string, string>
  description: string
  estimated_heap_memory_usage_bytes?: integer
  estimated_operations?: integer
  inference_config: AggregationsInferenceConfigContainer
  input: MlTrainedModelConfigInput
  license_level?: string
  metadata?: MlTrainedModelConfigMetadata
}

export interface MlTrainedModelConfigInput {
  field_names: Field[]
}

export interface MlTrainedModelConfigMetadata {
  model_aliases?: string[]
  feature_importance_baseline?: Record<string, string>
  hyperparameters?: MlHyperparameter[]
  total_feature_importance?: MlTotalFeatureImportance[]
}

export interface MlTrainedModelInferenceStats {
  failure_count: long
  inference_count: long
  cache_miss_count: long
  missing_all_fields_count: long
  timestamp: Time
}

export interface MlTrainedModelStats {
  model_id: Id
  pipeline_count: integer
  inference_stats?: MlTrainedModelInferenceStats
  ingest?: Record<string, any>
}

export interface MlValidationLoss {
  fold_values: string[]
  loss_type: string
}

export interface MlCloseJobRequest extends RequestBase {
  job_id: Id
  allow_no_jobs?: boolean
  force?: boolean
  timeout?: Time
}

export interface MlCloseJobResponse {
  closed: boolean
}

export interface MlDeleteCalendarRequest extends RequestBase {
  calendar_id: Id
}

export interface MlDeleteCalendarResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteCalendarEventRequest extends RequestBase {
  calendar_id: Id
  event_id: Id
}

export interface MlDeleteCalendarEventResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteCalendarJobRequest extends RequestBase {
  calendar_id: Id
  job_id: Id
}

export interface MlDeleteCalendarJobResponse {
  calendar_id: Id
  description?: string
  job_ids: Ids
}

export interface MlDeleteDataFrameAnalyticsRequest extends RequestBase {
  id: Id
  force?: boolean
  timeout?: Time
}

export interface MlDeleteDataFrameAnalyticsResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteDatafeedRequest extends RequestBase {
  datafeed_id: Id
  force?: boolean
}

export interface MlDeleteDatafeedResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteExpiredDataRequest extends RequestBase {
  name?: Name
  requests_per_second?: float
  timeout?: Time
  body?: {
    requests_per_second?: float
    timeout?: Time
  }
}

export interface MlDeleteExpiredDataResponse {
  deleted: boolean
}

export interface MlDeleteFilterRequest extends RequestBase {
  filter_id: Id
}

export interface MlDeleteFilterResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteForecastRequest extends RequestBase {
  job_id: Id
  forecast_id?: Id
  allow_no_forecasts?: boolean
  timeout?: Time
}

export interface MlDeleteForecastResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteJobRequest extends RequestBase {
  job_id: Id
  force?: boolean
  wait_for_completion?: boolean
}

export interface MlDeleteJobResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteModelSnapshotRequest extends RequestBase {
  job_id: Id
  snapshot_id: Id
}

export interface MlDeleteModelSnapshotResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteTrainedModelRequest extends RequestBase {
  model_id: Id
}

export interface MlDeleteTrainedModelResponse extends AcknowledgedResponseBase {
}

export interface MlDeleteTrainedModelAliasRequest extends RequestBase {
  model_alias: Name
  model_id: Id
}

export interface MlDeleteTrainedModelAliasResponse extends AcknowledgedResponseBase {
}

export interface MlEstimateModelMemoryRequest extends RequestBase {
  body?: {
    analysis_config?: MlAnalysisConfig
    max_bucket_cardinality?: Record<Field, long>
    overall_cardinality?: Record<Field, long>
  }
}

export interface MlEstimateModelMemoryResponse {
  model_memory_estimate: string
}

export interface MlEvaluateDataFrameConfusionMatrixItem {
  actual_class: Name
  actual_class_doc_count: integer
  predicted_classes: MlEvaluateDataFrameConfusionMatrixPrediction[]
  other_predicted_class_doc_count: integer
}

export interface MlEvaluateDataFrameConfusionMatrixPrediction {
  predicted_class: Name
  count: integer
}

export interface MlEvaluateDataFrameConfusionMatrixTreshold {
  tp: integer
  fp: integer
  tn: integer
  fn: integer
}

export interface MlEvaluateDataFrameDataframeClassificationSummary {
  auc_roc?: MlEvaluateDataFrameDataframeEvaluationSummaryAucRoc
  accuracy?: MlEvaluateDataFrameDataframeClassificationSummaryAccuracy
  multiclass_confusion_matrix?: MlEvaluateDataFrameDataframeClassificationSummaryMulticlassConfusionMatrix
  precision?: MlEvaluateDataFrameDataframeClassificationSummaryPrecision
  recall?: MlEvaluateDataFrameDataframeClassificationSummaryRecall
}

export interface MlEvaluateDataFrameDataframeClassificationSummaryAccuracy {
  classes: MlEvaluateDataFrameDataframeEvaluationClass[]
  overall_accuracy: double
}

export interface MlEvaluateDataFrameDataframeClassificationSummaryMulticlassConfusionMatrix {
  confusion_matrix: MlEvaluateDataFrameConfusionMatrixItem[]
  other_actual_class_count: integer
}

export interface MlEvaluateDataFrameDataframeClassificationSummaryPrecision {
  classes: MlEvaluateDataFrameDataframeEvaluationClass[]
  avg_precision: double
}

export interface MlEvaluateDataFrameDataframeClassificationSummaryRecall {
  classes: MlEvaluateDataFrameDataframeEvaluationClass[]
  avg_recall: double
}

export interface MlEvaluateDataFrameDataframeEvaluationClass extends MlEvaluateDataFrameDataframeEvaluationValue {
  class_name: Name
}

export interface MlEvaluateDataFrameDataframeEvaluationSummaryAucRoc extends MlEvaluateDataFrameDataframeEvaluationValue {
  curve?: MlEvaluateDataFrameDataframeEvaluationSummaryAucRocCurveItem[]
}

export interface MlEvaluateDataFrameDataframeEvaluationSummaryAucRocCurveItem {
  tpr: double
  fpr: double
  threshold: double
}

export interface MlEvaluateDataFrameDataframeEvaluationValue {
  value: double
}

export interface MlEvaluateDataFrameDataframeOutlierDetectionSummary {
  auc_roc?: MlEvaluateDataFrameDataframeEvaluationSummaryAucRoc
  precision?: Record<string, double>
  recall?: Record<string, double>
  confusion_matrix?: Record<string, MlEvaluateDataFrameConfusionMatrixTreshold>
}

export interface MlEvaluateDataFrameDataframeRegressionSummary {
  huber?: MlEvaluateDataFrameDataframeEvaluationValue
  mse?: MlEvaluateDataFrameDataframeEvaluationValue
  msle?: MlEvaluateDataFrameDataframeEvaluationValue
  r_squared?: MlEvaluateDataFrameDataframeEvaluationValue
}

export interface MlEvaluateDataFrameRequest extends RequestBase {
  body?: {
    evaluation: MlDataframeEvaluationContainer
    index: IndexName
    query?: QueryDslQueryContainer
  }
}

export interface MlEvaluateDataFrameResponse {
  classification?: MlEvaluateDataFrameDataframeClassificationSummary
  outlier_detection?: MlEvaluateDataFrameDataframeOutlierDetectionSummary
  regression?: MlEvaluateDataFrameDataframeRegressionSummary
}

export interface MlExplainDataFrameAnalyticsRequest extends RequestBase {
  id?: Id
  body?: {
    source?: MlDataframeAnalyticsSource
    dest?: MlDataframeAnalyticsDestination
    analysis: MlDataframeAnalysisContainer
    description?: string
    model_memory_limit?: string
    max_num_threads?: integer
    analyzed_fields?: MlDataframeAnalysisAnalyzedFields
    allow_lazy_start?: boolean
  }
}

export interface MlExplainDataFrameAnalyticsResponse {
  field_selection: MlDataframeAnalyticsFieldSelection[]
  memory_estimation: MlDataframeAnalyticsMemoryEstimation
}

export interface MlFindFileStructureRequest extends RequestBase {
  stub: string
}

export interface MlFindFileStructureResponse {
  stub: string
}

export interface MlFlushJobRequest extends RequestBase {
  job_id: Id
  skip_time?: string
  body?: {
    advance_time?: DateString
    calc_interim?: boolean
    end?: DateString
    start?: DateString
  }
}

export interface MlFlushJobResponse {
  flushed: boolean
  last_finalized_bucket_end?: integer
}

export interface MlForecastJobRequest extends RequestBase {
  job_id: Id
  body?: {
    duration?: Time
    expires_in?: Time
  }
}

export interface MlForecastJobResponse extends AcknowledgedResponseBase {
  forecast_id: Id
}

export interface MlGetAnomalyRecordsRequest extends RequestBase {
  job_id: Id
  exclude_interim?: boolean
  from?: integer
  size?: integer
  start?: DateString
  end?: DateString
  body?: {
    desc?: boolean
    exclude_interim?: boolean
    page?: MlPage
    record_score?: double
    sort?: Field
    start?: DateString
    end?: DateString
  }
}

export interface MlGetAnomalyRecordsResponse {
  count: long
  records: MlAnomaly[]
}

export interface MlGetBucketsRequest extends RequestBase {
  job_id: Id
  timestamp?: Timestamp
  from?: integer
  size?: integer
  exclude_interim?: boolean
  sort?: Field
  desc?: boolean
  start?: DateString
  end?: DateString
  body?: {
    anomaly_score?: double
    desc?: boolean
    exclude_interim?: boolean
    expand?: boolean
    page?: MlPage
    sort?: Field
    start?: DateString
    end?: DateString
  }
}

export interface MlGetBucketsResponse {
  buckets: MlBucketSummary[]
  count: long
}

export interface MlGetCalendarEventsRequest extends RequestBase {
  calendar_id: Id
  job_id?: Id
  end?: DateString
  from?: integer
  start?: string
  size?: integer
  body?: {
    end?: DateString
    from?: integer
    start?: string
    size?: integer
  }
}

export interface MlGetCalendarEventsResponse {
  count: long
  events: MlCalendarEvent[]
}

export interface MlGetCalendarsCalendar {
  calendar_id: Id
  description?: string
  job_ids: Id[]
}

export interface MlGetCalendarsRequest extends RequestBase {
  calendar_id?: Id
  from?: integer
  size?: integer
  body?: {
    page?: MlPage
  }
}

export interface MlGetCalendarsResponse {
  calendars: MlGetCalendarsCalendar[]
  count: long
}

export interface MlGetCategoriesRequest extends RequestBase {
  job_id: Id
  category_id?: CategoryId
  from?: integer
  size?: integer
  partition_field_value?: string
  body?: {
    page?: MlPage
  }
}

export interface MlGetCategoriesResponse {
  categories: MlCategory[]
  count: long
}

export interface MlGetDataFrameAnalyticsRequest extends RequestBase {
  id?: Id
  allow_no_match?: boolean
  from?: integer
  size?: integer
  exclude_generated?: boolean
}

export interface MlGetDataFrameAnalyticsResponse {
  count: integer
  data_frame_analytics: MlDataframeAnalyticsSummary[]
}

export interface MlGetDataFrameAnalyticsStatsRequest extends RequestBase {
  id?: Id
  allow_no_match?: boolean
  from?: integer
  size?: integer
  verbose?: boolean
}

export interface MlGetDataFrameAnalyticsStatsResponse {
  count: long
  data_frame_analytics: MlDataframeAnalytics[]
}

export interface MlGetDatafeedStatsRequest extends RequestBase {
  datafeed_id?: Ids
  allow_no_datafeeds?: boolean
}

export interface MlGetDatafeedStatsResponse {
  count: long
  datafeeds: MlDatafeedStats[]
}

export interface MlGetDatafeedsRequest extends RequestBase {
  datafeed_id?: Id
  allow_no_datafeeds?: boolean
  exclude_generated?: boolean
}

export interface MlGetDatafeedsResponse {
  count: long
  datafeeds: MlDatafeed[]
}

export interface MlGetFiltersRequest extends RequestBase {
  filter_id?: Id
  from?: integer
  size?: integer
}

export interface MlGetFiltersResponse {
  count: long
  filters: MlFilter[]
}

export interface MlGetInfluencersRequest extends RequestBase {
  job_id: Id
  desc?: boolean
  end?: DateString
  exclude_interim?: boolean
  influencer_score?: double
  from?: integer
  size?: integer
  sort?: Field
  start?: DateString
  body?: {
    page?: MlPage
  }
}

export interface MlGetInfluencersResponse {
  count: long
  influencers: MlBucketInfluencer[]
}

export interface MlGetJobStatsRequest extends RequestBase {
  job_id?: Id
  allow_no_jobs?: boolean
}

export interface MlGetJobStatsResponse {
  count: long
  jobs: MlJobStats[]
}

export interface MlGetJobsRequest extends RequestBase {
  job_id?: Ids
  allow_no_match?: boolean
  allow_no_jobs?: boolean
  exclude_generated?: boolean
}

export interface MlGetJobsResponse {
  count: long
  jobs: MlJob[]
}

export interface MlGetModelSnapshotsRequest extends RequestBase {
  job_id: Id
  snapshot_id?: Id
  desc?: boolean
  end?: Time
  from?: integer
  size?: integer
  sort?: Field
  start?: Time
  body?: {
    start?: Time
    end?: Time
  }
}

export interface MlGetModelSnapshotsResponse {
  count: long
  model_snapshots: MlModelSnapshot[]
}

export interface MlGetOverallBucketsRequest extends RequestBase {
  job_id: Id
  bucket_span?: Time
  overall_score?: double | string
  top_n?: integer
  end?: Time
  start?: Time
  exclude_interim?: boolean
  allow_no_match?: boolean
  body?: {
    allow_no_jobs?: boolean
  }
}

export interface MlGetOverallBucketsResponse {
  count: long
  overall_buckets: MlOverallBucket[]
}

export interface MlGetTrainedModelsRequest extends RequestBase {
  model_id?: Id
  allow_no_match?: boolean
  decompress_definition?: boolean
  exclude_generated?: boolean
  from?: integer
  include?: string
  size?: integer
  tags?: string
}

export interface MlGetTrainedModelsResponse {
  count: integer
  trained_model_configs: MlTrainedModelConfig[]
}

export interface MlGetTrainedModelsStatsRequest extends RequestBase {
  model_id?: Id
  allow_no_match?: boolean
  from?: integer
  size?: integer
}

export interface MlGetTrainedModelsStatsResponse {
  count: integer
  trained_model_stats: MlTrainedModelStats[]
}

export interface MlInfoAnomalyDetectors {
  categorization_analyzer: MlCategorizationAnalyzer
  categorization_examples_limit: integer
  model_memory_limit: string
  model_snapshot_retention_days: integer
  daily_model_snapshot_retention_after_days: integer
}

export interface MlInfoDatafeeds {
  scroll_size: integer
}

export interface MlInfoDefaults {
  anomaly_detectors: MlInfoAnomalyDetectors
  datafeeds: MlInfoDatafeeds
}

export interface MlInfoLimits {
  max_model_memory_limit?: ByteSize
  effective_max_model_memory_limit: ByteSize
  total_ml_memory: ByteSize
}

export interface MlInfoNativeCode {
  build_hash: string
  version: VersionString
}

export interface MlInfoRequest extends RequestBase {
}

export interface MlInfoResponse {
  defaults: MlInfoDefaults
  limits: MlInfoLimits
  upgrade_mode: boolean
  native_code: MlInfoNativeCode
}

export interface MlOpenJobRequest extends RequestBase {
  job_id: Id
  body?: {
    timeout?: Time
  }
}

export interface MlOpenJobResponse {
  opened: boolean
}

export interface MlPostCalendarEventsRequest extends RequestBase {
  calendar_id?: Id
  body?: {
    events: MlCalendarEvent[]
  }
}

export interface MlPostCalendarEventsResponse {
  events: MlCalendarEvent[]
}

export interface MlPostJobDataRequest extends RequestBase {
  job_id: Id
  reset_end?: DateString
  reset_start?: DateString
  body?: {
    data?: any[]
  }
}

export interface MlPostJobDataResponse {
  bucket_count: long
  earliest_record_timestamp: integer
  empty_bucket_count: long
  input_bytes: long
  input_field_count: long
  input_record_count: long
  invalid_date_count: long
  job_id: Id
  last_data_time: integer
  latest_record_timestamp: integer
  missing_field_count: long
  out_of_order_timestamp_count: long
  processed_field_count: long
  processed_record_count: long
  sparse_bucket_count: long
}

export interface MlPreviewDataFrameAnalyticsDataframePreviewConfig {
  source: MlDataframeAnalyticsSource
  analysis: MlDataframeAnalysisContainer
  model_memory_limit?: string
  max_num_threads?: integer
  analyzed_fields?: MlDataframeAnalysisAnalyzedFields
}

export interface MlPreviewDataFrameAnalyticsRequest extends RequestBase {
  id?: Id
  body?: {
    config?: MlPreviewDataFrameAnalyticsDataframePreviewConfig
  }
}

export interface MlPreviewDataFrameAnalyticsResponse {
  feature_values: Record<Field, string>[]
}

export interface MlPreviewDatafeedRequest extends RequestBase {
  datafeed_id: Id
  body?: {
    job_config?: MlJob
    datafeed_config?: MlDatafeed
  }
}

export interface MlPreviewDatafeedResponse<TDocument = unknown> {
  data: TDocument[]
}

export interface MlPutCalendarRequest extends RequestBase {
  calendar_id: Id
  body?: {
    description?: string
  }
}

export interface MlPutCalendarResponse {
  calendar_id: Id
  description: string
  job_ids: Ids
}

export interface MlPutCalendarJobRequest extends RequestBase {
  calendar_id: Id
  job_id: Id
}

export interface MlPutCalendarJobResponse {
  calendar_id: Id
  description?: string
  job_ids: Ids
}

export interface MlPutDataFrameAnalyticsRequest extends RequestBase {
  id: Id
  body?: {
    source?: MlDataframeAnalyticsSource
    dest: MlDataframeAnalyticsDestination
    analysis: MlDataframeAnalysisContainer
    description?: string
    model_memory_limit?: ByteSize
    max_num_threads?: integer
    analyzed_fields?: MlDataframeAnalysisAnalyzedFields
    allow_lazy_start?: boolean
  }
}

export interface MlPutDataFrameAnalyticsResponse {
  id: Id
  create_time: long
  version: VersionString
  source: MlDataframeAnalyticsSource
  description?: string
  dest: MlDataframeAnalyticsDestination
  model_memory_limit: ByteSize
  allow_lazy_start: boolean
  max_num_threads: integer
  analysis: MlDataframeAnalysisContainer
  analyzed_fields?: MlDataframeAnalysisAnalyzedFields
}

export interface MlPutDatafeedRequest extends RequestBase {
  datafeed_id: Id
  allow_no_indices?: boolean
  expand_wildcards?: ExpandWildcards
  ignore_throttled?: boolean
  ignore_unavailable?: boolean
  body?: {
    aggregations?: Record<string, AggregationsAggregationContainer>
    chunking_config?: MlChunkingConfig
    delayed_data_check_config?: MlDelayedDataCheckConfig
    frequency?: Time
    indices?: Indices
    indexes?: string[]
    indices_options?: MlDatafeedIndicesOptions
    job_id?: Id
    max_empty_searches?: integer
    query?: QueryDslQueryContainer
    query_delay?: Time
    runtime_mappings?: MappingRuntimeFields
    script_fields?: Record<string, ScriptField>
    scroll_size?: integer
  }
}

export interface MlPutDatafeedResponse {
  aggregations: Record<string, AggregationsAggregationContainer>
  chunking_config: MlChunkingConfig
  delayed_data_check_config?: MlDelayedDataCheckConfig
  datafeed_id: Id
  frequency: Time
  indices: Indices
  job_id: Id
  indices_options?: MlDatafeedIndicesOptions
  max_empty_searches: integer
  query: QueryDslQueryContainer
  query_delay: Time
  runtime_mappings?: MappingRuntimeFields
  script_fields?: Record<string, ScriptField>
  scroll_size: integer
}

export interface MlPutFilterRequest extends RequestBase {
  filter_id: Id
  body?: {
    description?: string
    items?: string[]
  }
}

export interface MlPutFilterResponse {
  description: string
  filter_id: Id
  items: string[]
}

export interface MlPutJobRequest extends RequestBase {
  job_id: Id
  body?: {
    allow_lazy_open?: boolean
    analysis_config: MlAnalysisConfig
    analysis_limits?: MlAnalysisLimits
    background_persist_interval: Time
    custom_settings?: MlCustomSettings
    data_description?: MlDataDescription
    daily_model_snapshot_retention_after_days?: long
    groups?: string[]
    description?: string
    model_plot_config?: MlModelPlotConfig
    model_snapshot_retention_days?: long
    results_index_name?: IndexName
    results_retention_days?: long
  }
}

export interface MlPutJobResponse {
  allow_lazy_open: boolean
  analysis_config: MlAnalysisConfig
  analysis_limits?: MlAnalysisLimits
  background_persist_interval: Time
  create_time: DateString
  custom_settings?: MlCustomSettings
  data_description: MlDataDescription
  daily_model_snapshot_retention_after_days?: long
  groups?: string[]
  description: string
  job_id: Id
  job_type: string
  model_plot_config: MlModelPlotConfig
  model_snapshot_id: Id
  model_snapshot_retention_days: long
  renormalization_window_days: long
  results_index_name: string
  results_retention_days?: long
}

export interface MlPutTrainedModelRequest extends RequestBase {
  stub: string
  body?: {
    stub?: string
  }
}

export interface MlPutTrainedModelResponse {
  stub: boolean
}

export interface MlPutTrainedModelAliasRequest extends RequestBase {
  model_alias: string
  model_id: Id
  reassign?: boolean
}

export interface MlPutTrainedModelAliasResponse extends AcknowledgedResponseBase {
}

export interface MlRevertModelSnapshotRequest extends RequestBase {
  job_id: Id
  snapshot_id: Id
  body?: {
    delete_intervening_results?: boolean
  }
}

export interface MlRevertModelSnapshotResponse {
  model: MlModelSnapshot
}

export interface MlSetUpgradeModeRequest extends RequestBase {
  enabled?: boolean
  timeout?: Time
}

export interface MlSetUpgradeModeResponse extends AcknowledgedResponseBase {
}

export interface MlStartDataFrameAnalyticsRequest extends RequestBase {
  id: Id
  timeout?: Time
}

export interface MlStartDataFrameAnalyticsResponse extends AcknowledgedResponseBase {
  node: NodeId
}

export interface MlStartDatafeedRequest extends RequestBase {
  datafeed_id: Id
  start?: Time
  body?: {
    end?: Time
    start?: Time
    timeout?: Time
  }
}

export interface MlStartDatafeedResponse {
  node: NodeIds
  started: boolean
}

export interface MlStopDataFrameAnalyticsRequest extends RequestBase {
  id: Id
  allow_no_match?: boolean
  force?: boolean
  timeout?: Time
}

export interface MlStopDataFrameAnalyticsResponse {
  stopped: boolean
}

export interface MlStopDatafeedRequest extends RequestBase {
  datafeed_id: Id
  allow_no_match?: boolean
  force?: boolean
  body?: {
    force?: boolean
    timeout?: Time
  }
}

export interface MlStopDatafeedResponse {
  stopped: boolean
}

export interface MlUpdateDataFrameAnalyticsRequest extends RequestBase {
  id: Id
  body?: {
    description?: string
    model_memory_limit?: string
    max_num_threads?: integer
    allow_lazy_start?: boolean
  }
}

export interface MlUpdateDataFrameAnalyticsResponse {
  id: Id
  create_time: long
  version: VersionString
  source: MlDataframeAnalyticsSource
  description?: string
  dest: MlDataframeAnalyticsDestination
  model_memory_limit: string
  allow_lazy_start: boolean
  max_num_threads: integer
  analysis: MlDataframeAnalysisContainer
  analyzed_fields?: MlDataframeAnalysisAnalyzedFields
}

export interface MlUpdateFilterRequest extends RequestBase {
  filter_id: Id
  body?: {
    add_items?: string[]
    description?: string
    remove_items?: string[]
  }
}

export interface MlUpdateFilterResponse {
  description: string
  filter_id: Id
  items: string[]
}

export interface MlUpdateJobRequest extends RequestBase {
  job_id: Id
  body?: {
    allow_lazy_open?: boolean
    analysis_limits?: MlAnalysisMemoryLimit
    background_persist_interval?: Time
    custom_settings?: Record<string, any>
    categorization_filters?: string[]
    description?: string
    model_plot_config?: MlModelPlotConfig
    daily_model_snapshot_retention_after_days?: long
    model_snapshot_retention_days?: long
    renormalization_window_days?: long
    results_retention_days?: long
    groups?: string[]
    detectors?: MlDetector[]
    per_partition_categorization?: MlPerPartitionCategorization
  }
}

export interface MlUpdateJobResponse {
  stub: boolean
}

export interface MlUpdateModelSnapshotRequest extends RequestBase {
  job_id: Id
  snapshot_id: Id
  body?: {
    description?: string
    retain?: boolean
  }
}

export interface MlUpdateModelSnapshotResponse extends AcknowledgedResponseBase {
  model: MlModelSnapshot
}

export interface MlUpgradeJobSnapshotRequest extends RequestBase {
  job_id: Id
  snapshot_id: Id
  wait_for_completion?: boolean
  timeout?: Time
}

export interface MlUpgradeJobSnapshotResponse {
  node: NodeId
  completed: boolean
}

export interface MlValidateDetectorRequest extends RequestBase {
  body?: MlDetector
}

export interface MlValidateDetectorResponse extends AcknowledgedResponseBase {
}

export interface MlValidateJobRequest extends RequestBase {
  body?: {
    job_id?: Id
    analysis_config?: MlAnalysisConfig
    analysis_limits?: MlAnalysisLimits
    data_description?: MlDataDescription
    description?: string
    model_plot?: MlModelPlotConfig
    model_snapshot_retention_days?: long
    results_index_name?: IndexName
  }
}

export interface MlValidateJobResponse extends AcknowledgedResponseBase {
}

export interface MonitoringBulkRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface MonitoringBulkResponse {
  stub: integer
}

export interface NodesAdaptiveSelection {
  avg_queue_size: long
  avg_response_time: long
  avg_response_time_ns: long
  avg_service_time: string
  avg_service_time_ns: long
  outgoing_searches: long
  rank: string
}

export interface NodesBreaker {
  estimated_size: string
  estimated_size_in_bytes: long
  limit_size: string
  limit_size_in_bytes: long
  overhead: float
  tripped: float
}

export interface NodesCpu {
  percent: integer
  sys?: string
  sys_in_millis?: long
  total?: string
  total_in_millis?: long
  user?: string
  user_in_millis?: long
  load_average?: Record<string, double>
}

export interface NodesDataPathStats {
  available: string
  available_in_bytes: long
  disk_queue: string
  disk_reads: long
  disk_read_size: string
  disk_read_size_in_bytes: long
  disk_writes: long
  disk_write_size: string
  disk_write_size_in_bytes: long
  free: string
  free_in_bytes: long
  mount: string
  path: string
  total: string
  total_in_bytes: long
  type: string
}

export interface NodesExtendedMemoryStats extends NodesMemoryStats {
  free_percent: integer
  used_percent: integer
  total_in_bytes: integer
  free_in_bytes: integer
  used_in_bytes: integer
}

export interface NodesFileSystem {
  data: NodesDataPathStats[]
  timestamp: long
  total: NodesFileSystemTotal
}

export interface NodesFileSystemTotal {
  available: string
  available_in_bytes: long
  free: string
  free_in_bytes: long
  total: string
  total_in_bytes: long
}

export interface NodesGarbageCollector {
  collectors: Record<string, NodesGarbageCollectorTotal>
}

export interface NodesGarbageCollectorTotal {
  collection_count: long
  collection_time: string
  collection_time_in_millis: long
}

export interface NodesHttp {
  current_open: integer
  total_opened: long
}

export interface NodesIngest {
  pipelines: Record<string, NodesIngestTotal>
  total: NodesIngestTotal
}

export interface NodesIngestTotal {
  count: long
  current: long
  failed: long
  processors: NodesKeyedProcessor[]
  time_in_millis: long
}

export interface NodesJvm {
  buffer_pools: Record<string, NodesNodeBufferPool>
  classes: NodesJvmClasses
  gc: NodesGarbageCollector
  mem: NodesMemoryStats
  threads: NodesJvmThreads
  timestamp: long
  uptime: string
  uptime_in_millis: long
}

export interface NodesJvmClasses {
  current_loaded_count: long
  total_loaded_count: long
  total_unloaded_count: long
}

export interface NodesJvmThreads {
  count: long
  peak_count: long
}

export interface NodesKeyedProcessor {
  statistics: NodesProcess
  type: string
}

export interface NodesMemoryStats {
  resident?: string
  resident_in_bytes?: long
  share?: string
  share_in_bytes?: long
  total_virtual?: string
  total_virtual_in_bytes?: long
  total_in_bytes: long
  free_in_bytes: long
  used_in_bytes: long
}

export interface NodesNodeBufferPool {
  count: long
  total_capacity: string
  total_capacity_in_bytes: long
  used: string
  used_in_bytes: long
}

export interface NodesNodesResponseBase {
  _nodes: NodeStatistics
}

export interface NodesOperatingSystem {
  cpu: NodesCpu
  mem: NodesExtendedMemoryStats
  swap: NodesMemoryStats
  timestamp: long
}

export interface NodesProcess {
  cpu: NodesCpu
  mem: NodesMemoryStats
  open_file_descriptors: integer
  timestamp: long
}

export interface NodesScripting {
  cache_evictions: long
  compilations: long
}

export interface NodesStats {
  adaptive_selection: Record<string, NodesAdaptiveSelection>
  breakers: Record<string, NodesBreaker>
  fs: NodesFileSystem
  host: Host
  http: NodesHttp
  indices: IndicesStatsIndexStats
  ingest: NodesIngest
  ip: Ip | Ip[]
  jvm: NodesJvm
  name: Name
  os: NodesOperatingSystem
  process: NodesProcess
  roles: NodeRoles
  script: NodesScripting
  thread_pool: Record<string, NodesThreadCount>
  timestamp: long
  transport: NodesTransport
  transport_address: TransportAddress
  attributes: Record<Field, string>
}

export interface NodesThreadCount {
  active: long
  completed: long
  largest: long
  queue: long
  rejected: long
  threads: long
}

export interface NodesTransport {
  rx_count: long
  rx_size: string
  rx_size_in_bytes: long
  server_open: integer
  tx_count: long
  tx_size: string
  tx_size_in_bytes: long
}

export interface NodesHotThreadsHotThread {
  hosts: Host[]
  node_id: Id
  node_name: Name
  threads: string[]
}

export interface NodesHotThreadsRequest extends RequestBase {
  node_id?: NodeIds
  ignore_idle_threads?: boolean
  interval?: Time
  snapshots?: long
  threads?: long
  thread_type?: ThreadType
  timeout?: Time
}

export interface NodesHotThreadsResponse {
  hot_threads: NodesHotThreadsHotThread[]
}

export interface NodesInfoNodeInfo {
  attributes: Record<string, string>
  build_flavor: string
  build_hash: string
  build_type: string
  host: Host
  http?: NodesInfoNodeInfoHttp
  ip: Ip
  jvm?: NodesInfoNodeJvmInfo
  name: Name
  network?: NodesInfoNodeInfoNetwork
  os?: NodesInfoNodeOperatingSystemInfo
  plugins?: PluginStats[]
  process?: NodesInfoNodeProcessInfo
  roles: NodeRoles
  settings?: NodesInfoNodeInfoSettings
  thread_pool?: Record<string, NodesInfoNodeThreadPoolInfo>
  total_indexing_buffer?: long
  total_indexing_buffer_in_bytes?: ByteSize
  transport?: NodesInfoNodeInfoTransport
  transport_address: TransportAddress
  version: VersionString
  modules?: PluginStats[]
  ingest?: NodesInfoNodeInfoIngest
  aggregations?: Record<string, NodesInfoNodeInfoAggregation>
}

export interface NodesInfoNodeInfoAction {
  destructive_requires_name: string
}

export interface NodesInfoNodeInfoAggregation {
  types: string[]
}

export interface NodesInfoNodeInfoBootstrap {
  memory_lock: string
}

export interface NodesInfoNodeInfoClient {
  type: string
}

export interface NodesInfoNodeInfoDiscover {
  seed_hosts: string
}

export interface NodesInfoNodeInfoHttp {
  bound_address: string[]
  max_content_length?: ByteSize
  max_content_length_in_bytes: long
  publish_address: string
}

export interface NodesInfoNodeInfoIngest {
  processors: NodesInfoNodeInfoIngestProcessor[]
}

export interface NodesInfoNodeInfoIngestProcessor {
  type: string
}

export interface NodesInfoNodeInfoJvmMemory {
  direct_max?: ByteSize
  direct_max_in_bytes: long
  heap_init?: ByteSize
  heap_init_in_bytes: long
  heap_max?: ByteSize
  heap_max_in_bytes: long
  non_heap_init?: ByteSize
  non_heap_init_in_bytes: long
  non_heap_max?: ByteSize
  non_heap_max_in_bytes: long
}

export interface NodesInfoNodeInfoMemory {
  total: string
  total_in_bytes: long
}

export interface NodesInfoNodeInfoNetwork {
  primary_interface: NodesInfoNodeInfoNetworkInterface
  refresh_interval: integer
}

export interface NodesInfoNodeInfoNetworkInterface {
  address: string
  mac_address: string
  name: Name
}

export interface NodesInfoNodeInfoOSCPU {
  cache_size: string
  cache_size_in_bytes: integer
  cores_per_socket: integer
  mhz: integer
  model: string
  total_cores: integer
  total_sockets: integer
  vendor: string
}

export interface NodesInfoNodeInfoPath {
  logs: string
  home: string
  repo: string[]
  data?: string[]
}

export interface NodesInfoNodeInfoRepositories {
  url: NodesInfoNodeInfoRepositoriesUrl
}

export interface NodesInfoNodeInfoRepositoriesUrl {
  allowed_urls: string
}

export interface NodesInfoNodeInfoScript {
  allowed_types: string
  disable_max_compilations_rate: string
}

export interface NodesInfoNodeInfoSearch {
  remote: NodesInfoNodeInfoSearchRemote
}

export interface NodesInfoNodeInfoSearchRemote {
  connect: string
}

export interface NodesInfoNodeInfoSettings {
  cluster: NodesInfoNodeInfoSettingsCluster
  node: NodesInfoNodeInfoSettingsNode
  path: NodesInfoNodeInfoPath
  repositories?: NodesInfoNodeInfoRepositories
  discovery?: NodesInfoNodeInfoDiscover
  action?: NodesInfoNodeInfoAction
  client: NodesInfoNodeInfoClient
  http: NodesInfoNodeInfoSettingsHttp
  bootstrap?: NodesInfoNodeInfoBootstrap
  transport: NodesInfoNodeInfoSettingsTransport
  network?: NodesInfoNodeInfoSettingsNetwork
  xpack?: NodesInfoNodeInfoXpack
  script?: NodesInfoNodeInfoScript
  search?: NodesInfoNodeInfoSearch
}

export interface NodesInfoNodeInfoSettingsCluster {
  name: Name
  routing?: IndicesIndexRouting
  election: NodesInfoNodeInfoSettingsClusterElection
  initial_master_nodes?: string
}

export interface NodesInfoNodeInfoSettingsClusterElection {
  strategy: Name
}

export interface NodesInfoNodeInfoSettingsHttp {
  type: string | NodesInfoNodeInfoSettingsHttpType
  'type.default'?: string
  compression?: boolean | string
  port?: integer | string
}

export interface NodesInfoNodeInfoSettingsHttpType {
  default: string
}

export interface NodesInfoNodeInfoSettingsNetwork {
  host: Host
}

export interface NodesInfoNodeInfoSettingsNode {
  name: Name
  attr: Record<string, any>
  max_local_storage_nodes?: string
}

export interface NodesInfoNodeInfoSettingsTransport {
  type: string | NodesInfoNodeInfoSettingsTransportType
  'type.default'?: string
  features?: NodesInfoNodeInfoSettingsTransportFeatures
}

export interface NodesInfoNodeInfoSettingsTransportFeatures {
  'x-pack': string
}

export interface NodesInfoNodeInfoSettingsTransportType {
  default: string
}

export interface NodesInfoNodeInfoTransport {
  bound_address: string[]
  publish_address: string
  profiles: Record<string, string>
}

export interface NodesInfoNodeInfoXpack {
  license?: NodesInfoNodeInfoXpackLicense
  security: NodesInfoNodeInfoXpackSecurity
  notification?: Record<string, any>
}

export interface NodesInfoNodeInfoXpackLicense {
  self_generated: NodesInfoNodeInfoXpackLicenseType
}

export interface NodesInfoNodeInfoXpackLicenseType {
  type: string
}

export interface NodesInfoNodeInfoXpackSecurity {
  http: NodesInfoNodeInfoXpackSecuritySsl
  enabled: string
  transport: NodesInfoNodeInfoXpackSecuritySsl
  authc?: NodesInfoNodeInfoXpackSecurityAuthc
}

export interface NodesInfoNodeInfoXpackSecurityAuthc {
  realms: NodesInfoNodeInfoXpackSecurityAuthcRealms
  token: NodesInfoNodeInfoXpackSecurityAuthcToken
}

export interface NodesInfoNodeInfoXpackSecurityAuthcRealms {
  file?: Record<string, NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus>
  native?: Record<string, NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus>
  pki?: Record<string, NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus>
}

export interface NodesInfoNodeInfoXpackSecurityAuthcRealmsStatus {
  enabled?: string
  order: string
}

export interface NodesInfoNodeInfoXpackSecurityAuthcToken {
  enabled: string
}

export interface NodesInfoNodeInfoXpackSecuritySsl {
  ssl: Record<string, string>
}

export interface NodesInfoNodeJvmInfo {
  gc_collectors: string[]
  mem: NodesInfoNodeInfoJvmMemory
  memory_pools: string[]
  pid: integer
  start_time_in_millis: long
  version: VersionString
  vm_name: Name
  vm_vendor: string
  vm_version: VersionString
  bundled_jdk: boolean
  using_bundled_jdk: boolean
  using_compressed_ordinary_object_pointers?: boolean | string
  input_arguments: string[]
}

export interface NodesInfoNodeOperatingSystemInfo {
  arch: string
  available_processors: integer
  allocated_processors?: integer
  name: Name
  pretty_name: Name
  refresh_interval_in_millis: integer
  version: VersionString
  cpu?: NodesInfoNodeInfoOSCPU
  mem?: NodesInfoNodeInfoMemory
  swap?: NodesInfoNodeInfoMemory
}

export interface NodesInfoNodeProcessInfo {
  id: long
  mlockall: boolean
  refresh_interval_in_millis: long
}

export interface NodesInfoNodeThreadPoolInfo {
  core?: integer
  keep_alive?: string
  max?: integer
  queue_size: integer
  size?: integer
  type: string
}

export interface NodesInfoRequest extends RequestBase {
  node_id?: NodeIds
  metric?: Metrics
  flat_settings?: boolean
  master_timeout?: Time
  timeout?: Time
}

export interface NodesInfoResponse extends NodesNodesResponseBase {
  cluster_name: Name
  nodes: Record<string, NodesInfoNodeInfo>
}

export interface NodesReloadSecureSettingsNodeReloadException {
  name: Name
  reload_exception?: NodesReloadSecureSettingsNodeReloadExceptionCausedBy
}

export interface NodesReloadSecureSettingsNodeReloadExceptionCausedBy {
  type: string
  reason: string
  caused_by?: NodesReloadSecureSettingsNodeReloadExceptionCausedBy
}

export interface NodesReloadSecureSettingsRequest extends RequestBase {
  node_id?: NodeIds
  timeout?: Time
  body?: {
    secure_settings_password?: Password
  }
}

export interface NodesReloadSecureSettingsResponse extends NodesNodesResponseBase {
  cluster_name: Name
  nodes: Record<string, NodesStats | NodesReloadSecureSettingsNodeReloadException>
}

export interface NodesStatsRequest extends RequestBase {
  node_id?: NodeIds
  metric?: Metrics
  index_metric?: Metrics
  completion_fields?: Fields
  fielddata_fields?: Fields
  fields?: Fields
  groups?: boolean
  include_segment_file_sizes?: boolean
  level?: Level
  master_timeout?: Time
  timeout?: Time
  types?: string[]
  include_unloaded_segments?: boolean
}

export interface NodesStatsResponse extends NodesNodesResponseBase {
  cluster_name: Name
  nodes: Record<string, NodesStats>
}

export interface NodesUsageNodeUsage {
  rest_actions: Record<string, integer>
  since: EpochMillis
  timestamp: EpochMillis
  aggregations: Record<string, any>
}

export interface NodesUsageRequest extends RequestBase {
  node_id?: NodeIds
  metric?: Metrics
  timeout?: Time
}

export interface NodesUsageResponse extends NodesNodesResponseBase {
  cluster_name: Name
  nodes: Record<string, NodesUsageNodeUsage>
}

export interface RollupDateHistogramGrouping {
  delay?: Time
  field: Field
  format?: string
  interval?: Time
  calendar_interval?: Time
  fixed_interval?: Time
  time_zone?: string
}

export interface RollupFieldMetric {
  field: Field
  metrics: RollupMetric[]
}

export interface RollupGroupings {
  date_histogram?: RollupDateHistogramGrouping
  histogram?: RollupHistogramGrouping
  terms?: RollupTermsGrouping
}

export interface RollupHistogramGrouping {
  fields: Fields
  interval: long
}

export type RollupMetric = 'min' | 'max' | 'sum' | 'avg' | 'value_count'

export interface RollupTermsGrouping {
  fields: Fields
}

export interface RollupCreateRollupJobRequest extends RequestBase {
  id: Id
  body?: {
    cron?: string
    groups?: RollupGroupings
    index_pattern?: string
    metrics?: RollupFieldMetric[]
    page_size?: long
    rollup_index?: IndexName
  }
}

export interface RollupCreateRollupJobResponse extends AcknowledgedResponseBase {
}

export interface RollupDeleteRollupJobRequest extends RequestBase {
  id: Id
}

export interface RollupDeleteRollupJobResponse extends AcknowledgedResponseBase {
  task_failures?: RollupDeleteRollupJobTaskFailure[]
}

export interface RollupDeleteRollupJobTaskFailure {
  task_id: TaskId
  node_id: Id
  status: string
  reason: RollupDeleteRollupJobTaskFailureReason
}

export interface RollupDeleteRollupJobTaskFailureReason {
  type: string
  reason: string
}

export interface RollupGetRollupCapabilitiesRequest extends RequestBase {
  id?: Id
}

export interface RollupGetRollupCapabilitiesResponse extends DictionaryResponseBase<IndexName, RollupGetRollupCapabilitiesRollupCapabilities> {
}

export interface RollupGetRollupCapabilitiesRollupCapabilities {
  rollup_jobs: RollupGetRollupCapabilitiesRollupCapabilitySummary[]
}

export interface RollupGetRollupCapabilitiesRollupCapabilitySummary {
  fields: Record<Field, Record<string, any>>
  index_pattern: string
  job_id: string
  rollup_index: string
}

export interface RollupGetRollupIndexCapabilitiesIndexCapabilities {
  rollup_jobs: RollupGetRollupIndexCapabilitiesRollupJobSummary[]
}

export interface RollupGetRollupIndexCapabilitiesRequest extends RequestBase {
  index: Id
}

export interface RollupGetRollupIndexCapabilitiesResponse extends DictionaryResponseBase<IndexName, RollupGetRollupIndexCapabilitiesIndexCapabilities> {
}

export interface RollupGetRollupIndexCapabilitiesRollupJobSummary {
  fields: Record<Field, RollupGetRollupIndexCapabilitiesRollupJobSummaryField[]>
  index_pattern: string
  job_id: Id
  rollup_index: IndexName
}

export interface RollupGetRollupIndexCapabilitiesRollupJobSummaryField {
  agg: string
  time_zone?: string
  calendar_interval?: Time
}

export type RollupGetRollupJobIndexingJobState = 'started' | 'indexing' | 'stopping' | 'stopped' | 'aborting'

export interface RollupGetRollupJobRequest extends RequestBase {
  id?: Id
}

export interface RollupGetRollupJobResponse {
  jobs: RollupGetRollupJobRollupJob[]
}

export interface RollupGetRollupJobRollupJob {
  config: RollupGetRollupJobRollupJobConfiguration
  stats: RollupGetRollupJobRollupJobStats
  status: RollupGetRollupJobRollupJobStatus
}

export interface RollupGetRollupJobRollupJobConfiguration {
  cron: string
  groups: RollupGroupings
  id: Id
  index_pattern: string
  metrics: RollupFieldMetric[]
  page_size: long
  rollup_index: IndexName
  timeout: Time
}

export interface RollupGetRollupJobRollupJobStats {
  documents_processed: long
  index_failures: long
  index_time_in_ms: long
  index_total: long
  pages_processed: long
  rollups_indexed: long
  search_failures: long
  search_time_in_ms: long
  search_total: long
  trigger_count: long
  processing_time_in_ms: long
  processing_total: long
}

export interface RollupGetRollupJobRollupJobStatus {
  current_position?: Record<string, any>
  job_state: RollupGetRollupJobIndexingJobState
  upgraded_doc_id?: boolean
}

export interface RollupRollupRequest extends RequestBase {
  stubb: integer
  stuba: integer
  body?: {
    stub: integer
  }
}

export interface RollupRollupResponse {
  stub: integer
}

export interface RollupRollupSearchRequest extends RequestBase {
  index: Indices
  type?: Type
  rest_total_hits_as_int?: boolean
  typed_keys?: boolean
  body?: {
    aggs?: Record<string, AggregationsAggregationContainer>
    query?: QueryDslQueryContainer
    size?: integer
  }
}

export interface RollupRollupSearchResponse<TDocument = unknown> {
  took: long
  timed_out: boolean
  terminated_early?: boolean
  _shards: ShardStatistics
  hits: SearchHitsMetadata<TDocument>
  aggregations?: Record<AggregateName, AggregationsAggregate>
}

export interface RollupStartRollupJobRequest extends RequestBase {
  id: Id
}

export interface RollupStartRollupJobResponse {
  started: boolean
}

export interface RollupStopRollupJobRequest extends RequestBase {
  id: Id
  timeout?: Time
  wait_for_completion?: boolean
}

export interface RollupStopRollupJobResponse {
  stopped: boolean
}

export interface SearchableSnapshotsClearCacheRequest extends RequestBase {
  index?: Indices
  expand_wildcards?: ExpandWildcards
  allow_no_indices?: boolean
  ignore_unavailable?: boolean
  pretty?: boolean
  human?: boolean
}

export interface SearchableSnapshotsClearCacheResponse {
  stub: integer
}

export interface SearchableSnapshotsMountMountedSnapshot {
  snapshot: Name
  indices: Indices
  shards: ShardStatistics
}

export interface SearchableSnapshotsMountRequest extends RequestBase {
  repository: Name
  snapshot: Name
  master_timeout?: Time
  wait_for_completion?: boolean
  storage?: string
  body?: {
    index: IndexName
    renamed_index?: IndexName
    index_settings?: Record<string, any>
    ignore_index_settings?: string[]
  }
}

export interface SearchableSnapshotsMountResponse {
  snapshot: SearchableSnapshotsMountMountedSnapshot
}

export interface SearchableSnapshotsRepositoryStatsRequest extends RequestBase {
  stub_a: integer
  stub_b: integer
  body?: {
    stub_c: integer
  }
}

export interface SearchableSnapshotsRepositoryStatsResponse {
  stub: integer
}

export interface SearchableSnapshotsStatsRequest extends RequestBase {
  stub_a: integer
  stub_b: integer
  body?: {
    stub_c: integer
  }
}

export interface SearchableSnapshotsStatsResponse {
  stub: integer
}

export interface SecurityApplicationGlobalUserPrivileges {
  manage: SecurityManageUserPrivileges
}

export interface SecurityApplicationPrivileges {
  application: string
  privileges: string[]
  resources: string[]
}

export interface SecurityClusterNode {
  name: Name
}

export interface SecurityCreatedStatus {
  created: boolean
}

export interface SecurityFieldSecurity {
  except?: Fields
  grant: Fields
}

export interface SecurityGlobalPrivileges {
  application: SecurityApplicationGlobalUserPrivileges
}

export interface SecurityIndicesPrivileges {
  field_security?: SecurityFieldSecurity
  names: Indices
  privileges: string[]
  query?: string | QueryDslQueryContainer
  allow_restricted_indices?: boolean
}

export interface SecurityManageUserPrivileges {
  applications: string[]
}

export interface SecurityRealmInfo {
  name: Name
  type: string
}

export interface SecurityRoleMapping {
  enabled: boolean
  metadata: Metadata
  roles: string[]
  rules: SecurityRoleMappingRuleBase
}

export interface SecurityRoleMappingRuleBase {
}

export interface SecurityUser {
  email?: string
  full_name?: Name
  metadata: Metadata
  roles: string[]
  username: Username
  enabled: boolean
}

export interface SecurityAuthenticateRequest extends RequestBase {
}

export interface SecurityAuthenticateResponse {
  authentication_realm: SecurityRealmInfo
  email?: string
  full_name?: Name
  lookup_realm: SecurityRealmInfo
  metadata: Metadata
  roles: string[]
  username: Username
  enabled: boolean
  authentication_type: string
  token?: SecurityAuthenticateToken
}

export interface SecurityAuthenticateToken {
  name: Name
}

export interface SecurityChangePasswordRequest extends RequestBase {
  username?: Username
  refresh?: Refresh
  body?: {
    password?: Password
  }
}

export interface SecurityChangePasswordResponse {
}

export interface SecurityClearApiKeyCacheRequest extends RequestBase {
  ids?: Ids
}

export interface SecurityClearApiKeyCacheResponse {
  _nodes: NodeStatistics
  cluster_name: Name
  nodes: Record<string, SecurityClusterNode>
}

export interface SecurityClearCachedPrivilegesRequest extends RequestBase {
  application: Name
}

export interface SecurityClearCachedPrivilegesResponse {
  _nodes: NodeStatistics
  cluster_name: Name
  nodes: Record<string, SecurityClusterNode>
}

export interface SecurityClearCachedRealmsRequest extends RequestBase {
  realms: Names
  usernames?: string[]
}

export interface SecurityClearCachedRealmsResponse {
  cluster_name: Name
  nodes: Record<string, SecurityClusterNode>
  _nodes: NodeStatistics
}

export interface SecurityClearCachedRolesRequest extends RequestBase {
  name: Names
}

export interface SecurityClearCachedRolesResponse {
  _nodes: NodeStatistics
  cluster_name: Name
  nodes: Record<string, SecurityClusterNode>
}

export interface SecurityClearCachedServiceTokensRequest extends RequestBase {
  namespace: Namespace
  service: Service
  name: Names
}

export interface SecurityClearCachedServiceTokensResponse {
  _nodes: NodeStatistics
  cluster_name: Name
  nodes: Record<string, SecurityClusterNode>
}

export interface SecurityCreateApiKeyIndexPrivileges {
  names: Indices
  privileges: string[]
}

export interface SecurityCreateApiKeyRequest extends RequestBase {
  refresh?: Refresh
  body?: {
    expiration?: Time
    name?: Name
    role_descriptors?: Record<string, SecurityCreateApiKeyRoleDescriptor>
    metadata?: Metadata
  }
}

export interface SecurityCreateApiKeyResponse {
  api_key: string
  expiration?: long
  id: Id
  name: Name
}

export interface SecurityCreateApiKeyRoleDescriptor {
  cluster: string[]
  index: SecurityCreateApiKeyIndexPrivileges[]
  applications?: SecurityApplicationPrivileges[]
}

export interface SecurityCreateServiceTokenRequest extends RequestBase {
  namespace: Namespace
  service: Service
  name: Name
}

export interface SecurityCreateServiceTokenResponse {
  created: boolean
  token: SecurityCreateServiceTokenToken
}

export interface SecurityCreateServiceTokenToken {
  name: Name
  value: string
}

export interface SecurityDeletePrivilegesFoundStatus {
  found: boolean
}

export interface SecurityDeletePrivilegesRequest extends RequestBase {
  application: Name
  name: Name
  refresh?: Refresh
}

export interface SecurityDeletePrivilegesResponse extends DictionaryResponseBase<string, Record<string, SecurityDeletePrivilegesFoundStatus>> {
}

export interface SecurityDeleteRoleRequest extends RequestBase {
  name: Name
  refresh?: Refresh
}

export interface SecurityDeleteRoleResponse {
  found: boolean
}

export interface SecurityDeleteRoleMappingRequest extends RequestBase {
  name: Name
  refresh?: Refresh
}

export interface SecurityDeleteRoleMappingResponse {
  found: boolean
}

export interface SecurityDeleteServiceTokenRequest extends RequestBase {
  namespace: Namespace
  service: Service
  name: Name
  refresh?: Refresh
}

export interface SecurityDeleteServiceTokenResponse {
  found: boolean
}

export interface SecurityDeleteUserRequest extends RequestBase {
  username: Username
  refresh?: Refresh
}

export interface SecurityDeleteUserResponse {
  found: boolean
}

export interface SecurityDisableUserRequest extends RequestBase {
  username: Username
  refresh?: Refresh
}

export interface SecurityDisableUserResponse {
}

export interface SecurityEnableUserRequest extends RequestBase {
  username: Username
  refresh?: Refresh
}

export interface SecurityEnableUserResponse {
}

export interface SecurityGetApiKeyApiKey {
  creation: long
  expiration?: long
  id: Id
  invalidated: boolean
  name: Name
  realm: string
  username: Username
  metadata?: Metadata
}

export interface SecurityGetApiKeyRequest extends RequestBase {
  id?: Id
  name?: Name
  owner?: boolean
  realm_name?: Name
  username?: Username
}

export interface SecurityGetApiKeyResponse {
  api_keys: SecurityGetApiKeyApiKey[]
}

export interface SecurityGetBuiltinPrivilegesRequest extends RequestBase {
}

export interface SecurityGetBuiltinPrivilegesResponse {
  cluster: string[]
  index: Indices
}

export interface SecurityGetPrivilegesRequest extends RequestBase {
  application?: Name
  name?: Name
}

export interface SecurityGetPrivilegesResponse extends DictionaryResponseBase<string, Record<string, SecurityPutPrivilegesActions>> {
}

export interface SecurityGetRoleInlineRoleTemplate {
  template: SecurityGetRoleInlineRoleTemplateSource
  format?: SecurityGetRoleTemplateFormat
}

export interface SecurityGetRoleInlineRoleTemplateSource {
  source: string
}

export interface SecurityGetRoleInvalidRoleTemplate {
  template: string
  format?: SecurityGetRoleTemplateFormat
}

export interface SecurityGetRoleRequest extends RequestBase {
  name?: Name
}

export interface SecurityGetRoleResponse extends DictionaryResponseBase<string, SecurityGetRoleRole> {
}

export interface SecurityGetRoleRole {
  cluster: string[]
  indices: SecurityIndicesPrivileges[]
  metadata: Metadata
  run_as: string[]
  transient_metadata: SecurityGetRoleTransientMetadata
  applications: SecurityApplicationPrivileges[]
  role_templates?: SecurityGetRoleRoleTemplate[]
}

export type SecurityGetRoleRoleTemplate = SecurityGetRoleInlineRoleTemplate | SecurityGetRoleStoredRoleTemplate | SecurityGetRoleInvalidRoleTemplate

export interface SecurityGetRoleStoredRoleTemplate {
  template: SecurityGetRoleStoredRoleTemplateId
  format?: SecurityGetRoleTemplateFormat
}

export interface SecurityGetRoleStoredRoleTemplateId {
  id: string
}

export type SecurityGetRoleTemplateFormat = 'string' | 'json'

export interface SecurityGetRoleTransientMetadata {
  enabled: boolean
}

export interface SecurityGetRoleMappingRequest extends RequestBase {
  name?: Name
}

export interface SecurityGetRoleMappingResponse extends DictionaryResponseBase<string, SecurityRoleMapping> {
}

export interface SecurityGetServiceAccountsRequest extends RequestBase {
  namespace?: Namespace
  service?: Service
}

export interface SecurityGetServiceAccountsResponse extends DictionaryResponseBase<string, SecurityGetServiceAccountsRoleDescriptorWrapper> {
}

export interface SecurityGetServiceAccountsRoleDescriptor {
  cluster: string[]
  indices: SecurityIndicesPrivileges[]
  global?: SecurityGlobalPrivileges[]
  applications?: SecurityApplicationPrivileges[]
  metadata?: Metadata
  run_as?: string[]
  transient_metadata?: Record<string, any>
}

export interface SecurityGetServiceAccountsRoleDescriptorWrapper {
  role_descriptor: SecurityGetServiceAccountsRoleDescriptor
}

export interface SecurityGetServiceCredentialsRequest extends RequestBase {
  namespace: Namespace
  service: Service
}

export interface SecurityGetServiceCredentialsResponse {
  service_account: string
  node_name: NodeName
  count: integer
  tokens: Record<string, EmptyObject>
  file_tokens: Record<string, EmptyObject>
}

export type SecurityGetTokenAccessTokenGrantType = 'password' | 'client_credentials' | '_kerberos' | 'refresh_token'

export interface SecurityGetTokenAuthenticatedUser extends SecurityUser {
  authentication_realm: SecurityGetTokenUserRealm
  lookup_realm: SecurityGetTokenUserRealm
  authentication_provider?: SecurityGetTokenAuthenticationProvider
  authentication_type: string
}

export interface SecurityGetTokenAuthenticationProvider {
  type: string
  name: Name
}

export interface SecurityGetTokenRequest extends RequestBase {
  body?: {
    grant_type?: SecurityGetTokenAccessTokenGrantType
    scope?: string
    password?: Password
    kerberos_ticket?: string
    refresh_token?: string
    username?: Username
  }
}

export interface SecurityGetTokenResponse {
  access_token: string
  expires_in: long
  scope?: string
  type: string
  refresh_token: string
  kerberos_authentication_response_token?: string
  authentication: SecurityGetTokenAuthenticatedUser
}

export interface SecurityGetTokenUserRealm {
  name: Name
  type: string
}

export interface SecurityGetUserRequest extends RequestBase {
  username?: Username | Username[]
}

export interface SecurityGetUserResponse extends DictionaryResponseBase<string, SecurityUser> {
}

export interface SecurityGetUserPrivilegesRequest extends RequestBase {
  application?: Name
  priviledge?: Name
}

export interface SecurityGetUserPrivilegesResponse {
  applications: SecurityApplicationPrivileges[]
  cluster: string[]
  global: SecurityGlobalPrivileges[]
  indices: SecurityIndicesPrivileges[]
  run_as: string[]
}

export interface SecurityGrantApiKeyApiKey {
  name: Name
  expiration?: Time
  role_descriptors?: Record<string, any>[]
}

export type SecurityGrantApiKeyApiKeyGrantType = 'access_token' | 'password'

export interface SecurityGrantApiKeyRequest extends RequestBase {
  body?: {
    api_key: SecurityGrantApiKeyApiKey
    grant_type: SecurityGrantApiKeyApiKeyGrantType
    access_token?: string
    username?: Username
    password?: Password
  }
}

export interface SecurityGrantApiKeyResponse {
  api_key: string
  id: Id
  name: Name
  expiration?: EpochMillis
}

export interface SecurityHasPrivilegesApplicationPrivilegesCheck {
  application: string
  privileges: string[]
  resources: string[]
}

export type SecurityHasPrivilegesApplicationsPrivileges = Record<Name, SecurityHasPrivilegesResourcePrivileges>

export interface SecurityHasPrivilegesIndexPrivilegesCheck {
  names: string[]
  privileges: string[]
}

export type SecurityHasPrivilegesPrivileges = Record<string, boolean>

export interface SecurityHasPrivilegesRequest extends RequestBase {
  user?: Name
  body?: {
    application?: SecurityHasPrivilegesApplicationPrivilegesCheck[]
    cluster?: string[]
    index?: SecurityHasPrivilegesIndexPrivilegesCheck[]
  }
}

export type SecurityHasPrivilegesResourcePrivileges = Record<Name, SecurityHasPrivilegesPrivileges>

export interface SecurityHasPrivilegesResponse {
  application: SecurityHasPrivilegesApplicationsPrivileges
  cluster: Record<string, boolean>
  has_all_requested: boolean
  index: Record<IndexName, SecurityHasPrivilegesPrivileges>
  username: Username
}

export interface SecurityInvalidateApiKeyRequest extends RequestBase {
  body?: {
    id?: Id
    ids?: Id[]
    name?: Name
    owner?: boolean
    realm_name?: string
    username?: Username
  }
}

export interface SecurityInvalidateApiKeyResponse {
  error_count: integer
  error_details?: ErrorCause[]
  invalidated_api_keys: string[]
  previously_invalidated_api_keys: string[]
}

export interface SecurityInvalidateTokenRequest extends RequestBase {
  body?: {
    token?: string
    refresh_token?: string
    realm_name?: Name
    username?: Username
  }
}

export interface SecurityInvalidateTokenResponse {
  error_count: long
  error_details?: ErrorCause[]
  invalidated_tokens: long
  previously_invalidated_tokens: long
}

export interface SecurityPutPrivilegesActions {
  actions: string[]
  application?: string
  name?: Name
  metadata?: Metadata
}

export interface SecurityPutPrivilegesRequest extends RequestBase {
  refresh?: Refresh
  body?: Record<string, Record<string, SecurityPutPrivilegesActions>>
}

export interface SecurityPutPrivilegesResponse extends DictionaryResponseBase<string, Record<string, SecurityCreatedStatus>> {
}

export interface SecurityPutRoleRequest extends RequestBase {
  name: Name
  refresh?: Refresh
  body?: {
    applications?: SecurityApplicationPrivileges[]
    cluster?: string[]
    global?: Record<string, any>
    indices?: SecurityIndicesPrivileges[]
    metadata?: Metadata
    run_as?: string[]
    transient_metadata?: SecurityGetRoleTransientMetadata
  }
}

export interface SecurityPutRoleResponse {
  role: SecurityCreatedStatus
}

export interface SecurityPutRoleMappingRequest extends RequestBase {
  name: Name
  refresh?: Refresh
  body?: {
    enabled?: boolean
    metadata?: Metadata
    roles?: string[]
    rules?: SecurityRoleMappingRuleBase
    run_as?: string[]
  }
}

export interface SecurityPutRoleMappingResponse {
  created?: boolean
  role_mapping: SecurityCreatedStatus
}

export interface SecurityPutUserRequest extends RequestBase {
  username: Username
  refresh?: Refresh
  body?: {
    username?: Username
    email?: string | null
    full_name?: string | null
    metadata?: Metadata
    password?: Password
    password_hash?: string
    roles?: string[]
    enabled?: boolean
  }
}

export interface SecurityPutUserResponse {
  created: boolean
}

export interface ShutdownDeleteNodeRequest extends RequestBase {
  body?: {
    stub: string
  }
}

export interface ShutdownDeleteNodeResponse {
  stub: boolean
}

export interface ShutdownGetNodeRequest extends RequestBase {
  body?: {
    stub: string
  }
}

export interface ShutdownGetNodeResponse {
  stub: boolean
}

export interface ShutdownPutNodeRequest extends RequestBase {
  body?: {
    stub: string
  }
}

export interface ShutdownPutNodeResponse {
  stub: boolean
}

export interface SlmConfiguration {
  ignore_unavailable?: boolean
  include_global_state?: boolean
  indices: Indices
}

export interface SlmInProgress {
  name: Name
  start_time_millis: DateString
  state: string
  uuid: Uuid
}

export interface SlmInvocation {
  snapshot_name: Name
  time: DateString
}

export interface SlmPolicy {
  config: SlmConfiguration
  name: Name
  repository: string
  retention: SlmRetention
  schedule: WatcherCronExpression
}

export interface SlmRetention {
  expire_after: Time
  max_count: integer
  min_count: integer
}

export interface SlmSnapshotLifecycle {
  in_progress?: SlmInProgress
  last_failure?: SlmInvocation
  last_success?: SlmInvocation
  modified_date?: DateString
  modified_date_millis: EpochMillis
  next_execution?: DateString
  next_execution_millis: EpochMillis
  policy: SlmPolicy
  version: VersionNumber
  stats: SlmStatistics
}

export interface SlmStatistics {
  retention_deletion_time?: DateString
  retention_deletion_time_millis?: EpochMillis
  retention_failed?: long
  retention_runs?: long
  retention_timed_out?: long
  policy?: Id
  total_snapshots_deleted?: long
  snapshots_deleted?: long
  total_snapshot_deletion_failures?: long
  snapshot_deletion_failures?: long
  total_snapshots_failed?: long
  snapshots_failed?: long
  total_snapshots_taken?: long
  snapshots_taken?: long
}

export interface SlmDeleteLifecycleRequest extends RequestBase {
  policy_id: Name
}

export interface SlmDeleteLifecycleResponse extends AcknowledgedResponseBase {
}

export interface SlmExecuteLifecycleRequest extends RequestBase {
  policy_id: Name
}

export interface SlmExecuteLifecycleResponse {
  snapshot_name: Name
}

export interface SlmExecuteRetentionRequest extends RequestBase {
}

export interface SlmExecuteRetentionResponse extends AcknowledgedResponseBase {
}

export interface SlmGetLifecycleRequest extends RequestBase {
  policy_id?: Names
}

export interface SlmGetLifecycleResponse extends DictionaryResponseBase<Id, SlmSnapshotLifecycle> {
}

export interface SlmGetStatsRequest extends RequestBase {
}

export interface SlmGetStatsResponse {
  retention_deletion_time: string
  retention_deletion_time_millis: EpochMillis
  retention_failed: long
  retention_runs: long
  retention_timed_out: long
  total_snapshots_deleted: long
  total_snapshot_deletion_failures: long
  total_snapshots_failed: long
  total_snapshots_taken: long
  policy_stats: string[]
}

export interface SlmGetStatusRequest extends RequestBase {
}

export interface SlmGetStatusResponse {
  operation_mode: LifecycleOperationMode
}

export interface SlmPutLifecycleRequest extends RequestBase {
  policy_id: Name
  body?: {
    config?: SlmConfiguration
    name?: Name
    repository?: string
    retention?: SlmRetention
    schedule?: WatcherCronExpression
  }
}

export interface SlmPutLifecycleResponse extends AcknowledgedResponseBase {
}

export interface SlmStartRequest extends RequestBase {
}

export interface SlmStartResponse extends AcknowledgedResponseBase {
}

export interface SlmStopRequest extends RequestBase {
}

export interface SlmStopResponse extends AcknowledgedResponseBase {
}

export interface SnapshotFileCountSnapshotStats {
  file_count: integer
  size_in_bytes: long
}

export interface SnapshotIndexDetails {
  shard_count: integer
  size?: ByteSize
  size_in_bytes: long
  max_segments_per_shard: long
}

export interface SnapshotInfoFeatureState {
  feature_name: string
  indices: Indices
}

export interface SnapshotRepository {
  type: string
  uuid?: Uuid
  settings: SnapshotRepositorySettings
}

export interface SnapshotRepositorySettings {
  chunk_size?: string
  compress?: string | boolean
  concurrent_streams?: string | integer
  location: string
  read_only?: string | boolean
  readonly?: string | boolean
}

export interface SnapshotShardsStats {
  done: long
  failed: long
  finalizing: long
  initializing: long
  started: long
  total: long
}

export type SnapshotShardsStatsStage = 'DONE' | 'FAILURE' | 'FINALIZE' | 'INIT' | 'STARTED'

export interface SnapshotShardsStatsSummary {
  incremental: SnapshotShardsStatsSummaryItem
  total: SnapshotShardsStatsSummaryItem
  start_time_in_millis: long
  time_in_millis: long
}

export interface SnapshotShardsStatsSummaryItem {
  file_count: long
  size_in_bytes: long
}

export interface SnapshotSnapshotIndexStats {
  shards: Record<string, SnapshotSnapshotShardsStatus>
  shards_stats: SnapshotShardsStats
  stats: SnapshotSnapshotStats
}

export interface SnapshotSnapshotInfo {
  data_streams: string[]
  duration?: Time
  duration_in_millis?: EpochMillis
  end_time?: Time
  end_time_in_millis?: EpochMillis
  failures?: SnapshotSnapshotShardFailure[]
  include_global_state?: boolean
  indices: IndexName[]
  index_details?: Record<IndexName, SnapshotIndexDetails>
  metadata?: Metadata
  reason?: string
  snapshot: Name
  shards?: ShardStatistics
  start_time?: Time
  start_time_in_millis?: EpochMillis
  state?: string
  uuid: Uuid
  version?: VersionString
  version_id?: VersionNumber
  feature_states?: SnapshotInfoFeatureState[]
}

export interface SnapshotSnapshotShardFailure {
  index: IndexName
  node_id: Id
  reason: string
  shard_id: Id
  status: string
}

export interface SnapshotSnapshotShardsStatus {
  stage: SnapshotShardsStatsStage
  stats: SnapshotShardsStatsSummary
}

export interface SnapshotSnapshotStats {
  incremental: SnapshotFileCountSnapshotStats
  start_time_in_millis: long
  time_in_millis: long
  total: SnapshotFileCountSnapshotStats
}

export interface SnapshotStatus {
  include_global_state: boolean
  indices: Record<string, SnapshotSnapshotIndexStats>
  repository: string
  shards_stats: SnapshotShardsStats
  snapshot: string
  state: string
  stats: SnapshotSnapshotStats
  uuid: Uuid
}

export interface SnapshotCleanupRepositoryCleanupRepositoryResults {
  deleted_blobs: long
  deleted_bytes: long
}

export interface SnapshotCleanupRepositoryRequest extends RequestBase {
  repository: Name
  master_timeout?: Time
  timeout?: Time
}

export interface SnapshotCleanupRepositoryResponse {
  results: SnapshotCleanupRepositoryCleanupRepositoryResults
}

export interface SnapshotCloneRequest extends RequestBase {
  repository: Name
  snapshot: Name
  target_snapshot: Name
  master_timeout?: Time
  timeout?: Time
  body?: {
    indices: string
  }
}

export interface SnapshotCloneResponse extends AcknowledgedResponseBase {
}

export interface SnapshotCreateRequest extends RequestBase {
  repository: Name
  snapshot: Name
  master_timeout?: Time
  wait_for_completion?: boolean
  body?: {
    ignore_unavailable?: boolean
    include_global_state?: boolean
    indices?: Indices
    metadata?: Metadata
    partial?: boolean
  }
}

export interface SnapshotCreateResponse {
  accepted?: boolean
  snapshot?: SnapshotSnapshotInfo
}

export interface SnapshotCreateRepositoryRequest extends RequestBase {
  repository: Name
  master_timeout?: Time
  timeout?: Time
  verify?: boolean
  body?: {
    repository?: SnapshotRepository
    type: string
    settings: SnapshotRepositorySettings
  }
}

export interface SnapshotCreateRepositoryResponse extends AcknowledgedResponseBase {
}

export interface SnapshotDeleteRequest extends RequestBase {
  repository: Name
  snapshot: Name
  master_timeout?: Time
}

export interface SnapshotDeleteResponse extends AcknowledgedResponseBase {
}

export interface SnapshotDeleteRepositoryRequest extends RequestBase {
  repository: Names
  master_timeout?: Time
  timeout?: Time
}

export interface SnapshotDeleteRepositoryResponse extends AcknowledgedResponseBase {
}

export interface SnapshotGetRequest extends RequestBase {
  repository: Name
  snapshot: Names
  ignore_unavailable?: boolean
  master_timeout?: Time
  verbose?: boolean
  index_details?: boolean
  human?: boolean
}

export interface SnapshotGetResponse {
  responses?: SnapshotGetSnapshotResponseItem[]
  snapshots?: SnapshotSnapshotInfo[]
}

export interface SnapshotGetSnapshotResponseItem {
  repository: Name
  snapshots?: SnapshotSnapshotInfo[]
  error?: ErrorCause
}

export interface SnapshotGetRepositoryRequest extends RequestBase {
  repository?: Names
  local?: boolean
  master_timeout?: Time
}

export interface SnapshotGetRepositoryResponse extends DictionaryResponseBase<string, SnapshotRepository> {
}

export interface SnapshotRestoreRequest extends RequestBase {
  repository: Name
  snapshot: Name
  master_timeout?: Time
  wait_for_completion?: boolean
  body?: {
    ignore_index_settings?: string[]
    ignore_unavailable?: boolean
    include_aliases?: boolean
    include_global_state?: boolean
    index_settings?: IndicesPutSettingsRequest
    indices?: Indices
    partial?: boolean
    rename_pattern?: string
    rename_replacement?: string
  }
}

export interface SnapshotRestoreResponse {
  snapshot: SnapshotRestoreSnapshotRestore
}

export interface SnapshotRestoreSnapshotRestore {
  indices: IndexName[]
  snapshot: string
  shards: ShardStatistics
}

export interface SnapshotStatusRequest extends RequestBase {
  repository?: Name
  snapshot?: Names
  ignore_unavailable?: boolean
  master_timeout?: Time
}

export interface SnapshotStatusResponse {
  snapshots: SnapshotStatus[]
}

export interface SnapshotVerifyRepositoryCompactNodeInfo {
  name: Name
}

export interface SnapshotVerifyRepositoryRequest extends RequestBase {
  repository: Name
  master_timeout?: Time
  timeout?: Time
}

export interface SnapshotVerifyRepositoryResponse {
  nodes: Record<string, SnapshotVerifyRepositoryCompactNodeInfo>
}

export interface SqlClearCursorRequest extends RequestBase {
  body?: {
    cursor: string
  }
}

export interface SqlClearCursorResponse {
  succeeded: boolean
}

export interface SqlQueryColumn {
  name: Name
  type: string
}

export interface SqlQueryRequest extends RequestBase {
  format?: string
  body?: {
    columnar?: boolean
    cursor?: string
    fetch_size?: integer
    filter?: QueryDslQueryContainer
    query?: string
    request_timeout?: Time
    page_timeout?: Time
    time_zone?: string
    field_multi_value_leniency?: boolean
  }
}

export interface SqlQueryResponse {
  columns?: SqlQueryColumn[]
  cursor?: string
  rows: SqlQueryRow[]
}

export type SqlQueryRow = any[]

export interface SqlTranslateRequest extends RequestBase {
  body?: {
    fetch_size?: integer
    filter?: QueryDslQueryContainer
    query: string
    time_zone?: string
  }
}

export interface SqlTranslateResponse {
  size: long
  _source: boolean | Fields | SearchSourceFilter
  fields: Record<Field, string>[]
  sort: SearchSort
}

export interface SslGetCertificatesCertificateInformation {
  alias?: string
  expiry: DateString
  format: string
  has_private_key: boolean
  path: string
  serial_number: string
  subject_dn: string
}

export interface SslGetCertificatesRequest extends RequestBase {
}

export type SslGetCertificatesResponse = SslGetCertificatesCertificateInformation[]

export interface TaskInfo {
  action: string
  cancellable: boolean
  children?: TaskInfo[]
  description?: string
  headers: HttpHeaders
  id: long
  node: string
  running_time_in_nanos: long
  start_time_in_millis: long
  status?: TaskStatus
  type: string
  parent_task_id?: Id
}

export interface TaskState {
  action: string
  cancellable: boolean
  description?: string
  headers: HttpHeaders
  id: long
  node: string
  parent_task_id?: TaskId
  running_time_in_nanos: long
  start_time_in_millis: long
  status?: TaskStatus
  type: string
}

export interface TaskStatus {
  batches: long
  canceled?: string
  created: long
  deleted: long
  noops: long
  failures?: string[]
  requests_per_second: float
  retries: Retries
  throttled?: Time
  throttled_millis: long
  throttled_until?: Time
  throttled_until_millis: long
  timed_out?: boolean
  took?: long
  total: long
  updated: long
  version_conflicts: long
}

export interface TaskTaskExecutingNode extends SpecUtilsBaseNode {
  tasks: Record<TaskId, TaskState>
}

export interface TaskCancelRequest extends RequestBase {
  task_id?: TaskId
  actions?: string | string[]
  nodes?: string[]
  parent_task_id?: string
  wait_for_completion?: boolean
}

export interface TaskCancelResponse {
  node_failures?: ErrorCause[]
  nodes: Record<string, TaskTaskExecutingNode>
}

export interface TaskGetRequest extends RequestBase {
  task_id: Id
  timeout?: Time
  wait_for_completion?: boolean
}

export interface TaskGetResponse {
  completed: boolean
  task: TaskInfo
  response?: TaskStatus
  error?: ErrorCause
}

export interface TaskListRequest extends RequestBase {
  actions?: string | string[]
  detailed?: boolean
  group_by?: GroupBy
  nodes?: string[]
  parent_task_id?: Id
  timeout?: Time
  wait_for_completion?: boolean
}

export interface TaskListResponse {
  node_failures?: ErrorCause[]
  nodes?: Record<string, TaskTaskExecutingNode>
  tasks?: Record<string, TaskInfo> | TaskInfo[]
}

export interface TextStructureFindStructureFieldStat {
  count: integer
  cardinality: integer
  top_hits: TextStructureFindStructureTopHit[]
  mean_value?: integer
  median_value?: integer
  max_value?: integer
  min_value?: integer
  earliest?: string
  latest?: string
}

export interface TextStructureFindStructureRequest<TJsonDocument = unknown> {
  charset?: string
  column_names?: string
  delimiter?: string
  explain?: boolean
  format?: string
  grok_pattern?: string
  has_header_row?: boolean
  line_merge_size_limit?: uint
  lines_to_sample?: uint
  quote?: string
  should_trim_fields?: boolean
  timeout?: Time
  timestamp_field?: Field
  timestamp_format?: string
  body?: TJsonDocument[]
}

export interface TextStructureFindStructureResponse {
  charset: string
  has_header_row?: boolean
  has_byte_order_marker: boolean
  format: string
  field_stats: Record<Field, TextStructureFindStructureFieldStat>
  sample_start: string
  num_messages_analyzed: integer
  mappings: MappingTypeMapping
  quote?: string
  delimiter?: string
  need_client_timezone: boolean
  num_lines_analyzed: integer
  column_names?: string[]
  explanation?: string[]
  grok_pattern?: string
  multiline_start_pattern?: string
  exclude_lines_pattern?: string
  java_timestamp_formats?: string[]
  joda_timestamp_formats?: string[]
  timestamp_field?: Field
  should_trim_fields?: boolean
  ingest_pipeline: IngestPipelineConfig
}

export interface TextStructureFindStructureTopHit {
  count: long
  value: any
}

export interface TransformLatest {
  sort: Field
  unique_key: Field[]
}

export interface TransformPivot {
  aggregations?: Record<string, AggregationsAggregationContainer>
  aggs?: Record<string, AggregationsAggregationContainer>
  group_by: Record<string, TransformPivotGroupByContainer>
  max_page_search_size?: integer
}

export interface TransformPivotGroupByContainer {
  date_histogram?: AggregationsDateHistogramAggregation
  geotile_grid?: AggregationsGeoTileGridAggregation
  histogram?: AggregationsHistogramAggregation
  terms?: AggregationsTermsAggregation
}

export interface TransformRetentionPolicy {
  field: Field
  max_age: Time
}

export interface TransformRetentionPolicyContainer {
  time: TransformRetentionPolicy
}

export interface TransformSettings {
  dates_as_epoch_millis?: boolean
  docs_per_second?: float
  max_page_search_size?: integer
}

export interface TransformSyncContainer {
  time: TransformTimeSync
}

export interface TransformTimeSync {
  delay?: Time
  field: Field
}

export interface TransformDeleteTransformRequest extends RequestBase {
  transform_id: Name
  force?: boolean
}

export interface TransformDeleteTransformResponse extends AcknowledgedResponseBase {
}

export interface TransformGetTransformRequest extends RequestBase {
  transform_id?: Name
  allow_no_match?: boolean
  from?: integer
  size?: integer
  exclude_generated?: boolean
}

export interface TransformGetTransformResponse {
  count: long
  transforms: Transform[]
}

export interface TransformGetTransformStatsCheckpointStats {
  checkpoint: long
  checkpoint_progress?: TransformGetTransformStatsTransformProgress
  timestamp?: DateString
  timestamp_millis: EpochMillis
  time_upper_bound?: DateString
  time_upper_bound_millis?: EpochMillis
}

export interface TransformGetTransformStatsCheckpointing {
  changes_last_detected_at: long
  changes_last_detected_at_date_time?: DateString
  last: TransformGetTransformStatsCheckpointStats
  next?: TransformGetTransformStatsCheckpointStats
  operations_behind?: long
}

export interface TransformGetTransformStatsRequest extends RequestBase {
  transform_id: Name
  allow_no_match?: boolean
  from?: long
  size?: long
}

export interface TransformGetTransformStatsResponse {
  count: long
  transforms: TransformGetTransformStatsTransformStats[]
}

export interface TransformGetTransformStatsTransformIndexerStats {
  documents_indexed: long
  documents_processed: long
  exponential_avg_checkpoint_duration_ms: double
  exponential_avg_documents_indexed: double
  exponential_avg_documents_processed: double
  index_failures: long
  index_time_in_ms: long
  index_total: long
  pages_processed: long
  processing_time_in_ms: long
  processing_total: long
  search_failures: long
  search_time_in_ms: long
  search_total: long
  trigger_count: long
}

export interface TransformGetTransformStatsTransformProgress {
  docs_indexed: long
  docs_processed: long
  docs_remaining: long
  percent_complete: double
  total_docs: long
}

export interface TransformGetTransformStatsTransformStats {
  checkpointing: TransformGetTransformStatsCheckpointing
  id: Id
  node?: NodeAttributes
  reason?: string
  state: string
  stats: TransformGetTransformStatsTransformIndexerStats
}

export interface TransformPreviewTransformRequest extends RequestBase {
  body?: {
    dest?: ReindexDestination
    description?: string
    frequency?: Time
    pivot?: TransformPivot
    source?: ReindexSource
    settings?: TransformSettings
    sync?: TransformSyncContainer
    retention_policy?: TransformRetentionPolicyContainer
    latest?: TransformLatest
  }
}

export interface TransformPreviewTransformResponse<TTransform = unknown> {
  generated_dest_index: IndicesIndexState
  preview: TTransform[]
}

export interface TransformPutTransformRequest extends TransformPreviewTransformRequest {
  transform_id: Id
  defer_validation?: boolean
}

export interface TransformPutTransformResponse extends AcknowledgedResponseBase {
}

export interface TransformStartTransformRequest extends RequestBase {
  transform_id: Name
  timeout?: Time
}

export interface TransformStartTransformResponse extends AcknowledgedResponseBase {
}

export interface TransformStopTransformRequest extends RequestBase {
  transform_id: Name
  allow_no_match?: boolean
  force?: boolean
  timeout?: Time
  wait_for_checkpoint?: boolean
  wait_for_completion?: boolean
}

export interface TransformStopTransformResponse extends AcknowledgedResponseBase {
}

export interface TransformUpdateTransformRequest extends TransformPutTransformRequest {
}

export interface TransformUpdateTransformResponse {
  create_time: long
  description: string
  dest: ReindexDestination
  frequency: Time
  id: Id
  pivot: TransformPivot
  settings: TransformSettings
  source: ReindexSource
  sync?: TransformSyncContainer
  version: VersionString
}

export interface WatcherAcknowledgeState {
  state: WatcherAcknowledgementOptions
  timestamp: DateString
}

export type WatcherAcknowledgementOptions = 'awaits_successful_execution' | 'ackable' | 'acked'

export interface WatcherAction {
  action_type?: WatcherActionType
  condition?: WatcherConditionContainer
  foreach?: string
  max_iterations?: integer
  name?: Name
  throttle_period?: Time
  throttle_period_in_millis?: EpochMillis
  transform?: TransformContainer
  index?: WatcherIndex
  logging?: WatcherLogging
}

export type WatcherActionExecutionMode = 'simulate' | 'force_simulate' | 'execute' | 'force_execute' | 'skip'

export interface WatcherActionStatus {
  ack: WatcherAcknowledgeState
  last_execution?: WatcherExecutionState
  last_successful_execution?: WatcherExecutionState
  last_throttle?: WatcherThrottleState
}

export type WatcherActionStatusOptions = 'success' | 'failure' | 'simulated' | 'throttled'

export type WatcherActionType = 'email' | 'webhook' | 'index' | 'logging' | 'slack' | 'pagerduty'

export type WatcherActions = Record<IndexName, WatcherActionStatus>

export interface WatcherActivationState {
  active: boolean
  timestamp: Timestamp
}

export interface WatcherActivationStatus {
  actions: WatcherActions
  state: WatcherActivationState
  version: VersionNumber
}

export interface WatcherAlwaysCondition {
}

export interface WatcherArrayCompareCondition {
  array_path: string
  comparison: string
  path: string
  quantifier: WatcherQuantifier
  value: any
}

export interface WatcherChainInput {
  inputs: WatcherInputContainer[]
}

export interface WatcherCompareCondition {
  comparison?: string
  path?: string
  value?: any
  'ctx.payload.match'?: WatcherCompareContextPayloadCondition
  'ctx.payload.value'?: WatcherCompareContextPayloadCondition
}

export interface WatcherCompareContextPayloadCondition {
  eq?: any
  lt?: any
  gt?: any
  lte?: any
  gte?: any
}

export interface WatcherConditionContainer {
  always?: WatcherAlwaysCondition
  array_compare?: WatcherArrayCompareCondition
  compare?: WatcherCompareCondition
  never?: WatcherNeverCondition
  script?: WatcherScriptCondition
}

export type WatcherConditionType = 'always' | 'never' | 'script' | 'compare' | 'array_compare'

export type WatcherConnectionScheme = 'http' | 'https'

export interface WatcherCronExpression extends WatcherScheduleBase {
}

export interface WatcherDailySchedule {
  at: string[] | WatcherTimeOfDay
}

export type WatcherDay = 'sunday' | 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday'

export interface WatcherEmailResult {
  account?: string
  message: WatcherEmailResult
  reason?: string
}

export type WatcherExecutionPhase = 'awaits_execution' | 'started' | 'input' | 'condition' | 'actions' | 'watch_transform' | 'aborted' | 'finished'

export interface WatcherExecutionResult {
  actions: WatcherExecutionResultAction[]
  condition: WatcherExecutionResultCondition
  execution_duration: integer
  execution_time: DateString
  input: WatcherExecutionResultInput
}

export interface WatcherExecutionResultAction {
  email?: WatcherEmailResult
  id: Id
  index?: WatcherIndexResult
  logging?: WatcherLoggingResult
  pagerduty?: WatcherPagerDutyResult
  reason?: string
  slack?: WatcherSlackResult
  status: WatcherActionStatusOptions
  type: WatcherActionType
  webhook?: WatcherWebhookResult
}

export interface WatcherExecutionResultCondition {
  met: boolean
  status: WatcherActionStatusOptions
  type: WatcherConditionType
}

export interface WatcherExecutionResultInput {
  payload: Record<string, any>
  status: WatcherActionStatusOptions
  type: WatcherInputType
}

export interface WatcherExecutionState {
  successful: boolean
  timestamp: DateString
}

export type WatcherExecutionStatus = 'awaits_execution' | 'checking' | 'execution_not_needed' | 'throttled' | 'executed' | 'failed' | 'deleted_while_queued' | 'not_executed_already_queued'

export interface WatcherExecutionThreadPool {
  max_size: long
  queue_size: long
}

export interface WatcherHourlySchedule {
  minute: integer[]
}

export interface WatcherHttpInput {
  http?: WatcherHttpInput
  extract?: string[]
  request?: WatcherHttpInputRequestDefinition
  response_content_type?: WatcherResponseContentType
}

export interface WatcherHttpInputAuthentication {
  basic: WatcherHttpInputBasicAuthentication
}

export interface WatcherHttpInputBasicAuthentication {
  password: Password
  username: Username
}

export type WatcherHttpInputMethod = 'head' | 'get' | 'post' | 'put' | 'delete'

export interface WatcherHttpInputProxy {
  host: Host
  port: uint
}

export interface WatcherHttpInputRequestDefinition {
  auth?: WatcherHttpInputAuthentication
  body?: string
  connection_timeout?: Time
  headers?: Record<string, string>
  host?: Host
  method?: WatcherHttpInputMethod
  params?: Record<string, string>
  path?: string
  port?: uint
  proxy?: WatcherHttpInputProxy
  read_timeout?: Time
  scheme?: WatcherConnectionScheme
  url?: string
}

export interface WatcherHttpInputRequestResult extends WatcherHttpInputRequestDefinition {
}

export interface WatcherHttpInputResponseResult {
  body: string
  headers: HttpHeaders
  status: integer
}

export interface WatcherIndex {
  index: IndexName
  doc_id?: Id
}

export interface WatcherIndexResult {
  response: WatcherIndexResultSummary
}

export interface WatcherIndexResultSummary {
  created: boolean
  id: Id
  index: IndexName
  result: Result
  version: VersionNumber
  type?: Type
}

export interface WatcherIndicesOptions {
  allow_no_indices: boolean
  expand_wildcards: ExpandWildcards
  ignore_unavailable: boolean
  ignore_throttled?: boolean
}

export interface WatcherInputContainer {
  chain?: WatcherChainInput
  http?: WatcherHttpInput
  search?: WatcherSearchInput
  simple?: Record<string, any>
}

export type WatcherInputType = 'http' | 'search' | 'simple'

export interface WatcherLogging {
  level: string
  text: string
}

export interface WatcherLoggingResult {
  logged_text: string
}

export type WatcherMonth = 'january' | 'february' | 'march' | 'april' | 'may' | 'june' | 'july' | 'august' | 'september' | 'october' | 'november' | 'december'

export interface WatcherNeverCondition {
}

export interface WatcherPagerDutyActionEventResult {
  event: WatcherPagerDutyEvent
  reason: string
  request: WatcherHttpInputRequestResult
  response: WatcherHttpInputResponseResult
}

export interface WatcherPagerDutyContext {
  href: string
  src: string
  type: WatcherPagerDutyContextType
}

export type WatcherPagerDutyContextType = 'link' | 'image'

export interface WatcherPagerDutyEvent {
  account: string
  attach_payload: boolean
  client: string
  client_url: string
  context: WatcherPagerDutyContext[]
  description: string
  event_type: WatcherPagerDutyEventType
  incident_key: string
}

export type WatcherPagerDutyEventType = 'trigger' | 'resolve' | 'acknowledge'

export interface WatcherPagerDutyResult {
  sent_event: WatcherPagerDutyActionEventResult
}

export type WatcherQuantifier = 'some' | 'all'

export type WatcherResponseContentType = 'json' | 'yaml' | 'text'

export interface WatcherScheduleBase {
}

export interface WatcherScheduleContainer {
  cron?: WatcherCronExpression
  daily?: WatcherDailySchedule
  hourly?: WatcherHourlySchedule
  interval?: Time
  monthly?: WatcherTimeOfMonth[]
  weekly?: WatcherTimeOfWeek[]
  yearly?: WatcherTimeOfYear[]
}

export interface WatcherScheduleTriggerEvent {
  scheduled_time: DateString | string
  triggered_time?: DateString | string
}

export interface WatcherScriptCondition {
  lang: string
  params?: Record<string, any>
  source: string
}

export interface WatcherSearchInput {
  extract?: string[]
  request: WatcherSearchInputRequestDefinition
  timeout?: Time
}

export interface WatcherSearchInputRequestBody {
  query: QueryDslQueryContainer
}

export interface WatcherSearchInputRequestDefinition {
  body?: WatcherSearchInputRequestBody
  indices?: IndexName[]
  indices_options?: WatcherIndicesOptions
  search_type?: SearchType
  template?: SearchTemplateRequest
  rest_total_hits_as_int?: boolean
}

export interface WatcherSimulatedActions {
  actions: string[]
  all: WatcherSimulatedActions
  use_all: boolean
}

export interface WatcherSlackAttachment {
  author_icon?: string
  author_link?: string
  author_name: string
  color?: string
  fallback?: string
  fields?: WatcherSlackAttachmentField[]
  footer?: string
  footer_icon?: string
  image_url?: string
  pretext?: string
  text?: string
  thumb_url?: string
  title: string
  title_link?: string
  ts?: DateString
}

export interface WatcherSlackAttachmentField {
  short: boolean
  title: string
  value: string
}

export interface WatcherSlackDynamicAttachment {
  attachment_template: WatcherSlackAttachment
  list_path: string
}

export interface WatcherSlackMessage {
  attachments: WatcherSlackAttachment[]
  dynamic_attachments?: WatcherSlackDynamicAttachment
  from: string
  icon?: string
  text: string
  to: string[]
}

export interface WatcherSlackResult {
  account?: string
  message: WatcherSlackMessage
}

export interface WatcherThrottleState {
  reason: string
  timestamp: DateString
}

export interface WatcherTimeOfDay {
  hour: integer[]
  minute: integer[]
}

export interface WatcherTimeOfMonth {
  at: string[]
  on: integer[]
}

export interface WatcherTimeOfWeek {
  at: string[]
  on: WatcherDay[]
}

export interface WatcherTimeOfYear {
  at: string[]
  int: WatcherMonth[]
  on: integer[]
}

export interface WatcherTriggerContainer {
  schedule: WatcherScheduleContainer
}

export interface WatcherTriggerEventContainer {
  schedule: WatcherScheduleTriggerEvent
}

export interface WatcherTriggerEventResult {
  manual: WatcherTriggerEventContainer
  triggered_time: DateString
  type: string
}

export interface WatcherWatch {
  actions: Record<IndexName, WatcherAction>
  condition: WatcherConditionContainer
  input: WatcherInputContainer
  metadata?: Metadata
  status?: WatcherWatchStatus
  throttle_period?: string
  transform?: TransformContainer
  trigger: WatcherTriggerContainer
  throttle_period_in_millis?: long
}

export interface WatcherWatchStatus {
  actions: WatcherActions
  last_checked?: DateString
  last_met_condition?: DateString
  state: WatcherActivationState
  version: VersionNumber
  execution_state?: string
}

export interface WatcherWebhookResult {
  request: WatcherHttpInputRequestResult
  response?: WatcherHttpInputResponseResult
}

export interface WatcherAckWatchRequest extends RequestBase {
  watch_id: Name
  action_id?: Names
}

export interface WatcherAckWatchResponse {
  status: WatcherWatchStatus
}

export interface WatcherActivateWatchRequest extends RequestBase {
  watch_id: Name
}

export interface WatcherActivateWatchResponse {
  status: WatcherActivationStatus
}

export interface WatcherDeactivateWatchRequest extends RequestBase {
  watch_id: Name
}

export interface WatcherDeactivateWatchResponse {
  status: WatcherActivationStatus
}

export interface WatcherDeleteWatchRequest extends RequestBase {
  id: Name
}

export interface WatcherDeleteWatchResponse {
  found: boolean
  _id: Id
  _version: VersionNumber
}

export interface WatcherExecuteWatchRequest extends RequestBase {
  id?: Id
  debug?: boolean
  body?: {
    action_modes?: Record<string, WatcherActionExecutionMode>
    alternative_input?: Record<string, any>
    ignore_condition?: boolean
    record_execution?: boolean
    simulated_actions?: WatcherSimulatedActions
    trigger_data?: WatcherScheduleTriggerEvent
    watch?: WatcherWatch
  }
}

export interface WatcherExecuteWatchResponse {
  _id: Id
  watch_record: WatcherExecuteWatchWatchRecord
}

export interface WatcherExecuteWatchWatchRecord {
  condition: WatcherConditionContainer
  input: WatcherInputContainer
  messages: string[]
  metadata: Metadata
  node: string
  result: WatcherExecutionResult
  state: WatcherExecutionStatus
  trigger_event: WatcherTriggerEventResult
  user: Username
  watch_id: Id
}

export interface WatcherGetWatchRequest extends RequestBase {
  id: Name
}

export interface WatcherGetWatchResponse {
  found: boolean
  _id: Id
  status?: WatcherWatchStatus
  watch?: WatcherWatch
  _primary_term?: integer
  _seq_no?: SequenceNumber
  _version?: VersionNumber
}

export interface WatcherPutWatchRequest extends RequestBase {
  id: Id
  active?: boolean
  if_primary_term?: long
  if_sequence_number?: long
  version?: VersionNumber
  body?: {
    actions?: Record<string, WatcherAction>
    condition?: WatcherConditionContainer
    input?: WatcherInputContainer
    metadata?: Metadata
    throttle_period?: string
    transform?: TransformContainer
    trigger?: WatcherTriggerContainer
  }
}

export interface WatcherPutWatchResponse {
  created: boolean
  _id: Id
  _primary_term: long
  _seq_no: SequenceNumber
  _version: VersionNumber
}

export interface WatcherQueryWatchesRequest extends RequestBase {
  stub_a: string
  stub_b: string
  body?: {
    stub_c: string
  }
}

export interface WatcherQueryWatchesResponse {
  stub: integer
}

export interface WatcherStartRequest extends RequestBase {
}

export interface WatcherStartResponse extends AcknowledgedResponseBase {
}

export interface WatcherStatsRequest extends RequestBase {
  metric?: WatcherStatsWatcherMetric | WatcherStatsWatcherMetric[]
  emit_stacktraces?: boolean
}

export interface WatcherStatsResponse {
  cluster_name: Name
  manually_stopped: boolean
  stats: WatcherStatsWatcherNodeStats[]
  _nodes: NodeStatistics
}

export interface WatcherStatsWatchRecordQueuedStats {
  execution_time: DateString
}

export interface WatcherStatsWatchRecordStats extends WatcherStatsWatchRecordQueuedStats {
  execution_phase: WatcherExecutionPhase
  triggered_time: DateString
  executed_actions?: string[]
  watch_id: Id
  watch_record_id: Id
}

export type WatcherStatsWatcherMetric = '_all' | 'queued_watches' | 'current_watches' | 'pending_watches'

export interface WatcherStatsWatcherNodeStats {
  current_watches?: WatcherStatsWatchRecordStats[]
  execution_thread_pool: WatcherExecutionThreadPool
  queued_watches?: WatcherStatsWatchRecordQueuedStats[]
  watch_count: long
  watcher_state: WatcherStatsWatcherState
  node_id: Id
}

export type WatcherStatsWatcherState = 'stopped' | 'starting' | 'started' | 'stopping'

export interface WatcherStopRequest extends RequestBase {
}

export interface WatcherStopResponse extends AcknowledgedResponseBase {
}

export interface XpackInfoBuildInformation {
  date: DateString
  hash: string
}

export interface XpackInfoFeature {
  available: boolean
  description?: string
  enabled: boolean
  native_code_info?: XpackInfoNativeCodeInformation
}

export interface XpackInfoFeatures {
  aggregate_metric: XpackInfoFeature
  analytics: XpackInfoFeature
  ccr: XpackInfoFeature
  data_frame?: XpackInfoFeature
  data_science?: XpackInfoFeature
  data_streams: XpackInfoFeature
  data_tiers: XpackInfoFeature
  enrich: XpackInfoFeature
  eql: XpackInfoFeature
  flattened?: XpackInfoFeature
  frozen_indices: XpackInfoFeature
  graph: XpackInfoFeature
  ilm: XpackInfoFeature
  logstash: XpackInfoFeature
  ml: XpackInfoFeature
  monitoring: XpackInfoFeature
  rollup: XpackInfoFeature
  runtime_fields?: XpackInfoFeature
  searchable_snapshots: XpackInfoFeature
  security: XpackInfoFeature
  slm: XpackInfoFeature
  spatial: XpackInfoFeature
  sql: XpackInfoFeature
  transform: XpackInfoFeature
  vectors: XpackInfoFeature
  voting_only: XpackInfoFeature
  watcher: XpackInfoFeature
}

export interface XpackInfoMinimalLicenseInformation {
  expiry_date_in_millis: EpochMillis
  mode: LicenseLicenseType
  status: LicenseLicenseStatus
  type: LicenseLicenseType
  uid: string
}

export interface XpackInfoNativeCodeInformation {
  build_hash: string
  version: VersionString
}

export interface XpackInfoRequest extends RequestBase {
  categories?: string[]
}

export interface XpackInfoResponse {
  build: XpackInfoBuildInformation
  features: XpackInfoFeatures
  license: XpackInfoMinimalLicenseInformation
  tagline: string
}

export interface XpackUsageAnalytics extends XpackUsageBase {
  stats: XpackUsageAnalyticsStatistics
}

export interface XpackUsageAnalyticsStatistics {
  boxplot_usage: long
  cumulative_cardinality_usage: long
  string_stats_usage: long
  top_metrics_usage: long
  t_test_usage: long
  moving_percentiles_usage: long
  normalize_usage: long
  rate_usage: long
  multi_terms_usage?: long
}

export interface XpackUsageAudit extends XpackUsageFeatureToggle {
  outputs?: string[]
}

export interface XpackUsageBase {
  available: boolean
  enabled: boolean
}

export interface XpackUsageBaseUrlConfig {
  url_name: string
  url_value: string
}

export interface XpackUsageCcr extends XpackUsageBase {
  auto_follow_patterns_count: integer
  follower_indices_count: integer
}

export interface XpackUsageCounter {
  active: long
  total: long
}

export interface XpackUsageDataStreams extends XpackUsageBase {
  data_streams: long
  indices_count: long
}

export interface XpackUsageDataTierPhaseStatistics {
  node_count: long
  index_count: long
  total_shard_count: long
  primary_shard_count: long
  doc_count: long
  total_size_bytes: long
  primary_size_bytes: long
  primary_shard_size_avg_bytes: long
  primary_shard_size_median_bytes: long
  primary_shard_size_mad_bytes: long
}

export interface XpackUsageDataTiers extends XpackUsageBase {
  data_warm: XpackUsageDataTierPhaseStatistics
  data_frozen?: XpackUsageDataTierPhaseStatistics
  data_cold: XpackUsageDataTierPhaseStatistics
  data_content: XpackUsageDataTierPhaseStatistics
  data_hot: XpackUsageDataTierPhaseStatistics
}

export interface XpackUsageDatafeed {
  count: long
}

export interface XpackUsageEql extends XpackUsageBase {
  features: XpackUsageEqlFeatures
  queries: Record<string, XpackUsageQuery>
}

export interface XpackUsageEqlFeatures {
  join: uint
  joins: XpackUsageEqlFeaturesJoin
  keys: XpackUsageEqlFeaturesKeys
  event: uint
  pipes: XpackUsageEqlFeaturesPipes
  sequence: uint
  sequences: XpackUsageEqlFeaturesSequences
}

export interface XpackUsageEqlFeaturesJoin {
  join_queries_two: uint
  join_queries_three: uint
  join_until: uint
  join_queries_five_or_more: uint
  join_queries_four: uint
}

export interface XpackUsageEqlFeaturesKeys {
  join_keys_two: uint
  join_keys_one: uint
  join_keys_three: uint
  join_keys_five_or_more: uint
  join_keys_four: uint
}

export interface XpackUsageEqlFeaturesPipes {
  pipe_tail: uint
  pipe_head: uint
}

export interface XpackUsageEqlFeaturesSequences {
  sequence_queries_three: uint
  sequence_queries_four: uint
  sequence_queries_two: uint
  sequence_until: uint
  sequence_queries_five_or_more: uint
  sequence_maxspan: uint
}

export interface XpackUsageFeatureToggle {
  enabled: boolean
}

export interface XpackUsageFlattened extends XpackUsageBase {
  field_count: integer
}

export interface XpackUsageFrozenIndices extends XpackUsageBase {
  indices_count: long
}

export interface XpackUsageIlm {
  policy_count: integer
  policy_stats: XpackUsageIlmPolicyStatistics[]
}

export interface XpackUsageIlmPolicyStatistics {
  indices_managed: integer
  phases: IlmPhases
}

export interface XpackUsageIpFilter {
  http: boolean
  transport: boolean
}

export interface XpackUsageKibanaUrlConfig extends XpackUsageBaseUrlConfig {
  time_range?: string
}

export interface XpackUsageMachineLearning extends XpackUsageBase {
  datafeeds: Record<string, XpackUsageDatafeed>
  jobs: Record<string, MlJob>
  node_count: integer
  data_frame_analytics_jobs: XpackUsageMlDataFrameAnalyticsJobs
  inference: XpackUsageMlInference
}

export interface XpackUsageMlCounter {
  count: long
}

export interface XpackUsageMlDataFrameAnalyticsJobs {
  memory_usage?: XpackUsageMlDataFrameAnalyticsJobsMemory
  _all: XpackUsageMlDataFrameAnalyticsJobsCount
  analysis_counts?: EmptyObject
}

export interface XpackUsageMlDataFrameAnalyticsJobsCount {
  count: long
}

export interface XpackUsageMlDataFrameAnalyticsJobsMemory {
  peak_usage_bytes: MlJobStatistics
}

export interface XpackUsageMlInference {
  ingest_processors: Record<string, XpackUsageMlInferenceIngestProcessor>
  trained_models: XpackUsageMlInferenceTrainedModels
}

export interface XpackUsageMlInferenceIngestProcessor {
  num_docs_processed: XpackUsageMlInferenceIngestProcessorCount
  pipelines: XpackUsageMlCounter
  num_failures: XpackUsageMlInferenceIngestProcessorCount
  time_ms: XpackUsageMlInferenceIngestProcessorCount
}

export interface XpackUsageMlInferenceIngestProcessorCount {
  max: long
  sum: long
  min: long
}

export interface XpackUsageMlInferenceTrainedModels {
  estimated_operations?: MlJobStatistics
  estimated_heap_memory_usage_bytes?: MlJobStatistics
  count?: XpackUsageMlInferenceTrainedModelsCount
  _all: XpackUsageMlCounter
}

export interface XpackUsageMlInferenceTrainedModelsCount {
  total: long
  prepackaged: long
  other: long
  regression: long
  classification: long
}

export interface XpackUsageMonitoring extends XpackUsageBase {
  collection_enabled: boolean
  enabled_exporters: Record<string, long>
}

export interface XpackUsageQuery {
  count?: integer
  failed?: integer
  paging?: integer
  total?: integer
}

export interface XpackUsageRealm extends XpackUsageBase {
  name?: string[]
  order?: long[]
  size?: long[]
  cache?: XpackUsageRealmCache[]
  has_authorization_realms?: boolean[]
  has_default_username_pattern?: boolean[]
  has_truststore?: boolean[]
  is_authentication_delegated?: boolean[]
}

export interface XpackUsageRealmCache {
  size: long
}

export interface XpackUsageRequest extends RequestBase {
  master_timeout?: Time
}

export interface XpackUsageResponse {
  aggregate_metric: XpackUsageBase
  analytics: XpackUsageAnalytics
  watcher: XpackUsageWatcher
  ccr: XpackUsageCcr
  data_frame?: XpackUsageBase
  data_science?: XpackUsageBase
  data_streams?: XpackUsageDataStreams
  data_tiers: XpackUsageDataTiers
  enrich?: XpackUsageBase
  eql: XpackUsageEql
  flattened?: XpackUsageFlattened
  frozen_indices: XpackUsageFrozenIndices
  graph: XpackUsageBase
  ilm: XpackUsageIlm
  logstash: XpackUsageBase
  ml: XpackUsageMachineLearning
  monitoring: XpackUsageMonitoring
  rollup: XpackUsageBase
  runtime_fields?: XpackUsageRuntimeFieldTypes
  spatial: XpackUsageBase
  searchable_snapshots: XpackUsageSearchableSnapshots
  security: XpackUsageSecurity
  slm: XpackUsageSlm
  sql: XpackUsageSql
  transform: XpackUsageBase
  vectors: XpackUsageVector
  voting_only: XpackUsageBase
}

export interface XpackUsageRoleMapping {
  enabled: integer
  size: integer
}

export interface XpackUsageRuntimeFieldTypes extends XpackUsageBase {
  field_types: XpackUsageRuntimeFieldsType[]
}

export interface XpackUsageRuntimeFieldsType {
  chars_max: long
  chars_total: long
  count: long
  doc_max: long
  doc_total: long
  index_count: long
  lang: string[]
  lines_max: long
  lines_total: long
  name: Field
  scriptless_count: long
  shadowed_count: long
  source_max: long
  source_total: long
}

export interface XpackUsageSearchableSnapshots extends XpackUsageBase {
  indices_count: integer
  full_copy_indices_count?: integer
  shared_cache_indices_count?: integer
}

export interface XpackUsageSecurity extends XpackUsageBase {
  api_key_service: XpackUsageFeatureToggle
  anonymous: XpackUsageFeatureToggle
  audit: XpackUsageAudit
  fips_140: XpackUsageFeatureToggle
  ipfilter: XpackUsageIpFilter
  realms: Record<string, XpackUsageRealm>
  role_mapping: Record<string, XpackUsageRoleMapping>
  roles: XpackUsageSecurityRoles
  ssl: XpackUsageSsl
  system_key?: XpackUsageFeatureToggle
  token_service: XpackUsageFeatureToggle
  operator_privileges: XpackUsageBase
}

export interface XpackUsageSecurityRoles {
  native: XpackUsageSecurityRolesNative
  dls: XpackUsageSecurityRolesDls
  file: XpackUsageSecurityRolesFile
}

export interface XpackUsageSecurityRolesDls {
  bit_set_cache: XpackUsageSecurityRolesDlsBitSetCache
}

export interface XpackUsageSecurityRolesDlsBitSetCache {
  count: integer
  memory?: ByteSize
  memory_in_bytes: ulong
}

export interface XpackUsageSecurityRolesFile {
  dls: boolean
  fls: boolean
  size: long
}

export interface XpackUsageSecurityRolesNative {
  dls: boolean
  fls: boolean
  size: long
}

export interface XpackUsageSlm extends XpackUsageBase {
  policy_count?: integer
  policy_stats?: SlmStatistics
}

export interface XpackUsageSql extends XpackUsageBase {
  features: Record<string, integer>
  queries: Record<string, XpackUsageQuery>
}

export interface XpackUsageSsl {
  http: XpackUsageFeatureToggle
  transport: XpackUsageFeatureToggle
}

export type XpackUsageUrlConfig = XpackUsageBaseUrlConfig | XpackUsageKibanaUrlConfig

export interface XpackUsageVector extends XpackUsageBase {
  dense_vector_dims_avg_count: integer
  dense_vector_fields_count: integer
  sparse_vector_fields_count?: integer
}

export interface XpackUsageWatcher extends XpackUsageBase {
  execution: XpackUsageWatcherActions
  watch: XpackUsageWatcherWatch
  count: XpackUsageCounter
}

export interface XpackUsageWatcherActionTotals {
  total: long
  total_time_in_ms: long
}

export interface XpackUsageWatcherActions {
  actions: Record<Name, XpackUsageWatcherActionTotals>
}

export interface XpackUsageWatcherWatch {
  input: Record<Name, XpackUsageCounter>
  condition?: Record<Name, XpackUsageCounter>
  action?: Record<Name, XpackUsageCounter>
  trigger: XpackUsageWatcherWatchTrigger
}

export interface XpackUsageWatcherWatchTrigger {
  schedule?: XpackUsageWatcherWatchTriggerSchedule
  _all: XpackUsageCounter
}

export interface XpackUsageWatcherWatchTriggerSchedule extends XpackUsageCounter {
  cron: XpackUsageCounter
  _all: XpackUsageCounter
}

export interface SpecUtilsAdditionalProperties<TKey = unknown, TValue = unknown> {
}

export interface SpecUtilsCommonQueryParameters {
  error_trace?: boolean
  filter_path?: string | string[]
  human?: boolean
  pretty?: boolean
  source_query_string?: string
}

export interface SpecUtilsCommonCatQueryParameters {
  format?: string
  h?: Names
  help?: boolean
  local?: boolean
  master_timeout?: Time
  s?: string[]
  v?: boolean
}

