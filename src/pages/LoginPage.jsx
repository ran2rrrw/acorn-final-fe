import { getHttpBaseUrl, getGoogleOAuth2ClientId } from "@configs/env";
import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
const LoginPageContainer = styled.div`
    width: 100%;
    height: 100%;
    background-color: #efefef;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


const GoogleLoginButton = styled(Button)`
    
    width: 150;
    height: 50;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    justify-content: center;
`;

const LoginPage = () => {
    const handleGoogleLogin = () => {
        const oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";
        const params = {
            "client_id": getGoogleOAuth2ClientId(),
            "redirect_uri": `${getHttpBaseUrl()}/login/oauth2/code/google`,
            "response_type": "code",
            "scope": "openid profile email",
        };

        const form = document.createElement("form");
        form.setAttribute("method", "GET"); // Send as a GET request.
        form.setAttribute("action", oauth2Endpoint);
        // Add form parameters as hidden input values.
        for (var p in params) {
            var input = document.createElement("input");
            input.setAttribute("type", "hidden");
            input.setAttribute("name", p);
            input.setAttribute("value", params[p]);
            form.appendChild(input);
        }

        // Add form to page and submit it to open the OAuth 2.0 endpoint.
        document.body.appendChild(form);
        form.submit();
    };

    return (
        <LoginPageContainer>
            <h1>🌰Dotori Login</h1>
            <Box sx={{
                width: 900,
                height: 600,
                marginBottom: 3,
                paddingTop: 2,
                bgcolor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-evenly",
                alignItems: "center",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
            }}>
                <img src="../public/LoginImg.jpg" width={650} height={400} />
                <GoogleLoginButton onClick={handleGoogleLogin}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                    </span>
                    <span style={{ marginLeft: 10 }}>Google</span>
                </GoogleLoginButton>
            </Box>
        </LoginPageContainer >
    );
};
export { LoginPage };