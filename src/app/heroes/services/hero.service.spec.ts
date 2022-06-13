import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HeroService} from "./hero.service";

describe('HeroService', () => {
  let service: HeroService;
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
        HeroService
      ]
    });

    service = TestBed.get(HeroService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be get heroes', () => {
    service.getHeroes().subscribe(heroes => {
      expect(heroes).toEqual(expectedData);
    })

    const req = http.expectOne(service.heroesUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData);
  });

  it('should be get hero by id', () => {
    service.getHero(1).subscribe(hero => {
      expect(hero).toEqual(expectedData[0]);
    })

    const req = http.expectOne(service.heroesUrl + '/1');
    expect(req.request.method).toEqual('GET');
    req.flush(expectedData[0]);
  });

  it('should be update hero', () => {
    const updateHeroDto = { id: 1, name: 'Dr. Nice v2' };
    const updatedHero = { id: 1, name: 'Dr. Nice v2' };

    service.updateHero(updateHeroDto).subscribe(hero => {
      expect(hero).toEqual(updatedHero);
    })

    const req = http.expectOne(service.heroesUrl);
    expect(req.request.method).toEqual('PUT');
    req.flush(updatedHero);
  });

  it('should be return new hero', () => {
    const addHeroDto = { name: 'Celeritas' }
    const createdHero = { id: 4, name: 'Celeritas' }

    service.addHero(addHeroDto).subscribe(hero => {
      expect(hero).toEqual(createdHero);
    })

    const req = http.expectOne(service.heroesUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(createdHero);
  });

  it('should be return deleted hero', () => {
    const deleteHeroId = 1;
    const deletedHero = { id: 1, name: 'Dr. Nice' };

    service.deleteHero(deleteHeroId).subscribe(hero => {
      expect(hero).toEqual(deletedHero);
    })

    const req = http.expectOne( `${service.heroesUrl}/${deleteHeroId}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(deletedHero);
  });
});
