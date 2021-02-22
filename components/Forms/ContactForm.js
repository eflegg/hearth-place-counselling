import styled from "styled-components";
import theme from "../Theme";
import PropTypes from "prop-types";
import { Component } from "react";
import Input from "./Input";
import validator from "validator";

const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  max-width: 650px;
  margin: 50px auto;
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
      // status: "",
    };
    this.testName = this.testName.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
    this.submitForm = this.submitForm.bind(this);
    // this.validateForm = this.validateForm.bind(this);
    this.testEmail = this.testEmail.bind(this);
    this.testMessage = this.testMessage.bind(this);
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

  testMessage() {
    let { message } = this.state;
    this.setState({
      fnameActive: false,
    });
    if (message !== "") {
      this.setState({
        invalidMessage: false,
        messageError: false,
      });
      return true;
    } else {
      this.setState({
        invalidMessage: true,
        messageError: "Please enter a message!",
      });
    }
  }

  // validateForm() {
  //   return new Promise((resolve, reject) => {
  //     if (this.testName() && this.testEmail() && this.testMessage()) {
  //       resolve("success");
  //     } else {
  //       resolve("error");
  //     }
  //   });
  // }

  // onSubmit(ev) {
  //   ev.preventDefault();
  //   this.testName();
  //   this.testEmail();
  //   this.testMessage();
  //   this.validateForm().then((res, err) => {
  //     if (res === "success") {
  //       this.submitForm();
  //     }
  //   });
  // }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    // const { status } = this.state;
    if (!this.state.status) {
      return (
        <FormContainer
          className={`${
            this.props.className ? this.props.className : ""
          } form-container`}
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xnqoyykd"
          method="POST"
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
            name="_replyto"
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
            narrow
          />
          <Input
            label="Message (please include your subject matter and and outline of the production schedule, if applicable)"
            name={"message"}
            type={"textarea"}
            value={this.state.message}
            onChange={(event) => {
              this.setState({ message: event.target.value });
            }}
            onBlur={this.testMessage}
            error={this.state.invalidMessage}
            errorMessage={
              this.state.messageError ? this.state.messageError : ""
            }
            type={"textarea"}
            wide
          />

          <button className="btn">Submit</button>
        </FormContainer>
      );
    } else if (this.state.status === "SUCCESS") {
      return (
        <p>
          Thank you for reaching out! You can expect a reply in the next two
          business days on MST.{" "}
        </p>
      );
    } else {
      return (
        <FormContainer
          className={`${
            this.props.className ? this.props.className : ""
          } form-container`}
          onSubmit={this.submitForm}
          action="https://formspree.io/f/xnqoyykd"
          method="POST"
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
            name="_replyto"
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
            narrow
          />
          <Input
            label="Message (please include your subject matter and and outline of the production schedule, if applicable)"
            name={"message"}
            type={"textarea"}
            value={this.state.message}
            onChange={(event) => {
              this.setState({ message: event.target.value });
            }}
            onBlur={this.testMessage}
            error={this.state.invalidMessage}
            errorMessage={
              this.state.messageError ? this.state.messageError : ""
            }
            type={"textarea"}
            wide
          />

          <button className="btn">Submit</button>

          <p>
            Oops! There was an error. Please check your fields and try again.{" "}
          </p>
        </FormContainer>
      );
    }
  }
}
