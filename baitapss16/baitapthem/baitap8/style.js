// Viết function trả ra trung bình cộng của một mảng số
let tinhAverage = (arr) => {
    if(arr.length == 0){
        return 0;
    }
    let sum = arr.reduce(function(a,b){
        return a+b;
    })
    let average = sum / arr.length;
    return average;
}
//mang so ban dau
let number = [21,213,34,156,353];
// goi ahm de tinh trung binh cong va in ket qua
let averageValue = tinhAverage(number);
console.log(" trung binh cong cua mang la: " + averageValue);