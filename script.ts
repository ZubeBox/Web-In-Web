let fullscreencounter = 0;

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
function fullScreen() {
    if(fullscreencounter = 0){
        document.getElementById('website').style.width = '100%';
        document.getElementById('website').style.height = '100%';
        let fullscreencounter = (fullscreencounter + 1);
    };
    if(fullscreencounter = 1){
        document.getElementById('website').style.width = '1600px';
        document.getElementById('website').style.height = '800px';
        let fullscreencounter = 0;
    };
};
setInterval(() => {
    document.getElementById('webname').textContent = `${document.getElementById('inputweb').value}`;
    if(document.getElementById('webname').textContent == ""){
        document.getElementById('webname').textContent = "Insert Any URL.";
    }
}, 1);