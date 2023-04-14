// JavaScript Plot
d3.csv('../data/us_city_emissions_df.csv').then(function (data) {

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
      height: 600,
      width: 600
    };
  
    Plotly.newPlot("Charts", data1, layout);
  
  });