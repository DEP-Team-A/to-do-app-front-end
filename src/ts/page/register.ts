const txtName = document.querySelector<HTMLInputElement>('#txt-name')!;
const txtEmail = document.querySelector<HTMLInputElement>('#txt-email')!;
const txtPassword = document.querySelector<HTMLInputElement>('#txt-password')!;
const txtRetypePassword = document.querySelector<HTMLInputElement>('#txt-retypePassword')!;
const alreadyMember = document.querySelector<HTMLAnchorElement>('#already-member')!;
const btnRegister = document.querySelector<HTMLButtonElement>('#btnRegister')!;

const inputs=[txtName,txtEmail,txtPassword,txtRetypePassword];

txtName.addEventListener('input',validateInputs);
txtEmail.addEventListener('input',validateInputs);
txtPassword.addEventListener('input',validateInputs);
txtRetypePassword.addEventListener('input',validateInputs);

function validateInputs(this:HTMLInputElement,e:Event){
    this.classList.remove('is-valid','is-invalid');
    if (e.target===txtName){
        /[A-Za-z]{4,}/.test(txtName.value ?? null) ? txtName.classList.add('is-valid') : txtName.classList.add('is-invalid');
    }else if (e.target===txtEmail){
        /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
          txtEmail.value ?? null
        ) ? txtEmail.classList.add('is-valid'):txtEmail.classList.add('is-invalid');
    }else if (e.target===txtPassword){
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(txtPassword.value ?? null) ? txtPassword.classList.add('is-valid') : txtPassword.classList.add('is-invalid');
    }else {
        txtPassword.value===txtRetypePassword.value ? txtRetypePassword.classList.add('is-valid'):txtRetypePassword.classList.add('is-invalid');
    }
}

alreadyMember.addEventListener('click',()=>{
    document.location.replace('login.html');
});

btnRegister.addEventListener('click',()=>{
    const elements = inputs.filter(value => !value.classList.contains('is-invalid'));
    if (elements){
        elements[0].focus();
        return;
    }

    /* TODO: Connect with the backend*/
});