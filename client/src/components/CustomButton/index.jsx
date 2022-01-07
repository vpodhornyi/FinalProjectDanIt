import * as React from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';
import {useButton} from '@mui/base/ButtonUnstyled';
import {styled} from '@mui/system';

const CustomButtonRootF = style => styled('button')`
  padding: 10px 15px;
  border-radius: 30px;
  width: 100%;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
 
  ${style}
`;

const CustomButton = React.forwardRef(function CustomButton(props, ref) {
  const {children, CustomButtonRoot} = props;
  const {active, disabled, focusVisible, getRootProps} = useButton({
    ...props,
    ref,
    component: CustomButtonRoot,
  });

  return (
    <CustomButtonRoot {...getRootProps()}>
      {children}
    </CustomButtonRoot>
  );
});

CustomButton.propTypes = {
  children: PropTypes.node,
};

export default function UseButton(props) {
  const dispatch = useDispatch();
  const {name, customStyle, onclickAction} = props;
  const CustomButtonRoot = CustomButtonRootF(customStyle);
  
  return <CustomButton
    onClick={() => dispatch(onclickAction())}
    CustomButtonRoot={CustomButtonRoot}>{name}</CustomButton>
}
