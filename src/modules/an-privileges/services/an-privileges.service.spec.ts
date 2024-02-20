import { TestBed } from '@angular/core/testing';

import { AnPrivilegesService } from './an-privileges.service';

describe('AnPrivilegesService', () => {
    let anPrivilegesService: AnPrivilegesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnPrivilegesService],
        });
        anPrivilegesService = TestBed.inject(AnPrivilegesService);
    });

    describe('getAnPrivileges$', () => {
        it('should return Observable<AnPrivileges>', () => {
            anPrivilegesService.getAnPrivileges$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
