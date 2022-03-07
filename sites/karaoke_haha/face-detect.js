const video = document.getElementById('video')

var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;


// So this is a promise,
// It means that it will first call all these asyncronous functions

Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models'),
// and then run this
]).then(startVideo)

// it was only working in firefox...
function startVideo(evt){
  console.log('evt', evt)
  if (isFirefox) {
    navigator.mozGetUserMedia(
      {video: {} },
      stream => video.srcObject = stream,
      err => console.error(err)
    )
  } else {
    navigator.getUserMedia(
      {video: {} },
      stream => video.srcObject = stream,
      err => console.error(err)
    )
  }
  // setInterval(runDetections, 1000)
}

video.addEventListener('play', () => {
  const canvas = faceapi.createCanvasFromMedia(video)
  document.body.append(canvas)
  const displaySize = { width: video.width, height: video.height }
  faceapi.matchDimensions(canvas, displaySize)
  setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
    const resizedDetections = faceapi.resizeResults(detections, displaySize)
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
    faceapi.draw.drawDetections(canvas, resizedDetections)
    faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
    faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
  }, 100)
})

