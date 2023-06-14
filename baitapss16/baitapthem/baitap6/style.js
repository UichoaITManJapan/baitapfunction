// Viết function trả ra giá trị lớn nhất trong một mảng số
//Tìm giá trị lớn nhất trong mảng
let findMaxValue = (arr) =>{
    // Kiểm tra xem mảng có trống hay không
    if(arr.length === 0){
        return  "Mảng trống";
    }
    //KHởi tạo giá trị lớn nhất là số đầu tiên trong mảng
    let max = arr[0];
    // Duyệt các phần tử trong mảng
    for (let i =0; i <arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
     // tra ve ket qua
     return max;
}
// khai bao gia tri ban dau
let inputNumber = [23,34,1,5,68,23];
//goi ham va in ket qua
let result = findMaxValue(inputNumber);
console.log("Gia tri lon nhat la :" + result);