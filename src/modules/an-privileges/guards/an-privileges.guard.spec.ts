import { TestBed } from '@angular/core/testing';

import { AnPrivilegesGuard } from './an-privileges.guard';

describe('_Template Module Guards', () => {
    let anPrivilegesGuard: AnPrivilegesGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnPrivilegesGuard],
        });
        anPrivilegesGuard = TestBed.inject(AnPrivilegesGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anPrivilegesGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
