var nomeHotel = "";
var nomeUsuario = "";
var escolha = 0;
var escolhaCadsHospe = 0;
var escolhaCadsHospeSistem = 0;
var escolhaEvento = 0;
var listaHospedes = [];

function saudacaoInicio(){
    var agora = new Date();
    var saudacao = "";
    var hora = agora.getHours();
    if(hora >= 0 && hora <= 6){
        saudacao = "Boa Madrugada!";
        return saudacao;
    }else if(hora >= 6 && hora <= 12){
        saudacao = "Bom Dia!";
        return saudacao;
    }else if(hora >= 12 && hora <=18){
        saudacao = "Boa Tarde!";
        return saudacao;
    }else{
        saudacao = "Boa Noite!";
        return saudacao;
    }
}



function verificaHotel(){
    var nome = prompt("Digite o nome do Hotel:");

	if(nome == null || nome == ""){
        var confirmaNome = confirm("Você está tentando digitar o nome do Hotel?");

        if(confirmaNome){
            verificaHotel();
        }else{
            sair();
        }
    }else{
        nomeHotel = nome.toUpperCase();
        alert("O nome do Hotel é " + nomeHotel);
        verificaUsuario();
    }
}

function verificaUsuario(){
    nomeUsuario = prompt("Olá, para continuar digite seu nome:");

    if(nomeUsuario == null || nomeUsuario == ""){
        var confirmaNome = confirm("Você está tentando digitar seu nome?");

        if(confirmaNome){
            verificaUsuario();
        }else{
            sair();
        }
    }else{
        verificaSenha();
    }
}

function verificaSenha(){
    var senha = 2678;
    var senhaDigitada = parseInt(prompt("Digite a senha:"));

    if(isNaN(senhaDigitada)){
        var confirmaSenha = confirm("Você está tentando digitar a senha?");

        if(confirmaSenha){
            alert("A senha é númerica e tem 4 dígitos.")
            verificaSenha();
        }else{
            var confirmaInicio = confirm("Vocês está tentando voltar para o menu inicial?");

            if(confirmaInicio){
                inicio();
            }else{
                sair();
            }
        }

    }else if(senhaDigitada != senha){
        alert("Senha Incorreta!");
        verificaSenha();
    }else{
        alert("Bem vindo ao Hotel " + nomeHotel + ", " + nomeUsuario + " . É um imenso prazer ter você por aqui!");
        inicio();
    }
}

function inicio() {
    var saudacao = saudacaoInicio();

    if(nomeHotel == null || nomeHotel == ""){
        verificaHotel();
    }else if(nomeUsuario == null || nomeUsuario == ""){
        verificaUsuario()
    }else{
        escolha = parseInt(prompt(saudacao + "\nSelecione uma opção: \n1.) Reserva de Quartos \n2.) Cadastro de Hóspedes \n3.) Abastecimento de Carros \n4.) Eventos \n5.) Manutenção do Ar Condicionado \n6.) Sair"));

        switch (escolha) {
            case 1:
                reservaQuartos();
                break;
            case 2:
                cadastroHospedes();
                break;
            case 3:
                abastecerCarros();
                break;
            case 4:
                eventos();
                break;
            case 5:
                manutencaoArCondicionado()  ;
                break;
            case 6:
                sair();
                break;
            default:
                erro()
                break;
        }
    }
}		

