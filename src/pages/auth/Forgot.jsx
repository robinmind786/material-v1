/* eslint-disable react/no-unescaped-entities */
import { Auth } from "../../assets/styles/AuthStyle";
import {
  Box,
  FontStyle,
  Button,
  FormControl,
  InputField,
} from "../../components/UI/Index";
import { useTheme } from "styled-components";
import AuthThumbnail from "./AuthThumbnail";

const Forgot = () => {
  const theme = useTheme();

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
                      Forgot Password? 🔒
                    </FontStyle>
                    <FontStyle
                      $variant="caption"
                      component="p"
                      $color={theme.colors.white[600]}
                    >
                      Enter your email and we′ll send you instructions to reset
                      your password
                    </FontStyle>
                  </Box>
                  <Box className="auth__form--inner">
                    <FormControl>
                      <InputField label="Email" type="email" />
                      <Button variant="contained" width="100%">
                        Send reset link
                      </Button>
                    </FormControl>
                    <Box className="auth__form--platform">
                      <FontStyle
                        $variant="caption"
                        component="p"
                        $color={theme.colors.primary.main}
                      >
                        Back to login
                      </FontStyle>
                    </Box>
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

export default Forgot;
