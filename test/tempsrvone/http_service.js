import NetInfo from "@react-native-community/netinfo";
const api_url = 'http://common.url/';

class OtherInfo{
    checkConnection(){
        return NetInfo.isConnected.fetch().then((res)=>{
            if(res){
                return Promise.resolve(res);
            }else{
                throw {'status':300,'msg':'Internet not connected..!'};
            }
        }).catch((err)=>{
            return Promise.reject(err);
        });
    }
}

class Http_service extends OtherInfo{
    postHttpCall = (senddata)=>{
        const token = senddata.authtoken != undefined ? senddata.authtoken : ''; 
        const headers = new Headers({'Content-Type': 'application/json', 'authtoken':token});
        const option = {
            method: 'POST',
            headers:headers,
            body:JSON.stringify(senddata.data)
        };
        return this.checkConnection().then((res)=>{
            return fetch(api_url+senddata.url,option)
            .then((responseObj) => {
                if(responseObj.ok == true){
                    return Promise.resolve(responseObj.json());
                }else{
                    throw responseObj._bodyInit;
                }
            })
            .catch(err => {
                console.log("An error occurred:", JSON.parse(err));
                return Promise.reject(JSON.parse(err));
            });
        }).catch((err)=>{
            return Promise.reject(err);
        });
    }

    getHttpCall = (senddata)=>{
        console.log(JSON.stringify(senddata));
        const token = senddata.authtoken != undefined ? senddata.authtoken : '';      
        const headers = new Headers({'Content-Type': 'application/json', 'authtoken':token});
        const option = {
            method: 'GET',
            headers:headers
        };

        return this.checkConnection().then((res)=>{
            return fetch(api_url+senddata.url,option)
            .then((responseObj) => {
                console.log('response'+responseObj)
                if(responseObj.ok == true){
                    return Promise.resolve(responseObj.json());
                }else{
                    throw responseObj._bodyInit;
                }
            })
            .catch(err => {
                console.log("An error occurred:", JSON.parse(err));
                return Promise.reject(JSON.parse(err));
            });
        }).catch((err)=>{
            return Promise.reject(err);
        });
    }

    putHttpCall = (senddata) => {
        console.log(JSON.stringify(senddata));
        const token = senddata.authtoken != undefined ? senddata.authtoken : ''; 
        const headers = new Headers({'Content-Type': 'application/json', 'authtoken':token});
        const option = {
            method: 'PUT',
            headers:headers,
            body:JSON.stringify(senddata.data)
        };

        return this.checkConnection().then((res)=>{
            return fetch(api_url+senddata.url,option)
            .then((responseObj) => {
                if(responseObj.ok == true){
                    return Promise.resolve(responseObj.json());
                }else{
                    throw responseObj._bodyInit;
                }
            })
            .catch(err => {
                console.log("An error occurred:", JSON.parse(err));
                return Promise.reject(JSON.parse(err));
            });
        }).catch((err)=>{
            return Promise.reject(err);
        });
    }

    handleErrors = (response) => {
        if (!response.ok) throw Error(response.statusText);
        return response;
    }
}

export default new Http_service;