import React, { useState } from "react";

import Modal from "react-modal";
import "./AddMovie.css";
/*const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };
*/

Modal.setAppElement("#root");

const AddMovie = ({ AddNewMovie }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [newMovie, setNewMovie] = useState({
    name: "",
    date: "",
    rating: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  
  function openModal() {
    setIsOpen(true);
  }
 /* function afterOpenModal() {
    subtitle.style.color = '#f00';
  }
*/
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="Add-btn-container">
      <button className="Add-btn" onClick={openModal}>
        +
      </button>
      <Modal
        className="add-modal"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <h1 className="addMovie-h1">Add A Movie</h1>
        <form>
          <label>Movie Name</label>
          <input type="text" name="name" onChange={handleChange} required />
          <label>Movie Rate</label>
          <input type="text" name="rating" onChange={handleChange} required />
          <label>Movie Release Date</label>
          <input type="text" name="date" onChange={handleChange} required />
          <label>Movie Image</label>
          <input type="url" name="image" onChange={handleChange} required />
          <label>Movie Summary</label>
          <textarea
            type="text"
            name="description"
            onChange={handleChange}
            required
          />
        </form>
        <button
          className="Modal-btn"
          onClick={() => {
            AddNewMovie(newMovie);
            closeModal();
          }}
        >
          Submit
        </button>
        <button className="Modal-btn" onClick={closeModal}>
          close
        </button>
      </Modal>
    </div>
  );
};

export default AddMovie;