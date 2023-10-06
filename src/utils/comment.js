export function getTotalComment(comments,count){    
      if(comments?.parent) { 
         return getTotalComment(comments.parent,count+1);}
        if(!comments?.parent) {
          return count;}
    }