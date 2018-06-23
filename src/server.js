const api_url =
  "https://r48bdeclb8.execute-api.us-east-2.amazonaws.com/testing/";

async function getCompanyList() {
  let result = await fetch(`${api_url}/getCompanyList`);
  return await result.json();
}

async function getCompanyInformation(name, location) {
  let result;

  if (location) {
    result = await fetch(
      `${api_url}/getCompanyInformation?name=${name}&location=${location}`
    );
  } else {
    result = await fetch(`${api_url}/getCompanyInformation?name=${name}`);
  }

  return await result.json();
}

async function getCompanyInformationFromLocation(location) {
  let result = await fetch(
    `${api_url}/getCompanyInformation?location=${location}`
  );
  return await result.json();
}

async function getLocationList() {
  let result = await fetch(`${api_url}/getLocations`);
  return await result.json();
}

async function getJobPositions() {
  let result = await fetch(`${api_url}/getJobPositions`);
  return await result.json();
}

async function getCompanyInfoFromJobTitle(title) {
  let result = await fetch(`${api_url}/getCompanyInfoFromJobTitle?title=${title}`);
  return await result.json();
}

async function saveReview(title, location, content, user, time, likes, icon, email) {
  let result = await fetch(`${api_url}/addReview?name=${title}&location=${location}&content=${content}&user=${user}&likes=${likes}&time=${time}&icon=${icon}&email=${email}`);
}

export {
  getCompanyInfoFromJobTitle,
  getCompanyInformation,
  getCompanyInformationFromLocation,
  getCompanyList,
  getJobPositions,
  getLocationList,
  saveReview,
};