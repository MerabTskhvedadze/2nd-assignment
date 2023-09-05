import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { message } from "antd";
import { axiosConfig } from "../../utils/axiosConfig";

export default function AddPost() {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [userId, setUserId] = useState<number>(0);

  const navigate = useNavigate();

  const { mutateAsync } = useMutation(async () => {
    try {
      const res = await axiosConfig.post(`posts/add`, {
        body: JSON.stringify(body),
        title: JSON.stringify(title),
        userId: JSON.stringify(userId),
      });
      console.log(res);

      message.success("Product Added, Check console");
      navigate("/");
    } catch (error: any) {
      message.error("Oops! something went wrong");
    }
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync();
  };

  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <h1 className=" uppercase block text-gray-700 text-sm font-bold mb-2">
          Add post
        </h1>
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="title"
        >
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="title"
          type="text"
          placeholder="title"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          required
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="body"
        >
          Body
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="body"
          type="text"
          placeholder="body"
          value={body}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBody(e.target.value)
          }
          required
        />
      </div>

      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="userid"
        >
          User id
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="userid"
          type="number"
          placeholder="User id"
          min={1}
          value={userId}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setUserId(Number(e.target.value))
          }
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add
        </button>
      </div>
    </form>
  );
}
