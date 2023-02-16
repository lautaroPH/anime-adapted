const ErrorMessage = ({ message }) => {
  return <>{message && <p class="text-red-600">{message}</p>}</>;
};

export default ErrorMessage;
