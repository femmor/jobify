const Alert = ({ alertType, alertText }) => {
  // Global state data
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};
export default Alert;
