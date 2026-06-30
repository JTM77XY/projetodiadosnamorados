let imagens = document.getElementsByClassName('imagens')

console.log(imagens);

for(let i=0; i<imagens.length;i++){
    imagens[i].addEventListener('click', function(){
        alert("clicou na imagem" + imagens[i].src)
    })

}








