const iniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");

/* This code is adding an event listener to the `iniciarCamera` element, which is triggered when the
element is clicked. When the event is triggered, the code uses the
`navigator.mediaDevices.getUserMedia()` method to request access to the user's camera. If access is
granted, the video stream is assigned to the `video` element's `srcObject` property, and the
`iniciarCamera` and `campoCamera` elements' `display` properties are updated to show or hide them as
needed. */
iniciarCamera.addEventListener("click", async function(){
    const iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});

    iniciarCamera.computedStyleMap.display = 'none';
    campoCamera.computedStyleMap.display = 'block';

    video.srcObject = iniciarVideo;
});
