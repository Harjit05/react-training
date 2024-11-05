import { FormEvent, useState } from "react";
import { Field, FieldValue, FieldValues, useForm } from "react-hook-form";

interface FormData{
  name:string;
  age:number;
}
const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors,isValid },
  } = useForm<FormData>();

  const onSubmit = (data: FieldValues) => console.log(data);

  // console.log(register('name'));

  // const [person, setPerson] = useState({
  //   name: "",
  //   age: "",
  // });

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);
  // };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // onChange={(event) =>
          //   setPerson({ ...person, name: event.target.value })
          // }
          // value={person.name}
          {...register("name", { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === "required" && <p className="text-danger">The name field is required.</p>}
        {errors.name?.type === "minLength" && <p className="text-danger">
          The name must be atleast 3 characters.</p>
        }
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          // value={person.age}
          // onChange={(event) =>
          //   setPerson({ ...person, age: parseInt(event.target.value) })
          // }
          {...register("age")}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form2;
