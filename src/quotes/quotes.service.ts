import { Injectable } from '@nestjs/common';
import { QuotesRepository } from './quotes.repository';

@Injectable()
export class QuotesService {
  constructor(public quotesRepository: QuotesRepository) {}

  async getAllQuotes() {
    return await this.quotesRepository.getAllQuotes();
  }

  async getQuoteById(id: number) {
    return await this.quotesRepository.getQuoteById(id);
  }

  async getRandomQuote() {
    return await this.quotesRepository.getRandomQuote();
  }

  async generateIds() {
    return await this.quotesRepository.generateIds();
  }
}
