import React, { useEffect, useRef } from 'react';

function Alert(props) {
  const alertRef = useRef(null);

  const capitalize = (word) => {
    if (word === 'danger') word = 'error';
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  useEffect(() => {
    if (props.alert && alertRef.current) {
      alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [props.alert]);

  return (
    <div style={{ height: '60px' }} ref={alertRef}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
