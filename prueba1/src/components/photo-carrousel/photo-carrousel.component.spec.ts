import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoCarrouselComponent } from './photo-carrousel.component';

describe('PhotoCarrouselComponent', () => {
  let component: PhotoCarrouselComponent;
  let fixture: ComponentFixture<PhotoCarrouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCarrouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoCarrouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
