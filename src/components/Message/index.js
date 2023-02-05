import './index.css'

const Message = props => {
  const {message} = props
  const isHeadingMessage = message ? 'Welcome User' : 'Please Login'

  return <h1 className="heading">{isHeadingMessage}</h1>
}

export default Message
