

function calculadora() {
    const operacao = Number(prompt("Escolha a operação a ser realizada: \n 1 - Adição \n 2 - Subtração \n 3 - Divisão \n 4 - Mutiplicação "));

    let n1 = Number(prompt("Informe o primeiro número: "));
    let n2 = Number(prompt("Informe o segundo número: "));
    var r;

        switch (operacao){
            case 1: 
                r = n1+n2;
                alert(`A soma entre ${n1} e ${n2} é igual a : ${r}`)
            break

            case 2:
                r = n1-n2;
                alert(`A subtração entre ${n1} e ${n2} é igual a : ${r}`)
            break

            case 3:
                r = n1/n2;
                alert(`A divisão entre ${n1} e ${n2} é igual a : ${r}`)
            break

            case 4:
                r = n1*n2;
                alert(`A mutiplicação entre ${n1} e ${n2} é igual a : ${r}`)
            break
        }
    
   
   
}

function repetir() {
    rp = Number(prompt(`Quer realizar outra operação? \n 1 - Sim \n 2 - Não`))
    if (rp==1){
        calculadora() 
    } else {
        alert("Até mais!") 
    }
}
calculadora();
do {
    repetir()
}
while (rp==1);