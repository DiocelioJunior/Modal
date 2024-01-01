var nome, email, password, confirmPassword, modal;

function validatePassword() {
    nome = document.getElementById('nome').value;
    email = document.getElementById('email').value;
    password = document.getElementById('senha').value;
    confirmPassword = document.getElementById('confirmarSenha').value;

    modal = document.getElementById('modal');

    if (nome === '' || email === '' || password === '' || confirmPassword === '') {
        modal.classList.add('active');
        return;
    }

     alert('Formulário enviado com sucesso! Seus dados estão seguros, a menos que você seja perseguido por um unicórnio faminto.');
 }


function closeModal() {
    modal.classList.remove('active');
}