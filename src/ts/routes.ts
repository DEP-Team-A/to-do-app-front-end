const token =sessionStorage.getItem('token') ?? localStorage.getItem('token');

if (token){
    //Unauthorized
    if (location.pathname === '/' || location.pathname==='index.html'){
        location.replace('welcome.html');
    }

}