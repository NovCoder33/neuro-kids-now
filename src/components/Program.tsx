import "./Program.css";
import { useNavigate } from "react-router-dom";

type ProgramProps = {
  name: string;
  color: string;
};
const Program = ({ name, color }: ProgramProps) => {
  const navigate = useNavigate();
  return (
    <div
      className="program"
      style={{
        border: `solid 1rem ${color}`,
        backgroundColor: `${color}`,
        margin: "20px",
        cursor: "pointer",
      }}
      onClick={() => navigate("./programs")}
    >
      <h1 style={{ color: "black" }}>{name}</h1>
    </div>
  );
};

export default Program;
