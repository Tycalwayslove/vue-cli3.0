import fetch from "./fetch";
export const getAppConfigs = data =>
  fetch({
    url: "getAppConfigs",
    method: "POST",
    data
  });
