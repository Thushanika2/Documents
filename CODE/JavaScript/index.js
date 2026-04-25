// structure:
// [inputName, maths, science, english, total, average]

const records = [];

// Validate Mark 
function isValidMark(mark) {

    return mark !== "" && !isNaN(Number) && mark >= 0 && mark <= 100;

}

// Add record 
function addRecord() {

    const inputName = document.getElementById("inputName").value;
    const maths = document.getElementById("maths").value;
     const science = document.getElementById("science").value;
    const english = document.getElementById("english").value;

    // Validation
    if (

        inputName === "" ||
        !isValidMark(maths) ||
        !isValidMark(science) ||
        !isValidMark(english) 
    ) {
        alert("En")
    }
}