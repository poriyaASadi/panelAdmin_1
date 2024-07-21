const inputsSearchUsers = document.getElementById('inputsSearchUsers');
const title_userandName = document.querySelectorAll('.title_userandName span');
const content_users = document.querySelector('.content_users');
const inputChatMassieg = document.querySelector('#inputChatMassieg');
const mainChat_content = document.querySelector('.mainChat_content');
const submitMasseage = document.querySelector('.submitMasseage');
const voiceMasseage = document.querySelector('#voiceMasseage');
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
})

inputChatMassieg.addEventListener('keyup' , (event) => {
  let ValueMassigaUser = event.target.value;
  if (event.keyCode === 13) {genarytorMasseig(ValueMassigaUser)} 
})
submitMasseage.addEventListener('click' , () => {
  genarytorMasseig(inputChatMassieg.value);
})

function genarytorMasseig (massaege,user) {
  let newDateForMasseage = new Date();
  let time = `${newDateForMasseage.getHours()} : ${newDateForMasseage.getMinutes()}`;
  mainChat_content.insertAdjacentHTML('beforeend' , `
    <div class="pepoleMasseage">
            <span>Andri Thomas</span>
            <p>${massaege.trim()}</p>
          <span>${time}</span>      
        </div>
`)
}

voiceMasseage.addEventListener('click' , togleVoice)
let can_recorder = false;
let is_recording = false;
let recorder = null;
let chunks = [];

function SetupAudio () {
  console.log('setUp :)');
  if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
    navigator.mediaDevices
    .getUserMedia({
      audio : true
    })
    .then(setupStream)
    .catch(err => console.error(err));
  }
}
SetupAudio()

function setupStream (stream) {
  recorder = new MediaRecorder(stream);
  recorder.ondataavailable = e => {
    console.log(e.data);
    chunks.push(e.data);
  }
  recorder.onstop = e => {
    const blob = new Blob(chunks , {type : "audio/ogg; codecs=opus"});
    chunks = [];
    const audioUrl = window.URL.createObjectURL(blob);
    console.log(audioUrl);
    playBack.src = audioUrl
  }
  can_recorder = true;
}
function togleVoice  () {
  if (!can_recorder) return;
  
  is_recording = !is_recording;

  if (is_recording) {
  recorder.start();	
  }else {
    recorder.stop();
  }
}