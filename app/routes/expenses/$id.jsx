// /expenses/<some-id> => /expenses/expense-1, /expenses/e-1

import Modal from '~/components/util/Modal';
import ExpenseForm from '~/components/expenses/ExpenseForm';

export default function UpdateExpensesPage() {
  return (
    <Modal>
      <ExpenseForm />
    </Modal>
  );
}
