
document.onreadystatechange = function () {
    // if (document.readyState == "complete") {
    windowSizeUpdate();
    initSite();
    window.addEventListener("resize", windowSizeUpdate);

    var DDlist = document.getElementsByClassName("headerDD");
    console.log("DDlist")
    canClick = true;

    document.getElementById("DDbg").addEventListener("click", function (e) {
        // console.log(e.target.id);
        if(e.target.id == "DDbg"){
            mobileDDtoggle();
        }
    });        

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
    // }


    const submissionElements = document.querySelectorAll(".submission")

    let solutionStep = 0;
    let selections = [];
    const layoutList = document.getElementsByClassName("optionLayout");
    let optionList = layoutList[solutionStep].querySelectorAll(".optionPanel")

    initOptions(solutionStep, optionList);

    document.querySelectorAll(".continueBtn").forEach(btn => {

        btn.addEventListener("click", () => {
            
            
            if(solutionStep == 3 || solutionStep == 4){
                submissionList = layoutList[solutionStep].querySelectorAll(".submission")
                 
                isNull = false;
                selection = []


                submissionList.forEach(element => {
                    if (element.value == ""){
                        isNull = true;
                    }
                    selection.push(element.value)
                    console.log(element.value)
                    
        
                });
                console.log(selection)

                if(isNull != true){
                    hasContent = true;
                }else{
                    selection = null
                    console.log("is null")
                    hasContent = false
                    // solutionStep --;
                }
            }

            if(hasContent == true){
                solutionStep++;

                for (let i = 0; i < layoutList.length; i++) {
                    if(i == solutionStep){
                        initOptions(solutionStep, optionList)            
                        layoutList[solutionStep].style.display = "block";
                    }else{
                        layoutList[i].style.display = "none";
                    }
                }

                optionList = layoutList[solutionStep].querySelectorAll(".optionPanel")
                initOptions(solutionStep, optionList)
            }else{
                noOption = document.querySelectorAll(".noOption")
                console.log(noOption)
                noOption[solutionStep].style.display = "block";
            }

            (selection == null || selection.length === 0) ? null : selections.push(selection);

            // if(solutionStep == 5){
            //     sendEmail(
            //         selections[0], 
            //         selections[1], 
            //         selections[2], 
            //         selections[4][1], 
            //         selections[3][1],
            //         selections[3][2], 
            //         selections[4][0], 
            //         selections[4][2], 
            //         selections[3][0], 
            //     );
            // }


            console.log(selections)
            selection = []

            

        })
    })



}


function initSite(){
    console.log("etetetete")
    // document.getElementById("SDpadder").style.height = document.getElementById("shutdown").clientHeight.toString()+"px";
    document.getElementById("HSpadder").style.height = document.getElementById("hardwareSoftwareSelect").clientHeight.toString()+"px";   
    document.getElementById("DPpadder").style.height = document.getElementById("dataPanel").clientHeight.toString()+"px";   
}

function windowSizeUpdate(){
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

function initOptions(solutionStep, optionList){
    
    hasContent = false

    optionList.forEach(optionPanel => {
        optionPanel.addEventListener("click", () =>{
            
            switch (solutionStep) {
                case 0:
                    optionList.forEach( optionPanel => {
                        optionPanel.classList.remove("optionPanel-active")
                    });
                        
                    optionPanel.classList.add("optionPanel-active")
                    selection = optionPanel.querySelector("p").textContent
                    console.log(selection)
                    hasContent = true
                    
                    break;
                case 1:
                case 2:
                    panelText = optionPanel.querySelector("p").textContent
                    console.log(optionPanel)
                    optionPanel.classList.toggle("optionPanel-active")
                    if (optionPanel.classList.contains("optionPanel-active")){
                        hasContent = true
                    }else{
                        // console.log(dl)
                        hasContent = false
                        optionList.forEach(element => {
                            if(element.classList.contains("optionPanel-active")){
                                hasContent=true
                            }
                        });
                        
                    }

                    indexID = selection.indexOf(panelText) //[a, b, c] b
                    if(indexID != -1){
                        selection.splice(indexID, 1);
                    }else{
                        selection.push(optionPanel.querySelector("p").textContent);                                
                    }

                    // selection.forEach(element){
                    //     if(element == panelText){
                    //         element.re
                    //     }
                    // }


                    
                default:
                    break;
            }   
        })
    });
} 
