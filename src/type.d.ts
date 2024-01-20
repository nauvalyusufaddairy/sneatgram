type WhileEvent =
  | "home"
  | "search"
  | "explore"
  | "reels"
  | "messages"
  | "notification"
  | "create"
  | "profile"
  | "other"
  | "";
type Card = "like" | "bookmark" | "comment" | "";
type Reply = {
  replyId: string;
  replierImage: string;
  replierId: string;
  commentedAt: string;
  content: string;
  ccId?: string;
  time: string;
};
type Comments = {
  commentId: string;
  userId: string | null;
  replierImage: string;
  comment: string;
  time: string;
  replied?: Reply[];
};

type Reel = {
  video: string;
  comments?: Array<Comments>;
  id: string;
  userId: string;
  time: string;
  captions: string;
};

type User = {
  id: string;
  userName: string;
  userId: string;
  userImage: string;
  isVerifiedPerson: boolean;
  isUserIdConfirmed: boolean;
  reels?: Array<Reel>;
  posts?: Post[];
  followed?: Array<string>;
  following?: Array<string>;
};
type Notifications = {
  userImage: string;
  userId: string;
  notificationType: "liked" | "replied";
  commentId: string;
  commentImage: string;
};

type Post = {
  postId: string;
  userImage: string | "";
  content: string | Array<string> | "";
  contentType: "video" | "image";
  userId: string;
  postDesc: string;
  likesCount: number | 0;
  caption: string;
  bookmarked: string[] | string | "";
  comments?: Array<Comments>;
  date?: string;
};
type Steps =
  | "Credential validations"
  | "Email confirmation"
  | "Personal informations"
  | "";
