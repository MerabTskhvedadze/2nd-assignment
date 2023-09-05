import { useMutation, useQuery } from "react-query";
import { Link, useParams } from "react-router-dom";
import { axiosConfig } from "../../utils/axiosConfig";

import { AiFillEdit } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { message } from "antd";

export default function Post() {
  const { id } = useParams();

  const { data, isError } = useQuery([id, "post"], async () => {
    const response = await axiosConfig.get(`posts/${id}`);
    return response.data;
  });

  const { mutateAsync } = useMutation(async (id: number | string) => {
    try {
      await axiosConfig.delete(`/posts/${id}`);
      message.success("Product Deleted");
    } catch (error) {
      message.error("Oops! something went wrong");
    }
  });

  if (isError) {
    return (
      <h1 className="w-fit mx-auto my-20 text-3xl text-red-800">
        Oops something went wrong
      </h1>
    );
  }
  return (
    <div className="max-w-screen-lg mx-auto">
      <main className="mt-10">
        <div className="mb-4 md:mb-0 w-full mx-auto relative">
          <div className="px-4 lg:px-0">
            <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
              {data.title}
            </h2>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:space-x-12">
          <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
            <p className="pb-6">{data.body}</p>
          </div>

          <div className="flex gap-10 text-lg w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
            <Link to={`/editpost/${id}`}>
              <AiFillEdit />
            </Link>
            <button onClick={() => mutateAsync(id as string)}>
              <RiDeleteBin7Line />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
