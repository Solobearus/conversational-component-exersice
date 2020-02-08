const botReplies = ["Wow!", "Fascinating, please do go on", "Amazing!", "Really?", "If you say so..."];

export const getBotReply = () => botReplies[Math.floor(Math.random() * botReplies.length)];
