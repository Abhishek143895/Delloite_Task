function uploadPhoto() {
    console.log("Starting of code");
    const L = parseInt(document.getElementById("dimension").value);
    const fileInput = document.getElementById("photoUpload");
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = ""; 
    if (!L || !fileInput.files.length) {
        alert("Please enter a minimum dimension and select photos.");
        return;
    }

    const files = Array.from(fileInput.files); 

    files.forEach(file => {
        const img = new Image();
        img.onload = function () {
            const W = img.width;
            const H = img.height;
            let message = "";

            if (W < L || H < L) {
                message = `File: ${file.name} - UPLOAD ANOTHER (Dimensions: ${W}x${H})`;
            } else if (W === H) {
                message = `File: ${file.name} - ACCEPTED (Dimensions: ${W}x${H})`;
            } else {
                message = `File: ${file.name} - CROP IT (Dimensions: ${W}x${H})`;
            }

            const paragraph = document.createElement("p");
            paragraph.textContent = message;
            outputDiv.appendChild(paragraph);
        };

        img.src = URL.createObjectURL(file);
    });
}
