import { ChangeEvent, FormEvent, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { message } from "antd";
import { axiosConfig } from "../../utils/axiosConfig";

export default function EditPost() {
  const { postId } = useParams();

  const { data, isError } = useQuery(["post"], async () => {
    const response = await axiosConfig.get(`posts/${postId}`);
    return response.data;
  });

  const [title, setTitle] = useState<string>(data.title);
  const [body, setBody] = useState<string>(data.body);
  const navigate = useNavigate();

  const { mutateAsync } = useMutation(async () => {
    try {
      const res = await axiosConfig.put(`/posts/${postId}`, {
        body: JSON.stringify(body),
        title: JSON.stringify(title),
      });
      console.log(res);

      message.success("Product Updated, Check console");
      navigate("/");
    } catch (error: any) {
      message.error("Oops! something went wrong");
    }
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutateAsync();
  };

  if (isError) {
    return (
      <h1 className="w-fit mx-auto my-20 text-3xl text-red-800">
        Oops something went wrong
      </h1>
    );
  }
  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <h1 className=" uppercase block text-gray-700 text-sm font-bold mb-2">
          Edit post
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
        />
      </div>

      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          update changes
        </button>
      </div>
    </form>
  );
}
