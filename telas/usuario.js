var menuPerfil = document.getElementById('menuPerfil');

function abrirMenu(){
    menuPerfil.classList.toggle('aberto');
}

document.onclick = function(e){
    if(!e.target.closest('.img-user')){
        menuPerfil.classList.remove('aberto');
    }
}
