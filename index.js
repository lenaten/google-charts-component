var Nanocomponent = require('nanocomponent')
var html = require('bel')

class GoogleChartsComponent extends Nanocomponent {
  createElement (options) {
    this.options = options

    var script
    if (!window._googlecharts) {
      script = html`<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>`
      window._googlecharts = true
    }

    return html`
      <div>
        ${script}
        <div id='${this.options.containerId}'></div>
      </div>
    `
  }

  load () {
    this.loadGoogleCharts()
  }

  update () {
    return false
  }

  loadGoogleCharts () {
    if (!window.google) {
      window.setTimeout(this.loadGoogleCharts.bind(this), 10)
    } else {
      window.google.charts.load('current', {packages: ['corechart']})
      window.google.charts.setOnLoadCallback(this.drawChart.bind(this))
    }
  }

  drawChart () {
    var chart = new window.google.visualization.ChartWrapper(this.options)
    chart.draw()
  }
}

module.exports = GoogleChartsComponent
