import { AuthenService } from "./services/authen.service";
import { LocalStorageService } from "./services/local-store.service";
import { JwtHelper } from "./utils/jwt-helper";

export const appInitializerProviders = [ AuthenService, LocalStorageService, JwtHelper ];