import { TestBed } from '@angular/core/testing';

import { AnApplicationPermissionGuard } from './an-application-permission.guard';

describe('_Template Module Guards', () => {
    let anApplicationPermissionGuard: AnApplicationPermissionGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnApplicationPermissionGuard],
        });
        anApplicationPermissionGuard = TestBed.inject(AnApplicationPermissionGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anApplicationPermissionGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
