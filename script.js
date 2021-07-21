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

buttonForm.addEventListener('click', preventDef);

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

const subjectArray = [];

function subjectChecked() {
  const subject = document.querySelectorAll('input[name="subject"]');
  for (let index of subject) {
    if (index.checked === true) {
      subjectArray.push(index.value);
    }
  }
  return subjectArray.join(', ');
}

function divInputValue(valorInput) {
  const novaDiv = document.createElement('div');
  novaDiv.innerHTML = valorInput;
  return novaDiv;
}

function funçaoFinal() {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector("#input-email").value;
  const casa = document.querySelector('#house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const materias = subjectChecked();
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const observaçao = textarea.value;
  const form = document.querySelector('#evaluation-form');
  form.innerHTML = '';
  form.appendChild(divInputValue('Nome: ' + nome + ' ' + sobrenome));
  form.appendChild(divInputValue('Email: ' + email));
  form.appendChild(divInputValue('Casa: ' + casa));
  form.appendChild(divInputValue('Família: ' + familia));
  form.appendChild(divInputValue('Matérias: ' + materias));
  form.appendChild(divInputValue('Avaliação: ' + avaliacao));
  form.appendChild(divInputValue('Observações: ' + observaçao));
}

buttonForm.addEventListener('click', funçaoFinal)
