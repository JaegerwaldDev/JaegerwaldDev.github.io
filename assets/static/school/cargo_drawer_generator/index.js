getImageData = async function (blob) {
    const bitmap = await createImageBitmap(blob);
    const { width, height } = bitmap;

    // Create a temporary canvas element
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
  
    const ctx = canvas.getContext("2d");
    ctx.drawImage(bitmap, 0, 0);

    return ctx.getImageData(0, 0, width, height);
}

copyButton = document.getElementById("copy-result");
copyButton.addEventListener("click", function () {
    navigator.clipboard.writeText(document.querySelector("#result > code").innerText);
    copyButton.innerText = "Copied!";
    window.setTimeout(function () {
        copyButton.innerText = "Copy";
    }, 1000);
});

uploadArea = document.getElementById("upload-area");

uploadButton = document.getElementById("upload");
uploadButton.addEventListener("click", async function () {
    const imageData = await getImageData(uploadArea.files[0]);
    console.log(imageData);

    let resultData = "";

    const pixels = imageData.data;
    const r = pixels[0]; 
    const g = pixels[1];
    const b = pixels[2];
    const a = pixels[3];
    
    console.log(`First pixel RGBA: (${r}, ${g}, ${b}, ${a})`);

    for (let i=0; i<pixels.length; i+=4) {
        const red = pixels[i];
        const green = pixels[i + 1];
        const blue = pixels[i + 2];
        const alpha = pixels[i + 3];

        if (i / 4 < 16 * 16) {
            console.log(`Pixel ${i / 4} - RGBA: (${red}, ${green}, ${blue}, ${alpha})`);

            if (red == 255 && green == 255 && blue == 255) {
                resultData += "#";
            } else {
                resultData += " ";
            };
        };
    };
    resultData = resultData.match(/.{1,16}/g);

    for (let i=0; i<resultData.length; i++) {
        if (resultData[i] == " "*16) {
            resultData[i] = "";
        };
    };

    console.log(resultData);

    let resultCopyData = "string[] drawing = {\n";
    for (let i=0; i<resultData.length; i++) {
        resultCopyData += "    \"" + resultData[i] + "\""
        if (i != 15) {
            resultCopyData += ",\n";
        };
    };
    resultCopyData += "\n};";
    console.log(resultCopyData);
    document.querySelector("#result > code").innerText = resultCopyData;
});