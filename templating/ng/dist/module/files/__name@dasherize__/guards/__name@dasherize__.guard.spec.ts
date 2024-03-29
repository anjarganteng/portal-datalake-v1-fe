import { TestBed } from '@angular/core/testing';

import { <%= classify(name) %>Guard } from './<%= dasherize(name) %>.guard';

describe('_Template Module Guards', () => {
    let <%= camelize(name) %>Guard: <%= classify(name) %>Guard;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [],
            providers: [<%= classify(name) %>Guard],
        });
        <%= camelize(name) %>Guard = TestBed.inject(<%= classify(name) %>Guard);
    });

    describe('canActivate', () => {
        it('should return an Observable<boolean>', () => {
            <%= camelize(name) %>Guard.canActivate().subscribe(response => {
                expect(response).toEqual(true);
            });
        });
    });

});
