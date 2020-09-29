import axios from "axios";

const apiURL = process.env.NODE_ENV === 'production' ? '' : '//localhost:3001'

export default {
    createMessage: function (message, created_date) {
        return axios({ method: "post", url: apiURL + "/api/react-mysql-template/create-message", data: { message, created_date } });
    },
    findAllMessages: function () {
        return axios({ method: "post", url: apiURL + "/api/react-mysql-template/find-all-messages", data: {} });
    },
    deleteOneMessage: function (messageID) {
        return axios({ method: "post", url: apiURL + "/api/react-mysql-template/delete-one-message", data: { messageID } });
    }
};