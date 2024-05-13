document.onreadystatechange = function () {
    if (document.readyState == "complete") {
        
        var optionList = document.getElementsByClassName("optionPanel");

        var selectedOptions = Array(6);
        
        for (let i = 0; i < optionList.length; i++) {


            optionList[i].addEventListener("click", function() {
                selectedOptions[i] = optionList[i].getAttribute("data-id")
                console.log(selectedOptions);
            })
            
        }


        document.getElementById("continueBtn")

        document.getElementById("mainContent").style.height = "calc(100vh - " + document.getElementById("footerBorder").clientHeight+"px - " + document.getElementById("header").clientHeight+"px)";
        console.log("calc(100vh - " + document.getElementById("footerBorder").clientHeight+"px - " + document.getElementById("header").clientHeight+")");
    }
}