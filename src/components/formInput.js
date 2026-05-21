import React, { useState } from "react";
import { Row, Col, Form,  } from "react-bootstrap";
import { dummyQuestionsAndAnswers } from "../utilis/dummy";
import {  toast } from 'react-toastify';

function FormInputs({ addQuestionAndAnswer, deleteQuestionAndAnswer }) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");


  const handleAddQuestionAndAnswer = () => {
    if (question === "" || answer === "") {
      // alert('يجب أن يكون لديك سؤال وإجابة')
    //  setError(true)
    toast.error('يجب أن يكون لديك سؤال وإجابة')
    } else {
      dummyQuestionsAndAnswers.push({
        id: Math.random() * 1000000,
        question: question,
        answer: answer,
      });
      setQuestion("");
      setAnswer("");
      addQuestionAndAnswer();
    }
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };
  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };
  return (
    <Row className="my-2">
      <Col sm="5">
        <Form.Control
          onChange={handleQuestionChange}
          value={question}
          type="text"
          placeholder="اكتب سؤالك هنا ثم اضغط على إضافة"
        />
      </Col>
      <Col sm="5">
        <Form.Control
          onChange={handleAnswerChange}
          value={answer}
          type="text"
          placeholder="اكتب الإجابة هنا"
        />
      </Col>
      <Col sm="2">
        <button
          className="btn-color"
          onClick={handleAddQuestionAndAnswer}
          type="submit"
        >
          إضافة
        </button>
      </Col>
      
     
    </Row>
  );
}

export default FormInputs;
