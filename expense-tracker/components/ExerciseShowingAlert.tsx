import { ReactNode } from "react";

interface Props {
  children:ReactNode;
  onClose:()=>void;
}
const ExerciseShowingAlert = ({ children, onClose }: Props) => {
  return (
    // <button className='btn btn-primary'>button</button> //static button
    <div className="alert alert-primary alert-dismissible" >
      {children}
     <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss="alert" aria-label="Close"></button>
     </div> 

  );
};

export default ExerciseShowingAlert;
