import { TestBed } from "@angular/core/testing";
import {MessageService} from "./message.service";

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [MessageService]
    });

    service = TestBed.inject(MessageService);
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add method should push message to messages', () => {
    const message = 'message'

    service.add(message)
    expect(service.messages).toContain(message)
  });

  it('clear method should clear messages', () => {
    service.clear()
    expect(service.messages).toEqual([])
  });
});
