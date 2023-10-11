import { Auth } from "../../assets/styles/AuthStyle";
import {
  Box,
  FontStyle,
  FormControl,
  InputField,
} from "../../components/UI/Index";
import { useTheme } from "styled-components";

const Login = () => {
  const theme = useTheme();

  return (
    <>
      <Auth>
        <Box className="auth">
          <Box className="auth__inner">
            <Box className="auth__left">d</Box>
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
                      <InputField label="Email" type="text" />
                      <InputField label="Password" type="password" />
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

export default Login;
