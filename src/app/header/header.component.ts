import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/assets/code-snippets/User';
import { HeaderTitleService } from '../services/header-title.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {
    @Input() user: User;
    userName: string = "Kevin";
    title: string;

    constructor(private headerTitleService: HeaderTitleService) { }

    ngOnInit(): void {
        this.title = this.headerTitleService.getTitle();
    }
};