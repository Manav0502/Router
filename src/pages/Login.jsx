function Login() {
  return (
    <div className="auth-wrapper">
      <div className="card auth-card">
        <h2>Log In</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="ritikvitube22@gmail.com" required />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="••••••••" required />
          </div>
          <button type="submit" className="btn-submit">LOG IN</button>
        </form>
      </div>
    </div>
  );
}

export default Login;