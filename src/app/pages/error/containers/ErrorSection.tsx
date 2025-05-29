import { ERROR_TYPE } from '../../../../constants/enum';
import Error from '../../../shared/components/Error';

const ErrorSection: React.FC = () => {
  return (
    <Error
      message="The page you're looking for doesn't exist or may have been moved. Please check the URL or return to the homepage."
      errorType={ERROR_TYPE.PAGE}
    />
  );
};

export default ErrorSection;
