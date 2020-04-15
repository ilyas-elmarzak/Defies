  
let request = new XMLHttpRequest();
let button1 = document.getElementById('button1');
let button2 = document.getElementById('button2');



button1.addEventListener("click", function () {
    request.onload = function () {
        const data = JSON.parse(this.response);
        document.getElementById('customer').textContent = request.responseText;
    };
    request.open('GET', 'customer.json');
    request.send();
});
button2.addEventListener("click", function () {
    request.onload = function () {
        const data = JSON.parse(this.response);
        document.getElementById('customers').textContent = request.responseText;
    };
    request.open('GET', 'customers.json');
    request.send();
});