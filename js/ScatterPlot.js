/*
	Scatter Plot:
		The Scales
		The Axis
		The SVG
		The Circles
*/
var ScatterPlot = function (data, div, frameWidth, frameHeight) {

	d3.select(div).selectAll('svg').remove();

	var margin = {top : 30, right : 30, bottom : 30, left : 30};
	var width = $(div).width() - margin.left - margin.right;
	var height = $(div).width() * 0.75 - margin.top - margin.bottom;

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
				  .ticks(10);

	var yAxis = d3.svg.axis()
				  .scale(y)
				  .orient("left")
				  .ticks(10);

	var svg =  d3.select(div).append('svg')
				.attr('width', width + margin.left + margin.left)
				.attr('height', height + margin.top + margin.bottom)
			   .append('g')
			   	.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');
	
	var circles = svg.selectAll('.dot')
					.data(data)
				.enter().append('circle')
					.attr('class','dot')
					.attr('cx', function(d){ return x(d[0]); })
					.attr('cy', function(d){ return y(d[1]); })
					.attr('r', 0)
					.style('fill', function(d){ return color(d[2]); });

	circles.transition().duration(100)
		.attr('r', 2.5)
		.delay(function(d) { return 200 + d[2] * 500} );

	svg.append('g')
		.attr('class', 'x axis')
		.attr('transform', 'translate(0, ' + height + ')')
		.call(xAxis);

	svg.append('g')
		.attr('class', 'y axis')
		.call(yAxis);

	var line = svg.append('line')
		.style('stroke', 'black')
		.style('stroke-dasharray', '10,10')
		.style('stroke-width', '2')
		.attr('x1', 0)
		.attr('y1', height)
		.attr('x2', 0)
		.attr('y2', height);

	line.transition().duration(1000)
		.attr('x1', 0)
		.attr('y1', height)
		.attr('x2', width)
		.attr('y2', 0)
		.delay(2000);

		
};