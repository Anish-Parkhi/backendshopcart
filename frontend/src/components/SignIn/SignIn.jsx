import { useEffect, useState } from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Landing from "../Landing/Landing";
import styles from "./Singin.module.css";
import GoogleIcon from "@mui/icons-material/Google";
function Signin() {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };
  useEffect(() => {
    setValue(localStorage.getItem("email"));
  }, []);
  return (
    <div>
      {value ? (
        <Landing />
      ) : (
        <>
          <div className={styles.signincontainer}>
            <div className={styles.signincontainerInnerDiv}>
              <GoogleIcon
                style={{ fontSize: "4rem", paddingTop: "1rem" }}
                onClick={handleClick}
              />
              <div>Sign In With Google</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Signin;
