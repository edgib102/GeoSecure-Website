window.addEventListener("load", () => {
    thumbs = document.querySelectorAll(".selector-thumb")
    solutionPanels = document.querySelectorAll(".solution-panel")
    for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].addEventListener("click", () => {
            console.log("ejkfoj")
            document.getElementById("highlighted").removeAttribute("id")
            thumbs[i].setAttribute('id','highlighted');

            for (let x = 0; x < solutionPanels.length; x++) {
                const panel = solutionPanels[x];
                if (thumbs[i].getAttribute("data-id") == panel.getAttribute("data-id")) {
                    console.log("sucses")
                    document.getElementById("active").removeAttribute("id")
                    panel.setAttribute('id','active');
                }
            }
        })
        console.log(thumbs[i])
    }

    
    const box = document.getElementById('selector-rack');

    let isDown = false;
    let startX;
    let startY;
    let scrollLeft;
    let scrollTop;

    box.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - box.offsetLeft;
        startY = e.pageY - box.offsetTop;
        scrollLeft = box.scrollLeft;
        scrollTop = box.scrollTop;
        box.style.cursor = 'grabbing';
    });

    box.addEventListener('mouseleave', () => {
        isDown = false;
        box.style.cursor = 'grab';
    });

    box.addEventListener('mouseup', () => {
        isDown = false;
        box.style.cursor = 'grab';
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - box.offsetLeft;
        const y = e.pageY - box.offsetTop;
        const walkX = (x - startX) * 1; // Change this number to adjust the scroll speed
        const walkY = (y - startY) * 1; // Change this number to adjust the scroll speed
        box.scrollLeft = scrollLeft - walkX;
        box.scrollTop = scrollTop - walkY;
    });


});