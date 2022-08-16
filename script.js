function selecionarPratos(pratoSelecionado) {
    const pratoSelecionadoAnteriormente = document.querySelector('.caixa-prato-principal .selecionado');
    if (pratoSelecionadoAnteriormente !== null) {
        pratoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    pratoSelecionado.classList.toggle('selecionado');
    const valorPratoSelecionado = document.querySelector('.caixa-prato-principal .selecionado .valor');
    console.log(valorPratoSelecionado.innerHTML);

}
function selecionarBebidas(bebidaSelecionada) {
    const bebidaSelecionadaAnteriormente = document.querySelector('.caixa-bebidas .selecionado');
    if (bebidaSelecionadaAnteriormente !== null) {
        bebidaSelecionadaAnteriormente.classList.remove('selecionado');
    }
    bebidaSelecionada.classList.toggle('selecionado');
    const valorBebidaSelecionada = document.querySelector('caixa-bebidas .selecionado .valor');
    console.log(valorBebidaSelecionada.innerHTML);

}
function selecionarSobremesa(sobremesaSelecionada) {
    const sobremesaSelecionadaAnteriormente = document.querySelector('.caixa-sobremesa .selecionado');
    if (sobremesaSelecionadaAnteriormente !== null) {
        sobremesaSelecionadaAnteriormente.classList.remove('selecionado');
    }
    sobremesaSelecionada.classList.toggle('selecionado');
    const valorSobremesaSelecionada = document.querySelector('.caixa-sobremesa .selecionado .valor');
    console.log(valorSobremesaSelecionada, innerHTML);
}
function fecharPedido() {
    const valorPratoSelecionado = document.querySelector('.caixa-prato-principal .selecionado .valor').innerHTML;
    const valorBebidaSelecionada = document.querySelector('caixa-bebidas .selecionado .valor');
    const valorSobremesaSelecionada = document.querySelector('.caixa-sobremesa .selecionado .valor');

}


