function ClearForm(){
    //document.getElementById("fullname").value ='';
    document.getElementById("contactform").reset();




}

function hideptags(){
        let ptags = document.getElementsByTagName('p');
            for (let item of ptags){
                 // item.style.visibility= 'hidden'; //removes elements, leaves space
                 item.style.display= 'none'; //removes ellemts and the space
                }
}
        
$('#jquerrybtn').click(function(){
    $('p').hide();

  })
