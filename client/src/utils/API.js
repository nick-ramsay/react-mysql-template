import axios from "axios";

const apiURL = process.env.NODE_ENV === 'production' ? '' : '//localhost:3001'

export default {
    
    createMessage: function (message, created_date) {
        console.log("Called createMessage API...");
        return axios({ method: "post", url: apiURL + "/api/react-mysql-template/create-message", data: {message, created_date} });
    },
    findAllMessages: function () {
        console.log("Called find all messages API...");
        return axios({ method: "post", url: apiURL + "/api/react-mysql-template/find-all-messages", data: {} });
    }/*,
    deleteOneMessage: function(messageID) {
        console.log("Called deleteOneMessage API...");
        return axios({ method: "post", url: apiURL + "/api/react-mongo-template/delete-one-message", data: {messageID} });
    }
    */
};