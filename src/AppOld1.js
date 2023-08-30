// CODE = App.js

import './App.css';
import { Button } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const notify = () => {
    toast("This is my first message");
    toast.success("Registration Successful ", {position : "top-center"});
    toast.error("Login failed", {position: 'top-left'})
  }
  return (
    <div>
      <ToastContainer />
      <h1>This is a bootstrap components  </h1>
      <Button color="warning" outline onClick={notify}>First react button</Button>
      {' '}    {/* for adding space between button */}
    </div>
  );
}

export default App;

// export default(props) => {
//  return <Button color='primary'>Primary</Button> 
// }
