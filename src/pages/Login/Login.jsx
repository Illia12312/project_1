import './Login.css';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/useSlice';
import {useNavigate} from 'react-router-dom';

const Login = () =>{
    const backFunc = () => navigate('/');
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleClick = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
            console.log(user);
            dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.accessToken,
            }))
            backFunc();})
        .catch(alert('Такого пользователя не найдено'))
    }

    return(
        <div className='loginWrap'>
        <div className="login">
            <h3 className='loginTitle'>ВХОД В ИНТЕРНЕТ МАГАЗИН</h3>
            <form action="#">
            <div>
                <input type="e-mail" placeholder='Ваш e-mail:' className='loginInput' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <input type="password" placeholder='Ваш пароль:' className='loginInput' value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            </form>
            <div className='labelHolder'>
                <label htmlFor="loginCheckbox">
                    <input type="checkbox" id="loginCheckbox"/>
                    <span>Запомнить меня</span>
                </label>
                <div className='passwordHolder'>
                    <span>
                        Забыли пароль?
                    </span>
                </div>
            </div>
        </div>
        <div className='buttonsHolder'>
            <div className='buttonHolder'>
                <button className='loginButton opacity' onClick={() => handleClick(email, password)}>ВОЙТИ</button>
            </div>
            <div className='spanHolder'>
                <span>ИЛИ</span>
            </div>
            <div className='buttonHolder'>
                <button className='loginButton blue'>ВОЙТИ С FACEBOOK</button>
            </div>
            <div className='aHolder'>
                <Link to='registration' className='loginLink customLink'>ЗАРЕГИСТРИРОВАТЬСЯ</Link>
            </div>
        </div>
        </div>
    )
}

export default Login;