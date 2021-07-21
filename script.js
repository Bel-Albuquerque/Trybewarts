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
