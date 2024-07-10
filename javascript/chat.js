const inputsSearchUsers = document.getElementById('inputsSearchUsers');
const title_userandName = document.querySelectorAll('.title_userandName span');
const content_users = document.querySelector('.content_users');
inputsSearchUsers.addEventListener('keyup' , (e) => {

  contentUsers(e.target.value)
});

function contentUsers (value) {
title_userandName.forEach(item => {
    let Chatitem = item.textContent.toLowerCase().trim()
    if(Chatitem.includes(value)) {
        item.parentElement.parentElement.style.display = 'flex';   
    }else {
        item.parentElement.parentElement.style.display = 'none';   
    } 
})
  //.toLowerCase()
}
window.addEventListener('load' , () => {
    let mainChat_content = document.querySelector('.mainChat_content');
    mainChat_content.scrollTo(0,mainChat_content.scrollHeight);
    if (window.innerWidth <= 768) {
     let switchBTNContentMobile = document.querySelector('.boxSwitchMainContent');
     switchBTNContentMobile.style.display = 'flex';
     switchBTNContentMobile.addEventListener('click' , () => {
      content_users.style.left = '0'
     })
     }
})