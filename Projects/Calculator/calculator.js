const input = document.getElementById("inputbox");
const button = document.querySelectorAll('button')

let str = "";
button.forEach((ele) =>
{
    ele.addEventListener('click',(e) => {
        let innerHTML = e.target.innerHTML;

        if(innerHTML === "AC")
        {
            str = "";
            input.value = str;
        }  
        else if(innerHTML === "DEL" )
        {
            str = str.slice(0,str.length-1);
            input.value= str;
        }
        else if(innerHTML === "=")
        {
            str = eval(str);
            input.value = str;
        }
        else{
            str += e.target.innerHTML;
            input.value = str;
        }
    })
})