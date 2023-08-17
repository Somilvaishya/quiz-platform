import React from 'react';
import icon from '../../images/delete.png';

// This component displays the answers created for a question with necessary actions //

const Answere = ({ text, id, correct, onDeleteHandler }) => {
  // The correct prop is received to determine if the answer is correct or not
  // We can use this prop directly instead of logging it to the console

  return (
    <div className='submit-container'>
      <div className='submit-main-answercard'>
        <p>{text}</p>
        <img
          src={icon}
          alt='Delete'
          width='20px'
          onClick={() => onDeleteHandler(id)}
        />
      </div>
      <div
        className='submit-correct'
        style={{ background: correct ? 'green' : 'lightgrey' }}
      >
        <div>
          {/* Using the checked attribute directly based on the correct prop */}
          <input type='checkbox' name='' id='' checked={correct} />
          <p className='form-checkbox'>correct</p>
        </div>
      </div>
    </div>
  );
};

export default Answere;
