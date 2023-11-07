import { useQuery } from "@tanstack/react-query";
import { getDummy } from "../services/dummy";

const Dummy = () => {
  const dummyQuery = useQuery({
    queryKey: ["dummy"],
    queryFn: getDummy,
  });

  return <div> Tranzactie cu success!</div>;
};

export default Dummy;
