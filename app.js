const share = document.querySelector('.share1')
const container = document.querySelector('.container')
const shareContainer = document.querySelector('.share-container2')
const share2 = document.querySelector('.btn-share')

share.addEventListener('click',(e) => {
    const check = e.currentTarget.parentElement.parentElement.lastElementChild
    check.classList.toggle('show')

    if(container.getBoundingClientRect().height > 400){
        container.classList.add('show3')
        shareContainer.classList.add('show2')
    }
    share2.addEventListener('click',()=>{ 
        container.classList.remove('show3')
        shareContainer.classList.remove('show2')
    })
})



    

