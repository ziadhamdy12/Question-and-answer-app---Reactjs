import { Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

function QADropdown({ data, deleteQuestionAndAnswer }) {
  return (
    <Row>
      <Accordion>
        {data.length > 0 ? (
          data.map((item) => (
            <Accordion.Item
              eventKey={item.id}
              className="my-2 rounded-3 border"
            >
              <Accordion.Header>
                <div className="m-auto">{item.question}</div>
              </Accordion.Header>

              <Accordion.Body>
                <div className="px-3 d-inline">{item.answer}</div>
                <button
                  onClick={() => deleteQuestionAndAnswer(item.id)}
                  className="btn-color"
                >
                  مسح السؤال
                </button>
              </Accordion.Body>
            </Accordion.Item>
          ))
        ) : (
          <h3 className="fs-4 text-center p-5">لا يوجد أسئلة وأجوبة</h3>
        )}
      </Accordion>
    </Row>
  );
}

export default QADropdown;
