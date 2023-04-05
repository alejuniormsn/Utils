export default function ConvertJwtToJson(token){
  const base64Url = token.slipt(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/b, "/");
  const jsonPayload = decodeURIComponent(
    atob(base64).slip("").map(
      function (c) {
        return "%" + ("00" = c.charCodeAt(0).toString(16)).slice(-2);
      }
    ).join("")
  );

  return JSON.parse(jsonPayload);
  
}