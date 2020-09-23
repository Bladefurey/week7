document.addEventListener("DOMContentLoaded",function()
{
    document.querySelector("#login").onclick=()=>
    {
        if(document.querySelector("#user" && "#passw").value==""){
            document.getElementById("alert").innerHTML="Please enter Username!";
            document.getElementById("alertp").innerHTML="Please enter Password";
        }
        else if (document.querySelector("#user").value==""){
            document.getElementById("alert").innerHTML="Please enter Username!";
        }
        else if (document.querySelector("passw").value==""){
            document.getElementById("alertp").innerHTML="Plese enter Password!"
        }
        else{
            window.alert("OK, Login Successful!")
        }
    }
}
)