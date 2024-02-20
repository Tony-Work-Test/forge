// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import styles from './app.module.scss';


import { Table, Head, Cell, Text, Row, CustomContent} from '@forge/ui';
const issues = [
  {
    key: 'XEN-1',
    status: 'In Progress',
  },
  {
    key: 'XEN-2',
    status: 'To Do',
  },
];
export const App = () => {
  return (
    <CustomContent>
    <Table>
    <Head>
      <Cell>
        <Text>Issue Key</Text>
      </Cell>
      <Cell>
        <Text>Status</Text>
      </Cell>
    </Head>
    {issues.map(issue => (
      <Row>
        <Cell>
          <Text>{issue.key}</Text>
        </Cell>
        <Cell>
          <Text>{issue.status}</Text>
        </Cell>
      </Row>
    ))}
  </Table>
  </CustomContent>
  );
};
