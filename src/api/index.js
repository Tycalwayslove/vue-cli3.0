import fetch from "./fetch";
export const test = data =>
  fetch({
    url: "/test",
    method: "post",
    data
  });
