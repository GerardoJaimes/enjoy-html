const usuarioAlmacenado= [
    {
    nombre: 'Gerardo Laguado',
    correo: 'denisg55@hotmail.com',
    clave:  'Jaimesl25#'},
    {
    nombre: 'Andreina Peña',
    correo: 'gerardoja82@gmail.com',
    clave: 'denisg55'
     }];
    
$(function() {
    $('#button_p').on('click', function(e) {
        e.preventDefault();
    let usuario = {
        correo_electronico: $('#input1').val(),
        contraseña: $('#input2').val()
        }

        if(usuario.correo_electronico !=''&& usuario.contraseña!= ''){             
                let datosNuevo = usuarioAlmacenado.find(function(e){
                return e.correo == usuario.correo_electronico;                           
                });

            if(datosNuevo==undefined){
                 $('#parrafo').text('El usuario no existe');  
            }
                        
                if(datosNuevo.correo==usuario.correo_electronico&& datosNuevo.clave==usuario.contraseña){  
                    $.ajax({
                        url: 'ingresousuario.html',
                        type:'post',
                        contentType: 'application/json',
                        data: JSON.stringify(usuario),
        
                        success: function(resp) {
                        
                            $('#container').html(resp);
                            $('strong').text(datosNuevo.nombre);
                        },
                        error: function(err) {
                            console.log('error: ', err);
                        }
                    }); 
               
                } 
                else{
                    $('#parrafo').text('Usuario y/o contraseña no concuerdan.'); 
                }
            } 
            else{ 
            $('#parrafo').text('Introduzca el Usuario y/o contraseña');
        }  
    });
});    
           
