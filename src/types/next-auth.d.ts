import { User } from "@/model/user";

declare module "next-auth" {
  interface Session {
    user: User;
  }
  interface NextAuthOptions {
    app: Partial<PagesOptions> | undefined;
  }
}
