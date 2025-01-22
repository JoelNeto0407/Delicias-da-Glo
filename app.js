//Declarando todas as variáveis

//Cliente
var nome = document.getElementById('nomeCliente') //<--Input
var dataEncomenda = document.getElementById('dataEncomenda') //<--Input
var horarioEntrega = document.getElementById('horarioEntrega') //<-- Input
var numeroCliente = document.getElementById('numeroCliente') //<-- Input

//Bolo
var coresBolo = document.getElementById('cakeColors')
var tipoCobertura = document.getElementById('cobertura') //<-- Select
var recheios = document.getElementById('recheios') //<-- Select
var massas = document.getElementById('massas') //<-- Select

//Globais
var myWAnumber = Number();
var mensagem = String();
var confimrData;
var msg = document.querySelectorAll('.msg-card')[0];

const cliente = {
    nome: nome,
    dataEncomenda: dataEncomenda,
    horarioEntrega: horarioEntrega,
    numero: numeroCliente
}

const bolo = {
    coresBolo: coresBolo,
    tipoCobertura: tipoCobertura,
    recheios: recheios,
    massas: massas
}

//Funções predefinidas
function delay(segundos, chamada) {
    setTimeout(chamada, segundos * 1000);
}


function encodeURIWhatsappMessage() {
    myWAnumber = 924525451;
    mensagem = `*Formulário da Encomenda*
    _Informações sobre o Cliente_ 
    *Nome do Cliente:* ${cliente.nome.value}
    *Data da encomenda:* ${cliente.dataEncomenda.value}
    *Horário de entrega:* ${cliente.horarioEntrega.value}
    *Número do Cliente:* ${cliente.numero.value}
    
    _Informações sobre o Bolo_
    *Cores do Bolo:* ${bolo.coresBolo.value}
    *Tipo de cobertura:* ${bolo.tipoCobertura.value}
    *Recheios:* ${bolo.recheios.value}
    *Massas:* ${bolo.massas.value}
    `;

    let linkWhatsapp = `https://wa.me/${myWAnumber}?text=${encodeURIComponent(mensagem)}`;

    window.open(linkWhatsapp, '_blank');
}

function SendMessage() {
    if (
        nome.value.length == 0 || dataEncomenda.value.length == 0 ||
        horarioEntrega.value.length == 0 ||
        coresBolo.value.length == 0
    ) {
        document.documentElement.style.scrollBehavior = 'smooth';
        window.location = '#top'
        msg.classList.add('reveal');
        delay(2, () => {
            msg.classList.remove('reveal')
        })
    } else {
        confimrData = confirm(`Por favor, antes de clicar em 'OK', confirme as informações: 
Nome: ${cliente.nome.value}
Data da encomenda: ${cliente.dataEncomenda.value}
Horário de entrega: ${cliente.horarioEntrega.value}
Número do Cliente: ${cliente.numero.value}
Cores do Bolo: ${bolo.coresBolo.value}
Tipo de cobertura: ${bolo.tipoCobertura.value}
Recheios: ${bolo.recheios.value}
Massas: ${bolo.massas.value}
`);

        if (confimrData == true) {
            encodeURIWhatsappMessage();
        } else {
            return 0;
        }
    }
}

// Fim :) Delícias  da Glo