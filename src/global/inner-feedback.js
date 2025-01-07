import moment from "moment";

export const innerFeedback = (feedback) => ({
  data: feedback,
  isTextClamped: false,
  isTextShown: false,
  showCommentBlock: false,
  reply: "",
  isReplyLoading: false,

  // Initialize
  init() {
    // Add initial replies (demo data)
    this.data.textReplies = [
      ...this.data.textReplies,
      {
        replyComment: "Thank you, Alice! 1.",
        replyAuthorName: "Bob Smith",
        replyAuthorAvatarURL:
          "https://www.gravatar.com/avatar/fd3cdcc2fdd20f9ebd9cd036c6f7b1b9",
      },
      {
        replyComment: "Thank you, Alice! 2.",
        replyAuthorName: "Bob Smith",
        replyAuthorAvatarURL:
          "https://www.gravatar.com/avatar/fd3cdcc2fdd20f9ebd9cd036c6f7b1b9",
      },
    ];

    // Scoped listener for removing replies
    this.$el.addEventListener("remove-reply", (e) => {
      const index = e.detail;
      const replies = this.data.textReplies;
      setTimeout(() => {
        // Reply that needs to be removed stored in removedReply variable
        const removedReply = replies.splice(index, 1);
        // Do api call here to remove reply before the UI gets updated
        this.data.textReplies = replies;
      }, 2000);
    });
    this.$el.addEventListener("edit-reply", (e) => {
      const { index, reply } = e.detail;
      this.data.textReplies[index] = reply;
    });
  },

  // Toggle text clamp
  toggleTextClamp(el) {
    el.scrollHeight > el.clientHeight
      ? (this.isTextClamped = true)
      : (this.isTextClamped = false);
  },

  // Toggle read more
  toggleReadMore(el) {
    this.isTextShown = !this.isTextShown;
    el?.classList.toggle("line-clamp-3");
  },

  // Add reply
  addReply() {
    this.isReplyLoading = true;
    setTimeout(() => {
      this.data?.textReplies?.push({
        replyAuthorAvatarURL: "./user-img.webp",
        replyAuthorName: "Patrick Fitzgerald",
        time: "just now",
        replyComment: this.reply,
      });
      this.showCommentBlock = false;
      this.reply = "";
      this.isReplyLoading = false;
    }, 1000);
  },
  // Function to get actual time in human-readable format from timestamp
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
