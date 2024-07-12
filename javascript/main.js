const $ = document
// resultSearchInput 
const resultSearchInput = $.getElementById('resultSearchInput');
const search_header = $.querySelector('.search_header input');
// btn_menu_mobile 
const btn_menu_mobile = $.querySelector('.btn_menu_mobile');
const listMobile = $.querySelector('.listMobile');
// swith_them_menu 
const swith_them_menu = $.querySelectorAll('.swith_them_menu span');
// ulMain_opration li child 
const ulMain_opration = $.querySelectorAll('.ulMain_opration li')
// ul main opration end
// text many for switch show or hidden 
const titleValue_leftMain = $.querySelector('.titleValue_leftMain h2');
const titleicon_leftMain = $.querySelector('.icon_switchMainleft_value');
// text many finish
// box_item_header_title 
const box_item_header_title = $.querySelector('.box_item_header_title');


window.addEventListener('load' , () => {
  let cookisTheme =decodeURIComponent(document.cookie);
  const cArray = cookisTheme.split(";");
  let resultCookis  =null
  cArray.forEach(cookis => {
   resultCookis =  cookis.substring('theme'.length + 1);
  })
  if (resultCookis === 'Dark') {
    const link = $.createElement('link');
            link.rel = 'stylesheet';
            link.href = './css/darkMode.css';
            $.head.appendChild(link);
  }
//   ----------- canvas for window mouse 

})

//  ctx.clearRect(e.clientX,e.clientY,10,10)
 window.addEventListener('mousemove' , (e) => {
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
    // ctx.strokeRect(X,Y,10,10);
    ctx.beginPath();
    ctx.fillStyle = 'blue'
    ctx.arc(X,Y, 5, 0, 2 * Math.PI);
    ctx.fill();
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

// for thame project code ... 
swith_them_menu.forEach(item => {
    item.addEventListener('click' , () => {
        // console.log(item.textContent.trim());
        if (item.textContent.trim() === 'Dark') {
            const link = $.createElement('link');
            link.rel = 'stylesheet';
            link.href = './css/darkMode.css';
            $.head.appendChild(link)
        }else {
            const links  = $.getElementsByTagName('link')
             links[3].parentNode.removeChild(links[3]);
        };

        const data = new Date();
        data.setTime(data.getTime() + (5 * 24 * 60 * 60 * 1000));
        let Expirse = "expires=" + data.toUTCString();
        document.cookie = `theme=${item.textContent.trim()};path=/;${Expirse}`;
    });
});
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

