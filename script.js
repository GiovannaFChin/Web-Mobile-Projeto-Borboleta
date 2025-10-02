document.addEventListener('DOMContentLoaded', function() {
    
    const btnModoEscuro = document.createElement('button');
    btnModoEscuro.innerHTML = '🌙';
    btnModoEscuro.title = 'Modo Escuro';
    btnModoEscuro.id = 'btn-modo-escuro';
    
    document.body.appendChild(btnModoEscuro);
    
    const modoSalvo = localStorage.getItem('modoEscuro');
    if (modoSalvo === 'true') {
        document.body.classList.add('modo-escuro');
        btnModoEscuro.innerHTML = '☀️';
    }
    
    btnModoEscuro.addEventListener('click', function() {
        document.body.classList.toggle('modo-escuro');
        
        const estaEscuro = document.body.classList.contains('modo-escuro');
        localStorage.setItem('modoEscuro', estaEscuro);
        
        this.innerHTML = estaEscuro ? '☀️' : '🌙';
        
        console.log(`Modo ${estaEscuro ? 'Escuro' : 'Claro'} ativado!`);
    });

    const btn = document.getElementById("btnTopo");
  
    window.onscroll = () => {
      if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    };
  
    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
});

function mostrarAlerta(mensagem, tipo = 'sucesso') {
    const modal = document.createElement('div');
    modal.className = `modal-alert ${tipo}`;
    modal.innerHTML = `<span class="modal-msg">${mensagem}</span>`;
    document.body.appendChild(modal);

    setTimeout(() => modal.classList.add('show'), 10);

    const fechar = () => {
        modal.classList.remove('show');
        setTimeout(() => modal.remove(), 200);
    };
    
    setTimeout(fechar, 2000);
}
    
document.addEventListener('DOMContentLoaded', function() {
    const botoesCompra = document.querySelectorAll('.botao-compra');
    if (botoesCompra.length > 0) {
        botoesCompra.forEach(botao => {
            botao.addEventListener('click', function() {
                const item = this.closest('.item');
                const nomeProduto = item.querySelector('h3').innerText;
                const precoProduto = item.querySelector('span').innerText;
                mostrarAlerta(`"${nomeProduto}" (${precoProduto}) foi adicionado ao carrinho!`);
            });
        });
    }

    const formLogin = document.querySelector('form');
    if (formLogin) {
        formLogin.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const medico = document.getElementById('medico').value.trim();
            const telefone = document.getElementById('telefone').value.trim();
            mostrarAlerta(`Bem-vindo, ${nome}! Seu login foi realizado com sucesso.`);
            formLogin.reset();
        });
    }
});
