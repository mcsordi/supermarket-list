import { useState } from "react";
import "./style.css";
import { Button, Input } from "../../components";

export const Background = () => {
  const [Username, setUserName] = useState("");
  console.log(Username);
  return (
    <div className="backgroud-page">
      <div className="card-items">
        <img className="card-supermarket-image" src="./image/img-supermarket" />
        <div className="text-card">
          <h1>Sua lista de supermercado mais fácil do que nunca</h1>{" "}
          <div className="subtext-card">
            {" "}
            <p>
              Ajudamos você a organizar sua lista de compras de forma
              descomplicada.
            </p>
          </div>
          <div>
            {" "}
            <h3 className="text-input">
              Digite abaixo seu usuário para ter acesso a sua lista de compras:
            </h3>
          </div>
          <div className="principal-input">
            <Input onChange={(text) => setUserName(text)} value={Username} />
          </div>
          <div className="form-button ">
            <Button>Acessar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
