var span1 = document.getElementById('saldn')
var saldoTotal = get
var valorFormatado = saldoTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
span1.textContent=(valorFormatado);