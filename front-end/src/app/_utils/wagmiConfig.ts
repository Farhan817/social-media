import { mainnet, sepolia } from "wagmi/chains";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

export const config = getDefaultConfig({
  appName: process.env.PPOJECT_NAME??"social_app",
  projectId: process.env.PORJECT_ID??"5b80159dee180c7e067b93caf7d6df49",
  chains: [mainnet],
  ssr: true,
});
