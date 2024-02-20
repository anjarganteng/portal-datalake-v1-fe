import { TestBed } from '@angular/core/testing';

import { AnApplicationPermissionService } from './an-application-permission.service';

describe('AnApplicationPermissionService', () => {
    let anApplicationPermissionService: AnApplicationPermissionService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnApplicationPermissionService],
        });
        anApplicationPermissionService = TestBed.inject(AnApplicationPermissionService);
    });

    describe('getAnApplicationPermission$', () => {
        it('should return Observable<AnApplicationPermission>', () => {
            anApplicationPermissionService.getAnApplicationPermission$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
