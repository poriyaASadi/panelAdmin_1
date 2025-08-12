const $ = document ;

const RightBodyCardCoin = $.querySelectorAll('.right_body_card_coin canvas');


window.addEventListener('load' ,  () => {
 CreatChart_RightBodyCoin()
})

function CreatChart_RightBodyCoin () {
 MakerChart()
};

const MakerChart = () => {
 RightBodyCardCoin.forEach(item => {
    const id_chart = item.getAttribute('id')
    new Chart(id_chart , {
        type: 'line',
        data: {
          labels: [0 , 10 , 15 , 28 , 35 , 1 , 39 , 10 , 1 , 20 , 40],
          datasets: [{
            label: '' ,
            data: [0 , 10 , 15 ,28 , 35 , 1 , 39 ,10 , 1 , 20 , 40],
            borderColor: '#333',
            backgroundColor: '#333',
            borderWidth: 2,
            fill: false,
            pointRadius: 0
          }]
        },
        options: {
            animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      }
    },
          scales: {
            y: {
              min : 0  ,
              max : 100,
              display: false,
              grid: {
                display: false
            }
            },
            x : {
                min : 0 ,
                max : 100,
                display: false,
                grid: {
                display: false
            }
            }
          },
          plugins: {
            legend: {
                display: false // عدم نمایش لژند
            },
            tooltip: {
                enabled: false // عدم نمایش تولتیپ
            }
        },
        },
        elements: {
            line: {
                tension: 0 // برای داشتن خط مستقیم (بدون انحنا)
            }
        }
      });
      Chart.defaults.backgroundColor = '#333';
      Chart.defaults.borderColor = '#333';
      Chart.defaults.color = '#000';
      
 })
}




// const ctx = document.getElementById('myChart');

