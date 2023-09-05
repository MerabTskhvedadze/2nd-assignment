import { useQuery } from "react-query";
import { axiosConfig } from "../utils/axiosConfig";

type UserProps = {
  userId: number;
};

export const User = ({ userId }: UserProps) => {
  const { data } = useQuery([userId, "user"], async () => {
    const response = await axiosConfig.get(`users/${userId}`);
    return response.data;
  });

  return (
    <div className="flex items-center space-x-4">
      <img
        className="w-7 h-7 rounded-full"
        src={data?.image}
        alt={data.firstName}
      />
      <span className="font-medium dark:text-white">
        {data.firstName} {data.lastName}
      </span>
    </div>
  );
};
