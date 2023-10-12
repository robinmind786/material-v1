/* eslint-disable react/no-unescaped-entities */
// import PropTypes from "prop-types";
import { Box } from "../../components/UI/Index";
import authCover from "../../assets/images/auth/auth-v2-login-illustration-dark.png";
import mask from "../../assets/images/auth/mask.png";
import tree from "../../assets/images/auth/tree.png";

const AuthThumbnail = () => {
  return (
    <>
      <Box className="auth__left">
        <Box className="auth__cover">
          <img src={authCover} alt="authCover" />
        </Box>
        <img src={tree} alt="tree" className="auth__tree" />
        <img src={mask} alt="mask" className="auth__mask" />
      </Box>
    </>
  );
};

// AuthThumbnail.propTypes = {};

export default AuthThumbnail;
