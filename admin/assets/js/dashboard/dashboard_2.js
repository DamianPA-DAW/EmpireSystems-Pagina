// Dashboard 2 JS

(function () {
  // crm traffic chart
  var options = {
    series: [
      {
        name: 'series1',
        data: [42.5, 40, 36, 32, 28, 25, 22, 20, 18, 16.5, 15.5, 15, 15, 16, 18, 20, 23, 26, 30, 34, 38, 41.5, 45, 48, 51, 54, 56, 58, 59, 59, 58, 56.5, 54.5, 51.5, 48, 44],
      },
      {
        name: 'series2',
        data: [57, 58, 58, 57.5, 56.5, 55, 52.5, 50, 47, 43.5, 40, 36, 32, 28, 24, 20, 17, 15, 14.0, 14, 15, 17, 20, 24, 28, 32, 36, 40, 44, 48, 51.5, 54.5, 56.6, 58, 58.5, 58],
      },
    ],
    chart: {
      height: 335,
      width: '100%',
      type: 'line',
      offsetY: 12,
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors:[GoloAdminConfig.primary , GoloAdminConfig.secondary],
    markers: {
      size: [0,5],
      strokeColors: '#fff',
      strokeWidth: 2,
      discrete: [],
      shape: 'circle',
      radius: 2,
      offsetX: 0,
      offsetY: 0,
      onClick: undefined,
      onDblClick: undefined,
      showNullDataPoints: true,
      hover: {
        size: 10,
        strokeWidth: 20,
      },
    },
    stroke: {
      curve: 'straight',
      lineCap: 'butt',
      width: 3,
    },
    grid: {
      show: true,
      borderColor: '#EDEDED',
      strokeDashArray: 0,
      position: 'back',
      padding: {
        top: -20,
        right: 10,
        bottom: 0,
        left: 12,
      },
    },
    yaxis: {
      lines: {
        show: true
      },
      logBase: 100,
      tickAmount: 6,
      min: 0,
      max: 60,
      labels: {
        show: true,
        align: 'right',
        minWidth: 0,
        maxWidth: 25,
        style: {
          colors: "#000000",
          fontWeight: 600,
        },
        formatter: (value) => {
          return `${value}k`;
        },
      },
    },
    xaxis: {
      type: 'category',
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      tickAmount: 12,
      labels: {
        rotate: 0,
        minHeight: undefined,
        maxHeight: 28,
        offsetX: 10,
        offsetY: 0,
        style: {
          colors: "#848789",
          fontWeight: 600,
        },
        tooltip: {
          enabled: false,
        },
      },
      lines: {
        show: true
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        return `<div class="apex-tooltip"> 
                  <span>
                      <span class="bg-secondary"> </span>
                        Order : ${series[0][dataPointIndex]} K
                  </span> 
                  <span class="mt-2">
                      <span class="bg-primary"> </span>
                        Sales : ${series[1][dataPointIndex]} K
                  </span> 
                </div>`;
      },
    },
    legend: {
      show: false,
    },
  };

  var chart = new ApexCharts(document.querySelector('#crmtraffic'), options);
  chart.render();

  // saleweek chart

  function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = (i + 1).toString();
      var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push({
        x: x,
        y: y,
      });
      i++;
    }
    return series;
  }

  const saleweekoptions = {
    chart: {
      height: 425,
      type: 'heatmap',
      toolbar: {
        show: false
      }
    },
    grid: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    plotOptions: {
      heatmap: {
        shadeIntensity: 0.5,
        radius: 10,
        useFillColorAsStroke: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 20000,
              color: '#DDEEFE'
            },
            {
              from: 20001,
              to: 40000,
              color: '#a7c9e8'
            },
            {
              from: 40001,
              to: 60000,
              color: '#478ac9'
            },
            {
              from: 60001,
              to: 80000,
              color: '#0267c7'
            },
            {
              from: 80001,
              to: 100000, // or some high max value
              color: '#0267c7' // Your primary blue color
            }
          ]
        }
        
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      labels: {
        style: {
          colors: "#848789",
          fontWeight: 600,
        },
      },
      axisBorder: {
        show: false // Removes the x-axis line
      },
      axisTicks: {
        show: false // Removes the small ticks on x-axis
      }
    },
    series: [
      {
        name: '10k',
        data: [10000, 12000, 15000, 13000, 14000, 12000, 15000, 13000]
      },
      {
        name: '20k',
        data: [20000, 21000, 23000, 22000, 20000, 21000, 22000, 20000]
      },
      {
        name: '30k',
        data: [30000, 31000, 32000, 30000, 31000, 32000, 30000, 31000]
      },
      {
        name: '40k',
        data: [40000, 41000, 43000, 42000, 40000, 41000, 42000, 40000]
      },
      {
        name: '50k',
        data: [50000, 51000, 53000, 52000, 50000, 51000, 52000, 50000]
      },
      {
        name: '60k',
        data: [60000, 61000, 63000, 62000, 60000, 61000, 62000, 60000]
      },
      {
        name: '70k',
        data: [70000, 71000, 73000, 72000, 70000, 71000, 72000, 70000]
      },
      {
        name: '80k',
        data: [80000, 81000, 83000, 82000, 80000, 81000, 82000, 80000]
      }
    ],
    tooltip: {
      y: {
        formatter: function (val) {
          return `${val / 1000}K`;
        }
      }
    },
    responsive: [
      {
        breakpoint: 1500,
        options: {
          series: [
            {
              name: '10k',
              data: [10000, 12000, 15000, 13000, 14000, 12000]
            },
            {
              name: '20k',
              data: [20000, 21000, 23000, 22000, 20000, 21000]
            },
            {
              name: '30k',
              data: [30000, 31000, 32000, 30000, 31000, 32000]
            },
            {
              name: '40k',
              data: [40000, 41000, 43000, 42000, 40000, 41000]
            },
            {
              name: '50k',
              data: [50000, 51000, 53000, 52000, 50000, 51000]
            },
            {
              name: '60k',
              data: [60000, 61000, 63000, 62000, 60000, 61000]
            },
            {
              name: '70k',
              data: [70000, 71000, 73000, 72000, 70000, 71000]
            },
            {
              name: '80k',
              data: [80000, 81000, 83000, 82000, 80000, 81000]
            }
          ],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
          },
        },
      },
      {
        breakpoint: 1600,
        options: {
          series: [
            {
              name: '10k',
              data: [10000, 12000, 15000, 13000, 14000]
            },
            {
              name: '20k',
              data: [20000, 21000, 23000, 22000, 20000]
            },
            {
              name: '30k',
              data: [30000, 31000, 32000, 30000, 31000]
            },
            {
              name: '40k',
              data: [40000, 41000, 43000, 42000, 40000]
            },
            {
              name: '50k',
              data: [50000, 51000, 53000, 52000, 50000]
            },
            {
              name: '60k',
              data: [60000, 61000, 63000, 62000, 60000]
            },
            {
              name: '70k',
              data: [70000, 71000, 73000, 72000, 70000]
            },
            {
              name: '80k',
              data: [80000, 81000, 83000, 82000, 80000]
            }
          ],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 400,
          },
          series: [
            {
              name: '10k',
              data: [10000, 12000, 15000, 13000, 14000, 12000, 15000, 13000]
            },
            {
              name: '20k',
              data: [20000, 21000, 23000, 22000, 20000, 21000, 22000, 20000]
            },
            {
              name: '30k',
              data: [30000, 31000, 32000, 30000, 31000, 32000, 30000, 31000]
            },
            {
              name: '40k',
              data: [40000, 41000, 43000, 42000, 40000, 41000, 42000, 40000]
            },
            {
              name: '50k',
              data: [50000, 51000, 53000, 52000, 50000, 51000, 52000, 50000]
            },
            {
              name: '60k',
              data: [60000, 61000, 63000, 62000, 60000, 61000, 62000, 60000]
            },
            {
              name: '70k',
              data: [70000, 71000, 73000, 72000, 70000, 71000, 72000, 70000]
            },
            {
              name: '80k',
              data: [80000, 81000, 83000, 82000, 80000, 81000, 82000, 80000]
            }
          ],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug']
          },
        },
      },
      {
        breakpoint: 955,
        options: {
          chart: {
            height: 400,
          },
          series: [
            {
              name: '10k',
              data: [10000, 12000, 15000, 13000, 14000, 12000]
            },
            {
              name: '20k',
              data: [20000, 21000, 23000, 22000, 20000, 21000]
            },
            {
              name: '30k',
              data: [30000, 31000, 32000, 30000, 31000, 32000]
            },
            {
              name: '40k',
              data: [40000, 41000, 43000, 42000, 40000, 41000]
            },
            {
              name: '50k',
              data: [50000, 51000, 53000, 52000, 50000, 51000]
            },
            {
              name: '60k',
              data: [60000, 61000, 63000, 62000, 60000, 61000]
            },
            {
              name: '70k',
              data: [70000, 71000, 73000, 72000, 70000, 71000]
            },
            {
              name: '80k',
              data: [80000, 81000, 83000, 82000, 80000, 81000]
            }
          ],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
          },
        },
      },
      {
        breakpoint: 769,
        options: {
          chart: {
            height: 400,
          },
          series: [
            {
              name: '10k',
              data: [10000, 12000, 15000, 13000, 14000]
            },
            {
              name: '20k',
              data: [20000, 21000, 23000, 22000, 20000]
            },
            {
              name: '30k',
              data: [30000, 31000, 32000, 30000, 31000]
            },
            {
              name: '40k',
              data: [40000, 41000, 43000, 42000, 40000]
            },
            {
              name: '50k',
              data: [50000, 51000, 53000, 52000, 50000]
            },
            {
              name: '60k',
              data: [60000, 61000, 63000, 62000, 60000]
            },
            {
              name: '70k',
              data: [70000, 71000, 73000, 72000, 70000]
            },
            {
              name: '80k',
              data: [80000, 81000, 83000, 82000, 80000]
            }
          ],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 400,
          },
          series: [
            {
              name: '10k',
              data: [10000, 12000, 15000, 13000, 14000, 12000, 15000, 13000]
            },
            {
              name: '20k',
              data: [20000, 21000, 23000, 22000, 20000, 21000, 22000, 20000]
            },
            {
              name: '30k',
              data: [30000, 31000, 32000, 30000, 31000, 32000, 30000, 31000]
            },
            {
              name: '40k',
              data: [40000, 41000, 43000, 42000, 40000, 41000, 42000, 40000]
            },
            {
              name: '50k',
              data: [50000, 51000, 53000, 52000, 50000, 51000, 52000, 50000]
            },
            {
              name: '60k',
              data: [60000, 61000, 63000, 62000, 60000, 61000, 62000, 60000]
            },
            {
              name: '70k',
              data: [70000, 71000, 73000, 72000, 70000, 71000, 72000, 70000]
            },
            {
              name: '80k',
              data: [80000, 81000, 83000, 82000, 80000, 81000, 82000, 80000]
            }
          ],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul','Aug']
          },
        },
      },
      {
        breakpoint: 478,
        options: {
          chart: {
            height: 400,
          },
          series: [
            {
              name: '10k',
              data: [10000, 12000, 15000, 13000, 14000]
            },
            {
              name: '20k',
              data: [20000, 21000, 23000, 22000, 20000]
            },
            {
              name: '30k',
              data: [30000, 31000, 32000, 30000, 31000]
            },
            {
              name: '40k',
              data: [40000, 41000, 43000, 42000, 40000]
            },
            {
              name: '50k',
              data: [50000, 51000, 53000, 52000, 50000]
            },
            {
              name: '60k',
              data: [60000, 61000, 63000, 62000, 60000]
            },
            {
              name: '70k',
              data: [70000, 71000, 73000, 72000, 70000]
            },
            {
              name: '80k',
              data: [80000, 81000, 83000, 82000, 80000]
            }
          ],
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr','may']
          },
        },
      },
    ],    
  };

  const saleweekchart = new ApexCharts(document.querySelector("#sale-week"), saleweekoptions);
  saleweekchart.render();


