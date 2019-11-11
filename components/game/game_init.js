class Game_init {

    constructor() {}
  
    static actual_theme = null;
    static quizz = [];
    static answers = [];
    static actual_id_quizz = -1;
  
  
    static set_actual_theme (theme) {
      return this.actual_theme  = theme;
    }
  
    static get_actual_theme () {
      return this.actual_theme;
    }
  
    static set_quizz (quizz) {
      return this.quizz  = quizz;
    }
  
    static get_quizz () {
      return this.quizz;
    }
  
    static get_actual_quizz () {
  
      const theme = Game_init.get_actual_theme();
      const id_quizz = Game_init.get_actual_id_quizz();
      const quiz = theme.quizz[id_quizz];
  
      return quiz;
    }
  
    static set_actual_id_quizz (actual_id_quizz) {
      return this.actual_id_quizz  = actual_id_quizz;
    }
  
    static get_actual_id_quizz () {
      return this.actual_id_quizz;
    }
  
  
    static set_genarate_quizz () {
  
      Game_init.set_quizz(Game_init.get_actual_theme().quizz);
      Game_init.set_actual_id_quizz(0);
      this.answers = new Array(Game_init.get_quizz().length);
  
    }
  
  
    static correct_answer (quiz, option) {
      if (quiz.quiz_option_code == option.code) {
        return true;
      } else {
        return false;
      }
    }
  
    static update (option) {
      var quiz = Game_init.get_actual_quizz();
      this.answers[Game_init.get_actual_id_quizz()]  = Game_init.correct_answer(quiz, option);
    }
  
    static next_question () {
      Game_init.set_actual_id_quizz (Game_init.get_actual_id_quizz () + 1);
    }
  
    static quizz_ending () {
      return (Game_init.get_actual_id_quizz () < Game_init.get_quizz().length-1);
    }
  
    static nb_correct_answers () {
      var count_correct_answers = 0;
      for (let i = 0; i < this.answers.length; i++) {
        if (this.answers[i]) {
          count_correct_answers ++;
        }
      }
      return count_correct_answers;
    }
  
  
  }
  
  export default Game_init;