import * as React from "react";
import { Link } from "react-router-dom";
import { Button, Form, Header } from "semantic-ui-react";

class PerfilComponent extends React.Component {
  public state = {
    address: "",
    birthDay: Date,
    email: "",
    name: "",
    surname: "",

    submittedAddress: "",
    submittedBirthDay: "",
    submittedEmail: "",
    submittedName: "",
    submittedSurname: ""
  };

  public style = {
    inputs: { padding: 3 }
  };

  public handleChange = (e: any, { name, value }: any) => {
    return this.setState({ [name]: value });
  };

  public handleSubmit = () => {
    const { name, email, surname, address, birthDay } = this.state;
    this.setState({
      submittedAddress: address,
      submittedBirthDay: birthDay,
      submittedEmail: email,
      submittedName: name,
      submittedSurname: surname
    });
  };

  public render() {
    const {
      address,
      birthDay,
      name,
      surname,
      email,

      submittedAddress,
      submittedBirthDay,
      submittedEmail,
      submittedName,
      submittedSurname
    } = this.state;

    return (
      <div>
        <div>
          <Header
            as="h3"
            content="Informações de perfil"
            textAlign="center"
            style={{ marginTop: "2em", padding: "2em 0em" }}
          />
        </div>
        <div
          style={{
            alignContent: "center",
            border: 5,
            borderColor: "black",
            padding: 7
          }}
        >
          <Form onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Input
                placeholder="Name"
                name="name"
                value={name}
                onChange={this.handleChange}
                label="Name"
                required={true}
                width={8}
              />
              <Form.Input
                placeholder="Surname"
                name="surname"
                value={surname}
                onChange={this.handleChange}
                label="Surname"
                required={true}
                width={8}
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                placeholder="Email"
                name="email"
                value={email}
                onChange={this.handleChange}
                label="EMail"
                width={8}
              />
              <Form.Input
                placeholder="Birth Day"
                name="birthDay"
                value={birthDay}
                onChange={this.handleChange}
                label="Birth Day"
                start="1"
                end="7"
                width={4}
              />
            </Form.Group>
            <Form.Group>
              <Form.Field
                placeholder="Address"
                name="address"
                value={address}
                onChange={this.handleChange}
                label="Address"
                control="textarea"
                rows="3"
                width={16}
              />
            </Form.Group>
            <Form.Group style={{ padding: "7" }}>
              <Form.Button content="Submit" />
              <Button>
                <Link to="/">Home</Link>
              </Button>
            </Form.Group>
          </Form>

          <br />

          <strong>onChange:</strong>
          <pre>
            {JSON.stringify(
              { address, birthDay, name, email, surname },
              null,
              5
            )}
          </pre>
          <strong>onSubmit:</strong>
          <pre>
            {JSON.stringify(
              {
                submittedAddress,
                submittedBirthDay,
                submittedEmail,
                submittedName,
                submittedSurname
              },
              null,
              5
            )}
          </pre>
        </div>
      </div>
    );
  }
}

export default PerfilComponent;
