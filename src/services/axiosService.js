import ApiRequest from '../utils/config/axios.conf';

export function getRandomUser(){
    return ApiRequest.get('/')
}

