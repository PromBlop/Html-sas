 const butijao = document.querySelectorAll('button');
    let curtiu = false;
    butijao.addEventlisener('click', ButijaoClicado);
    function ButijaoClicado() {
        console.log('click');
        let texto = botao.querySelector("span");
        if (curtiu === false) {
            
        }
        texto.textContent++;
    }