import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarArtistComponent } from './similar-artist.component';

describe('SimilarArtistComponent', () => {
  let component: SimilarArtistComponent;
  let fixture: ComponentFixture<SimilarArtistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarArtistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
