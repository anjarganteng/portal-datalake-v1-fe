import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '@modules/auth/services';
import { SideNavItems, SideNavSection } from '@modules/navigation/models';
import { NavigationService } from '@modules/navigation/services';
import { Subscription } from 'rxjs';
import { AppCommonService, AppToastService } from '@common/services';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { find } from 'lodash';

@Component({
    selector: 'sb-side-nav',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav.component.html',
    styleUrls: ['side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, OnDestroy {
    @Input() sidenavStyle!: string;
    @Input() sideNavItems!: SideNavItems;
    @Input() sideNavSections!: SideNavSection[];

    subscription: Subscription = new Subscription();
    routeDataSubscription!: Subscription;

    constructor(public navigationService: NavigationService, public userService: UserService, private Api: AppCommonService, public Toast: AppToastService) {}

    ngOnInit() {
        let email = JSON.parse(localStorage.getItem('email')!);
        
        this.Api.get(this.Api.URLServiceAntasena + 'application-users/get-custom-menu?email=' + email).subscribe(
            data => {
                const d = data.data;
                this.sideNavItems = d;
                
            },err => {
                if (err instanceof HttpErrorResponse) {
                    const errorMessages = new Array<{ propName: string; errors: string }>();
                    if (err.status === 401 || err.status === 403) {
                        this.Api.redirectToLogin();
                    }
                }
            }
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    activeFilter(data : any) {
        return this.findActive(data);
    }

    findActive(data : any) : boolean {
        if (data.submenu!) {
            let subMenus : [any] = data.submenu;
            for (let i = 0; i < subMenus.length; i++) {
                if (subMenus[i].text == this.navigationService._routeData$.value.title) {
                    return true;
                }

                let submenuActive : boolean = this.findActive(subMenus[i]);

                if (submenuActive) {
                    return submenuActive;
                }
            }
            
            return false;
        } else {
            if (data.text == this.navigationService._routeData$.value.title) {
                return true;
            }
        }

        return false;
    }


    // punya gua yang lama
    // ngOnInit() {
    //     let email = JSON.parse(localStorage.getItem('email')!);
    //     this.Api.get(this.Api.URLServiceAntasena + 'application-users/get-custom-menu?email=' + email).subscribe(
    //         data => {
    //             const d = data.data;
    //             console.log(d);
    //             this.sideNavItems = d;
                
    //         },err => {
    //             if (err instanceof HttpErrorResponse) {
    //                 const errorMessages = new Array<{ propName: string; errors: string }>();
    //                 if (err.status === 401 || err.status === 403) {
    //                     this.Api.redirectToLogin();
    //                 }
    //             }
    //         }
    //     );
    // }

}

