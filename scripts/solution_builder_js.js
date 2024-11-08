let hasContent = false
let selection = null;

function adjustContentMargin() {
    const content = document.getElementById('mainContent');
    
    const contentHeight = content.offsetHeight;
    const footerHeight = document.getElementById('footerBorder').offsetHeight;
    const headerHeight = document.getElementById('header').offsetHeight;
    const viewportHeight = window.innerHeight;
    
    const remainingSpace = viewportHeight - contentHeight - headerHeight - footerHeight;
    // content.style.marginBottom = remainingSpace > 0 ? `${remainingSpace}px` : '0';

    if(window.innerHeight >= 50){
        console.log("trueee")
        content.style.marginBottom = remainingSpace > 0 ? `${remainingSpace/2}px` : '0';
        content.style.marginTop = remainingSpace > 0 ? `${remainingSpace/2}px` : '0';
    } else{
        // content.style.marginBottom = remainingSpace > 0 ? `${remainingSpace}px` : '0';
    }
}


// function initOptions(){
//     for (let i=0; i< layoutList.length)
// }

function initOptions(solutionStep, optionList){
    
    hasContent = false

    optionList.forEach(optionPanel => {
        optionPanel.addEventListener("click", () =>{
            
            switch (solutionStep) {
                case 0:
                    optionList.forEach( optionPanel => {
                        optionPanel.classList.remove("optionPanel-active")
                    });
                        
                    optionPanel.classList.add("optionPanel-active")
                    selection = optionPanel.querySelector("p").textContent
                    console.log(selection)
                    hasContent = true
                    
                    break;
                case 1:
                case 2:
                    panelText = optionPanel.querySelector("p").textContent
                    console.log(optionPanel)
                    optionPanel.classList.toggle("optionPanel-active")
                    if (optionPanel.classList.contains("optionPanel-active")){
                        hasContent = true
                    }else{
                        // console.log(dl)
                        hasContent = false
                        optionList.forEach(element => {
                            if(element.classList.contains("optionPanel-active")){
                                hasContent=true
                            }
                        });
                        
                    }

                    indexID = selection.indexOf(panelText) //[a, b, c] b
                    if(indexID != -1){
                        selection.splice(indexID, 1);
                    }else{
                        selection.push(optionPanel.querySelector("p").textContent);                                
                    }

                    // selection.forEach(element){
                    //     if(element == panelText){
                    //         element.re
                    //     }
                    // }


                    
                default:
                    break;
            }   
        })
    });
} 


