const xml = new XMLHttpRequest;
const button2 = document.getElementById('button2');
button2.addEventListener('click', function loadcustomers() {
    xml.onload = function () {
        if (xml.readyState == 4 && xml.status == 200) {
            var objet = JSON.parse(xml.response);
            var output = " ";
            for (let i = 0; i < objet.length; i++) {
                output += "<ul >" +
                    "<li> name: " + objet[i].name + "</li>  " +
                    "<li> company: " + objet[i].company + "</li>  " +
                    "<li> phone: " + objet[i].phone + "</li>  " +
                    "<li>  id: " + objet[i].id + "</li>  " +
                    "</ul>";
            }
            document.getElementById('customers').innerHTML = output;
        }
        if (xml.status == 404) {
            console.log("ERROR 404")

        }
    }
    xml.open('get', 'customers.json', true);
    xml.send();
})