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

    const numberElements = document.querySelectorAll('.increment');
    const duration = 2000; // Duration in milliseconds
    const frameRate = 60; // Frames per second
    const sharpness = 3; // Sharpness of the easing function
    const totalFrames = duration / (1000 / frameRate);

    function easeOutCustom(t, sharpness) {
      return 1 - Math.pow(1 - t, sharpness);
    }

    function updateNumber(element, target) {
      let currentFrame = 0;

      function animate() {
        currentFrame++;
        const progress = easeOutCustom(currentFrame / totalFrames, sharpness);
        const currentValue = Math.ceil(target * progress);
        
        element.innerText = currentValue.toLocaleString();

        if (currentFrame < totalFrames) {
          requestAnimationFrame(animate);
        } else {
          element.innerText = target.toLocaleString();
        }
      }

      animate();
    }

    numberElements.forEach(element => {
      const target = +element.getAttribute('data-target');
      updateNumber(element, target);
    });

    const solidBgElements = document.querySelectorAll('.solidBg');

    // if (solidBgElements != null) {
    //     solidBgElements.forEach((element) => {
    //         createOrUpdatePadder(element);

    //         window.addEventListener('resize', () => {
    //             createOrUpdatePadder(element);
    //         });
    //     });
    // }


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

})

function mobileDDtoggle(){
    DDitem = document.getElementById("DDbg");
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
