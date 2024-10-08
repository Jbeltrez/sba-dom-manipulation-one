
function generateCard(event) {
    
    event.preventDefault();
    
    let name = document.getElementById("name");
    let head = document.querySelector("h1");
    console.log(head)
    head.textContent += `\n ${name.value}`;
   

    let message = document.getElementById("msg");
    console.log(message)
    let inputMessage = document.createElement("p");
    if (inputMessage) {
        alert("what a thoughtful message!")
    }
    console.log(inputMessage)
    inputMessage.innerHTML = message.value
    let cardBody = document.querySelector(".card-body");
    cardBody.appendChild(inputMessage);
    let gift1 = document.getElementById("gift1");
    let gift2 = document.getElementById("gift2");
    let gift3 = document.getElementById("gift3");
    let giftsArr = [gift1, gift2, gift3];
    const giftList = document.createElement("ul");
    cardBody.appendChild(giftList);
    for (i = 0; i <= giftsArr.length - 1; i++) {
        let li = document.createElement("li")
        li.innerHTML = giftsArr[i].value;
        giftList.appendChild(li);


    }
}
const customizeBtn = document.getElementById("button");

customizeBtn.addEventListener("click", generateCard);
customizeBtn.addEventListener("mouseover", (e) => {
    customizeBtn.style.backgroundColor = "blue";
})
customizeBtn.addEventListener("mouseout", (e) => {
    customizeBtn.style.backgroundColor = "green";
})

const resetBtn = document.getElementById("reset-section").firstElementChild;
resetBtn.addEventListener("click", (event) => {
    window.location.reload();
    

})
console.log('resetBtn --->', resetBtn)
