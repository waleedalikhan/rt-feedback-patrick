import { IFeedback } from "./interfaces";

export const innerFeedback = (feedback: IFeedback | null) => ({
  data: feedback,
  isTextClamped: false,
  isTextShown: false,
  showCommentBlock: false,
  reply: "",
  toggleTextClamp(el: HTMLElement) {
    el.scrollHeight > el.clientHeight
      ? (this.isTextClamped = true)
      : (this.isTextClamped = false);
  },
  toggleReadMore(el?: HTMLElement) {
    this.isTextShown = !this.isTextShown;
    el?.classList.toggle("line-clamp-3");
  },
});
