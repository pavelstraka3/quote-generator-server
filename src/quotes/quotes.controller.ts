import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { QuotesService } from './quotes.service';

@Controller('quotes')
export class QuotesController {
  constructor(public quotesService: QuotesService) {}

  @Get()
  getAllQuotes() {
    return this.quotesService.getAllQuotes();
  }

  @Get('/random')
  getRandomQuote() {
    return this.quotesService.getRandomQuote();
  }

  @Get('/generateIds')
  generateIds() {
    return this.quotesService.generateIds();
  }

  @Get('/:id')
  getQuoteById(@Param('id', ParseIntPipe) id: number) {
    return this.quotesService.getQuoteById(id);
  }
}
