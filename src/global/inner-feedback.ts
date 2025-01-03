import moment from "moment";
import { IFeedback } from "./interfaces";

export const innerFeedback = (feedback: IFeedback | null) => ({
  data: feedback,
  isTextClamped: false,
  isTextShown: false,
  showCommentBlock: false,
  reply: "",
  isReplyLoading: false,
  toggleTextClamp(el: HTMLElement) {
    el.scrollHeight > el.clientHeight
      ? (this.isTextClamped = true)
      : (this.isTextClamped = false);
  },
  toggleReadMore(el?: HTMLElement) {
    this.isTextShown = !this.isTextShown;
    el?.classList.toggle("line-clamp-3");
  },
  addReply() {
    this.isReplyLoading = true;
    setTimeout(() => {
      console.log(this.reply);
      this.data?.textReplies?.push({
        replyAuthorAvatarURL: "/user-img.webp",
        replyAuthorName: "Patrick Fitzgerald",
        time: "just now",
        replyComment: this.reply,
      });
      this.showCommentBlock = false;
      this.reply = "";
      this.isReplyLoading = false;
    }, 3000);
  },
  getCommentTime() {
    const startTime = moment(this.data?.datetime);
    const elapsedTime = moment.duration(moment().diff(startTime));
    const minutes = Number(elapsedTime.asMinutes().toFixed(0));
    const hours = Number(elapsedTime.asHours().toFixed(0));
    const days = Number(elapsedTime.asDays().toFixed(0));
    const months = Number(elapsedTime.asMonths().toFixed(0));
    const years = Number(elapsedTime.asYears().toFixed(0));
    if (minutes <= 0) return "Just now";
    if (days <= 0 && hours <= 0 && minutes > 0)
      return `${minutes} ${minutes <= 1 ? "minute" : "minutes"} ago`;
    if (days <= 0 && hours > 0)
      return `${hours} ${hours <= 1 ? "hour" : "hours"} ago`;
    if (days > 0 && days <= 31)
      return `${days} ${days <= 1 ? "day" : "days"} ago`;
    if (months > 0 && years <= 0)
      return `${months} ${months <= 1 ? "month" : "months"} ago`;
    if (years > 0) return `${years} ${years <= 1 ? "year" : "years"} ago`;
  },
});
