import { useState, useEffect } from "react";
import Cards from "./card";
import Search from "./searchbar";
import Details from "./details";
import axios from "axios";
function Home() {
  const [beers, setBeers] = useState([]);
  const [searchItem, setSearchItem] = useState();
  const [viewDetail, setViewDetail] = useState(false);
  const [show, setShow] = useState([]);
  const handleViewDetail = (data) => {
    setViewDetail(!viewDetail);
    setShow(data);
  };
  const handleSearchItem = (e) => {
    setSearchItem(e.target.value);
  };

  useEffect(() => {
    if (searchItem) {
      axios
        .get(`https://api.punkapi.com/v2/beers?beer_name=${searchItem}`)
        .then((response) => {
          setBeers(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios
        .get(`https://api.punkapi.com/v2/beers?`)
        .then((response) => {
          setBeers(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [searchItem]);

  return (
    <>
      {viewDetail === true ? (
        <Details show={show} />
      ) : (
        <div className="bg-white bg-opacity-75">
          <div
            className="mb-5 bg-secondary w-100 p-2"
            fixed="top"
            style={{
              display: "block",
              position: "-webkit-sticky",
              zIndex: 100,
            }}
          >
            <Search function={handleSearchItem} />
          </div>
          <div className="container">
            <h1 className="text-center mb-4">Get Beers</h1>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4">
              {beers &&
                beers.length > 0 &&
                beers.map((beer) => {
                  return (
                    <div className="col">
                      <Cards function={handleViewDetail} beer={beer} />
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Home;
