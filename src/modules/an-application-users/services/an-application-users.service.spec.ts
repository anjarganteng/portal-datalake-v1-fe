import { TestBed } from '@angular/core/testing';

import { AnApplicationUsersService } from './an-application-users.service';

describe('AnApplicationUsersService', () => {
    let anApplicationUsersService: AnApplicationUsersService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnApplicationUsersService],
        });
        anApplicationUsersService = TestBed.inject(AnApplicationUsersService);
    });

    describe('getAnApplicationUsers$', () => {
        it('should return Observable<AnApplicationUsers>', () => {
            anApplicationUsersService.getAnApplicationUsers$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
