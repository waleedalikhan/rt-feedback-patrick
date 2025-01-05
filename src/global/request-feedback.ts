interface IRequestFeedback {
  feedbackFor: "myself" | "direct-reports";
  feedbackFrom: "colleague" | "external";
  directReports?: string[];
  colleaguesData: string[];
  selectedColleagues: string[];
  showColleagues?: boolean;
  externalFeedbackDetails?: { name?: string; email?: string }[];
  ["key"]?: any;
}

const reports: string[] = [
  "Select direct report",
  "Matt Kelsh",
  "Johnny Depp",
  "Tom cruise",
  "John Doe",
  "Patrick Fitzgerald",
];
const colleagues: string[] = [
  "Logan Bala",
  "David Card",
  "Ray D'Cruz",
  "Kim Dae Jung",
  "Abby Deakin",
];

export const requestFeedback: () => IRequestFeedback = () => ({
  feedbackFor: "myself",
  showDirectReports: false,
  directReports: reports,
  selectedDirectReport: "Select direct report",
  searchReportVal: "",
  onReportSearch(val: string) {
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
  onColleagueSearch(val: string) {
    const updatedColleagues = colleagues.filter((colleague) =>
      colleague.toLowerCase().includes(val.toLowerCase())
    );
    this.colleaguesData = updatedColleagues;
  },
  removeColleague(i: number) {
    this.selectedColleagues.splice(i, 1);
  },
  addColleague(colleague: string) {
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
  updateFeedbackDetails(
    i: number,
    valToChange: "name" | "email",
    value: string
  ) {
    this.externalFeedbackDetails![i][valToChange] = value;
  },
  addExternalFeedback() {
    this.externalFeedbackDetails?.push({ name: "", email: "" });
  },
  removeExternalFeedback(i: number) {
    this.externalFeedbackDetails?.splice(i, 1);
  },
  feedbackRequestType: "quick-recognition",
  feedbackRequestReason: "",
  objectivesProgress: "",
  strengthsReflection: "",
  career: "",
});
