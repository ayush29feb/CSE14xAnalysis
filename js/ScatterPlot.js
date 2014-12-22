/*
	Scatter Plot:
		The Scales
		The Axis
		The SVG
		The Circles
*/
var ScatterPlot = function (data, div) {


	var margin = {top : 30, right : 30, bottom : 30, left : 30};
	var width = 960 - margin.left - margin.right;
	var height = 600 - margin.top - margin.bottom;

	var x = d3.scale.linear()
			.domain([0, 101])
			.range([0, width]);

	var y =d3.scale.linear()
			.domain([0, 101])
			.range([height, 0]);

	var color = d3.scale.category10();

	var xAxis = d3.svg.axis()
				  .scale(x)
				  .orient("bottom")
				  .ticks(20);

	var yAxis = d3.svg.axis()
				  .scale(y)
				  .orient("left")
				  .ticks(20);

	var svg =  d3.select(div).append('svg')
				.attr('width', width + margin.left + margin.left)
				.attr('height', height + margin.top + margin.bottom)
			   .append('g')
			   	.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
	
	svg.selectAll('.dot')
		.data(data)
	.enter().append('circle')
		.attr('class','dot')
		.attr('cx', function(d){ return x(d[0]); })
		.attr('cy', function(d){ return y(d[1]); })
		.attr('r', 3)
		.style('fill', function(d){ return color(d[2]); });

	svg.append('g')
		.attr('class', 'x axis')
		.attr('transform', 'translate(0, ' + height + ')')
		.call(xAxis);

	svg.append('g')
		.attr('class', 'y axis')
		.call(yAxis);

	svg.append('line')
		.attr('x1', 0)
		.attr('y1', height)
		.attr('x2', width)
		.attr('y2', 0)
		.style('stroke', 'black')
		.style('stroke-width', '2');
};