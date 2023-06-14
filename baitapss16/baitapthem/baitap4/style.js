// //Cho chuỗi dài hơn 15 kỹ tự, viết function cắt chuỗi, lấy ra 10 ký tự đầu tiên
// và thêm vào dấu “...” ở cuối chuỗi
//dung arrow function
//tao function cat chuoi va them dau "..."
var cutString = (str) =>{
    if(str.length > 15){
        str = str.slice(0,10) + "..."
    }
    // tra ve chuoi da dc cat
    return str;
}
//chuoi ban dau
var inputString = "chuoi dai hon 15 ki tu";
// goi ham de cat chuoi va in ra ket qua
var result = cutString(inputString);
console.log("ket qua la: " +result);