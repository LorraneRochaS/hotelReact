import React from "react";
import S from "./Form.module.css";

// "ID_RESERVA"
// "ID_QUARTO"
// "ID_HOSPEDE"
// "CHECKIN"
//  "CHECKOUT",

const Form = (props) => {
  return (
    <div>
      <form action="">
        <fieldset>
          <label htmlFor="">Reserva</label>
          <input
            type="text"
            placeholder="reserva"
            value={props.reserva}
            onChange={({ target }) => handleChange(target, "ID_RESERVA")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Quarto</label>
          <input
            type="text"
            placeholder="quarto"
            value={props.quarto}
            onChange={({ target }) => handleChange(target, "ID_QUARTO")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Hóspede</label>
          <input
            type="text"
            placeholder="hospede"
            value={props.hospede}
            onChange={({ target }) => handleChange(target, "ID_HOSPEDE")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Check In:</label>
          <input
            type="date"
            placeholder="checkin"
            value={props.checkin}
            onChange={({ target }) => handleChange(target, "CHECKIN")}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="">Checkout:</label>
          <input
            type="date"
            placeholder="checkout"
            value={props.checkout}
            onChange={({ target }) => handleChange(target, "CHECKOUT")}
          />
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
