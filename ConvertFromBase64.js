export default function ConverterBase64ToPdf(nameArq, validBase64Data, contentType) {
  
  function save(name, data, type) {
    const blob = new Blob([data], {type: contentType});
    let objectURL = window.URL.createObjectURL(blob);
    let anchor = document.createElement("a");
    anchor.href = objectURL;
    anchor.download = name;
    anchor.click();
    window.URL.revokeObjectURL(objectURL);
  }
  
  const _data = Buffer.from(validBase64Data, "base64");
  
  save(nameArq, _data, contentType);

}

// exemplo contentType: "application/pdf"