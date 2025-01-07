import Alpine from "alpinejs";
import {
  fastFeedback,
  innerFeedback,
  emojiData,
  requestFeedback,
  textReplies,
} from "./global/index.js";
import intersect from "@alpinejs/intersect";
// @ts-ignore
import ajax from "@imacrayon/alpine-ajax";
import "./style.css";
import "../public/user-img.webp";

window.Alpine = Alpine;
Alpine.data("fastFeedback", () => fastFeedback());
Alpine.data("innerFeedback", (initFeedback = null) =>
  innerFeedback(initFeedback)
);
Alpine.data("textReplies", (initReply = null) => textReplies(initReply));
Alpine.data("requestFeedback", () => requestFeedback());
Alpine.data("emojiData", () => emojiData());
Alpine.plugin(intersect);
Alpine.plugin(ajax);

Alpine.start();
