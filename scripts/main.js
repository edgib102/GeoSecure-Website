function createPadder (element){
    existingPadders = document.querySelectorAll(".padder")

    console.log(existingPadders)
    if(existingPadders != null){
        existingPadders.forEach(element => {
            element.remove();
        });        
    }


    const padder = document.createElement('div');
            
    padder.style.height = element.clientHeight.toString()+"px"
    padder.classList.add("padder");
    element.parentNode.insertBefore(padder, element.nextSibling);
}

window.addEventListener("load", () => {

    const solidBgElements = document.querySelectorAll('.solidBg');

    if (solidBgElements != null){
        solidBgElements.forEach((element) => {
            // Create a new div element
            createPadder(element);

            window.addEventListener("resize", () => {
                createPadder(element);
            })
        });        
    }


    var DDlist = document.getElementsByClassName("headerDD");
    console.log(DDlist)
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