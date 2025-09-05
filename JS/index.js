const getId = (id) => document.getElementById(id);

const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLessons(data.data));
};

const displayLessons = (lessons) => {
  const vocabContainer = getId("vocab-container");
  vocabContainer.innerHTML = "";

  lessons.forEach(lesson => { console.log(lesson)
    
    const lessonButton = document.createElement("div")
    lessonButton.innerHTML = `
        <button class="btn btn-outline btn-primary whitespace-nowrap"><img src="./assets/fa-book-open.png" alt="">Lesson ${lesson.level_no}</button>
    `
    vocabContainer.append(lessonButton)
  });
};

loadLessons();