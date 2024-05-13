const Item = ({ id, note, date, time, removeItem, submittingStatus }) => {
  function remove() {
    submittingStatus.current = true;

    removeItem(function (prev) {
      return prev.filter(item => item.id !== id)
    });
  }

  return (
    <div className="item">
      <div>
        <p>{note}</p>
        <p>{`${date} ${time}`}</p>
      </div>
      <button onClick={remove} className="remove">
        刪除
      </button>
    </div>
  );
};

export default Item;
