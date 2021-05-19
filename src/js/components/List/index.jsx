import React, { useEffect, useState } from "react";

import ListItem from "../ListItem";

const INTERVAL = 4000;
const LOREM_IPSUM =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi deserunt, molestiae quidem a, quis aspernatur nobis.";

const List = () => {
  const [list, setList] = useState([
    {
      img: 0,
      text: LOREM_IPSUM,
    },
  ]);

  // mimicks polling for data from an API
  useEffect(() => {
    setTimeout(() => {
      setList([
        {
          img: Math.ceil(Math.random() * 8),
          text: LOREM_IPSUM.slice(Math.ceil(Math.random() * 100)),
        },
        ...list,
      ]);
    }, INTERVAL);
  }, [list]);

  return (
    <section>
      <ul id="list" className="mx-auto max-w-sm p-4 space-y-4">
        {list &&
          list.map((n, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <ListItem key={index} img={n.img} text={n.text} />
          ))}
      </ul>
    </section>
  );
};

export default List;
