function calcula() {
    var grama = Number(document.getElementById("grama").value);
    var material = Number(document.getElementById("material").value);
    var impressora = Number(document.getElementById("impressora").value);
    var bico = Number(document.getElementById("nozzle").value);
    var placa = Number(document.getElementById("plate").value);
    var horas = Number(document.getElementById("horas").value);
    var minutos = Number(document.getElementById("minutos").value);
    var qtd = Number(document.getElementById("qtd").value);

    var multPlaca = Math.pow(1.1, qtd - 1) * Math.pow(25 / 24, ((qtd - 1) * (qtd - 2)) / 2); //trabalhar com multiplas chapas para o mesmo trabalho pode ser honeroso e propenso ao erro
    var precoGrama = material / 1000; // PLA 200 reais 1kg com margem de erro
    var tempo = (minutos + (horas * 60)); // tempo é em minutos
    var custoGrama = multPlaca * grama * precoGrama; //depende do material
    var custoEnergia = multPlaca * tempo / 98; // aprox. 1 centavo por minuto, sugeito a alterações
    var custo = custoGrama + custoEnergia; // custo total

    var tempoCLT = 20 * 8 * 60; //20 dias por semana, 8 horas por dia, 60 minutos por hora
    var parcelas = 12; //divide o preço da impressora em quantas vezes
    var margemMaterial = 0.0525; // lucro para investir em mais PLAs

    //custo da impressora + bico + chapa
    //calcula tempo CLT (como se fosse funcionario 40 horas semanais) multiplica pelo tempo usado e depois divide pelas parcelas das compras
    var precoAdicional = ((impressora + bico + placa) / tempoCLT * tempo / parcelas) + (grama * margemMaterial);

    var valor = custo + precoAdicional;

    document.getElementById("custoPLA").value = "R$ " + arredonda(custoGrama);
    document.getElementById("custoEnergia").value = "R$ " + arredonda(custoEnergia);
    document.getElementById("custo").value = "R$ " + arredonda(custo);
    document.getElementById("lucro").value = "R$ " + arredonda(precoAdicional);
    document.getElementById("valor").value = "R$ " + arredonda(valor);
}

function arredonda(numero) {
    var retorno = Math.floor(numero * 100) / 100;
    return retorno.toFixed(2);
}