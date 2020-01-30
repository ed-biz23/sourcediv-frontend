import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import styled from "styled-components";

const InputField = () => (
  <InputGroup>
    <Input />
    <InputGroupAddon addonType="append">
      <Button color="secondary">To the Right!</Button>
    </InputGroupAddon>
  </InputGroup>
);

export default InputField;
