import { t } from '../i18n';
import { getRandomPill, loc, locArr, type Topic, type LearningPill } from '../content';
import { getRewardTier, QUIZ_REWARDS } from '../config';
import { addResources, addCompletedPill, getState } from '../state';
import { showModal, closeModal } from './modals';
import { showToast } from './toast';

export function openLearnModal(onDone: () => void): void {
  const div = document.createElement('div');
  div.className = 'learn-modal';

  div.innerHTML = `
    <h2>${t('learn.title')}</h2>
    <div class="topic-list">
      <button class="topic-btn" data-topic="general">
        <strong>${t('learn.general')}</strong>
        <span>${t('learn.generalDesc')}</span>
      </button>
      <button class="topic-btn" data-topic="language">
        <strong>${t('learn.language')}</strong>
        <span>${t('learn.languageDesc')}</span>
      </button>
      <button class="topic-btn" data-topic="programming">
        <strong>${t('learn.programming')}</strong>
        <span>${t('learn.programmingDesc')}</span>
      </button>
    </div>
  `;

  div.querySelectorAll('.topic-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const topic = (btn as HTMLElement).dataset.topic as Topic;
      const pill = getRandomPill(topic, getState().completedPills);
      if (!pill) return;
      closeModal();
      showPill(pill, onDone);
    });
  });

  showModal(div);
}

function showPill(pill: LearningPill, onDone: () => void): void {
  const div = document.createElement('div');
  div.className = 'pill-modal';
  div.innerHTML = `
    <h2>${loc(pill.title)}</h2>
    <div class="pill-body">${loc(pill.body).replace(/\n/g, '<br>')}</div>
    <button class="btn-primary" id="btn-quiz">${t('learn.answerQuestions')}</button>
  `;

  showModal(div);

  div.querySelector('#btn-quiz')!.addEventListener('click', () => {
    closeModal();
    startQuiz(pill, onDone);
  });
}

function startQuiz(pill: LearningPill, onDone: () => void): void {
  let currentQ = 0;
  let correctCount = 0;

  function showQuestion(): void {
    const q = pill.questions[currentQ];
    const div = document.createElement('div');
    div.className = 'quiz-modal';

    div.innerHTML = `
      <h3>${t('learn.question')} ${currentQ + 1} / ${pill.questions.length}</h3>
      <p class="quiz-text">${loc(q.text)}</p>
      <div class="quiz-options" id="quiz-options"></div>
      <div class="quiz-feedback" id="quiz-feedback"></div>
    `;

    const optionsEl = div.querySelector('#quiz-options')!;
    const feedbackEl = div.querySelector('#quiz-feedback') as HTMLElement;
    const options = locArr(q.options);

    options.forEach((opt, idx) => {
      const btn = document.createElement('button');
      btn.className = 'quiz-option';
      btn.textContent = `${String.fromCharCode(65 + idx)}) ${opt}`;
      btn.addEventListener('click', () => {
        // Disable all
        optionsEl.querySelectorAll('button').forEach(b => {
          (b as HTMLButtonElement).disabled = true;
        });

        if (idx === q.correctIndex) {
          btn.classList.add('correct');
          correctCount++;
          feedbackEl.innerHTML = `<span class="fb-correct">${t('learn.correct')}</span><p>${loc(q.explanation)}</p>`;
        } else {
          btn.classList.add('incorrect');
          optionsEl.children[q.correctIndex]?.classList.add('correct');
          feedbackEl.innerHTML = `<span class="fb-incorrect">${t('learn.incorrect')}</span><p>${loc(q.explanation)}</p>`;
        }

        const nextBtn = document.createElement('button');
        nextBtn.className = 'btn-primary quiz-next';
        nextBtn.textContent = currentQ < pill.questions.length - 1 ? t('learn.next') : t('learn.backToGarden');
        feedbackEl.appendChild(nextBtn);

        nextBtn.addEventListener('click', () => {
          closeModal();
          currentQ++;
          if (currentQ < pill.questions.length) {
            showQuestion();
          } else {
            showResults(pill, correctCount, onDone);
          }
        });
      });
      optionsEl.appendChild(btn);
    });

    showModal(div);
  }

  showQuestion();
}

function showResults(pill: LearningPill, correct: number, onDone: () => void): void {
  const total = pill.questions.length;
  const tier = getRewardTier(correct, total);
  const rewards = QUIZ_REWARDS[tier];

  addCompletedPill(pill.id);
  if (tier !== 'none') {
    addResources(rewards);
  }

  let heading = t('learn.keepTrying');
  if (tier === 'perfect') heading = t('learn.perfect');
  else if (tier === 'great') heading = t('learn.almost');
  else if (tier === 'good') heading = t('learn.good');

  const div = document.createElement('div');
  div.className = 'results-modal';
  div.innerHTML = `
    <h2>${heading}</h2>
    <p>${correct}/${total}</p>
    ${tier !== 'none' ? `
      <div class="rewards-list">
        ${rewards.water ? `<span>+${rewards.water} ${t('resources.water')}</span>` : ''}
        ${rewards.fertilizer ? `<span>+${rewards.fertilizer} ${t('resources.fertilizer')}</span>` : ''}
        ${rewards.sun ? `<span>+${rewards.sun} ${t('resources.sun')}</span>` : ''}
        ${rewards.points ? `<span>+${rewards.points} ${t('resources.points')}</span>` : ''}
      </div>
    ` : `<p>${t('learn.noRewards')}</p>`}
    <div class="results-buttons">
      <button class="btn-primary" id="btn-garden">${t('learn.backToGarden')}</button>
      <button class="btn-secondary" id="btn-more">${t('learn.learnMore')}</button>
    </div>
  `;

  showModal(div);

  div.querySelector('#btn-garden')!.addEventListener('click', () => {
    closeModal();
    onDone();
  });
  div.querySelector('#btn-more')!.addEventListener('click', () => {
    closeModal();
    openLearnModal(onDone);
  });
}
