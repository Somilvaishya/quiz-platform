import React, { useState } from 'react';
import { CreateForm } from './CreateForm';
import { motion } from 'framer-motion';

// This is the starting of our creating quiz app which returns a model
export const CreateQuize = () => {
  const [showModel, setShowModel] = useState(true);

  const handleModel = () => {
    setShowModel(false);
  };

  return (
    <div>
      {showModel ? (
        <motion.div
          className='create-Model d-flex'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <button className='mcq-button' onClick={handleModel}>
            MCQ (Single Correct)
          </button>
        </motion.div>
      ) : (
        <CreateForm />
      )}
    </div>
  );
};

export default CreateQuize;
