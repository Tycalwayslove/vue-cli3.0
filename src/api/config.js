import { parse } from "psl";
export const DEV_HOST = () => {
  const { subdomain, sld, tld } = parse(document.domain);
  if (!subdomain || subdomain == 168) {
    return `${location.protocol}//api-test.udai361.com/v2/`;
  }
  return /.*-test\d?/.test(subdomain)
    ? `${location.protocol}//api-${subdomain.split("-")[1]}.${sld}.${tld}/v2/`
    : `${location.protocol}//api.${sld || "udai361"}.${tld}/v2/`;
};
