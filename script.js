function resizeVideoContainer() {
    var videoContainer = document.getElementById('videoContainer');

    var widthInput = document.getElementById('widthInput').value || 400;
    var heightInput = document.getElementById('heightInput').value || 300;

    // Convert inputs to numbers
    widthInput = parseInt(widthInput);
    heightInput = parseInt(heightInput);

    // Validate input
    if (!isNaN(widthInput) && widthInput > 0 && !isNaN(heightInput) && heightInput > 0) {
        videoContainer.style.width = widthInput + 'px';
        videoContainer.style.height = heightInput + 'px';

        var iframe = videoContainer.querySelector('iframe');
        iframe.style.width = '100%'; // Maintain responsive width
        iframe.style.height = heightInput + 'px';
    } else {
        alert("Invalid input. Please enter valid dimensions.");
    }
}
