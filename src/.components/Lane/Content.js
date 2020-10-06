import React from "react";
import ListItem from "./Listitem";

export function Content({ title, list = [], type }) {
  return (
    <div className="lane-content">
      <div className="lane-title">{title}</div>
      <ul className="list-container">
        {list.map((item, index) => (
          <ListItem index={index} id={item.id} type={item.type}>
            {item.content}
          </ListItem>
        ))}
      </ul>
    </div>
  );
}
export default Content;
