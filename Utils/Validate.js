export const LoginFormValidation=(email, password)=>{
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i.test(email);
    const passwordRegex =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!emailRegex) return "Email is not valid";
    if(!passwordRegex) return "Password is not valid";
    return null;
}

export const SignupFormValidation = ( email, password) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if (!emailRegex) return "Email is not valid";
    if (!passwordRegex) return "Password is not valid";

    return null; 
}
