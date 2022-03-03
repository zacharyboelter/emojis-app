

const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiInput = document.getElementById("emoji-input")
const emojiContainer = document.getElementById("emoji-container")
const unshiftBtn = document.getElementById("unshift-btn")
const pushBtn = document.getElementById("push-btn")



function renderEmojis() {
    emojiInput.value = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiContainer.innerHTML = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiContainer.innerHTML = ""
        renderEmojis()
    }
})