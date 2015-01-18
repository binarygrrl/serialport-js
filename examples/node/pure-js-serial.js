var serialjs=require('../../serialport-js');
serialjs.find(serialDevicesPopulated);

function serialDevicesPopulated(ports){
    //ports arg is a refrence to serialjs.ports
    console.log(
        ports
    );
    
    if(!ports[0])
        return;
    
    serialjs.open(ports[0].port,start,'\n');
}

function start(port){
    port.on(
        'data',
        gotData
    );

    port.send('howdy doody doo');
}

function gotData(data){
    console.log(data);
}
