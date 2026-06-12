import { Formik } from "formik";
const checkValidFormData = (email, password, isSignIn, name) => {
  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email,
  );
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$/.test(
      password,
    );

  if (!isEmailValid) return "Email Id is not Valid";
  if (!isPasswordValid) return "Password is not Valid";

  if (!isSignIn) {
    const isNameValid = /^[a-zA-ZÀ-ÿ' -]+$/.test(name);
    if (!isNameValid) return "Name is not Valid";
  }

  return null;
};

export default checkValidFormData;
