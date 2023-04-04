// JavaScript Plot
let years = ['2020', '2021'];
let coalEmissions = [-358, 500];
let oilEmissions = [-1404, -651];
let naturalGasEmissions = [-106, -218];

let title = "CO2 Emissions Changes for Coal, Oil, and Natural Gas";

let trace1 = {
  x: years,
  y: coalEmissions,
  name: 'Coal',
  type: 'bar'
};

let trace2 = {
  x: years,
  y: oilEmissions,
  name: 'Oil',
  type: 'bar'
};

let trace3 = {
  x: years,
  y: naturalGasEmissions,
  name: 'Natural Gas',
  type: 'bar'
};

let data = [trace1, trace2, trace3];

let layout = {
  title: title,
  barmode: 'group',
  xaxis: {
    title: 'Years'
  },
  yaxis: {
    title: 'CO2 Emissions Change (MtCO2)'
  }
};

Plotly.newPlot("plot", data, layout);
