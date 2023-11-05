/* tslint:disable:no-unused-variable */
import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { faker } from '@faker-js/faker';
import { PlantaListaComponent } from './planta-lista.component';
import { Planta } from '../planta';

describe('PlantaListaComponent', () => {
  let component: PlantaListaComponent;
  let fixture: ComponentFixture<PlantaListaComponent>;
  let debug:DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ PlantaListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantaListaComponent);
    component = fixture.componentInstance;


    for(let i = 0; i < 25; i++) {
      const planta = new Planta(
        faker.number.int(100),
        faker.word.words(),
        faker.word.words(),
        faker.word.words(),
        faker.number.int(100),
        faker.word.noun(),
        faker.word.noun()
      );
      component.plantas.push(planta);
    }


    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 25 tbody tr elements', () => {
    expect(debug.queryAll(By.css('tbody tr'))).toHaveSize(25)
  });

  it('should have 25 tbody th elements', () => {
    expect(debug.queryAll(By.css('tbody th'))).toHaveSize(25)
  });

  it('should have the corresponding th with the text planta id', () => {
    debug.queryAll(By.css('tbody th')).forEach((th, i)=>{
      expect(th.nativeElement.textContent).toContain(component.plantas[i].id)
    })
  });
  it('should have the corresponding td with the text planta nombre_comun', () => {
    debug.queryAll(By.css('tbody tr')).forEach((tr, i)=>{
      expect(tr.children[1].nativeElement.textContent).toContain(component.plantas[i].nombre_comun)
    })
  });
  it('should have the corresponding td with the text planta tipo', () => {
    debug.queryAll(By.css('tbody tr')).forEach((tr, i)=>{
      expect(tr.children[2].nativeElement.textContent).toContain(component.plantas[i].tipo)
    })
  });
  it('should have the corresponding td with the text planta clima', () => {
    debug.queryAll(By.css('tbody tr')).forEach((tr, i)=>{
      expect(tr.children[3].nativeElement.textContent).toContain(component.plantas[i].clima)
    })
  });
});
