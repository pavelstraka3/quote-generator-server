import { NestFactory } from '@nestjs/core';
import { QuotesModule } from './quotes/quotes.module';

async function bootstrap() {
  const app = await NestFactory.create(QuotesModule);
  await app.listen(3000);
}

bootstrap();
