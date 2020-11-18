import React from "react";
// import styles from "./AppForms.module.scss";
import { useForm } from "react-hook-form";

const AppForms = () => {
  const {register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          ref={register}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          ref={register({required: "PASSWORD REQUIRED", minLength: {value: 8, message: "PASSWORD TOO SHORT"}})}
        />
        <input
          type="submit"
        />
        {errors.password && <p>{errors.password.message}</p>}
      </form>
    </div>
  );
};

export default AppForms;
