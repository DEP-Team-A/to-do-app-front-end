const btns = document.querySelectorAll('button')!;


btns.forEach(value => value.addEventListener('click',navigate));

function navigate(this:HTMLButtonElement){
    if (this.innerText==='Login'){
        window.location.replace('login.html');
    }else {
        window.location.replace('register.html');
    }
}

