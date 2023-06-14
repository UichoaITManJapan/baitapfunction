//9:Nhập vào một vào một số n, in ra n số nguyên tố tăng dần
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
// function in ra so nguyen to tang dan
let printPrimeNumber = (n) =>{
    if(n < 0){
        alert(" Vui lòng nhập số nguyên dương");
        return;
    }
    let count =0;
    let currentNumber = 2;
    while(count < n){
        if(isPrime(currentNumber)){
            console.log(currentNumber);
            count++
        }
        currentNumber++
    }
}
//so luong can in so nguyen to
n = 5;
//in ra cac so nguyen to theo thu tu tang dan
printPrimeNumber(n);