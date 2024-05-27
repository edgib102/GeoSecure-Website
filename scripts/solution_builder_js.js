let hasContent = false

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

        
            hasContent = false

            layoutList[i].style.display = "block";
            optionList = layoutList[i].querySelectorAll(".optionPanel")

            optionList.forEach(optionPanel => {
                optionPanel.addEventListener("click", () =>{
                    hasContent = true
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

async function sendEmail(email, message) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('message', message);

    try {
        const response = await fetch('https://formspree.io/f/mwkgjwpp', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            const jsonResponse = await response.json();
            console.log('Email sent successfully:', jsonResponse);
        } else {
            console.error('Error sending email:', response.statusText);
        }
    } catch (error) {
        console.error('Error sending email:', error);
    }
}

document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        

        window.addEventListener('resize', adjustContentMargin);
        window.addEventListener('load', adjustContentMargin);
        adjustContentMargin();

        const submissionElements = document.querySelectorAll(".submission")

        let solutionStep = 0;
        const layoutList = document.getElementsByClassName("optionLayout");
        initOptions(solutionStep, layoutList);

        document.querySelectorAll(".continueBtn").forEach(btn => {

            btn.addEventListener("click", () => {
                
                if(hasContent == true){
                    solutionStep++;
                }
                hasContent = initOptions(solutionStep, layoutList);
                console.log(hasContent)
                console.log(solutionStep)

                if(solutionStep == 5){
                    sendEmail(submissionElements[0].value, submissionElements[1].value)
                    console.log(submissionElements[0].value)
                }

            })
        })


    }
}
