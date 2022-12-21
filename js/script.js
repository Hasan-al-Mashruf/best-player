// 'p' for always player
const pCollection = []

// function for selecting player and push them into an array
function playersName(element) {
    const pName = element.parentNode.children[0].innerText;
    if (pCollection.length < 5) {
        pCollection.push(pName)
    } else {
        alert("You can't select more than 5 players")
        return
    }
    disabled(element)
}

// function for disabling the clicked buttton
function disabled(element) {
    if (pCollection.length <= 5) {
        element.setAttribute("disabled", true)
        if (element.getAttribute("disabled")) {
            element.style.background = "gray"
        }
    }
    displayPlayer()
}

// function for displaying the selected player
function displayPlayer() {
    let playerList = document.getElementById("playerList")
    playerList.innerHTML = ""
    for (let i = 0; i < pCollection.length; i++) {
        const li = document.createElement("li")
        li.innerText = pCollection[i]
        playerList.appendChild(li)
    }
}

// function for calculating the amount 
function calculate(element) {
    const inputElement = element.parentNode.parentNode.children[1].children[0]
    input = parseFloat(inputElement.value)
    if (isNaN(input)) {
        alert("plz provide info")
        inputElement.value = ""
        return
    }
    const expanses = input * pCollection.length
    let pExpanses = document.getElementById("pExpanses")
    pExpanses.innerText = expanses
    return expanses
}

function totalExpanses(element) {
    const pExpanses = calculate(element)
    const collection = element.parentNode.parentNode
    let managerExpanses = parseFloat(collection.children[6].children[0].value)
    let coachExpanses = parseFloat(collection.children[8].children[0].value)
    if (collection.children[6].children[0].value == "" || collection.children[8].children[0].value == "") {
        alert("plz provide the amount for manager and coach as well")
        return
    } else {
        if (isNaN(collection.children[6].children[0].value) || isNaN(collection.children[8].children[0].value)) {
            alert("plz provide a valid number")
            return
        }
    }
    finalTotal = managerExpanses + coachExpanses + pExpanses
    const finalExpanses = document.getElementById("finalExpanses")
    finalExpanses.innerText = finalTotal
}