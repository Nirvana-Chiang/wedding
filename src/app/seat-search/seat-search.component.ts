import { Component } from '@angular/core';

@Component({
  selector: 'app-seat-search',
  templateUrl: './seat-search.component.html',
  styleUrls: ['./seat-search.component.css']
})
export class SeatSearchComponent {
  public showQuestion: number = 1;
  public q1Ans:string = '0';
  public q1list = qlist;
  public q2Ans:string = '0';
  public q2list = q2list;
  public q3Ans:string = '0';
  public q23list = q23list;
  public isShowSeat: boolean = false;
  public answer: Answer | null = null;


  setQ1Ans(key: string){
    if(key === this.q1Ans) { return; }
    this.q1Ans = key;
    this.q2Ans = '0'; this.q3Ans = '0';
    const isNoNext = this.checkAns();
    this.showQuestion = isNoNext ? 1 : 2;
  }

  setQ2Ans(key: string){
    if(key === this.q2Ans) { return; }
    this.q2Ans = key;
    this.q3Ans = '0';
    const isNoNext = this.checkAns();
    this.showQuestion = isNoNext ? 2 : 3;
  }

    setQ3Ans(key: string){
    if(key === this.q3Ans) { return; }
    this.q3Ans = key;
    const isNoNext = this.checkAns();
  }

  checkAns(): boolean{
    const ans = this.q1Ans + this.q2Ans + this.q3Ans;
    const isHadAns = AnsList.hasOwnProperty(ans);
    this.answer = isHadAns ? AnsList[ans] : null;
    this.isShowSeat = isHadAns;
    return isHadAns;
  }
}

interface Option {
  key: string,
  value: string
}

interface Answer {
  ans: string,
  cookies?: string,
  id: string[]
}

const qlist: Option[] = [
  { key: '1', value: '宥成'},
  { key: '2', value: '昱珊'},
  { key: '3', value: '雙方'},
];

const q2list: Option[] = [
  { key: '1', value: '高中社團'},
  { key: '2', value: '高中共同朋友'},
  { key: '3', value: '大學社團'},
  { key: '4', value: '大學學生會'},
  { key: '5', value: '金馬'},
  { key: '6', value: '蘭嶼'},

];

const q23list: Option[] = [
  { key: '1', value: '是'},
  { key: '2', value: '不是'},
];

const AnsList: Record<string, Answer> = {
  300: { ans: '中刊人', id: ['rect-r3l', 'rect-r3r'], cookies: '榕、琪、芊'},
  210: { ans: '中刊人', id: ['rect-r3l', 'rect-r3r'], cookies: '榕、琪、芊'}, 
  220: { ans: '交友小包廂', id: ['rect-small'], }, 
  232: { ans: '交友小包廂', id: ['rect-small'], cookies: '所有人'}, 
  231: { ans: '漂亮女生', id: ['rect-r2r'], }, 
  240: { ans: '學生會', id: ['rect-r1l', 'rect-r1r'], cookies: '尚毅夫、Rainy、+><'}, 
  250: { ans: '漂亮女生', id: ['rect-r2r'], }, 
  260: { ans: '漂亮女生', id: ['rect-r2r'], }, 
  
}