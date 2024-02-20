import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { SBRouteData, SideNavItem } from '@modules/navigation/models';
import { NavigationService } from '@modules/navigation/services';

@Component({
    selector: 'sb-side-nav-item',
    //changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './side-nav-item.component.html',
    styleUrls: ['side-nav-item.component.scss'],
})
export class SideNavItemComponent implements OnInit {
    @Input() sideNavItem!: SideNavItem;
    @Input() isActive!: boolean;

    expanded = false;
    routeData!: SBRouteData;

    constructor(public navigationService: NavigationService) {}
    ngOnInit() {
        if (this.isActive) {
            this.expanded = true;
        }
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
}
