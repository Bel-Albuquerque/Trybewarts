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

const subjectArray = [];

function subjectChecked() {
  const subject = document.querySelectorAll('input[name="subject"]');
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked === true) {
      subjectArray.push(subject[index].value);
    }
  }
  return subjectArray.join(', ');
}

function funçaoFinal() {
  const materias = subjectChecked();
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const email = document.querySelector('#input-email').value;
  const casa = document.querySelector('#house').value;
  const familia = document.querySelector('input[name="family"]:checked').value;
  const avaliacao = document.querySelector('input[name="rate"]:checked').value;
  const observaçao = textarea.value;
  const form = document.querySelector('#evaluation-form');
  const valorInput = `Nome: ${nome} ${sobrenome};<br>Email: ${email};<br>Casa: ${casa};
  <br>Família: ${familia};<br>Matérias: ${materias};<br>Avaliação: ${avaliacao};
  <br>Observações: ${observaçao};`;
  form.innerHTML = valorInput;
}

buttonForm.addEventListener('click', funçaoFinal);
