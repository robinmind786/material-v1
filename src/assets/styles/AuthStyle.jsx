import styled from "styled-components";

export const Auth = styled.div`
  .auth {
    height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  .auth__inner {
    display: flex;
    min-height: 100vh;
    overflow-x: hidden;
    position: relative;
  }

  .auth__left {
    flex: 1 1 0%;
    display: flex;
    position: relative;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
  }

  .auth__right {
    width: 450px;
  }

  .auth__form--box {
    padding: 3rem;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => props.theme.colors.secondary[500]};
  }

  .auth__form--heading {
    margin-bottom: 1.5rem;
  }
`;
