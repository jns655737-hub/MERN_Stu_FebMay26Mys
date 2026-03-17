//callback error
function divideNumbers(a,b,callback){
     if(b==0){
        callback("Cannot divided by zero.",null);
        return;
     }
        const result=a/b;
        callback(result);
}
divideNumbers(10,0,function(error,result){
      if(error){
        console.log("Error:",error);
        return;
      }
      else{
      console.log("Result:",result);}
});