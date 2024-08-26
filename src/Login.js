import React, { useState } from 'react';
import './App.css';

function Login() {
  const [showLogin, setShowLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showLogin) {
      // 登录逻辑
      console.log('尝试登录:', formData);
    } else {
      // 注册逻辑
      if (formData.password !== formData.confirmPassword) {
        alert('密码不匹配');
        return;
      }
      console.log('尝试注册:', formData);
    }
  };

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="app-container">
      <div className={`form-container ${showLogin ? 'login-form' : 'register-form'}`}>
        <h2>{showLogin ? '登录' : '注册'}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">用户名:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <label htmlFor="password">密码:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {!showLogin && (
            <>
              <label htmlFor="confirmPassword">确认密码:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </>
          )}
          <button type="submit" className="submitBtn">{showLogin ? '登录' : '注册'}</button>
        </form>
        <button className="toggleFormBtn" onClick={toggleForm}>{showLogin ? '没有账号？去注册' : '已有账号？去登录'}</button>
      </div>
    </div>
  );
}

export default Login;