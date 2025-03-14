import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  DuelConfig: { input: any; output: any; }
  DuelState: { input: any; output: any; }
  GameComponent: { input: any; output: any; }
  GameEntity: { input: any; output: any; }
  GameEvent: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type Card = {
  __typename?: 'Card';
  components: Scalars['GameEntity']['output'];
  creatorId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  lastEditorId?: Maybe<Scalars['ID']['output']>;
};

export type CardBoardTarget = {
  __typename?: 'CardBoardTarget';
  id?: Maybe<Scalars['String']['output']>;
  index?: Maybe<Scalars['Int']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  place?: Maybe<Scalars['String']['output']>;
};

export type CardCollection = {
  __typename?: 'CardCollection';
  cardIds: Array<Scalars['ID']['output']>;
  cards?: Maybe<Array<Card>>;
  creatorId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type CardCommandTarget = {
  __typename?: 'CardCommandTarget';
  from?: Maybe<CardBoardTarget>;
  to?: Maybe<CardBoardTarget>;
};

export type CardDuel = {
  __typename?: 'CardDuel';
  config?: Maybe<CardDuelConfig>;
  history?: Maybe<Array<Maybe<CardDuelCommandBundle>>>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CardDuelAttributes = {
  __typename?: 'CardDuelAttributes';
  attack?: Maybe<Scalars['Int']['output']>;
  charge?: Maybe<Scalars['Int']['output']>;
  defense?: Maybe<Scalars['Int']['output']>;
  gameOver?: Maybe<Scalars['Boolean']['output']>;
  health?: Maybe<Scalars['Int']['output']>;
  perTurnHero?: Maybe<Scalars['Int']['output']>;
  perTurnTroop?: Maybe<Scalars['Int']['output']>;
  turn?: Maybe<Scalars['Int']['output']>;
};

export type CardDuelCommand = {
  __typename?: 'CardDuelCommand';
  owner?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<CardDuelAttributes>;
  target?: Maybe<CardCommandTarget>;
  type: Scalars['String']['output'];
};

export type CardDuelCommandBundle = {
  __typename?: 'CardDuelCommandBundle';
  commands?: Maybe<Array<Maybe<CardDuelCommand>>>;
  group?: Maybe<Scalars['String']['output']>;
  phase?: Maybe<Scalars['String']['output']>;
  phaseOf?: Maybe<Scalars['String']['output']>;
  turn?: Maybe<Scalars['Int']['output']>;
};

export type CardDuelConfig = {
  __typename?: 'CardDuelConfig';
  firstMover: Scalars['String']['output'];
  firstPlayer: CardPlayerConfig;
  secondPlayer: CardPlayerConfig;
  setting: CardDuelSetting;
  version: Scalars['String']['output'];
};

export type CardDuelHistory = {
  __typename?: 'CardDuelHistory';
  duel: CardDuel;
  enemy?: Maybe<Profile>;
  id?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['String']['output'];
  victory?: Maybe<Scalars['Boolean']['output']>;
};

export type CardDuelSetting = {
  __typename?: 'CardDuelSetting';
  groundSize?: Maybe<Scalars['Int']['output']>;
  handSize?: Maybe<Scalars['Int']['output']>;
  maxAttachment?: Maybe<Scalars['Int']['output']>;
  perTurnHero?: Maybe<Scalars['Int']['output']>;
  perTurnTroop?: Maybe<Scalars['Int']['output']>;
  playerHealth?: Maybe<Scalars['Int']['output']>;
};

export type CardMap = {
  __typename?: 'CardMap';
  cardId: Scalars['String']['output'];
  entityId: Scalars['Int']['output'];
};

export type CardMapInput = {
  cardId: Scalars['String']['input'];
  entityId: Scalars['Int']['input'];
};

export type CardPlayerConfig = {
  __typename?: 'CardPlayerConfig';
  deck?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id?: Maybe<Scalars['String']['output']>;
};

export type CreateCardCollectionInput = {
  name: Scalars['String']['input'];
};

export type Deck = {
  __typename?: 'Deck';
  cardIds?: Maybe<Array<Scalars['ID']['output']>>;
  cards?: Maybe<Array<Card>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  userId?: Maybe<Scalars['ID']['output']>;
};

export type Duel = {
  __typename?: 'Duel';
  ecs?: Maybe<GameEcs>;
};

export type DuelPlayerInfo = {
  __typename?: 'DuelPlayerInfo';
  avatarUrl: Scalars['String']['output'];
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type DuelResult = {
  __typename?: 'DuelResult';
  duelId: Scalars['ID']['output'];
  newXP: Scalars['Int']['output'];
  previousXP: Scalars['Int']['output'];
  stats: DuelResultStats;
  userId: Scalars['ID']['output'];
};

export type DuelResultStats = {
  __typename?: 'DuelResultStats';
  bonusXP?: Maybe<Scalars['Int']['output']>;
  defeatXP?: Maybe<Scalars['Int']['output']>;
  victoryXP?: Maybe<Scalars['Int']['output']>;
};

export type DuelScenario = {
  __typename?: 'DuelScenario';
  cardMap: Array<CardMap>;
  description?: Maybe<Scalars['String']['output']>;
  initialECS: GameEcs;
  mainCard: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type DuelScenarioInput = {
  cardMap: Array<CardMapInput>;
  config: Scalars['DuelConfig']['input'];
  description?: InputMaybe<Scalars['String']['input']>;
  entities: Scalars['GameEntity']['input'];
  mainCard: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  state: Scalars['DuelState']['input'];
};

export type DuelSimulation = {
  __typename?: 'DuelSimulation';
  events: Array<Scalars['GameEvent']['output']>;
  initialECS: GameEcs;
  playerIds: Array<Scalars['String']['output']>;
};

export type DuelStarted = {
  __typename?: 'DuelStarted';
  id?: Maybe<Scalars['String']['output']>;
  jwt?: Maybe<Scalars['String']['output']>;
  message?: Maybe<DuelStartedMessage>;
  players?: Maybe<Array<DuelPlayerInfo>>;
};

export enum DuelStartedMessage {
  OpponentRejected = 'OPPONENT_REJECTED',
  YouRejected = 'YOU_REJECTED'
}

export type DuelStats = {
  __typename?: 'DuelStats';
  BLIND_DUEL?: Maybe<DuelsCount>;
  BLIND_DUEL_PVE?: Maybe<DuelsCount>;
  CLI_DUEL?: Maybe<DuelsCount>;
  CLI_DUEL_PVE?: Maybe<DuelsCount>;
  EDITOR_DUEL?: Maybe<DuelsCount>;
  EDITOR_DUEL_PVE?: Maybe<DuelsCount>;
  FRIEND_DUEL?: Maybe<DuelsCount>;
  PRACTICE_DUEL?: Maybe<DuelsCount>;
};

export type DuelTemplate = {
  __typename?: 'DuelTemplate';
  creatorId: Scalars['ID']['output'];
  entities?: Maybe<Scalars['GameEntity']['output']>;
  id: Scalars['ID']['output'];
  refId?: Maybe<Scalars['ID']['output']>;
};

export type DuelTracking = {
  __typename?: 'DuelTracking';
  createdAt: Scalars['DateTime']['output'];
  date?: Maybe<Scalars['String']['output']>;
  duelStats: DuelStats;
  totalDuels?: Maybe<Scalars['Int']['output']>;
  type: DuelTrackingType;
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
  weekNumber?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export enum DuelTrackingType {
  AllTime = 'allTime',
  Daily = 'daily',
  Weekly = 'weekly'
}

export type DuelsCount = {
  __typename?: 'DuelsCount';
  losses: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
  wins: Scalars['Int']['output'];
};

export type GameDuel = {
  __typename?: 'GameDuel';
  ecs: GameEcs;
  events: Array<Maybe<Scalars['GameEvent']['output']>>;
  id: Scalars['ID']['output'];
  initialECS: GameEcs;
  playerIds: Array<Scalars['String']['output']>;
  tokens: Array<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type GameEcs = {
  __typename?: 'GameECS';
  config: Scalars['DuelConfig']['output'];
  entities: Scalars['GameEntity']['output'];
  state: Scalars['DuelState']['output'];
};

export type GeneralPointHistory = {
  __typename?: 'GeneralPointHistory';
  id: Scalars['String']['output'];
  points?: Maybe<Scalars['Int']['output']>;
  type: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type Inventory = {
  __typename?: 'Inventory';
  id: Scalars['String']['output'];
  items: Array<InventoryItem>;
  userId: Scalars['String']['output'];
};

export type InventoryItem = {
  __typename?: 'InventoryItem';
  amount: Scalars['Int']['output'];
  itemId: Scalars['String']['output'];
  metadata?: Maybe<Scalars['JSON']['output']>;
  type: Scalars['String']['output'];
};

export type LeaderboardSeason = {
  __typename?: 'LeaderboardSeason';
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  number: Scalars['Int']['output'];
  startDate: Scalars['DateTime']['output'];
  weeklyPeriods: Array<Scalars['Int']['output']>;
};

export enum LinkWalletResult {
  Success = 'SUCCESS',
  WalletAlreadyLinked = 'WALLET_ALREADY_LINKED',
  WalletDuplicated = 'WALLET_DUPLICATED'
}

export type MakeDuelInput = {
  botMaxDelayMs?: InputMaybe<Scalars['Int']['input']>;
  botMinDelayMs?: InputMaybe<Scalars['Int']['input']>;
  config: Scalars['DuelConfig']['input'];
  entities: Scalars['GameEntity']['input'];
  playerIds: Array<Scalars['String']['input']>;
  state: Scalars['DuelState']['input'];
  turnDurationMs?: InputMaybe<Scalars['Int']['input']>;
  type?: InputMaybe<MakeDuelType>;
};

export enum MakeDuelType {
  Normal = 'NORMAL',
  Pve = 'PVE'
}

export type MatchRecord = {
  __typename?: 'MatchRecord';
  id: Scalars['ID']['output'];
  pubsubTopic: Scalars['String']['output'];
  roomId: Scalars['ID']['output'];
  status?: Maybe<PlayerStatus>;
  userId: Scalars['ID']['output'];
};

export type MutateProfileInput = {
  avatarUrl?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  confirmJoinRoom?: Maybe<Scalars['Boolean']['output']>;
  confirmStartDuel?: Maybe<Scalars['Boolean']['output']>;
  createCard: Scalars['GameEntity']['output'];
  createCardCollection: CardCollection;
  createDeck: Deck;
  createDuelScenario: DuelScenario;
  createPracticeDuel: PracticeDuel;
  createQuestAction?: Maybe<QuestAction>;
  deleteCard?: Maybe<Scalars['Boolean']['output']>;
  deleteCardComponent: Scalars['GameEntity']['output'];
  joinOrCreateRoom?: Maybe<Scalars['ID']['output']>;
  makeDuel: GameDuel;
  makeReferral?: Maybe<Scalars['Boolean']['output']>;
  openLottery?: Maybe<OpenLotteryResult>;
  purchaseLottery?: Maybe<GeneralPointHistory>;
  removeUserFromRoom?: Maybe<Scalars['Boolean']['output']>;
  requestWalletMessage: Scalars['String']['output'];
  updateCard: Scalars['GameEntity']['output'];
  updateDeck: Deck;
  updateProfile?: Maybe<Profile>;
  verifyAndLinkWallet: LinkWalletResult;
  verifyWalletAndClaimToken: Scalars['String']['output'];
};


export type MutationConfirmJoinRoomArgs = {
  action?: InputMaybe<RoomAction>;
  deckId: Scalars['String']['input'];
  roomId: Scalars['ID']['input'];
};


export type MutationConfirmStartDuelArgs = {
  approve?: InputMaybe<Scalars['Boolean']['input']>;
  roomId: Scalars['ID']['input'];
};


export type MutationCreateCardArgs = {
  collectionId: Scalars['ID']['input'];
};


export type MutationCreateCardCollectionArgs = {
  input: CreateCardCollectionInput;
};


export type MutationCreateDeckArgs = {
  cardIds: Array<Scalars['ID']['input']>;
  name: Scalars['String']['input'];
};


export type MutationCreateDuelScenarioArgs = {
  input: DuelScenarioInput;
};


export type MutationCreatePracticeDuelArgs = {
  deckId: Scalars['String']['input'];
};


export type MutationCreateQuestActionArgs = {
  questId: Scalars['ID']['input'];
};


export type MutationDeleteCardArgs = {
  cardId: Scalars['ID']['input'];
  collectionId: Scalars['ID']['input'];
};


export type MutationDeleteCardComponentArgs = {
  cardId: Scalars['ID']['input'];
  collectionId: Scalars['ID']['input'];
  componentType: Scalars['String']['input'];
};


export type MutationJoinOrCreateRoomArgs = {
  code: Scalars['String']['input'];
};


export type MutationMakeDuelArgs = {
  input: MakeDuelInput;
};


export type MutationMakeReferralArgs = {
  referralCode: Scalars['String']['input'];
};


export type MutationRequestWalletMessageArgs = {
  network: Network;
  type?: InputMaybe<WalletMessageType>;
  wallet: Scalars['String']['input'];
};


export type MutationUpdateCardArgs = {
  cardId: Scalars['ID']['input'];
  collectionId: Scalars['ID']['input'];
  components: Array<InputMaybe<Scalars['GameComponent']['input']>>;
};


export type MutationUpdateDeckArgs = {
  cardIds: Array<Scalars['ID']['input']>;
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUpdateProfileArgs = {
  profileInput: MutateProfileInput;
};


export type MutationVerifyAndLinkWalletArgs = {
  message: Scalars['String']['input'];
  network: Network;
  signature: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};


export type MutationVerifyWalletAndClaimTokenArgs = {
  message: Scalars['String']['input'];
  network: Network;
  signature: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
};

export enum Network {
  Solana = 'SOLANA'
}

export type OpenLotteryResult = {
  __typename?: 'OpenLotteryResult';
  items: Array<InventoryItem>;
  userId: Scalars['ID']['output'];
};

export type PlayerInRoom = {
  __typename?: 'PlayerInRoom';
  id?: Maybe<Scalars['ID']['output']>;
  status?: Maybe<PlayerStatus>;
};

export enum PlayerStatus {
  Accepted = 'ACCEPTED',
  Joined = 'JOINED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type PracticeDuel = {
  __typename?: 'PracticeDuel';
  id: Scalars['String']['output'];
  jwt: Scalars['String']['output'];
};

export type Profile = {
  __typename?: 'Profile';
  XP: Scalars['Int']['output'];
  avatarUrl?: Maybe<Scalars['String']['output']>;
  discordId?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  firebaseUID?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  level: Scalars['Int']['output'];
  name?: Maybe<Scalars['String']['output']>;
  points: Scalars['Int']['output'];
  referralCode: Scalars['String']['output'];
  referred?: Maybe<ReferralHistory>;
  solanaWallet?: Maybe<Scalars['String']['output']>;
  telegramId?: Maybe<Scalars['String']['output']>;
  twitterId?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  card: Card;
  cardCollection: CardCollection;
  cardCollections: Array<CardCollection>;
  cardDuel?: Maybe<CardDuel>;
  cardDuelHistory?: Maybe<Array<Maybe<CardDuelHistory>>>;
  cardDuelPlaying?: Maybe<CardDuelHistory>;
  cardsInDeck: Array<Card>;
  currentLeaderboardSeason: LeaderboardSeason;
  currentRank?: Maybe<UserRanking>;
  currentRoom?: Maybe<Room>;
  deck: Deck;
  decks: Array<Deck>;
  duel: Duel;
  duelResult: DuelResult;
  duelScenarios: Array<Maybe<DuelScenario>>;
  duelSimulation: DuelSimulation;
  duelTemplates: Array<Maybe<DuelTemplate>>;
  duelTrackings?: Maybe<Array<DuelTracking>>;
  greeting?: Maybe<Scalars['String']['output']>;
  inventory?: Maybe<Inventory>;
  leaderboard?: Maybe<Array<UserRanking>>;
  profile?: Maybe<Profile>;
  quests: Array<Quest>;
  referralHistory?: Maybe<Array<ReferralHistory>>;
};


export type QueryCardArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardCollectionArgs = {
  id: Scalars['ID']['input'];
};


export type QueryCardDuelArgs = {
  id: Scalars['String']['input'];
};


export type QueryCardDuelHistoryArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryCardsInDeckArgs = {
  deckId: Scalars['ID']['input'];
};


export type QueryCurrentRankArgs = {
  periodNumber?: InputMaybe<Scalars['Int']['input']>;
  seasonId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<RankingType>;
};


export type QueryDeckArgs = {
  id: Scalars['ID']['input'];
};


export type QueryDuelArgs = {
  jwt: Scalars['String']['input'];
};


export type QueryDuelResultArgs = {
  duelId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
};


export type QueryDuelScenariosArgs = {
  mainCardId: Scalars['ID']['input'];
};


export type QueryDuelSimulationArgs = {
  jwt: Scalars['String']['input'];
};


export type QueryLeaderboardArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  periodNumber?: InputMaybe<Scalars['Int']['input']>;
  seasonId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<RankingType>;
};


export type QueryProfileArgs = {
  address?: InputMaybe<Scalars['String']['input']>;
};


export type QueryQuestsArgs = {
  status?: InputMaybe<QuestStatus>;
};

export type Quest = {
  __typename?: 'Quest';
  XP?: Maybe<Scalars['Int']['output']>;
  action?: Maybe<QuestAction>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isCompleted?: Maybe<Scalars['Boolean']['output']>;
  points: Scalars['Int']['output'];
  repeatType?: Maybe<QuestRepeatType>;
  requiredDuels?: Maybe<Scalars['Int']['output']>;
  status: QuestStatus;
  title: Scalars['String']['output'];
  type: QuestType;
  url: Scalars['String']['output'];
};

export type QuestAction = {
  __typename?: 'QuestAction';
  claimedPoints: Scalars['Int']['output'];
  claimedXP?: Maybe<Scalars['Int']['output']>;
  createdAt: Scalars['DateTime']['output'];
  date?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  questId: Scalars['ID']['output'];
  type?: Maybe<QuestRepeatType>;
  userId: Scalars['ID']['output'];
  weekNumber?: Maybe<Scalars['Int']['output']>;
  year?: Maybe<Scalars['Int']['output']>;
};

export enum QuestRepeatType {
  Daily = 'DAILY',
  OneTime = 'ONE_TIME',
  Weekly = 'WEEKLY'
}

export enum QuestStatus {
  Disable = 'DISABLE',
  Init = 'INIT',
  Live = 'LIVE'
}

export enum QuestType {
  ChatDiscord = 'CHAT_DISCORD',
  CommentX = 'COMMENT_X',
  FollowX = 'FOLLOW_X',
  JoinDiscord = 'JOIN_DISCORD',
  LikeX = 'LIKE_X',
  PlayGame = 'PLAY_GAME',
  RetweetX = 'RETWEET_X'
}

export enum RankingType {
  Seasonal = 'SEASONAL',
  Weekly = 'WEEKLY'
}

export type RankingUserInfo = {
  __typename?: 'RankingUserInfo';
  address?: Maybe<Scalars['String']['output']>;
  avatarUrl?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type ReferralHistory = {
  __typename?: 'ReferralHistory';
  claimedPoints: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  refereeId: Scalars['String']['output'];
  refereeUser: Profile;
  referrerId: Scalars['String']['output'];
};

export type Room = {
  __typename?: 'Room';
  code: Scalars['String']['output'];
  duelId?: Maybe<Scalars['ID']['output']>;
  id: Scalars['ID']['output'];
  isPrivate?: Maybe<Scalars['Boolean']['output']>;
  ownerId?: Maybe<Scalars['ID']['output']>;
  password?: Maybe<Scalars['String']['output']>;
  players?: Maybe<Array<Maybe<PlayerInRoom>>>;
  status: RoomStatus;
  title?: Maybe<Scalars['String']['output']>;
};

export enum RoomAction {
  Cancel = 'CANCEL',
  Join = 'JOIN'
}

export enum RoomStatus {
  Cancelled = 'CANCELLED',
  Closed = 'CLOSED',
  Confirming = 'CONFIRMING',
  Matching = 'MATCHING',
  Playing = 'PLAYING'
}

export type Subscription = {
  __typename?: 'Subscription';
  counterIncreased: Scalars['Int']['output'];
  findOpponent: Scalars['ID']['output'];
  startDuel: DuelStarted;
  waitForOpponentJoinRoom?: Maybe<Scalars['Boolean']['output']>;
};


export type SubscriptionFindOpponentArgs = {
  deckId?: InputMaybe<Scalars['ID']['input']>;
  userId: Scalars['String']['input'];
};


export type SubscriptionStartDuelArgs = {
  userId: Scalars['ID']['input'];
};


export type SubscriptionWaitForOpponentJoinRoomArgs = {
  roomId: Scalars['ID']['input'];
};

export type UserRanking = {
  __typename?: 'UserRanking';
  id: Scalars['ID']['output'];
  loseGames: Scalars['Int']['output'];
  periodNumber: Scalars['Int']['output'];
  points: Scalars['Int']['output'];
  rank: Scalars['Int']['output'];
  seasonId: Scalars['ID']['output'];
  type: RankingType;
  user: RankingUserInfo;
  winGames: Scalars['Int']['output'];
};

export enum WalletMessageType {
  Linking = 'LINKING',
  SignIn = 'SIGN_IN'
}

export type CreateDeckMutationVariables = Exact<{
  name: Scalars['String']['input'];
  cardIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type CreateDeckMutation = { __typename?: 'Mutation', createDeck: { __typename?: 'Deck', id: string, name: string, cards?: Array<{ __typename?: 'Card', id: string, components: any }> | null } };

export type UpdateDeckMutationVariables = Exact<{
  id: Scalars['ID']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  cardIds: Array<Scalars['ID']['input']> | Scalars['ID']['input'];
}>;


export type UpdateDeckMutation = { __typename?: 'Mutation', updateDeck: { __typename?: 'Deck', id: string, name: string, cards?: Array<{ __typename?: 'Card', id: string, components: any }> | null } };

export type CreatePracticeDuelMutationVariables = Exact<{
  deckId: Scalars['String']['input'];
}>;


export type CreatePracticeDuelMutation = { __typename?: 'Mutation', createPracticeDuel: { __typename?: 'PracticeDuel', id: string, jwt: string } };

export type CreateCardCollectionMutationVariables = Exact<{
  input: CreateCardCollectionInput;
}>;


export type CreateCardCollectionMutation = { __typename?: 'Mutation', createCardCollection: { __typename?: 'CardCollection', id: string, name: string, creatorId: string, cardIds: Array<string> } };

export type CreateCardMutationVariables = Exact<{
  collectionId: Scalars['ID']['input'];
}>;


export type CreateCardMutation = { __typename?: 'Mutation', createCard: any };

export type UpdateCardMutationVariables = Exact<{
  collectionId: Scalars['ID']['input'];
  cardId: Scalars['ID']['input'];
  components: Array<InputMaybe<Scalars['GameComponent']['input']>> | InputMaybe<Scalars['GameComponent']['input']>;
}>;


export type UpdateCardMutation = { __typename?: 'Mutation', updateCard: any };

export type DeleteCardComponentMutationVariables = Exact<{
  collectionId: Scalars['ID']['input'];
  cardId: Scalars['ID']['input'];
  componentType: Scalars['String']['input'];
}>;


export type DeleteCardComponentMutation = { __typename?: 'Mutation', deleteCardComponent: any };

export type DeleteCardMutationVariables = Exact<{
  collectionId: Scalars['ID']['input'];
  cardId: Scalars['ID']['input'];
}>;


export type DeleteCardMutation = { __typename?: 'Mutation', deleteCard?: boolean | null };

export type MakeDuelMutationVariables = Exact<{
  input: MakeDuelInput;
}>;


export type MakeDuelMutation = { __typename?: 'Mutation', makeDuel: { __typename?: 'GameDuel', id: string, type: string, playerIds: Array<string>, tokens: Array<string>, initialECS: { __typename?: 'GameECS', config: any, state: any, entities: any }, ecs: { __typename?: 'GameECS', config: any, state: any, entities: any } } };

export type CreateDuelScenarioMutationVariables = Exact<{
  input: DuelScenarioInput;
}>;


export type CreateDuelScenarioMutation = { __typename?: 'Mutation', createDuelScenario: { __typename?: 'DuelScenario', name?: string | null, description?: string | null, cardMap: Array<{ __typename?: 'CardMap', entityId: number, cardId: string }>, initialECS: { __typename?: 'GameECS', config: any, state: any, entities: any } } };

export type UpdateProfileMutationVariables = Exact<{
  input: MutateProfileInput;
}>;


export type UpdateProfileMutation = { __typename?: 'Mutation', updateProfile?: { __typename?: 'Profile', id: string, name?: string | null, solanaWallet?: string | null, email?: string | null, points: number, avatarUrl?: string | null, telegramId?: string | null, discordId?: string | null, twitterId?: string | null, referralCode: string } | null };

export type CreateQuestActionMutationVariables = Exact<{
  questId: Scalars['ID']['input'];
}>;


export type CreateQuestActionMutation = { __typename?: 'Mutation', createQuestAction?: { __typename?: 'QuestAction', id: string, questId: string, claimedPoints: number } | null };

export type MakeReferralMutationVariables = Exact<{
  referralCode: Scalars['String']['input'];
}>;


export type MakeReferralMutation = { __typename?: 'Mutation', makeReferral?: boolean | null };

export type ConfirmStartDuelMutationVariables = Exact<{
  roomId: Scalars['ID']['input'];
  approve?: InputMaybe<Scalars['Boolean']['input']>;
}>;


export type ConfirmStartDuelMutation = { __typename?: 'Mutation', confirmStartDuel?: boolean | null };

export type JoinOrCreateRoomMutationVariables = Exact<{
  code: Scalars['String']['input'];
}>;


export type JoinOrCreateRoomMutation = { __typename?: 'Mutation', joinOrCreateRoom?: string | null };

export type ConfirmJoinRoomMutationVariables = Exact<{
  roomId: Scalars['ID']['input'];
  deckId: Scalars['String']['input'];
  action?: InputMaybe<RoomAction>;
}>;


export type ConfirmJoinRoomMutation = { __typename?: 'Mutation', confirmJoinRoom?: boolean | null };

export type RemoveUserFromRoomMutationVariables = Exact<{ [key: string]: never; }>;


export type RemoveUserFromRoomMutation = { __typename?: 'Mutation', removeUserFromRoom?: boolean | null };

export type RequestWalletMessageMutationVariables = Exact<{
  wallet: Scalars['String']['input'];
  network: Network;
  type?: InputMaybe<WalletMessageType>;
}>;


export type RequestWalletMessageMutation = { __typename?: 'Mutation', requestWalletMessage: string };

export type VerifyWalletAndClaimTokenMutationVariables = Exact<{
  message: Scalars['String']['input'];
  network: Network;
  signature: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
}>;


export type VerifyWalletAndClaimTokenMutation = { __typename?: 'Mutation', verifyWalletAndClaimToken: string };

export type VerifyAndLinkWalletMutationVariables = Exact<{
  message: Scalars['String']['input'];
  network: Network;
  signature: Scalars['String']['input'];
  wallet: Scalars['String']['input'];
}>;


export type VerifyAndLinkWalletMutation = { __typename?: 'Mutation', verifyAndLinkWallet: LinkWalletResult };

export type CardQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CardQuery = { __typename?: 'Query', card: { __typename?: 'Card', id: string, components: any } };

export type CardCollectionQueryVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CardCollectionQuery = { __typename?: 'Query', cardCollection: { __typename?: 'CardCollection', id: string, creatorId: string, name: string, cardIds: Array<string>, cards?: Array<{ __typename?: 'Card', id: string, components: any }> | null } };

export type CardCollectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type CardCollectionsQuery = { __typename?: 'Query', cardCollections: Array<{ __typename?: 'CardCollection', id: string, name: string, creatorId: string, cardIds: Array<string>, cards?: Array<{ __typename?: 'Card', id: string, components: any }> | null }> };

export type DecksQueryVariables = Exact<{ [key: string]: never; }>;


export type DecksQuery = { __typename?: 'Query', decks: Array<{ __typename?: 'Deck', id: string, name: string, cards?: Array<{ __typename?: 'Card', id: string, components: any }> | null }> };

export type DuelTrackingQueryVariables = Exact<{ [key: string]: never; }>;


export type DuelTrackingQuery = { __typename?: 'Query', duelTrackings?: Array<{ __typename?: 'DuelTracking', userId: string, type: DuelTrackingType, date?: string | null, weekNumber?: number | null, year?: number | null, totalDuels?: number | null, createdAt: any }> | null };

export type DuelResultQueryVariables = Exact<{
  duelId: Scalars['ID']['input'];
  userId: Scalars['ID']['input'];
}>;


export type DuelResultQuery = { __typename?: 'Query', duelResult: { __typename?: 'DuelResult', duelId: string, userId: string, newXP: number, previousXP: number, stats: { __typename?: 'DuelResultStats', victoryXP?: number | null, defeatXP?: number | null, bonusXP?: number | null } } };

export type DuelScenariosQueryVariables = Exact<{
  mainCardId: Scalars['ID']['input'];
}>;


export type DuelScenariosQuery = { __typename?: 'Query', duelScenarios: Array<{ __typename?: 'DuelScenario', name?: string | null, description?: string | null, mainCard: string, initialECS: { __typename?: 'GameECS', config: any, state: any, entities: any }, cardMap: Array<{ __typename?: 'CardMap', cardId: string, entityId: number }> } | null> };

export type LeaderboardQueryVariables = Exact<{
  periodNumber?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  seasonId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<RankingType>;
}>;


export type LeaderboardQuery = { __typename?: 'Query', leaderboard?: Array<{ __typename?: 'UserRanking', id: string, points: number, winGames: number, loseGames: number, rank: number, type: RankingType, periodNumber: number, seasonId: string, user: { __typename?: 'RankingUserInfo', id: string, name?: string | null, avatarUrl?: string | null, email?: string | null, address?: string | null } }> | null };

export type CurrentRankQueryVariables = Exact<{
  periodNumber?: InputMaybe<Scalars['Int']['input']>;
  seasonId?: InputMaybe<Scalars['ID']['input']>;
  type?: InputMaybe<RankingType>;
}>;


export type CurrentRankQuery = { __typename?: 'Query', currentRank?: { __typename?: 'UserRanking', id: string, points: number, winGames: number, loseGames: number, rank: number, type: RankingType, periodNumber: number, seasonId: string, user: { __typename?: 'RankingUserInfo', id: string, name?: string | null, avatarUrl?: string | null, email?: string | null, address?: string | null } } | null };

export type CurrentLeaderboardSeasonQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentLeaderboardSeasonQuery = { __typename?: 'Query', currentLeaderboardSeason: { __typename?: 'LeaderboardSeason', id: string, name?: string | null, number: number, weeklyPeriods: Array<number>, startDate: any } };

export type ProfileFieldsFragment = { __typename?: 'Profile', id: string, name?: string | null, solanaWallet?: string | null, email?: string | null, points: number, avatarUrl?: string | null, telegramId?: string | null, discordId?: string | null, twitterId?: string | null, referralCode: string };

export type ProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type ProfileQuery = { __typename?: 'Query', profile?: { __typename?: 'Profile', id: string, name?: string | null, solanaWallet?: string | null, email?: string | null, points: number, avatarUrl?: string | null, telegramId?: string | null, discordId?: string | null, twitterId?: string | null, referralCode: string, referred?: { __typename?: 'ReferralHistory', id: string, referrerId: string, createdAt: any } | null } | null };

export type QuestsQueryVariables = Exact<{
  status?: InputMaybe<QuestStatus>;
}>;


export type QuestsQuery = { __typename?: 'Query', quests: Array<{ __typename?: 'Quest', id: string, title: string, description: string, type: QuestType, url: string, status: QuestStatus, points: number, repeatType?: QuestRepeatType | null, createdAt: any, isCompleted?: boolean | null, requiredDuels?: number | null, action?: { __typename?: 'QuestAction', id: string, userId: string, questId: string, claimedPoints: number, date?: string | null, weekNumber?: number | null, year?: number | null, createdAt: any } | null }> };

export type ReferralHistoryQueryVariables = Exact<{ [key: string]: never; }>;


export type ReferralHistoryQuery = { __typename?: 'Query', referralHistory?: Array<{ __typename?: 'ReferralHistory', id: string, referrerId: string, refereeId: string, claimedPoints: number, createdAt: any, refereeUser: { __typename?: 'Profile', id: string, solanaWallet?: string | null, email?: string | null } }> | null };

export const ProfileFieldsFragmentDoc = gql`
    fragment ProfileFields on Profile {
  id
  name
  solanaWallet
  email
  points
  avatarUrl
  telegramId
  discordId
  twitterId
  referralCode
}
    `;
export const CreateDeckDocument = gql`
    mutation createDeck($name: String!, $cardIds: [ID!]!) {
  createDeck(name: $name, cardIds: $cardIds) {
    id
    name
    cards {
      id
      components
    }
  }
}
    `;
export const UpdateDeckDocument = gql`
    mutation updateDeck($id: ID!, $name: String, $cardIds: [ID!]!) {
  updateDeck(id: $id, name: $name, cardIds: $cardIds) {
    id
    name
    cards {
      id
      components
    }
  }
}
    `;
export const CreatePracticeDuelDocument = gql`
    mutation createPracticeDuel($deckId: String!) {
  createPracticeDuel(deckId: $deckId) {
    id
    jwt
  }
}
    `;
export const CreateCardCollectionDocument = gql`
    mutation createCardCollection($input: CreateCardCollectionInput!) {
  createCardCollection(input: $input) {
    id
    name
    creatorId
    cardIds
  }
}
    `;
export const CreateCardDocument = gql`
    mutation createCard($collectionId: ID!) {
  createCard(collectionId: $collectionId)
}
    `;
export const UpdateCardDocument = gql`
    mutation updateCard($collectionId: ID!, $cardId: ID!, $components: [GameComponent]!) {
  updateCard(
    collectionId: $collectionId
    cardId: $cardId
    components: $components
  )
}
    `;
export const DeleteCardComponentDocument = gql`
    mutation deleteCardComponent($collectionId: ID!, $cardId: ID!, $componentType: String!) {
  deleteCardComponent(
    collectionId: $collectionId
    cardId: $cardId
    componentType: $componentType
  )
}
    `;
export const DeleteCardDocument = gql`
    mutation deleteCard($collectionId: ID!, $cardId: ID!) {
  deleteCard(collectionId: $collectionId, cardId: $cardId)
}
    `;
export const MakeDuelDocument = gql`
    mutation makeDuel($input: MakeDuelInput!) {
  makeDuel(input: $input) {
    id
    type
    initialECS {
      config
      state
      entities
    }
    ecs {
      config
      state
      entities
    }
    playerIds
    tokens
  }
}
    `;
export const CreateDuelScenarioDocument = gql`
    mutation createDuelScenario($input: DuelScenarioInput!) {
  createDuelScenario(input: $input) {
    name
    description
    cardMap {
      entityId
      cardId
    }
    initialECS {
      config
      state
      entities
    }
  }
}
    `;
export const UpdateProfileDocument = gql`
    mutation UpdateProfile($input: MutateProfileInput!) {
  updateProfile(profileInput: $input) {
    id
    name
    solanaWallet
    email
    points
    avatarUrl
    telegramId
    discordId
    twitterId
    referralCode
  }
}
    `;
export const CreateQuestActionDocument = gql`
    mutation CreateQuestAction($questId: ID!) {
  createQuestAction(questId: $questId) {
    id
    questId
    claimedPoints
  }
}
    `;
export const MakeReferralDocument = gql`
    mutation MakeReferral($referralCode: String!) {
  makeReferral(referralCode: $referralCode)
}
    `;
export const ConfirmStartDuelDocument = gql`
    mutation ConfirmStartDuel($roomId: ID!, $approve: Boolean) {
  confirmStartDuel(roomId: $roomId, approve: $approve)
}
    `;
export const JoinOrCreateRoomDocument = gql`
    mutation JoinOrCreateRoom($code: String!) {
  joinOrCreateRoom(code: $code)
}
    `;
export const ConfirmJoinRoomDocument = gql`
    mutation ConfirmJoinRoom($roomId: ID!, $deckId: String!, $action: RoomAction) {
  confirmJoinRoom(roomId: $roomId, deckId: $deckId, action: $action)
}
    `;
export const RemoveUserFromRoomDocument = gql`
    mutation removeUserFromRoom {
  removeUserFromRoom
}
    `;
export const RequestWalletMessageDocument = gql`
    mutation RequestWalletMessage($wallet: String!, $network: Network!, $type: WalletMessageType) {
  requestWalletMessage(wallet: $wallet, network: $network, type: $type)
}
    `;
export const VerifyWalletAndClaimTokenDocument = gql`
    mutation VerifyWalletAndClaimToken($message: String!, $network: Network!, $signature: String!, $wallet: String!) {
  verifyWalletAndClaimToken(
    message: $message
    network: $network
    signature: $signature
    wallet: $wallet
  )
}
    `;
export const VerifyAndLinkWalletDocument = gql`
    mutation VerifyAndLinkWallet($message: String!, $network: Network!, $signature: String!, $wallet: String!) {
  verifyAndLinkWallet(
    message: $message
    network: $network
    signature: $signature
    wallet: $wallet
  )
}
    `;
export const CardDocument = gql`
    query Card($id: ID!) {
  card(id: $id) {
    id
    components
  }
}
    `;
export const CardCollectionDocument = gql`
    query cardCollection($id: ID!) {
  cardCollection(id: $id) {
    id
    creatorId
    name
    cardIds
    cards {
      id
      components
    }
  }
}
    `;
export const CardCollectionsDocument = gql`
    query cardCollections {
  cardCollections {
    id
    name
    creatorId
    cardIds
    cards {
      id
      components
    }
  }
}
    `;
export const DecksDocument = gql`
    query decks {
  decks {
    id
    name
    cards {
      id
      components
    }
  }
}
    `;
export const DuelTrackingDocument = gql`
    query DuelTracking {
  duelTrackings {
    userId
    type
    date
    weekNumber
    year
    totalDuels
    createdAt
  }
}
    `;
export const DuelResultDocument = gql`
    query duelResult($duelId: ID!, $userId: ID!) {
  duelResult(duelId: $duelId, userId: $userId) {
    duelId
    userId
    newXP
    previousXP
    stats {
      victoryXP
      defeatXP
      bonusXP
    }
  }
}
    `;
export const DuelScenariosDocument = gql`
    query duelScenarios($mainCardId: ID!) {
  duelScenarios(mainCardId: $mainCardId) {
    name
    description
    mainCard
    initialECS {
      config
      state
      entities
    }
    cardMap {
      cardId
      entityId
    }
  }
}
    `;
export const LeaderboardDocument = gql`
    query Leaderboard($periodNumber: Int, $limit: Int, $seasonId: ID, $type: RankingType) {
  leaderboard(
    periodNumber: $periodNumber
    limit: $limit
    seasonId: $seasonId
    type: $type
  ) {
    id
    user {
      id
      name
      avatarUrl
      email
      address
    }
    points
    winGames
    loseGames
    rank
    type
    periodNumber
    rank
    seasonId
  }
}
    `;
export const CurrentRankDocument = gql`
    query CurrentRank($periodNumber: Int, $seasonId: ID, $type: RankingType) {
  currentRank(periodNumber: $periodNumber, seasonId: $seasonId, type: $type) {
    id
    user {
      id
      name
      avatarUrl
      email
      address
    }
    points
    winGames
    loseGames
    rank
    type
    periodNumber
    seasonId
  }
}
    `;
export const CurrentLeaderboardSeasonDocument = gql`
    query CurrentLeaderboardSeason {
  currentLeaderboardSeason {
    id
    name
    number
    weeklyPeriods
    startDate
  }
}
    `;
export const ProfileDocument = gql`
    query Profile {
  profile {
    ...ProfileFields
    referred {
      id
      referrerId
      createdAt
    }
  }
}
    ${ProfileFieldsFragmentDoc}`;
export const QuestsDocument = gql`
    query Quests($status: QuestStatus = LIVE) {
  quests(status: $status) {
    id
    title
    description
    type
    url
    status
    points
    repeatType
    createdAt
    isCompleted
    requiredDuels
    action {
      id
      userId
      questId
      claimedPoints
      date
      weekNumber
      year
      createdAt
    }
  }
}
    `;
export const ReferralHistoryDocument = gql`
    query ReferralHistory {
  referralHistory {
    id
    referrerId
    refereeId
    refereeUser {
      id
      solanaWallet
      email
    }
    claimedPoints
    createdAt
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    createDeck(variables: CreateDeckMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateDeckMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateDeckMutation>(CreateDeckDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createDeck', 'mutation', variables);
    },
    updateDeck(variables: UpdateDeckMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateDeckMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateDeckMutation>(UpdateDeckDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateDeck', 'mutation', variables);
    },
    createPracticeDuel(variables: CreatePracticeDuelMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreatePracticeDuelMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreatePracticeDuelMutation>(CreatePracticeDuelDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createPracticeDuel', 'mutation', variables);
    },
    createCardCollection(variables: CreateCardCollectionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateCardCollectionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCardCollectionMutation>(CreateCardCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCardCollection', 'mutation', variables);
    },
    createCard(variables: CreateCardMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateCardMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateCardMutation>(CreateCardDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createCard', 'mutation', variables);
    },
    updateCard(variables: UpdateCardMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateCardMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateCardMutation>(UpdateCardDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'updateCard', 'mutation', variables);
    },
    deleteCardComponent(variables: DeleteCardComponentMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteCardComponentMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteCardComponentMutation>(DeleteCardComponentDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteCardComponent', 'mutation', variables);
    },
    deleteCard(variables: DeleteCardMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DeleteCardMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<DeleteCardMutation>(DeleteCardDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'deleteCard', 'mutation', variables);
    },
    makeDuel(variables: MakeDuelMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MakeDuelMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MakeDuelMutation>(MakeDuelDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'makeDuel', 'mutation', variables);
    },
    createDuelScenario(variables: CreateDuelScenarioMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateDuelScenarioMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateDuelScenarioMutation>(CreateDuelScenarioDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'createDuelScenario', 'mutation', variables);
    },
    UpdateProfile(variables: UpdateProfileMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<UpdateProfileMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpdateProfileMutation>(UpdateProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'UpdateProfile', 'mutation', variables);
    },
    CreateQuestAction(variables: CreateQuestActionMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CreateQuestActionMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<CreateQuestActionMutation>(CreateQuestActionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CreateQuestAction', 'mutation', variables);
    },
    MakeReferral(variables: MakeReferralMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<MakeReferralMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<MakeReferralMutation>(MakeReferralDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'MakeReferral', 'mutation', variables);
    },
    ConfirmStartDuel(variables: ConfirmStartDuelMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ConfirmStartDuelMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ConfirmStartDuelMutation>(ConfirmStartDuelDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ConfirmStartDuel', 'mutation', variables);
    },
    JoinOrCreateRoom(variables: JoinOrCreateRoomMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<JoinOrCreateRoomMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<JoinOrCreateRoomMutation>(JoinOrCreateRoomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'JoinOrCreateRoom', 'mutation', variables);
    },
    ConfirmJoinRoom(variables: ConfirmJoinRoomMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ConfirmJoinRoomMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ConfirmJoinRoomMutation>(ConfirmJoinRoomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ConfirmJoinRoom', 'mutation', variables);
    },
    removeUserFromRoom(variables?: RemoveUserFromRoomMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RemoveUserFromRoomMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RemoveUserFromRoomMutation>(RemoveUserFromRoomDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'removeUserFromRoom', 'mutation', variables);
    },
    RequestWalletMessage(variables: RequestWalletMessageMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<RequestWalletMessageMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<RequestWalletMessageMutation>(RequestWalletMessageDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'RequestWalletMessage', 'mutation', variables);
    },
    VerifyWalletAndClaimToken(variables: VerifyWalletAndClaimTokenMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<VerifyWalletAndClaimTokenMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<VerifyWalletAndClaimTokenMutation>(VerifyWalletAndClaimTokenDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'VerifyWalletAndClaimToken', 'mutation', variables);
    },
    VerifyAndLinkWallet(variables: VerifyAndLinkWalletMutationVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<VerifyAndLinkWalletMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<VerifyAndLinkWalletMutation>(VerifyAndLinkWalletDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'VerifyAndLinkWallet', 'mutation', variables);
    },
    Card(variables: CardQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CardQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CardQuery>(CardDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Card', 'query', variables);
    },
    cardCollection(variables: CardCollectionQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CardCollectionQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CardCollectionQuery>(CardCollectionDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cardCollection', 'query', variables);
    },
    cardCollections(variables?: CardCollectionsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CardCollectionsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CardCollectionsQuery>(CardCollectionsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'cardCollections', 'query', variables);
    },
    decks(variables?: DecksQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DecksQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DecksQuery>(DecksDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'decks', 'query', variables);
    },
    DuelTracking(variables?: DuelTrackingQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DuelTrackingQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DuelTrackingQuery>(DuelTrackingDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'DuelTracking', 'query', variables);
    },
    duelResult(variables: DuelResultQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DuelResultQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DuelResultQuery>(DuelResultDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'duelResult', 'query', variables);
    },
    duelScenarios(variables: DuelScenariosQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<DuelScenariosQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<DuelScenariosQuery>(DuelScenariosDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'duelScenarios', 'query', variables);
    },
    Leaderboard(variables?: LeaderboardQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<LeaderboardQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<LeaderboardQuery>(LeaderboardDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Leaderboard', 'query', variables);
    },
    CurrentRank(variables?: CurrentRankQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CurrentRankQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CurrentRankQuery>(CurrentRankDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CurrentRank', 'query', variables);
    },
    CurrentLeaderboardSeason(variables?: CurrentLeaderboardSeasonQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<CurrentLeaderboardSeasonQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CurrentLeaderboardSeasonQuery>(CurrentLeaderboardSeasonDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CurrentLeaderboardSeason', 'query', variables);
    },
    Profile(variables?: ProfileQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ProfileQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ProfileQuery>(ProfileDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Profile', 'query', variables);
    },
    Quests(variables?: QuestsQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<QuestsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<QuestsQuery>(QuestsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Quests', 'query', variables);
    },
    ReferralHistory(variables?: ReferralHistoryQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<ReferralHistoryQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ReferralHistoryQuery>(ReferralHistoryDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'ReferralHistory', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;