import { TestBed } from '@angular/core/testing';

import { AnParamAruskasGuard } from './an-param-aruskas.guard';

describe('_Template Module Guards', () => {
    let anParamAruskasGuard: AnParamAruskasGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnParamAruskasGuard],
        });
        anParamAruskasGuard = TestBed.inject(AnParamAruskasGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anParamAruskasGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
