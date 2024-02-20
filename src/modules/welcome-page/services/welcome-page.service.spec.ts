import { TestBed } from '@angular/core/testing';

import { WelcomePageService } from './welcome-page.service';

describe('WelcomePageService', () => {
    let welcomePageService: WelcomePageService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [WelcomePageService],
        });
        welcomePageService = TestBed.inject(WelcomePageService);
    });

    describe('getWelcomePage$', () => {
        it('should return Observable<WelcomePage>', () => {
            welcomePageService.getWelcomePage$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
