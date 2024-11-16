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

// canClick =
window.addEventListener("load", () => {


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

  document.body.style = "display: block;"

  var expansionElements = document.getElementsByClassName("dropdown-selected");
  // console.log(expansionElements)
  linkContainer = document.getElementById("DDlinks")


  // backDropdownBtns = getElementsByClassName("back-dropdown")
  // Array.from(backDropdownBtns).forEach(element => {
  //   element.addEventListener("click")
  // });


  // Array.from(expansionElements).forEach(element => {
  //   console.log(element.offsetHeight)

  //   element.style.height = `${linkContainer.offsetHeight}px`;
  //   element.style.top = `-${element.getBoundingClientRect().top - linkContainer.getBoundingClientRect().top}px`;
  //   // element.style.height = document.
  // });
})

function mobileDDtoggle(){
    DDitem = document.getElementById("DDbg");
    if(canClick == true){
        if (DDitem.style.display === "block") {
            DDitem.style.display = "none";
        } else {
            DDitem.style.display = "block";
            // console.log("ddd")
            // var mainLinks = document.getElementById("main-links")
            // console.log(document.getElementById("DDcontent").offsetWidth)
            // mainLinks.style.width = `${document.getElementById("DDcontent").offsetWidth}px`
        }   
        canClick = false;
        setTimeout(() => {
            canClick = true
        }, 10);          
    }
}
var mainLinks = null;
var secondaryLinks = null;

function dropdownForwards(element){
  var DDelements = document.getElementsByClassName("dropdown-selected") 

  DDelements = document.getElementsByClassName("dropdown-selected")
  for (let i = 0; i < DDelements.length; i++) {
    const DDelmt = DDelements[i]
    if(DDelements[i] != DDelements[element.getAttribute("data-value")]){
      DDelmt.style.display = "none"
    }else{
      DDelmt.style.display = "block"
    }
    
  }

  secondaryLinks = document.getElementById("secondary-links")
  secondaryLinks.classList.add("scroll-left-secondary")

  mainLinks = element.parentNode.parentNode
  mainLinks.classList.add("scroll-left-main")

  secondaryLinks.addEventListener("animationend", () =>{
    secondaryLinks.style.left = "0";
    secondaryLinks.classList.remove("scroll-left-secondary")
  })
  mainLinks.addEventListener("animationend", () =>{
    mainLinks.style.right = "100%";
    mainLinks.classList.remove("scroll-left-main")
  })

}

function dropdownBack(element){

  secondaryLinks.classList.add("scroll-right-secondary")
  mainLinks.classList.add("scroll-right-main")

  secondaryLinks.addEventListener("animationend", () =>{
    secondaryLinks.style.left = "100%";
    secondaryLinks.classList.remove("scroll-right-secondary")
  })
  mainLinks.addEventListener("animationend", () =>{
    mainLinks.style.right = "0";
    mainLinks.classList.remove("scroll-right-main")
  })


}
