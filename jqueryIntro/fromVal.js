function validate() {


    if (document.myForm.fName.value === "") {
        alert("First Name is required");
        document.myForm.fName.focus();
        return false;
    }
    
    if (document.myForm.lName.value === ""){
        alert("last name is required");
        document.myForm.lName.focus();
        return false;
    }
    
    if (document.myForm.address.value === ""){
        alert("address is required");
        document.myForm.address.focus();
        return false;
    }
    if (document.myForm.state.value === ""){
        alert("state is required");
        document.myForm.state.focus();
        return false;
    }
    if (document.myForm.zip.value === ""){
        alert("zip code is required");
        document.myForm.zip.focus();
        return false;
    }
    
    if (document.myForm.schoolName.value === ""){
        alert("school name is required");
        document.myForm.schoolName.focus();
        return false;
    }
    
    if (document.myForm.major.value === ""){
        alert("major is required");
        document.myForm.major.focus();
        return false;
    }
    

    return (true);

}
