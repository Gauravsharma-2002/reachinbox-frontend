import { useState } from "react";
import Nomessage from "./Nomessage";
import Message from "./Message_present";

const Body = () => {
  const [isDataPresent, setDataIsPresent] = useState(true);
  return <>{isDataPresent ? <Message /> : <Nomessage />}</>;
};

export default Body;
