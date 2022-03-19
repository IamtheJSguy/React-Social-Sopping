import React, { useEffect, useState } from 'react'
import { CometChat } from '@cometchat-pro/chat';

import LoggedInHeader from '../components/LoggedInHeader'
import MessageLeft from '../components/MessageLeft';
import MessageRight from '../components/MessageRight';

import io from 'socket.io-client'
import { useNavigate, useParams } from 'react-router-dom';
import api from '../api';

const SOCKET_URL = 'http://localhost:5000';


const Chat = () => {
  let refresh = false;
  const navigation = useNavigate()
  const socket = io(SOCKET_URL);
  const { chatId } = useParams();

  const [messages, setMessages] = useState([])
  const [user, setUser] = useState()
  const [message, setMessage] = useState('')
  const [show, setShow] = useState(true);
  const [callStarted, setCallStarted] = useState(false)
  const [userName, setUserName] = useState('')
  const [userId, setUserId] = useState('')

  // setUser(JSON.parse(localStorage.getItem('currentUser')))

  const fetchMessages = () => {
    api.messages.LISTBYCHAT(chatId)
      .then(
        (response) => {
          setMessages(response.data.data)
        }
      )
  }

  const getChat = () => {
    api.chats.READ(chatId)
      .then(
        (response) => {
          const res = response.data.data
          // if (res.coCart.user._id !== user._id) {
          //   const result = res.coCart.members.filter(member => member._id === user._id)
          //   if (result.length < 1) {
          //     navigation('/cocarts/' + res.coCart._id)
          //   }
          // }
        }
      )
  }

  useEffect(() => {
    fetchMessages()
    getChat()
    setUser(JSON.parse(localStorage.getItem('currentUser')))
    return () => { }
  }, [chatId])

  useEffect(() => {
    socket.on('newMessage', function (data) {
      if (data.chatId === chatId) {
        let existingMessages = messages
        existingMessages.push(data)
        setMessages([...existingMessages])
        setMessage('')
      }
    })
    return () => {
      socket.off('newMessage')
    }
  }, [])

  const startDirectCall = () => {
    const sessionID = chatId;
    const audioOnly = false;
    const defaultLayout = true;
    CometChat.getLoggedinUser().then(
      user => {
        setUserName(user.name)
        setUserId(user.uid)
      },
      error => {
        console.log(error)
        // this.$router.push({ name: "homepage" });
      }
      );
      
      let callSettings = new CometChat.CallSettingsBuilder()
      .enableDefaultLayout(defaultLayout)
      .setSessionID(sessionID)
      .setIsAudioOnlyCall(audioOnly)
      .build();
      
      setCallStarted(true)
    CometChat.startCall(
      callSettings,
      document.getElementById("callScreen"),
      new CometChat.OngoingCallListener({
        onUserListUpdated: userList => {
          console.log("user list:", userList);
        },
        onCallEnded: call => {
          console.log("Call ended:", call);
          setCallStarted(false)
        },
        onError: error => {
          console.log("Error :", error);
          setCallStarted(false)
        },
        onMediaDeviceListUpdated: deviceList => {
          console.log("Device List:", deviceList);
        },
        onUserMuted: (userMuted, userMutedBy) => {
          // This event will work in JS SDK v3.0.2-beta1 & later.
          console.log("Listener => onUserMuted:", userMuted, userMutedBy);
        },
        onScreenShareStarted: () => {
          // This event will work in JS SDK v3.0.3 & later.
          console.log("Screen sharing started.");
        },
        onScreenShareStopped: () => {
          // This event will work in JS SDK v3.0.3 & later.
          console.log("Screen sharing stopped.");
        }
      })
    );
  };

  const sendMessage = (e) => {
    e.preventDefault()
    const payload = {
      chatId: chatId,
      text: message,
      user: user._id
    }
    api.messages.SEND(payload)
      .then(
        (response) => {
          socket.emit('sendMessage', response.data.data)
        }
      )
      .catch(
        (error) => {
          console.log(error)
        }
      )
  }

  return (
    <>
      <LoggedInHeader />
      <section className="account-section group-section chat-page">
        {show ? (
          <div className="container">
            <h1>Chat box</h1>
            <div className="chat-module-box">
              <div className="chat-module-header">
                <div className="row align-items-center">
                  <div className="col-sm-8">
                    <div className="chat-module-title">
                      <h4>Steven Fraklin</h4>
                      <div className="active-status active"><i className="fas fa-circle"></i><span>Active now</span></div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <ul className="chat-module-actions">
                      <li><a href="#"><i className="fas fa-search"></i></a>
                      </li>
                      <li>
                        <div className="dropdown">
                          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-cog"></i>
                          </a>

                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <div className="dropdown">
                          <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink2" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="fas fa-ellipsis-h"></i>
                          </a>

                          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="chat-module-body">
                {
                  messages.length > 0 ? (
                    messages.map((message, index) =>
                      <div key={'message-' + index}>
                        {
                          message.user && user ? (
                            message.user._id === user._id ? (
                              <div style={{ width: '100%', textAlign: 'right', alignItems: 'right' }}>
                                <MessageRight message={message} style={{ width: '100%' }} />
                              </div>
                            ) :
                              (
                                <div>
                                  <MessageLeft message={message} />
                                </div>
                              )
                          ) :
                            <></>
                        }
                      </div>
                    )
                  ) :
                    <></>
                }
              </div>
              <div className="chat-module-footer">
                <div className="input-box">
                  <ul className="module-options">
                    <li><button type="button"><i className="fas fa-video" onClick={startDirectCall}></i></button></li>
                    <li><button type="button"><i className="fas fa-microphone"></i></button></li>
                    <li><button type="button"><i className="fas fa-smile"></i></button></li>
                    <li><button type="button"><i className="far fa-file"></i></button></li>
                    <li><button type="button"><i className="far fa-image"></i></button></li>
                  </ul>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Enter Message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                  />
                </div>
                <button
                  className="btn btn-primary submit"
                  type="submit"
                  onClick={sendMessage}
                >
                  <span>Send</span>
                  <i className="fa fa-paper-plane" aria-hidden="true"></i>
                </button>
              </div>
            </div>
          </div>
        )
          :
          <></>
        }

      </section>
      <div
        id="callScreen"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 999,
          height: callStarted ? '100vh' : '0vh',
          width:  callStarted ? '100%' : '0px'
        }}
      ></div>
      {/* {
        callStarted ? (
          <>
            <div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                zIndex: 999,
                height: '100vh',
                width: '100%'
              }}
            >
            </div>
          </>
        ) : (
          <></>
        )
      } */}
    </>
  )
}

export default Chat