import { Spinner } from 'react-bootstrap';
import styled from 'styled-components';
import { CustomSpinnerProps } from './spinner-props';

const StyledSpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledSpinner = styled(Spinner)`
  text-align: center;
`;

export const CustomSpinner = (props: CustomSpinnerProps): JSX.Element => {
  return props.error ? (
    <p>{props.message}</p>
  ) : (
    <StyledSpinnerWrapper>
      <StyledSpinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </StyledSpinner>
    </StyledSpinnerWrapper>
  );
};
