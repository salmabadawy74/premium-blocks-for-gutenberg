import React, { useEffect, useState } from "@wordpress/element";
import { useSelector } from "react-redux";
import classNames from "classnames";

const Alert = () => {
  const { alerts } = useSelector(state => state.notifications);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (alerts.length > 0) {
      setAlert(alerts[alerts.length - 1]);
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 2000);
    }
  }, [alerts]);

  const onClose = () => {
    setShow(false);
  };


  return show ? (
    <div className={classNames("pb-alert", 
     alert.type || "error"
     )}>
      <div>
        <span>{alert.message || ""}</span>
      </div>
      <button
        onClick={onClose}
        style={{ cursor: "pointer" }}
      >x </button>
    </div>
  ) : null;
};

export default Alert;
