import styled from "styled-components";
import theme from "../Theme";
import PropTypes from "prop-types";
import { useState } from "react";

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  label {
    font-family: ${theme.type.body};
    font-size: 20px;
    margin-bottom: 10px;
    color: ${theme.colours.black};
  }
  input {
    border: 1px solid ${theme.colours.black};
    height: 50px;
    padding-left: 10px;
  }
  textarea {
    min-height: 250px;
  }

  &.field--full {
    width: 100%;
  }
  &.field--narrow {
    width: 48%;
  }
`;

export default function Input(props) {
  const [focused, setFocused] = useState(false);
  function onBlur() {
    setFocused(false);
    if (props.onBlur) {
      props.onBlur();
    }
  }
  function onFocus() {
    setFocused(true);
  }
  return (
    <FormField
      className={`${props.error ? "field--error" : ""} ${
        focused ? "active" : ""
      } ${props.wide ? "field--full" : ""} ${
        props.narrow ? "field--narrow" : ""
      }  form-field`}
    >
      {props.label ? (
        <label name={props.name ? props.name : ""}>{props.label}</label>
      ) : null}
      {props.assistiveText && (
        <>
          <small className="text--assistive">{props.assistiveText}</small>
        </>
      )}
      {props.type === "textarea" ? (
        <textarea
          onKeyUp={props.onKeyUp}
          onChange={(event) => {
            if (props.onChange) {
              // this propagates the onChange event from the child to the parent
              props.onChange(event);
            }
          }}
          readOnly={props.readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          value={props.value ? props.value : ""}
          name={props.name ? props.name : null}
          type={props.type ? props.type : "text"}
        ></textarea>
      ) : (
        <input
          onKeyUp={props.onKeyUp}
          onChange={(event) => {
            if (props.onChange) {
              props.onChange(event);
            }
          }}
          readOnly={props.readOnly}
          onFocus={onFocus}
          onBlur={onBlur}
          value={props.value ? props.value : ""}
          name={props.name ? props.name : null}
          type={props.type ? props.type : "text"}
        />
      )}
      {props.error && props.errorMessage ? (
        <p className="error">{props.errorMessage}</p>
      ) : null}
    </FormField>
  );
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  assistiveText: PropTypes.string,
  onKeyUp: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};
