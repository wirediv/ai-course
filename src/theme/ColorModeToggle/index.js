import React from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import {logout} from '@site/src/pocketbase';

export default function ColorModeToggleWrapper(props) {
  return (
    <>
      <ColorModeToggle {...props} />
      <a style={{background: '#fd5469', color: 'white', paddingRight: 10, paddingLeft: 10, paddingBottom: 2, borderRadius: 5, marginLeft: 15, cursor: "pointer"}} onClick={() => logout(() => window.location.reload())}>
        Logout
      </a>
    </>
  );
}