import React from "react";

function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-3 p-3">
        <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
          <figure>
            {/* <img src={item.image} alt="Books" /> */}
            <img src={item.image} alt={item.title} style={{ width: "200px", height: "250px" }} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            {/* this below is to add author or someone who uploaded the book */}
            {/* <p>{item.author}</p> */}
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
                 {/* download button for books   */}
                <a href={item.durl}  target="_blank" >
                Get Book
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
