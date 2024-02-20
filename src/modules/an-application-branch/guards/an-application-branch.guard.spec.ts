import { TestBed } from '@angular/core/testing';

import { AnApplicationBranchGuard } from './an-application-branch.guard';

describe('_Template Module Guards', () => {
    let anApplicationBranchGuard: AnApplicationBranchGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnApplicationBranchGuard],
        });
        anApplicationBranchGuard = TestBed.inject(AnApplicationBranchGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anApplicationBranchGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
