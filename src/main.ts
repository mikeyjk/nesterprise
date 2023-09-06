import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  /**
   * By default, if any error happens while creating the
   * application your app will exit with the code 1.
   *
   * If you want to make it throw an error instead disable
   * the option abortOnError.
   */
  const app = await NestFactory.create(AppModule, { abortOnError: false });
  await app.listen(3000);
}
bootstrap();
