import { TestBed } from '@angular/core/testing';

import { AnReverseRepoSupportGuard } from './an-reverse-repo-support.guard';

describe('_Template Module Guards', () => {
    let anReverseRepoSupportGuard: AnReverseRepoSupportGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnReverseRepoSupportGuard],
        });
        anReverseRepoSupportGuard = TestBed.inject(AnReverseRepoSupportGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anReverseRepoSupportGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
