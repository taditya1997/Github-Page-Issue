import "./App.css";
import Issuelist from "./Issuelist.js";
import Pagination from "./Pagination.js";
import React, { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postperPage, setpostperPage] = useState(5);

  useEffect(() => {
    async function fetchData() {
      var result = await fetch(
        "https://api.github.com/repos/facebook/react/issues"
      ).then((response) => {
        return response.json();
      });
      setData(result);
      setLoading(false);
      // const IndexOflastpost = currentPage * postperPage;
      // const Indexoffirstpost = IndexOflastpost - postperPage;
      // const currentPost = data.slice(Indexoffirstpost, IndexOflastpost)
    }
    fetchData();
  }, []);

  const IndexOflastpost = currentPage * postperPage;
  const Indexoffirstpost = IndexOflastpost - postperPage;
  const currentPost = data.slice(Indexoffirstpost, IndexOflastpost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  console.log(currentPost);
  return (
    <>
      <div className="App">
        <div className="App-body">
          <Issuelist data={currentPost} loading={loading} />
        </div>
        <Pagination postperPage={postperPage}
        totalPosts={data.length}
        paginate={paginate}/>
      </div>
    </>
  );
}
export default App;
