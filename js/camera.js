const iniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const tirarFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("[data-video-canvas]");
const mensagem = document.querySelector("[data-mensagem]");
const enviarFoto = document.querySelector("[data-enviar]");

let imagemURL  = "";

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

/* This code is adding an event listener to the `tirarFoto` element, which is triggered when the
element is clicked. When the event is triggered, the code uses the `canvas` element's `getContext()`
method to get a 2D rendering context, and then uses the `drawImage()` method to draw the current
video frame onto the canvas. The resulting image is then converted to a data URL using the
`toDataURL()` method and assigned to the `imagemURL` variable. Finally, the `campoCamera` and
`mensagem` elements' `display` properties are updated to show or hide them as needed. This code is
essentially taking a snapshot of the current video frame and displaying it on the page. */
tirarFoto.addEventListener("click", function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.clientWidth, canvas.Height);

    imagemURL = canvas.toDataURL("image/jpeg");
    
    campoCamera.computedStyleMap.display = 'none';
    mensagem.computedStyleMap.display = 'block';
});

/* This code is adding an event listener to the `enviarFoto` element, which is triggered when the
element is clicked. When the event is triggered, the code retrieves the data stored in the
`cadastro` key of the browser's `localStorage` using the `localStorage.getItem()` method. The
retrieved data is then parsed from a string to an object using the `JSON.parse()` method and
assigned to the `converteRetorno` variable. The `imagemURL` variable is then assigned to the
`imagem` property of the `converteRetorno` object. The updated `converteRetorno` object is then
stored back in the `localStorage` using the `localStorage.setItem()` method. Finally, the page is
redirected to "/pages/abrir-conta-form-3.html" using the `window.location.href` property. This code
is essentially updating the `imagem` property of an object stored in the browser's `localStorage`
and redirecting the user to another page. */
enviarFoto.addEventListener("click", () => {
    const receberDadosExistentes = localStorage.getItem("cadastro");
    const converteRetorno = JSON.parse(receberDadosExistentes);

    converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(converteRetorno));

    window.location.href = "/pages/abrir-conta-form-3.html";
});