window.addEventListener("load", () => {
    thumbs = document.querySelectorAll(".selector-thumb")
    solutionPanels = document.querySelectorAll(".solution-panel")
    for (let i = 0; i < thumbs.length; i++) {
        thumbs[i].addEventListener("click", () => {

            updateSlide(thumbs[i])

            // document.getElementById("highlighted").removeAttribute("id")

            // if(thumbs[i].parentElement.className.includes("glide__slide")){
            //     thumbs[i].parentElement.setAttribute('id','highlighted');
            // }else{
            //     thumbs[i].setAttribute('id','highlighted');                
            // }


            // for (let x = 0; x < solutionPanels.length; x++) {
            //     const panel = solutionPanels[x];
            //     if (thumbs[i].getAttribute("data-id") == panel.getAttribute("data-id")) {
            //         document.getElementById("active").removeAttribute("id")
            //         panel.setAttribute('id','active');
            //     }
            // }
        })
        console.log(thumbs[i])
    }

    

    var glide = new Glide('.glide', {
        type: 'carousel',
        perView: 4,
        // autoplay: 4000,
        // hoverPause: checkbox.checked,
        // focusAt: 'center',
        // gap: 10,
        // peek: {
        //     before: 1000,
        //     after: 100,
        // },
        breakpoints: {
          800: {
            perView: 3
          },
          500: {
            perView: 2,
            focusAt: 0
          },
          350: {
            perView: 1
          }
        },
        // peek: 0
        // grow: 150,
      })
    

    glide.mount()

    glide.on('run.after', function() {
        active = document.querySelector(".glide__slide--active")
        // console.log(active)
        updateSlide(active.querySelector(".selector-thumb"))

      })

    // new Glide('.glide').mount()

});

function updateSlide(thumb) {
    
    document.getElementById("thumb-highlighted").removeAttribute("id")

    if(thumb.parentElement.className.includes("glide__slide")){
        thumb.parentElement.setAttribute('id','thumb-highlighted');
    }else{
        thumb.setAttribute('id','thumb-highlighted');                
    }


    for (let x = 0; x < solutionPanels.length; x++) {
        const panel = solutionPanels[x];
        if (thumb.getAttribute("data-id") == panel.getAttribute("data-id")) {
            document.getElementById("active").removeAttribute("id")
            panel.setAttribute('id','active');
        }
    }
}
