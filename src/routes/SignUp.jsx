import { useContext, useState } from "react";
import { redirect } from "react-router-dom";

export default function SignUp() {
  const [error, setError] = useState("");
  const UserContext = useContext(UserContext);

  function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Passwords does not match!");
    } else {
      const user = userContext.signUp(email, password);

      if (user === null) {
        setError("Sign up failed!");
      } else {
        redirect("/");
      }
    }
  }

  return (
    <form onsubmit={handleSubmit}>
      {error && <p>{error}</p>}
      <input type="email" placeholder="Email" name="email" />
      <input type="password" placeholder="Password" name="password" />
      <input
        type="password"
        placeholder="Confirm password"
        name="confirm password"
      />
      <button type="submit">Sign up</button>
    </form>
  );
}
