import { Form } from "react-bootstrap";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Please enter a valid email address"),
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <div className="authentication-section">
      <div className="authentication-grid authentication-grid-lost">
        <div className="authentication-item authentication-img-bg"></div>
        <div className="authentication-item bg-white">
          <div className="authentication-user-panel">
            <div className="authentication-user-header">
              <Link to="/">
                <img src="assets/images/logo.png" alt="logo" />
              </Link>
            </div>
            <div className="authentication-user-body">
              <p className="mt-40">
                Lost your password? Please enter your username or email address.
                You will receive a link to create a new password via email.
              </p>
              <div className="authentication-form">
                <Form noValidate onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 ">
                      <div className="input-area mb-15 pb-4">
                        <label className="input-label-icon">
                          <span>
                            <i className="flaticon-user"></i>
                          </span>
                        </label>
                        <Form.Control
                          type="email"
                          className="input-full w-100"
                          placeholder="Please enter your email address"
                          {...formik.getFieldProps("email")}
                          isInvalid={!!formik.errors.email}
                        />

                        <Form.Control.Feedback type="invalid">
                          &nbsp; &nbsp; {formik.errors.email}
                        </Form.Control.Feedback>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <button
                        className="btn1 orange-gradient full-width"
                        type="submit"
                      >
                        Reset Password
                      </button>
                    </div>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
