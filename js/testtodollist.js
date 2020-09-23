document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#submit").onclick=()=>{
        var listitem=document.createElement("li");
        listitem.innerHTML=document.querySelector("#new_task").value;
        document.querySelector("#tasks").append(listitem);
        document.querySelector("#new_task").value="";
        return false;
    }
    var task=document.getElementById("new_task").value;
    if(task==""){
        
    }
})
