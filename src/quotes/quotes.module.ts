import { Module } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { QuotesController } from './quotes.controller';
import { QuotesRepository } from './quotes.repository';

@Module({
  providers: [QuotesService, QuotesRepository],
  controllers: [QuotesController],
})
export class QuotesModule {}
