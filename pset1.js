function Sum(arr){
	sum=0;
      for(let i=0;i<arr.length;i++){
        sum+=arr[i];
      }
      return sum;
    }
    let sum = 0;
    let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2];
    let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26];
 console.log("Final_Sum: "+(Sum(arr_1) + Sum(arr_2)));