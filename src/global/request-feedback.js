const reports = [
  "Select direct report",
  "Matt Kelsh",
  "Johnny Depp",
  "Tom cruise",
  "John Doe",
  "Patrick Fitzgerald",
];
const colleagues = [
  "Logan Bala",
  "David Card",
  "Ray D'Cruz",
  "Kim Dae Jung",
  "Abby Deakin",
];

export const requestFeedback = () => ({
  feedbackFor: "myself",
  showDirectReports: false,
  directReports: reports,
  selectedDirectReport: "Select direct report",
  searchReportVal: "",
  onReportSearch(val) {
    const updatedReports = reports.filter((report) =>
      report.toLowerCase().includes(val.toLowerCase())
    );
    this.directReports = updatedReports;
  },
  feedbackFrom: "colleague",
  showColleagues: false,
  colleaguesData: colleagues,
  selectedColleagues: [],
  searchColleagueVal: "",
  onColleagueSearch(val) {
    const updatedColleagues = colleagues.filter((colleague) =>
      colleague.toLowerCase().includes(val.toLowerCase())
    );
    this.colleaguesData = updatedColleagues;
  },
  removeColleague(i) {
    this.selectedColleagues.splice(i, 1);
  },
  addColleague(colleague) {
    if (this.selectedColleagues.includes(colleague)) {
      this.selectedColleagues.splice(
        this.selectedColleagues.indexOf(colleague),
        1
      );
    } else this.selectedColleagues.push(colleague);
    this.showColleagues = false;
  },
  externalFeedbackDetails: [
    {
      name: "",
      email: "",
    },
  ],
  updateFeedbackDetails(i, valToChange, value) {
    this.externalFeedbackDetails[i][valToChange] = value;
  },
  addExternalFeedback() {
    this.externalFeedbackDetails?.push({ name: "", email: "" });
  },
  removeExternalFeedback(i) {
    this.externalFeedbackDetails?.splice(i, 1);
  },
  feedbackRequestType: "quick-recognition",
  feedbackRequestReason: "",
  objectivesProgress: "",
  strengthsReflection: "",
  career: "",
});
