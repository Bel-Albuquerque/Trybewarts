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
  for (const index of subject) {
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

const nome = document.querySelector('#input-name').value;
const sobrenome = document.querySelector('#input-lastname').value;
const email = document.querySelector('#input-email').value;
const casa = document.querySelector('#house').value;
const familia = document.querySelector('input[name="family"]:checked').value;
const materias = subjectChecked();
const avaliacao = document.querySelector('input[name="rate"]:checked').value;
const observaçao = textarea.value;
const form = document.querySelector('#evaluation-form');
const etiquetaNome = 'Nome: ';
const etiquetaEmail = 'Email: ';
const etiquetaCasa = 'Casa: ';
const etiquetaFamilia = 'Família: ';
const etiquetaMaterias = 'Matérias: ';
const etiquetaAvaliacoes = 'Avaliação: ';
const etiquetaObservacoes = 'Observações: ';
const espaco = ' ';

function funçaoFinal() {
  form.innerHTML = '';
  form.appendChild(divInputValue(etiquetaNome + nome + espaco + sobrenome));
  form.appendChild(divInputValue(etiquetaEmail + email));
  form.appendChild(divInputValue(etiquetaCasa + casa));
  form.appendChild(divInputValue(etiquetaFamilia + familia));
  form.appendChild(divInputValue(etiquetaMaterias + materias));
  form.appendChild(divInputValue(etiquetaAvaliacoes + avaliacao));
  form.appendChild(divInputValue(etiquetaObservacoes + observaçao));
}

buttonForm.addEventListener('click', funçaoFinal);
