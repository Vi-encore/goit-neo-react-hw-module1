import PropTypes from "prop-types";
import css from "./TransactionIten.module.css";

export default function TransactionItem({ item }) {
  const { type, amount, currency } = item;
  return (
    <tr className={css["table-row"]}>
      <td className={css["table-description"]}>{type}</td>
      <td className={css["table-description"]}>{amount}</td>
      <td className={css["table-description"]}>{currency}</td>
    </tr>
  );
}

TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.bool.isRequired,
  }).isRequired,
};
