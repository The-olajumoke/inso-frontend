import axios from "axios";

export async function api(apiConnectType, url, data, callback, feedBack) {
  // alert("Yes");
  console.log(data);
  console.log(apiConnectType);
  try {
    let response;
    if (apiConnectType === "PATCH") {
      const config = {
        method: "PATCH",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };
      response = await axios.patch(url, data, config);
      console.log(response);
    }

    if (apiConnectType === "GET") {
      const config = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };
      response = await axios.get(url, config);
    }
    if (apiConnectType === "POST") {
      const config = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      };
      response = await axios.post(url, data, config);
    }
    console.log(response);

    if (response) {
      if (callback !== null && callback !== undefined) {
        callback(response.data);
      }
      // callback
    }
    if (response.data.status === false) {
      if (feedBack !== null && feedBack !== undefined) {
        feedBack(response.data.message);
      }
    }
  } catch (error) {
    console.log(error);
  }
}
