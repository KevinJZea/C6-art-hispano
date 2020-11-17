import Button from "components/Button";
import Cant from "./cant";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../pages/redux/actions";

 export default function AddUnit()  {
  //  const quantity = useSelector((state) => state.quantity);
   const dispatch = useDispatch();

   return (
     <>
       <span>
         <Button style="OneMore" onClick={() => dispatch(incrementQuantity())}>
           +
         </Button>
       </span>

        <span>
          <Cant />
        </span>

       <span>
         <Button style="OneLess" onClick={() => dispatch(decrementQuantity())}>
           -
         </Button>
       </span>
     </>
   );
 };