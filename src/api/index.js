import fetch from "./fetch";
export const login = data =>
  fetch({
    url: "/login",
    method: "POST",
    data
  });
