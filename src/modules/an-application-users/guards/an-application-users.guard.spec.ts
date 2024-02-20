import { TestBed } from '@angular/core/testing';

import { AnApplicationUsersGuard } from './an-application-users.guard';

describe('_Template Module Guards', () => {
    let anApplicationUsersGuard: AnApplicationUsersGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnApplicationUsersGuard],
        });
        anApplicationUsersGuard = TestBed.inject(AnApplicationUsersGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anApplicationUsersGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
