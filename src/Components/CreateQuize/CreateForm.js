import React from 'react';
import MainForm from './MainForm';
import { motion } from 'framer-motion';

export const CreateForm = () => {
  return (
    <div className='create-form-container'>
      <div className='create-form-main'>
        <div className='create-form-heading'>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Create New Form
          </motion.h1>
        </div>

        <MainForm />
      </div>
    </div>
  );
};

export default CreateForm;
