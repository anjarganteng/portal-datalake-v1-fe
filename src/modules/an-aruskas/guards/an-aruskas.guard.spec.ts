import { TestBed } from '@angular/core/testing';

import { AnAruskasGuard } from './an-aruskas.guard';

describe('_Template Module Guards', () => {
    let anAruskasGuard: AnAruskasGuard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [AnAruskasGuard],
        });
        anAruskasGuard = TestBed.inject(AnAruskasGuard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            anAruskasGuard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
