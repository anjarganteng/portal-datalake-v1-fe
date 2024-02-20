import { TestBed } from '@angular/core/testing';

import { WelcomePageGuard } from './welcome-page.guard';

describe('_Template Module Guards', () => {
    let welcomePageGuard: WelcomePageGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [WelcomePageGuard],
        });
        welcomePageGuard = TestBed.inject(WelcomePageGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            welcomePageGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
