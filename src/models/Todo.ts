class TodoLi {
  id: string;
  text: string;

  constructor(LearnText: string) {
    this.text = LearnText;
    this.id = new Date().toISOString();
  }
}

export default TodoLi;
