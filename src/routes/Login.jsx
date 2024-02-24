import { Link } from "react-router-dom";

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Email" name="email" />
      <br />
      <input type="password" placeholder="Password" name="password" />
      <br />
      <button type="submit">Login</button>
      <Link to="sign-up">Sign up</Link>
    </form>
  );
}
