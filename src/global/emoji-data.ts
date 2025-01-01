export const emojiData = () => ({
  open: false,
  search: "",
  input: "🙂",
  emojis: {
    "smiley, face, happy, joy, emotion, smiley": "🙂",
    "open hands, smiley, hug, love, care": "🤗",
    "laughing, lol, smile, smiley": "😂",
    "sunglasses, cool, smile, smiley": "😎",
    "clown, face, funny, lol, party, hat": "🥳",
    "face, happy, joy, heart, love, emotion, smiley": "🥰",
    "clap, applause, bravo, hand, gesture, wave, hand clapping": "👏",
    "handshake, agreement, hands": "🤝‍",
    "flex, muscle, body, workout, exercise": "💪",
    "congratulations, party, popper, confetti, celebration": "🎉",
    "star, gold, yellow, sky, space, night, evening, dusk": "⭐️",
    "star, astronomy, sparkle, sparkles, magic": "✨",
    "heart, like, favorite, love": "❤️",
    "eye, vision, look, see": "👀",
    "megaphone, announcement, broadcast, public, speaking": "📣",
    "dice, game, chance, roll, random, target, center": "🎯",
    "gift, present, package, box, celebrate, birthday, party": "🎁",
    "hourglass, time, timer, watch, stopwatch": "⏳",
    "child, children, young": "🧒",
    "shield, protection, security, safety, defense": "🛡️",
    "urgence, police, fire, light, warning, danger": "🚨",
    "bomb, explode, explosion, bang, blast, grenade": "💣",
    "fire, flame, hot, heat, blaze, brigade": "🔥",
    "thermometer, hot, temperature, warm, ill, illness, fever": "🌡️",
    "money, bag, dollar, coin": "💰",
    "money, purse, wallet, bag, dollar, euro": "👛",
    "credit, bank, money, loan, bill, payment, credit card": "💶",
    "chart, graph, analytics, statistics, data, report": "📊",
    "money, dollar, currency, payment, bank, banknote, exchange, cash": "💵",
    "money, dollar, currency, payment, bank, banknote, exchange, cash, fly":
      "💸",
    "key, lock, password, secure": "🔑",
    "trophy, award, cup, competition, game, sport, winner": "🏆",
    "win, medal, gold, silver, bronze, rank, trophy, sport, competition, game, award":
      "🏅",
  },
  close(focusAfter?: any) {
    if (!this.open) return;

    this.open = false;

    focusAfter && focusAfter.focus();
  },
  toggle() {
    if (this.open) {
      return this.close();
    }
    // @ts-ignore
    this.$refs.button.focus();

    this.open = true;
  },
  get filteredEmojis() {
    return Object.keys(this.emojis)
      .filter((key) => key.includes(this.search))
      .reduce((obj: any, key: any) => {
        // @ts-ignore
        obj[key] = this.emojis[key];
        return obj;
      }, {});
  },
});
