import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [links, setLinks] = useState([]);
  const [searchTag, setSearchTag] = useState("");
  const [formData, setFormData] = useState({
    url: "",
    title: "",
    tag: "",
  });

  useEffect(() => {
    const fetchLinks = async () => {
      const response = await fetch(`/api/link`);
      const data = await response.json();
      setLinks(data.links);
    };
    fetchLinks();
  }, []);

  const handleSubmit = async() => {
    const respose = await fetch(`/api/link`, 
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formData)
      });
      const createdLink = await respose.json();
      setLinks([...links, createdLink]);
      setFormData({
        url: "",
        title: "",
        tag: "",
      })
  }
  const handleDelete = async(id) => {
    await fetch(`/api/link/${id}`,
    {
      method: 'DELETE',
    });
    setLinks(links.filter(link => link._id !== id))
  }

  const handleSearch = async(tag) => {
    const response = await fetch(`/api/link?tag=${searchTag}`);
    const data = await response.json();
      setLinks(data.links);

  }


  return (
    <>
      <div>
        <input
          type="text"
          name=""
          id="search"
          placeholder="search link"
          value={searchTag}
          onChange={(e) => setSearchTag(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        {links.map((link) => (
          <div key={link._id}>
            <div>{link.title}</div>
            <div>{link.url}</div>
            <div>{link.tag}</div>
            <button onClick={() => handleDelete(link._id)}>delete</button>
          </div>
        ))}
      </div>
      <div>
        <form action="">
          <label htmlFor="url">url</label>
          <input
            type="text"
            id="url"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          />

          <label htmlFor="title">title</label>
          <input
            type="text"
            id="title"
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <label htmlFor="tag">tag</label>
          <input
            type="text"
            id="tag"
            value={formData.tag}
            onChange={(e) => setFormData({ ...formData, tag: e.target.value })}
          />
          <button
            onClick={handleSubmit}
          >Save</button>
        </form>
      </div>
    </>
  );
}

export default App;
