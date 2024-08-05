const $ = document
// resultSearchInput 
const resultSearchInput = $.getElementById('resultSearchInput');
const search_header = $.querySelector('.search_header input');
// btn_menu_mobile 
const btn_menu_mobile = $.querySelector('.btn_menu_mobile');
const listMobile = $.querySelector('.listMobile');

const ulMain_opration = $.querySelectorAll('.ulMain_opration li')
// ul main opration end
// text many for switch show or hidden 
const titleValue_leftMain = $.querySelector('.titleValue_leftMain h2');
const titleicon_leftMain = $.querySelector('.icon_switchMainleft_value');
// text many finish
// box_item_header_title 
const box_item_header_title = $.querySelector('.box_item_header_title');

// document.addEventListener('readystatechange', () => {
// })
window.addEventListener('DOMContentLoaded' , () => {

    if (window.location.pathname == 'index.html'){
    // clint js libres
    var client = new ClientJS(); // Create A New Client Object
    var browser = client.getBrowser(); 
    if (browser ===  'Chrome' || browser === 'Firefox') {
        if  (window.location.pathname.includes('index.html')){
            swalfunc('Welcome',`your Browser is ${browser}`,'info','#333','#fff');
        }
        // genarytor function sweet alert 2
        function swalfunc (title,text,icon,background,color) {
            Swal.fire({
                title:title,
                text: text,
                icon: icon,
                confirmButtonColor: "#3a6ff8",
                buttonsStyling : 'false',
                animation : 'true',
                width:'50%',
                background: background,
                color:color,
                confirmButtonText: 'Tankes'
                })
        }
    }else {
    window.location = 'https://github.com/poriyaASadi/'
    }
    }

})
 window.onload = () => {
    if (window.innerWidth > 1100) {
        $.documentElement.addEventListener('mousemove' , (e) => {
            creatCanvas(e.clientX,e.clientY);
         })
         function creatCanvas (X,Y) {
            const mycanvas = document.querySelector('canvas');
            const ctx = mycanvas.getContext('2d');
            mycanvas.width = window.innerWidth;
            mycanvas.height = window.innerHeight;
            // ctx.lineJoin = 'round';
            //  ctx.strokeStyle = 'blue';
            ctx.shadowColor = 'blue';
            ctx.shadowBlur = 10;
             ctx.strokeRect(X,Y,10,10);
            ctx.fillStyle = 'blue'
            ctx.arc(X,Y, 5, 0, 2 * Math.PI);
            ctx.fill();
            ctx.beginPath();
         }
    }
 }
search_header.addEventListener('keyup' , (e) => {
    let resultInput = e.target.value
   resultSearchInput.style.cssText = 'display:inline !important;'
   if (resultInput === '') {
    resultSearchInput.style.cssText = 'display:none !important;'
   }
})
// box_item_header_title
box_item_header_title.addEventListener('click' , () => {
    $.querySelector('.selectBox_header')?.classList.toggle('active')
})
// btn_menu_mobile
let switchMenu = false;
btn_menu_mobile.addEventListener('click' , () => {
    if (!switchMenu) {
        listMobile.style.cssText = 'left:0;'
        btn_menu_mobile.style.cssText = 'border-radius:50%;'
        switchMenu = true
    }else {
        listMobile.style.cssText = 'left:-60%;'
        btn_menu_mobile.style.cssText = 'border-radius:.5rem;'
        switchMenu = false   
    }
})
window.addEventListener('resize' , () => {
    if (window.innerWidth > 950) {
        listMobile.style.cssText = 'display:none;'
    }
})
// start code for  chart left main 
let elmentChart = document.querySelector("#chart");
if (elmentChart) {
    var options = {
        chart: {
          type: 'area',
          height: 290,
        },
        colors:['rgb(58, 111, 248)'],
        series: [{
          name: 'sales',
          data: [20.000,40.000,39.000,20.000,49.000,60.000,30.000,91.000,30.000,28.000,80.000]
        }],
        xaxis: {
          categories: ['19:00','19:5','19:10','19:15','19:20','19:25','19:30','19:35','19:40','19:45','19:50']
        },
        dataLabels: {
            enabled: false
          },
      }
      let chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();
}

//   chart left  finish

// ulMain_opration li child 
ulMain_opration?.forEach(liItem => {
    liItem.addEventListener('click' , (e) => {
        if (e.target.className.includes('active_opration_li')) {
            
        }else{
          e.target.classList.add('active_opration_li')
        }
     })
})
// finish ul main opration
 let valueDefultMainLeft_title = titleValue_leftMain?.textContent.trim()
titleicon_leftMain?.addEventListener('click' , () => {
    if (!titleValue_leftMain.textContent.includes('*')) {
        let textLength = titleValue_leftMain.textContent.trim().length;
        titleValue_leftMain.innerHTML = ''
        for (let i = 0 ; i < textLength; i++) {
          titleValue_leftMain.textContent += '*'
        }
    }else {
        titleValue_leftMain.innerHTML = valueDefultMainLeft_title
    }
})
// ----------
// sweet alert 2 code 

