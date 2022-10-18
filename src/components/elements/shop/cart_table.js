import "./cart_table.css";
import { connect } from "react-redux";
import {
  onDecrease,
  onDelete,
  onIncrease,
} from "../../../actions/books_actions";

const CartTable = ({
  cartItems = [],
  orderTotal = 0,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  let renderRow = (item, idx) => {
    let { id, title, total, count } = item;

    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td className={"cartTable__title"}>{title}</td>
        <td>{count}</td>
        <td className={"cartTable__price"}>{total} ₽</td>
        <td className={"cartTable__action"}>
          <button
            className={"btn btn-sm btn-outline-warning"}
            onClick={() => onDecrease(id)}
          >
            <i className={"fa fa-minus-circle"}></i>
          </button>
          <button
            className={"btn btn-sm btn-outline-success"}
            onClick={() => onIncrease(id)}
          >
            <i className={"fa fa-plus-circle"}></i>
          </button>
          <button
            className={"btn btn-sm btn-outline-danger"}
            onClick={() => onDelete(id)}
          >
            <i className={"fa fa-trash-o"}></i>
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className={"cartTable__container"}>
      <h2>Your order</h2>

      <table className={"cartTable"}>
        <thead>
          <tr>
            <th>#</th>
            <th className={"cartTable__title"}>Item</th>
            <th>Count</th>
            <th className={"cartTable__price"}>Price</th>
            <th className={"cartTable__action"}>Action</th>
          </tr>
        </thead>
        <tbody>{cartItems.map(renderRow)}</tbody>
      </table>

      <div className={"cartTable__total"}>
        Total: {orderTotal.toLocaleString("ru-RU")} ₽
      </div>
    </div>
  );
};

let mapStateToProps = ({ shopCart: { cartItems, orderTotal } }) => ({
  cartItems,
  orderTotal,
});

let mapDispatchToProps = {
  onIncrease,
  onDecrease,
  onDelete,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartTable);
