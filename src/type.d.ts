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
declare const loginService = (email: string, password: string) => Promise<User>;
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

declare module "react-timer-hook" {
  interface TimerSettings {
    autoStart?: boolean;
    expiryTimestamp: Date | number;
    onExpire?: () => void;
  }

  interface TimerResult {
    totalSeconds: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    isRunning: boolean;
    start: () => void;
    pause: () => void;
    resume: () => void;
    restart: (newExpiryTimestamp: Date | number, autoStart?: boolean) => void;
  }

  export { TimerResult, TimerSettings };

  export function useTimer(settings: TimerSettings): TimerResult;
}

interface DebouncedFunc<T extends (...args: any[]) => any> {
  /**
   * Call the original function, but applying the debounce rules.
   *
   * If the debounced function can be run immediately, this calls it and returns its return
   * value.
   *
   * Otherwise, it returns the return value of the last invocation, or undefined if the debounced
   * function was not invoked yet.
   */
  (...args: Parameters<T>): ReturnType<T> | undefined;

  /**
   * Throw away any pending invocation of the debounced function.
   */
}
declare function debounce<T extends (...args: any) => any>(
  func: T,
  wait: number | undefined
): DebouncedFunc<T>;
