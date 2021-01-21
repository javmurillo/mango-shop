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

/**
 * Custom spinner which shows an error message in case of [error] equals true. Icon spinning otherwise.
 * @param props CustomSpinnerProps
 */
export const CustomSpinner = (props: CustomSpinnerProps): JSX.Element => {
  return props.error ? (
    <div aria-label="spinner">
      <p aria-label="error message">{props.message}</p>
    </div>
  ) : (
    <StyledSpinnerWrapper aria-label="spinner">
      <StyledSpinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </StyledSpinner>
    </StyledSpinnerWrapper>
  );
};
