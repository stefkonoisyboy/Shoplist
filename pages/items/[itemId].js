import ItemDetails from "../../components/ItemDetails";
import { useRouter } from "next/dist/client/router";

export default function Add(props) {
  const router = useRouter();

  const navigateBack = () => {
    router.push("/lists/5");
  };

  const navigateToEditCategory = () => {
    router.push("/categories/edit/5");
  };

  return <ItemDetails navigateBack={navigateBack} navigateToEditCategory={navigateToEditCategory} />;
}