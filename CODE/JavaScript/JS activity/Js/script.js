const records =[];

function isValidMark 

function addRecord() {
    const name=document.getElementById("nameInput").value;
    const math=document.getElementById("math").value;
    const science=document.getElementById("science").value;
    const english=document.getElementById("english").value;

}
const m=Number(math);
const s=Number(science);
const e=Number(english);
const total=m+s+e;
const average=(total/3).tofixed(2);
records.Push ([name,m,s,e,total,average]);


displayRecords();
clearInputs();


function displayRecords(){

    const table=document.getElementById("tableBody");
    table.innerHTML="";
    console.log(records);
    records.forEach((el,index)=>{
    
        const row= `<tr>
        <td>${index+1}</td>
        <td>${el[0]}</td>
        <td>${el[1]}</td>
        <td>${el[2]}</td>
        <td>${el[3]}</td>
        <td>${el[4]}</td>
        </tr>`;
         table.innerHTML+=row;
    });
 

  
}










    
