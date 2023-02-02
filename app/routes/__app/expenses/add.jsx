// /expenses/add

import Modal from '~/components/util/Modal';
import ExpenseForm from '~/components/expenses/ExpenseForm';
import { useNavigate } from '@remix-run/react';

export default function AddExpensesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    // navigate programmatically
    navigate('..');
  }

  return (
    <Modal onClose={closeHandler}>
      <ExpenseForm />
    </Modal>
  );
}
