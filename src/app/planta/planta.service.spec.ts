/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { PlantaService } from './planta.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Planta', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantaService]
    });
  });

  it('should be a not undefined service', inject([PlantaService], (service: PlantaService) => {
    expect(service).toBeTruthy();
  }));
});
