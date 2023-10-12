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

const Reset = () => {
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
                      Reset Password? 🔒
                    </FontStyle>
                    <FontStyle
                      $variant="caption"
                      component="p"
                      $color={theme.colors.white[600]}
                    >
                      Your new password must be different from previously used
                      passwords
                    </FontStyle>
                  </Box>
                  <Box className="auth__form--inner">
                    <FormControl>
                      <InputField label="New password" type="password" />
                      <InputField label="Confirm password" type="password" />
                      <Button variant="contained" width="100%">
                        Set New Password
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

export default Reset;
