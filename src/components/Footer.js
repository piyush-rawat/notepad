import React from "react";

const Footer = ({ setFileName, saveFile }) => {
  const handleSave = (e) => {
    e.preventDefault();
    saveFile();
  };

  const onChange = (e) => {
    setFileName(e.target.value);
  };

  return (
    <footer>
      <form>
        <a href="/" onClick={handleSave} className="btn">
          Save
        </a>
        <div className="form-div">
          <input
            placeholder="File Name"
            className="file-name"
            type="text"
            onChange={onChange}
          />
          <button className="txt">.txt</button>
        </div>
      </form>
    </footer>
  );
};

export default Footer;
