import React from "react";
import { useState, useEffect } from "react";

const Notes = () => {
  const [note, setNote] = useState([]);

  async function getAllData() {
    let token = localStorage.getItem("token");
    try {
      const res = await fetch(
        "https://backend-5-chqa.onrender.com/note/allnote",
        {
          method: "GET",
          headers: { authorization: `bearer ${token}` },
        }
      );
      let data = await res.json();
      console.log(data.note);
      setNote(data.note);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(id) {
    let token = localStorage.getItem("token");
    try {
      const res = await fetch(
        `https://backend-5-chqa.onrender.com/note/delete/${id}`,
        {
          method: "DELETE",
          headers: { authorization: `bearer ${token}` },
        }
      );
      let res2 = await res.json();
      console.log(res2);
      getAllData();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <div>
      {note.length>0 ? (
        note.map((ele) => {
          return (
            <div
              key={ele._id}
              style={{
                border: "1px solid black",
                margin: "14px",
                padding: "14px",
              }}
            >
              <h3>{ele.title}</h3>
              <h4>{ele.description}</h4>
              <button
                onClick={() => {
                  handleDelete(ele._id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })
      ) : (
        <h1>No notes</h1>
      )}
    </div>
  );
};

export default Notes;
