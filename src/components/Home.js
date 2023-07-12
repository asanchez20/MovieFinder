import Hero from "./Hero";
function Home() {
  return (
    <>
      <Hero text="Hello From React 201" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">The home content that goes here</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
