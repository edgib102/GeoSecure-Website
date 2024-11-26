
document.onreadystatechange = function () {

    //circle element
    circleElements = document.querySelectorAll(".circle-data-element");
    lineElementContainer = document.getElementById("line-content");

    updateCircleElement(circleElements, lineElementContainer);
    window.onresize = updateCircleElement(circleElements, lineElementContainer)


    window.addEventListener('resize', () =>{
        updateCircleElement(circleElements, lineElementContainer);
    });

    window.addEventListener('resize', updateCircleElement(circleElements, lineElementContainer))

    var glide = new Glide('#carousel-1', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
        breakpoints: {
          800: {
            perView: 2
          },
          480: {
            perView: 1
          }
        }
      })
      
      glide.mount()


}




function updateCircleElement(circleElements, lineElementContainer) {


    if(window.innerWidth >= 550){
        borderMargin = getComputedStyle(document.body).getPropertyValue('--borderMargin');
        borderMargin = parseFloat(borderMargin.match(/[+-]?\d+(\.\d+)?/)[0]);


        fontSize = parseFloat(getComputedStyle(document.body).getPropertyValue('font-size'));
        
        borderMargin = borderMargin* fontSize
        // console.log(fontSize)
        // console.log(borderMargin)

        // if

        elementOffset = document.getElementById("data-panel").offsetHeight/2 -130
        console.log(document.getElementById("data-panel").offsetHeight/2)

        while (lineElementContainer.hasChildNodes()){
            lineElementContainer.removeChild(lineElementContainer.firstChild)
        }
        
        for (let i = 0; i < circleElements.length; i++) {
            const element = circleElements[i];
            const circleDisplacement = Math.PI*2/circleElements.length*i
            translateAmount = [Math.sin(circleDisplacement)*elementOffset, Math.cos(circleDisplacement)*elementOffset]

            element.style.transform = `translate(${translateAmount[0]}px,${(translateAmount[1]+elementOffset)*.85}px)`

        }

        centerIcon = document.getElementById("center-icon");
        centerIcon.style.transform = `translateY(${elementOffset-centerIcon.offsetHeight/8.5}px)`
        // centerIcon.style.transform = `translateX(${elementOffset+centerIcon.offsetHeight/2}px)`        
    } else{
        // console.log(';ff')
        for(let i = 0; i < circleElements.length; i++){
            const element = circleElements[i];
            element.style.transform = null
        }
    }


}

