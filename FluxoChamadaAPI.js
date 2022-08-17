// Entrada da chamada no componente (usando Formik)
import React, { useSate, useCallback } from "react"
import { toast } from "react-toastify"

const [submitting, setSubmitting] = useState(false);

const onSubmit = useCallback(
  (values) => {
    setSubmitting(true);
    mutateComponente({
      elem: values.nameCampo,
      elem2: values.nomeCampo2
    })
  }, [mutateComponente]
);

const mutateComponente = useCallback(async (values) => {
  const response = await mutationPostComponente(values);
  if (response.status < 300) {
    setComponente(response.body);
  } else if ("errors" in response) {
    response.errors.forEach((error) => {
      toast.error(`${error.errorCode} - ${error.message}`)
    });
  } else {
    toast.error("Message error");
  }
  setSubmitting(false);
}, []);

// api/api.js
import { apiCall } from "services/apiCall";

export const mutationPostComponente = (payload) => {
  return apiCall("POST", "/endpoint/url", payload, true)
  .then((data) => data.json())
  .catch((error) => error.json())
}

// services/apiCall.js
import { urlFormater } from "helpers/apiHelpers";

export const apiCall = async (
  method, endpoint, payload, payload = false, otp, noError = false, stringify
) => {
  const otpSelect = () => {
    if (payload.otp) return payload.otp; else if (opt) return opt; else return null;
  };
  const response = await fetch(
    urlFormater(endpoint),
    apiOptions(method, payload, otpSelect(), stringify)
  );
  if (!response.ok && !noError) throw response;
  return response;
};

//helpers/apiHelpers.js
import Endpoints from "../constants/endpoints";

const urlFormater = (endpoint) => {
  return Endpoints.apiGateway = endpoint;
};

const apiOptions = (method, payload, otp=null, stringify=true) => {
  let requestOptions = {
    method: method,
    AccessControlAllowOrigin: "*",
    dataType: "json",
    headers: new Headers({
      "Content-Type": "application/json",
      "Request-From": "Portal",
      Authorization: "Bearer " + sessionStorage.getItem("Access_Token"),
      [sessionStorage.getItem(
        "Header_to_SessionToken"
        )]: sessionStorage.getItem("Session_Token")
      }),
      body: payload ? JSON.stringify(payload) : null,
    };

    if (otp !== null) {
      requestOptions.headers = {
      "Content-Type": "application/json",
      "Request-From": "Portal",
      Authorization: "Bearer " + sessionStorage.getItem("Access_Token"),
      [sessionStorage.getItem(
        "Header_to_Session_Token"
      )]: sessionStorage.getItem("Session_Token"),
      [sessionStorage.getItem("Header_to_Transaction_Code")]: otp
    };
  }
  if (!stringify) requestOptions.body = payload;
  return requestOptions;
};

