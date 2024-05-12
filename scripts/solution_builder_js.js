document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        document.getElementById("mainContent").style.height = "calc(100vh - " + document.getElementById("footerBorder").clientHeight+"px - " + document.getElementById("header").clientHeight+"px)";
        console.log("calc(100vh - " + document.getElementById("footerBorder").clientHeight+"px - " + document.getElementById("header").clientHeight+")");
    }
}