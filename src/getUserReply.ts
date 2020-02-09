const userReplies = ["frodo", "gandalf", "🍕", "🐱", "yolo", 'lmao', 'kek', 'lol', '😆', 'im a text', 'RUN!'];

export const getUserReply = () => {
    const length: number = Math.floor(Math.random() * 4) + 1;
    const generatedUserReplies: Array<string> = [];

    while (generatedUserReplies.length < length) {
        const chosenReply = userReplies[Math.floor(Math.random() * userReplies.length)]

        if (!generatedUserReplies.includes(chosenReply)) {

            generatedUserReplies.push(chosenReply)
        }
    }
    return generatedUserReplies;
};
