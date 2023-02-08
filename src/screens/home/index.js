import "./style.css";
import { Button } from "../../components/button";

export const Background = () => {
  return (
    <div className="backgroud-page">
      <div className="card-items">
        <img className="card-supermarket-image" src="./image/img-supermarket" />
        <div className="text-card">
          <h1>Sua lista de supermercado mais fácil do que nunca</h1>{" "}
          <div>
            {" "}
            <p>
              Ajudamos você a organizar sua lista de compras de forma
              descomplicada.
            </p>
          </div>
          <div className="form-button ">
            <Button>Acessar</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
