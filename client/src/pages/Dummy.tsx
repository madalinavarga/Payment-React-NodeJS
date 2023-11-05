import { useQuery } from "@tanstack/react-query";
import { getDummy } from "../services/dummy";

const Dummy = () => {
  const dummyQuery = useQuery({
    queryKey: ["dummy"],
    queryFn: getDummy,
  });

  return <div> Data: {dummyQuery.data?.text}</div>;
};

export default Dummy;
