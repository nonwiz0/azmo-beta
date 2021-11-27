import GlobalData from "../content/global/index.json";
import { createContext } from "react";

export const ExtraContext = createContext(GlobalData.extra);
