function convert(string){

    var SELECT_CHAR=/[a-z|A-Z]/g;
    var arr = string.toLowerCase().split(" ");
    var newarr=[];
    var index =0;


  
  
    for(var i=0;i<arr.length;i++){
        str = arr[i].match(SELECT_CHAR);

        if(str!==null)
          {
              newarr[index] = str.join("");
              index++;
          }
         
    }
    
      return newarr.join("_");
}
