import { useState } from "react";
function LoginForm() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("https://devapi.swiftly.pro/backend/1.0.0/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email,password})
            })
            const data = await response.json();
            if(data.success == true) {
                localStorage.setItem('swiftypro_token', data.token);
                window.location.href = '/dashboard';
            }

        } catch (error) {
            console.error("Login failed:", error);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
        
    )
}

export default LoginForm;