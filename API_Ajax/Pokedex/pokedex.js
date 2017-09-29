// Pokedex Assignment jQuery

$(document).ready(function(){
	for(var i=1; i<151; i++){
		var poke_img = `<img class="characters" id="${i}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">`; 
		$('#pokemon').append(poke_img);
	}
	$(document).on("click", ".characters", function(){
		var title_html = "";
		var str_html = "";
		var poke_id = $(this).attr("id");
		var poke_src = $(this).attr("src");


		$.get(`https://pokeapi.co/api/v2/pokemon/${poke_id}/`, function(res){
			var poke_name = res["name"]; 
			title_html=`<h1>${poke_name}</h1>`;
			var height = res["height"];
			var weight = res["weight"];
			str_html+=`<h2>${height}</h2><h2>${weight}</h2><h3>Type:</h3>`;
			for (var x=0; x<res.types.length; x++) {
				str_html+=`<p>${res.types[x].type.name}</p>`;
			}
			
			$("#pokedex_image").html(`<img src="${poke_src}">`);
			$("#poke_info").html(title_html + str_html);
		
		}, 'json');

	});
});