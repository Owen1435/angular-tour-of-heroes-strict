import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HeroService} from "./hero.service";
import {MessageService} from "../../common/services/message.service";

describe('HeroService', () => {
  let service: HeroService;
  let messageService: MessageService;
  let http: HttpTestingController;

  const expectedData = [
    { id: 1, name: 'Dr. Nice' },
    { id: 2, name: 'Bombasto' },
    { id: 3, name: 'Celeritas' },
  ];

  const mockMessageService = {
    add: jasmine.createSpy('add')
  }

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

    http = TestBed.inject(HttpTestingController);
    service = TestBed.inject(HeroService);
    messageService = TestBed.inject(MessageService);
  });

  afterEach(() => {
    http.verify();
    mockMessageService.add.calls.reset()
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

  it('searchHeroes should be return searched hero', () => {
    const term = 'term';

    service.searchHeroes(term).subscribe(heroes => {
      expect(heroes).toEqual(expectedData);
    })

    const req = http.expectOne( `${service.heroesUrl}/?name=${term}`);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData);
  });

  it('searchHeroes not should be return searched hero', () => {
    const term = '';

    service.searchHeroes(term).subscribe(heroes => {
      expect(heroes).toEqual([]);
    })
  });

  it('getHeroes should be call add method from message service', () => {
    service.getHeroes().subscribe()

    const req = http.expectOne(service.heroesUrl);
    req.flush({});

    expect(mockMessageService.add).toHaveBeenCalledTimes(1)
  });

  it('getHero should call add method from message serviced', () => {
    const heroId = 1;
    service.getHero(heroId).subscribe()

    const req = http.expectOne(`${service.heroesUrl}/${heroId}`);
    req.flush({});

    expect(mockMessageService.add).toHaveBeenCalledTimes(1)
  });

  it('updateHero should call add method from message serviced', () => {
    const updateHeroDto = { id: 1, name: 'Dr. Nice v2' };
    service.updateHero(updateHeroDto).subscribe()

    const req = http.expectOne(service.heroesUrl);
    req.flush({});

    expect(mockMessageService.add).toHaveBeenCalledTimes(1)
  });

  it('addHero should call add method from message serviced', () => {
    const addHeroDto = { name: 'Celeritas' }
    service.addHero(addHeroDto).subscribe()

    const req = http.expectOne(service.heroesUrl);
    req.flush({});

    expect(mockMessageService.add).toHaveBeenCalledTimes(1)
  });

  it('deleteHero should call add method from message serviced', () => {
    const deleteHeroId = 1;
    service.deleteHero(deleteHeroId).subscribe()

    const req = http.expectOne( `${service.heroesUrl}/${deleteHeroId}`);
    req.flush({});

    expect(mockMessageService.add).toHaveBeenCalledTimes(1)
  });
});
