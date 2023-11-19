import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";



function Sign_in() {
  let [fade, setFade] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setFade("end");
    }, 1000);
    return () => {
      setFade("");
    };
  }, []);

  return (
    <div className={"login start " + fade}>
      <FloatingLabel controlId="floatingInput" label="이메일" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="비밀번호">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      <Button className="lgbtn" variant="primary" type="submit">
        로그인
      </Button>
    </div>
  );
}

export default Sign_in;
