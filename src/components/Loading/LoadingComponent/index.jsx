import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';

import { LoadingComponentContain } from '../styles';
export const LoadingComponent = ({ ...rest }) => {
  LoadingComponent.propTypes = {
    rest: PropTypes.string,
  };
  return (
    <>
      <LoadingComponentContain {...rest}>
        <Spin size="large" />
      </LoadingComponentContain>
    </>
  );
};

export default LoadingComponent;
