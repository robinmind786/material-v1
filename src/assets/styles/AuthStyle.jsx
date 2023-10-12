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
    align-items: center;
    justify-content: center;
  }

  .auth__thumb {
    width: 100%;
    position: relative;
  }

  .auth__cover {
    padding-top: 5rem;
    padding-bottom: 5rem;
    padding-left: 5rem;
    padding-right: 0px !important;

    img {
      width: 48rem;
    }
  }

  .auth__tree {
    bottom: 0px;
    left: 1.875rem;
    position: absolute;
  }

  .auth__mask {
    bottom: 0px;
    z-index: -1;
    width: 100%;
    position: absolute;
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

  .auth__form--platform {
    margin-bottom: 1.75rem;
    margin-top: 1.75rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
  }

  .auth__condition {
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .auth__divider {
    margin-right: 0px;
    margin-left: 0px;
    flex-shrink: 0;
    display: flex;
    white-space: nowrap;
    text-align: center;
    border: 0px;
    margin-top: 1.25rem !important;
    margin-bottom: 1.25rem !important;
  }

  .auth__social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;
