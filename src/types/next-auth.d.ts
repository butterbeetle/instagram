import { AuthUser } from "@/model/user";
import { DefaultSession, PagesOptions } from "next-auth";

declare module "next-auth" {
  interface Session {
    user: AuthUser;
  }
  interface NextAuthOptions {
    app: Partial<PagesOptions> | undefined;
  }
}
