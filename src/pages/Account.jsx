import Heading from "../ui/Heading";
import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import Row from "../ui/Row";
import UpdatePasswordForm from "../features/authentication/UpdatePasswordForm";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm></UpdateUserDataForm>
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdatePasswordForm></UpdatePasswordForm>
      </Row>
    </>
  );
}

export default Account;
