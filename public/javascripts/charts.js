
function initChart_load(_data){
  // And for a doughnut chart
  new Chart(document.getElementById("avg_load-chart"), {
      type: 'doughnut',
      data: {
        labels: ["active", "idle"],
        datasets: [
          {
            backgroundColor: ["#bf2424", "#868686"],
            data: _data
          }
        ]
      },
      options: {
        title: {
          display: false
        },
        legend: {
            display: false,
        },
        circumference: Math.PI,
        rotation: Math.PI,
        cutoutPercentage: 60
      }
  });
}
