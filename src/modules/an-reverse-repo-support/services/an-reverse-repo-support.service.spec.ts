import { TestBed } from '@angular/core/testing';

import { AnReverseRepoSupportService } from './an-reverse-repo-support.service';

describe('AnReverseRepoSupportService', () => {
    let anReverseRepoSupportService: AnReverseRepoSupportService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnReverseRepoSupportService],
        });
        anReverseRepoSupportService = TestBed.inject(AnReverseRepoSupportService);
    });

    describe('getAnReverseRepoSupport$', () => {
        it('should return Observable<AnReverseRepoSupport>', () => {
            anReverseRepoSupportService.getAnReverseRepoSupport$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
