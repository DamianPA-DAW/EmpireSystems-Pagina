$(".bar-colours-3").peity("bar", {
  fill: function(_, i, all) {
    var g = parseInt((i / all.length) * 145)
    return "rgb(175, " + 118 + ", 242)"
  },
  width: '100',
  height: '82'
})
