
// here real scripting starts 

let stbtn = document.querySelector(".start-btn>button")
let infoBox = document.querySelector(".infobox")
let CurrentIdx = 0;
stbtn.addEventListener('click',()=>{
    infoBox.classList.add("activeInfo");
})

let conbtn = document.querySelector(".continue");
let quizBox = document.querySelector(".quizbox");
let exitbtn = document.querySelector(".quit");
exitbtn.addEventListener('click',()=>{
    infoBox.classList.remove("activeInfo");
})

conbtn.addEventListener('click',()=>{
    quizBox.classList.add("activeQuiz");
    infoBox.classList.remove("activeInfo");
    next_que(CurrentIdx); 
    timeHandle(15);
    timelinehandle(0);
})

// getting acess to questions and options
let quetxt = document.querySelector(".que_txt")
let opt = document.querySelectorAll(".option");
let nxtque = document.querySelector(".next_btn")
let no1 = document.querySelector(".no1");

nxtque.addEventListener('click',()=>{
    if(CurrentIdx < 10);
    next_que(CurrentIdx);
})
const next_que = (idx) =>{
    quetxt.textContent = `${questions[idx].numb}. ${questions[idx].question}`;
    no1.textContent = `${questions[idx].numb}`;
    let optarray = questions[idx].options;
    let i = 0;
    opt.forEach((ele) =>{
        ele.textContent = optarray[i++];
    })
    timeHandle(15);
    timelinehandle(0);
    CurrentIdx++;
}


//Hnadling timer logic

let timesec  = document.querySelector(".timer_sec");

let timeline = document.querySelector(".time-line");

let id_lineInterval = null;

let id_timeInterval = null;


const timeHandle = (time) =>{
    timesec.textContent = time;
    if(id_timeInterval !== null) clearInterval(id_timeInterval);
     id_timeInterval = setInterval(()=>{
        timeline.style.width += "5%";
        if(time >= 0)
        {
        if(time < 10)
        timesec.textContent = `0${time--}`;
        else 
        timesec.textContent = `${time--}`;
        }
        else
        clearInterval(id_timeInterval);
    },1000)
}

const timelinehandle = (timepercentage) =>{
   if(id_lineInterval !== null) clearInterval(id_lineInterval);
    id_lineInterval = setInterval(()=>{
    if(timepercentage >= 100) clearInterval(id_lineInterval);
    timepercentage += 1/15;
    timeline.style.width = timepercentage + '%';
   },10)
}