function reservaQuartos() {
    alert("HOTEL " + nomeHotel + " - RESERVA DE QUARTOS");

    var vDiariaPadrao = parseFloat(prompt("Qual o valor padrão da diária?"));

    if(vDiariaPadrao < 0){
        alert("Valor inválido, " + nomeUsuario);
        inicio();
    }else if(isNaN(vDiariaPadrao)){
        isNotaNumberValor();
    }else{
        var quantDiarias = parseInt(prompt("Quantas diárias serão necessárias?"));

        if(isNaN(quantDiarias)){
            isNotaNumberQuatidade();
        }else if(quantDiarias < 0 || quantDiarias > 30){ 
            alert("Valor Inválido, " + nomeUsuario);
            inicio();
        }else{
            var vHospedagem = vDiariaPadrao*quantDiarias;

            alert("O valor de " + quantDiarias + " dias de hospedagem é de R$" + vHospedagem.toFixed(2));

            var nomeHospede = prompt("Qual o nome da(o) hóspede?");

            var confirmaHospedagem = confirm("Você confirma a hospedagem para " + nomeHospede + " por " + quantDiarias + " dias?");

            if(confirmaHospedagem){
                alert(nomeUsuario + ", reserva efetuada para " + nomeHospede + ". O valor total é de R$" + vHospedagem.toFixed(2) + ".");
                inicio();
            }else{
                alert(nomeUsuario + ", reserva não efetuada.");
                inicio();
            }
        }
    }
}

function cadastroHospedes() {
    alert("HOTEL " + nomeHotel + " - CADASTRO DE HÓSPEDES");

    escolhaCadsHospe = parseInt(prompt("HOTEL " + nomeHotel + " - CADASTRO DE HÓSPEDES\n\nSelecione uma opção:\n 1). Cadastro de Hóspedes - Por Idade\n 2). Cadastro de Hóspedes - Até 15\n 3). Voltar"))

    switch (escolhaCadsHospe) {
        case 1:
            cadastroHospedesIdade();
            break;
        case 2:
            cadastroHospedesSistem();
            break;
        case 3:
            inicio();
            break;
        default:
            erroCadastHospedes();
            break;
    }
}

function cadastroHospedesIdade(){
    alert("HOTEL " + nomeHotel + " - CADASTRO DE HÓSPEDES - POR IDADE");

    var gratuidade = 0
    var meia = 0;
    var inteira = 0;
    var totalHospedagem = 0;

    var vDiariaPadrao = parseFloat(prompt("Qual o valor padrão da diária?"));

    if(isNaN(vDiariaPadrao)){
        isNotaNumberValor()
    }else{
        var nomeHospede = prompt("Qual o nome da(o) Hóspede?");

        while(nomeHospede != "PARE"){
            var idadeHospede = parseInt(prompt("Qual a idade da(o) Hóspede?"));

            if(idadeHospede < 6){
                totalHospedagem += 0
                gratuidade ++;
                alert(nomeHospede + " cadastrada(o) com sucesso. " + nomeHospede + " possui gratuidade");
            }else if(idadeHospede > 60){
                totalHospedagem += (vDiariaPadrao / 2);
                meia ++;
                alert(nomeHospede + " cadastrada(o) com sucesso. " + nomeHospede + " paga meia")
            }else{
                totalHospedagem = totalHospedagem + vDiariaPadrao;
                inteira ++;
                alert(nomeHospede + " cadastrada(o) com sucesso.");
            }

            nomeHospede = prompt("Qual o nome da(o) Hóspede?");
        }

        alert(nomeUsuario + ", o valor total das hospedagens é: R$" + totalHospedagem.toFixed(2) + "; " + gratuidade + " gratuidade(s); " + meia + " meia(s); " + inteira + " inteira(s).")
        cadastroHospedes();
    }
}

function cadastroHospedesSistem(){
    alert("HOTEL " + nomeHotel + " - CADASTRO DE HÓSPEDES - ATÉ 15 HÓSPEDES");
    
    escolhaCadsHospeSistem = parseInt(prompt("HOTEL " + nomeHotel + " - CADASTRO DE HÓSPEDES - ATÉ 15 HÓSPEDES\n\nSelecione uma opção:\n 1). Cadastrar\n 2). Pesquisar\n 3). Sair"))

    switch (escolhaCadsHospeSistem) {
        case 1:
            cadHospedSistem();
            break;
        case 2:
            PesqHospedSistem();
            break;
        case 3:
            inicio();
            break;
        default:
            erroCadastHospedes();
            break;
    }
}

