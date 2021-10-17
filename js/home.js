const fetchData = () => {
  // FETCHING DATA LOCALY FROM JSON BY MAKING HTTP REQ
  fetch("../cars.json")
    .then((response) => {
      if (!response.ok) {
        throw Error("ERROR");
      }
      return response.json();
    })
    .then((data) => {
      // MAPPING ALL OBJECT'S DATA

      data.map((item) => {
        content = `
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class="courses-thumb courses-thumb-secondary">
          <div class="courses-top">
            <div class="courses-image">
            <a href="car-details.html">
              <img
                src=${item.images[1]}
                class="img-responsive"
              />
              </a>
            </div>
            <div class="courses-date">
              <span title="Author"
                ><i class="fa fa-dashboard"></i> ${item.mileage} km</span
              >
              <span title="Author"
                ><i class="fa fa-cube"></i> ${item.engineSize}</span
              >
              <span title="Views"><i class="fa fa-cog"></i> ${item.gearbox}</span>
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
            <a href="car-details.html" class="section-btn btn btn-primary btn-block">View More</a>
          </div>
          </div>
          </div>
          `;
        document
          .querySelector("#featured-cars")
          .insertAdjacentHTML("beforeend", content);
      });

      // FILTERING CAR OF THE WEEK (VW)
      
      const filterData = data.filter((car) => car.make === "VW");
      for (let i = 0; i < filterData.length; i++) {
        weeklyContent = `
        <div class="col-md-12">
        <div class="courses-thumb courses-thumb-secondary">
        <div class="courses-top">
          <div class="courses-image">
            <img
              src=${filterData[i].images[1]}
              class="img-responsive"
            />
          </div>
          <div class="courses-date">
            <span title="Author"><i class="fa fa-dashboard"></i> ${filterData[i].mileage} km</span>
            <span title="Author"
              ><i class="fa fa-cube"></i> ${filterData[i].engineSize}</span>
            <span title="Views"><i class="fa fa-cog"></i> ${filterData[i].gearbox}</span>
          </div>
        </div>
        <div class="courses-detail">
          <h3>
            <a href="car-details.html">${filterData[i].make} ${filterData[i].model}</a>
          </h3>
          <p class="lead">
            <strong>$${filterData[i].price}</strong>
          </p>
          <p>
            ${filterData[i].horsePower} hp / ${filterData[i].fuel}
            / ${filterData[i].year} /
            ${filterData[i].type}
          </p>
        </div>
        </div>
        </div>
        `;

        document
          .querySelector("#weeklyCar")
          .insertAdjacentHTML("beforeend", weeklyContent);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
fetchData();

const fullName = document.getElementById("fullName");
const emailAddress = document.getElementById("emailAddress");
const textMessage = document.getElementById("textMessage");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert(
    `Message sent by: ${fullName.value},  Email: ${emailAddress.value} , Text: ${textMessage.value}`
  );
});
