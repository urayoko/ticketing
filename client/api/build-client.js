import axios from 'axios';

export default ({ req }) => {
    if(typeof window === 'undefined'){
        // We are on the server
        return axios.create({
            // baseURL: 'http://nginx-ingress-controller.kube-system.svc.cluster.local',
            baseURL: 'http://www.halsenindo.com/',
            headers: req.headers
        });
    }else{
        // We must be on the browser
        return axios.create({
            baseURL: '/'
        })
    }
};