import store from "./localStorage.js";
const $ = (select) => document.querySelector(select);

class App {
  constructor(el) {
    this.el = el;
    this.$ = (select) => document.querySelector(select);
    this.menu = { items: new Array() };
    this.current = "items";
  }

  render() {
    const template = this.menu[this.current]
      .map((item, idx) => {
        return `<li class="item" data-itme-id="${item.id}" data-itme-idx="${idx}"><textarea class="note">${item.content}</textarea>
          <button type="button" class="delet">Delete</button>
        </li>`;
      })
      .join("");

    this.$(".sticky-list").innerHTML = template;
  }

  addNote() {
    const noteObject = {
      id: Math.floor(Math.random() * 100000),
      content: "",
    };
    this.menu[this.current].push(noteObject);
    store.setLocalStorage("skick", this.menu); //상태가 변하는 시졈에 localStorage에 데이터를 저장한다.
    this.render();
  }

  updateNote(e) {
    const itmeIdx = e.target.closest(".item").dataset.itmeIdx;
    const noteValue = e.target.closest(".item").querySelector(".note");
    this.menu[this.current][itmeIdx].content = noteValue.value;
    store.setLocalStorage("skick", this.menu);
  }

  deletNote(e) {
    if (confirm("정말 삭제하시겠습니까?")) {
      const itmeId = Number(e.target.closest(".item").dataset.itmeId);
      const notes = this.menu[this.current].filter(
        (note) => note.id !== itmeId
      );
      this.menu[this.current] = notes;

      store.setLocalStorage("skick", this.menu);
      this.render();
    }
  }

  init() {
    if (store.getLocalStorage("skick")) {
      this.menu = store.getLocalStorage("skick");
      this.render();
    }
  }
}

const app = new App();
app.init();

$(".add-note").addEventListener("click", () => app.addNote());
$(".sticky-list").addEventListener("change", (e) => {
  if (e.target.classList.contains("note")) {
    app.updateNote(e);
  }
});
$(".sticky-list").addEventListener("click", (e) => {
  if (e.target.classList.contains("delet")) {
    app.deletNote(e);
  }
});
