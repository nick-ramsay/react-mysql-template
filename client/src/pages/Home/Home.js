import React, { useState, useEffect } from 'react';
import { useInput } from '../../sharedFunctions/sharedFunctions';
import API from "../../utils/API";
import moment from 'moment';
import logo from '../../../src/logo.svg';
import GithubLogo from '../../images/github_logos/GitHub_Logo_White.png';
import MySQLLogo from '../../images/mysql_logo.png';
import "./style.css";

const Home = () => {

    var [newMessage, setNewMessage] = useInput("");
    var [messages, setMessages] = useState([]);
    var [loading, setLoading] = useState(true);

    console.log(loading);

    const renderMessages = () => {
        setLoading(loading => true);
        API.findAllMessages().then(res => {
            //console.log(res.data);
            setMessages(messages => 
                res.data,
                setLoading(loading => false)
            );
        });
    }

    const saveMessage = (event) => {
        setLoading(loading => true);
        if (newMessage !== "") {
            API.createMessage(newMessage).then(
                (res) => {
                    //console.log(res.data);
                    renderMessages();
                    document.getElementById('messageInput').value = "";
                    setLoading(loading => false);
                }
            );
        }
    };

    const deleteMessage = (event) => {
        setLoading(loading => true);
        let messageDeletionID = event.currentTarget.dataset.message_id;
        API.deleteOneMessage(messageDeletionID).then(
            (res) => {
                //console.log(res.data);
                renderMessages();
                setLoading(loading => false);
            }
        )
    }

    useEffect(() => {
        renderMessages();
    }, [])

    return (
        <div>
            <div className="App">
                <header className="App-header p-4">
                    <h1>React MySQL Template</h1>
                    <img src={logo} className="App-logo" alt="logo" />
                    <img src={MySQLLogo} className="mysql-logo mr-5" alt="mysql_logo" />
                    <p>Edit <code>src/pages/Home/Home.js</code> and save to reload.</p>
                    <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
                </header>
                <div className="container">
                    <div className="col-md-12">
                        <form className="mt-3">
                            <div className="form-row text-center">
                                <div className="col">
                                    <input type="text" placeholder="Enter your message here" className="form-control" id="messageInput" name="messageInput" onChange={setNewMessage} aria-describedby="messageHelp" />
                                </div>
                            </div>
                            <div className="form-row text-center">
                                <div className="col mt-3">
                                    <div type="button" className="btn btn-custom" tabIndex="0" onClick={saveMessage}>Submit</div>
                                </div>
                            </div>
                        </form>
                        <p style={{ color: "#e83e8c" }} className="mt-4 mb-1">
                            {loading === true ? "... ... ...": ""}
                            {messages.length === 0 && loading === false ? "No Messages" : ""}
                        </p>
                        {messages.map((message, i) =>
                            <div className="col-md-12 mt-2 mb-2 message-card" key={i}>
                                <div className="pt-1">
                                    <div style={{ fontStyle: "italic" }} className="mt-1 mb-1">"{message.message}"</div>
                                    <div style={{ color: "#61dafb" }} className="mb-2">{moment(message.createdAt).format("DD MMMM YYYY h:mm A")}</div>
                                    <div className="btn btn-sm btn-custom-red mb-1 mt-1" data-message_id={message.id} tabIndex="0" onClick={deleteMessage}>Delete</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="col-md-12 pt-3 pb-3">
                        <a href="https://github.com/nick-ramsay/react-mysql-template" title="Check out this repo on GitHub!" className="github-link">
                            <img className="github-logo" src={GithubLogo} alt="GitHub_logo" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;