import { TestBed } from '@angular/core/testing';

import { AnAtiGuard } from './an-ati.guard';

describe('_Template Module Guards', () => {
    let anAtiGuard: AnAtiGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnAtiGuard],
        });
        anAtiGuard = TestBed.inject(AnAtiGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anAtiGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
