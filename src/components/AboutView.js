import Hero from "./Hero";

function AboutView() {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">This is where the about view content will go</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutView;
