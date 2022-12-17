import { PulseLoader } from 'react-spinners';

interface LoaderProps {
  size?: number;
}

export const Loader = ({ size }: LoaderProps) => {
  return <PulseLoader color={'#30dafb'} loading={true} size={size || 10} />;
};
