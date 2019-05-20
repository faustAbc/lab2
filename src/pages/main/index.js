import React from 'react';
import FileList from '../../containers/fileList';
import { useStateValue } from '../../state';
import NoFilesMessage from '../../containers/noFilesMessage';
import Animated from '../../containers/animated';
import Fade from '@material-ui/core/Fade';

const Main = () => {
  const [{ files }] = useStateValue();

  const isFiles = !!files.files.length;

  const animatedFileList = (
    <Animated
      animatedType={Fade}
      condition={isFiles}
    >
      <FileList />
    </Animated>
  );

  const animatedNoFilesMessage = (
    <Animated
      animatedType={Fade}
      condition={!isFiles}
    >
      <NoFilesMessage />
    </Animated>
  );

  return (
    <React.Fragment>
      {animatedFileList}
      {animatedNoFilesMessage}
    </React.Fragment>
  );
}
export default Main;
