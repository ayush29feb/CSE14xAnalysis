var midterm = [], 
	finalExam = []
	ass1 = [], ass2 = [], ass3 = [], ass4 = [], ass5 = [], ass6 = [], ass7 = [], ass8 = [], ass9 = [],
	grade = [],
	section = [],
	explore = [];
d3.tsv('../data/142.tsv', function (data) {
	for(key in data) {
		midterm[key] = data[key]['midterm'];
		finalExam.push(data[key]['final']);
		grade.push(data[key]['grade']);
		ass1.push(data[key]['ass1']);
		ass2.push(data[key]['ass2']);
		ass3.push(data[key]['ass3']);
		ass4.push(data[key]['ass4']);
		ass5.push(data[key]['ass5']);
		ass6.push(data[key]['ass6']);
		ass7.push(data[key]['ass7']);
		ass8.push(data[key]['ass8']);
		ass9.push(data[key]['ass9']);
		section.push(data[key]['section']);
		explore.push(data[key]['explore']);
	}
});

console.log(midterm);