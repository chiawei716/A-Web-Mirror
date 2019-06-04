const type = 'video'

navigator.mediaDevices.getUserMedia({
    audio: false,
    video: 'video' === type,
}).then(stream => {
    if('video' === type){
        document.querySelector('#stream-video').srcObject = stream
    }
}).catch(err => console.log(err))