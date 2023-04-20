let data = [5, 566, 69, 96, 45, 1, 89]

/*for(i = 0; i< data.length; i++){
    
document.write(`Array ${i} is ${data[i]} <br />`)


}*/

/*let x = 3;
document.write(data[3]); */



function getElement() {
    let el = document.getElementById("element").value
    if (el < data.length && typeof parseInt(el) === "number" && el >= 0) {
        alert(data[el])
    } else {
        alert("Please enter valid input")
    }

}