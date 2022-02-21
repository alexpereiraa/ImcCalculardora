function calcular(){
    var nome = document.getElementById('nome');
    var altura = document.getElementById('altura');
    var peso = document.getElementById('peso');
    var resp = document.getElementById('resp');
    if(nome.value.length <= 0 || peso.value.length <= 0 || altura.value.length <= 0){
        window.alert("[ERRO] Peencha os campos e tente novamente.");
    }else {
        var n1 = Number(altura.value);
        var n2 = Number(peso.value);
        var imc = n2 / n1 **2;
        if(imc < 18.5){
            resp.innerHTML = `${nome.value}, sua massa corporia é: ${imc.toFixed(2)}<br> IMC ABAIXO DE 18,5: MAGRESA`;
        }else if(imc > 18.5 && imc <= 24.9){
            resp.innerHTML = `${nome.value}, sua massa corporia é: ${imc.toFixed(2)}<br> IMC ENTRE 18,5 E 24,9 : NORMAl `;
        }else if(imc >24.9 && imc <=29.9){
            resp.innerHTML = `${nome.value}, sua massa corporia é: ${imc.toFixed(0)}<br> IMC ENTRE 24,9 E 29,9: ACIMA DO PESO`;
        }else if(imc >29.9 && imc <= 39.9){
            resp.innerHTML = `${nome.value}, sua massa corporia é: ${imc.toFixed(2)}<br> IMC ENTRE 29.9 E 39.9: OBESO `;
        }else{
            resp.innerHTML = `${nome.value}, sua massa corporis é: ${imc.toFixed(2)}<br> IMC ACIMA DE 40: OBESIDADE MORBIDA`;
        }
    }
}