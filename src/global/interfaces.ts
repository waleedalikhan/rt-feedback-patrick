export interface IFeedback {
  authorName?: string;
  authorAvatarURL?: string;
  recipientName?: string;
  recipientAvatarURL?: string;
  feedbackComment?: string;
  datetime?: string;
  feedbackType?: string;
  textReplies?: {
    replyComment?: string;
    replyAuthorName?: string;
    replyAuthorAvatarURL?: string;
    time?: string;
  }[];
  reactions?: string[];
  emoji?: string | null;
}
