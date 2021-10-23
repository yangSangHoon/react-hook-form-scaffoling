import { ReactElement } from "react";
import { useForm } from "react-hook-form";

type FormData = {
  id: string;
  password: string;
};

function Login(): ReactElement {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>();

  const onSubmit = (data: any) => console.log(data);

  const onError = () => {
    console.log("error");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} onError={onError}>
      <div>
        <label>아이디</label>
        <input
          className={errors.id ? "error" : ""}
          {...register("id", { required: true })}
        />
        {errors.id?.type === "required" && (
          <span role="alert">This is required</span>
        )}
      </div>
      <div>
        <label>비밀번호</label>
        <input {...register("password", { required: true })} />
      </div>
      <button type="submit">로그인</button>
    </form>
  );
}

export default Login;
