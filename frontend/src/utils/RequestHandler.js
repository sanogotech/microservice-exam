import axios from 'axios';

const baseURL = "/api/v1";
const instance = axios.create({baseURL})


const login = async (username, password) => {
    return await instance.post('/auth/login',
        {
            'userId': username,
            'password': password
        }).then(response => {
        return response
    })
};

const signUp = async (username, password) => {
    return await instance.post('/auth/signUp',
        {
            'userId': username,
            'password': password
        }).then(response => {
        return response
    })
};

const getAuthUser = async () => {
    return await instance.get('/auth/user',).then(response => {
        return response
    })
};

const updateUserInformation = async (userId, name, surname, middlename, email) => {
    return await instance.put('/users/' + userId,
        {
            'userId': userId,
            'name': name,
            'surname': surname,
            'middlename': middlename,
            'email': email
        }).then(response => {
        return response
    })
};

const getUserInformation = async (userId) => {
    return await instance.get('/users/' + userId).then(response => {
        return response
    })
};

const getAllUserBasicInformation = async () => {
    return await instance.get('/users/basic').then(response => {
        return response
    })
};

const getUserCount = async (userId) => {
    return await instance.get('/users/userCount').then(response => {
        return response
    })
};

const getAllPosts = async (path = '/posts') => {
    return await instance.get(path).then(response => {
        return response
    })
};

const createPost = async (title, message) => {
    const dateObj = new Date();
    const date = dateObj.getFullYear() + "-" + dateObj.getMonth() + "-" + dateObj.getDay();
    return await instance.post('/posts',
        {
            'title': title,
            'message': message
        }).then(response => {
        return response
    })
};

const logout = async () => {
    return await instance.post('/auth/logout').then(response => {
        return response
    })
};

const sendFriendRequest = async (fromId, toId) => {
    return await instance.post('/users/friendrequest',
        {
            'from': fromId,
            'to': toId
        }).then(response => {
        return response
    })
};

const approveFriendRequest = async (fromId, toId) => {
    return await instance.put('/users/friendrequest',
        {
            'from': toId,
            'to': fromId,
            'status': "APPROVED"
        }).then(response => {
        return response
    })
};

const denyFriendRequest = async (fromId, toId) => {
    return await instance.put('/users/friendrequest',
        {
            'from': toId,
            'to': fromId,
            'status': "DENIED"
        }).then(response => {
        return response
    })
};


export const requestHandler = {
    login,
    logout,
    signUp,
    getAuthUser,
    getUserInformation,
    getUserCount,
    getAllPosts,
    updateUserInformation,
    createPost,
    sendFriendRequest,
    approveFriendRequest,
    denyFriendRequest,
    getAllUserBasicInformation
};