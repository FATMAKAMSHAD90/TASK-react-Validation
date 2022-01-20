import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup
    .string()
    .min(3)
    .matches(/[a-zA-Z]/, "min 4 letters"),
  lastName: yup
    .string()
    .min(4)
    .matches(/[a-zA-Z]/, "min 4 letters"),
  phoneNumber: yup
    .string()
    .min(11)
    .max(11)
    .matches(/[569]\d{7}$/, "only numbers"),
  email: yup
    .string()
    .min(12)
    .max(12)
    .matches(/^\S+@\S+.\S+$/, "enter your email"),
  civilId: yup.string().min(12).max(12).matches(/^\d$/, "only numbers"),
  highSchoolGrade: yup.string().min(0).max(100).required("only numbers"),
});
function UniForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (e) => {
    console.log(e);
  };
  return (
    <div class="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>First Name</label>
        <input
          type="text"
          placeholder="write your first name"
          {...register("firstName")}
        />
        {errors.firstName?.message}
        <label>Last Name</label>
        <input
          type="text"
          placeholder="write your last name"
          {...register("lastName")}
        />
        {errors.lastName?.message}
        <label for="phoneNumber">phoneNumber</label>
        <input
          type="text"
          placeholder="phone Number"
          {...register("phoneNumber")}
        />
        {errors.phoneNumber?.message}
        <label for="email">Email</label>
        <input
          type="text"
          placeholder="example@hotmail.com"
          {...register("email")}
        />
        {errors.email?.message}

        <label for="civilId">Civil ID Number</label>
        <input
          type="text"
          placeholder="write you CID number"
          {...register("civilId")}
        />
        {errors.civilId?.message}
        <label for="highSchoolGrade">High School Grade</label>
        <input
          type="text"
          placeholder="write your high school grade"
          {...register("highSchoolGrade")}
        />
        {errors.highSchoolGrade?.message}
        <button type="submit" className="btn">
          Continue to checkout
        </button>
      </form>
    </div>
  );
}
export default UniForm;
