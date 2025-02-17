import React from "react";
import "../styles/ModalWindow.css";

const ModalWindow = ({ active, setActive, dataPerson }) => {
  if (!active) return null;

  //   const obj = JSON.stringify(dataPerson);
  //console.log(dataPerson);

  return (
    <div className="ModalWindow">
      <div className="ModalWindowContent">
        <h2>Вы успешно зарегестрированы!</h2>
        <p>{dataPerson.name}</p>
        <button onClick={() => setActive(!active)}>Закрыть</button>
      </div>
    </div>
  );
};

export { ModalWindow };