function cadHospedSistem(){
    if(listaHospedes.length >= 15){
        alert("Máximo de cadastros atingidos.");
    }else{
        var nomeHospede = prompt("Qual o nome da(o) hóspede?");

        if(nomeHospede == null || nomeHospede == ""){
            var confirmaHospede = confirm("Você está tentando digitar o nome?");

            if(confirmaHospede){
                cadastHospedSistem();
            }else{
                sair();
            }
        }else{
            listaHospedes.push(nomeHospede);
            alert("Sucesso! Hóspede " + nomeHospede + " foi cadastrada(o) com sucesso!\n")
            cadastroHospedesSistem()
        }
    }
}

function PesqHospedSistem(){
    var nomeHospede = prompt("Qual o nome da(o) hóspede?");

    if(nomeHospede == null || nomeHospede == ""){
        var confirmaHospede = confirm("Você está tentando digitar o nome?");

        if(confirmaHospede){
            PesqHospedSistem();
        }else{
            sair();
        }
    }else{
        if(listaHospedes.includes(nomeHospede)){
            alert(nomeHospede + " encontrada(o).");
        }else{
            alert(nomeHospede + " não foi encontrada(o).");
        }

        cadastroHospedesSistem()
    }
}

function eventos(){
    alert("HOTEL " + nomeHotel + " - EVENTOS");

    escolhaEvento = parseInt(prompt("HOTEL " + nomeHotel + " - EVENTOS\n\nSelecione uma opção: \n 1.) Garçons\n 2.) Buffet\n 3.) Auditório\n 4.) Reserva de Restaurante\n 5.) Sair"));

    switch (escolhaEvento) {
        case 1:
            quantGarcons();
            break;
        case 2:
            buffetHotel();
            break;
        case 3:
            auditorioHotel();
            break;
        case 4:
            reservaRestaurante();
            break;
        case 5:
            inicio();
            break;
        default:
            erro();
            break;
    }
}

function quantGarcons(){
    alert("HOTEL " + nomeHotel + " - CONTRATAR GARÇONS")
    var custoGarconHora = 10.50;
    var duracaoEventos = parseInt(prompt("Qual a duração do evento em horas?"));

    if(isNaN(duracaoEventos)){
        isNotaNumberHora();
    }else{
        var quantGarcons = parseInt(prompt("Quantos garçons são necessários"));

        if(isNaN(quantGarcons)){
            isNotaNumberQuatidade();
        }else{
            var custoTotalGarcon = quantGarcons*custoGarconHora*duracaoEventos;

            alert("O custo total é: " + custoTotalGarcon.toFixed(2));
            var confirmarReserva = confirm("Gostaria de efetuar a reserva?");

            if(confirmarReserva){
                alert(nomeUsuario + ", reserva efetuada com sucesso.");
                eventos();
            }else{
                alert(nomeUsuario + ", reserva não efetuada.");
                eventos();
            }
        }
    }
}

function buffetHotel(){
    alert("HOTEL " + nomeHotel + " - BUFFET")
    var custoTotal = 0;
    var cafe = 0.20;
    var litrosCafe = 0.80;
    var custoCafe = 0;
    var quantCafe = 0;
    var agua = 0.50;
    var litrosAgua = 0.40;
    var custoAgua = 0;
    var quantAgua = 0;
    var salgado = 7;
    var centoSalgado = 0.34;
    var custoSalgado = 0;
    var quantSalgado = 0;

    var quantConvidados = parseInt(prompt("Qual o número de convidados para o evento?"));

    if(isNaN(quantConvidados)){
        isNotaNumberQuatidade()
    }else if(quantConvidados > 350){
        alert("Quantidade de convidados superior à capacidade máxima");
        buffetHotel();
    }else{
        quantCafe = cafe * quantConvidados;
        quantAgua = agua * quantConvidados;
        quantSalgado = salgado * quantConvidados;
        custoCafe = quantCafe * litrosCafe;
        custoAgua = quantAgua * litrosAgua;
        custoSalgado = quantSalgado * centoSalgado;
        custoTotal = custoCafe + custoAgua + custoSalgado;

        alert("O evento precisará de " + quantCafe + " litros de café, " + quantAgua + " litros de água, " + quantSalgado + " salgados. O custo total do evento será de R$ " + custoTotal.toFixed(2));

        var confirmarReserva = confirm("Gostaria de confirmar a reserva?");

        if(confirmarReserva){
            alert(nomeUsuario + ", reserva efetuada com sucesso.");
            eventos();
        }else{
            alert(nomeUsuario + ", reserva não efetuada.");
            eventos();
        }

    }
}

