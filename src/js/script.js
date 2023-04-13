//Abrir Formulário com botão 
const dados = document.getElementById('dados');
const formulario = document.getElementById('formulario')
const btnAbrirForm = document.getElementById('atualizar-infos')

btnAbrirForm.addEventListener('click', () => {
    dados.style.display = 'none';
    btnAbrirForm.style.display = 'none';
    formulario.style.display = 'block';
})

//Fechar formulário pós-envio
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    dados.style.display = 'flex';
    btnAbrirForm.style.display = 'flex';
    formulario.style.display = 'none'    
})

//Confirmar atualização de dados 
document.getElementById("formulario").addEventListener("submit", (event) => {
    event.preventDefault();  
    const data = new FormData(event.target) 
    
    document.getElementById("nome").innerHTML = data.get("nome")
    document.getElementById("idade").innerHTML = data.get("idade")
    document.getElementById("localizacao").innerHTML = data.get("localizacao")
    document.getElementById("bio").innerHTML = data.get("bio")
    
})

//Alteração imagem
const meuFormulario = document.getElementById('formulario');
const botaoImagem = meuFormulario.querySelector('input[name="imagemperfil"]');
const novaImagem = document.getElementById('perfil');

meuFormulario.addEventListener('submit', function(event) {
  event.preventDefault(); 

  const file = botaoImagem.files[0];
  const reader = new FileReader();
  
    if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        reader.readAsDataURL(file);

        reader.onload = function() {
            novaImagem.src = reader.result; 
        };
    }
});


































