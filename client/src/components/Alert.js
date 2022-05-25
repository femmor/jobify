import { useAppContext } from '../context/appContext';

const Alert = () => {
  const { alertType, alertText } = useAppContext();

  // Global state data
  return <div className={`alert alert-${alertType}`}>{alertText}</div>;
};
export default Alert;
