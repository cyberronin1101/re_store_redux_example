import "./books_list_item.css";

const BooksListItem = ({ item, onAddBookToCart }) => {
  let { title, author, coast } = item;
  return (
    <article className={"bookListItem"}>
      <div className={"bookListItem__cover"}>
        <img src="/img/book-placeholder.jpg" alt={title + "" + author} />
      </div>
      <div className={"bookListItem__detail"}>
        <div className={"bookListItem__title"}>
          <span>{title}</span>
        </div>

        <div className={"bookListItem__author"}>{author}</div>
        <div className={"bookListItem__price"}>
          {coast.toLocaleString("ru-RU")} ₽
        </div>
        <button className={"btn btn-info"} onClick={onAddBookToCart}>
          Add to cart
        </button>
      </div>
    </article>
  );
};

export default BooksListItem;
