// General Widget JS

(function () {
  "use strict";
  // monthly chart"

  var growthoptions = {
    series: [{
      name: 'Growth',
      data: [0, 14, 5, 20, 14, 30]
    }],
    chart: {
      height: 125,
      type: 'line',
      stacked: false,
      offsetY: 40,
      toolbar: {
        show: false
      },
    },
    grid: {
      show: false,
      borderColor: '#fff',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    colors: [GoloAdminConfig.primary],
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    xaxis: {
      labels: {
        show: false
      },
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      },
      lines: {
        show: false
      }
    },
    yaxis: {
      min: -10,
      max: 40,
      labels: {
        show: false
      }
    },
    markers: {
      discrete: [{
        seriesIndex: 0,
        dataPointIndex: 0,
        fillColor: GoloAdminConfig.primary,
        strokeColor: GoloAdminConfig.primary,
        size: 4,
        shape: "circle"
      },
      {
        seriesIndex: 0,
        dataPointIndex: 1,
        fillColor: GoloAdminConfig.primary,
        strokeColor: GoloAdminConfig.primary,
        size: 4,
        shape: "circle"
      },
      {
        seriesIndex: 0,
        dataPointIndex: 2,
        fillColor: GoloAdminConfig.primary,
        strokeColor: GoloAdminConfig.primary,
        size: 4,
        shape: "circle"
      },
      {
        seriesIndex: 0,
        dataPointIndex: 3,
        fillColor: GoloAdminConfig.primary,
        strokeColor: GoloAdminConfig.primary,
        size: 4,
        shape: "circle"
      },
      {
        seriesIndex: 0,
        dataPointIndex: 4,
        fillColor: GoloAdminConfig.primary,
        strokeColor: GoloAdminConfig.primary,
        size: 4,
        shape: "circle"
      },
      {
        seriesIndex: 0,
        dataPointIndex: 5,
        fillColor: "#fff",
        strokeColor: GoloAdminConfig.primary,
        size: 5,
        shape: "circle"
      },
      ],
    },
  };

  var growthchart = new ApexCharts(document.querySelector("#monthlychart-1"), growthoptions);
  growthchart.render();


  // growthchart

  var growthoptions = {
    series: [{
      name: 'Growth',
      data: [22, 14, 23, 8, 14, 12, 2, 14, 18, 35, 18, 8, 24]
    }],
    chart: {
      height: 175,
      type: 'line',
      stacked: true,
      toolbar: {
        show: false
      },
      dropShadow: {
        enabled: true,
        enabledOnSeries: undefined,
        top: 5,
        left: 0,
        blur: 4,
        color: 'GoloAdminConfig.primary',
        opacity: 0.22
      },
    },
    grid: {
      show: false,
      borderColor: '#000000',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: true,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },

    colors: [GoloAdminConfig.primary],
    stroke: {
      width: 3,
      curve: 'smooth'
    },
    xaxis: {
      lines: {
        show: true
      },
      type: 'category',
      categories: ['0', '', '10k', '', '20k', '', '30k', '', '40k', '', '50k', '', '60k', ''],
      tickAmount: 10,
      labels: {
        style: {
          fontFamily: 'Outfit, sans-serif',
          fontWeight: 500,
          colors: '#8D8D8D',
        },
      },
      axisTicks: {
        show: false
      },
      axisBorder: {
        show: false
      },
      tooltip: {
        enabled: false,
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        gradientToColors: [GoloAdminConfig.primary],
        shadeIntensity: 1,
        type: 'horizontal',
        opacityFrom: 1,
        opacityTo: 1,
        colorStops: [
          {
            offset: 0,
            color: GoloAdminConfig.primary,
            opacity: 1
          },
          {
            offset: 100,
            color: GoloAdminConfig.primary,
            opacity: 1
          },
        ]
      },
    },
    yaxis: {
      min: -10,
      max: 40,
      labels: {
        show: false
      }
    },
    responsive: [
      {
        breakpoint: 1070,
        options: {
          chart: {
            height: 175,
          },
        },
      },
      {
        breakpoint: 1038,
        options: {
          chart: {
            height: 155,
          },
        },
      },
    ]
  };

  var growthchart = new ApexCharts(document.querySelector("#growthchart"), growthoptions);
  growthchart.render();

  // client chart

  var options = {
    series: [
      {
        data: [
          40, 50, 50, 50, 25, 25, 25, 60, 60, 60, 60, 45, 45, 45, 45, 25, 25, 25,
          25, 25, 60,
        ],
      },
    ],
    chart: {
      type: "line",
      height: 67,
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        top: 8,
        left: 3,
        blur: 2,
        color: GoloAdminConfig.primary,
        opacity: 0.4,
      },
    },
    stroke: {
      curve: "stepline",
      width: 2,
    },
    colors: [GoloAdminConfig.primary],
    fill: {
      opacity: [0.5, 0.25, 1],
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
    markers: {
      hover: {
        sizeOffset: 4,
      },
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 1,
          fillColor: "#fff",
          strokeColor: GoloAdminConfig.primary,
          size: 3,
          shape: "circle",
        },
        {
          seriesIndex: 0,
          dataPointIndex: 4,
          fillColor: "#fff",
          strokeColor: GoloAdminConfig.primary,
          size: 3,
          shape: "circle",
        },
        {
          seriesIndex: 0,
          dataPointIndex: 7,
          fillColor: "#fff",
          strokeColor: GoloAdminConfig.primary,
          size: 3,
          shape: "circle",
        },
        {
          seriesIndex: 0,
          dataPointIndex: 11,
          fillColor: "#fff",
          strokeColor: GoloAdminConfig.primary,
          size: 3,
          shape: "circle",
        },
        {
          seriesIndex: 0,
          dataPointIndex: 15,
          fillColor: "#fff",
          strokeColor: GoloAdminConfig.primary,
          size: 3,
          shape: "circle",
        },
        {
          seriesIndex: 0,
          dataPointIndex: 20,
          fillColor: "#fff",
          strokeColor: GoloAdminConfig.primary,
          size: 3,
          shape: "circle",
        },
      ],
    },
  };

  var chart = new ApexCharts(document.querySelector("#client"), options);
  chart.render();

