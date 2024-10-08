alert('Welcome to Your virtual Birthday Card creator')

if (person != null) {
    let name = document.createElement("h5")
    name.textContent = person 
    document.querySelector("#top").appendChild(name)
}
