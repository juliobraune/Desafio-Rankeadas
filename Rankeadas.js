function calcularRanking (vitorias, derrotas){
	return vitorias - derrotas
}

let saldo = calcularRanking (53, 9)
let nivel = "" 

if (saldo <=10){
	nivel = "FERRO"
}
if (saldo >=11 && saldo <=20){ 
	nivel = "BRONZE"
}
if (saldo >=21 && saldo <=50){
	nivel = "PRATA"
}
if (saldo >=51 && saldo <=80){ 
	nivel = "OURO"
}
if (saldo >=81 && saldo <=90){ 
	nivel = "DIAMANTE"
}
if (saldo >=91 && saldo <=100){ 
	nivel = "LENDÁRIO"
}
if (saldo >=101){
	nivel = "IMORTAL"
}

console.log (`O herói tem de saldo de ${saldo} e está no nível ${nivel}!!!`)