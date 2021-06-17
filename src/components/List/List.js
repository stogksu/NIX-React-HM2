import React from "react";

const List = ({image, openModal}) => {
    return (
      <div onClick={openModal}>
        <img src={`${image}`} alt=""></img>
      </div>
    );
  };
  
  export default List;