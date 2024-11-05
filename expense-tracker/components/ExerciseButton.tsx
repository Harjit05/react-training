interface Props {
  children: string;
  onClick: () => void;
  color?:string;
}
const ExerciseButton = ({ children, onClick, color='primary' }: Props) => {
  return (
    // <button className='btn btn-primary'>button</button> //static button
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button> //dynamic button
  );
};

export default ExerciseButton;
