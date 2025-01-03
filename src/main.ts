import Alpine from "alpinejs";
import {
  fastFeedback,
  innerFeedback,
  emojiData,
  requestFeedback,
} from "./global";
import intersect from "@alpinejs/intersect";
// @ts-ignore
import ajax from "@imacrayon/alpine-ajax";
import "./style.css";

window.Alpine = Alpine;
Alpine.data("fastFeedback", () => fastFeedback());
Alpine.data("innerFeedback", (initFeedback = null) =>
  innerFeedback(initFeedback!)
);
Alpine.data("requestFeedback", () => requestFeedback());
Alpine.data("emojiData", () => emojiData());
Alpine.plugin(intersect);
Alpine.plugin(ajax);

Alpine.start();
