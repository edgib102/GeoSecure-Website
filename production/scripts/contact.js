function adjustContentMargin() {
    const content = document.getElementById('contact');
    
    const contentHeight = content.offsetHeight;
    const footerHeight = document.getElementById('footerBorder').offsetHeight;
    const headerHeight = document.getElementById('header').offsetHeight;
    const viewportHeight = window.innerHeight;
    
    const remainingSpace = viewportHeight - contentHeight - headerHeight - footerHeight;
    content.style.marginBottom = remainingSpace > 0 ? `${remainingSpace}px` : '0';

    if(window.innerHeight >= 50){
        console.log("trueee")
        content.style.marginBottom = remainingSpace > 0 ? `${remainingSpace/2}px` : '0';
        content.style.marginTop = remainingSpace > 0 ? `${remainingSpace/2}px` : '0';
    } else{
        // content.style.marginBottom = remainingSpace > 0 ? `${remainingSpace}px` : '0';
    }
}

window.addEventListener("load", () => {


    window.addEventListener('resize', adjustContentMargin);
    window.addEventListener('load', adjustContentMargin);
    adjustContentMargin();
});