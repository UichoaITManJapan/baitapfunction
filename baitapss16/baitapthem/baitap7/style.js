// Viết function kiểm tra số chẵn-lẻ, nguyên tố, hoàn hảo
//kiem tra so chan -le
let isEven = (number) =>{
    if(number % 2 == 0){
        return true;
    }
};
//kiem tra so nguyen to
let isPrime = (number) =>{
    if(number <=1){
        return false;
    }
    for ( let i =2; i< Math.sqrt(number); i++){
        if(number % i == 0){
            return false;
        }
    }
    return true;
};
// kiem tra so hoan hao
let isPerfectNumber = (number) =>{
    if(number <=1){
        return false;
    }
    let sum =1;
    for ( let i =2; i < Math.floor(Math.sqrt(number)); i++){
        if(number % i === 0){
            sum += i;
        if(i !== number/i ){
            sum = number/i;
        }
    }
}
// tra ve ket qua
return sum == number;
};
// so can kiem tra
let number = 6;
//in ket qua
//kiem tra so chan
console.log(number +"la so chan" +isEven(number));
//kiem tra so nguyen to
console.log(number + "la so nguyen to" + isPrime(number));
//kiem tra so hoan hao
console.log(number + "la so hoan hao" + isPerfectNumber(number));
