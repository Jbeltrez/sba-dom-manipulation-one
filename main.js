// alert('Create your virtual Birthday Card!')
    // let name = document.getElementById("name");
function generateCard(event) {
    
    // event.preventDefault();
    // const form = document.querySelector("#create-card");
    let name = document.getElementById("name");
    let head = document.querySelector("h1");
    console.log(head)
    head.textContent += `\n ${name.value}`;

    let message = document.getElementById("msg");
    console.log(message)
    let inputMessage = document.createElement("p");
    console.log(inputMessage)
    inputMessage.innerHTML = message.value
    let cardBody = document.querySelector(".card-body");
    cardBody.appendChild(inputMessage);
    
    

    let cardname = name.value;
    let h1 = document.getElementById("head");
    let cardHead = document.querySelector(".card-header");
    // let godOfWar = document.createElement("p");
    // godOfWar.textContent = "hahahaha"
    // cardHead.appendChild(godOfWar);
}
const customizeBtn = document.getElementById("button");

customizeBtn.addEventListener("click", generateCard);
customizeBtn.addEventListener("mouseover", (e) => {
    customizeBtn.style.backgroundColor = "blue";
})
customizeBtn.addEventListener("mouseout", (e) => {
    customizeBtn.style.backgroundColor = "green";
})
