import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from "@nestjs/common";
import { DatabaseModule } from "./database/database.module";
import { UserModule } from "./module/user/user.module";
import { ApplicantsModule } from "./module/applicants/applicants.module";
import { ApplicantsController } from "./module/applicants/applicants.controller";
import AuthMiddleware from "./middleware/auth.middleware";
@Module({
  imports: [DatabaseModule, UserModule, ApplicantsModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude(
        { path: "/api/user/register", method: RequestMethod.POST },
        { path: "/api/user/login", method: RequestMethod.POST },
        { path: "/api/user/verify", method: RequestMethod.GET }
      )
      .forRoutes(ApplicantsController);
  }
}
