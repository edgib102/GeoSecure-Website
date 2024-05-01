document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        windowSizeUpdate();
        initSite();
        window.addEventListener("resize", windowSizeUpdate);

        var DDlist = document.getElementsByClassName("headerDD");
        console.log(DDlist)
        canClick = true;
        for (var i=0; i < DDlist.length; i++){
            
            DDlist[i].addEventListener("click", mobileDDtoggle);        
        

            // console.log(element)
        }
        // DDlist.forEach(element => {
        //     addEventListener("click", mobileDDtoggle(element));
        // });

        // document.getElementById("DDcontent").setPointerCapture = function (){
        //     document.getElementById("DDcontent").style.display= "block !important"; 
        // }
    }
}


function initSite(){
    console.log(document.getElementById("shutdown").clientHeight.toString());
    document.getElementById("SDpadder").style.height = document.getElementById("shutdown").clientHeight.toString()+"px";
    document.getElementById("HSpadder").style.height = document.getElementById("hardwareSoftwareSelect").clientHeight.toString()+"px";   
    document.getElementById("DPpadder").style.height = document.getElementById("dataPanel").clientHeight.toString()+"px";   
}

function windowSizeUpdate(){
    console.log("test");
    // initSite();
    initSite();

    if( window.innerWidth <= 500){
        // document.getElementById("cellIcon").style.width = document.getElementById("cellIcon").offsetWidth *1.7 + "px";

    }
}

function mobileDDtoggle(){
    DDitem = document.getElementById("DDbg");
    console.log("fgogogogo")
    if(canClick == true){
        if (DDitem.style.display === "block") {
            DDitem.style.display = "none";
        } else {
            DDitem.style.display = "block";
        }   
        canClick = false;
        setTimeout(() => {
            canClick = true
        }, 50);          
    }
}
