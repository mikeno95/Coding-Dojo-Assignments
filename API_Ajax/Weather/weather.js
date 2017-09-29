
$(document).ready(function(){
	$('#weather_form').submit(function(){
		var place = $('input[name="weather_search"]').val();
		var url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(place)}&units=metric&appid=c5c67e111de64fd28aca7969d210d6ad`;

		$.get(url, function(res) {
			$('#weather_content').html(`<h1>${res['name']}</h1> 
				<p><span>Temperature: </span> ${res['main']['temp']} degrees Celcius</p>
				<p><span>Minimum Temperature: </span>${res['main']['temp_min']} degrees Celcius</p>
				<p><span>Max Temperature: </span>${res['main']['temp_max']} degrees Celcius</p>`)
		}, 'json');

		$("input[type='text']").val("");
		return false;
	});
});