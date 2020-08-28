// @TODO: YOUR CODE HERE!
var url = "https://raw.githubusercontent.com/tylerspck/D3-Challenge/master/assets/data/data.csv "
// svg container
var height = 600;
var width = 1000;

// margins
var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50
};

// chart area minus margins
var chartHeight = height - margin.top - margin.bottom;
var chartWidth = width - margin.left - margin.right;

// create svg container
var svg = d3.select("body").append("svg")
    .attr("height", height)
    .attr("width", width);

// shift everything over by the margins
var chartGroup = svg.append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv(url).then( function(StateData) {
    console.log(StateData)






});