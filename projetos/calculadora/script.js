function input(num){
    let result = document.getElementById("result");
    if(num === "." && result.innerHTML[result.innerHTML.length-1] === "."){
        return;
    }
    document.getElementById("result").innerHTML += num;
}

function clean(){
    document.getElementById("result").innerHTML = "";
}

function delet(){
    let result = document.getElementById("result").innerHTML;
    document.getElementById("result").innerHTML = result.substring(0, result.length -1);
}


function calc(){
    let result = document.getElementById("result").innerHTML;
    if(result){
        document.getElementById("result").innerHTML = eval(result)
    }
}