async function sendEmail(industry, assetType, reason, email, fleetSize, state, name, phoneNumber, companyName) {

    const formData = new FormData();
    formData.append('Selected Industry', industry);
    formData.append('Selected Asset Type/s', assetType.join(', '));
    formData.append('Selected Reason/s', reason.join(', '));
    formData.append('Email Address', email);
    formData.append('Fleet Size', fleetSize);
    formData.append('State', state);
    formData.append('Name', name);
    formData.append('Phone Number', phoneNumber);
    formData.append('Company Name', companyName);
  
    // Use the fetch API to submit the form data
    fetch("/", {
      method: "POST",
      body: formData,
      headers: {
        "Content-Type": "multipart/form-data", // Netlify expects this
      }
    })
    .then(response => {
      if (response.ok) {
        // Handle success, e.g., show a confirmation message
        alert("Form successfully submitted!");
      } else {
        // Handle errors
        alert("Form submission failed. Please try again.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("There was an error submitting the form.");
    });
  }
  

    // const formData = new FormData();
    // formData.append('Selected Industry', industry);
    // formData.append('Selected Asset Type/s', assetType.join(', '));
    // formData.append('Selected Reason/s', reason.join(', '));
    // formData.append('Email Address', email);
    // formData.append('Fleet Size', fleetSize);
    // formData.append('State', state);
    // formData.append('Name', name);
    // formData.append('Phone Number', phoneNumber);
    // formData.append('Company Name', companyName);


    // document.querySelector('form[name="Solution Builder Form"] input[name="Industry"]').value = formData.get('Selected Industry');
    // document.querySelector('form[name="Solution Builder Form"] input[name="Assets/Vehicles"]').value = formData.get('Selected Asset Type/s');
    // document.querySelector('form[name="Solution Builder Form"] input[name="Reason"]').value = formData.get('Selected Reason/s');
    // document.querySelector('form[name="Solution Builder Form"] input[name="Company Name"]').value = formData.get('Company Name');
    // document.querySelector('form[name="Solution Builder Form"] input[name="Fleet Size"]').value = formData.get('Fleet Size');
    // document.querySelector('form[name="Solution Builder Form"] input[name="State"]').value = formData.get('State');
    // document.querySelector('form[name="Solution Builder Form"] input[name="Name"]').value = formData.get('Name');
    // document.querySelector('form[name="Solution Builder Form"] input[name="Email Address"]').value = formData.get('Email Address');
    // document.querySelector('form[name="Solution Builder Form"] input[name="Phone Number"]').value = formData.get('Phone Number');

    // document.forms["Solution Builder Form"].submit();

    // try {
    //     const response = await fetch('https://formspree.io/f/mwkgjwpp', {
    //         method: 'POST',
    //         body: formData,
    //         headers: {
    //             'Accept': 'application/json'
    //         }
    //     });

    //     if (response.ok) {
    //         const jsonResponse = await response.json();
    //         console.log('Email sent successfully:', jsonResponse);
    //     } else {
    //         console.error('Error sending email:', response.statusText);
    //     }
    // } catch (error) {
    //     console.error('Error sending email:', error);
    // }

    // try{
    //     const handleSubmit = event => {
    //         event.preventDefault();
          
    //         const myForm = event.target;
    //         const formData = new FormData(myForm);
          
    //         fetch("/", {
    //           method: "POST",
    //           headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //           body: new URLSearchParams(formData).toString()
    //         })
    //           .then(() => console.log("Form successfully submitted"))
    //           .catch(error => alert(error));
    //       };
          
    //       document.querySelector("form").addEventListener("submit", handleSubmit);
          
    // } catch (error) {
    //     console.error('Error sending email:', error);
    // }

document.onreadystatechange = () => {
    if (document.readyState == "complete") {
        

        window.addEventListener('resize', adjustContentMargin);
        window.addEventListener('load', adjustContentMargin);
        adjustContentMargin();

        const submissionElements = document.querySelectorAll(".submission")

        let solutionStep = 0;
        let selections = [];
        const layoutList = document.getElementsByClassName("optionLayout");
        let optionList = layoutList[solutionStep].querySelectorAll(".optionPanel")

        imgList = document.querySelectorAll("[data-inf-id]")

        console.log(imgList)

        initOptions(solutionStep, optionList);

        document.querySelectorAll(".continueBtn").forEach(btn => {

            btn.addEventListener("click", () => {
                        

                imgList.forEach(img => {
                    if(img.getAttribute('data-inf-id') != (solutionStep+1)){
                        console.log("step:" + solutionStep + "  "+ img)
                        img.style.display = "none"
                        console.log(img.getAttribute('data-inf-id'))
                    }else{
                        img.style.display = "block"
                        
                    }
                });
                
                if(solutionStep == 3 || solutionStep == 4){
                    submissionList = layoutList[solutionStep].querySelectorAll(".submission")
                     
                    isNull = false;
                    selection = []

    
                    submissionList.forEach(element => {
                        if(element.classList.contains("optional")){
                            isNull = false;
                        }
                        else if (element.value == ""){
                            isNull = true;
                        }
                        selection.push(element.value)
                        console.log(element.value)
                        
            
                    });
                    console.log(selection)
    
                    if(isNull != true){
                        hasContent = true;
                    }else{
                        selection = null
                        console.log("is null")
                        hasContent = false
                        // solutionStep --;
                    }
                }

                if(hasContent == true){
                    solutionStep++;

                    for (let i = 0; i < layoutList.length; i++) {
                        if(i == solutionStep){
                            initOptions(solutionStep, optionList)            
                            layoutList[solutionStep].style.display = "block";
                        }else{
                            layoutList[i].style.display = "none";
                        }
                    }

                    optionList = layoutList[solutionStep].querySelectorAll(".optionPanel")
                    initOptions(solutionStep, optionList)
                }else{
                    noOption = document.querySelectorAll(".noOption")
                    console.log(noOption)
                    noOption[solutionStep].style.display = "block";
                }

                (selection == null || selection.length === 0) ? null : selections.push(selection);

                console.log(selections)

                if(solutionStep == 5){
                    sendEmail(
                        selections[0], 
                        selections[1], 
                        selections[2], 
                        selections[4][1], 
                        selections[3][1],
                        selections[3][2], 
                        selections[4][0], 
                        selections[4][2], 
                        selections[3][0], 
                    );
                }

                selection = []

                adjustContentMargin()
                

            })
        })


    }
}
