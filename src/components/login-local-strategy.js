import React, { useContext, useState } from "react";
import { Segment, Form, Input, Button } from "semantic-ui-react";
import _ from "lodash";
import { UserContext } from "../context/user-context";

export default function LoginLocalStrategy() {
  const name = useFormInput("");
  const email = useFormInput("");
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(UserContext);

  const onSubmit = () => {
    dispatch({
      type: "LOGIN",
      payload: {
        id: _.uniqueId(10),
        name: name.value,
        email: email.value
      }
    });
    // Reset Form
    name.onReset();
    email.onReset();
  };

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            <Input placeholder="Enter Name" {...name} required />
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="Enter Email" {...email} type="email" required />
          </Form.Field>
          <Form.Field width={4}>
            <Button fluid primary>
              New Contact
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset
  };
}
