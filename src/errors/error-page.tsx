import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

import NotFound from './404/not-found';
import GeneralError from './general/general-error';

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return <NotFound />;
    }
    return <GeneralError status={error.status} statusText={error.statusText} />;
  }

  throw error;
}
