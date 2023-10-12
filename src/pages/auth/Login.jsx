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
  Fab,
} from "../../components/UI/Index";
import { useTheme } from "styled-components";
import {
  FaFacebook,
  FaSquareTwitter,
  FaGithub,
  FaGoogle,
} from "react-icons/fa6";

const Login = () => {
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
            <Box className="auth__left">
              <FontStyle
                $variant="caption"
                component="p"
                $color={theme.colors.white[600]}
                $p="5rem"
              >
                Hi, I'm Robin, a web developer with 2+ years of experience in
                the industry. I specialize in HTML5, CSS3, SASS, JavaScript,
                Python, Shopify Templates and have experience working with
                Node.js, Express.js, React.js, MongoDB, MySQL etc. Throughout my
                career, I have designed, developed, and maintained numerous
                websites for clients ranging from small businesses to large
                corporations. I'm passionate about creating elegant, efficient,
                and user-friendly websites that meet or exceed client
                expectations. My approach includes following best coding
                practices, ensuring the code is secure, well-documented, and
                scalable. My technical expertise includes front-end development,
                back- end development, database management, and website
                optimization. I'm proficient in popular web development tools
                and frameworks such as React.js, Node.js, Express, Django, and
                more. I'm also a strong communicator and a team player who
                enjoys collaborating with clients and colleagues to bring their
                visions to life. I prioritize understanding my client's business
                goals and objectives to ensure that their website is tailored to
                meet their unique needs. In addition to my technical skills, I
                have excellent time management, organization, and project
                management abilities. I can work independently and manage
                multiple projects simultaneously while ensuring that all
                deadlines are met. I have a proven track record of delivering
                high-quality web development projects that have met or exceeded
                client expectations. I'm passionate about keeping up with the
                latest web development trends and technologies to ensure that I
                can deliver cutting-edge solutions to my clients. If you're
                looking for a skilled and experienced web developer who can
                bring your website vision to life, please feel free to reach out
                to me. I'm looking forward to working with you.
              </FontStyle>
            </Box>
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
                      <InputField label="Email" type="email" />
                      <InputField label="Password" type="password" />
                      <Box className="auth__condition">
                        <Checkbox
                          checked={checked}
                          onChange={handleChange}
                          label="Remember Me"
                        />
                        <FontStyle
                          $variant="caption"
                          component="p"
                          $color={theme.colors.primary.main}
                        >
                          Forgot Password?
                        </FontStyle>
                      </Box>
                      <Button variant="contained" width="100%">
                        Login
                      </Button>
                      <Box className="auth__form--platform">
                        <FontStyle
                          $variant="caption"
                          component="p"
                          $color={theme.colors.white[600]}
                          $mr="0.5rem"
                        >
                          New on our platform?
                        </FontStyle>
                        <FontStyle
                          $variant="caption"
                          component="p"
                          $color={theme.colors.primary.main}
                        >
                          Create an account
                        </FontStyle>
                      </Box>
                      <Box className="auth__divider">
                        <Divider />
                        <FontStyle $variant="span" component="span" $p="0 10px">
                          or
                        </FontStyle>
                        <Divider />
                      </Box>
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
