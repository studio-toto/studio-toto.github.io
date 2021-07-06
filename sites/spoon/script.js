//stolen from http://captcha.der-ringer.com/

var spoon = 'spoon.png';

if ( ! Detector.webgl ) Detector.addGetWebGLMessage();

var container, stats;

var camera, scene, renderer;

var uniforms;

var mouse = new THREE.Vector2();

init();
animate();

function init() {

    container = document.getElementById( 'container' );

    camera = new THREE.Camera();
    camera.position.z = 1;

    scene = new THREE.Scene();

    var geometry = new THREE.PlaneBufferGeometry( 2, 2 );

    uniforms = {
    time: { type: "f", value: Math.random()*100.0 },
    level: {type: "f", value: 1.0},
    resolution: { type: "v2", value: new THREE.Vector2() },
    mouse: { type: "v2", value: new THREE.Vector2() },
    texture: { type: "t", value: THREE.ImageUtils.loadTexture( spoon ) }
    };

    var material = new THREE.ShaderMaterial( {

    uniforms: uniforms,
    vertexShader: document.getElementById( 'vertexShader' ).textContent,
    fragmentShader: document.getElementById( 'fragmentShader' ).textContent

    } );

    var mesh = new THREE.Mesh( geometry, material );

    scene.add( mesh );

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio( window.devicePixelRatio );
    container.appendChild( renderer.domElement );

    onWindowResize();
    
    window.addEventListener( 'resize', onWindowResize, false );
    window.addEventListener( 'mousemove', onMouseMove, false );

}

function onWindowResize( event ) {

    renderer.setSize( window.innerWidth, window.innerHeight );

    uniforms.resolution.value.x = renderer.domElement.width;
    uniforms.resolution.value.y = renderer.domElement.height;

}

function animate() {

    requestAnimationFrame( animate );

    render();

}

function render() {
    var d = new Date();
    var n = d.getTime(); 
    
    uniforms.time.value += 0.009;
    
    renderer.render( scene, camera );
}



function onMouseMove( event ) {

    mouse.x = ( event.clientX / window.innerWidth ) ;
    mouse.y = - ( event.clientY / window.innerHeight ) +1.0;	
	
    uniforms.mouse.value = mouse;

}

function clampValue(valIn, min, max) {
    if (valIn < min) {return min;}
    else if (valIn > max) {return max;}
    else {return valIn;}

}

function randomIntFromInterval(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}