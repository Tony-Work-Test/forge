// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';

import NxWelcome from './nx-welcome';
import { Fragment, Text } from '@forge/ui';

export const App = () => {
  return (
    <Fragment>
      <NxWelcome title="drc-reporting-ui" />
      <Text>Welcome to Reporting UI!</Text>
    </Fragment>
  );
};
