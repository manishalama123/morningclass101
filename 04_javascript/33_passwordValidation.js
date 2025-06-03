const pswInput = document.querySelector('input')

const list = document.querySelectorAll('.requirement-list li')

const icon = document.querySelector('.show-psw i')

const requirement = [
    {regex:/.{8,}/,index:0},
    {regex:/[0-9]/,index:1},
    {regex:/[A-Z]/,index:2},
    {regex:/[a-z]/,index:3},
    {regex:/[@._&%#?]/,index:4}

]


pswInput.addEventListener('keyup', e=>{
    if(pswInput.value.length>0){
        icon.classList.remove('no-icon')
        icon.classList.add('show-icon')
    }
    else{
        icon.classList.remove('show-icon')
        icon.classList.add('no-icon')
    }

    requirement.forEach(item =>{
        const isValid = item.regex.test(e.target.value) // test, target
        const requirementItem = list[item.index]

        if(isValid){
            requirementItem.classList.add('valid')
            requirementItem.firstElementChild.className = 'fa-solid fa-check'
        }
        else{
            requirementItem.classList.remove('valid')
            requirementItem.firstElementChild.className = 'fa-solid fa-circle'
        }
    })
})

icon.addEventListener('click', ()=>{
    if(pswInput.type=='password'){
        pswInput.type='text'
        icon.classList.remove('fa-eye')
        icon.classList.add('fa-eye-slash')
    }
    else{
        pswInput.type='password'
        icon.classList.remove('fa-eye-slash')
        icon.classList.add('fa-eye')
    }
})