// Bài tập 3: Sử dụng arrow funtion, viết hàm tính tích của 2 số,
// gọi hàm và in ra kết quả tích 2 số 5 và 10
let add = (number1, number2) => {
    let volume = number1 * number2;
    return volume;
}
let tich = add(5,10);
console.log(" Tich cua 2 so la :" +tich);
let volume1 =(number1,number2) => number1 * number2;