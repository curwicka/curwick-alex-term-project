import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import LoaderButton from "../components/LoaderButton";
import { useAppContext } from "../libs/contextLib";
import { useFormFields } from "../libs/hooksLib";
import { onError } from "../libs/errorLib";
import "./index.css";

export default function Signup() {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",

  });
  const history = useHistory();
  const [newUser, setNewUser] = useState(null);
  const { userHasAuthenticated } = useAppContext();
  const [isLoading, setIsLoading] = useState(false);

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsLoading(true);

    setNewUser("test");

    setIsLoading(false);
  }

  function renderForm() {
    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email" size="lg">
          <Form.Label>E-Mail:</Form.Label>
          <Form.Control autoFocus
                        type="email"
                        value={fields.email}
                        onChange={handleFieldChange} />
        </Form.Group>
        <Form.Group controlId="password" size="lg">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password"
                        value={fields.password}
                        onChange={handleFieldChange} />
        </Form.Group>
        <Form.Group controlId="confirmPassword" size="lg">
          <Form.Label>Confirm Password:</Form.Label>
          <Form.Control type="password"
                        onChange={handleFieldChange}
                        value={fields.confirmPassword} />
        </Form.Group>
        <LoaderButton block
                      size="lg"
                      type="submit"
                      variant="success"
                      isLoading={isLoading}
                      disabled={!validateForm()}>
          Register!
        </LoaderButton>
      </Form>
    );
  }

  return (
    <div className="Regiter">
      {newUser === null ? renderForm()}
    </div>
  );
}
