(function($) {
    "use strict";
    var sparkline_chart = {
      init: function() {
        setTimeout(function(){
            $("#simple-line-chart-sparkline").sparkline([5, 10, 20, 14, 17, 21, 20, 10, 4, 13,0, 10, 30, 40, 10, 15, 20], {
                type: 'line',
                width: '100%',
                height: '150',
                tooltipClassname: 'chart-sparkline',
                lineColor: '#54A8FB',
                fillColor: 'transparent',
                highlightLineColor: '#54A8FB',
                highlightSpotColor: '#54A8FB',
                targetColor: '#54A8FB',
                performanceColor: '#54A8FB',
                boxFillColor: '#54A8FB',
                medianColor: '#54A8FB',
                minSpotColor: '#54A8FB'
            });
      })
    }
};
  sparkline_chart.init()
})(jQuery);
