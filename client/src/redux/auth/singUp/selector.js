export const getSingUpState = state => state.singUp;
export const getName = state => state.singUp.name;
export const getEmail = state => state.singUp.email;
export const isNotNext = state => state.singUp.name === '' || state.singUp.email === '';
