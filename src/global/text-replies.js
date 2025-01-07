export const textReplies = (data) => ({
  reply: data,
  isEditReply: false,
  isEditReplyLoading: false,
  isRemoveReplyLoading: false,

  // Function to remove reply
  removeReply(index) {
    this.isRemoveReplyLoading = true;
    this.$el.dispatchEvent(
      new CustomEvent("remove-reply", {
        detail: index,
        bubbles: true,
      })
    );
  },

  init() {
    this.$el.addEventListener("reply-removed", () => {
      this.isRemoveReplyLoading = false;
    });
  },
});
