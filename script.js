// TYPING ANIMATION

var typed = new Typed(".typing", {
    strings: ["Student", "Web Designer", "Web Developer", "Learner", "to be Data Scientist"],
    typeSpeed: 60,
    BackSpeed: 20,
    loop: true
})


// ASIDE

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSelection = allSection.length;


for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a");
    a.addEventListener('click', function () {
        for(let i=0;i<totalSelection;i++){
            allSection[i].classList.remove("back-section");
        }
        for (let j = 0; j < totalNavList; j++) {
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("back-section");
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active")
    })
}

// function showSection(element) {
//     for (let i = 0; i < totalSelection; i++) {
//         allSection[i].classList.remove("active");
//         allSection[i].style.overflowY = "hidden"; // Set all sections to hidden by default
//     }
//     const target = element.getAttribute("href").split("#")[1];
//     document.querySelector("#" + target).classList.add("active");
//     document.querySelector("#" + target).style.overflowY = "auto"; // Enable scrolling for the active section
// }

function sendEmail(){
    Email.send({
    Host : "smtp.elasticemail.com",
    Username : "ritvikgupta172@gmail.com",
    Password: "53A92AA78D5F617C96A43C265E2E3B9A72BE",
    To : "ritvikgupta172@gmail.com",
    From: document.querySelector(".em").value,
    Subject: document.querySelector(".sub").value, 
    Body:  document.querySelector(".bodyyy").value
    }). then (
    message = alert ("Message Sent")
    ) ;
}
