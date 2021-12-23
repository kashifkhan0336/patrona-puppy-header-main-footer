//JS MERA KAAM NHI
const faqQuestion = document.getElementsByClassName("question")

const faqAnswer = document.querySelectorAll(".answer")

Array.from(faqQuestion).forEach(el => {
    el.addEventListener("click", ()=>{
        Array.from(faqAnswer).forEach(element => {
            element.classList.toggle("u-faq-open")
        })
        
    })
})