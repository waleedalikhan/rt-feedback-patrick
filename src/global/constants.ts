import { IFeedback } from "./interfaces";

export const FEEDBACKS: IFeedback[] = [
  {
    authorName: "Alice Johnson",
    authorAvatarURL:
      "https://www.gravatar.com/avatar/3e7c9b0b89f61a65558939e7ea27f116",
    recipientName: "Bob Smith",
    recipientAvatarURL:
      "https://www.gravatar.com/avatar/fd3cdcc2fdd20f9ebd9cd036c6f7b1b9",
    feedbackComment:
      "Your ability to communicate complex ideas during the presentation was absolutely remarkable. The way you structured your points and broke down the topics into digestible segments kept the audience engaged from start to finish. Additionally, your confidence and clarity in answering tough questions set a high standard for public speaking in our team.",
    datetime: "2024-12-25T08:30:00Z",
    feedbackType: "Quick recognition",
    textReplies: [
      {
        replyComment:
          "Thank you, Alice! I’ll keep this in mind moving forward.",
        replyAuthorName: "Bob Smith",
        replyAuthorAvatarURL:
          "https://www.gravatar.com/avatar/fd3cdcc2fdd20f9ebd9cd036c6f7b1b9",
      },
    ],
    reactions: ["🙂"],
    emoji: "👏",
  },
  {
    authorName: "Charlie Green",
    authorAvatarURL:
      "https://www.gravatar.com/avatar/5ac32a86949f042d6b22ed1a46df6a91",
    recipientName: "Diana Brown",
    recipientAvatarURL:
      "https://www.gravatar.com/avatar/6b69387a2929e276eabc576dd6b3e0ad",
    feedbackComment:
      "Your approach to resolving the client's account issue showcased not only your technical expertise but also your ability to think outside the box. The way you handled the situation with patience and creativity turned a potentially negative experience into a positive one. The client left the meeting impressed and deeply appreciative of your efforts.",
    datetime: "2024-12-24T09:30:00Z",
    feedbackType: "Quick recognition",
    textReplies: [],
    reactions: ["🙂"],
    emoji: "👏",
  },
  {
    authorName: "Emily Davis",
    authorAvatarURL:
      "https://www.gravatar.com/avatar/0b2f4fd9d9390b2cc9e18dbd9e2074a5",
    recipientName: "Frank Wilson",
    recipientAvatarURL:
      "https://www.gravatar.com/avatar/7db237e84b1f7b34383d8bd2f123f610",
    feedbackComment:
      "Your project reports are always well-organized, but I believe adding deeper insights into trends and backing them with more compelling visuals could elevate them to the next level. Including actionable recommendations based on your analysis would not only make your reports more impactful but also help the leadership team make better decisions.",
    datetime: "2024-12-23T10:30:00Z",
    feedbackType: "Development",
    textReplies: [
      {
        replyComment:
          "Thank you, Emily! I’ll focus on adding actionable insights in future reports.",
        replyAuthorName: "Frank Wilson",
        replyAuthorAvatarURL:
          "https://www.gravatar.com/avatar/7db237e84b1f7b34383d8bd2f123f610",
      },
    ],
    reactions: ["🙂"],
    emoji: "👏",
  },
  {
    authorName: "George White",
    authorAvatarURL:
      "https://www.gravatar.com/avatar/9f0db5fa874ec5c33f1a9cc315dca3cd",
    recipientName: "Hannah Lee",
    recipientAvatarURL:
      "https://www.gravatar.com/avatar/e7d512ef14b41cc26020f8f752ff03aa",
    feedbackComment:
      "Your quick responses to client inquiries have been a game-changer for the team. It’s not just about the speed but the thoughtful and professional tone you maintain that really makes a difference. Clients have frequently mentioned how reassured they feel knowing they can count on you to address their concerns swiftly.",
    datetime: "2024-12-22T11:30:00Z",
    feedbackType: "Quick recognition",
    textReplies: [],
    reactions: ["🙂"],
    emoji: "👏",
  },
  {
    authorName: "Irene Black",
    authorAvatarURL:
      "https://www.gravatar.com/avatar/209d9b49e52d87be8c62d4d7cfc22a34",
    recipientName: "Jake Taylor",
    recipientAvatarURL:
      "https://www.gravatar.com/avatar/41ecf4f8f0f897b89781ff8cceea48cb",
    feedbackComment:
      "Your management of the budget allocation was precise and effective. However, incorporating feedback from a broader range of stakeholders could bring fresh perspectives and foster greater buy-in for your decisions. Overall, your leadership on this front has been instrumental in ensuring the project's financial health remains on track.",
    datetime: "2024-12-21T12:30:00Z",
    feedbackType: "Development",
    textReplies: [
      {
        replyComment:
          "Thanks, Irene! I’ll ensure to involve more stakeholders in the future.",
        replyAuthorName: "Jake Taylor",
        replyAuthorAvatarURL:
          "https://www.gravatar.com/avatar/41ecf4f8f0f897b89781ff8cceea48cb",
      },
    ],
    reactions: ["🙂"],
    emoji: "👏",
  },
  {
    authorName: "Karen Moore",
    authorAvatarURL:
      "https://www.gravatar.com/avatar/df61fbac7e89486bba4b1b2d9725db10",
    recipientName: "Liam Walker",
    recipientAvatarURL:
      "https://www.gravatar.com/avatar/b2197d8b6a468c6ec3d92330f3b522e7",
    feedbackComment:
      "During the intense final days of the project, your dedication and positive attitude were key to keeping the team motivated. Even under pressure, your calm and collaborative approach helped the team deliver exceptional results. Your leadership by example has set a new standard for how we tackle challenges together.",
    datetime: "2024-12-20T16:30:00Z",
    feedbackType: "Quick recognition",
    textReplies: [],
    reactions: ["🙂"],
    emoji: "👏",
  },
  {
    authorName: "Mia Scott",
    authorAvatarURL:
      "https://www.gravatar.com/avatar/43b4cc64cc7056de9b7f88f7dc96c91e",
    recipientName: "Noah Carter",
    recipientAvatarURL:
      "https://www.gravatar.com/avatar/17ae38fb53cb6dcf38164df7b8b6f9a4",
    feedbackComment:
      "Your coding expertise is evident, but refining your documentation practices could enhance your contributions further. Clear and consistent documentation not only helps others understand your code but also makes maintenance much smoother. By adopting this approach, you could set a benchmark for best practices within the development team.",
    datetime: "2024-12-19T11:15:00Z",
    feedbackType: "Development",
    textReplies: [
      {
        replyComment:
          "I appreciate the feedback, Mia. I’ll prioritize improving my documentation practices.",
        replyAuthorName: "Noah Carter",
        replyAuthorAvatarURL:
          "https://www.gravatar.com/avatar/17ae38fb53cb6dcf38164df7b8b6f9a4",
      },
    ],
    reactions: ["🙂"],
    emoji: "👏",
  },
  {
    authorName: "Olivia Turner",
    authorAvatarURL:
      "https://www.gravatar.com/avatar/3ed7c0e2a4f89cd76b2da1256b0d6451",
    recipientName: "Paul Allen",
    recipientAvatarURL:
      "https://www.gravatar.com/avatar/2d9d56bc5f902123edbc212cd4e90579",
    feedbackComment:
      "Your mentorship skills have truly shined in this quarter. The way you guide and support junior team members has greatly enhanced their performance and morale. It's inspiring to see how much effort you put into fostering growth within the team.",
    datetime: "2024-12-18T13:30:00Z",
    feedbackType: "Quick recognition",
    textReplies: [],
    reactions: ["🙂"],
    emoji: "👏",
  },
  {
    authorName: "Paul Allen",
    authorAvatarURL:
      "https://www.gravatar.com/avatar/2d9d56bc5f902123edbc212cd4e90579",
    recipientName: "Quinn Hill",
    recipientAvatarURL:
      "https://www.gravatar.com/avatar/b983a45c76390df87cd5924456c88012",
    feedbackComment:
      "Your ability to handle multiple projects simultaneously without compromising on quality has been exceptional. Your organizational skills and attention to detail have set a new benchmark for project management in the team.",
    datetime: "2024-12-17T10:45:00Z",
    feedbackType: "Development",
    textReplies: [],
    reactions: ["🙂"],
    emoji: "👏",
  },
  {
    authorName: "Rachel Adams",
    authorAvatarURL:
      "https://www.gravatar.com/avatar/6ad93f54bd2c41f056add06a2b62f117",
    recipientName: "Sophia Campbell",
    recipientAvatarURL:
      "https://www.gravatar.com/avatar/8d5624c621a54d3bc91d2f59c9b74db8",
    feedbackComment:
      "Your recent analysis of market trends provided valuable insights that helped shape our strategy. The depth and relevance of your research were truly impressive and contributed significantly to the project's success.",
    datetime: "2024-12-16T14:20:00Z",
    feedbackType: "Quick recognition",
    textReplies: [],
    reactions: ["🙂"],
    emoji: "👏",
  },
];
