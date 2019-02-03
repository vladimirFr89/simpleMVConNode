class BodyParser{
    constructor() {
        this._buffer = [];
        this._body = {};
    }

    read(data){
        this._buffer.push(data);
    }

    getBody(){
        this._parse();
        return this._body;
    }

    _parse(){
        const body = Buffer.concat(this._buffer).toString();
        const keyValueArr = body.split('&');
        keyValueArr.forEach(keyValueItem => {
            this._body[keyValueItem.split('=')[0]] = keyValueItem.split('=')[1]; 
        })
    }
}

module.exports = BodyParser;