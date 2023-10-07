import { TestBed } from '@angular/core/testing';

import { ChatGptRestService } from './chat-gpt-rest.service';

describe('ChatGptRestService', () => {
  let service: ChatGptRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatGptRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
