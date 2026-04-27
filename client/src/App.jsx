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
      const response = await fetch(`http://localhost:3000/api/link`);
      const data = await response.json();
      setLinks(data.links);
    };
    fetchLinks();
  }, []);

  async function handleSubmit() {}
  async function handleSearch() {}
  async function handleDelete() {}

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
        <button>Search</button>
      </div>

      <div>
        {links.map((link) => (
          <div key={link._id}>
            <div>{link.title}</div>
            <div>{link.url}</div>
            <div>{link.tag}</div>
            <button>delete</button>
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
          <button>Save</button>
        </form>
      </div>
    </>
  );
}

export default App;
