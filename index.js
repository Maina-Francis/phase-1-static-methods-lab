class Formatter {
  //add static methods here
  static capitalize(str) {
    //capitalize the first letter of the str
    return str[0].toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    // removes all non-alphanumeric characters except for dashes, single quotes and spaces
    return str.replace(/[^A-Za-z0-9\-\'\ ]/g, "");
  }

  static titleize(str) {
    let arr = str.split(" ");
    let arrCapitalized = arr.map((words) => {
      let term = words.toLowerCase();
      let correctCase;
      if (
        term !== "the" &&
        term !== "a" &&
        term !== "an" &&
        term !== "but" &&
        term !== "of" &&
        term !== "and" &&
        term !== "for" &&
        term !== "at" &&
        term !== "by" &&
        term !== "from"
      ) {
        correctCase = term.replace(term[0], term[0].toUpperCase());
      } else {
        correctCase = term;
      }
      return correctCase;
    });
    let subject = arrCapitalized.join(" ");
    subject = subject.replace(subject[0], subject[0].toUpperCase());
    return subject;
  }
}
