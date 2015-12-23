const Vars = {
  host(){
    if(__CLIENT__){
      const {hostname, port} = window.location;
      return `http://${hostname}:${port}`;
    }

    const hostname = process.env.HOSTNAME || "localhost";
    const port     = process.env.PORT || 8001;


    return `http://${hostname}:${port}`;
  }
}


export {Vars}
