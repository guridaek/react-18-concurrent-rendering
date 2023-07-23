import { useDeferredValue } from "react";

const List = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );

  // const deferredItems = useDeferredValue(items);

  // return (
  //   <ul>
  //     {deferredItems.map((item) => (
  //       <li key={item}>{item}</li>
  //     ))}
  //   </ul>
  // );
};

export default List;
