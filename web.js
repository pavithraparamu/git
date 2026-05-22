function submitForm(){

    let email = document.getElementById("email").value;

    if(email === ""){
        alert("Please Enter Email");
    }
    else{
        alert("API Message Submitted Successfully");
    }

}