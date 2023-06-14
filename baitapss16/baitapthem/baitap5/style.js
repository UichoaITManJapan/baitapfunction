// Viết function chuẩn hóa một từ - chỉ viết hoa chữ cái đầu tiên. Ví dụ:
// “rIkKEi” sau khi chuẩn hóa thành “Rikkei”
//dung arrow function
//Function chuan hoa tu
let  normalizeWord = (word) => {
    // chuan hoa chu cai dau tien
    //sử dụng phương thức charAt(0) để lấy chữ cái đầu tiên của từ 
    //và chuyển nó thành chữ cái in hoa bằng cách sử dụng toUpperCase()
    //chuyển thành chữ cái thường ta sử dung toLowerCase
    let normalizeWord = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    //tra ve tu da dc chuan hoa
    return normalizeWord;
}
//khai bao gia tri ban dau
let inputWord = "rIkKEi";
//goi ham va in ra ket qua
let result = normalizeWord(inputWord);
console.log("ket qua la :" +result);
