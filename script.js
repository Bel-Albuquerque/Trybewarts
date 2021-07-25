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
  buttonForm.disabled = true;
  if (checkagreement.checked === true) {
    buttonForm.disabled = false;
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

function subjectChecked() {
  const subjectArray = [];
  const subject = document.querySelectorAll('input[class=subject]');
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked) {
      subjectArray.push(subject[index].value);
    }
  }
  return `Matérias: ${subjectArray.join(', ')}`;
}

function nomeCompleto() {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  return `Nome: ${nome} ${sobrenome}`;
}

function eMail() {
  const email = document.querySelector('#input-email').value;
  return `Email: ${email}`;
}

function casa() {
  const casas = document.querySelector('#house').value;
  return `Casa: ${casas}`;
}

function familia() {
  const familias = document.querySelector('input[name=family]:checked').value;
  return `Família: ${familias}`;
}

function avaliacao() {
  const avaliaçao = document.querySelector('input[name=rate]:checked').value;
  return `Avaliação: ${avaliaçao}`;
}

function observacao() {
  const observaçao = textarea.value;
  return `Observações: ${observaçao}`;
}

function funçaoFinal() {
  const form = document.querySelector('#evaluation-form');

  const valInput = `${nomeCompleto()};<br>
  ${eMail()};
  <br>${casa()};
  <br>${familia()};
  <br>${subjectChecked()};
  <br>${avaliacao()};
  <br>${observacao()};`;

  form.innerHTML = valInput;
}

buttonForm.addEventListener('click', funçaoFinal);
