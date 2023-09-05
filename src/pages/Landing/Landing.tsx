import { useQuery } from "react-query";
import { Pagination } from "antd";
import { Card } from "../../components";
import { axiosConfig } from "../../utils/axiosConfig";
import { useCallback, useState } from "react";

export default function Landing() {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 20;
  const skip = (currentPage - 1) * limit;

  const { data, isError } = useQuery([currentPage, "posts"], async () => {
    const response = await axiosConfig.get(
      `posts?limit=${limit}&skip=${skip}&select=title,userId,body`
    );
    return response.data;
  });

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  if (isError) {
    return (
      <h1 className="w-fit mx-auto my-20 text-3xl text-red-800">
        Oops something went wrong
      </h1>
    );
  }
  return (
    <div className="px-10">
      <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data?.posts.map(
          ({
            id,
            title,
            body,
            userId,
          }: {
            id: number;
            title: string;
            body: string;
            userId: number;
          }) => {
            return (
              <Card
                key={id}
                id={id}
                title={title}
                body={body}
                userId={userId}
              />
            );
          }
        )}
      </div>
      <Pagination
        className="w-fit mx-auto my-10"
        showSizeChanger={false}
        showQuickJumper
        current={currentPage}
        defaultPageSize={limit}
        total={data?.total}
        onChange={handlePageChange}
      />
    </div>
  );
}
