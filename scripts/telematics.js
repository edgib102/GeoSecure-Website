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

});