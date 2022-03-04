const myEmojis = ["👨‍💻", "🍷", "🚴🏼"]
const emojiInput = document.querySelector("#emoji-input")
const emojiContainer = document.querySelector("#emoji-container")
const unshiftBtn = document.querySelector("#unshift-btn")
const pushBtn = document.querySelector("#push-btn")
const popBtn = document.querySelector("#pop-btn")
const shiftBtn = document.querySelector("#shift-btn")
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
shiftBtn.addEventListener("click", function(){
    myEmojis.shift();
    emojiContainer.innerHTML = ""
    renderEmojis()
})
popBtn.addEventListener("click", function(){
    myEmojis.pop();
    emojiContainer.innerHTML = ""
    renderEmojis()
})