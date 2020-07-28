
function generate() {
var str = document.getElementById('input').value;
    var str = str.length > 140 || str === ''? false: 
'#' + str.split('').join('').toUpperCase();
var t = document.createTextNode(str);
console.log(t)
if (str === '')  {
    console.log("enter")
} else {
    document.getElementById('output-h2').appendChild(t);
}



}

