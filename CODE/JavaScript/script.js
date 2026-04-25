// Structure:
// [nameInput, Math, science, english, total, average]

const records = [];

// Validate mark
function isValidMark(mark) {
    return mark !== "" && !isNaN(Number) && mark >= 0 && mark <= 100;
}

// Add Record 
function addRecord() {

    const nameInput = document.getElementById("nameInput").value;
    const math = document.getElementById("math").value;
    const science = document.getElementById("science").value;
    const english = document.getElementById("english").value;

    // Validation
    if (
        nameInput === "" ||
        !isValidMark(math) ||
        !isValidMark(science) ||
        !isValidMark(english) 
    ) {
    //     alert("Enter valid data (0-100)");
    //     return;
    }

    const m = Number(math);
    const s = Number(science);
    const e = Number(english);

    const total = m + s + e;
    const average = (total / 3).toFixed(2);

    records.push([nameInput, m, s, e, total, average]);

    displayRecords();
    clearInputs();

}

// Display records 
function displayRecords() {

    const table = document.getElementById("tableBody");
    table.innerHTML = "";

    records.forEach((rec, index) => {
        const row = `
    <tr>
      <td>${index + 1}</td>
      <td>${rec[0]}</td>
      <td>${rec[1]}</td>
      <td>${rec[2]}</td>
      <td>${rec[3]}</td>
      <td>${rec[4]}</td>
      <td>${rec[5]}</td>
    </tr>
        `;
        table.innerHTML += row;
    });

}

// Clear inputs 
function clearInputs() {

    document.getElementById("nameInput").value = "";
    document.getElementById("math").value = "";
    document.getElementById("science").value = "";
    document.getElementById("english").value = "";

}