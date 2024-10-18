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
                    document.getElementById("active").removeAttribute("id")
                    panel.setAttribute('id','active');
                }
            }
        })
        console.log(thumbs[i])
    }

    

    var glide = new Glide('.glide', {
        type: 'carousel',
        perView: 4,
        // autoplay: 4000,
        // hoverPause: checkbox.checked,
        // focusAt: 'center',
        gap: 10,
        breakpoints: {
          800: {
            perView: 3
          },
          500: {
            perView: 2
          },
          250: {
            perView: 1
          }
        },
        peek: 0
        // grow: 150,
      })
    

    glide.mount()

    // new Glide('.glide').mount()

});
