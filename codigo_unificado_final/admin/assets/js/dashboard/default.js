(function () {
  // Totalsales chart

  var totalLikesOption = {
    series: [
      {
        name: "series2",
        data: [0, 40, 20, 95, 35, 40, 34, 50, 35, 88, 65, 180, 0],
      },
    ],
    chart: {
      height: 140,
      offsetY: 5,
      type: "area",
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    colors: [GoloAdminConfig.secondary],
    fill: {
      type: ["gradient"],
      gradient: {
        shade: "light",
        type: "vertical",
        shadeIntensity: 1,
        gradientToColors: [GoloAdminConfig.secondary],
        inverseColors: true,
        opacityFrom: 0.7,
        opacityTo: 0,
        stops: [0, 100, 100],
      },
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    markers: {
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 7,
          fillColor: "var(--white)",
          strokeColor: GoloAdminConfig.secondary,
          size: 5,
          sizeOffset: 2,
        },
      ],
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        return (
          '<div class="apex-tooltip p-2">' +
          "<span>" +
          '<span class="bg-primary">' +
          "</span>" +
          "Total-Sales" +
          "<h3>" +
          series[seriesIndex][dataPointIndex] +
          "<h3/>" +
          "</span>" +
          "</div>"
        );
      },
    },
    responsive: [
      {
        breakpoint: 1723,
        options: {
          chart: {
            height: 142,
          },
        },
      },
      {
        breakpoint: 1661,
        options: {
          chart: {
            height: 145,
          },
        },
      },
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 148,
          },
        },
      },
    ],
  };
  var totalLikes = new ApexCharts(
    document.querySelector("#total-sales"),
    totalLikesOption
  );
  totalLikes.render();

  // Expenseschart

  var visitOptions = {
    series: [
      {
        name: "series2",
        data: [61, 49, 115, 66, 57, 94, 50, 74, 60, 50, 115, 66, 57],
      },
    ],
    colors: [
      GoloAdminConfig.lightprimary,
      GoloAdminConfig.lightprimary,
      GoloAdminConfig.lightprimary,
      GoloAdminConfig.lightprimary,
      GoloAdminConfig.primary,
      GoloAdminConfig.primary,
      GoloAdminConfig.primary,
      GoloAdminConfig.primary,
      GoloAdminConfig.primary,
      GoloAdminConfig.lightprimary,
      GoloAdminConfig.lightprimary,
      GoloAdminConfig.lightprimary,
      GoloAdminConfig.lightprimary,
    ],
    chart: {
      height: 140,
      type: "bar",
      offsetY: 35,
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        borderRadius: 8,
        vartical: true,
        distributed: true,
        barHeight: "35%",
        dataLabels: {
          position: "top",
        },
      },
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex }) {
        return (
          '<div class="apex-tooltip p-2">' +
          "<span>" +
          '<span class="bg-primary">' +
          "</span>" +
          "Total-Visitors" +
          "<h3>" +
          series[seriesIndex][dataPointIndex] +
          "<h3/>" +
          "</span>" +
          "</div>"
        );
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    responsive: [
      {
        breakpoint: 1723,
        options: {
          chart: {
            height: 142,
          },
        },
      },
      {
        breakpoint: 1661,
        options: {
          chart: {
            height: 145,
          },
        },
      },
      {
        breakpoint: 1500,
        options: {
          chart: {
            height: 148,
          },
        },
      },
    ],
  };
  var visitChart = new ApexCharts(
    document.querySelector("#expensesChart"),
    visitOptions
  );
  visitChart.render();

  // goal chart start

  const salesStatsOption = {
    series: [70],
    chart: {
      height: 265,
      type: "radialBar",
      offsetY: 0,
    },
    stroke: {
      dashArray: 20,
      curve: "smooth",
      lineCap: "round",
    },
    grid: {
      padding: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 135,
        hollow: {
          size: "75%",
          image: "../assets/images/dashboard/chart-ellipse.png",
          imageWidth: 140,
          imageHeight: 140,
          imageClipped: false,
        },
        track: {
          show: true,
          strokeWidth: "97%",
          opacity: 0.4,
        },
        dataLabels: {
          show: true,
          name: {
            show: true,
            fontSize: "20px",
            fontFamily: undefined,
            fontWeight: 600,
            color: undefined,
            offsetY: -10,
          },
          value: {
            show: true,
            fontFamily: '"Nunito Sans", sans-serif',
            fontWeight: 700,
            fontSize: "16px",
            color: "#848789",
            offsetY: 6,
            formatter: function (val) {
              return val + "%";
            },
          },
        },
      },
    },
    labels: ["User rate"],
    colors: [GoloAdminConfig.primary],
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 1409,
        options: {
          chart: {
            height: 248,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "70%",
                imageWidth: 120,
                imageHeight: 120,
                imageClipped: false,
              }
            }
          }
        },
      },
      {
        breakpoint: 1384,
        options: {
          chart: {
            height: 245,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "70%",
                imageWidth: 120,
                imageHeight: 120,
                imageClipped: false,
              }
            }
          }
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 213,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "70%",
                imageWidth: 120,
                imageHeight: 120,
                imageClipped: false,
              }
            }
          }
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 208,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "70%",
                imageWidth: 115,
                imageHeight: 115,
                imageClipped: false,
              }
            }
          }
        },
      },
      {
        breakpoint: 818,
        options: {
          chart: {
            height: 199,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 215,
          },
        },
      },
      {
        breakpoint: 769,
        options: {
          chart: {
            height: 180,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "75%",
                image: "../assets/images/dashboard/chart-ellipse.png",
                imageWidth: 120,
                imageHeight: 120,
                imageClipped: false,
              }
            }
          }
        },
      },
      {
        breakpoint: 783,
        options: {
          chart: {
            height: 185,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "75%",
                image: "../assets/images/dashboard/chart-ellipse.png",
                imageWidth: 110,
                imageHeight: 110,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  fontSize: "16px",
                },
                value: {
                  fontSize: "12px",
                }
              },
            }
          },

        },
      },
      {
        breakpoint: 761,
        options: {
          chart: {
            height: 200,
          },
          plotOptions: {
            radialBar: {
              hollow: {
                size: "75%",
                image: "../assets/images/dashboard/chart-ellipse.png",
                imageWidth: 125,
                imageHeight: 125,
                imageClipped: false,
              },
              dataLabels: {
                name: {
                  fontSize: "16px",
                },
                value: {
                  fontSize: "12px",
                }
              },
            }
          },

        },
      },
    ],
  };
  const salesStatsChartEl = new ApexCharts(
    document.querySelector("#salesStatsRadialChart"),
    salesStatsOption
  );
  salesStatsChartEl.render();

  // Total project

  var projectoptions = {
    series: [
      {
        name: "User A",
        data: [11, 25, 22, 27, 19, 35, 9.5],
      },
      {
        name: "User B",
        data: [27, 13, 16, 11, 19, 3, 28.5],
      },
    ],
    chart: {
      type: "bar",
      height: 110,
      stacked: true,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 1501,
        options: {
          chart: {
            height: 108,
          },
        },
      },
      {
        breakpoint: 1409,
        options: {
          chart: {
            height: 125,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 99,
          },
        },
      },
      {
        breakpoint: 818,
        options: {
          chart: {
            height: 110,
          },
        },
      },
      {
        breakpoint: 769,
        options: {
          chart: {
            height: 115,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            height: 110,
          },
        },
      },
      {
        breakpoint: 783,
        options: {
          chart: {
            height: 120,
          },
        },
      },
    ],
    colors: [GoloAdminConfig.primary, "#d8dde1"],
    grid: {
      show: false, // Remove background grid lines
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 2,
        columnWidth: "35%",
        dataLabels: {
          total: {
            show: false,
          },
        },
      },
    },
    xaxis: {
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
    },
  };

  var projectchart = new ApexCharts(
    document.querySelector("#total-project"),
    projectoptions
  );
  projectchart.render();

  // lastOrdersChart

  var lastOrdersOption = {
    series: [
      {
        type: "candlestick",
        data: [
          {
            x: "Jan",
            y: [30, 10, 40, 53],
          },
          {
            x: "Feb",
            y: [38, 10, 45, 58],
          },
          {
            x: "Mar",
            y: [40, 10, 50, 70],
          },
          {
            x: "Apr",
            y: [25, 10, 40, 45],
          },
          {
            x: "May",
            y: [30, 10, 40, 55],
          },
          {
            x: "Jun",
            y: [17, 10, 30, 35],
          },
          {
            x: "Jul",
            y: [25, 10, 40, 60],
          },
          {
            x: "Aug",
            y: [25, 10, 40, 45],
          },
          {
            x: "Sep",
            y: [20, 10, 30, 35],
          },
          {
            x: "Oct",
            y: [40, 10, 50, 68],
          },
          {
            x: "Nov",
            y: [20, 10, 30, 40],
          },
          {
            x: "Dec",
            y: [30, 10, 40, 50],
          },
        ],
      },
    ],
    chart: {
      type: "candlestick",
      height: 258,
      yaxis: -20,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: GoloAdminConfig.primary,
      dashArray: 0,
    },
    xaxis: {
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
    yaxis: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
        endingShape: 'rounded',
        startingShape: 'rounded',
      },
      candlestick: {
        endingShape: 'rounded',
        startingShape: 'rounded',
        colors: {
          upward: GoloAdminConfig.primary,
          downward: GoloAdminConfig.primary
        },
        wick: {
          useFillColor: true,
          colors: {
            upward: GoloAdminConfig.primary,
            downward: GoloAdminConfig.primary
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 274,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 264,
          },
        },
      },
      {
        breakpoint: 993,
        options: {
          chart: {
            height: 272,
          },
        },
      },
      {
        breakpoint: 676,
        options: {
          chart: {
            height: 230,
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
    colors: [GoloAdminConfig.primary, GoloAdminConfig.primary],
  };

  var lastOrdersChartEl = new ApexCharts(document.querySelector("#lastOrdersChart"), lastOrdersOption);
  lastOrdersChartEl.render();

  // sale report 1w chart

  var salereportOption = {
    series: [
      {
        type: "candlestick",
        data: [
          {
            x: "Jan",
            y: [40, 10, 35, 47],
          },
          {
            x: "Feb",
            y: [48, 10, 55, 58],
          },
          {
            x: "Mar",
            y: [25, 10, 45, 50],
          },
          {
            x: "Apr",
            y: [55, 10, 15, 40],
          },
          {
            x: "May",
            y: [30, 10, 50, 65],
          },
          {
            x: "Jun",
            y: [20, 10, 38, 48],
          },
          {
            x: "Jul",
            y: [25, 10, 47, 60],
          },
          {
            x: "Aug",
            y: [45, 10, 42, 54],
          },
          {
            x: "Sep",
            y: [20, 10, 34, 35],
          },
          {
            x: "Oct",
            y: [48, 10, 40, 50],
          },
          {
            x: "Nov",
            y: [27, 10, 58, 68],
          },
          {
            x: "Dec",
            y: [36, 10, 40, 54],
          },
        ],
      },
    ],
    chart: {
      type: "candlestick",
      height: 258,
      yaxis: -20,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: "#54A8FB",
      dashArray: 0,
    },
    xaxis: {
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
    yaxis: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        endingShape: "rounded",
        startingShape: "rounded",
      },
      candlestick: {
        endingShape: "rounded",
        startingShape: "rounded",
        colors: {
          upward: GoloAdminConfig.primary,
          downward: GoloAdminConfig.primary,
        },
        wick: {
          useFillColor: true,
          colors: {
            upward: GoloAdminConfig.primary,
            downward: GoloAdminConfig.primary,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 274,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 264,
          },
        },
      },
      {
        breakpoint: 993,
        options: {
          chart: {
            height: 272,
          },
        },
      },
      {
        breakpoint: 676,
        options: {
          chart: {
            height: 230,
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
    colors: [GoloAdminConfig.primary, GoloAdminConfig.primary],
  };

  var salereportChartEl = new ApexCharts(document.querySelector("#salereportChart"), salereportOption);
  salereportChartEl.render();

  // sale report 1m chart

  var salesperformanceOption = {
    series: [
      {
        type: "candlestick",
        data: [
          {
            x: "Jan",
            y: [40, 10, 30, 53],
          },
          {
            x: "Feb",
            y: [48, 10, 55, 58],
          },
          {
            x: "Mar",
            y: [50, 10, 40, 70],
          },
          {
            x: "Apr",
            y: [35, 10, 42, 45],
          },
          {
            x: "May",
            y: [50, 10, 48, 55],
          },
          {
            x: "Jun",
            y: [17, 10, 30, 35],
          },
          {
            x: "Jul",
            y: [55, 10, 44, 60],
          },
          {
            x: "Aug",
            y: [15, 10, 44, 58],
          },
          {
            x: "Sep",
            y: [20, 10, 30, 48],
          },
          {
            x: "Oct",
            y: [40, 10, 58, 68],
          },
          {
            x: "Nov",
            y: [50, 10, 35, 40],
          },
          {
            x: "Dec",
            y: [30, 10, 40, 64],
          },
        ],
      },
    ],
    chart: {
      type: "candlestick",
      height: 258,
      yaxis: -20,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: GoloAdminConfig.primary,
      dashArray: 0,
    },
    xaxis: {
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
    yaxis: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        endingShape: "rounded",
        startingShape: "rounded",
      },
      candlestick: {
        endingShape: "rounded",
        startingShape: "rounded",
        colors: {
          upward: GoloAdminConfig.primary,
          downward: GoloAdminConfig.primary,
        },
        wick: {
          useFillColor: true,
          colors: {
            upward: GoloAdminConfig.primary,
            downward: GoloAdminConfig.primary,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 274,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 264,
          },
        },
      },
      {
        breakpoint: 993,
        options: {
          chart: {
            height: 272,
          },
        },
      },
      {
        breakpoint: 676,
        options: {
          chart: {
            height: 230,
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
    colors: [GoloAdminConfig.primary, GoloAdminConfig.primary],
  };

  var salesperformanceChartEl = new ApexCharts(document.querySelector("#saleperformanceChart"), salesperformanceOption);
  salesperformanceChartEl.render();

  // sale report 3m chart

  var salesbusinessOption = {
    series: [
      {
        type: "candlestick",
        data: [
          {
            x: "Jan",
            y: [30, 10, 50, 53],
          },
          {
            x: "Feb",
            y: [65, 10, 35, 52],
          },
          {
            x: "Mar",
            y: [30, 10, 35, 50],
          },
          {
            x: "Apr",
            y: [25, 10, 35, 58],
          },
          {
            x: "May",
            y: [33, 10, 44, 55],
          },
          {
            x: "Jun",
            y: [19, 10, 35, 45],
          },
          {
            x: "Jul",
            y: [38, 10, 44, 60],
          },
          {
            x: "Aug",
            y: [15, 10, 35, 45],
          },
          {
            x: "Sep",
            y: [20, 10, 40, 48],
          },
          {
            x: "Oct",
            y: [40, 10, 50, 68],
          },
          {
            x: "Nov",
            y: [15, 10, 38, 40],
          },
          {
            x: "Dec",
            y: [35, 10, 40, 55],
          },
        ],
      },
    ],
    chart: {
      type: "candlestick",
      height: 258,
      yaxis: -20,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: GoloAdminConfig.primary,
      dashArray: 0,
    },
    xaxis: {
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
    yaxis: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        endingShape: "rounded",
        startingShape: "rounded",
      },
      candlestick: {
        endingShape: "rounded",
        startingShape: "rounded",
        colors: {
          upward: GoloAdminConfig.primary,
          downward: GoloAdminConfig.primary,
        },
        wick: {
          useFillColor: true,
          colors: {
            upward: GoloAdminConfig.primary,
            downward: GoloAdminConfig.primary,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 274,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 264,
          },
        },
      },
      {
        breakpoint: 993,
        options: {
          chart: {
            height: 272,
          },
        },
      },
      {
        breakpoint: 676,
        options: {
          chart: {
            height: 230,
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
    colors: [GoloAdminConfig.primary, GoloAdminConfig.primary],
  };

  var salesbusinessChartEl = new ApexCharts(document.querySelector("#salebusinessChart"), salesbusinessOption);
  salesbusinessChartEl.render();

  // sale report 1m(2) chart
  var salesmonthlyOption = {
    series: [
      {
        type: "candlestick",
        data: [
          {
            x: "Jan",
            y: [40, 10, 40, 52],
          },
          {
            x: "Feb",
            y: [15, 10, 45, 68],
          },
          {
            x: "Mar",
            y: [42, 10, 53, 70],
          },
          {
            x: "Apr",
            y: [35, 10, 40, 45],
          },
          {
            x: "May",
            y: [10, 10, 54, 55],
          },
          {
            x: "Jun",
            y: [17, 10, 38, 48],
          },
          {
            x: "Jul",
            y: [35, 10, 40, 60],
          },
          {
            x: "Aug",
            y: [45, 10, 43, 50],
          },
          {
            x: "Sep",
            y: [24, 10, 34, 35],
          },
          {
            x: "Oct",
            y: [40, 10, 50, 58],
          },
          {
            x: "Nov",
            y: [20, 10, 30, 44],
          },
          {
            x: "Dec",
            y: [30, 10, 20, 50],
          },
        ],
      },
    ],
    chart: {
      type: "candlestick",
      height: 258,
      yaxis: -20,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: GoloAdminConfig.primary,
      dashArray: 0,
    },
    xaxis: {
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
    yaxis: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        endingShape: "rounded",
        startingShape: "rounded",
      },
      candlestick: {
        endingShape: "rounded",
        startingShape: "rounded",
        colors: {
          upward: GoloAdminConfig.primary,
          downward: GoloAdminConfig.primary,
        },
        wick: {
          useFillColor: true,
          colors: {
            upward: GoloAdminConfig.primary,
            downward: GoloAdminConfig.primary,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 274,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 264,
          },
        },
      },
      {
        breakpoint: 993,
        options: {
          chart: {
            height: 272,
          },
        },
      },
      {
        breakpoint: 676,
        options: {
          chart: {
            height: 230,
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
    colors: [GoloAdminConfig.primary, GoloAdminConfig.primary],
  };

  var salesmonthlyChartEl = new ApexCharts(document.querySelector("#salemonthlyChart"), salesmonthlyOption);
  salesmonthlyChartEl.render();


  // saleallchart

  var salesallOption = {
    series: [
      {
        type: "candlestick",
        data: [
          {
            x: "Jan",
            y: [30, 10, 51, 63],
          },
          {
            x: "Feb",
            y: [18, 10, 25, 68],
          },
          {
            x: "Mar",
            y: [45, 10, 51, 70],
          },
          {
            x: "Apr",
            y: [15, 10, 42, 48],
          },
          {
            x: "May",
            y: [30, 10, 42, 55],
          },
          {
            x: "Jun",
            y: [17, 10, 32, 45],
          },
          {
            x: "Jul",
            y: [25, 10, 41, 60],
          },
          {
            x: "Aug",
            y: [25, 10, 50, 69],
          },
          {
            x: "Sep",
            y: [20, 10, 40, 55],
          },
          {
            x: "Oct",
            y: [30, 10, 20, 48],
          },
          {
            x: "Nov",
            y: [50, 10, 15, 40],
          },
          {
            x: "Dec",
            y: [18, 10, 42, 50],
          },
        ],
      },
    ],
    chart: {
      type: "candlestick",
      height: 258,
      yaxis: -20,
      toolbar: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "butt",
      colors: GoloAdminConfig.primary,
      dashArray: 0,
    },
    xaxis: {
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
    yaxis: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: "20%",
        endingShape: "rounded",
        startingShape: "rounded",
      },
      candlestick: {
        endingShape: "rounded",
        startingShape: "rounded",
        colors: {
          upward: GoloAdminConfig.primary,
          downward: GoloAdminConfig.primary,
        },
        wick: {
          useFillColor: true,
          colors: {
            upward: GoloAdminConfig.primary,
            downward: GoloAdminConfig.primary,
          },
        },
      },
    },
    responsive: [
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 274,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 264,
          },
        },
      },
      {
        breakpoint: 993,
        options: {
          chart: {
            height: 272,
          },
        },
      },
      {
        breakpoint: 676,
        options: {
          chart: {
            height: 230,
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 200,
          },
        },
      },
    ],
    colors: [GoloAdminConfig.primary, GoloAdminConfig.primary],
  };

  var lastallChartEl = new ApexCharts(document.querySelector("#saleallChart"), salesallOption);
  lastallChartEl.render();

  // Olix theme chart

  var revenueOptions = {
    series: [
      {
        name: "Revenue",
        data: [35, 21, 42, 35, 59, 35, 46, 29, 59, 35, 29, 46],
      },
    ],
    colors: [
      GoloAdminConfig.lightsecondary,
      GoloAdminConfig.lightsecondary,
      GoloAdminConfig.lightsecondary,
      GoloAdminConfig.lightsecondary,
      GoloAdminConfig.secondary,
      GoloAdminConfig.lightsecondary,
      GoloAdminConfig.lightsecondary,
      GoloAdminConfig.lightsecondary,
      GoloAdminConfig.secondary,
      GoloAdminConfig.lightsecondary,
      GoloAdminConfig.lightsecondary,
      GoloAdminConfig.lightsecondary,
    ],
    chart: {
      height: 82,
      type: 'bar',
      offsetY: -12,
      sparkline: {
        enabled: true,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    plotOptions: {
      bar: {
        borderRadius: 3,
        vartical: true,
        gap: 20,
        distributed: true,
        barHeight: "35%",
        dataLabels: {
          position: "top",
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: 'none'
        }
      }
    },
    responsive: [
      {
        breakpoint: 1409,
        options: {
          chart: {
            height: 85,
          },
        },
      },
      {
        breakpoint: 1385,
        options: {
          chart: {
            height: 85,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            height: 95,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 96,
          },
        },
      },
    ]
  };
  var revenueChart = new ApexCharts(
    document.querySelector("#revenue-chart"),
    revenueOptions
  );
  revenueChart.render();
})();





