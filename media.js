let n1 = 0;


// let n1 = parseInt(document.getElementById("not_1"). value)

let n2 = 0 ;
// pode ser o mesmo do n1

function soma(n1,n2){
   let sum = n1 + n2;
    alert(sum)
    if (sum >= 60) {
        alert("voce foi aprovado")
    }
    else if (sum == 50 && sum <= 59){
        alert("voce esta de recuperação")
    }
    else{
        alert("voce esta reprovado")
    }
}