import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID c6b4c46901bc2b87969760cedca297e3914e859f62aaf74fb5c6093062ee2d79"
  }
});
