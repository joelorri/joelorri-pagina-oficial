$(document).ready(main)
var comptador = 1;
function main(){
    $('.menu_barra').click(function(){
        if(comptador==1){
            $('nav').animate({
                right:'0%'
            });
            comptador = 0 ;
        }else{
            comptador = 1 ;
            $('nav').animate({
                right:'-100%'
        });
    }

})
};
$('.submenu').click(function(){
    $(this).children('.subm-fill').slidetoggle();
});