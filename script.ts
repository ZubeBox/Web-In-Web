function clickHttps() {
    document.getElementById('inputweb').value = "https://" + document.getElementById('inputweb').value;
}
function clickHttpsANDwww() {
    document.getElementById('inputweb').value = "https://" + document.getElementById('inputweb').value;
}
setInterval(() => {
    document.getElementById('webname').textContent = `${document.getElementById('inputweb').value}`;
    if(document.getElementById('webname').textContent == ""){
        document.getElementById('webname').textContent = "Insert Any URL";
    }
}, 1)