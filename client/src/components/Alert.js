const Alert = ({ type, message }) => {
  // Global state data
  return <div className={`alert alert-${type}`}>{message}</div>;
};
export default Alert;
