import { endpoints } from "../../../_utils/endpoints";
import { get, post } from "../../../client/client";
import { useState } from "react";
import { useAccount, useSignMessage } from "wagmi";
import { LoginResponseType } from "../../../_utils/types";

const useLogin = () => {
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const [jwt, setJwt] = useState("");

  const handleLogin = async () => {
    get(endpoints.login,{address:address}).then(async (response: LoginResponseType) => {
      console.log(response,"response")
      const nonce = response.data.nonce;
      const signature = await signMessageAsync({ message: nonce });
      post(endpoints.login, { address, signature }).then((res) => {
        setJwt(res.data.jwt);
      }).catch(e=>console.log(e.message,"login"))
    }).catch(e=>console.log(e.message,"main"))
  };

  return [{ jwt,isConnected }, { handleLogin }];
};
export default useLogin;
