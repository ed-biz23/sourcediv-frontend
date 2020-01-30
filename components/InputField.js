import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";
import styled from "styled-components";

const InputField = () => (
  <InputGroup>
    <Input placeholder="name@company.com" />
    <InputGroupAddon addonType="append">
      <Button color="primary">SIGN UP FREE</Button>
    </InputGroupAddon>
  </InputGroup>
);

export default InputField;
