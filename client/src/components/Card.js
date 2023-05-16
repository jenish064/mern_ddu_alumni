import React from "react";
import { useSetState } from "react-use";
import "../styles/Card.css";
import { Modal, Button } from "antd";
import photo from "../assets/gears.gif";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import RegistrationModal from "./registration/RegistrationModal";
import LoginModal from "./login/LoginModal";

function Card() {
  const [state, setState] = useSetState({
    onRegister: false,
    onLogin: false,
  });

  const openRegister = (bool) => {
    setState({ onRegister: bool });
  };
  const openLogin = (bool) => {
    setState({ onLogin: bool });
  };
  return (
    <div className="card">
      <div className="left">
        <h1 className="txth1">Connect with</h1>
        <h1 className="txth1" id="ddu" data-text=" DDU Instrumentation">
          DDU Instrumentation
        </h1>
        <h1 className="txth1">Community</h1>

        <Button className="btn" onClick={() => openRegister(true)}>
          Register
        </Button>
        <Button className="btn" onClick={() => openLogin(true)}>
          Login
        </Button>
        <Modal
          title="Registration"
          open={state.onRegister}
          footer={null}
          onCancel={() => {
            openRegister(false);
          }}
          closeIcon={<FontAwesomeIcon icon={faXmark} />}
          destroyOnClose
          maskClosable={false}
        >
          <RegistrationModal openRegister={openRegister} />
        </Modal>
        <Modal
          title="Login"
          open={state.onLogin}
          footer={null}
          onCancel={() => {
            openLogin(false);
          }}
          closeIcon={<FontAwesomeIcon icon={faXmark} />}
          destroyOnClose
          maskClosable={false}
        >
          <LoginModal openRegister={openRegister} />
        </Modal>
      </div>

      <div className="right">
        <img src={photo} width="400" alt="img" />
      </div>
    </div>
  );
}

export default Card;
