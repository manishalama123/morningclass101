const pswInput = document.querySelector('.pass-field input')
const eyeIcon = document.querySelector('.pass-field i')

const list = document.querySelector(".requirement-list li")
const requirement = [
    {regex : /.{8,}/, index : 0}, // minimum 8 char
    {regex : /[0-9]/, index : 1}, //at least one number
    {regex : /[A-Z]/, index : 2}, // at least one uppercase
    {regex : /[a-z]/, index : 3}, // at least one lowercase
    {regex : /[^A-Za-z0-9]/, index : 4}, // at least one special character
    

]
eyeIcon.addEventListener('click', ()=>{
    //show eye icon
})

pswInput.addEventListener("keyup", ()=>{
    requirement.forEach(item=>{
        const isValid = item.regex.test[e.target.value]
        const requirementItem = list[item.index]
        //update class and icon
        if (isValid){
            requirementItem.classlist.add('valid')
            requirementItem.firstElementChild.classList= 'fa-solid fa-check'
        }
        else {
            requirementItem.classlist.remove('valid')
            requirement.firstElementChild.classList = 'da-solid fa-circle'
        }
    })
})