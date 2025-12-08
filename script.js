"use strict";

const url =
  "https://api.airtable.com/v0/appgDoPd3xylwod8J/Table%201?maxRecords=3&view=Grid%20view";
// function for our list view
async function getAllRecords() {
  let getResultElement = document.getElementById("San Francisco Resources");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer pateG7pBF1CkfmcW7.2c666498dc7818660958fea1c0bb95e5e1d33bbdb4871fed8ee5696394e05ce5`,
    },
  };

  await fetch(
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array

      getResultElement.innerHTML = ""; // clear brews

      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let Organization = data.records[i].fields["Organization"]; // here we are getting column values
        let Logo = data.records[i].fields["Logo"]; //here we are using the Field ID to fecth the name property
        let neighborhood = data.records[i].fields["Neighborhood"];

        newHtml += `
        
        <div class="card" style="width: 18rem;">
  <img src="${Logo[0].url}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${Organization}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
         <div class="col-xl-4 cardImageText">
          <div class="card list move border-dark mb-5" style="width: 20rem;">
          <a href="breweries.html?id=${data.records[i].id}">${
          logo
            ? `<img class="card-img-top rounded" alt="${Organization}" src="${Logo[0].url}">`
            : ``
        }
          </a>
          <p hidden class="card-key">${neighborhood}</p>
          </div>
          </div>
        </div>
    
        
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}

getAllRecords();
/*
  let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let logo = data.records[i].fields["Logo"]; // here we are getting column values
        let name = data.records[i].fields["Name"]; //here we are using the Field ID to fecth the name property
        let neighborhood = data.records[i].fields["Neighborhood"];

        newHtml += `
        
         <div class="col-xl-4 cardImageText">
          <div class="card list move border-dark mb-5" style="width: 20rem;">
          <a href="breweries.html?id=${data.records[i].id}">${
          logo
            ? `<img class="card-img-top rounded" alt="${name}" src="${logo[0].url}">`
            : ``
        }
          </a>
          <p hidden class="card-key">${neighborhood}</p>
          </div>
          </div>
        </div>
    
        
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}
*/
