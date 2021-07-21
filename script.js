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

const textarea = document.querySelector('textarea');

function contador() {
  const tamanhoTexto = textarea.value.length;
  const inputLength = textarea.maxLength;
  const contador2 = document.querySelector('#counter');

  contador2.innerHTML = inputLength - tamanhoTexto;
}

textarea.addEventListener('input', contador);