function auditorioHotel(){
    alert("HOTEL " + nomeHotel + " - AUDITÓRIO");

    var quantConvidados = parseInt(prompt("Qual o número de convidados para o seu evento?"));

    if(isNaN(quantConvidados)){
        isNotaNumberQuatidade();
    }else if(quantConvidados < 0 || quantConvidados > 350){
        alert("Número de convidados inválido");
        auditorioHotel();
    }else if(quantConvidados <= 150){
        alert("Use o auditório Laranja");
        var confirmarReservaLaranja = confirm("Gostaria de efetuar a Reserva?");

        if(confirmarReserva){
            alert(nomeUsuario + ", reserva efetuada com sucesso.");
            eventos();
        }else{
            alert(nomeUsuario + ", reserva não efetuada.");
            eventos();
        }
    }else if(quantConvidados > 150 && quantConvidados <= 220){
        var adicional = quantConvidados - 150;

        alert("Use o auditório Laranja (inclua mais " + adicional +"cadeiras)");
        var confirmarReservaLaranjaAdicional = confirm("Gostaria de efetuar a Reserva?");

        if(confirmarReservaLaranjaAdicional){
            alert(nomeUsuario + ", reserva efetuada com sucesso.");
            eventos();
        }else{
            alert(nomeUsuario + ", reserva não efetuada.");
            eventos();
        }
    }else{
        alert("Use o auditório Colorado");
        var confirmarReservaColorado = confirm("Gostaria de efetuar a Reserva?");

        if(confirmarReservaColorado){
            alert(nomeUsuario + ", reserva efetuada com sucesso.");
            eventos();
        }else{
            alert(nomeUsuario + ", reserva não efetuada.");
            eventos();
        }
    }
}

function reservaRestaurante(){
    alert("HOTEL " + nomeHotel + " - RESERVAR RESTAURANTE");
    var diaEvento = "";
    var dEvento = prompt("Qual o dia do seu evento?");

    if(dEvento == null || dEvento == ""){
        var confirmaDEvento = confirm("Você está tentando digitar o dia do evento?");

        if(confirmaDEvento){
            reservaRestaurante();
        }else{
            var confirmaMenuInicial = confirm("Você está tentando voltar para o menu inicial?");

            if(confirmaMenuInicial){
                eventos();
            }else{
                sair();
            }
        }
    }else{
        diaEvento = dEvento.toLowerCase();
        var horaEvento = parseInt(prompt("Qual a hora do seu evento?"));

        if(isNaN(horaEvento) || horaEvento == "" || horaEvento < 7 || horaEvento > 23){
            alert("Horário Inválido");
            horaEvento = parseInt(prompt("Qual a hora do seu evento?"));
        }else{
            if(diaEvento == "segunda" || diaEvento == "terca" || diaEvento == "quarta" || diaEvento == "quinta" || diaEvento == "sexta"){
                if(horaEvento < 23){
                    var nomeEmpresaInicioSemana = prompt("Qual o nome da empresa?");
                    alert("Restaurante reservado para " + nomeEmpresaInicioSemana + ". " + dEvento + " às " + horaEvento);
                    eventos();
                }else{
                    alert("Restaurante Indisponível");
                    eventos();
                }
            }else if(diaEvento == "sabado" || diaEvento == "domingo"){
                if(horaEvento < 15){
                    var nomeEmpresaFinalSemana = prompt("Qual o nome da empresa?");;
                    alert("Restaurante reservado para " + nomeEmpresaFinalSemana + ". " + dEvento + " às " + horaEvento);
                    eventos();
                }else{
                    alert("Restaurante Indisponível");
                    eventos();
                }
            }
        }
    }
}

