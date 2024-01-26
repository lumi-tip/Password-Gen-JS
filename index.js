const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


const btnEl = document.getElementById("btn-el")
const firstPassEl = document.getElementById("first-pass")
const secondPassEl = document.getElementById("second-pass")
const copyFirstEl = document.getElementById("copy-first-el")
const copySecondEl = document.getElementById("copy-second-el")

btnEl.addEventListener("click", function () {
    const lengthIn = goodLength();
    
    let passArr = []

    for (let i = 0; i < 2; i++) {
        let password = "";
        for (let x = 0; x < lengthIn; x++) {
            password += characters[Math.floor(Math.random() * characters.length)]
        }
        passArr.push(password)
    }

    firstPassEl.innerText = passArr[0]
    secondPassEl.innerText = passArr[1]
})

function goodLength() {
    const lengthErr = document.getElementById("length-err")
    const lengthIn = Number(document.getElementById("length-in").value)

    if (lengthIn <= 20) {
        lengthErr.innerText = ""
        return Number(document.getElementById("length-in").value);

    } else if (lengthIn > 20) lengthErr.innerText = "Max Password length is 20"

}

function copyFirst(){
    navigator.clipboard.writeText(firstPassEl.innerText)
    alert("Copied first")
}
function copySecond(){
    navigator.clipboard.writeText(secondPassEl.innerText)
    alert("Copied Second")
}
