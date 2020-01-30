import { InputGroup, Input, InputGroupAddon, Button } from "reactstrap";

const InputField = () => (
  <InputGroup>
    <Input placeholder="name@company.com" />
    <InputGroupAddon addonType="append">
      <Button color="primary">SIGN UP FREE</Button>
    </InputGroupAddon>
  </InputGroup>
);

export default InputField;
