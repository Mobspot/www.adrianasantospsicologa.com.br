function enviaForm() {
	var _nome = document.getElementById('nome').value;
	var _email = document.getElementById('email').value;
	var _whatsapp = document.getElementById('whatsapp').value;
	var _mensagem = document.getElementById('mensagem').value;
			
	$.get( "../commons/enviaForm.php", { nome: _nome, email: _email, whatsapp: _whatsapp, mensagem: _mensagem})
		.done(function(data){
			alert(data);
		});

}
		
function enviaAgenda() {
			var _nome = document.getElementById('nome').value;
			var _email = document.getElementById('email').value;
			var _celular = document.getElementById('celular').value;
			var _mensagem = document.getElementById('mensagem').value;
			
			//pega o select data e hora inteiro
			var data_completa = document.getElementById('dia'); 
			var sl_hora = document.getElementById('hora');
			
			//pega a data e hora selecionadas
			var data_selecionada = data_completa.options[data_completa.selectedIndex].text;
			var _hora = sl_hora.options[sl_hora.selectedIndex].text;
			
			//pega o value da data_selecionada e _hora selecionada
			var data_value = data_completa.options[data_completa.selectedIndex].value;
			var hora_value = sl_hora.options[sl_hora.selectedIndex].value;
			
			//separa o dia e o mes
			var diaN = data_value.substr(0,data_value.indexOf("-"));
			var mesN = data_value.substr(data_value.indexOf("-")+1);
			
			var anoF = document.getElementById('anoF').value;
			
			$.get( "../commons/enviaAgenda.php", { nome: _nome, email: _email, celular: _celular, mensagem: _mensagem, dia: data_selecionada, hora: _hora} );
			
			var _data = data_selecionada + " " + _hora;
			gravaAgenda(_nome, _email, _celular, _mensagem, _data, hora_value, diaN, mesN, anoF);
			
			alert("Consulta Agendada!!");
			
		}
		
function gravaAgenda(_nome, _email, _celular, _mensagem, _data, _hora, _diaN, _mesN, _ano) {
	$.get( "../commons/gravaAgenda.php", { nome: _nome, email: _email, celular: _celular, mensagem: _mensagem, data: _data, hora: _hora, dia: _diaN, mes: _mesN, ano: _ano} );
}

function carregaHora(_dia, _mes, _ano){
	$.get( "../commons/carregaHora.php", { dia: _dia, mes: _mes, ano: _ano})
		.done(function(data){
			if (data == 0) {
				$('#hora').append('<option value="8">08:00H</option><option value="10">10:00H</option><option value="12">12:00H</option><option value="14">14:00H</option><option value="16">16:00H</option><option value="18">18:00H</option><option value="20">20:00H</option>');
			} else {
				$('#hora').append(data);
			}
		});
}


