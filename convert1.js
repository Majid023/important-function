function convert(string){
    
    var SELECT_CHAR=/[a-z|" "]/g;
    return string.toLowerCase().match(SELECT_CHAR).join("").replace(" ","_");
  
}
