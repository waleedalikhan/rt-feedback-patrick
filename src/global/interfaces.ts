export interface IFeedback {
  id?: string | number;
  user?: {
    img?: string;
    name?: string;
    commentTime?: string;
    recognition?: string;
    userReplies?: { img?: string; name?: string }[];
  };
  feedback?: string;
  replies?: { img?: string; name?: string; time?: string; reply?: string }[];
  reactions?: string[];
  emoji?: string | null;
}
