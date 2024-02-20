import { TestBed } from '@angular/core/testing';

import { AnApplicationBranchService } from './an-application-branch.service';

describe('AnApplicationBranchService', () => {
    let anApplicationBranchService: AnApplicationBranchService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnApplicationBranchService],
        });
        anApplicationBranchService = TestBed.inject(AnApplicationBranchService);
    });

    describe('getAnApplicationBranch$', () => {
        it('should return Observable<AnApplicationBranch>', () => {
            anApplicationBranchService.getAnApplicationBranch$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
