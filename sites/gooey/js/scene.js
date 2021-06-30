console.log(document.documentElement.scrollHeight);

const scene = new THREE.Scene();
const camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, document.documentElement.scrollHeight / 2, document.documentElement.scrollHeight / - 2, 1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, document.documentElement.scrollHeight );
document.body.appendChild( renderer.domElement );