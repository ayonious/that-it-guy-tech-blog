import "styled-components";

import type { ThemeDetails } from "./Context/Theme/ThemeEnums";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeDetails {}
}
