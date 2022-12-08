import { useMutation, useQuery, useQueryClient } from "react-query";
import toast from "react-hot-toast";
import { approveHirer, changeVisibility, declineHirer, getHirerRequests, getJobs ,manageRequest } from "../api/jobs";

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

export const useApproveHirer = () => {
  const client = useQueryClient();
  return useMutation(approveHirer, {
    onSuccess : ()=>{
      client.invalidateQueries('HIRER_REQUESTS');
      toast.success("Successfully approved!");
    },
    onError : ()=>{
      toast.error('approval failed!')
    }
  })
}

export const useDeclineHirer = () => {
  const client = useQueryClient();
  return useMutation(declineHirer, {
    onSuccess : ()=>{
      client.invalidateQueries('HIRER_REQUESTS');
      toast.success("Declining successfull!");
    },
    onError : ()=>{
      toast.error('Declining failed!')
    }
  })
}

