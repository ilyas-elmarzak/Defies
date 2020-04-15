// var xhr = new XMLHttpRequest;
// var myButton = document.getElementById("button");
// button.addEventListener("click", function () {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         document.getElementById("output").textContent = xhr.responseText;
//     }
//     xhr.open("GET", "data.txt", true);
//     xhr.send();
// });
var xhr = new XMLHttpRequest();
var button = document.getElementById('button');
button.onclick = function () {
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("output").innerHTML = xhr.responseText;
        }
    };
    xhr.open("GET", "data.txt", true);
    xhr.send();
}