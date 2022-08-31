import AddCategory from "../../components/AddCategory";
import { useRouter } from "next/dist/client/router";

export default function AddNew(props) {
  const router = useRouter();

  const navigateBack = () => {
    router.push("/categories/edit/5");
  }

  return <AddCategory navigateBack={navigateBack} />;
}