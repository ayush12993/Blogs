import "./login.css"

export default function Login() {
  return (
    <div className="login">
                   <form action="" className="loginForm">
                   <label>Email</label>
         <input type="text" placeholder="Enter your Email...." /> 
          <label>Password</label>
         <input type="password" placeholder="Enter your Password...." />
         <button className="loginButton">Login</button>
         </form>
         <button className="loginRegisterButton">Register</button>
    </div>
  )
}
