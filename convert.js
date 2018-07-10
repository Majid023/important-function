function convert(string){

        var SELECT_CHAR=/[a-z|A-Z]/g;
        var SELECT_VOVELS=/[aeiou|AEIOU]/g;
        var arr = string.split(" ");
        var char = "";
        var newarr=[];
    
      
        for(var i=0;i<arr.length;i++){
            str = arr[i].match(SELECT_CHAR);
    
            if(str!==null)
              {
                  newarr.push(str.join(""));
              }
             
        }

        if(newarr.length === 1){
            var vol = newarr[0].match(SELECT_VOVELS);
             
             if(vol !== null){
                char = vol.join("");
                return (newarr[0].charAt(0)+char);
             }
             else{
                  char = newarr[0];
                  return char.substring(0,3);
             }
        }
        else{
              for(var i=0;i<newarr.length;i++){
                 char = char.concat(newarr[i].charAt(0));
              }
              return char.substring(0,3);
        }
        
    }

      
