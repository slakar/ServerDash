
function initChart_load(_data){
  return new Promise((resolve, reject) => {
    // And for a doughnut chart
    new Chart(document.getElementById(_data.chartID), {
        type: 'doughnut',
        data: {
          labels: _data.labels,
          datasets: [
            {
              backgroundColor: ["#bf2424", "#868686"],
              data: _data.values
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: _data.title
          },
          legend: {
              display: false,
          },
          circumference: Math.PI,
          rotation: Math.PI,
          cutoutPercentage: 60
        }
    });

    var newChart_state = document.getElementById(_data.chartID).style.display;

    if(newChart_state == "block"){
      resolve("success");
    } else {
      reject("fail");
    }
  })
}
