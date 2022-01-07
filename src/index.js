module.exports = function reverse (n) {
  let arr=[];
   
        if(n<0){
     n = n + (-n * 2); 
    }
    let str = String(n);
    arr=str.split('');
    arr.reverse();
    if (arr[0]==0){
     arr.shift(); 
    }
  return(arr.join(''));
}
