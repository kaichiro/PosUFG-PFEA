import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button } from "semantic-ui-react";

function CheckoutForm(props) {
  const { handleSubmit } = props;
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="order[name]">Seu nome:</label>
          <br />
          <Field name="order[name]" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="order[email]">Email:</label>
          <br />
          <Field name="order[email]" component="input" type="email" />
        </div>
        <div>
          <Button type="submit">Finalizar Compra</Button>
        </div>
      </form>
    </div>
  );
}

CheckoutForm = reduxForm({
  form: "checkout"
})(CheckoutForm);

export default CheckoutForm;
