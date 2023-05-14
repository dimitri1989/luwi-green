var x = 0;

for(var x = 0; x<=50; x++){
    
    if(x % 2 == 0){
        document.getElementById('luwiq').innerHTML += x;
        document.getElementById('luwiq').style.color="green";
        
    }else if(
        x % 2 == 1
    ){
        document.getElementById('kentiq').innerHTML += x;
        document.getElementById('kentiq').style.color="red";
        
    }
    
}