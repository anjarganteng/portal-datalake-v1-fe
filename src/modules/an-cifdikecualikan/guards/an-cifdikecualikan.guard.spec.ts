import { TestBed } from '@angular/core/testing';

import { AnCifdikecualikanGuard } from './an-cifdikecualikan.guard';

describe('_Template Module Guards', () => {
    let anCifdikecualikanGuard: AnCifdikecualikanGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnCifdikecualikanGuard],
        });
        anCifdikecualikanGuard = TestBed.inject(AnCifdikecualikanGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anCifdikecualikanGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
