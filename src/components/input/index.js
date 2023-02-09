import "./style.css";

export const Input = ({ label, placeholder, value, onChange }) => {
  return (
    <div>
      <span>{(label = "Username")}</span>
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        placeholder={(placeholder = "Ex: usuario.exemplo")}
      ></input>
    </div>
  );
};
