function createOrUpdatePadder(element) {
    let padder = element.nextElementSibling;
    
    if (padder && padder.classList.contains('padder')) {
        padder.style.height = element.clientHeight.toString() + "px";
    } else {
        padder = document.createElement('div');
        padder.style.height = element.clientHeight.toString() + "px";
        padder.classList.add('padder');
        element.parentNode.insertBefore(padder, element.nextSibling);
    }
}
window.addEventListener("load", () => {

    const solidBgElements = document.querySelectorAll('.solidBg');

    if (solidBgElements != null) {
        solidBgElements.forEach((element) => {
            createOrUpdatePadder(element);

            window.addEventListener('resize', () => {
                createOrUpdatePadder(element);
            });
        });
    }


    var DDlist = document.getElementsByClassName("headerDD");
    canClick = true;

    document.getElementById("DDbg").addEventListener("click", function (e) {
        // console.log(e.target.id);
        if(e.target.id == "DDbg"){
            mobileDDtoggle();
        }
    });  

    for (var i=0; i < DDlist.length; i++){
        
        DDlist[i].addEventListener("click", mobileDDtoggle);        

    }

})

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