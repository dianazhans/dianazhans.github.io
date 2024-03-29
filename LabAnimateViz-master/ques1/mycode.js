/* Loads the data and calls the processData function*/
function makeplot() {

	Plotly.d3.csv("https://raw.githubusercontent.com/plotly/datasets/master/Emissions%20Data.csv", function(data){
		processData(data) } );
};

/* This is the function you will modify. You can add more functions outside of it as well. */
function processData(allRows) {
  	console.log(allRows); // log all data to console

	/* An example showing how to fetch data from 1 column into an array*/
	var column_year = allRows.map(function(row) { return row["Year"]; })
	console.log(column_year);

	/*TODO: Fetch data from the columns you need as arrays/ an array of objects */
	var row_countries = allRows.map(function(row) {return row["Country"]; })
	console.log(row_countries);

	/*TODO: Preprocess the fetched data to get arrays that plotly can take as input*/
	var data = [
		{
			x: ['United States', 'Canada', 'China', 'India', 'United Kingdom'],
			y: ['2011', '2011', '2011', '2011', '2011'],
			type: 'bar'
		}
	];

	Plotly.newPlot('myDiv', data);

	/*TODO: Use Plotly.js to display the Bar Charts*/


}

makeplot();
