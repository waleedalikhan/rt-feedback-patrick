export const fastFeedback = () => ({
  content: [],
  // Variable for showing/hiding loading animation while api response is being fetched.
  isLoading: true,
  // Function responsible for getting feedbacks from api
  async getFeedbacks() {
    this.isLoading = true;
    let res = await fetch(
      "https://0880c18604314a1185261f2da23ef21a.api.mockbin.io/"
    ).then((res) => res.json());
    // Code necessary to use emoji reactions
    res.forEach((fb) => {
      fb.reactions = ["🙂"];
      fb.emoji = "👏";
    });
    this.content = res;
    this.isLoading = false;
  },
});
