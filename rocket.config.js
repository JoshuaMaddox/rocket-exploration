import { rocketLaunch } from "@rocket/launch";
import { codeTabs } from "rocket-preset-code-tabs";
import { webcomponentsDev } from "rocket-preset-webcomponents-dev";

export default {
  presets: [codeTabs(), webcomponentsDev(), rocketLaunch()],
};