function abastecerCarros() {
    alert("HOTEL " + nomeHotel + " - ABASTECER");

    var diferenca = 0;
    var alcoolW = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));

    if(isNaN(alcoolW)){
        isNotaNumberValor();
    }else{
        var gasosaW = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));

        if(isNaN(gasosaW)){
            isNotaNumberValor();
        }else{
            var alcoolS = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));

            if(isNaN(alcoolS)){
                isNotaNumberValor();
            }else{
                var gasosaS = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));
                
                if(isNaN(gasosaS)){
                    isNotaNumberValor();
                }else{
                    if(alcoolW < alcoolS && gasosaW < gasosaS){
                        if(alcoolW < gasosaW){
                            diferenca = (alcoolW*100)/gasosaW;
                            if(diferenca <= 70){
                                alert(nomeUsuario + ", é mais barato abastecer com álcool no Wayne Oil.");
                            }else{
                                alert(nomeUsuario + ", é mais barato abastecer com gasolina no Wayne Oil.");
                            }
                        }else{
                            alert(nomeUsuario + ", é mais barato abastecer com gasolina no Wayne Oil.");
                        }
                    }else if(alcoolS < alcoolW && gasosaS < gasosaW){
                        if(alcoolS < gasosaS){
                            diferenca = (alcoolS*100)/gasosaS;
                            if(diferenca <= 70){
                                alert(nomeUsuario + ", é mais barato abastecer com álcool no Stark Petrol.");
                            }else{
                                alert(nomeUsuario + ", é mais barato abastecer com gasolina no Stark Petrol.");
                            }
                        }else{
                            alert(nomeUsuario + ", é mais barato abastecer com gasolina no Stark Petrol.");
                        }
                    }else{
                        if(alcoolW < gasosaS){
                            diferenca = (alcoolW*100)/gasosaS;
                            if(diferenca <= 70){
                                alert(nomeUsuario + ", é mais barato abastecer com álcool no Wayne Oil.");
                            }else{
                                alert(nomeUsuario + ", é mais barato abastecer com gasolina no Stark Petrol.");
                            }
                        }else if(alcoolS < gasosaW){
                            diferenca = (alcoolS*100)/gasosaW;
                            if(diferenca <= 70){
                                alert(nomeUsuario + ", é mais barato abastecer com álcool no Stark Petrol.");
                            }else{
                                alert(nomeUsuario + ", é mais barato abastecer com gasolina no Wayne Oil.");
                            }
                        }
                    }

                    inicio();
                }
            }
        }
    }
}

function manutencaoArCondicionado(){
    var contagem = 0;
    var custoTotal = 0;
    var custoMaisBarato = 0;
    var empresaMaisBarata = "";
    var informarNovosDados = true;

    while(informarNovosDados){
        var nomeEmpresa = prompt("Qual o nome da empresa?");

        if(nomeEmpresa == null || nomeEmpresa == ""){
            var confirmarNome = confirm("Você está tentando digitar o nome da empresa?");

            if(confirmarNome){
                manutencaoArCondicionado();
            }else{
                var confirmarInicio = confirm("Você está tentando voltar para o menu inicial?");

                if(confirmarInicio){
                    informarNovosDados = false;
                    inicio();
                }else{
                    informarNovosDados = false;
                    sair();
                }
            }
        }else{
            var porcento = 0;
            var valorAparelho = parseInt(prompt("Qual o valor por aparelho?"));
            var quantAparelho = parseInt(prompt("Qual a quantidade de aparelhos?"));
            var porcentagemDesc = parseInt(prompt("Qual a porcentagem de desconto?"));
            var quantMinAparelho = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));

            if(quantAparelho >= quantMinAparelho){
                porcento = (porcentagemDesc/100)*(valorAparelho*quantAparelho);
                custoTotal = (valorAparelho*quantAparelho)-porcento;

                alert("O serviço da " + nomeEmpresa + " custará R$ " + custoTotal.toFixed(2));

            }else{
                custoTotal = valorAparelho*quantAparelho;
                alert("O serviço da " + nomeEmpresa + " custará R$ " + custoTotal.toFixed(2));
            }

            if(contagem == 0){
                custoMaisBarato = custoTotal;
                empresaMaisBarata = nomeEmpresa + " por R$" + custoTotal.toString();
            }else if(custoTotal < custoMaisBarato){
                custoMaisBarato = custoTotal;
                empresaMaisBarata = nomeEmpresa + " por R$" + custoTotal.toString(); 
            }
            
            contagem++
            informarNovosDados = confirm("Deseja informar novos dados, " + nomeUsuario + "?");
        }
    }

    alert("O orçamento de menor valor é o " + empresaMaisBarata);
    inicio();
}

