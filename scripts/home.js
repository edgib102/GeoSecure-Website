document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      initSite();
    }
}
window.addEventListener("resize", windowSizeUpdate);


function initSite(){
    windowSizeUpdate();
    console.log(document.getElementById("shutdown").clientHeight.toString());
    document.getElementById("SDpadder").style.height = document.getElementById("shutdown").clientHeight.toString()+"px";
    document.getElementById("HSpadder").style.height = document.getElementById("hardwareSoftwareSelect").clientHeight.toString()+"px";   
    document.getElementById("DPpadder").style.height = document.getElementById("dataPanel").clientHeight.toString()+"px";   
}

function windowSizeUpdate(){
    console.log("test");
    if( window.innerWidth <= 500){
        // document.getElementById("cellIcon").style.width = document.getElementById("cellIcon").offsetWidth *1.7 + "px";

    }
}
