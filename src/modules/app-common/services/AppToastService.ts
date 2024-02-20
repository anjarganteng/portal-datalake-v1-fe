import { Injectable } from '@angular/core';
@Injectable({ providedIn: 'root' })
export class AppToastService {
    toasts: any[] = [];

    show(header: string, body: string, className: string) {
        this.toasts.push({ header, body, className });
    }

    public showSuccess(header: string, body: string) {
        this.show(header, body, 'bg-success text-light');
    }

    public showError(header: string, body: string) {
        this.show(header, body, 'bg-danger text-light');
    }

    public remove(toast: any) {
        this.toasts = this.toasts.filter(t => t != toast);
    }
}
