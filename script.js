//Mostrar ou esconder os projetos://
function show(clicked_id){
    let element = clicked_id
    if(clicked_id == "basicoString"){
        let element = document.querySelector("#basico");
        if(element.style.display == "block"){
            element.style.display = "none";
        }else{
            element.style.display = "block";
        }
    }else if(clicked_id == "intermedString"){
        let element = document.querySelector("#intermediario");
        if(element.style.display == "block"){
            element.style.display = "none";
        }else{
            element.style.display = "block";
        }
    }else if(clicked_id == "avancString"){
        let element = document.querySelector("#avancado");
        if(element.style.display == "block"){
            element.style.display = "none";
        }else{
            element.style.display = "block";
        }
    }
}