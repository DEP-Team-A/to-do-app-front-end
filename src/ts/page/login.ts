const txtPassword = document.querySelector<HTMLInputElement>('#txt-password')!;
const txtEmail = document.querySelector<HTMLInputElement>('#txt-email')!;
const txtRegisterNew = document.querySelector<HTMLParagraphElement>('#register-new a')!;
const btnSignIn = document.querySelector<HTMLParagraphElement>('#btn-signIn')!;

txtPassword.addEventListener('input',validateInputs);
txtEmail.addEventListener('input',validateInputs);

function validateInputs(this:HTMLInputElement,e:Event){
    console.log(this);
    this.classList.remove('is-valid','is-invalid');
    if (e.target===txtEmail){
        if (/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(this.value)){
            this.classList.add('is-valid');
        }else {
            this.classList.add('is-invalid');
        }
    }else {
        if (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$/.test(txtPassword.value)){
            this.classList.add('is-valid');
        }else {
            this.classList.add('is-invalid');
        }
    }

}

txtRegisterNew.addEventListener('click',(e)=>{
    document.location.replace('register.html');
});

btnSignIn.addEventListener('click',()=>{
   /*TODO:connect with the backend*/
});