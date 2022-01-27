import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ElementRef, HostBinding, HostListener, Inject, OnInit, Renderer2 } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SelectedProjectService } from 'src/app/service/getProject/selected-project.service';

@Component({
  selector: 'app-portfolio-project',
  templateUrl: './portfolio-project.component.html',
  styleUrls: ['./portfolio-project.component.scss'],
  animations: [
    trigger('onHover', [
      transition('void => *', [
        style({ backgroundColor: 'yellow', opacity: 0}),
        animate(2000, style({backgroundColor: 'white', opacity: 0}))
      ])
    ])
  ]
})
export class PortfolioProjectComponent implements OnInit, AfterViewInit {
  imagePath = '../../../assets/images/exp_companies';
  getCardEl;
  showOnHoverDiv: boolean;
  experience = [
  {
      id: 0,
      companyName : 'Bell',
      position: 'UI Web Developer / Solution Architecture',
      techStack: ['HTML5', 'CSS', 'Bootstrap4', 'jQuery', 'Angular 4+', 'Typescript'],
      // tslint:disable-next-line: max-line-length
      description: 'Bell is Canada’s largest telecommunications company which provides Mobile phone, TV, high speed and wireless internet, and residential home phones services',
      companyLogo: 'bell_logo.png',
      imgAltText:  'Bell logo',
      companyLogoWidth: '35%',
      timeline: 'June 2020 – March 2021',
      internalProjects:[
        'User Enhancement',
        'Unlimited Share',
        'eChat'
      ],
      projectDetail: [
        "Collaborating with the team responsible for upgrading existing Bell applications, web sites, and web pages with accessibility features.",
        "Leading a team of developers for developing mark-ups provided by design teams. As well well responsible for proving estimates of time and resources, maintaining timelines of project delivery",
        "Communicating and collaborating with different teams such as Business, Designs, Development, Implementation, and Testing ",
        "Working as a solution architecture, code reviews, and guiding developers for writing clean, maintainable code.",
      ]

    },
     {
      id: 1,
      companyName : 'BGIS',
      position: 'Senior UI/UX Designer and Developer',
      techStack: ['HTML5', 'CSS3', 'Angular 6+', 'Typescript', 'SASS', 'Bootstrap4', 'jQuery', 'JSON', 'AJAX', 'Angular Material', 'Angular Them', 'Carbon Design System',
      'JIRA', 'GIT', 'AdobeXD'],
      // tslint:disable-next-line: max-line-length
      description: 'Brookfield Global Integrated Solutions is one of the largest providers of property management and project delivery services',
      companyLogo: 'bgis.png',
      imgAltText:  'BGIS logo',
      companyLogoWidth: '100%',
      timeline: 'Feb 2020 – Apr 2020 (Covid-19 lay-offs)',
      internalProjects:[  ],
      projectDetail:['Worked with the team to develop a BGIS design system combining both Angular material and Carbon Design System using Sketch, Figma, and AdobeXD',
      'Worked on projects such as global navigation system, customer service request, and support platforms for re-designing and developing, involving user research, interviews, personas, storyboarding along with daily communications with solution consultants, product owners, marketing, and business teams.',
      'Creating custom design and functional components for a new design system in Angular for data binding, Access control, client-side validation, Error handling, etc. ']
    },
     {
      id: 2,
      companyName : 'ISDR',
      position: 'UI/UX Developer',
      techStack: ['HTML5', 'CSS', 'Bootstrap4', 'jQuery', 'Angular 4+', 'Typescript'],
      // tslint:disable-next-line: max-line-length
      description: 'Issuer Direct Corporation is a public listed USA based company, it provides services such as communications and compliance based on the needs of corporate issuers.',
      companyLogo: 'isdr.png',
      imgAltText:  'Issuer direct logo',
      companyLogoWidth: '100%',
      timeline: 'April 2018 - December 2019',
      internalProjects:[
        'PlatformID'
      ],
      projectDetail: [
        "Worked with product managers and UX designers to translate project requirements and business objectives into polished user interfaces.",
        'Developed a modern and responsive User Interface for a "subscription-based service platform" which follows the eCommerce concept, using the latest JavaScript framework Angular 2. Moreover, we gradually upgraded the version of angular from version 2 to Angular 4,5,6,7,8.',
        "Generated Mockups and Wireframes using Balsamiq Wireframes software and Adobe XD, which was then used to develop templates using HTML5, CSS3, SASS, and Bootstrap Grid.",
        "Faster page load, performance enhancements, and access control, and client-side validation achieved with the implementation of Angular routing, Lazy loading, Breadcrumbs, Route Guard.",
        "Took Object-Oriented programming approach using Typescript as a scripting language with VS Code as IDE. Which helped to write clean, maintainable, easy to read code due to its features such as Compilation time error detection, IntelliSense, strict type support, etc.",
        "Followed Module, Component structure for project development as well as DOM manipulation was managed with default/custom Directives, Pipes. Asynchronous data response and error handling implemented in Services using RxJS Observables and pipe methods.",
        "Worked with cross components communication using Services, @Input, and @Output decorators, EventEmitter, and ViewChild methods.",
        "Implemented Client-side validation with Angular Form groups. Also, two-factor verification for better security.",
        "A smooth and consistent flow of design achieved with custom created Angular Material Theme. Moreover, reusable style components were added with SASS implementation. ",
        "Established methods in Angular Services for back-end communications using HTTPClinet module, Observables from RxJs library. Implemented a contract between view and database using Client-side Models. Experience working with REST API, Headers, Tokens, Authorization, and Authentication",
        "Jasmine test framework used to write Unit test cases for classes and functions. I have used Angular TestBed, TestingModule with various methods such as beforeEach, afterEach. For HTTP methods HttpClientTestingModule and HttpTestingController",
        "Participated in the development of global API service(created as node package) and extended its functionality to local services through which common requests such as List, Save, Update, Create, Post, Put, Get, Delete, Pagination, etc. were handled throughout the project.",
      ],
    }
  ];
  showTitle = false;



  constructor(public dialog: MatDialog,
              // tslint:disable-next-line: variable-name
              private _router: Router,
              private el: ElementRef,
              private renderer: Renderer2,
              private projectService: SelectedProjectService) { }

  ngOnInit() {
   this.showTitle = this._router.url === '/projects' ? true : false;
  }

  ngAfterViewInit(): void {
   this.getCardEl = this.el.nativeElement.querySelector('.card-project');
  }

  showProjectDetail(job) {
    const companyName = job.companyName;
    this.projectService.getSelectedProject(job);
    this._router.navigate([`projects/${companyName}`]);
  }

  // getWorkExpProj

}

