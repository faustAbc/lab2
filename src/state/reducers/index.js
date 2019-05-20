import filesReducer from './files';

const reducer = ({ files }, action) => ({
  files: filesReducer(files, action),
});

export { reducer };