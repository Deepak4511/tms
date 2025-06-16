import { Button } from "@/components/ui/button";
import Textbox from "@/components/ui/Textbox";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { user } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //  const [login, { isLoading }] = useLoginMutatio();

  const navigate = useNavigate();

  const submitHandler = async (data) => {
    console.log("submit");
  };

  useEffect(() => {
    user && navigate("/dashboard");
  }, [user]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center flex-col lg:flex-row ">
      <div className="w-full md:w-auto flex gap-0 md:gap-40 flex-col md:flex-row items-center justify-center">
        <div className="h-full w-full lg:w-2/3 flex flex-col  items-center justify-center">
          <div className="w-full md:max-w-lg 2xl:max-w-3xl flex flex-col items-center justify-center gap-5 md:gap-y-10 2xl:-mt-20 ">
            <span className="flex gap-1 py-3 px-3 border rounded-full text-sm md:text-base dark:border-gray-700 dark:text-blur-500 border-gray-300 text-gray-600">
              Manage Your Tasks
            </span>
            <p className="flex flex-col gap-0 md:gap-4 text-4xl md:text-6xl 2xl:text-7xl font-black text-center dark:text-gray-400">
              <span>Welcome To Task Manager</span>
            </p>
            {/* <div className="cell">
              <div className="circle rotate-in-up-left"></div>
            </div> */}
          </div>
        </div>
        <div className="w-full md:w-1/3 p-4 md:p-1 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit(submitHandler)}
            className="form-container w-full md:w-[400px] flex flex-col gap-y-8 bg-white dark:bg-slate-900 px-10 pt-14 pb-14"
          >
            <div className="text-3xl font-bold">
              <p className="text-blue-600 text-3xl font-bold text-center">
                Welcome Back!
              </p>
              <span></span>
            </div>
            <div className="flex flex-col gap-y-5">
              <Textbox
                label="Email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-full"
                register={register("email", {
                  required: "Email is required",
                })}
                error={errors.email ? errors.email.message : ""}
              />
              <Textbox
                placeholder="Your password"
                type="password"
                name="password"
                label="Password"
                className="w-full rounded-full"
                register={register("password", {
                  required: "Password is required!",
                })}
                error={errors.password ? errors.password?.message : ""}
              />
              <span className="text-sm text-gray-600 hover:underline cursor-pointer">
                Forget Password?
              </span>
            </div>
            <Button
              type="submit"
              className="w-full rounded-full bg-blue-600 text-white hover:bg-blue-700 cursor-pointer"
            >
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
