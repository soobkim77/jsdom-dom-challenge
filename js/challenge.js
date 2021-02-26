let counter = document.querySelector("#counter");
let totalSeconds = 0;
let t = setInterval(setTime, 1000);
let likes = document.querySelector(".likes");
let likeArr = [];
let commentInput = document.querySelector("#comment-input")
let comments = document.querySelector(".comments")



//on-screen counter increments by 1 second
function setTime(){
    counter.textContent = ++totalSeconds;
}

//Add button manually add one to counter
let add = document.querySelector("#plus");
add.addEventListener('click', addFnc);
function addFnc(e){
    counter.textContent = ++totalSeconds ;
}

//Minus button manually subtracts one from counter value
let minus = document.querySelector("#minus");
minus.addEventListener('click', minusFnc);
function minusFnc(e){
    counter.textContent = --totalSeconds; 
}

//like function that increases the number of likes 
let likeCount = 1;
let heart = document.querySelector("#heart");


heart.addEventListener('click', likeFnc)
function likeFnc(e){
    let counterValue = document.querySelector("#counter").textContent
    if (likeArr.includes(counterValue) === false){
        likeArr.push(counterValue);
        let li = document.createElement("li");
        li.setAttribute("id", counterValue);
        li.textContent = `${counterValue} has been liked ${likeCount} times!`;
        likes.appendChild(li);
    }

    else {
        ++likeCount;
        let list = document.getElementById(counterValue);
        list.textContent = `${counterValue} has been liked ${likeCount} times!`;
    }
    
    
}


// pause button pauses counter
let pause = document.querySelector("#pause");
pause.addEventListener('click', pauseFnc);

function pauseFnc(e) {
    if (add.disabled == true) {
    pause.textContent = "Pause";
    add.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    t = setInterval(setTime, 1000);
    }
    else {
        pause.textContent = "Resume"
        add.disabled = true;
        minus.disabled = true;
        heart.disabled = true ;
        clearInterval(t);
    }
}

let submit = document.querySelector("#submit");
submit.addEventListener('click', handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    let p = document.createElement("p")
    p.textContent = commentInput.value
    comments.appendChild(p)
}

