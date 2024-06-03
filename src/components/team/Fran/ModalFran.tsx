
import { Modal, Row, Col } from "react-bootstrap";
import { IoClose } from "react-icons/io5";
import p5 from "./certificadoP5.png";
import expressCourseIt from "./courseItExpress.png";
import githubCourseIt from "./courseItGithub.png";
import HTMLyCSSCourseIt from "./courseItHTMLyCSS.png";
import javascriptCourseIt from "./courseItJavascript.png";
import nodeCourseIt from "./courseItNode.png";
import reactCourseIt from "./courseItReact.png";

type ModalFranProps = {
  isVisible: boolean;
  onClose: () => void;
};

const ModalFran: React.FC<ModalFranProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      show={isVisible}
      onHide={onClose}
      size="xl"
      className="w-[50%] min-h-screen z-10 flex column px-[20%] py-[10%] bg-black items-center justify-center"
    >
      <Modal.Header onClick={onClose}>
        <div className="w-full h-fit">
          <IoClose className="flex items-end justify-start absolute bg-transparent" onClick={onClose} />
        </div>
      </Modal.Header>
      <Row className="flex flex-wrap m-[-10px]" onClick={onClose}>
        <Col md={6}>
          <Modal.Body>
            <img
              className="w-[520px] h-[420px] flex m-auto rounded-lg"
              src={p5}
              alt="img2"
            ></img>
          </Modal.Body>
        </Col>
        <Col md={6}>
          <Modal.Body>
            <img
              className="w-[520px] h-[420px] flex m-auto rounded-lg"
              src={expressCourseIt}
              alt="img2"
            ></img>
          </Modal.Body>
        </Col>
        <Col md={6}>
          <Modal.Body>
            <img
              className="w-[520px] h-[420px] flex m-auto rounded-lg"
              src={githubCourseIt}
              alt="img2"
            ></img>
          </Modal.Body>
        </Col>
        <Col md={6}>
          <Modal.Body>
            <img
              className="w-[520px] h-[420px] flex m-auto rounded-lg"
              src={nodeCourseIt}
              alt="img2"
            ></img>
          </Modal.Body>
        </Col>
        <Col md={6}>
          <Modal.Body>
            <img
              className="w-[520px] h-[420px] flex m-auto rounded-lg"
              src={HTMLyCSSCourseIt}
              alt="img2"
            ></img>
          </Modal.Body>
        </Col>
        <Col md={6}>
          <Modal.Body>
            <img
              className="w-[520px] h-[420px] flex m-auto rounded-lg"
              src={javascriptCourseIt}
              alt="img2"
            ></img>
          </Modal.Body>
        </Col>
        <Col md={6}>
          <Modal.Body>
            <img
              className="w-[520px] h-[420px] flex m-auto rounded-lg"
              src={reactCourseIt}
              alt="img2"
            ></img>
          </Modal.Body>
        </Col>
      </Row>
    </Modal>
  );
};

export default ModalFran;
