import { Watch } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <Watch
      height="150"
      width="150"
      radius="48"
      color="#4fa94d"
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}
    />
  );
};

export default Spinner;
