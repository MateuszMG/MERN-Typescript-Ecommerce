import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const toastNotify = (error: any) => {
  if (!error) return;

  let err;
  const status = error?.status;

  if (typeof error === 'string') {
    err = error;
  } else {
    err =
      error?.data?.msg ||
      error?.data?.message ||
      `Error status code: ${error?.status}` ||
      'Error';
  }

  if (err === 'Error') return toast.error(err, { toastId: 'Error' });

  switch (status) {
    case 400:
      return toast.error(err, { toastId: '400' });

    case 401:
      return toast.warning('Your session has expired. Please login again.', {
        toastId: '401',
      });

    case 403:
      return toast.error('Access denied.', { toastId: '403' });

    case 429:
      return toast.error(
        'Too many request from this IP, please try again later.',
        { toastId: '429' },
      );

    case 500:
      return toast.error(err, { toastId: '500' });

    default:
      return toast.error(err, { toastId: status || err });
  }
};
