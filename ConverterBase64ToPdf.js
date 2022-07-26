export default function ConverterBase64ToPdf(nameArq, validBase64Data, contentType) {
  function b64ToBlob(_data, _type){
    const sliceSize = 512;
    const _contentType = _type || "";
    let b64Data = _data.replace(/^[^,]+,/,"");
    b64Data = b64Data.replace(/\s/g, "");
    const byteCharacters = window.atob(b64Data);
    let byteArrays = [];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);
      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      let byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {type: _contentType});
    return blob;
  }

  function save(name, data, type) {
    const blob = b64ToBlob(data, type);
      let objectURL = window.URL.createObjectURL(blob);
      let anchor = document.createElement("a");
      anchor.href = objectURL;
      anchor.download = name;
      anchor.click();
      window.URL.revokeObjectURL(objectURL);
    }

    save(nameArq, validBase64Data, contentType)
}

// exemplo contentType: "application/pdf"