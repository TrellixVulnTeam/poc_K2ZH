import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export const Modal = ({ show = true, onClose, children, ...props }) => {
  return (
    <div>
      <div
        className={`modal fade ${show ? 'show' : ''}`}
        tabindex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
        style={{ display: show ? 'block' : 'none' }}
      >
        <div class='modal-dialog' role='document'>
          <div class='modal-content'>
            <div class='modal-body'>
              Sumanth
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
