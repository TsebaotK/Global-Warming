// // line graph

var temp_data = {
    x: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    y: [0.992, 0.78, 0.946, 0.987, 0.86, 1.149, 1.023, 1.141, 0.21, 0.396, 0.69, 0.534, 1.445, 0.613, 0.5, 1.525, 2.219, 1.43, 1.273,1.032, 1.325, 1.166,],
    type: 'scatter'
};

var chart = [temp_data]

var layout = {
    title: 'Average USA Temperatures (2000-2021)',
    height: 600,
    width: 600
};

Plotly.newPlot("LineGraph", chart, layout);


