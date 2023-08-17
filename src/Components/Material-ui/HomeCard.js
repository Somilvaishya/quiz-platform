import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Card, CardContent, CssBaseline, Typography } from '@material-ui/core';

export const HomeCard = ({ color, heading, path, delay, image, size }) => {
  return (
    <motion.div
      className='home-card'
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: delay }}
    >
      <NavLink to={path} className='home-card-heading'>
        <Card
          style={{
            backgroundColor: color,
            width: '350px',
            height: '350px',
            overflow: 'hidden',
          }}
        >
          <CardContent>
            <Typography
              variant='h4'
              style={{
                textShadow: '0px 2px 5px rgb(206, 206, 206)',
                zIndex: 10,
                textAlignLast: 'center',
              }}
            >
              {heading}
            </Typography>
            <div className='home-img'>
              <img
                src={image}
                alt=''
                width={size ? size : ''}
                style={{ filter: 'blur(0px)' }}
              />
            </div>
          </CardContent>
        </Card>
      </NavLink>
    </motion.div>
  );
};
