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
            console.log("ddd")
            var mainLinks = document.getElementById("main-links")
            console.log(document.getElementById("DDcontent").offsetWidth)
            mainLinks.style.width = `${document.getElementById("DDcontent").offsetWidth}px`
        }   
        canClick = false;
        setTimeout(() => {
            canClick = true
        }, 50);          
    }
}

function dropdownBack(element){
  // console.log(x)
  element.parentNode.classList.add("inactive-dd-expansion")
}
function dropdownForwards(element){
  // console.log(x)
  element.parentNode.parentNode.classList.add("inactive-dd-expansion")
}
