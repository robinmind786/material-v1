/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { Auth } from "../../assets/styles/AuthStyle";
import {
  Box,
  FontStyle,
  FormControl,
  InputField,
  Button,
  Checkbox,
  Divider,
} from "../../components/UI/Index";
import { useTheme } from "styled-components";
import AuthThumbnail from "./AuthThumbnail";
import AuthSocial from "./AuthSocial";

const Signup = () => {
  const theme = useTheme();

  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <>
      <Auth>
        <Box className="auth">
          <Box className="auth__inner">
            <AuthThumbnail />
            <Box className="auth__right">
              <Box className="auth__form--box">
                <Box>
                  <Box className="auth__form--heading">
                    <FontStyle $variant="h5" component="h5" $mb="0.375rem">
                      Welcome to Materio! 👋🏻
                    </FontStyle>
                    <FontStyle
                      $variant="caption"
                      component="p"
                      $color={theme.colors.white[600]}
                    >
                      Please sign-in to your account and start the adventure👋🏻
                    </FontStyle>
                  </Box>
                  <Box className="auth__form--inner">
                    <FormControl>
                      <InputField label="Username" type="text" />
                      <InputField label="email" type="email" />
                      <InputField label="Password" type="password" />
                      <Box className="auth__condition">
                        <Checkbox
                          checked={checked}
                          onChange={handleChange}
                          label="I agree to privacy policy & terms"
                        />
                      </Box>
                      <Button variant="contained" width="100%">
                        Signup
                      </Button>
                      <Box className="auth__form--platform">
                        <FontStyle
                          $variant="caption"
                          component="p"
                          $color={theme.colors.white[600]}
                          $mr="0.5rem"
                        >
                          Already have an account?
                        </FontStyle>
                        <FontStyle
                          $variant="caption"
                          component="p"
                          $color={theme.colors.primary.main}
                        >
                          Sign in instead
                        </FontStyle>
                      </Box>
                      <Box className="auth__divider">
                        <Divider />
                        <FontStyle $variant="span" component="span" $p="0 10px">
                          or
                        </FontStyle>
                        <Divider />
                      </Box>
                      <AuthSocial />
                    </FormControl>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Auth>
    </>
  );
};

export default Signup;
