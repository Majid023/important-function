function select(string){
    
    var array = string.split(" ");
    var color =["a","b","c","d","e"];
    var len = array.length;
    
       if(len>=color.length)
           index = len%color.length;
        else
           index = len;
    
    return color[index];

}
