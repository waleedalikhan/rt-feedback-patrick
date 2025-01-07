export const textReplies = (data) => ({
  reply: data,
  isEditReply: false,
  isEditReplyLoading: false,
  isRemoveReplyLoading: false,
  // Function for editing reply
  editReply() {
    this.isEditReplyLoading = true;
    setTimeout(() => {
      this.isEditReplyLoading = false;
      this.isEditReply = false;
      // Updated reply object
      console.log(this.reply);
      // Api call to edit reply here!
    }, 2000);
  },
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
});
