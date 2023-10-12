/* eslint-disable react/no-unescaped-entities */
import { Auth } from "../../assets/styles/AuthStyle";
import { Box, FontStyle, Button } from "../../components/UI/Index";
import { useTheme } from "styled-components";
import AuthThumbnail from "./AuthThumbnail";

const VerifyEmail = () => {
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
                      Verify your email ✉️
                    </FontStyle>
                    <FontStyle
                      $variant="caption"
                      component="p"
                      $color={theme.colors.white[600]}
                    >
                      Account activation link sent to your email address:
                      john.doe@email.com Please follow the link inside to
                      continue.
                    </FontStyle>
                  </Box>
                  <Box className="auth__form--inner">
                    <Button variant="contained" width="100%">
                      Skip for now
                    </Button>
                    <Box className="auth__form--platform">
                      <FontStyle
                        $variant="caption"
                        component="p"
                        $color={theme.colors.white[600]}
                        $mr="0.5rem"
                      >
                        Didn't get the mail?
                      </FontStyle>
                      <FontStyle
                        $variant="caption"
                        component="p"
                        $color={theme.colors.primary.main}
                      >
                        Resend
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

export default VerifyEmail;
