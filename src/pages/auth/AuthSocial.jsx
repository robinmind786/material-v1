import React from "react";
import PropTypes from "prop-types";
import { Box, Fab } from "../../components/UI/Index";
import {
  FaFacebook,
  FaSquareTwitter,
  FaGithub,
  FaGoogle,
} from "react-icons/fa6";

const AuthSocial = (props) => {
  return (
    <>
      <Box className="auth__social">
        <Fab
          ariaLabel="edit"
          size="small"
          icon={<FaFacebook />}
          iconColor="#1877F2"
        />
        <Fab
          ariaLabel="edit"
          size="small"
          icon={<FaSquareTwitter />}
          iconColor="#1DA1F2"
        />
        <Fab
          ariaLabel="edit"
          size="small"
          icon={<FaGithub />}
          iconColor="white"
        />
        <Fab
          ariaLabel="edit"
          size="small"
          icon={<FaGoogle />}
          iconColor="#4285F4"
        />
      </Box>
    </>
  );
};

AuthSocial.propTypes = {};

export default AuthSocial;
