import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

import { LoadingContain } from './styles';

export const Loading = ({ ...rest }) => {
  Loading.propTypes = {
    rest: PropTypes.string,
  };
  return (
    <>
      <LoadingContain {...rest}>
        <Spin size="large" />
      </LoadingContain>
    </>
  );
};

export default Loading;
