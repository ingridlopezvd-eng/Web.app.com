"use strict";

const url =
  "https://api.airtable.com/v0/appgDoPd3xylwod8J/Table%201?maxRecords=3&view=Grid%20view";
// function for our list view
async function getAllRecords() {
  let getResultElement = document.getElementById("brews");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patkyHkDevXDLE79B.a2c80ae7b293e20d7376cd488319fe1b2d772d210f0ed063799e506eb0da7fa8`,
    },
  };

  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object w/ .records array
    });
}

getAllRecords();
