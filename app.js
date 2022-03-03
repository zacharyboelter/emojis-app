
const emojiContainer = document.querySelector('#emojiContainer');

const myEmojis = ["👨‍💻", "⛷", "🍲"]

function showEmoji() {
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span');
        emoji.textContent = myEmojis[i];
        emojiContainer.append(emoji);
    }
}

showEmoji();