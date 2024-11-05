const Message = () => {
  let count=0;
    console.log('Message Called', count);    
    count++;
  return <div>Message {count}</div>;  
};
export default Message