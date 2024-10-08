window.onload = function() {
    
    // const userMessage = prompt('Enter a Birthday Message')
if (userMessage) {
    const messageElement = document.getElementById('message');
    messageElement.textContent = userMessage;
}
};

const addGift = document.querySelector("#gift-adder");
const giftList = document.querySelector('.gifts');

addGift.addEventListener('click', (e) => {
    newGift = document.createElement("li");
    newGift.textContent = "new gift";
    giftList.appendChild(newGift)

    
})