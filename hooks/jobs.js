import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { changeVisibility, getHirerRequests, getJobs } from "../api/jobs";

export const useJobs = () => useQuery("ALL_JOBS", getJobs);

export const useJobVisibility = () => {
  const client = useQueryClient();
  return useMutation(changeVisibility, {
    onSuccess: () => {
      client.invalidateQueries("ALL_JOBS");
      toast.success("Changed Job visibility");
    },
    onError: () => {
      toast.error("Failed to change visibility");
    },
  });
};

export const useHirerRequests = () => useQuery('HIRER_REQUESTS',getHirerRequests)
