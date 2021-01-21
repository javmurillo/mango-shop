import { Alert, Navbar } from 'react-bootstrap';

export const NotFound = (): JSX.Element => {
  return (
    <div aria-label="not found">
      <Navbar />
      <Alert variant="dark" aria-label="not found alert">
        The page you are looking for was not found!
      </Alert>
    </div>
  );
};
