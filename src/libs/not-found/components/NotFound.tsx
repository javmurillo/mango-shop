import { Alert, Navbar } from 'react-bootstrap';

export const NotFound = (): JSX.Element => {
  return (
    <div>
      <Navbar />
      <Alert variant="dark">The page you are looking for was not found!</Alert>
    </div>
  );
};
