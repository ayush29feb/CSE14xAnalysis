var Histogram = function(data, div, max, tickCount, xlabel) {

	d3.select(div).selectAll('svg').remove();

	var formatCount = d3.format(",.0f");

	var margin = {top: 30, right: 30, bottom: 30, left: 30},
	width = $(div).width() - margin.left - margin.right,
	height = $(div).width() - margin.top - margin.bottom;

	var x = d3.scale.linear()
	    .domain([0, max])
	    .range([0, width]);

	var dataChart = d3.layout.histogram()
	    .bins(x.ticks(tickCount))
	    (data);

	var y = d3.scale.linear()
	    .domain([0, d3.max(dataChart, function(d) { return d.y; })])
	    .range([height, 0]);

	var xAxis = d3.svg.axis()
	    .scale(x)
	    .orient("bottom")
	    .ticks(tickCount);

	var svg = d3.select(div).append("svg")
	    .attr("width", width + margin.left + margin.right)
	    .attr("height", height + margin.top + margin.bottom)
	  .append("g")
	    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	var bar = svg.selectAll(".bar")
	    .data(dataChart)
	  .enter().append("g")
	    .attr("class", "bar")
	    .attr("transform", function(d) { return "translate(" + x(d.x) + "," + y(d.y) + ")"; });

	var bars = bar.append("rect")
	    .attr("x", 1)
	    .attr("y", function(d){ return height - y(d.y);})
	    .attr("width", x(dataChart[0].dx) - 1)
	    .attr("height", function(d) { return 0; });

	bars.transition()
		.duration(1500)
		.attr("y", 0)
		.attr("height", function(d) { return height - y(d.y); })
		.delay(1000)
		.ease();

	bar.append("text")
	    .attr("dy", ".75em")
	    .attr("y", -10)
	    .attr("x", x(dataChart[0].dx) / 2)
	    .attr("text-anchor", "middle")
	    .text(function(d) { return formatCount(d.y); });

	svg.append("g")
	    .attr("class", "x axis")
	    .attr("transform", "translate(0," + height + ")")
	    .call(xAxis);

	svg.append('text')
		.attr("class", "x label")
	    .attr("text-anchor", "middle")
	    .attr("x", width / 2)
	    .attr("y", height + margin.top)
	    .text(xlabel);

}