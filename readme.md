# Google Charts Component

  A native DOM component wrapper for Google Charts.

## Install

```
$ npm install google-charts-component
```

## Usage

```js
var GoogleChartsComponent = require('google-charts-component')
var chart = new GoogleChartsComponent()

var options = {
  containerId: 'chart',
  chartType: 'LineChart',
  dataTable: [
    ['Year', 'Sales', 'Expenses'],
    ['2004', 1000, 400],
    ['2005', 1170, 460],
    ['2006', 660, 1120],
    ['2007', 1030, 540]
  ],
  options: {
    title: 'Chart Title'
  }
}

document.body.appendChild(chart.render(options))

```

## API

### chart = new GoogleChartsComponent()

Create a new component.


### chart.render([options])

Render component to DOM.

See [docs](https://developers.google.com/chart/interactive/docs/reference#chartwrapperobject) for options reference.

# License

  MIT