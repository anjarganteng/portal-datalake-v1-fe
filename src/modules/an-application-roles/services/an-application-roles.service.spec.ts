import { TestBed } from '@angular/core/testing';

import { AnApplicationRolesService } from './an-application-roles.service';

describe('AnApplicationRolesService', () => {
    let anApplicationRolesService: AnApplicationRolesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnApplicationRolesService],
        });
        anApplicationRolesService = TestBed.inject(AnApplicationRolesService);
    });

    describe('getAnApplicationRoles$', () => {
        it('should return Observable<AnApplicationRoles>', () => {
            anApplicationRolesService.getAnApplicationRoles$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
