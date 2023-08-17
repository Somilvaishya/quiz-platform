import React, { useState, useRef, useEffect } from 'react';
import Answere from '../Material-ui/Answere';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { addQuiz } from '../Redux/Actions';
import { useNavigate } from 'react-router-dom';

export const MainForm = () => {
  const [count, setcount] = useState(1);
  const [answers, setanswers] = useState([]);
  const [question, setquestion] = useState([]);
  const [added, setadded] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      if (added) {
        setadded(false);
      }
    }, 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [added]);

  // all the ref for collecting user info and data //
  const answerRef = useRef();
  const correctRef = useRef();
  const questionRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //  these are all the handlers used to get user info and update the complex state of our app //

  const addOptionHandler = (e) => {
    e.preventDefault();
    // Checking if the answer input is empty
    if (answerRef.current.value === '') {
      return;
    }
    // Handling maximum answer limit
    if (answers.length >= 4) {
      setanswers((prev) => [...prev]);
    } else {
      const Answer = {
        answer: answerRef.current.value.toUpperCase(),
        correct: correctRef.current.checked,
        id: Math.random() * 10,
      };
      // Updating the answers state
      setanswers((prev) => [...prev, Answer]);
    }
    // Resetting input fields
    answerRef.current.value = '';
    correctRef.current.checked = false;
  };

  const addQuestionHandler = (e) => {
    e.preventDefault();

    if (questionRef.current.value === '' || answers.length === 0) {
      questionRef.current.value = '';
      return;
    }

    if (answers.length > 2) {
      const Question = {
        question: questionRef.current.value,
        answers: answers,
        id: count,
      };

      setcount((prev) => prev + 1);
      setquestion((prev) => [...prev, Question]);
      setanswers([]);
      setadded(true);
      questionRef.current.value = '';
    } else {
      setadded(true);
    }
  };

  const onDeleteHandler = (id) => {
    const filteredArr = answers.filter((el) => el.id !== id);
    setanswers(filteredArr);
  };

  const onSaveHandler = (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const descValue = descriptionRef.current.value;

    if (titleValue === '' || question.length <= 0) {
      return;
    }

    const Quiz = {
      title: titleValue,
      description: descValue,
      questions: question,
      id: Math.random(),
      createdOn: new Date(),
      isActive: true,
    };

    dispatch(addQuiz(Quiz));

    setcount(1);

    titleRef.current.value = '';

    navigate('/StartQuize');
  };

  return (
    <motion.div
      className='form-main-container'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <div className='form'>
        <form action=''>
          <div className='upper-form form-padding'>
            <input
              type='text'
              placeholder='Title'
              name='title'
              className='title-input'
              ref={titleRef}
            />

            <input
              type='text'
              className='description-input'
              placeholder='Add Description'
              ref={descriptionRef}
            />
          </div>

          <div className='lower-form form-padding'>
            <label style={{ float: 'right', fontWeight: '600' }}>
              {' '}
              Question {count}
            </label>
            <input type='text ' className='title-input' ref={questionRef} />
            {added && (
              <motion.p
                style={{ color: 'green' }}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                Question has been added!
              </motion.p>
            )}
          </div>

          <div className='form-submit-answers form-padding d-flex'>
            {answers.map((el, i) => (
              <Answere
                text={el.answer}
                id={el.id}
                key={i}
                correct={el.correct}
                onDeleteHandler={onDeleteHandler}
              />
            ))}
          </div>

          <div className='answer-input form-padding d-flex'>
            <div className='main-inputs d-flex'>
              <input
                type='text'
                className='answer'
                placeholder='answer!'
                ref={answerRef}
              />
              <div className='check-box'>
                <input type='checkbox' name='correct' id='' ref={correctRef} />
              </div>
              <label style={{ fontSize: '12px' }}>correct</label>
            </div>

            <button className='add-option' onClick={addOptionHandler}>
              +
            </button>
          </div>
        </form>
      </div>

      <div className='save-button d-flex'>
        <button onClick={addQuestionHandler}>Add Question </button>
        <button onClick={onSaveHandler}>Save</button>
      </div>
    </motion.div>
  );
};

export default MainForm;
