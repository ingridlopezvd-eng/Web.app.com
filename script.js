"use strict";

const url =
  "https://api.airtable.com/v0/appgDoPd3xylwod8J/Table%201?maxRecords=10&view=Grid%20view";
// function for our list view
async function getAllRecords() {
  let getResultElement = document.getElementById("resources");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patkyHkDevXDLE79B.a2c80ae7b293e20d7376cd488319fe1b2d772d210f0ed063799e506eb0da7fa8`,
    },
  };

  await fetch( 
    url,
    options
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array

      getResultElement.innerHTML = "resources"; // clear brews
      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let Organization = data.records[i].fields["Organization"]; // here we are getting column values
        let Housing = data.records[i].fields["Housing"]; //here we are using the Field ID to fecth the name property
        let Employment = data.records[i].fields["Employment"];
        let Legalservices = data.records[i].fields["Legalservices"];
        let Otherresources = data.records[i].fields["Otherresources"];
        let Contact = data.records[i].fields["Contact"];
        let Location = data.records[i].fields["Location"];
        let Link = data.records[i].fields["Link"];
        let Logo = data.records[i].fields["Logo"][0].url;
        

        newHtml += `
        
        <div class="card" style="width: 18rem;">
            <img src="${Logo}" class="card-img-top" alt= "${Organization}">
            <div class="card-body">
              <h5 class="card-title">${Organization}</h5>
             <p><strong>Housing:</strong> ${Housing || "N/A"}</p>
              <p><strong>Employment:</strong> ${Employment || "N/A"}</p>
              <p><strong>Legal Services:</strong> ${Legalservices || "N/A"}</p>
              <p><strong>Other Resources:</strong> ${Otherresources || "N/A"}</p>
              <p><strong>Contact:</strong> ${Contact || "N/A"}</p>
              <p><strong>Location:</strong> ${Location || "N/A"}</p>
              <p><strong>Link:</strong> ${Link || "N/A"}</p>
             


              ${Link ? `<a href="${Link}" target="_blank" class="btn btn-primary">Visit Website</a>` : ""}
            </div>
          </div>
        `;
      };

      getResultElement.innerHTML = newHtml;
    });
}

getAllRecords();