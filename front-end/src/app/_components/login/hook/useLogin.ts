import { endpoints } from "../../../_utils/endpoints";
import { post } from "../../../client/client";
import { useAccount, useSignMessage } from "wagmi";
import { LoginResponseType } from "../../../_utils/types";
import { useRouter } from "next/navigation";

const useLogin = () => {
  const router = useRouter()
  const { address, isConnected } = useAccount();
  const { signMessageAsync } = useSignMessage();
  const handleLogin = async () => {
    if (!address) return;
    try {
      const message = `Login to Social App at ${new Date().toISOString()}`;
      const signature = await signMessageAsync({ message });
      const body = {
        wallet_address: address,
        message,
        signature,
      };
      post(endpoints.login, body).then((res) => {
        localStorage.setItem("user", res.data.token);
        localStorage.setItem("wallet", address);
        router.push("/")
      });
    } catch (e) {
      console.log(e, "error");
    }
  };
  return [{ isConnected }, { handleLogin }];
};
export default useLogin;
