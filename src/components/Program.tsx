type ProgramProps = {
  name: string;
  color: string;
};
const Program = ({ name, color }: ProgramProps) => {
  return (
    <div
      style={{
        border: `solid 1rem ${color}`,
        backgroundColor: `${color}`,
        margin: "20px",
      }}
    >
      <h1 style={{ color: "black" }}>{name}</h1>
    </div>
  );
};

export default Program;
