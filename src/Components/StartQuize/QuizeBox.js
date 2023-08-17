import React from 'react';

const Answer = ({ id, answer, correct, getAnswerHandler, selectedId }) => {
  const onClickHandler = () => {
    getAnswerHandler(answer, correct, id);
  };

  return (
    <div
      className='quiz-option-container'
      onClick={onClickHandler}
      style={{
        background: `${selectedId === id ? (correct ? 'green' : 'green') : ''}`,
      }}
    >
      <span
        className='answer-circle'
        style={{
          background: `${selectedId === id ? 'blue' : ''}`,
        }}
      ></span>
      <p>{answer}</p>
    </div>
  );
};

export const QuizBox = ({
  count,
  nextQuestionHandler,
  question,
  answers,
  getAnswerHandler,
  length,
  selectedId,
}) => {
  return (
    <div className='play-quiz-questions'>
      <div className='quiz-question' style={{ fontWeight: '600' }}>
        <div style={{ fontSize: '14px' }}>Please select only One Answer!</div>
        {count + 1}. {question}
      </div>

      <div className='quiz-options'>
        {answers.map((el, i) => (
          <Answer
            key={el.id}
            id={el.id}
            correct={el.correct}
            answer={el.answer}
            getAnswerHandler={getAnswerHandler}
            selectedId={selectedId}
          />
        ))}
      </div>
      <div className='quiz-next-btn'>
        <div className='quiz-question-no'>
          Question {count + 1}/{length}
        </div>
        <div className='next-question'>
          <button onClick={nextQuestionHandler}>Next Question</button>
        </div>
      </div>
    </div>
  );
};
