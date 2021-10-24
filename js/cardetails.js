import getData from "./fetchData.js";
const listDetails = () => {
  getData.then((data) => {
    const filterDetail = data.filter((car) => car.make === "AUDI");
    for (let i = 0; i < filterDetail.length; i++) {
      let details = `
        <div class="row">
          <div class="col-md-6 col-xs-12">
            <div>
              <img src=${filterDetail[i].images[0]} alt="1" class="img-responsive wc-image" />
            </div>
            <br />
            <div class="row">
              <div class="col-sm-4 col-xs-6">
                <div>
                  <img
                    src="${filterDetail[i].images[1]}"
                    class="img-responsive"
                  />
                </div>
                <br />
              </div>
              <div class="col-sm-4 col-xs-6">
                <div>
                  <img
                    src="${filterDetail[i].images[2]}"
                    class="img-responsive"
                  />
                </div>
                <br />
              </div>
              <div class="col-sm-4 col-xs-6">
                <div>
                  <img
                    src="${filterDetail[i].images[3]}"
                    class="img-responsive"
                  />
                </div>
                <br />
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xs-12">
            <form action="#" method="post" class="form">
              <h2>${filterDetail[i].make} ${filterDetail[i].model}</h2>
              <p class="lead">
                ABS, Leather seats, Power Assisted Steering, Electric heated
                seats, New HU and AU, Xenon headlights
              </p>
              <p class="lead">
                <strong class="text-primary">$${filterDetail[i].price}</strong>
              </p>
              <div class="row">
                <div class="col-md-4 col-sm-6">
                  <p>
                    <span>Type</span>
                    <br />
                    <strong>${filterDetail[i].type}</strong>
                  </p>
                </div>
                <div class="col-md-4 col-sm-6">
                  <p>
                    <span>Make</span>
                    <br />
                    <strong>${filterDetail[i].make}</strong>
                  </p>
                </div>
                <div class="col-md-4 col-sm-6">
                  <p>
                    <span> Model</span>
                    <br />
                    <strong>${filterDetail[i].model}</strong>
                  </p>
                </div>
                <div class="col-md-4 col-sm-6">
                  <p>
                    <span>First registration</span>
                    <br />
                    <strong>${filterDetail[i].year}</strong>
                  </p>
                </div>
                <div class="col-md-4 col-sm-6">
                  <p>
                    <span>Mileage</span>
                    <br />
                    <strong>${filterDetail[i].mileage} km</strong>
                  </p>
                </div>
                <div class="col-md-4 col-sm-6">
                  <p>
                    <span>Fuel</span>
                    <br />
                    <strong>${filterDetail[i].fuel}</strong>
                  </p>
                </div>
                <div class="col-md-4 col-sm-6">
                  <p>
                    <span>Engine size</span>
                    <br />
                    <strong>${filterDetail[i].engineSize}</strong>
                  </p>
                </div>
                <div class="col-md-4 col-sm-6">
                  <p>
                    <span>Power</span>
                    <br />
                    <strong>${filterDetail[i].horsePower} hp</strong>
                  </p>
                </div>
                <div class="col-md-4 col-sm-6">
                  <p>
                    <span>Gearbox</span>
                    <br />
                    <strong>${filterDetail[i].gearbox}</strong>
                  </p>
                </div>
                <div class="col-md-4 col-sm-6">
                  <p>
                    <span>Number of seats</span>
                    <br />
                    <strong>${filterDetail[i].seats}</strong>
                  </p>
                </div>
                <div class="col-md-4 col-sm-6">
                  <p>
                    <span>Doors</span>
                    <br />
                    <strong>${filterDetail[i].doors}</strong>
                  </p>
                </div>
                <div class="col-md-4 col-sm-6">
                  <p>
                    <span>Color</span>
                    <br />
                    <strong>${filterDetail[i].color}</strong>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
    `;
      document
        .querySelector("#car-details")
        .insertAdjacentHTML("afterbegin", details);
    }
  });
};
listDetails();
