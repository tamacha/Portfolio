(function() {
	'use strict';
	
	var type = 'horizontalBar';
	
	var data = {
		labels: ['HTML','CSS','JavaScript'],
		datasets: [{
			label: '',
			data: [65, 40, 30],
			backgroundColor: [
				'rgba(230, 125, 30, 0.8)',
				'rgba(37, 141, 209, 0.8)',
				'rgba(254, 187, 65, 0.8)'
			],
			borderWidth: 0
		}]
	};
	
	var options = {
		scales: {
			xAxes: [{
				ticks: {
					suggestedMin: 0,
					suggestedMax: 100
				}
			}]
		},
		legend: {
			display: false
		}
	};
	
	var ctx = document.getElementById('mychart').getContext('2d');
	var myChart = new Chart(ctx, {
		type: type,
		data: data,
		options: options
	});
})();