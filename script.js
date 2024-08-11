let btns=document.querySelectorAll(".box");
let input=document.querySelector(".show");
string="";

btns.forEach((box)=>{
  box.addEventListener("click",(e)=>{ 
    if(e.target.innerHTML=="="){
      // if(string=" "){
      //   input.value="=";
      // }
      //else{
        string=eval(string);
        input.value=string;
      //}
      
    }
    else if(e.target.innerHTML=="AC"){
      string=" ";
      input.value=string;
    }
    else if(e.target.innerHTML=="0"){
      string=string+"0";
      input.value=string;
    }
    else if(e.target.innerHTML=="0"){
      string=string+".";
      input.value=string;
    }
    else if(e.target.innerHTML=="DEL"){
      string=string.slice(0,-1);
      input.value=string;
    }
    else if(e.target.innerHTM=="%"){
      string=eval(string);
      input.value=string;
    }
    else{
    //console.log(e.target);
    string=string+e.target.innerHTML;
    //console.log(string);
    input.value=string;
    }
  })
})