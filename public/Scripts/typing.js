const typingClass = document.querySelector(".typing");

const words = ["Redefining online surveys", "With cutting edge technology"];

let count =0;
let letterCount = 0;

function type(){
    if(count===words.length){
        count = 0;
    }
    let currentWords = words[count];
    let letters = currentWords.slice(0,++letterCount);
    typingClass.textContent = letters;
    if(letters.length === currentWords.length){
        letterCount = 0;
        count++;
    }
    setTimeout(type,400)
}

type();