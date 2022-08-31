import AddItems from "../../../components/AddItems";
import { useRouter } from "next/dist/client/router";

export default function Add(props) {
  const router = useRouter();

  const navigateBack = () => {
    router.push("/lists/5");
  }

  return <AddItems navigateBack={navigateBack} />;
}
