import React, { useState } from "react";
import axios from "axios";
function AdminitemAdd() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);
    try {
      const response = await axios.post("http://localhost:5204/api/Employees/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setImageUrl(response.data.filePath); // Save the image path for display later
    } catch (error) {
      console.error("Error uploading the image", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Upload Image</button>
      </form>
      {imageUrl && <img src={`http://localhost:5204${imageUrl}`} alt="Uploaded" />}
    </div>
  );
}



export default AdminitemAdd;