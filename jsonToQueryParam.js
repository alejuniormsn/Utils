export default function jsonToQueryParam(objJson) {
  let str = "?" + Object.keys(objJson).reduce(
    function (a, k) {
      if (objJson[k] !== undefined) {
        a.push(k + "=" + objJson[k]);
        return a;
      } else return a;
    }, []).join("&");

    return str;
    
}