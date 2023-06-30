import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const Navigate=useNavigate();
  return (
    <div className="container-fluid mt-5">
      <div
        className="row d-flex align-items-center justify-content-center"
        style={{ height: "500px" }}
      >
        <div className="col text-center">
          <h1 className="title">
            <strong>Authentic Japanese sushi, </strong>
          </h1>
          <br />
          <h1>
            <strong>made entirely from scratch.</strong>
          </h1>
        </div>
      </div>
      <div className="row mx-5">
        <img
          src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
          alt="..."
        />
      </div>
      <div className="row mt-5 mx-5 gx-5 d-flex align-items-center justify-content-center">
        <div className="col-6 mt-5">
          <h4>No specials, no shortcuts, no excuses.</h4>
          <br />
          <h2 className="para">
            <strong>
              When chef Sandra Vega took a two-week trip to Japan, she had never
              had sushi before. Upon returning to the India, she dedicated
              herself to learning how to make the perfect sushi. The rest is
              history.
            </strong>
          </h2>
        </div>
        <div className="col-5 mx-5 mt-5">
          <img
            className="mt-5"
            src="https://images.unsplash.com/photo-1615361200098-9e630ec29b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
            alt="..."
            style={{ width: "700px", height: "800px" }}
          />
        </div>
      </div>

      <div className="row mt-5 mx-5 gx-5 d-flex align-items-center justify-content-center">
        <div className="col-5 mx-5 mt-5">
          <img
            className="mt-5"
            src="https://images.unsplash.com/photo-1582450871972-ab5ca641643d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
            alt="..."
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div className="col-6 mt-5">
          <h4>Takes time,but yummy.</h4>
          <br />
          <h2 className="para">
            <strong>
              Sushi is not fast food! At least not here. Our sushi takes time,
              and we ask for your patience as we prepare what is sure to be the
              best plate of sushi you’ve ever had.
            </strong>
          </h2>
        </div>
      </div>

      <div className="row mt-5 mx-5 gx-5 ">
        <div className="col-12 mt-5 d-flex justify-content-center position-relative">
          <img
            src="https://cdn.pixabay.com/photo/2016/05/21/14/04/food-1406879_1280.jpg"
            alt="..."
            style={{ height: "1000px", width: "1700px",opacity:"0.9" }}
          />
          <div className="position-absolute mt-5 bg-transparent ">
            <h1 className="overlay"> Stop right in. </h1>
            <div className="row"><button type="button" className="btn btn-light" onClick={()=>Navigate('/reservation')}><h1>Make a Reservation</h1></button></div>
            
          </div>
         
        </div>
        
      </div>

      <div className="row mt-5 mb-5 mx-5 gx-5  ">
        <div className="col-4 mt-5 d-flex justify-content-center">
          <h1>Laup</h1>
        </div>
        <div className="col-4 mt-5 d-flex justify-content-center">
          <h1>Chef</h1>
        </div>

        <div className="col-4  mt-5 d-flex justify-content-center">
          <h1>Contact us</h1>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
