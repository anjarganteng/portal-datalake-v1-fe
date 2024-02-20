import { TestBed } from '@angular/core/testing';

import { AnApplicationRolesGuard } from './an-application-roles.guard';

describe('_Template Module Guards', () => {
    let anApplicationRolesGuard: AnApplicationRolesGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnApplicationRolesGuard],
        });
        anApplicationRolesGuard = TestBed.inject(AnApplicationRolesGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anApplicationRolesGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
