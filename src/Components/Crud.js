import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import "./Styling.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Select from "react-select";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const Crud = () => {
  const [Input, setInput] = useState({
    fname: " ",
    lname: " ",
    email: " ",
    mobile: " ",
    gender: " ",
    location: " ",
  });
  const [Status, setStatus] = useState();
  const [Profile, setProfile] = useState();
  const [image, setimage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const { fname, lname, email, mobile, gender, location } = Input;

    if (fname == " ") {
      toast.error("First Name  is requried!");
    } else if (lname == " ") {
      toast.error("Last  Name  is  Required");
    } else if (email == " ") {
      toast.error("Email   is  required");
    } else if (!email.includes("@")) {
      toast.error("@  is  required  in email");
    } else if (gender == "") {
      toast.error("Gender  is  required");
    } else if (location == " ") {
      toast.error("location  is required");
    } else if (mobile == " ") {
      toast.error("Mobile  number  is required");
    } else if (mobile.length > 11) {
      toast.error("Mobile  Number  is  Less than 11  digits");
    } else {
      toast.success("Registragiont  Successfully  done!");
    }
  };

  useEffect(() => {
    if (image) {
      setImage(URL.createObjectURL(image));
    }
  }, [image]);

  const options = [
    { value: "Active", label: "Active" },
    { value: "InActive", label: "InActive" },
  ];
  //////input
  const setInputData = (e) => {
    const { name, value } = e.target;
    setInput({ ...Input, [name]: value });
  };

  /////status
  const statusValue = (e) => {
    setStatus(e.value);
  };
  //Profile
  const setImage = (e) => {
    setProfile(e.target.file);
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center mt-4">Register Details Here</h2>
        <Card className="mt-3  p-4 shadow">
          <div className="profile-div text-center">
            <img src={image ? image : "/Avatar.png"} alt="img" />
          </div>
          <Form>
            <Row>
              <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="fname"
                  placeholder="Enter FirstName"
                  value={Input.fname}
                  onChange={setInputData}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 mb-3 col-lg-6"
                controlId="formBasicEmail"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lname"
                  placeholder="Enter LastName"
                  value={Input.lname}
                  onChange={setInputData}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 mb-3 col-lg-6 "
                controlId="formBasicEmail"
              >
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Emial"
                  value={Input.email}
                  onChange={setInputData}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 mb-3 col-lg-6 "
                controlId="formBasicEmail"
              >
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="Number"
                  name="mobile"
                  placeholder="Enter Mobile"
                  value={Input.mobile}
                  onChange={setInputData}
                />
              </Form.Group>
              <Form.Group
                className="mb-3 mb-3 col-lg-6 "
                controlId="formBasicEmail"
              >
                <Form.Label>Select your gender</Form.Label>
                <Form.Check
                  type={"radio"}
                  label={`Male`}
                  name="gender"
                  value={"Male"}
                  onChange={setInputData}
                />
                <Form.Check
                  type={"radio"}
                  label={`Female`}
                  name="gender"
                  value={"Female"}
                  onChange={setInputData}
                />
              </Form.Group>

              <Form.Group
                className="mb-3 mb-3 col-lg-6 "
                controlId="formBasicEmail"
              >
                <Form.Label>Select Your status</Form.Label>
                <Select options={options} value={Input} onChange={statusValue} />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Label>Select Your Profile</Form.Label>
                <Form.Control
                  type="file"
                  name="user_profile"
                  placeholder="Select Your Profile"
                  onChange={setImage}
                />
              </Form.Group>

              <Form.Group className="mb-3 col-lg-6 " controlId="formBasicEmail">
                <Form.Label>Enter Your Location</Form.Label>
                <Form.Control
                  type="text"
                  name="location"
                  placeholder="Enter Your  Location"
                  value={Input.location}
                  onChange={setInputData}
                />
              </Form.Group>

              <Button
                onClick={submitHandler}
                variant="primary"
                type="submit"
                className="btn btn-primary btn-lg btn-block"
              >
                Submit
              </Button>
            </Row>
          </Form>
        </Card>
        <ToastContainer position="top-right" />
      </div>
    </>
  );
};

export default Crud;
