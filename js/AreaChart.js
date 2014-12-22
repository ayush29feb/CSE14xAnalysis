/*
	Arera Chart
	Scales
	Axis
	SVg


*/
var AreaChart = function(data){
	var sortedData = data;
	//var sortedData = sortedData.sort(function(a, b){ return a - b; });

	var margin = {top: 30, right: 30, bottom: 30, left: 30};
	var width = 1280 - margin.left - margin.right;
	var height = 600 - margin.top - margin.bottom;

	var x = d3.scale.linear()
			.domain([0, sortedData.length])
			.range([0, width]);

	var y = d3.scale.linear()
			.domain([0, 20])
			.range([height, 0]);

	var yAxis = d3.svg.axis()
				.scale(y)
				.orient('left');

	var area = d3.svg.area()
	    .x(function(d, i) { return x(i); })
	    .y0(height)
	    .y1(function(d) { return y(d); });

	var svg = d3.select("body").append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	svg.append('path')
		.datum(sortedData)
		.attr('class', 'area')
		.attr('d', area);

	svg.append('g')
		.attr("class", "y axis")
		.call(yAxis);

};













