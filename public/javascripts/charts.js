
function initChart_load(_data){
  // And for a doughnut chart
  new Chart(document.getElementById(_data.chartID), {
      type: 'doughnut',
      data: {
        labels: ["active", "idle"],
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
}
