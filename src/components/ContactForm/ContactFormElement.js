import styled from 'styled-components';
export const Wrapper = styled.div`
  display: grid;
  padding: 20px;

  h1 {
    margin-bottom: 20px;
    text-align: center;
    color: ${({ darkmode }) => (darkmode ? 'white' : 'black')};
    font-family: var(--ff-secondary);
  }
  textarea {
    width: 100%;
    height: 170px;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    /* background-color: #f8f8f8; */
    resize: none;
    font-family: var(--ff-secondary);
  }
  form input {
    padding: 10px;
    width: 100%;
    border: 2px solid #ccc;
    border-radius: 4px;
    font-family: var(--ff-secondary);
    outline-color: rgb(204);
  }

  form div span {
    font-size: 12px;
    font-family: var(--ff-secondary);
  }

  form textarea {
    outline-color: rgb(204);
  }
  form div {
    padding-top: 15px;
  }
  form div:last-child {
    padding-top: 30px;
  }
  form div:last-child input {
    cursor: pointer;
  }
  @media (max-width: 500px) {
    form {
      border: 1px solid black;
      height: 500px;
      width: 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
  @media (min-width: 500px) {
    display: flex;
    padding: 20px;
    /* justify-content: center; */
    /* max-width: 600px; */
    flex-direction: column;
    align-items: center;

    form {
      border: 1px solid black;
      height: 500px;
      width: 100%;
      max-width: 700px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      text-align: center;
    }
  }
`;
