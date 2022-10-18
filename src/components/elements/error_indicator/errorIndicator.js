const ErrorIndicator = ({ error }) => {
  console.error(error);
  return <div>{error.toString()}</div>;
};

export default ErrorIndicator;
