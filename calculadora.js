
function calcularcurp(){
            var nombrex=document.getElementById('nombre').value;
            var apx=document.getElementById('ap').value;
            var amx=document.getElementById('am').value;
            var diax=document.getElementById('dia').value;
            var mesx=document.getElementById('mes').value;
            var aniox=document.getElementById('anio').value;
            var generox=document.getElementById('genero').value;
            var lugarx=document.getElementById('lugar').value;
            
            var curp=apx.substring(0,2)+
                    amx.substring(0,1)+
                    nombrex.substring(0,1)+
                    aniox.substring(2,4)+mesx+diax+
                    generox.substring(0,1)+
                    lugarx.substring(0,1);
            alert(curp);
        }