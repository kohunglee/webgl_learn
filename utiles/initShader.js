export default function(gl){
    // 创建顶点着色器和片元着色器
    const vertexShader = gl.createShader(gl.VERTEX_SHADER);
    const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
 
    // 创建着色器源码
    const vertexSource = document.getElementById('vertex-shader').innerText;
    const fragmentSource = document.getElementById('fragment-shader').innerText;
 
    //绑定着色器源码
    gl.shaderSource(vertexShader, vertexSource);
    gl.shaderSource(fragmentShader, fragmentSource);
 
    // 编译着色器源码
    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);
 
    // 创建程序对象
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
 
    // 链接
    gl.linkProgram(program);
    gl.useProgram(program);
 
    return program;
}
