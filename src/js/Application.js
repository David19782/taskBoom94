import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }
  setEmojis(emojis) {
    this.emojis = emojis;
    this.addBananas();
    console.log(this.emojis)
    let d = document.getElementById("emojis");
    d.innerHTML = "";
    this.emojis.forEach(el => {
      let p = document.createElement("p");
      p.textContent = el;
      d.appendChild(p);
    })
    
  }

  addBananas() {
  //  console.log(this.emojis);
    this.emojis = this.emojis.map(el => {
      return el + this.banana;  
    })
   // console.log(this.emojis)
  }
}
