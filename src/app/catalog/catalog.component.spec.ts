import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { WELCOME_MSG } from '../app.provider';
import { BasketService } from '../basket/basket.service';
import { MockBasketService } from '../basket/basket.service.mock';
import { CatalogComponent } from './catalog.component';
import { CatalogService } from './catalog.service';
import { MockCatalogService } from './catalog.service.mock';

describe('CatalogComponent', () => {
  let component: CatalogComponent;
  let fixture: ComponentFixture<CatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CatalogComponent],
      providers: [
        provideRouter([]),
        {
          provide: CatalogService,
          useValue: MockCatalogService,
        },
        {
          provide: BasketService,
          useValue: MockBasketService,
        },
        {
          provide: WELCOME_MSG,
          useValue: 'Welcome to unit testing',
        },
      ],
    });

    fixture = TestBed.createComponent(CatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
