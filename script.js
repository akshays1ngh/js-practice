function time(){

    var currentdate = new Date(); 
    var timenow = + currentdate.getHours() + ":"  
            + currentdate.getMinutes() + ":" 
            + currentdate.getSeconds();
        
    document.getElementById("datebtn").innerHTML="time is ="+timenow;

}