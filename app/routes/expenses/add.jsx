// /expenses/add

import Modal from '~/components/util/Modal';
import ExpenseForm from '~/components/expenses/ExpenseForm';

export default function AddExpensesPage() {
  return (
    <Modal>
      <ExpenseForm />
    </Modal>
  );
}
