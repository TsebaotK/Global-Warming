// JavaScript Plot
d3.csv('../Output/us_city_emissions_df.csv').then(function (data) {

  let emission = data.map(function (row) {
    return row.City
  });

  let response = data.map(function (row) {
    return parseFloat(row.Emissions_Response_Answer)
  });

  let trace1 = {
    values: response,
    labels: emission,    
    type: 'pie'
  };

  console.log(response)

  let data1 = [trace1];

  let layout = {
    title: "US cities emission chart",
    height: 0,
    width: 1500
  };

  Plotly.newPlot("plot", data1, layout);

});
