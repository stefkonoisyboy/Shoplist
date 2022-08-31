import EditCategory from "../../../components/EditCategory";
import { useRouter } from "next/dist/client/router";

export default function Edit(props) {
  const router = useRouter();

  const navigateBack = () => {
    router.push("/items/5");
  };

  const navigateToAddNew =() => {
    router.push("/categories/add");
  };

  return <EditCategory navigateBack={navigateBack} navigateToAddNew={navigateToAddNew} />;
}