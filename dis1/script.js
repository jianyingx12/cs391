function checkAge() {

    const ageInput = document.getElementById("age-input").value;

    const age = Number(ageInput);

    let errorMessage = "";

    // display error message
    if (isNaN(age)) {
        errorMessage = "Invalid. Has to be a number";
    } else if (!Number.isInteger(age)) {
        errorMessage = "Invalid. Has to be a whole number";
    } else if (age < 18) {
        errorMessage = "Invalid. Can't be younger than 18";
    } else if (age > 120) {
        errorMessage = "Invalid. Can't be older than 120";
    }

    if (errorMessage === "") {
        document.getElementById("main-content").style.visibility = "visible";
        document.getElementById("error-content").style.visibility = "hidden";
    } else {
        document.getElementById("error-message").innerHTML = errorMessage;
        document.getElementById("main-content").style.visibility = "hidden";
        document.getElementById("error-content").style.visibility = "visible";
    }

}