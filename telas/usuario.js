// menuzinho que abre na foto do usuário (serve pra todas as telas)
var menuPerfil = document.getElementById('menuPerfil');

// clicou na foto: se tava fechado abre, se tava aberto fecha
function abrirMenu(){
    menuPerfil.classList.toggle('aberto');
}

// clicou em qualquer outro canto da tela? fecha o menu
document.onclick = function(e){
    if(!e.target.closest('.img-user')){
        menuPerfil.classList.remove('aberto');
    }
}
