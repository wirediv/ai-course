import React, { useRef} from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import {logout} from '@site/src/pocketbase';

export default function ColorModeToggleWrapper(props) {
  const dialogRef = useRef(null)
  return (
    <>
      <ColorModeToggle {...props} />
      <a onClick={() => dialogRef.current.showModal()} style={{background: 'var(--ifm-color-primary)', color: 'white', paddingRight: 10, paddingLeft: 10, paddingBottom: 2, borderRadius: 5, marginLeft: 15, cursor: "pointer"}}>
        Logout
      </a>
      <dialog ref={dialogRef} style={{
        padding: '20px',
        borderRadius: '10px',
        border: 'none',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.23)',
        width: '400px',
        textAlign: 'center',
      }}>
        <style>
          {`
            dialog::backdrop {
              background: rgba(255, 255, 255, 0.1);
              backdrop-filter: blur(8px) brightness(0.8);
            }
          `}
        </style>
        <h2>Are you sure?</h2>
        {/* Close Button */}
        <button 
          onClick={() => dialogRef.current.close()} 
          style={{
            marginTop: '10px',
            padding: '8px 12px',
            borderRadius: '6px',
            color: 'var(--ifm-color-primary-dark)',
            border: 'none',
            cursor: 'pointer',
            marginRight: '5px',
          }}
        >
          Cancel
        </button>
        {/* Close Button */}
        <button 
          onClick={() => logout() }
          style={{
            marginTop: '10px',
            padding: '8px 12px',
            borderRadius: '6px',
            backgroundColor: 'var(--ifm-color-primary-dark)',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            marginLeft: '5px'
          }}
        >
          Logout
        </button>
      </dialog>
    </>
  );
}