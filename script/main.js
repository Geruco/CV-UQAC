window.addEventListener("load", function(){
    DEBUG = true;
    
    var code = 0;
    
    function initButtons(){
        var buttons = document.querySelectorAll(".tab");
        buttons.forEach(function(elem){
            elem.addEventListener("click", function(){
                switchTab(elem);
            })
        })
    }
    
    function switchTab(elem){
        var id = elem.getAttribute("id").split("Tab")[0];
        var toSwitch = document.querySelectorAll(".toSwitch");
        
        toSwitch.forEach(function(elem){
            if(!elem.classList.contains("hidden")){
                elem.classList.toggle("hidden");
            }
        })
        
        document.getElementById(id).classList.toggle("hidden");
    }
    if(DEBUG == false)
        initKonami();
    initButtons();
    
    
    
    function initKonami(){
        document.getElementById("Konami").classList.toggle("hidden");
        DEBUG && console.log("initialized");
        var key = window.addEventListener("keydown", function(event){
            DEBUG && console.log(event);
            konamiCode(event.keyCode);
        });
    }
    function konamiCode(key){
        if(key == 38 && code==0){
            code++;
            DEBUG && console.log("code incremented : ", code);
        }
        else if(key == 38 && code == 1){
            code++;
            DEBUG && console.log("code incremented : ", code);
        } 
        else if(key == 40 && code==2){
            code++;
            DEBUG && console.log("code incremented : ", code);
        } 
        else if(key == 40 && code==3){
            code++;
            DEBUG && console.log("code incremented : ", code);
        }
        else if(key ==37 &&code==4){
            code++;
            DEBUG && console.log("code incremented : ", code);
        } 
        else if(key == 37 && code==6){
            code++;
            DEBUG && console.log("code incremented : ", code);
        }
        else if(key == 39 && code==5){
            code++;
            DEBUG && console.log("code incremented : ", code);
        }
        else if(key == 39 && code==7){
            code++;
            DEBUG && console.log("code incremented : ", code);
        }
        else if(key == 66 && code==8){
            code++;
            DEBUG && console.log("code incremented : ", code);
        }
        else if(key == 65 && code==9){
            document.getElementById("Konami").classList.toggle("hidden");
            code = -1;
        }
        else
            code = 0;
    }
    
})