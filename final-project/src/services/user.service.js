class UserService {

    constructor() {
        this.url = "http://localhost:5100/"
    }

    _createReqest = (values, url) => {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(values),
        }).then(
            (response) => {
                if (response.status >= 300 || response.status < 200) {
                    const error = new Error();
                    error.response = response;
                    throw error
                }
                return response.json()
            })
    }

    _createGetReqest = ( url) => {
        return fetch(url)
        .then(
            (response) => {
                if (response.status >= 300 || response.status < 200) {
                    const error = new Error();
                    error.response = response;
                    throw error
                }
                return response.json()
            })
    }
   
    register=(values)=>{
       return this._createReqest(values,`${this.url}register`)
    }
    getAll=()=>{
        return this._createGetReqest(`${this.url}getAll`)
     }

}
export default new UserService()