// top seller radial chart

  function radialCommonOption(data) {
    return {
        series: data.radialYseries,
        chart: {
            height: 90,
            type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
                hollow: {
                    size: '35%',
                },
                track: {
                    background: 'var(--theme-default)',
                    opacity: 0.2,
                },
                dataLabels: {
                  name: {
                    show: false
                  },
                    value: {
                        color: "#848789",
                        fontWeight: "500",
                        fontSize: "11px",
                        show: true,
                        offsetY: 3,
                    }
                }
            },
        },
        colors: [data.color],

        stroke: {
            lineCap: "round",
        },
    }
}

const radial1 = {
    radialYseries: [80],
    color: GoloAdminConfig.primary,
};

const radialchart1 = document.querySelector('#radial-1');
if (radialchart1) {
    var radialprogessChart1 = new ApexCharts(radialchart1, radialCommonOption(radial1));
    radialprogessChart1.render();
}
// radial 2
const radial2 = {
    radialYseries: [87],
    color: GoloAdminConfig.primary,
};
const radialchart2 = document.querySelector('#radial-2');
if (radialchart2) {
    var radialprogessChart2 = new ApexCharts(radialchart2, radialCommonOption(radial2));
    radialprogessChart2.render();
}
// radial 3
const radial3 = {
    radialYseries: [86],
    color: GoloAdminConfig.primary,
};
const radialchart3 = document.querySelector('#radial-3');
if (radialchart3) {
    var radialprogessChart3 = new ApexCharts(radialchart3, radialCommonOption(radial3));
    radialprogessChart3.render();
}
// radial 4
const radial4 = {

    radialYseries: [86],
    color: GoloAdminConfig.primary,
};
const radialchart4 = document.querySelector('#radial-4');
if (radialchart4) {
    var radialprogessChart4 = new ApexCharts(radialchart4, radialCommonOption(radial4));
    radialprogessChart4.render();
}
// radial 5
const radial5 = {

  radialYseries: [71],
  color: GoloAdminConfig.primary,
};
const radialchart5 = document.querySelector('#radial-5');
if (radialchart5) {
  var radialprogessChart5 = new ApexCharts(radialchart5, radialCommonOption(radial5));
  radialprogessChart5.render();
}  

