import Item from "./Item";

const List = ({ listData, removeItem, submittingStatus }) => {
  return (
    <div className="list">
      {listData.map((item) => {
        const { id, note, date, time } = item;
        return (
          <Item
            id={id}
            note={note}
            date={date}
            time={time}
            removeItem={removeItem}
            submittingStatus={submittingStatus}
          />
        );
      })}
    </div>
  );
};

export default List;
