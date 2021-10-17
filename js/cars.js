const listCars = () => {
  fetch("../cars.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      data.map((item) => {
        content = ` <div class="col-lg-6 col-md-4 col-sm-6">
        <div class="courses-thumb courses-thumb-secondary">
          <div class="courses-top">
            <div class="courses-image">
              <img
                src=${item.images[1]}
                class="img-responsive"
              />
            </div>
            <div class="courses-date">
              <span title="Author"
                ><i class="fa fa-dashboard"></i> ${item.mileage}km</span
              >
              <span title="Author"
                ><i class="fa fa-cube"></i> ${item.engineSize}cc</span
              >
              <span title="Views"
                ><i class="fa fa-cog"></i> ${item.gearbox}</span
              >
            </div>
          </div>

          <div class="courses-detail">
            <h3>
              <a href="car-details.html">${item.make} ${item.model}</a>
            </h3>

            <p class="lead">
              <strong>$${item.price}</strong>
            </p>

            <p>
              ${item.horsePower} hp / ${item.fuel}
              / ${item.year} /
              ${item.type}
            </p>
          </div>

          <div class="courses-info">
            <a
              href="car-details.html"
              class="section-btn btn btn-primary btn-block"
              >View More</a
            >
          </div>
        </div>
      </div>
      `;
        document
          .querySelector("#carsList")
          .insertAdjacentHTML("beforeend", content);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
listCars();
