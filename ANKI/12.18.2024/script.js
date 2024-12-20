let date = new Date()
let dateElement = document.createElement("p")
let formattedDate = date.toDateString();
dateElement.innerText = `${formattedDate}`
document.body.appendChild(dateElement);

let question = document.createElement("p")
let proof = document.createElement("p")
let answer = document.createElement("p")


question.innerText = `Filter numbers from a string object and return all the numbers in the order they occur`

let filterFunction = (string) => {
    let digits = string.match(/\d+/g)
    if(digits) {
        return digits.join('')
    }
    else {
        return ``
    }
      
}


proof.innerText = 

filterFunction('h3110')

document.body.appendChild(question)
document.body.appendChild(proof)
document.body.appendChild(answer)
