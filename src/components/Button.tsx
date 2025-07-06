import { useNavigate } from "react-router-dom";
import "./Button.css";
type ButtonProps = {
  location: string;
  children: string;
};
const Button = ({ location, children }: ButtonProps) => {
  const navigate = useNavigate();

  return (
    <div className="button">
      <button onClick={() => navigate(`./${location}`)}>{children}</button>
    </div>
  );
};

export default Button;
