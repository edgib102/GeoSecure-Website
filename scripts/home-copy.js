const elementOffset = 400

document.addEventListener('DOMContentLoaded', function() {
    circleElements = document.querySelectorAll(".circle-data-element");
    lineElementContainer = document.getElementById("line-content");

    updateCircleElement(circleElements, lineElementContainer);
    window.onresize = updateCircleElement(circleElements, lineElementContainer)

    centerIcon = document.getElementById("center-icon");
    centerIcon.style.transform = `translateY(${elementOffset-centerIcon.offsetWidth/2}px)`

    window.addEventListener('resize', () =>{
        updateCircleElement(circleElements, lineElementContainer);
    });

    window.addEventListener('resize', updateCircleElement(circleElements, lineElementContainer))

    // while (true){
    //     console.log("ss")
    //     for (let i = 0; i < circleElements.length; i++) {
    //         const element = circleElements[i];
    //         style = window.getComputedStyle(element).getPropertyValue("translate")
    //         console.log(style)
    //         // element.style.transform = `translate(${translateAmount[0]}px,${translateAmount[1]+elementOffset}px)`
    //     }
    // }
});

function updateCircleElement(circleElements, lineElementContainer) {

    while (lineElementContainer.hasChildNodes()){
        lineElementContainer.removeChild(lineElementContainer.firstChild)
    }
    
    for (let i = 0; i < circleElements.length; i++) {
        const element = circleElements[i];
        const circleDisplacement = Math.PI*2/circleElements.length*i
        translateAmount = [Math.sin(circleDisplacement)*elementOffset, Math.cos(circleDisplacement)*elementOffset]

        element.style.transform = `translate(${translateAmount[0]}px,${(translateAmount[1]+elementOffset)*.85}px)`
        // console.log(`translate(${translateAmount[0]}px, ${translateAmount[1]}px)`)


        const parentPos = lineElementContainer.parentNode.getBoundingClientRect();
        const childPos  = element.getBoundingClientRect();
        const relativePos = {};

        relativePos.top    = childPos.top - parentPos.top,
        relativePos.right  = childPos.right - parentPos.right,
        relativePos.bottom = childPos.bottom - parentPos.bottom,
        relativePos.left   = childPos.left - parentPos.left;

        console.log(childPos)
        

        const lineSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        // lineSVG.setAttribute('style', 'border: 1px solid black');
        lineSVG.setAttribute('width', window.innerWidth);
        lineSVG.setAttribute('height', lineElementContainer.parentNode.clientHeight);
        lineSVG.setAttribute('class', "svg-line");
        
        lineSVG.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
        lineElementContainer.appendChild(lineSVG);
        // lineElements.push(lineSVG);

        document.createElementNS("http://www.w3.org/2000/svg", "svg");
        var newLine = document.createElementNS('http://www.w3.org/2000/svg','line');
        newLine.setAttribute('id','line2');
        newLine.setAttribute('x1',relativePos.left+elementOffset-(element.offsetWidth/2));
        newLine.setAttribute('y1', relativePos.top+(element.offsetHeight/2));
        newLine.setAttribute('x2',window.innerWidth/2); 
        newLine.setAttribute('y2',elementOffset);
        newLine.setAttribute("stroke", "#0B2149");
        newLine.setAttribute("stroke-width", "5px")

        lineSVG.appendChild(newLine);
    }
}