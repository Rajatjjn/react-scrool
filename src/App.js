import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import "./style.css";

const style = {
  border: "2px solid green",
  width: "90px",
  margin: 12,
  padding: 4,
};

export default function ScroolII() {
  const [data, setdata] = useState(Array.from({ length: 20 }));
  const [hasmore, sethasmore] = useState(true);

  function fetchmoredata() {
    //make api xall
    if (data.length < 200) {
      setTimeout(() => {
        setdata(data.concat(Array.from({ length: 20 })));
      }, 500);
    } else {
      sethasmore(false);
    }
  }
  return (
    <div className="App">
      <InfiniteScroll
        dataLength={data.length}
        next={fetchmoredata}
        hasMore={hasmore}
        loader={<p>loading...</p>}
        endMessage={<p>you are all set...</p>}
      >
        {data.map((item, index) => (
          <div style={style}>This is div{index + 1}</div>
        ))}
      </InfiniteScroll>
    </div>
  );
}
