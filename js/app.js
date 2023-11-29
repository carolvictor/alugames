function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    //no html o id identifica qual jogo e como existem 3, usamos a crase para concatenar e poder prencher com o ids diferentes.
    //o botão está na tag "a" e o jogo que está alugado contém na tag div a informação de classe dashboard__item__img--rented.
    //Essa classe é o que deixa o botão com cor opcaca e diferencia.
    let imagem = gameClicado.querySelector('.dashboard__items__item');
    //para pegar a div e a tag "a" do gameClicado 
}