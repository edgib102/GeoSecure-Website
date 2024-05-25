function adjustContentMargin() {
    const content = document.getElementById('mainContent');
    
    const contentHeight = content.offsetHeight;
    const footerHeight = document.getElementById('footerBorder').offsetHeight;
    const headerHeight = document.getElementById('header').offsetHeight;
    const viewportHeight = window.innerHeight;
    
    const remainingSpace = viewportHeight - contentHeight - headerHeight - footerHeight;
    content.style.marginBottom = remainingSpace > 0 ? `${remainingSpace}px` : '0';
}


function initOptions(solutionStep, layoutList){

    for (let i = 0; i < layoutList.length; i++) {
        if(i == solutionStep){
            layoutList[i].style.display = "block";
            optionList = layoutList[i].querySelectorAll(".optionPanel")
            optionList.forEach(optionPanel => {
                optionPanel.addEventListener("click", () =>{
                    console.log(solutionStep)
                    switch (solutionStep) {
                        case 0:
                            optionList.forEach( optionPanel => {
                                optionPanel.classList.remove("optionPanel-active")
                            });
                                
                            optionPanel.classList.add("optionPanel-active")
                            break;
                        case 1:
                        case 2:
                            optionPanel.classList.toggle("optionPanel-active")
                        default:
                            break;
                    }
                })
            });
        } else{
            layoutList[i].style.display = "none";
        }
        
    }
}

function sendEmail() {
    var name = "John Doe";
    var email = "johndoe@example.com";
    var message = "Hello, this is a test message.";

    var data = {
        name: name,
        email: email,
        message: message
    };

    console.log(data)

    fetch('send_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.text())
    .then(responseText => {
        console.log(responseText);
        alert(responseText);
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Oops! Something went wrong.');
    });
}

document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        
        sendEmail();
        window.addEventListener('resize', adjustContentMargin);
        window.addEventListener('load', adjustContentMargin);
        adjustContentMargin();

        let solutionStep = 0;
        const layoutList = document.getElementsByClassName("optionLayout");
        initOptions(solutionStep, layoutList);

        document.querySelectorAll(".continueBtn").forEach(btn => {

            btn.addEventListener("click", () => {

                solutionStep++;
                console.log(solutionStep)
                console.log(new Date().toLocaleTimeString())
                initOptions(solutionStep, layoutList);
            })
        })


    }
}
