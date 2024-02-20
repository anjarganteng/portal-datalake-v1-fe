import { TestBed } from '@angular/core/testing';

import { AnParamAruskasService } from './an-param-aruskas.service';

describe('AnParamAruskasService', () => {
    let anParamAruskasService: AnParamAruskasService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AnParamAruskasService],
        });
        anParamAruskasService = TestBed.inject(AnParamAruskasService);
    });

    describe('getAnParamAruskas$', () => {
        it('should return Observable<AnParamAruskas>', () => {
            anParamAruskasService.getAnParamAruskas$().subscribe(response => {
                expect(response).toEqual({});
            });
        });
    });
});
