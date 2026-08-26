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

const btnTemaEscuro = document.querySelectorAll('.btn-tema-escuro');
btntemaescuro.addeventlistener('click', mudatema);

function mudatema() {
    const corpaopaginao = document.body;
    if (corpaopaginao.classList.contains("tema-escuro")) {
        corpaopaginao.classList.remove("tema-escuro");
    } else {
        corpaopaginao.classList.add("tema-escuro");
    }
}
