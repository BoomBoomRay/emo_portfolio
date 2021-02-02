import styled, { css } from 'styled-components';

export const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 18px;
  margin-left: 12px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 10px;
    width: 10px;
    left: 2px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(
      ${(props) => (props.darkmode ? '26px' : '0px')}
    );
    -ms-transform: translateX(${(props) => (props.darkmode ? '26px' : '0px')});
    transform: translateX(${(props) => (props.darkmode ? '26px' : '0px')});
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
`;
