import './Registration.css';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from 'store/slices/useSlice';
import {useNavigate} from 'react-router-dom';

function Registration() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const backFunc = () => navigate('/');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const handleClick = (email, password, name) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password, name)
        .then(({user}) => {
          console.log(user);
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
            name: user.name,
          }))
          backFunc();
        })
        .catch(console.error)
    }


  return (
    <div className='registration'>
      <h3 className='loginTitle'>ВХОД В ИНТЕРНЕТ МАГАЗИН</h3>
      <form action="#" className='form'>
      <div>
          <input type="e-mail" placeholder='Ваш e-mail' className='loginInput' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div>
          <input type="text" placeholder='Ваш Имя' className='loginInput' value={name} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div>
          <input type="password" placeholder='Придумайте пароль' className='loginInput' value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      </form>
      <div className='buttonsHolder'>
        <div className='buttonHolder'>
            <button className='loginButton opacity' onClick={() => handleClick(email, password)}>ЗАРЕГИСТРИРОВАТЬСЯ</button>
        </div>
        <div className='spanHolder'>
            <span>ИЛИ</span>
        </div>
        <div className='buttonHolder'>
            <button className='loginButton blue'>ВОЙТИ С FACEBOOK</button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
