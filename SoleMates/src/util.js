export function getUserData(){
    const data = JSON.parse(sessionStorage.getItem('userData'));
    return data
}

export function setUserData(data){
    sessionStorage.setItem('userData', JSON.stringify(data));
}

export function clearUserData(){
    sessionStorage.removeItem('userData');
    
}

export function createSubmitRegister(callback){
    return function(event){
        event.preventDefault();
        const formData = new FormData(event.target);

        const email = formData.get('email').trim();
        const password = formData.get('password').trim();
        const rePass = formData.get('re-password').trim();

        const data = {
            email,
            password,
            rePass
        }

        callback(data, event.target);
    }
}


export function createSubmitHandler(callback){
    return function(event){
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);

        callback(data, event.target);
    }
}