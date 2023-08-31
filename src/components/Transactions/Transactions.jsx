import { Table, Element, ElementTable } from './Transactions.styled';

export default function TransactionsList({ transactions }) {
  return (
    <Table>
      <thead>
        <tr>
          <Element>Type</Element>
          <Element>Amount</Element>
          <Element>Currency</Element>
        </tr>
      </thead>

      <tbody>
        {transactions.map(item => (
          <tr key={item.id}>
            <ElementTable>{item.type}</ElementTable>
            <ElementTable>{item.amount}</ElementTable>
            <ElementTable>{item.currency}</ElementTable>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
