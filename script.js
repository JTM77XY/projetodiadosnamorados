let imagens = document.querySelectorAll('.imagens')
// console.log(imagens);
let contador = 1
for(let i= 0; i<imagens.length;i++){
    imagens[i].addEventListener('click', function(){
        alert("clicou na imagem" + imagens[i].src + contador)
        contador++
    })

}


// function clicar(){
//     alert('clicou')
// }



// imagens.forEach((img, index) => {
//             img.addEventListener('click', () => {
//                 alert(`Você clicou na imagem ${index + 1}! Descrição: ${img.alt}`);
//             });
//         });



