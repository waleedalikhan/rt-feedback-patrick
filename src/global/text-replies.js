export const textReplies = (data) => ({
  reply: data,
  replyToEdit: data.replyComment,
  isEditReply: false,
  isEditReplyLoading: false,
  isRemoveReplyLoading: false,
  // Function for editing reply
  editReply(index) {
    this.isEditReplyLoading = true;
    setTimeout(() => {
      this.reply.replyComment = this.replyToEdit;
      console.log(this.reply);
      this.$el.dispatchEvent(
        new CustomEvent("edit-reply", {
          detail: { index, reply: this.reply },
          bubbles: true,
        })
      );
      this.isEditReplyLoading = false;
      this.isEditReply = false;
      // Updated reply object
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
