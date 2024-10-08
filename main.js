let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
    let name = document.createElement("h5")
    name.textContent = person 
    document.querySelector("#top").appendChild(name)
}
