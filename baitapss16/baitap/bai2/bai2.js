// Bài tập 2: Sử dụng expression function, viết hàm in ra giá trị 
// các phần tử của mảng
let arr =[[1,2,3,4,5,6],[23,33,453,56]];
let printArrElement = () => {
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
};
printArrElement();
