export class experienceProj {
  public id:string;
  public companyName: string;
  public position:string;
  public techStack: Array<''>;
  public description: string;
  public companyLogo: string;
  public imgAltText: string;
  public companyLogoWidth: string;
  public timeline: string;
  public internalProjects: Array<''>;
  public projectDetail: Array<''>;

  constructor () {
    this.id = '';
    this.companyName = '';
    this.position = '';
    this.techStack = [''];
    this.description = '';
    this.companyName = '';
    this.imgAltText = '';
    this.companyLogoWidth = '';
    this.timeline = '';
    this.internalProjects = [''];
    this.projectDetail = ['']
  }
}