// funnel chart
  var funnelOptions = {
    series: [
    {
      name: "Completed",
      data: [200, 330, 548, 740, 880],
    },
  ],
    chart: {
    type: 'bar',
    height: 230,
    dropShadow: {
      enabled: false,
    },
    toolbar: {
      show: false
    }
  },
  plotOptions: {
    bar: {
      borderRadius: 0,
      horizontal: true,
      distributed: true,
      barHeight: '80%',
      isFunnel: true,
    },
  },
  colors: [
    GoloAdminConfig.primary,
    GoloAdminConfig.secondary,
    '#1F2F3E',
    '#F8AA4B',
    '#e9f7f8',
  ],
  dataLabels: {
    enabled: false,
    formatter: function (val, opt) {
      return opt.w.globals.labels[opt.dataPointIndex] 
    },
    dropShadow: {
      enabled: true,
    },
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 1460,
      options: {
        chart: {
          height: 200,
        }
      },
    },
    {
      breakpoint: 1459,
      options: {
        chart: {
          height: 175,
        }
      },
    },
    {
      breakpoint: 1201,
      options: {
        chart: {
          height: 178,
        }
      },
    },
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 380,
        }
      },
    },
    {
      breakpoint: 922,
      options: {
        chart: {
          height: 325,
        }
      },
    },
    {
      breakpoint: 491,
      options: {
        chart: {
          height: 310,
        }
      },
    },
  ],
  };

  var funnelChart = new ApexCharts(document.querySelector("#funnel-chart"), funnelOptions);
  funnelChart.render();
})();
