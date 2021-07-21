const buttonLogin = document.querySelector('#buttonLogin');

function preventDef(event) {
  event.preventDefault();
}

buttonLogin.addEventListener('click', preventDef);

const mensagemBoa = 'Olá, Tryber!';
const mensagemRuim = 'Login ou senha inválidos.';

function confirmaLogin() {
  const login = document.querySelector('#login');
  const senha = document.querySelector('#senha');
  if (login.value === 'tryber@teste.com' && senha.value === '123456') {
    alert(mensagemBoa);
  } else {
    alert(mensagemRuim);
  }
}

buttonLogin.addEventListener('click', confirmaLogin);

const buttonForm = document.querySelector('#submit-btn');
const checkagreement = document.querySelector('#agreement');

function ativarButton() {
  if (checkagreement.checked === true) {
    buttonForm.disabled = false;
  } else {
    buttonForm.disabled = true;
  }
}

checkagreement.addEventListener('click', ativarButton);

let textarea = document.querySelector('textarea');

function contador() {
  let textarea = document.querySelector('textarea');
  let tamanhoTexto = textarea.value.length;
  let inputLength = textarea.maxLength;
  let contador = document.querySelector('#counter');

  contador.innerHTML = inputLength - tamanhoTexto;
}

textarea.addEventListener('input', contador);