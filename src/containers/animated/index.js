import React from 'react';

const Animated = ({
  children,
  animatedType: AnimatedType,
  condition,
  ...rest
}) => (
    <AnimatedType in={condition}>
      <div {...rest}>
        {children}
      </div>
    </AnimatedType>
  );

export default Animated;