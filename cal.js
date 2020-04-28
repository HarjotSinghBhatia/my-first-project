
function isNumber(e){
    let number = (e.which) ? e.which : event.keyCode;
    if((number>31 && (number < 46 || number > 57))){
        return false;
    } 
    return true;
}
function calculateCgp(e){
    let array = document.querySelectorAll("input");
    let total = new Number();
    let count = 0;
    let cal;
    array = Array.from(array);
    
    getvalues = array.map((arr)=>{
        if((arr.value <= 10 && arr.value > 4) || arr.value==""){
            return arr.value;
        }else{
            return false;
        }});
    if(getvalues.indexOf(false) !== -1){
        alert("please use valid inputs");
    }else{
        getvalues.forEach((val)=>{
            if(val!==false && val!==''){
                count++;
                total=total+Number(val);
            }
        });
        cal = total/count;
        document.getElementById('ans').textContent = cal;
    }
 
}

