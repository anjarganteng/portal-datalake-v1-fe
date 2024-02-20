import { TestBed } from '@angular/core/testing';

import { AnKursGuard } from './an-kurs.guard';

describe('_Template Module Guards', () => {
    let anKursGuard: AnKursGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnKursGuard],
        });
        anKursGuard = TestBed.inject(AnKursGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anKursGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
