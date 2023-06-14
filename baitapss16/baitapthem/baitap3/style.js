//3. Viết function tính thế kỷ của một năm nhập vào từ bàn phím. Biết thế kỷ thứ
// nhất tính từ năm 1 đến 100
//dung arrow function
//function tính thế kỷ của 1 năm
let tinhCentury = (year) =>{
    // tinh toan the ky
    let century = Math.ceil(year/100);
//tra ve ket qua
return century;
}
//nhap nam tu ban phim
let inputYear = prompt("Nhap mot nam");
//chuyen doi gia tri nhap vao la so nguyen
const year = parseInt(inputYear);
// goi ham de tinh the ky va in ra ket qua
const century = tinhCentury(year);
console.log("ket qua la :" + century);
