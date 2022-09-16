//Напиши класс Notes который управляет коллекцией заметок в
//свойстве items.
//Заметка это объект со свойствами text priority
//Добавь классу статическое свойство Priopity,
//в котором будет храниться объект с приоритетами.
//Добавь методы addNote(note), removeNote(text)
//updatePriority(text, newPriority)
// Статический метод:
// {
//   HIGHT: "hight",
//   LOW: "low",
// }

class Notes {
  static Priority() {
    return {
      HIGHT: "hight",
      LOW: "low",
  }
  };

  constructor() {
    this.items = [];
  };

  addNote(note) {
    this.items.push(note);
  }

  removeNote(text) {
    const noteIndex = this.items.findIndex(element => element.text === text);
    if(noteIndex === -1) {
      console.log('Нет такой заметки');
      return;
    }
      this.items.splice(noteIndex, 1);
  }

  updatePriority(text, newPriority) {
    const noteIndex = this.items.findIndex(element => element.text === text);
    if(noteIndex === -1) {
      console.log(`Сорян! Нет такой заметки: "${text}"`);
      return;
    }
    this.items[noteIndex].priority = newPriority;
  }
  }

const notes = new Notes();
notes.addNote({text:'Первая заметка', priority: Notes.Priority().HIGHT});
notes.addNote({text:'Вторая заметка', priority: Notes.Priority().LOW});
notes.addNote({text:'Третья заметка', priority: Notes.Priority().LOW});
notes.removeNote('Первая заметка');
notes.updatePriority('Втора заметка', Notes.Priority().HIGHT);
console.log(notes);