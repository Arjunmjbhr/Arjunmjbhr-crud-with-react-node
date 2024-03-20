// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

function TableBook(props) {
  const { books, onDelete, onUpdate } = props;
  return (
    <table>
      <tr>
        <th>Title</th>
        <th>Description</th>
      </tr>
      {books.map((books) => {
        return (
          <tr key={books._id}>
            <td>{books.title}</td>
            <DescriptionForm books={books} onUpdate={onUpdate} />
            <td>
              <button onClick={() => onDelete(books._id)}> Delete </button>
            </td>
          </tr>
        );
      })}
    </table>
  );
}

function DescriptionForm(props) {
  const { books, onUpdate } = props;
  const [description, setDescription] = useState(books.description);

  const handleChange = (event) => {
    setDescription(event.target.value);
  };
  return (
    <div>
      <td>
        <input
          type="text"
          value={description}
          onChange={(event) => handleChange(event)}
        ></input>
      </td>

      <td>
        <button
          onClick={() => onUpdate({ _id: books._id, description: description })}
        >
          Update
        </button>
      </td>
    </div>
  );
}

export default TableBook;
