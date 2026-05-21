import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FormInputs from '../../components/formInput'
import QADropdown from '../../components/qa-dropdown'
import { dummyQuestionsAndAnswers } from '../../utilis/dummy'
import { toast } from 'react-toastify'

function HomeScreen() {
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState(dummyQuestionsAndAnswers)
    const addQuestionAndAnswer = () => {
    
        setQuestionsAndAnswers([...dummyQuestionsAndAnswers])
        toast.success('تم إضافة السؤال والإجابة بنجاح')

        console.log(questionsAndAnswers)
    }
    const deleteAllQuestionsAndAnswers = () => {
        if(questionsAndAnswers.length === 0) {
            toast.error('لا يوجد بيانات لحذف')
            return
        }else{
        toast.success('تم حذف البيانات بنجاح')

        setQuestionsAndAnswers([])
        dummyQuestionsAndAnswers.splice(0, dummyQuestionsAndAnswers.length)
        }
    }

   const deleteQuestionAndAnswer = (id) => {
        if(questionsAndAnswers.length === 0) {
            toast.error('لا يوجد بيانات لحذف')
            return
        }else{
        toast.success('تم حذف السؤال والإجابة بنجاح')
        setQuestionsAndAnswers(questionsAndAnswers.filter((item) => item.id !== id))
        dummyQuestionsAndAnswers.splice(dummyQuestionsAndAnswers.findIndex((item) => item.id === id), 1)
        }
    }


    return (
        <div className='font text-center Color-body'>


            <Container className="p-5">

                <Row className='justify-content-center'>
                    <Col sm="4" >
                        <div className='fs-3 text-center '>تطبيق اسئلة واجوبة</div>

                    </Col>
                    <Col sm="8" >
                    <FormInputs addQuestionAndAnswer={addQuestionAndAnswer}
                    
                    />
                    <QADropdown data={questionsAndAnswers}  deleteQuestionAndAnswer={deleteQuestionAndAnswer}/>
                    {questionsAndAnswers.length > 0 && (
                        <button 
                        onClick={deleteAllQuestionsAndAnswers}

                        className="btn-color w-100 my-2">حذف الكل</button>
                    )}
                    </Col>

                </Row>


            </Container>


        </div>
    )
}

export default HomeScreen
