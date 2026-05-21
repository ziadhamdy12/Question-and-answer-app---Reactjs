import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import FormInputs from '../../components/formInput'
import QADropdown from '../../components/qa-dropdown'
import { dummyQuestionsAndAnswers } from '../../utilis/dummy'
import { toast } from 'react-toastify'

function HomeScreen() {

    const questionData= JSON.parse(localStorage.getItem('questionsAndAnswers'))
    const [questionsAndAnswers, setQuestionsAndAnswers] = useState(dummyQuestionsAndAnswers)
    const addQuestionAndAnswer = () => {
    localStorage.setItem('questionsAndAnswers', JSON.stringify([...dummyQuestionsAndAnswers]))
        setQuestionsAndAnswers([...dummyQuestionsAndAnswers])
        toast.success('تم إضافة السؤال والإجابة بنجاح')

        console.log(questionData)
    }
    const deleteAllQuestionsAndAnswers = () => {
        if(questionData.length === 0) {
            toast.error('لا يوجد بيانات لحذف')
            return
        }else{
        toast.success('تم حذف البيانات بنجاح')
        localStorage.removeItem('questionsAndAnswers')
        setQuestionsAndAnswers([])
        dummyQuestionsAndAnswers.splice(0, dummyQuestionsAndAnswers.length)
        }
    }

   const deleteOneQuestionAndAnswer = (id) => {
        if(questionData.length === 0) {
            toast.error('لا يوجد بيانات لحذف')
            return
        }else{
            
        toast.success('تم حذف السؤال والإجابة بنجاح')
        setQuestionsAndAnswers(questionData.filter((item) => item.id !== id))
        dummyQuestionsAndAnswers.splice(dummyQuestionsAndAnswers.findIndex((item) => item.id === id), 1)
        localStorage.setItem('questionsAndAnswers', JSON.stringify([...dummyQuestionsAndAnswers]))
        if(dummyQuestionsAndAnswers.length === 0) {
            localStorage.removeItem('questionsAndAnswers')
        }
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
                    <QADropdown data={questionData}  deleteOneQuestionAndAnswer={deleteOneQuestionAndAnswer}/>
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