function sair() {

    if(nomeHotel == "" || nomeHotel == null){
        var confirmaSaidaHotel = confirm('Você deseja sair?');
        if (confirmaSaidaHotel) {
            alert("Muito obrigado e até logo.");
            window.close();
        } else {
            verificaHotel();
        }
    }else if(nomeUsuario == "" || nomeUsuario == null){
        var confirmaSaidaUsuario = confirm('Você deseja sair?');
        if (confirmaSaidaUsuario){
            alert("Muito Obrigado e até logo.");
            window.close();
        }else{
            verificaUsuario();
        }
    }else{
        var confirma = confirm("Você deseja sair?");
        if(confirma){
            alert("Muito Obrigado e até logo, " + nomeUsuario);
            window.close()
        }else{
            inicio();
        }
    }
}

function erro() {
    if(escolha == 4){
        alert('Por favor, informe um número entre 1 e 5');
        eventos();
    }else{
        alert('Por favor, informe um número entre 1 e 6');
        inicio();
    }
}

function erroCadastHospedes(){

    if(escolhaCadsHospe == 2){
        alert("Por favor, informe um número entre 1 e 3");
        cadastroHospedesSistem();
    }else{
        alert("Por favor, informe um número entre 1 e 3");
        cadastroHospedes();
    }
}

function isNotaNumberValor(){
    var confirmarValor = confirm("Você está tentando digitar o valor?");

    if(confirmarValor){
        alert('Digite o valor com números e use o "." no lugar da vírgula \nEx: 120.50');

        if(escolha == 1){
            reservaQuartos();
        }else if(escolha == 2 && escolhaCadsHospe == 0){
            cadastroHospedes();
        }else if(escolhaCadsHospe == 1){
            cadastroHospedesIdade();
        }else if(escolhaCadsHospe == 2){
            cadastroHospedesSistem();
        }
        else if(escolha == 3){
            abastecerCarros();
        }

    }else{
        var confirmarInicio = confirm("Você está tentando voltar para o menu inicial?");

        if(confirmarInicio){
            inicio();
        }else{
            sair();
        }
    }
}

function isNotaNumberQuatidade(){
    var confirmarValor = confirm("Você está tentando digitar a quantidade?");

    if(confirmarValor){

        if(escolha == 1){
            reservaQuartos();
        }else if(escolha == 2){
            cadastroHospedes();
        }else if(escolha == 3){
            abastecerCarros();
        }else if(escolha == 4){
            if(escolhaEvento == 1){
                quantGarcons();
            }else if(escolhaEvento == 2){
                buffetHotel();
            }else if(escolhaEvento == 3){
                auditorioHotel();
            }else if(escolhaEvento == 4){
                reservaRestaurante();
            }
        }

    }else{
        var confirmarInicio = confirm("Você está tentando voltar para o menu inicial?");

        if(confirmarInicio){
            inicio();
        }else{
            sair();
        }
    }
}

function isNotaNumberHora(){
    var confirmarHora = confirm("Você está tentando digitar a hora?");

    if(confirmarHora){
        quantGarcons();
    }else{
        var confirmaInicio = confirm("Você está tentando voltar pra o menu inicial?");

        if(confirmaInicio){
            inicio();
        }else{
            sair();
        }
    }
}

verificaHotel();