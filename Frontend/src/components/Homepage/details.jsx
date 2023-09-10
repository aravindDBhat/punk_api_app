import Search from "./searchbar";

function Details(props) {
  return (
    <div className="mb-5">
      <a href="/" className=" ms-5 mt-3 btn d-inline-flex">
        <i class="fa-solid fa-arrow-left d-flex mt-3 fa-2xl"></i>
        <h4 className="d-flex ms-1">Back</h4>
      </a>
      <h1 className="mb-5 text-center">{props.show.name}</h1>
      <div className="row ps-5 pe-5">
        <div className="col-lg-6 text-center mt-5 pt-3">
          <img src={`${props.show.image_url}`} height={600}></img>
        </div>
        <div className="col-lg-6  mt-5 pt-3">
          <div className="mb-5">
            <h4>Tagline : </h4>
            <h6 className=" mt-4 ">{props.show.tagline}</h6>
          </div>
          <div className="mb-5">
            <h4>Discription: </h4>
            <h6 className=" mt-4 ">{props.show.description}</h6>
          </div>
          <div className="mb-5">
            <h4>Brewers_tips : </h4>
            <h6 className=" mt-4 ">{props.show.brewers_tips}</h6>
          </div>
          <div className="mb-5">
            <h4>Contributed_by : </h4>
            <h6 className=" mt-4 ">{props.show.contributed_by}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Details;