// total-widget-sale chart

  var totalLikesOption = {
    series: [
      {
        name: "series2",
        data: [0, 40, 20, 95, 35, 40, 34, 50, 35, 88, 65, 180, 0],
      },
    ],
    chart: {
      height: 80,
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
        breakpoint: 1660,
        options: {
          chart: {
            height: 80,
          },
        },
      },
      {
        breakpoint: 1006,
        options: {
          chart: {
            height: 60,
          },
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 62,
          },
        },
      },
    ],
  };
  var totalLikes = new ApexCharts(
    document.querySelector("#total-widget-sale"),
    totalLikesOption
  );
  totalLikes.render();

  // sale-widget-chart

  var options = {
    series: [
      {
        name: "Statistics",
        data: [20, 60, 50, 70, 40, 80, 5],
      },
      {
        name: "Statistics",
        data: [80, 40, 50, 30, 60, 20, 10],
      },
    ],
    chart: {
      type: "bar",
      height: 105,
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "10px",
        borderRadius: 2,
      },
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: [GoloAdminConfig.primary, GoloAdminConfig.lightprimary],
    xaxis: {
      show: false,
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
      labels: {
        show: false,
      },
    },
    tooltip: {
      marker: {
        show: false,
      },
      fixed: {
        enabled: false,
        position: "bottomRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1471,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "9px",
              borderRadius: 2,
            },
          },
        },
      },
      {
        breakpoint: 1416,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "7px",
              borderRadius: 2,
            },
          },
        },
      },
      {
        breakpoint: 1300,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "5px",
              borderRadius: 2,
            },
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "10px",
              borderRadius: 2,
            },
          },
        },
      },
    ],
  };
  var chart = new ApexCharts(document.querySelector("#sale-widget-chart"), options);
  chart.render();

// visitor-widget-chart

  var options = {
    series: [
      {
        name: "Statistics",
        data: [20, 60, 50, 70, 40, 80, 5],
      },
      {
        name: "Statistics",
        data: [80, 40, 50, 30, 60, 20, 10],
      },
    ],
    chart: {
      type: "bar",
      height: 105,
      stacked: true,
      stackType: "100%",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "10px",
        borderRadius: 0,
      },
    },
    grid: {
      show: false,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    states: {
      hover: {
        filter: {
          type: "darken",
          value: 1,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    colors: [GoloAdminConfig.secondary, GoloAdminConfig.lightsecondary],
    xaxis: {
      show: false,
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
      labels: {
        show: false,
      },
    },
    tooltip: {
      marker: {
        show: false,
      },
      fixed: {
        enabled: false,
        position: "bottomRight",
        offsetX: 0,
        offsetY: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1471,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "9px",
              borderRadius: 2,
            },
          },
        },
      },
      {
        breakpoint: 1416,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "7px",
              borderRadius: 2,
            },
          },
        },
      },
      {
        breakpoint: 1300,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "5px",
              borderRadius: 2,
            },
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "10px",
              borderRadius: 2,
            },
          },
        },
      },
    ],
  };
  var chart = new ApexCharts(document.querySelector("#visitor-widget-chart"), options);
  chart.render();

  // funnel-widget-chart

  var funnelOptions = {
    series: [
      {
        name: "Completed",
        data: [200, 330, 548, 740, 880],
      },
    ],
    chart: {
      type: 'bar',
      height: 253,
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
        breakpoint: 1200,
        options: {
          chart: {
            height: 250,
          }
        },
      },
      {
        breakpoint: 992,
        options: {
          chart: {
            height: 228,
          }
        },
      },
    ],
  };

  var funnelChart = new ApexCharts(document.querySelector("#funnel-widget-chart"), funnelOptions);
  funnelChart.render();

  
