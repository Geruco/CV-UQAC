function initKonami(){
    document.getElementById("Konami").classList.toggle("hidden");
    console.log("initialized");
    var key = window.addEventListener("keydown", function(event){
        console.log(event);
        konamiCode(event.keyCode);
    });
}
function konamiCode(key){
    
}