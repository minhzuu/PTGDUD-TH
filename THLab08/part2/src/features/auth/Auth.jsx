import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./authSlice";
import { LoginForm } from "./LoginForm";
import { UserProfile } from "./UserProfile";
import "./Auth.css";

export function Auth() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className="auth-container">
      {isLoggedIn ? <UserProfile /> : <LoginForm />}
    </div>
  );
}
