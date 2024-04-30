let govalue = 0;

function clickHttps() {
    document.getElementById('inputweb').value = "https://" + document.getElementById('inputweb').value;
};
function clickHttpsANDwwwANDcom() {
    document.getElementById('inputweb').value = "https://www." + document.getElementById('inputweb').value + ".com";
};
function GO() {

    document.getElementById('website').classList.add = "websiteopener";
    document.getElementById('website').src = `${document.getElementById('inputweb').textContent}`;

    let govalue = 1;
};
function clickwww() {
    document.getElementById('inputweb').value = "www." + document.getElementById('inputweb').value;
};
function clickcom() {
    document.getElementById('inputweb').value = document.getElementById('inputweb').value + ".com";
};
setInterval(() => {
    document.getElementById('webname').textContent = `${document.getElementById('inputweb').value}`;
    if(document.getElementById('webname').textContent == ""){
        document.getElementById('webname').textContent = "Insert Any URL.";
    }
}, 1);
