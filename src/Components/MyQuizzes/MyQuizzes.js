import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Quizzes from './Quizzes';
import { useSelector, useDispatch } from 'react-redux';
import { deleteQuiz } from '../Redux/Actions';
import { motion } from 'framer-motion';

// Logic for the delete quiz model displayed when deleting a quiz

const DeleteModel = ({ closeModel, id }) => {
  const dispatch = useDispatch();

  const onDeleteHandler = () => {
    dispatch(deleteQuiz(id));
    closeModel();
  };

  return (
    <div className='delete-model-container d-flex'>
      <motion.div
        className='delete-model-main'
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className='delete-heading'>
          <h2>Are you sure you want to delete?</h2>
          <p>
            Deleting this will result in losing the file permanently and is not
            recoverable
          </p>
          <div className='delete-model-actions'>
            <button onClick={onDeleteHandler}>Yes</button>
            <button onClick={closeModel}>No</button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Logic for the entire "My Quizzes" page where we store and manage all the quizzes we have made

export const MyQuizzes = () => {
  const [showDeleteModel, setShowDeleteModel] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const quizzes = useSelector((state) => state.reducer.quiz);

  const openDeleteModel = (id) => {
    setDeleteId(id);
    setShowDeleteModel(true);
  };

  const closeDeleteModel = () => {
    setShowDeleteModel(false);
  };

  return (
    <>
      {showDeleteModel && (
        <DeleteModel closeModel={closeDeleteModel} id={deleteId} />
      )}
      <motion.div
        className='my-quiz-container d-flex'
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <div className='quiz-main'>
          <div className='quiz-header '>
            <div className='quiz-heading'>
              <h1 style={{ marginLeft: '20px' }}>My Quizzes</h1>
            </div>
            <div className='create-new-btn'>
              <NavLink to='/CreateQuize'>
                <button className='create-new-button'>Create New Quiz</button>
              </NavLink>
            </div>
          </div>

          <div className='all-quiz-container'>
            {quizzes.length === 0 ? (
              <p style={{ color: 'red' }}>Currently there are no quizzes!</p>
            ) : (
              quizzes.map((quiz, index) => (
                <Quizzes
                  key={quiz.id}
                  title={quiz.title}
                  id={quiz.id}
                  active={quiz.isActive}
                  date={quiz.createdOn}
                  serial={index + 1}
                  openModel={openDeleteModel}
                />
              ))
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
};
