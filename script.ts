function clickHttps() {
    document.getElementById('inputweb').value = "https://" + document.getElementById('inputweb').value;
};
function clickHttpsANDwwwANDcom() {
    document.getElementById('inputweb').value = "https://www." + document.getElementById('inputweb').value + ".com";
};
function GO() {
    document.getElementById('website').src = `${document.getElementById('webname').textContent}`;
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
        document.getElementById('webname').textContent = "Insert Any URL";
    }
}, 1);