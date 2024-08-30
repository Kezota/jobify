import { Form, Link, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

export default function Register() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="Kezia" />
        <FormRow
          type="text"
          name="lastName"
          labelText="last name"
          defaultValue="Mei"
        />
        <FormRow type="text" name="location" defaultValue="Jakarta" />
        <FormRow type="email" name="email" defaultValue="kezia@gmail.com" />
        <FormRow type="password" name="password" defaultValue="password" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}
