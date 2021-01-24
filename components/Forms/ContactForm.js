import styled from "styled-components";
import theme from "../Theme";
import PropTypes from "prop-types";
import { Component } from "react";
import Input from "./Input";
import validator from "validator";

const FormContainer = styled.form`
  border: 2px solid blue;
  display: flex;
  flex-wrap: wrap;
  max-width: 650px;
  margin: 0 auto;
  justify-content: space-between;
`;

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: "",
      email: "",
      publisher: "",
      wordCount: "",
      message: "",
    };
    this.testName = this.testName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.testEmail = this.testEmail.bind(this);
  }

  testName() {
    let { fName } = this.state;
    this.setState({
      fnameActive: false,
    });
    if (fName !== "") {
      this.setState({
        invalidName: false,
        nameError: false,
      });
      return true;
    } else {
      this.setState({
        invalidName: true,
        nameError: "Name is required",
      });
    }
  }

  testEmail() {
    let { email } = this.state;
    //if it is a properly formatted email...
    if (validator.isEmail(email)) {
      //remove all of the error states
      this.setState({
        invalidEmail: false,
        emailError: false,
      });
      return true;
    } else {
      //otherwise let's throw an error...
      this.setState({
        invalidEmail: true,
        emailError: "Please enter a valid email",
      });
    }
  }

  onSubmit() {
    console.log("submitting");
  }

  render() {
    return (
      <FormContainer
        className={`${
          this.props.className ? this.props.className : ""
        } form-container`}
        onSubmit={this.onSubmit}
      >
        <Input
          label="Full Name"
          name={"fName"}
          type={"text"}
          value={this.state.fName}
          onChange={(event) => {
            this.setState({ fName: event.target.value });
          }}
          onBlur={this.testName}
          error={this.state.invalidName}
          errorMessage={this.state.nameError ? this.state.nameError : ""}
          narrow
        />
        <Input
          label="Email"
          name={"email"}
          type={"text"}
          value={this.state.email}
          onChange={(event) => {
            this.setState({ email: event.target.value });
          }}
          onBlur={this.testEmail}
          error={this.state.invalidEmail}
          errorMessage={this.state.emailError ? this.state.emailError : ""}
          narrow
        />
        <Input
          label="Publisher"
          name={"publisher"}
          type={"text"}
          value={this.state.publisher}
          onChange={(event) => {
            this.setState({ publisher: event.target.value });
          }}
          onBlur={this.testName}
          narrow
        />
        <Input
          label="Word Count"
          name={"wordCount"}
          type={"text"}
          value={this.state.wordCount}
          onChange={(event) => {
            this.setState({ wordCount: event.target.value });
          }}
          onBlur={this.testName}
          narrow
        />
        <Input
          label="Message"
          name={"message"}
          type={"text"}
          value={this.state.wordCount}
          onChange={(event) => {
            this.setState({ wordCount: event.target.value });
          }}
          onBlur={this.testName}
          type={"textarea"}
          wide
        />
      </FormContainer>
    );
  }
}
