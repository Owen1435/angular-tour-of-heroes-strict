import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HeroService} from "./hero.service";
import {MessageService} from "../../common/services/message.service";

const mockMessageService = {
  add(message: string): void {}
}

describe('HeroService', () => {
  let service: HeroService;
  let messageService: MessageService;
  let http: HttpTestingController;

  const expectedData = [
    { id: 1, name: 'Dr. Nice' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Celeritas' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        HeroService,
        { provide: MessageService, useValue: mockMessageService }
      ]
    });

    service = TestBed.get(HeroService);
    messageService = TestBed.get(MessageService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('service should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getHeroes should be get heroes', () => {
    service.getHeroes().subscribe(heroes => {
      expect(heroes).toEqual(expectedData);
    })

    const req = http.expectOne(service.heroesUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData);
  });

  it('getHero should be get hero by id', () => {
    const heroId = 1;

    service.getHero(heroId).subscribe(hero => {
      expect(hero).toEqual(expectedData[0]);
    })

    const req = http.expectOne(`${service.heroesUrl}/${heroId}`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData[0]);
  });

  it('updateHero should be return updated hero', () => {
    const updateHeroDto = { id: 1, name: 'Dr. Nice v2' };
    const updatedHero = { id: 1, name: 'Dr. Nice v2' };

    service.updateHero(updateHeroDto).subscribe(hero => {
      expect(hero).toEqual(updatedHero);
    })

    const req = http.expectOne(service.heroesUrl);
    expect(req.request.method).toEqual('PUT');
    req.flush(updatedHero);
  });

  it('addHero should be return new hero', () => {
    const addHeroDto = { name: 'Celeritas' }
    const createdHero = { id: 4, name: 'Celeritas' }

    service.addHero(addHeroDto).subscribe(hero => {
      expect(hero).toEqual(createdHero);
    })

    const req = http.expectOne(service.heroesUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(createdHero);
  });

  it('deleteHero should be return deleted hero', () => {
    const deleteHeroId = 1;
    const deletedHero = { id: 1, name: 'Dr. Nice' };

    service.deleteHero(deleteHeroId).subscribe(hero => {
      expect(hero).toEqual(deletedHero);
    })

    const req = http.expectOne( `${service.heroesUrl}/${deleteHeroId}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(deletedHero);
  });

  it('getHeroes should be call add method from message service', () => {
    const spyAdd = spyOn(messageService, "add")
    service.getHeroes().subscribe()

    const req = http.expectOne(service.heroesUrl);
    req.flush({});

    expect(spyAdd).toHaveBeenCalledTimes(1)
  });

  it('getHero should be call add method from message serviced', () => {
    const heroId = 1;

    const spyAdd = spyOn(messageService, "add")
    service.getHero(heroId).subscribe()

    const req = http.expectOne(`${service.heroesUrl}/${heroId}`);
    req.flush({});

    expect(spyAdd).toHaveBeenCalledTimes(1)
  });

  it('updateHero should be call add method from message serviced', () => {
    const updateHeroDto = { id: 1, name: 'Dr. Nice v2' };

    const spyAdd = spyOn(messageService, "add")
    service.updateHero(updateHeroDto).subscribe()

    const req = http.expectOne(service.heroesUrl);
    req.flush({});

    expect(spyAdd).toHaveBeenCalledTimes(1)
  });

  it('addHero should be call add method from message serviced', () => {
    const addHeroDto = { name: 'Celeritas' }

    const spyAdd = spyOn(messageService, "add")
    service.addHero(addHeroDto).subscribe()

    const req = http.expectOne(service.heroesUrl);
    req.flush({});

    expect(spyAdd).toHaveBeenCalledTimes(1)
  });

  it('deleteHero  should be call add method from message serviced', () => {
    const deleteHeroId = 1;

    const spyAdd = spyOn(messageService, "add")
    service.deleteHero(deleteHeroId).subscribe()

    const req = http.expectOne( `${service.heroesUrl}/${deleteHeroId}`);
    req.flush({});

    expect(spyAdd).toHaveBeenCalledTimes(1)
  });
});