var optionsactivity = {
  series: [
    {
      name: "Activity",
      data: [2, 4, 2.5, 1.5, 5.5, 1.5, 4],
    },
  ],
  chart: {
    height: 238,
    type: "bar",
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 10,
      left: 0,
      blur: 5,
      color: GoloAdminConfig.primary,
      opacity: 0.35,
    },
  },
  plotOptions: {
    bar: {
      borderRadius: 6,
      columnWidth: "30%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    categories: ["S", "M", "T", "W", "T", "F", "S"],
    labels: {
      style: {
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        colors: "var(--chart-text-color)",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
  },
  yaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      formatter: function (val) {
        return val + " " + "Hr";
      },
      style: {
        fontSize: "12px",
        fontFamily: "Rubik, sans-serif",
        colors: "var(--chart-text-color)",
      },
    },
  },
  grid: {
    borderColor: "var(--chart-dashed-border)",
    strokeDashArray: 5,
  },
  colors: [GoloAdminConfig.primary, GoloAdminConfig.primary],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      gradientToColors: [GoloAdminConfig.primary, GoloAdminConfig.primary],
      opacityFrom: 0.98,
      opacityTo: 0.85,
      stops: [0, 100],
    },
  },
  responsive: [
    {
      breakpoint: 1200,
      options: {
        chart: {
          height: 290,
        },
      },
    },
  ],
};
var chartactivity = new ApexCharts(document.querySelector("#activity-chart"), optionsactivity);
chartactivity.render();


  var visitUser = {
    series: [
      {
        name: "Visits",
        data: [11, 23, 7, 18, 10, 11, 9, 20, 13, 25, 6, 30],
      },
    ],
    chart: {
      height: 168,
      type: "line",
      stacked: true,
      toolbar: {
        show: false,
      },
      dropShadow: {
        enabled: true,
        top: 10,
        left: 0,
        blur: 12,
        color: GoloAdminConfig.primary,
        opacity: 0.5,
      },
    },
    colors: [GoloAdminConfig.primary],
    stroke: {
      width: 2.5,
      curve: "smooth",
    },
    xaxis: {
      lines: {
        show: true,
      },
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      labels: {
        style: {
          fontSize: "12px",
          fontFamily: "Rubik, sans-serif",
          colors: "#52526C",
          fontWeight: 400,
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
    yaxis: {
      min: 0,
      max: 25,
      tickAmount: 5,
      labels: {
        formatter: function (val) {
          return val + "k";
        },
        style: {
          fontSize: "12px",
          fontFamily: "Rubik, sans-serif",
          colors: "#52526C",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: true,
      borderColor: "var(--chart-border)",
      strokeDashArray: 0,
      position: "back",
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    tooltip: {
      enabled: false,
    },
    fill: {
      type: ["gradient", "solid"],
      gradient: {
        shade: "dark",
        gradientToColors: GoloAdminConfig.primary,
        shadeIntensity: 1,
        type: "horizontal",
        opacityFrom: 0.9,
        opacityTo: 1,
        colorStops: [
          {
            offset: 0,
            color: GoloAdminConfig.secondary,
            opacity: 1,
          },
          {
            offset: 100,
            color: GoloAdminConfig.primary,
            opacity: 1,
          },
        ],
      },
    },
    annotations: {
      xaxis: [
        {
          x: 340,
          strokeDashArray: 2,
          borderWidth: 1,
          borderColor: GoloAdminConfig.primary,
        },
      ],
      points: [
        {
          x: 340,
          y: 20.5,
          marker: {
            size: 8,
            fillColor: GoloAdminConfig.primary,
            strokeColor: "#ffffff",
            strokeWidth: 4,
            radius: 5,
          },
          label: {
            borderWidth: 1,
            offsetY: 0,
            text: "4.6%",
            style: {
              fontSize: "12px",
              fontWeight: "600",
              fontFamily: "Rubik, sans-serif",
            },
          },
        },
      ],
    },
  };

  var visitChart = new ApexCharts(document.querySelector("#visit-chart"), visitUser);
  visitChart.render();


})();
