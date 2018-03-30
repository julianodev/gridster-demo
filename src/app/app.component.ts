import { Component, OnInit, ViewChild, AfterViewInit, AfterContentInit } from '@angular/core';
import { GridsterComponent, IGridsterOptions, IGridsterDraggableOptions, GridsterItemComponent } from "angular2gridster/dist";
import {single, multi} from './data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, AfterContentInit {
    single: any[];
    multi: any[];

    view: any[] = [600, 300];
    view2: any[] = [500, 300];

    // options
    showXAxis = true;
    showYAxis = true;
    gradient = true;
    showLegend = true;
    showXAxisLabel = true;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'Population';


    colorScheme = {
        domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    };

    constructor() {
        Object.assign(this, { single, multi })
    }

    onSelect(event) {
        console.log(event);
    }

    @ViewChild('item2') item2: GridsterItemComponent;

    //Obtem uma referencia do component gridster
    @ViewChild(GridsterComponent) gridster: GridsterComponent;

    //Define a altura largura maxima do item
    itemOptions = { maxWidth: 3, maxHeight: 3 };
    itemOptions1 = { maxWidth: 4, maxHeight: 3 }

    //Options
    gridsterOptions: IGridsterOptions = {

        // core configuration is default one - for smallest view. It has hidden minWidth: 0.
        lanes: 4, // amount of lanes (cells) in the grid
        direction: 'none', // floating top - vertical, left - horizontal
        floating: true,
        dragAndDrop: true, // enable/disable drag and drop for all items in grid
        resizable: true, // enable/disable resizing by drag and drop for all items in grid
        resizeHandles: {
            s: true,
            e: true,
            se: true
        },
        widthHeightRatio: 1, // proportion between item width and height
        lines: {
            visible: true,
            color: '#fff',
            width: 2
        },//Responsavel por exibir as bordas das linhas
        shrink: true,
        useCSSTransforms: true,
        responsiveView: true, // turn on adopting items sizes on window resize and enable responsiveOptions
        responsiveDebounce: 500, // window resize debounce time
        // List of different gridster configurations for different breakpoints.
        // Each breakpoint is defined by name stored in "breakpoint" property. There is fixed set of breakpoints
        // available to use with default minWidth assign to each.
        // - sm: 576 - Small devices
        // - md: 768 - Medium devices
        // - lg: 992 - Large devices
        // - xl: 1200 - Extra large
        // MinWidth for each breakpoint can be overwritten like it's visible below.
        // ResponsiveOptions can overwrite default configuration with any option available.
        responsiveOptions: [
            {
                breakpoint: 'sm',
                minWidth: 480,
                lanes: 1
            },
            {
                breakpoint: 'md',
                minWidth: 768,
                lanes: 4
            },
            {
                breakpoint: 'lg',
                minWidth: 1250,
                lanes: 6
            },
            {
                breakpoint: 'xl',
                minWidth: 1800,
                lanes: 8
            }
        ]
    };

    //Responsavel por mover os items sobre o container
    gridsterDraggableOptions: IGridsterDraggableOptions = {
        handlerClass: 'panel-body' //Nome da classe aplicada ao item,
    };

    items = [
        { w: 2, h: 2 },
        { w: 2, h: 2 },
        { w: 2, h: 2 }
    ];

    ngAfterContentInit(): void {
    }

    ngOnInit() {
        let items;
        try {
            items = JSON.parse(localStorage.getItem('DASHBOARD_ITEMS'));
        } catch(e) {}

        this.items = items || this.items;
    }

    ngAfterViewInit(): void {


    }

    onReflow(event) {
    }


    optionsChange(options: IGridsterOptions) {
        this.gridsterOptions = options;
    }

    itemChange() {
        try {
            localStorage.setItem('DASHBOARD_ITEMS', JSON.stringify(this.items));
        } catch(e) {}
    }

}

